export interface Tour {
  slug: string;
  code: string;
  title: string;
  location: string;
  dates: string;
  price: string;
  status: "open" | "fully-booked";
  summary: string;
  highlights: string[];
  includes: string[];
  guides: string[];
  image: string;
}

export const tours: Tour[] = [
  {
    slug: "nilgala-bird-wildlife-tour",
    code: "EXP-2026-06",
    title: "Nilgala Bird & Wildlife Tour",
    location: "Nilgala, Uva Province",
    dates: "27th & 28th June 2026",
    price: "LKR 25,500 / person",
    status: "open",
    summary:
      "One of Sri Lanka's premier birding destinations and home to some of the country's rarest bird species, including the elusive Painted Francolin, Jungle Bush Quail, and Yellow-footed Green Pigeon. Nilgala's savanna ecosystem is also the last reliable site for the Baronet butterfly.",
    highlights: [
      "Painted Francolin",
      "Jungle Bush Quail",
      "Yellow-footed Green Pigeon",
      "Baronet butterfly (Euthalia nais)",
    ],
    includes: [
      "Departure 10:00 PM from Piliyandala on 26 June",
      "Air-conditioned vehicle travel",
      "Air-conditioned accommodation, 5 meals included",
      "Guided by two experienced and renowned birders",
      "A complete checklist of bird species recorded during the tour",
    ],
    guides: ["Iroshan Rupasinghe", "Pavan Bopitiya Gamage"],
    image: "/nilgala tour.jpg",
  },
  {
    slug: "horton-plains-nuwara-eliya-tour",
    code: "EXP-2026-03B",
    title: "Horton Plains & Nuwara Eliya Bird and Wildlife Tour",
    location: "Horton Plains National Park & Nuwara Eliya",
    dates: "28th & 29th March 2026",
    price: "LKR 22,500 / person",
    status: "fully-booked",
    summary:
      "One of the best wildlife attractions in the country, home to most of the endemic flora and fauna of the hill country including the Sri Lankan Leopard. Elusive endemic birds such as the Sri Lanka Bush Warbler, Sri Lanka Whistling Thrush, and Sri Lanka Thrush inhabit the cloud forests of Horton Plains.",
    highlights: [
      "Sri Lanka Bush Warbler",
      "Sri Lanka Whistling Thrush",
      "Sri Lanka Thrush",
      "Sri Lankan Leopard (signs/sightings)",
    ],
    includes: [
      "Departure 10:00 PM from Colombo on 27th March",
      "All transport in a comfortable A/C vehicle",
      "A/C accommodation with 3 meals included",
      "Guided by two experienced and renowned birders in Sri Lanka",
      "A detailed trip report with a complete list of bird species observed",
    ],
    guides: ["Iroshan Rupasinghe", "Pavan Bopitiya Gamage"],
    image: "/horton plains.jpg",
  },
  {
    slug: "mannar-bird-wildlife-tour",
    code: "EXP-2026-02",
    title: "Mannar Bird and Wildlife Tour",
    location: "Mannar",
    dates: "28th February & 1st March 2026",
    price: "LKR 19,500 / person",
    status: "fully-booked",
    summary:
      "Mannar is one of the country's foremost wetland birding destinations, covering over 100 species of birds across two days, including large flocks of flamingos and shorebirds.",
    highlights: ["100+ species recorded over 2 days", "Flamingo flocks", "Wetland & shorebird specialists"],
    includes: [
      "Transport from Colombo and back in an A/C vehicle",
      "One night accommodation in Mannar",
      "5 meals included",
    ],
    guides: ["Iroshan Rupasinghe", "Pavan Bopitiya Gamage"],
    image: "/mannar.jpg",
  },
];

export const getTourBySlug = (slug: string) => tours.find((t) => t.slug === slug);