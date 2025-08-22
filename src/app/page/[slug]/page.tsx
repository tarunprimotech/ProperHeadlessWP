import client from '@/lib/apolloClient';
import { GET_PAGE_BY_SLUG } from '@/lib/GraphQL/singlePost';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  // Fetch the page by slug
  const { data } = await client.query({
    query: GET_PAGE_BY_SLUG,
    variables: { slug: params.slug },
  });

  const page = data?.page;

  // If no page is found, show 404
  if (!page) return notFound();

  const { title, content, forNextJsFields, template } = page;

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />

      {/* ✅ Conditionally show ACF fields for ForNextJs template */}
      {template?.templateName === 'ForNextJs' && forNextJsFields && (
        <section className="mt-8 border-t pt-4">
          <h2 className="text-xl font-semibold">Custom ACF Fields</h2>

          {/* ACF text field */}
          <p className="mb-2">
            <strong>Blog Heading:</strong> {forNextJsFields.blogHeading}
          </p>

          {/* ACF image field */}
          {forNextJsFields.featuredImg && (
            <div>
              <img
                src={forNextJsFields.featuredImg}
                alt="Featured"
                className="w-full max-w-md"
              />
            </div>
          )}
        </section>
      )}
    </main>
  );
}
