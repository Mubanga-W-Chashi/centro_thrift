import { FoundationPage } from "@/components/layout/foundation-page";

type AdminReservationPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminReservationPage({
  params,
}: AdminReservationPageProps) {
  const { id } = await params;

  return (
    <FoundationPage
      description="The reservation detail route is ready for inventory locks, expiry state, and payment handoff."
      eyebrow="Admin"
      title={`Reservation ${id}`}
    />
  );
}
