// Renders schema.org structured data. `<` is escaped so text can never close the script tag.
export default function JsonLd({ data }) {
  const json = JSON.stringify(data, (_, v) => (v === undefined ? undefined : v)).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
