import React from "react";
import { Helmet } from "react-helmet";

function SEO() {
  const jsonLdBusiness = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Slough Ice Arena",
    description: "Ice skating lessons at Slough Ice Rink.",
    image: "https://coachchantelle.app/Chantelle-ice-skating-lessons.jpg",
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
    url: "https://coachchantelle.app",
  };

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>
        Ice Skating Lessons in Slough | Coach Chantelle A&#39; Court
      </title>
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
        content="https://coachchantelle.app/Chantelle-ice-skating-lessons.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
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
        content="https://coachchantelle.app/Chantelle-ice-skating-lessons.jpg"
      />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLdBusiness)}
      </script>
    </Helmet>
  );
}

export default SEO;
