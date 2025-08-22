import client from "@/lib/apolloClient";
import { gql } from "@apollo/client";

const GET_NODE_BY_URI = gql`
  query GetNodeByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      __typename
      ... on Page {
        id
        title
        content
        testpageQL {
          number
          emailAddress
          description
        }
      }
      ... on Post {
        id
        title
        content
        date
      }
    }
  }
`;

export default async function SingleNode({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const uri = `/${slug}/`;

  const { data } = await client.query({
    query: GET_NODE_BY_URI,
    variables: { uri },
    fetchPolicy: "no-cache",
  });

  const node = data?.nodeByUri;

  if (!node) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-8">
        <p>Not found</p>
      </main>
    );
  }

  // --- Handle testImg (string or object) ---
  let imageUrl: string | null = null;
  if (node.__typename === "Page" && node.testpageQL?.testImg) {
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

  {node.__typename === "Page" && node.testpageQL && (
    <div className="space-y-4">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Test"
          className="rounded-md border"
        />
      )}
      {node.testpageQL.number && (
        <p>
          <strong>Number:</strong> {node.testpageQL.number}
        </p>
      )}
      {node.testpageQL.emailAddress && (
        <p>
          <strong>Email:</strong> {node.testpageQL.emailAddress}
        </p>
      )}
      {node.testpageQL.description && (
        <p>{node.testpageQL.description}</p>
      )}
    </div>
  )}

  {node.__typename === "Post" && (
    <p className="text-sm text-gray-300 mb-4">
      Published on {new Date(node.date).toLocaleDateString()}
    </p>
  )}

  <div dangerouslySetInnerHTML={{ __html: node.content }} />

</main>
  );
}
