"use client";

import { useState } from "react";
import FamilyRoomCard from "./cards/FamilyRoomCard";
import TabFilterForFamilyRooms from "./TabFilterForFamilyRooms";

export function NoRoomsFound({ group }) {
  const label = group === "all" ? "families" : `${group} families`;

  return (
    <div className="min-h-62.5 md:min-h-55 rounded-2xl border border-dashed border-muted flex flex-col items-center justify-center gap-3 p-6 text-center bg-light/40">
      <span className="text-4xl">🏡</span>

      <div className="font-(--font-primary)">
        <p className="text-base font-semibold text-primary">
          No rooms available
        </p>

        <p className="text-sm text-dark/55 mt-1">
          We couldn&apos;t find more rooms for {label || ""} right now.
        </p>
      </div>
    </div>
  );
}

export default function FamilyRoomsClient({ rooms }) {
  const [activeGroup, setActiveGroup] = useState("all");

  const filteredRooms = (() => {
    if (activeGroup === "all") return rooms;

    return rooms.filter((r) => {
      if (activeGroup === "small") return r.capacity >= 4 && r.capacity <= 5;

      if (activeGroup === "medium") return r.capacity >= 5 && r.capacity <= 6;

      if (activeGroup === "large") return r.capacity > 6;

      return true;
    });
  })();

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
          setActiveGroup={setActiveGroup}
        />
      </div>

      <div
        key={activeGroup}
        className="grid grid-cols-12 gap-4 md:gap-6 animate-fadeIn"
      >
        {filteredRooms?.map((room, i) => (
          <FamilyRoomCard
            key={room._id}
            room={room}
            index={i}
            isHero={i === 0}
          />
        ))}

        {filteredRooms?.length < 7 && (
          <div className="col-span-6 md:col-span-3">
            <NoRoomsFound group={activeGroup} />
          </div>
        )}
      </div>
    </section>
  );
}
