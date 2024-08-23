import React from 'react';

const SchemaMarkup = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.skillshift.com.au/global-seo-affordability-study#webpage",
        "url": "https://www.skillshift.com.au/global-seo-affordability-study",
        "name": "Global SEO Tool Affordability Study | SkillShift",
        "description": "Comprehensive research on the impact of SEO tool accessibility on digital equality and market integrity across the globe.",
        "inLanguage": "en-AU"
      },
      {
        "@type": "ResearchProject",
        "name": "Global SEO Tool Affordability Study",
        "description": "A study unveiling the hidden impact of SEO tool accessibility on digital equality and market integrity across the globe.",
        "url": "https://www.skillshift.com.au/global-seo-affordability-study",
        "author": {
          "@type": "Person",
          "name": "Bemoi George",
          "url": "https://www.bemoi.com"
        },
        "funder": {
          "@type": "Organization",
          "name": "SkillShift",
          "url": "https://www.skillshift.com.au"
        },
        "datePublished": "2023-08-23",
        "keywords": ["SEO", "digital equality", "market integrity", "affordability", "global study"]
      },
      {
        "@type": "Organization",
        "@id": "https://www.skillshift.com.au/#organization",
        "name": "SkillShift",
        "url": "https://www.skillshift.com.au",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.skillshift.com.au/_next/static/media/skillshift%20logo%20green.409a687d.svg",
          "width": 112,
          "height": 112,
          "caption": "SkillShift Logo"
        },
        "sameAs": [
          "https://www.facebook.com/people/Skill-Shift-Digital-Growth-and-Transformation/61554645797133/",
          "https://www.instagram.com/skillshiftdigital/",
          "https://linkedin.com/company/skillshiftdigital"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.bemoi.com/#person",
        "name": "Bemoi George",
        "url": "https://www.bemoi.com",
        "jobTitle": "Managing Director, SkillShift",
        "worksFor": {
          "@id": "https://www.skillshift.com.au/#organization"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaMarkup;