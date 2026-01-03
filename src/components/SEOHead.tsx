import React from "react";
import { Helmet } from "react-helmet";

const SEOHead: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://aleem-developer.vercel.app/#person",
        "name": "Muhammad Aleem Naveed",
        "alternateName": "Aleem.Developer",
        "url": "https://aleem-developer.vercel.app",
        "image": "https://aleem-developer.vercel.app/profile.jpg",
        "description":
          "Aleem.Developer is a freelance Prompt Engineer and Python Developer who helps individuals and businesses get better results from AI through carefully crafted prompts and practical Python solutions.",
        "jobTitle": "Prompt Engineer & Python Developer",
        "sameAs": [
          "https://github.com/Aleem-Developer",
          "https://linkedin.com/in/aleem-developer",
          "https://twitter.com/aleem_developer",
          "https://instagram.com/aleem.developer"
        ],
        "knowsAbout": [
          "Prompt Engineering",
          "AI Prompt Design",
          "Prompt Optimization",
          "Python Development",
          "AI Prompt Consulting"
        ]
      },

      {
        "@type": "Organization",
        "@id": "https://aleem-developer.vercel.app/#org",
        "name": "Aleem.Developer",
        "url": "https://aleem-developer.vercel.app",
        "founder": {
          "@id": "https://aleem-developer.vercel.app/#person"
        }
      },

      {
        "@type": "WebSite",
        "@id": "https://aleem-developer.vercel.app/#website",
        "url": "https://aleem-developer.vercel.app",
        "name": "Hire a Prompt Engineer – Aleem.Developer",
        "publisher": {
          "@id": "https://aleem-developer.vercel.app/#org"
        }
      },

      {
        "@type": "Service",
        "@id": "https://aleem-developer.vercel.app/#prompt-engineering-service",
        "serviceType": "Prompt Engineering & Python Development",
        "provider": {
          "@id": "https://aleem-developer.vercel.app/#org"
        },
        "areaServed": "Worldwide",
        "description":
          "Prompt engineering services, AI prompt optimization, prompt consulting, and Python development for individuals, startups, and businesses."
      },

      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I hire Aleem.Developer as a prompt engineer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. Aleem.Developer offers freelance prompt engineering services to help improve AI outputs and prompt effectiveness."
            }
          },
          {
            "@type": "Question",
            "name": "What services does Aleem.Developer provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Prompt engineering, AI prompt optimization, prompt consulting, and Python development."
            }
          },
          {
            "@type": "Question",
            "name": "Who should hire a prompt engineer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Anyone using AI tools who wants clearer, more accurate, and more useful AI responses."
            }
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* CLIENT-FOCUSED SEO */}
      <title>
        Aleem.Developer – Prompt Engineer for Video & Dev AI Tools
      </title>
     <link rel="icon" href="../contexts/logo1.png" />
      <meta
        name="description"
        content="Hire a freelance Prompt Engineer and Python Developer. Aleem.Developer helps improve AI outputs with well-crafted prompts and builds practical Python solutions."
      />

      <meta
        name="keywords"
        content="hire prompt engineer, prompt engineering services, AI prompt engineer, prompt optimization, python developer for hire, freelance prompt engineer"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aleem-developer.vercel.app" />
      <meta
        property="og:title"
        content="Hire a Prompt Engineer & Python Developer – Aleem.Developer"
      />
      <meta
        property="og:description"
        content="Freelance prompt engineering and Python development services. Get better AI results with expert-crafted prompts."
      />
      <meta
        property="og:image"
        content="https://aleem-developer.vercel.app/profile-og.jpg"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Hire a Prompt Engineer & Python Developer – Aleem.Developer"
      />
      <meta
        name="twitter:description"
        content="Need better AI outputs? Hire a freelance prompt engineer and Python developer."
      />
      <meta
        name="twitter:image"
        content="https://aleem-developer.vercel.app/profile-twitter.jpg"
      />

      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
