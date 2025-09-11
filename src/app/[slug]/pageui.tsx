export default function PageUI({ node }: { node: any }) {
  let imageUrl: string | null = null;

  // ✅ Handle testImg safely
  if (node.testpageQL?.testImg) {
    const img = node.testpageQL.testImg;
    if (typeof img === "string") {
      imageUrl = img;
    } else if (img?.node?.sourceUrl) {
      imageUrl = img.node.sourceUrl;
    } else if (img?.url) {
      imageUrl = img.url;
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-4">{node.title}</h1>

      <div className="space-y-4">
        {imageUrl && (
          <img src={imageUrl} alt="Test" className="rounded-md border" />
        )}
        {node.testpageQL?.number && (
          <p>
            <strong>Number:</strong> {node.testpageQL.number}
          </p>
        )}
        {node.testpageQL?.emailAddress && (
          <p>
            <strong>Email:</strong> {node.testpageQL.emailAddress}
          </p>
        )}
        {node.testpageQL?.description && <p>{node.testpageQL.description}</p>}
      </div>

      <div dangerouslySetInnerHTML={{ __html: node.content }} />
    </main>
  );
}
