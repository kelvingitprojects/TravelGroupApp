import { Trip, User, FeedPost, Agent } from '@/types';

export const mockTrips: Trip[] = [
  {
    id: '1',
    name: 'Cape Town & Winelands',
    location: 'Cape Town, Western Cape',
    date: '2024-03-15',
    createdBy: 'agent1',
    participants: [
      {
        userId: 'user1',
        name: 'Thabo Mthembu',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        paymentProgress: 75,
        amountPaid: 5625,
        joinedAt: '2024-01-10'
      },
      {
        userId: 'user2',
        name: 'Nomsa Dlamini',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        paymentProgress: 40,
        amountPaid: 3000,
        joinedAt: '2024-01-12'
      },
      {
        userId: 'user3',
        name: 'Sipho Ndaba',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        paymentProgress: 100,
        amountPaid: 7500,
        joinedAt: '2024-01-08'
      }
    ],
    interested: ['user4', 'user5', 'user6'],
    price: 7500,
    description: 'Explore the Mother City with Table Mountain cable car, wine tasting in Stellenbosch, penguin colony at Boulders Beach, and sunset at Signal Hill.',
    imageUrl: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    paymentPlans: [],
    ratings: [],
    maxParticipants: 8
  },
  {
    id: '2',
    name: 'Kruger Safari Adventure',
    location: 'Kruger National Park, Mpumalanga',
    date: '2024-04-20',
    createdBy: 'agent2',
    participants: [
      {
        userId: 'user7',
        name: 'Lerato Molefe',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        paymentProgress: 60,
        amountPaid: 6000,
        joinedAt: '2024-01-15'
      },
      {
        userId: 'user8',
        name: 'Mandla Khumalo',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        paymentProgress: 85,
        amountPaid: 8500,
        joinedAt: '2024-01-18'
      }
    ],
    interested: ['user9', 'user10'],
    price: 10000,
    description: 'Experience the Big Five in their natural habitat with game drives, bush walks, and traditional boma dinners under the African stars.',
    imageUrl: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    paymentPlans: [],
    ratings: [],
    maxParticipants: 6
  },
  {
    id: '3',
    name: 'Drakensberg Mountains',
    location: 'Drakensberg, KwaZulu-Natal',
    date: '2024-05-10',
    createdBy: 'agent1',
    participants: [
      {
        userId: 'user11',
        name: 'Zanele Mthembu',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        paymentProgress: 30,
        amountPaid: 1500,
        joinedAt: '2024-01-20'
      }
    ],
    interested: ['user12', 'user13', 'user14', 'user15'],
    price: 5000,
    description: 'Hike the majestic Drakensberg mountains, visit San rock art sites, and enjoy traditional Zulu cultural experiences.',
    imageUrl: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    paymentPlans: [],
    ratings: [],
    maxParticipants: 10
  },
  {
    id: '4',
    name: 'Garden Route Explorer',
    location: 'Garden Route, Western & Eastern Cape',
    date: '2024-06-15',
    createdBy: 'agent3',
    participants: [
      {
        userId: 'user16',
        name: 'Kagiso Mokoena',
        avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        paymentProgress: 50,
        amountPaid: 4000,
        joinedAt: '2024-01-22'
      }
    ],
    interested: ['user17', 'user18'],
    price: 8000,
    description: 'Journey along the scenic Garden Route from Cape Town to Port Elizabeth, including Knysna, Plettenberg Bay, and Tsitsikamma Forest.',
    imageUrl: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    paymentPlans: [],
    ratings: [],
    maxParticipants: 8
  }
];

export const mockUser: User = {
  id: 'current-user',
  name: 'Thabo Mthembu',
  email: 'thabo@example.com',
  role: 'user',
  avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  tripsJoined: ['1'],
  tripsInterested: ['2', '3'],
  ratingsGiven: []
};

