import { client } from "./lib/client";

export const getWorksQuery = `*[_type == "work"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  services,
  url,
  "heroImage": heroImage.asset->url,
  "heroImageAlt": heroImage.alt,
  "heroImageCaption": heroImage.caption,
  Objective,
  solution,
  role,
  process,
  impact {
    title,
    subtitle,
    description,
    stats[] {
      label,
      value
    }
  },
  "impactImage": impactImage.asset->url,
  "impactImageAlt": impactImage.alt,
  personalVoices {
    title,
    subtitle,
    description
  },
  clientInformation {
    name,
    location,
    industry,
    "image": image.asset->url,
    "imageAlt": image.alt
  },
  optimization {
    title,
    subtitle,
    description
  },
  awards[] {
    name,
    year,
    description
  },
  publishedAt,
  tags
}`;

// TypeScript interface for the work document
export interface WorkDocument {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  services?: string[];
  url: string;
  heroImage: string;
  heroImageAlt?: string;
  heroImageCaption?: string;
  Objective?: string;
  solution: string;
  role: string[];
  process?: any[]; // You might want to create a more specific type for this
  impact?: {
    title: string;
    subtitle: string;
    description: string;
    stats?: Array<{ label: string; value: number }>;
  };
  impactImage: string;
  impactImageAlt?: string;
  personalVoices?: {
    title: string;
    subtitle: string;
    description: string;
  };
  clientInformation?: {
    name: string;
    location: string;
    industry: string;
    image?: string;
    imageAlt?: string;
  };
  optimization?: {
    title: string;
    subtitle: string;
    description: string;
  };
  awards?: Array<{
    name: string;
    year: number;
    description?: string;
  }>;
  publishedAt: string;
  tags?: string[];
}

export function GetTeam() {
  const query = `*[_type == "team"]{
  name,
  slug,
  bio,
  role,
  "profileImageUrl": profileImage.asset->url,
  socialLinks[] {
    platform,
    url
  }
}
   
`;
  return client.fetch(query);
}

export function gettestimonial() {
  const query = `*[_type == "testimonial"]{
  name,
  location,
  role,
  "avatar": image.asset->url,
    testimonial,
    rating
}
   
`;
return client.fetch(query);

}

export async function fetchWorks() {
  const works = await client.fetch(getWorksQuery);
  return works;
}

export async function fetchWorkBySlug(slug: string) {
  const query = `*[_type == "work" && slug.current == $slug][0] {
    _id,
  title,
  slug,
  description,
  services,
  url,
  "heroImage": heroImage.asset->url,
  "heroImageAlt": heroImage.alt,
  "heroImageCaption": heroImage.caption,
  Objective,
  solution,
  role,
  process,
  impact {
    title,
    subtitle,
    description,
    stats[] {
      label,
      value
    }
  },
  "impactImage": impactImage.asset->url,
  "impactImageAlt": impactImage.alt,
  personalVoices {
    title,
    subtitle,
    description
  },
  clientInformation {
    name,
    location,
    industry,
    "image": image.asset->url,
    "imageAlt": image.alt
  },
  optimization {
    title,
    subtitle,
    description
  },
  awards[] {
    name,
    year,
    description
  },
  publishedAt,
  tags
  }`;
  
  const work = await client.fetch(query, { slug });
  return work;
}