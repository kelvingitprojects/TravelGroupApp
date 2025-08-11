import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { MapPin, Users, Heart, Calendar } from 'lucide-react-native';
import { Trip } from '@/types';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { formatDate } from '@/utils/dateUtils';

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  const handlePress = () => {
    router.push(`/trip/${trip.id}`);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress} activeOpacity={0.9}>
      <Image source={{ uri: trip.imageUrl }} style={styles.image} />
      <View style={styles.overlay} />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{trip.name}</Text>
          <View style={styles.locationContainer}>
            <MapPin size={14} color={Colors.white} />
            <Text style={styles.location}>{trip.location}</Text>
          </View>
        </View>
        
        <View style={styles.footer}>
          <View style={styles.stats}>
            <View style={styles.stat}>
              <Users size={16} color={Colors.white} />
              <Text style={styles.statText}>{trip.participants.length}</Text>
            </View>
            <View style={styles.stat}>
              <Heart size={16} color={Colors.white} />
              <Text style={styles.statText}>{trip.interested.length}</Text>
            </View>
            <View style={styles.stat}>
              <Calendar size={16} color={Colors.white} />
              <Text style={styles.statText}>{formatDate(trip.date)}</Text>
            </View>
          </View>
          
          <View style={styles.priceContainer}>
            <Text style={styles.price}>R{trip.price.toLocaleString()}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Layout.borderRadius.xl,
    overflow: 'hidden',
    marginBottom: Layout.spacing.md,
    elevation: 4,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: Colors.white,
  },
  image: {
    width: '100%',
    height: 200,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Layout.spacing.md,
  },
  header: {
    marginBottom: Layout.spacing.sm,
  },
  title: {
    fontSize: Layout.fontSize.xl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.white,
    marginBottom: Layout.spacing.xs,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: Layout.fontSize.sm,
    color: Colors.white,
    marginLeft: Layout.spacing.xs,
    opacity: 0.9,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stats: {
    flexDirection: 'row',
    flex: 1,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Layout.spacing.md,
  },
  statText: {
    fontSize: Layout.fontSize.sm,
    color: Colors.white,
    marginLeft: Layout.spacing.xs,
    fontWeight: Layout.fontWeight.medium,
  },
  priceContainer: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Layout.spacing.md,
    paddingVertical: Layout.spacing.sm,
    borderRadius: Layout.borderRadius.full,
  },
  price: {
    fontSize: Layout.fontSize.md,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.white,
  },
});