export const mockAgents = [
  {
    id: 'agent1',
    name: 'Ubuntu Adventures',
    email: 'info@ubuntuadventures.co.za',
    role: 'agent' as const,
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    location: 'Cape Town, Western Cape',
    agentRating: 4.9,
    totalTrips: 45,
    reviewCount: 127,
    verified: true,
    specialties: ['Safari Tours', 'Mountain Adventures', 'Cultural Experiences', 'Wine Tours'],
    description: 'Proudly South African travel specialists offering authentic experiences across Mzansi. From the Big Five to the Big Braai, we show you the real South Africa.',
    priceRange: { min: 3000, max: 15000 },
    tripsCreated: ['1', '3'],
    yearsExperience: 8,
    languages: ['English', 'Afrikaans', 'Zulu', 'Xhosa']
  },
  {
    id: 'agent2',
    name: 'Mzansi Explorers',
    email: 'hello@mzansiexplorers.co.za',
    role: 'agent' as const,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    location: 'Johannesburg, Gauteng',
    agentRating: 4.7,
    totalTrips: 32,
    reviewCount: 89,
    verified: true,
    specialties: ['Historical Tours', 'Township Tours', 'Heritage Sites', 'Local Cuisine'],
    description: 'Discover the rich history and vibrant culture of South Africa. From Robben Island to the Cradle of Humankind, we bring our heritage to life.',
    priceRange: { min: 2500, max: 12000 },
    tripsCreated: ['2'],
    yearsExperience: 6,
    languages: ['English', 'Sotho', 'Tswana', 'Zulu']
  },
  {
    id: 'agent3',
    name: 'Rainbow Nation Tours',
    email: 'bookings@rainbownationtours.co.za',
    role: 'agent' as const,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    location: 'Durban, KwaZulu-Natal',
    agentRating: 4.8,
    totalTrips: 28,
    reviewCount: 76,
    verified: true,
    specialties: ['Beach Holidays', 'Coastal Adventures', 'Zulu Culture', 'Marine Life'],
    description: 'Experience the warm Indian Ocean coastline and rich Zulu heritage. From shark cage diving to traditional dancing, we offer unforgettable coastal adventures.',
    priceRange: { min: 4000, max: 18000 },
    tripsCreated: ['4'],
    yearsExperience: 12,
    languages: ['English', 'Zulu', 'Hindi', 'Tamil']
  },
  {
    id: 'agent4',
    name: 'Backpackers SA',
    email: 'info@backpackerssa.co.za',
    role: 'agent' as const,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    location: 'Stellenbosch, Western Cape',
    agentRating: 4.6,
    totalTrips: 38,
    reviewCount: 142,
    verified: false,
    specialties: ['Budget Travel', 'Student Groups', 'Backpacker Hostels', 'Adventure Sports'],
    description: 'Making South African adventures accessible to young travelers and students. Affordable trips without compromising on the authentic Mzansi experience.',
    priceRange: { min: 1500, max: 6000 },
    tripsCreated: [],
    yearsExperience: 4,
    languages: ['English', 'Afrikaans']
  },
  {
    id: 'agent5',
    name: 'Family Safari Co.',
    email: 'bookings@familysafari.co.za',
    role: 'agent' as const,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    location: 'Nelspruit, Mpumalanga',
    agentRating: 4.9,
    totalTrips: 41,
    reviewCount: 98,
    verified: true,
    specialties: ['Family Safaris', 'Kid-Friendly Tours', 'Educational Experiences', 'Game Reserves'],
    description: 'Creating magical family memories in the African bush. Child-friendly safaris with educational programs about South African wildlife and conservation.',
    priceRange: { min: 5000, max: 20000 },
    tripsCreated: [],
    yearsExperience: 7,
    languages: ['English', 'Afrikaans', 'Swati']
  },
  {
    id: 'agent6',
    name: 'Green Routes SA',
    email: 'contact@greenroutessa.co.za',
    role: 'agent' as const,
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    location: 'Port Elizabeth, Eastern Cape',
    agentRating: 4.8,
    totalTrips: 29,
    reviewCount: 67,
    verified: true,
    specialties: ['Eco Tourism', 'Conservation Tours', 'Marine Big Five', 'Sustainable Travel'],
    description: 'Committed to responsible tourism that supports local communities and conservation. Experience South Africa while protecting our natural heritage.',
    priceRange: { min: 3500, max: 14000 },
    tripsCreated: [],
    yearsExperience: 5,
    languages: ['English', 'Afrikaans', 'Xhosa']
  }
];

export const mockFeedPosts: FeedPost[] = [
  {
    id: '1',
    userId: 'user1',
    userName: 'Thabo Mthembu',
    userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    tripId: '1',
    tripName: 'Cape Town & Winelands',
    images: [
      'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    caption: 'Table Mountain at sunset is absolutely breathtaking! 🏔️ Cape Town, you beauty! #CapeTown #TableMountain',
    likes: 34,
    likedBy: ['user2', 'user3'],
    comments: [
      {
        id: '1',
        userId: 'user2',
        userName: 'Nomsa Dlamini',
        text: 'Eish! This makes me so excited for our trip! 😍',
        createdAt: '2024-01-25T10:30:00Z'
      },
      {
        id: '2',
        userId: 'user3',
        userName: 'Sipho Ndaba',
        text: 'Sharp! Can\'t wait to join you guys there 🙌',
        createdAt: '2024-01-25T11:15:00Z'
      }
    ],
    createdAt: '2024-01-25T08:15:00Z'
  },
  {
    id: '2',
    userId: 'user8',
    userName: 'Mandla Khumalo',
    userAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    tripId: '2',
    tripName: 'Kruger Safari Adventure',
    images: [
      'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    caption: 'Just spotted the Big Five in one day! 🦁🐘🦏🐆🐃 Kruger is unreal! #BigFive #KrugerPark #Safari',
    likes: 28,
    likedBy: ['user7'],
    comments: [
      {
        id: '3',
        userId: 'user7',
        userName: 'Lerato Molefe',
        text: 'Yoh! That\'s incredible! Save some animals for the rest of us 😂',
        createdAt: '2024-01-24T20:00:00Z'
      }
    ],
    createdAt: '2024-01-24T19:45:00Z'
  },
  {
    id: '3',
    userId: 'user11',
    userName: 'Zanele Mthembu',
    userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    tripId: '3',
    tripName: 'Drakensberg Mountains',
    images: [
      'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    caption: 'The Amphitheatre is calling! 🏔️ Ready for some serious hiking in the Berg! #Drakensberg #Hiking #Mountains',
    likes: 19,
    likedBy: ['user12', 'user13'],
    comments: [],
    createdAt: '2024-01-23T16:30:00Z'
  }
];