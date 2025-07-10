export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getTimeUntilTrip = (tripDate: string) => {
  const now = new Date();
  const trip = new Date(tripDate);
  const diffTime = trip.getTime() - now.getTime();
  
  if (diffTime <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }
  
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds, isExpired: false };
};

export const formatTimeAgo = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diffTime = now.getTime() - date.getTime();
  
  const minutes = Math.floor(diffTime / (1000 * 60));
  const hours = Math.floor(diffTime / (1000 * 60 * 60));
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return 'Just now';
};