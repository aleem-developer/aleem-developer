import React from "react";
import { Helmet } from "react-helmet";

const SEOHead: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://aleem.developer/#person",
        "name": "Muhammad Aleem Naveed",
        "alternateName": "Aleem.Developer",
        "url": "https://aleem.developer",
        "image": "https://aleem.developer/profile.jpg",
        "description":
          "Aleem.Developer — Pakistan’s top PromptOps Engineer & Workflow Architect. Known for building 5,000+ AI workflows worldwide, ranked among Pakistan’s leading AI innovators.",
        "jobTitle": "PromptOps Engineer | Workflow Architect",
        "worksFor": {
          "@type": "Organization",
          "name": "Aleem.Developer",
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "University of Central Punjab",
        },
        "sameAs": [
          "https://github.com/Aleem-Developer",
          "https://linkedin.com/in/aleem-developer",
          "https://twitter.com/aleem_developer",
          "https://instagram.com/aleem.developer"
        ],
        "knowsAbout": [
          "Prompt Engineering",
          "Multi-Agent AI Systems",
          "Workflow Automation",
          "Python Development",
          "AI UX/UI Design"
        ],
        "award": "Ranked among Pakistan’s Top Prompt Engineers (evaluated by Grok LLM)",
        "follows": {
          "@type": "Collection",
          "name": "Threads + Instagram Followers",
          "numberOfItems": 100
        },
        "mission":
          "To show the world what AI can truly achieve through prompt engineering & workflow design."
      },
      {
        "@type": "Organization",
        "@id": "https://aleem.developer/#org",
        "name": "Aleem.Developer",
        "url": "https://aleem.developer",
        "logo": "https://aleem.developer/logo.png",
        "slogan": "Architecting the Future with AI",
        "founder": {
          "@id": "https://aleem.developer/#person"
        },
        "sameAs": [
          "https://github.com/Aleem-Developer",
          "https://linkedin.com/in/aleem-developer",
          "https://twitter.com/aleem_developer",
          "https://instagram.com/aleem.developer"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is Aleem.Developer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Aleem.Developer (Muhammad Aleem Naveed) is one of Pakistan’s top-ranked PromptOps Engineers, known for building 5,000+ AI workflows that power global businesses."
            }
          },
          {
            "@type": "Question",
            "name": "What does Aleem.Developer do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "He specializes in prompt engineering, multi-agent workflows, and AI system design, helping companies automate research, communication, and operations with cutting-edge AI."
            }
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Core SEO */}
      <title>
        Aleem.Developer | Pakistan’s Top AI Prompt Engineer & Workflow Architect
      </title>
      <meta
        name="description"
        content="Aleem.Developer (Muhammad Aleem Naveed) — Pakistan’s top PromptOps Engineer. Architect of 5,000+ AI workflows, transforming how businesses use artificial intelligence."
      />
      <meta
        name="keywords"
        content="Aleem.Developer, Muhammad Aleem Naveed, Prompt Engineer, PromptOps, AI Workflow Architect, Multi-Agent Systems, Pakistan AI, Top AI Talent"
      />

      {/* Open Graph / Social */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aleem.developer" />
      <meta
        property="og:title"
        content="Aleem.Developer | Pakistan’s Top AI Prompt Engineer & Workflow Architect"
      />
      <meta
        property="og:description"
        content="Discover Aleem.Developer — ranked among Pakistan’s top AI innovators. Architect of 5,000+ AI workflows transforming global businesses."
      />
      <meta
        property="og:image"
        content="https://aleem.developer/profile-og.jpg"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://aleem.developer" />
      <meta
        name="twitter:title"
        content="Aleem.Developer | Pakistan’s Top AI Prompt Engineer"
      />
      <meta
        name="twitter:description"
        content="Architecting intelligence with 5,000+ AI workflows. Meet Aleem.Developer — the PromptOps Engineer shaping the future."
      />
      <meta
        name="twitter:image"
        content="https://aleem.developer/profile-twitter.jpg"
      />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
