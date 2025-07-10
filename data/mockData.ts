import { Trip, User, FeedPost, Agent } from '@/types';

export const mockTrips: Trip[] = [
  {
    id: '1',
    name: 'Bali Adventure',
    location: 'Bali, Indonesia',
    date: '2024-03-15',
    createdBy: 'agent1',
    participants: [
      {
        userId: 'user1',
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        paymentProgress: 75,
        amountPaid: 1125,
        joinedAt: '2024-01-10'
      },
      {
        userId: 'user2',
        name: 'Mike Chen',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        paymentProgress: 40,
        amountPaid: 600,
        joinedAt: '2024-01-12'
      },
      {
        userId: 'user3',
        name: 'Emma Davis',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        paymentProgress: 100,
        amountPaid: 1500,
        joinedAt: '2024-01-08'
      }
    ],
    interested: ['user4', 'user5', 'user6'],
    price: 1500,
    description: 'Experience the magic of Bali with temple visits, beach relaxation, and cultural immersion.',
    imageUrl: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    paymentPlans: [],
    ratings: [],
    maxParticipants: 8
  },
  {
    id: '2',
    name: 'Tokyo Explorer',
    location: 'Tokyo, Japan',
    date: '2024-04-20',
    createdBy: 'agent2',
    participants: [
      {
        userId: 'user7',
        name: 'Alex Rodriguez',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        paymentProgress: 60,
        amountPaid: 1200,
        joinedAt: '2024-01-15'
      },
      {
        userId: 'user8',
        name: 'Lisa Park',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        paymentProgress: 85,
        amountPaid: 1700,
        joinedAt: '2024-01-18'
      }
    ],
    interested: ['user9', 'user10'],
    price: 2000,
    description: 'Discover Tokyo\'s blend of traditional and modern culture, from ancient temples to neon-lit districts.',
    imageUrl: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    paymentPlans: [],
    ratings: [],
    maxParticipants: 6
  },
  {
    id: '3',
    name: 'Safari Kenya',
    location: 'Maasai Mara, Kenya',
    date: '2024-05-10',
    createdBy: 'agent1',
    participants: [
      {
        userId: 'user11',
        name: 'David Wilson',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        paymentProgress: 30,
        amountPaid: 750,
        joinedAt: '2024-01-20'
      }
    ],
    interested: ['user12', 'user13', 'user14', 'user15'],
    price: 2500,
    description: 'Witness the Great Migration and experience Africa\'s incredible wildlife in their natural habitat.',
    imageUrl: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    paymentPlans: [],
    ratings: [],
    maxParticipants: 10
  }
];

export const mockUser: User = {
  id: 'current-user',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user', // Change this to 'agent' to test agent view
  avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  tripsJoined: ['1'],
  tripsInterested: ['2', '3'],
  ratingsGiven: []
};

export const mockAgent: Agent = {
  id: 'agent1',
  name: 'Travel Pro Agency',
  email: 'agent@travelpro.com',
  role: 'agent',
  avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  tripsJoined: [],
  tripsInterested: [],
  ratingsGiven: [],
  tripsCreated: ['1', '3'],
  agentRating: 4.8,
  totalTrips: 25,
  verified: true
};

