"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import FamilyRoomCard from "./cards/FamilyRoomCard";
import TabFilterForFamilyRooms from "./TabFilterForFamilyRooms";
import { apiClient } from "@/lib/apis-client";

export function NoRoomsFound({ group }) {
  const label = group === "all" ? "families" : `${group} families`;
  return (
    <div className="w-full min-h-55 rounded-2xl border border-dashed border-muted flex flex-col items-center justify-center gap-3 p-6 text-center bg-light/40">
      <span className="text-4xl">🏡</span>
      <div>
        <p className="text-base font-semibold text-primary">
          No more rooms found
        </p>
        <p className="text-sm text-dark/55 mt-1">
          We couldn&apos;t find more rooms for {label} right now.
        </p>
      </div>
    </div>
  );
}

export default function FamilyRoomsClient({ initialRooms, totalPage }) {
  const [rooms, setRooms] = useState(initialRooms);
  const [pageCount, setPageCount] = useState(totalPage);
  const [activeGroup, setActiveGroup] = useState("all");
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = async (selectedGroup) => {
    setActiveGroup(selectedGroup);

    startTransition(async () => {
      const res = await apiClient.getRoomsByCategory(
        `family-friendly`,
        `capacity=${selectedGroup}`,
      );
      setRooms(res?.data || []);
      setPageCount(res?.totalPages);
    });
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-8 md:mb-10">
        <div className="font-primary">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-secondary mb-2">
            Family-friendly
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-primary leading-tight">
            Need a <em className="not-italic font-bold font-secondary">VILA</em>{" "}
            for <em className="not-italic text-highlight">your family</em>
          </h2>
        </div>

        <TabFilterForFamilyRooms
          activeGroup={activeGroup}
          onFilterChange={handleFilterChange}
          className={"bg-light text-primary"}
        />
      </div>

      <div
        className={`transition-opacity duration-200 ${isPending ? "opacity-50 pointer-events-none" : "opacity-100"}`}
      >
        {rooms?.length === 0 ? (
          <NoRoomsFound group={activeGroup} />
        ) : (
          <div className="grid grid-cols-12 gap-4 md:gap-6 animate-fadeIn">
            {rooms?.map((room, i) => (
              <FamilyRoomCard
                key={room._id}
                room={room}
                index={i}
                isHero={i === 0}
              />
            ))}
            {rooms?.length < 7 && (
              <div className="col-span-12 sm:col-span-6 md:col-span-3">
                <NoRoomsFound group={activeGroup} />
              </div>
            )}
          </div>
        )}
      </div>

      {pageCount > 1 && (
        <div className="mx-auto w-fit my-10">
          <Link
            href="/rooms/family-friendly-rooms"
            className="btn-rounded-outline text-primary hover:bg-primary hover:text-light"
          >
            See More →
          </Link>
        </div>
      )}
    </section>
  );
}
