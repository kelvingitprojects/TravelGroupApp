export interface SavingsGroup {
  id: string;
  tripId: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  members: SavingsGroupMember[];
  createdAt: string;
  targetDate: string;
  isActive: boolean;
}

export interface SavingsGroupMember {
  id: string;
  name: string;
  avatar?: string;
  contribution: number;
  joinedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'agent' | 'guest';
  avatar?: string;
  tripsJoined: string[];
  tripsInterested: string[];
  ratingsGiven: Rating[];
  totalSaved?: number;
  tripsCompleted?: number;
  activeSavings?: SavingsGroup[];
}

export interface Trip {
  id: string;
  name: string;
  location: string;
  date: string;
  createdBy: string;
  participants: Participant[];
  interested: string[];
  price: number;
  description: string;
  imageUrl: string;
  paymentPlans: PaymentPlan[];
  ratings: Rating[];
  maxParticipants: number;
}

export interface Participant {
  userId: string;
  name: string;
  avatar?: string;
  paymentProgress: number;
  amountPaid: number;
  joinedAt: string;
}

export interface PaymentPlan {
  id: string;
  tripId: string;
  userId: string;
  method: 'bit-by-bit' | 'three-parts' | 'full';
  amountPaid: number;
  totalAmount: number;
  progressPercentage: number;
  schedule: PaymentSchedule[];
  status: 'active' | 'completed' | 'overdue';
}

export interface PaymentSchedule {
  id: string;
  amount: number;
  dueDate: string;
  paid: boolean;
  paidDate?: string;
}

export interface Rating {
  id: string;
  tripId?: string;
  agentId?: string;
  ratedBy: string;
  score: number;
  feedback: string;
  timestamp: string;
}

export interface FeedPost {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  tripId: string;
  tripName: string;
  images: string[];
  caption: string;
  likes: number;
  likedBy: string[];
  comments: Comment[];
  createdAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  text: string;
  createdAt: string;
}

export interface Agent extends User {
  tripsCreated: string[];
  agentRating: number;
  totalTrips: number;
  verified: boolean;
  location?: string;
  reviewCount?: number;
  specialties?: string[];
  description?: string;
  priceRange?: { min: number; max: number };
  yearsExperience?: number;
  languages?: string[];
}