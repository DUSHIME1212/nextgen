import { client } from "./lib/client";

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
