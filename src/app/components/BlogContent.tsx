


"use client";

import { useState } from "react";

interface BlogContentProps {
  content: string;
  previewWords?: number; // optional, default 50 words
}

export default function BlogContent({ content, previewWords = 200 }: BlogContentProps) {
  const [expanded, setExpanded] = useState(false);

  // Remove HTML tags
  const plainText = content.replace(/<[^>]+>/g, "");
  const words = plainText.split(" ");
  const previewText =
    words.length > previewWords
      ? words.slice(0, previewWords).join(" ") + "..."
      : plainText;

  return (
    <div>
      {expanded ? (
        <div
          className="prose max-w-full dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p className="text-gray-300 leading-relaxed">{previewText}</p>
      )}

      {words.length > previewWords && (
        <div className="mt-6 text-center">
 <button
  onClick={() => setExpanded(!expanded)}
  className={`px-6 py-2 font-medium rounded transition
    border border-[#F08705] text-white
    ${expanded ? 'bg-[#E98305] text-[#070707]' : 'bg-transparent'}`}
>
  {expanded ? (
    <>
      Show Less <span className="ml-1">↑</span>
    </>
  ) : (
    <>
      Read Full Blog <span className="ml-1">↓</span>
    </>
  )}
</button>
        </div>
      )}
    </div>
  );
}
