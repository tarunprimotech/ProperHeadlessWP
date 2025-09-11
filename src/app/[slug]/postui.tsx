export default function PostUI({ node }: { node: any }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-4">{node.title}</h1>

      <p className="text-sm text-gray-300 mb-4">
        Published on {new Date(node.date).toLocaleDateString()}
      </p>

      <div dangerouslySetInnerHTML={{ __html: node.content }} />
    </main>
  );
}
