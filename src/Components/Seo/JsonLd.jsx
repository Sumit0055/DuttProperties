/**
 * Renders structured data. Kept as a server component so the JSON-LD lands in
 * the initial HTML (crawlers do not execute client-side scripts reliably).
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
