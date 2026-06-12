import { FoundationPage } from "@/components/layout/foundation-page";

type CollectionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;

  return (
    <FoundationPage
      description="Seasonal collection pages are ready for curated drops such as Winter Picks, New Arrivals, and Denim Drop."
      eyebrow="Seasonal collection"
      title={slug.replaceAll("-", " ")}
    />
  );
}
