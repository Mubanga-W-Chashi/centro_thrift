import { FoundationPage } from "@/components/layout/foundation-page";

type AdminOrderPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminOrderPage({ params }: AdminOrderPageProps) {
  const { id } = await params;

  return (
    <FoundationPage
      description="The order detail route is ready for payment status, item totals, and delivery scheduling."
      eyebrow="Admin"
      title={`Order ${id}`}
    />
  );
}
