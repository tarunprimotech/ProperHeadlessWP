// app/draft/[slug]/page.tsx
// import { getDraftPostBySlug } from '@/lib/getDraftPostBySlug';
import { getDraftPostBySlug } from '@/lib/GraphQL/AllBlogs/getDraftPostBySlug';
import { notFound } from 'next/navigation';

export default async function DraftPostPage({ params }: { params: { slug: string } }) {
  const post = await getDraftPostBySlug(params.slug);

  if (!post || (post.status !== 'draft' && post.status !== 'pending')) {
    return notFound(); // show 404 if not found or not a draft/pending post
  }

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
