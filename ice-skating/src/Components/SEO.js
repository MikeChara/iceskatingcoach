import { Helmet } from "react-helmet";

function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Slough Ice Arena",
    description: "Ice skating lessons in Slough with Coach Chantelle A' Court.",
    image: "https://coachchantelle.app/chantelle-ice-skating-lessons.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Montem Ln",
      addressLocality: "Slough",
      addressRegion: "Berkshire",
      postalCode: "SL1 2QG",
      addressCountry: "UK",
    },
    areaServed: ["Slough", "West London", "Surrounding Areas"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.51069093183828,
      longitude: -0.6091409746804808,
    },
    telephone: "+44",
    url: "https://coachchantelle.app",
  };

  return (
    <Helmet>
      {/* SEO */}
      <title>Ice Skating Lessons in Slough | Chantelle A' Court</title>
      <meta
        name="description"
        content="Private ice skating lessons in Slough. Join Chantelle A' Court at Slough Ice Arena—beginner to advanced!"
      />
      <link rel="canonical" href="https://coachchantelle.app" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Ice Skating Lessons in Slough | Chantelle A' Court"
      />
      <meta
        property="og:description"
        content="Private ice skating lessons in Slough. Beginner to advanced coaching at Slough Ice Arena."
      />
      <meta
        property="og:image"
        content="https://coachchantelle.app/chantelle-ice-skating-lessons.jpg"
      />
      <meta property="og:url" content="https://coachchantelle.app" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Ice Skating Lessons in Slough | Chantelle A' Court"
      />
      <meta
        name="twitter:description"
        content="Private ice skating lessons in Slough—expert coaching at Slough Ice Arena."
      />
      <meta
        name="twitter:image"
        content="https://coachchantelle.app/chantelle-ice-skating-lessons.jpg"
      />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

export default SEO;
