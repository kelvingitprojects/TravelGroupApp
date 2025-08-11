import { create } from 'zustand';
import { User, SavingsGroup } from '@/types';

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  updateSavings: (groupId: string, amount: number) => void;
  addSavingsGroup: (group: SavingsGroup) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    id: '1',
    name: 'Thabo Mthembu',
    email: 'thabo@example.com',
    role: 'user',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    totalSaved: 12250,
    tripsCompleted: 3,
    tripsJoined: ['1'],
    tripsInterested: ['2', '3'],
    ratingsGiven: [],
    activeSavings: [
      {
        id: '1',
        tripId: '1',
        name: 'Cape Town Squad',
        targetAmount: 22500,
        currentAmount: 10500,
        members: [
          {
            id: '1',
            name: 'Thabo',
            avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
            contribution: 4000,
            joinedAt: '2024-01-15'
          },
          {
            id: '2',
            name: 'Nomsa',
            avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
            contribution: 3250,
            joinedAt: '2024-01-16'
          },
          {
            id: '3',
            name: 'Sipho',
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
            contribution: 3250,
            joinedAt: '2024-01-18'
          }
        ],
        createdAt: '2024-01-15',
        targetDate: '2024-03-15',
        isActive: true
      }
    ]
  },
  setUser: (user) => set({ user }),
  updateSavings: (groupId, amount) => set((state) => {
    if (!state.user) return state;
    
    const updatedSavings = state.user.activeSavings?.map(group => 
      group.id === groupId 
        ? { ...group, currentAmount: group.currentAmount + amount }
        : group
    ) || [];
    
    return {
      user: {
        ...state.user,
        activeSavings: updatedSavings,
        totalSaved: (state.user.totalSaved || 0) + amount
      }
    };
  }),
  addSavingsGroup: (group) => set((state) => {
    if (!state.user) return state;
    
    return {
      user: {
        ...state.user,
        activeSavings: [...(state.user.activeSavings || []), group]
      }
    };
  })
}));