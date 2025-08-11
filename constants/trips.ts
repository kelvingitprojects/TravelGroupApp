export interface Trip {
  id: string;
  title: string;
  destination: string;
  category: string;
  price: number;
  duration: string;
  imageUrl: string;
  description: string;
  highlights: string[];
  departureDate: string;
  returnDate: string;
  maxParticipants: number;
  currentParticipants: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  includes: string[];
  excludes: string[];
}

export const MOCK_TRIPS: Trip[] = [
  {
    id: '1',
    title: 'Cape Town & Winelands Adventure',
    destination: 'Cape Town, Western Cape',
    category: 'City & Wine',
    price: 7500,
    duration: '5 days',
    imageUrl: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Experience the Mother City in all its glory! From the iconic Table Mountain to the world-renowned wine estates of Stellenbosch and Franschhoek. This trip combines urban exploration with scenic wine country adventures.',
    highlights: [
      'Table Mountain cable car and hiking trails',
      'Wine tasting in Stellenbosch and Franschhoek',
      'Penguin colony visit at Boulders Beach',
      'V&A Waterfront and Two Oceans Aquarium',
      'Signal Hill sunset and Bo-Kaap cultural tour',
      'Chapman\'s Peak scenic drive'
    ],
    departureDate: '2024-03-15',
    returnDate: '2024-03-20',
    maxParticipants: 8,
    currentParticipants: 3,
    difficulty: 'Easy',
    includes: [
      'Accommodation (4-star guesthouse)',
      'Daily breakfast and 2 dinners',
      'All transport and transfers',
      'Wine tasting fees',
      'Table Mountain cable car tickets',
      'Professional local guide'
    ],
    excludes: [
      'International flights',
      'Lunch meals (except day 1)',
      'Personal expenses',
      'Travel insurance',
      'Optional activities'
    ]
  },
  {
    id: '2',
    title: 'Kruger Safari Experience',
    destination: 'Kruger National Park, Mpumalanga',
    category: 'Safari',
    price: 12000,
    duration: '4 days',
    imageUrl: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Embark on the ultimate African safari adventure in world-famous Kruger National Park. Track the Big Five, enjoy traditional boma dinners, and sleep under the African stars.',
    highlights: [
      'Big Five game drives with experienced rangers',
      'Traditional boma dinner with local entertainment',
      'Bush walks and bird watching',
      'Visit to local Shangaan cultural village',
      'Sunset game drive with sundowners',
      'Professional wildlife photography guidance'
    ],
    departureDate: '2024-04-20',
    returnDate: '2024-04-24',
    maxParticipants: 6,
    currentParticipants: 2,
    difficulty: 'Moderate',
    includes: [
      'Safari lodge accommodation',
      'All meals and beverages',
      'Game drives in open safari vehicles',
      'Park entrance fees',
      'Professional ranger guide',
      'Airport transfers from OR Tambo'
    ],
    excludes: [
      'Flights to Johannesburg',
      'Personal expenses and souvenirs',
      'Travel insurance',
      'Gratuities for guides',
      'Optional helicopter flight'
    ]
  },
  {
    id: '3',
    title: 'Drakensberg Mountains Trek',
    destination: 'Drakensberg, KwaZulu-Natal',
    category: 'Adventure',
    price: 5500,
    duration: '3 days',
    imageUrl: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Conquer the majestic Drakensberg mountains, explore ancient San rock art, and immerse yourself in Zulu culture. Perfect for adventure seekers and nature lovers.',
    highlights: [
      'Amphitheatre hiking trail',
      'Tugela Falls (world\'s second highest)',
      'San rock art sites exploration',
      'Traditional Zulu village visit',
      'Canopy tour adventure',
      'Stargazing in the mountains'
    ],
    departureDate: '2024-05-10',
    returnDate: '2024-05-13',
    maxParticipants: 10,
    currentParticipants: 1,
    difficulty: 'Challenging',
    includes: [
      'Mountain lodge accommodation',
      'All meals during trek',
      'Hiking equipment and safety gear',
      'Professional mountain guide',
      'Cultural village entrance fees',
      'Transport from Durban'
    ],
    excludes: [
      'Flights to Durban',
      'Personal hiking gear',
      'Travel insurance',
      'Meals in Durban',
      'Optional helicopter tour'
    ]
  },
  {
    id: '4',
    title: 'Garden Route Coastal Journey',
    destination: 'Garden Route, Western & Eastern Cape',
    category: 'Coastal',
    price: 9500,
    duration: '7 days',
    imageUrl: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Journey along South Africa\'s spectacular Garden Route from Cape Town to Port Elizabeth. Experience pristine beaches, ancient forests, and charming coastal towns.',
    highlights: [
      'Knysna Heads and lagoon cruise',
      'Plettenberg Bay whale watching',
      'Tsitsikamma Forest canopy walk',
      'Storms River mouth kayaking',
      'Oudtshoorn ostrich farms',
      'Cango Caves exploration'
    ],
    departureDate: '2024-06-15',
    returnDate: '2024-06-22',
    maxParticipants: 8,
    currentParticipants: 1,
    difficulty: 'Easy',
    includes: [
      'Boutique accommodation throughout',
      'Daily breakfast and 4 dinners',
      'Comfortable transport vehicle',
      'All activity entrance fees',
      'Professional driver-guide',
      'Whale watching boat trip'
    ],
    excludes: [
      'Flights to Cape Town',
      'Lunch meals',
      'Personal expenses',
      'Travel insurance',
      'Optional activities',
      'Alcoholic beverages'
    ]
  },
  {
    id: '5',
    title: 'Johannesburg Heritage Tour',
    destination: 'Johannesburg & Soweto, Gauteng',
    category: 'Heritage',
    price: 3500,
    duration: '2 days',
    imageUrl: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Discover the heart of South Africa\'s history in Johannesburg and Soweto. From Apartheid Museum to vibrant townships, experience the struggle and triumph of our democracy.',
    highlights: [
      'Apartheid Museum guided tour',
      'Soweto township bicycle tour',
      'Mandela House and Hector Pieterson Memorial',
      'Constitution Hill and Old Fort',
      'Maboneng Precinct art walk',
      'Traditional shebeen experience'
    ],
    departureDate: '2024-07-05',
    returnDate: '2024-07-07',
    maxParticipants: 12,
    currentParticipants: 4,
    difficulty: 'Easy',
    includes: [
      'City center hotel accommodation',
      'All meals and traditional cuisine',
      'Professional heritage guide',
      'Museum and site entrance fees',
      'Airport transfers',
      'Cultural performances'
    ],
    excludes: [
      'Flights to Johannesburg',
      'Personal expenses',
      'Travel insurance',
      'Optional Gold Reef City visit',
      'Shopping expenses'
    ]
  }
];