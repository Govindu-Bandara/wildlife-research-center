export interface Species {
  slug: string;
  code: string;
  commonName: string;
  scientificName: string;
  status?: string;
  summary: string;
  body: string[];
  references?: string[];
  image: string;
  featured?: boolean;
}

export const species: Species[] = [
  {
    slug: "starry-shrub-frog",
    code: "SL-001",
    commonName: "Starry Shrub Frog",
    scientificName: "Pseudophilautus stellatus",
    status: "Critically Endangered",
    summary:
      "Considered one of the rarest amphibians in the world. First described in 1853 by Edward Frederick Kelaart from Nuwara Eliya District, it became the first shrub frog ever to be described from Sri Lanka.",
    body: [
      "Following its original description, the species went unrecorded for over 150 years and was widely presumed extinct.",
      "Remarkably, it was rediscovered in the Peak Wilderness Sanctuary by Mr. Mendis Wickramasinghe et al., and a neotype was designated in 2013.",
      "Today, Pseudophilautus stellatus is classified as Critically Endangered. This elusive, canopy-dwelling species continues to face severe threats from habitat loss, and its future remains uncertain.",
    ],
    image: "/Starry Shrub Frog.png",
    featured: true,
  },
  {
    slug: "baronet-butterfly",
    code: "SL-002",
    commonName: "Baronet",
    scientificName: "Euthalia nais",
    status: "Restricted range, locally significant",
    summary:
      "Also known as the Nilgala Butterfly, with a restricted distribution confined to the savanna habitats of the Uva Province. Nilgala remains the most reliable location for observing this species.",
    body: [
      "A few records also exist from the Ratnapura District, though these are likely the result of local migratory movements rather than established populations.",
      "In his book The Butterflies of Ceylon (1924), Ormiston documented observations of migration of this species toward Adam's Peak during the months of March and August.",
      "Its only known larval host plant is Diospyros melanoxylon, a tree widely harvested for the production of 'beedi' (traditional hand-rolled cigarettes). The exploitation of this plant, combined with the frequent setting of fires to the savanna by local communities, represents the most significant threats to the survival of this butterfly.",
      "The Baronet flies year-round and is commonly seen settled on the ground. This butterfly is featured on the current Sri Lankan 20-rupee banknote, highlighting its significance.",
    ],
    references: [
      "van der Poorten, G., & van der Poorten, N. (2016). The Butterfly Fauna of Sri Lanka.",
      "Ormiston, W. (1924). The Butterflies of Ceylon.",
    ],
    image: "/Baronet.jpg",
    featured: true,
  },
  {
    slug: "indian-nightjar",
    code: "SL-003",
    commonName: "Indian Nightjar",
    scientificName: "Caprimulgus asiaticus",
    summary:
      "A nocturnal bird that prefers open habitats such as grasslands and scrub, where its mottled plumage provides excellent camouflage against the surroundings.",
    body: [
      "These birds feed primarily on insects, which they catch in flight. Although they have a relatively weak bill, they are equipped with a wide gape that allows them to efficiently capture flying prey.",
      "Their distinctive call is often heard across suitable habitats. They can also be seen resting on roads in the early morning or after dusk, once the light has faded.",
    ],
    image: "/Indian Nightjar .jpg",
  },
  {
    slug: "wallowing-in-mammals",
    code: "SL-004",
    commonName: "Wallowing in Mammals",
    scientificName: "Elephas maximus · Sus scrofa · Bubalus bubalis",
    summary:
      "It is not uncommon to see animals such as elephants, wild boars, and buffaloes covered in mud. This behaviour, known as wallowing, involves animals rolling in mud or water to regulate body temperature, especially during the hotter parts of the day.",
    body: [
      "A layer of mud on the skin aids cooling through evaporative heat loss and provides protection from intense solar radiation.",
      "As the mud dries, it also acts as a barrier against biting insects. Additionally, wallowing can force blood-sucking parasites such as ticks to the surface in search of oxygen, where they become trapped as the mud hardens.",
      "When the animal later rubs against trees or rocks, the dried mud, along with the parasites, is removed easily. This behaviour is most common in mammals with thinner coats, as they have less natural protection from heat and insects due to reduced fur coverage.",
    ],
    image: "/wallowing_in_Mammals.jpg",
  },
  {
    slug: "black-necked-stork",
    code: "SL-005",
    commonName: "Black-necked Stork",
    scientificName: "Ephippiorhynchus asiaticus",
    status: "Critically Endangered",
    summary:
      "The Black-necked Stork is the tallest bird in Sri Lanka, with adult birds reaching a height of 150 cm. It is also the rarest resident bird in Sri Lanka, with an estimated population of only 20 to 50 individuals remaining on the island.",
    body: [
      "It is primarily found in the low-country dry zone wetlands of the southeastern coast, especially around Kumana, Bundala, and Yala National Parks.",
      "This species is considered Critically Endangered in Sri Lanka, reflecting its extremely small population and limited distribution.",
    ],
    image: "/Black-necked-Stork.jpg",
    featured: true,
  },
  {
    slug: "tamil-oakblue",
    code: "SL-006",
    commonName: "Tamil Oakblue",
    scientificName: "Arhopala bazaloides lanka",
    status: "Data Deficient",
    summary:
      "The Tamil Oakblue is one of the rarest butterfly species recorded in Sri Lanka. Its presence on the island was first documented by W. A. Evans (1957), based on an undated specimen housed at the Natural History Museum, London.",
    body: [
      "No subsequent records were reported for several decades following Evans's documentation, leading to the widespread belief that the species had become extinct in Sri Lanka.",
      "In 2008, Chamitha De Alwis reported a similar butterfly from the Kanneliya Rain Forest, initially identified as Ormiston's Oakblue. In 2013, Dr. Himesh D. Jayasinghe and Sarath Sanjeewa recorded a comparable specimen from the Sinharaja Forest Reserve. Upon detailed analysis of photographs, both records were suggested to represent the Tamil Oakblue.",
      "Subsequent examination of specimens at the Colombo National Museum and the Natural History Museum, London, by Dr. George Michael van der Poorten conclusively confirmed that the butterflies recorded from Kanneliya and Sinharaja belong to the Tamil Oakblue, a species previously thought extinct in Sri Lanka.",
      "The Tamil Oakblue appears to show a preference for leaf exudates of Vateria copallifera rather than floral nectar. The species is extremely difficult to observe, owing to its rapid flight, canopy-dwelling behaviour, and overall rarity.",
      "The specimen shown in this photograph was observed in the Pasgoda area of the Matara District, representing a new locality record for this species in Sri Lanka.",
    ],
    references: [
      "Evans, W. A. (1957). Identification of Indian Butterflies.",
      "van der Poorten, G., & van der Poorten, N. (2016). The Butterfly Fauna of Sri Lanka.",
    ],
    image: "/Tamil Oakblue (Arhopala bazaloides lanka).jpg",
  },
];

export const getSpeciesBySlug = (slug: string) => species.find((s) => s.slug === slug);