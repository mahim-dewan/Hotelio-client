import ErrorMessage from "@/shared/components/ErrorMessage";
import FamilyRoomsClient from "../FamilyRoomsClient";
import { apiServer } from "@/lib/apis-server";

export default async function FamilyRoomsSection() {
  const res = await apiServer.getRoomsByCategory("family-friendly");

  const rooms = res?.data || [];

  if (!res?.success || !rooms.length) {
    return (
      <ErrorMessage message={res?.message} title="Family Friendly Rooms" />
    );
  }

  return <FamilyRoomsClient initialRooms={rooms} totalPage={res?.totalPages} />;
}
