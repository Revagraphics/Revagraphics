import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function Seo({
  title = "Reva Graphics",
  description = "Creative design and digital solutions by Reva Graphics.",
  noIndex = false,
}) {
  const location = useLocation();

  const url = `https://revagraphics.com${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* SEO */}
      <meta name="robots" content={noIndex ? "noindex, follow" : "index, follow"} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
