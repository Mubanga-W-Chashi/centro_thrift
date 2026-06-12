import { FoundationPage } from "@/components/layout/foundation-page";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  return (
    <FoundationPage
      description="Product detail pages are ready for gallery images, size, condition, stock state, and reservation actions."
      eyebrow="Product"
      title={slug.replaceAll("-", " ")}
    />
  );
}