export const mockAgents = [
  {
    id: 'agent1',
    name: 'Adventure Seekers Co.',
    email: 'contact@adventureseekers.com',
    role: 'agent' as const,
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    location: 'San Francisco, CA',
    agentRating: 4.9,
    totalTrips: 45,
    reviewCount: 127,
    verified: true,
    specialties: ['Adventure Travel', 'Mountain Expeditions', 'Wildlife Safari', 'Extreme Sports'],
    description: 'Specializing in adrenaline-pumping adventures and off-the-beaten-path destinations. We create unforgettable experiences for thrill-seekers and nature lovers.',
    priceRange: { min: 800, max: 3500 },
    tripsCreated: ['1', '3'],
    yearsExperience: 8,
    languages: ['English', 'Spanish', 'French']
  },
  {
    id: 'agent2',
    name: 'Cultural Journeys',
    email: 'hello@culturaljourneys.com',
    role: 'agent' as const,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    location: 'New York, NY',
    agentRating: 4.7,
    totalTrips: 32,
    reviewCount: 89,
    verified: true,
    specialties: ['Cultural Tours', 'Historical Sites', 'Art & Museums', 'Local Cuisine'],
    description: 'Immerse yourself in rich cultures and histories. We design trips that connect you with local traditions, art, and authentic experiences.',
    priceRange: { min: 600, max: 2800 },
    tripsCreated: ['2'],
    yearsExperience: 6,
    languages: ['English', 'Italian', 'Japanese']
  },
  {
    id: 'agent3',
    name: 'Luxury Escapes',
    email: 'concierge@luxuryescapes.com',
    role: 'agent' as const,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    location: 'Miami, FL',
    agentRating: 4.8,
    totalTrips: 28,
    reviewCount: 76,
    verified: true,
    specialties: ['Luxury Travel', 'Private Jets', 'Exclusive Resorts', 'VIP Experiences'],
    description: 'Experience the finest in luxury travel with our curated selection of premium destinations, exclusive accommodations, and personalized service.',
    priceRange: { min: 2000, max: 8000 },
    tripsCreated: [],
    yearsExperience: 12,
    languages: ['English', 'French', 'Portuguese']
  },
  {
    id: 'agent4',
    name: 'Budget Backpackers',
    email: 'info@budgetbackpackers.com',
    role: 'agent' as const,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    location: 'Austin, TX',
    agentRating: 4.6,
    totalTrips: 38,
    reviewCount: 142,
    verified: false,
    specialties: ['Budget Travel', 'Backpacking', 'Hostels', 'Student Groups'],
    description: 'Making travel accessible for everyone! We specialize in budget-friendly adventures without compromising on fun and memorable experiences.',
    priceRange: { min: 200, max: 1200 },
    tripsCreated: [],
    yearsExperience: 4,
    languages: ['English', 'German']
  },
  {
    id: 'agent5',
    name: 'Family Adventures',
    email: 'bookings@familyadventures.com',
    role: 'agent' as const,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    location: 'Denver, CO',
    agentRating: 4.9,
    totalTrips: 41,
    reviewCount: 98,
    verified: true,
    specialties: ['Family Travel', 'Kid-Friendly', 'Educational Tours', 'Theme Parks'],
    description: 'Creating magical family memories with carefully planned trips that cater to all ages. Safety, fun, and education are our top priorities.',
    priceRange: { min: 500, max: 2500 },
    tripsCreated: [],
    yearsExperience: 7,
    languages: ['English', 'Spanish']
  },
  {
    id: 'agent6',
    name: 'Eco Wanderers',
    email: 'contact@ecowanderers.com',
    role: 'agent' as const,
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    location: 'Portland, OR',
    agentRating: 4.8,
    totalTrips: 29,
    reviewCount: 67,
    verified: true,
    specialties: ['Eco Tourism', 'Sustainable Travel', 'Wildlife Conservation', 'Nature Photography'],
    description: 'Committed to responsible travel that protects our planet. Join us for eco-friendly adventures that support local communities and conservation efforts.',
    priceRange: { min: 700, max: 3000 },
    tripsCreated: [],
    yearsExperience: 5,
    languages: ['English', 'Portuguese', 'Swahili']
  }
];

export const mockFeedPosts: FeedPost[] = [
  {
    id: '1',
    userId: 'user1',
    userName: 'Sarah Johnson',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    tripId: '1',
    tripName: 'Bali Adventure',
    images: [
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    caption: 'Amazing sunset at Tanah Lot Temple! This trip is already incredible 🌅',
    likes: 24,
    likedBy: ['user2', 'user3'],
    comments: [
      {
        id: '1',
        userId: 'user2',
        userName: 'Mike Chen',
        text: 'Wow! Can\'t wait to join you there!',
        createdAt: '2024-01-25T10:30:00Z'
      }
    ],
    createdAt: '2024-01-25T08:15:00Z'
  },
  {
    id: '2',
    userId: 'user8',
    userName: 'Lisa Park',
    userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    tripId: '2',
    tripName: 'Tokyo Explorer',
    images: [
      'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    caption: 'Tokyo nights are magical ✨ The city never sleeps!',
    likes: 18,
    likedBy: ['user7'],
    comments: [],
    createdAt: '2024-01-24T19:45:00Z'
  }
];