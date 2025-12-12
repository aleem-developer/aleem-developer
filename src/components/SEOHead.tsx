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
          "Aleem.Developer — globally recognized Prompt Engineer, Python Specialist, and AI Practitioner. Creator of advanced LLM workflows, AI tools, and prompt engineering experiments impacting 50+ projects worldwide.",
        "jobTitle": "Prompt Engineer | Python Specialist | AI Practitioner & Mentor",
        "worksFor": {
          "@type": "Organization",
          "name": "Aleem.Developer",
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "University of Central Punjab"
        },
        "sameAs": [
          "https://github.com/Aleem-Developer",
          "https://linkedin.com/in/aleem-developer",
          "https://twitter.com/aleem_developer",
          "https://instagram.com/aleem.developer"
        ],
        "knowsAbout": [
          "Prompt Engineering",
          "Python Development",
          "AI Workflow Design",
          "LLM Optimization",
          "AI Consulting",
          "Web Strategy",
          "Multi-Agent AI Systems",
          "AI Project Experimentation"
        ],
        "knowsLanguage": ["Python", "JavaScript"],
        "award": "Ranked among Pakistan’s Top Prompt Engineers, Top Percentile Globally",
        "hasOccupation": [
          {
            "@type": "Occupation",
            "name": "Prompt Engineer",
            "description": "Designs advanced AI prompts and LLM workflows for global projects."
          },
          {
            "@type": "Occupation",
            "name": "AI Consultant",
            "description": "Provides strategic AI and web solutions, project guidance, and workflow optimization."
          },
          {
            "@type": "Occupation",
            "name": "Python Developer",
            "description": "Builds efficient, scalable backend and AI-powered solutions."
          }
        ],
        "mission":
          "To demonstrate the full potential of AI through advanced prompt engineering, LLM workflows, and practical, scalable solutions."
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
                "Aleem.Developer (Muhammad Aleem Naveed) is a globally recognized prompt engineer, Python specialist, and AI practitioner. He designs advanced LLM workflows, AI experiments, and provides mentorship and consulting for businesses and individuals worldwide."
            }
          },
          {
            "@type": "Question",
            "name": "What does Aleem.Developer do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "He specializes in advanced prompt engineering, LLM workflow optimization, Python development, AI experimentation, and strategic AI/web consulting to help businesses innovate and scale."
            }
          },
          {
            "@type": "Question",
            "name": "What are Aleem.Developer’s core skills?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Python development, prompt engineering, AI workflow design, LLM optimization, multi-agent AI systems, AI project experimentation, web strategy, and mentoring others in AI and coding."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Aleem.Developer based?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "He is based in Pakistan and is available globally for projects, mentorship, and AI consulting."
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
        Aleem.Developer | Top Global Prompt Engineer & AI Workflow Architect
      </title>
      <meta
        name="description"
        content="Aleem.Developer (Muhammad Aleem Naveed) — Top-ranked Prompt Engineer, Python Specialist, and AI Practitioner. Creator of advanced LLM workflows, AI tools, and prompt experiments for 50+ global projects. Expert in AI consulting, web strategy, and workflow optimization."
      />
      <meta
        name="keywords"
        content="Aleem.Developer, Muhammad Aleem Naveed, Prompt Engineer, Python Specialist, AI Practitioner, AI Workflow Architect, LLM Optimization, Multi-Agent AI, AI Consulting, AI Projects, Advanced Prompt Engineering, Pakistan AI Expert"
      />

      {/* Open Graph / Social */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aleem.developer" />
      <meta
        property="og:title"
        content="Aleem.Developer | Global Prompt Engineer & AI Workflow Architect"
      />
      <meta
        property="og:description"
        content="Explore Aleem.Developer’s advanced AI workflows, LLM experiments, and prompt engineering projects shaping global AI innovation."
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
        content="Aleem.Developer | Top Global Prompt Engineer & AI Workflow Architect"
      />
      <meta
        name="twitter:description"
        content="Discover Aleem.Developer’s expertise in prompt engineering, Python, and AI workflow optimization. Learn about his projects, mentorship, and consulting."
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
