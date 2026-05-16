import { apiServer } from "@/lib/apis-server";
import Link from "next/link";
import React from "react";
import BudgetFriendlyRoomCard from "../cards/BudgetFriendlyRoomCard";
import ErrorMessage from "@/shared/components/ErrorMessage";

const BudgetFriendlyRooms = async () => {
  const res = await apiServer.getRoomsByCategory("budget-friendly");
  const rooms = res?.data || [];

  if (!res?.success || !rooms.length) {
    return <ErrorMessage message={res?.message} />;
  }

  return (
    <section className="py-24 text-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">
              Smart Comfort
            </h2>
            <p className="text-muted/80 mt-2 tracking-widest uppercase text-xs font-bold">
              Essential Luxury • Affordable Rates
            </p>
          </div>
        </div>

        {/* Unique Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {rooms.map((room, index) => (
            <BudgetFriendlyRoomCard key={room._id} index={index} room={room} />
          ))}
        </div>

        <div className="mx-auto w-fit my-10">
          <Link
            href="/rooms"
            className="btn-rounded-outline text-primary hover:bg-primary hover:text-light"
          >
            See More →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BudgetFriendlyRooms;
