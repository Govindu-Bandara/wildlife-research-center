export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Iroshan Rupasinghe",
    role: "Lead Field Guide & Birder",
    bio: "Leads expeditions across the island's hill country, wetlands, and savanna ecosystems, with a focus on endemic and threatened bird species.",
    image: "/user.png",
  },
  {
    name: "Pavan Bopitiya Gamage",
    role: "Wildlife Researcher & Birder",
    bio: "Specialises in documenting rare and range-restricted species, contributing field data to the Center's species checklists and research notes.",
    image: "/user.png",
  },
];

export const orgStats = [
  { value: "2,000+", label: "Community of nature enthusiasts" },
  { value: "150+", label: "Years-lost species rediscovered & documented" },
  { value: "12+", label: "Guided expeditions conducted islandwide" },
  { value: "100+", label: "Bird species recorded in a single Mannar trip" },
];