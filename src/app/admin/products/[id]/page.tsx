import { FoundationPage } from "@/components/layout/foundation-page";

type AdminProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminProductPage({ params }: AdminProductPageProps) {
  const { id } = await params;

  return (
    <FoundationPage
      description="The edit product route is ready for product updates, inventory state, and admin-only visibility controls."
      eyebrow="Admin"
      title={`Edit Product ${id}`}
    />
  );
}
