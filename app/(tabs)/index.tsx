import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { mockTrips } from '@/data/mockData';
import TripCard from '@/components/TripCard';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Discover Amazing Trips</Text>
          <Text style={styles.subtitle}>Join group adventures around the world</Text>
        </View>
        
        <View style={styles.tripsContainer}>
          {mockTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundSecondary,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: Layout.spacing.lg,
    paddingTop: Layout.spacing.xl,
  },
  title: {
    fontSize: Layout.fontSize.xxxl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
    marginBottom: Layout.spacing.sm,
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: Layout.fontSize.lg,
    color: Colors.textSecondary,
    fontFamily: 'Inter-Regular',
  },
  tripsContainer: {
    padding: Layout.spacing.lg,
    paddingTop: 0,
  },
});