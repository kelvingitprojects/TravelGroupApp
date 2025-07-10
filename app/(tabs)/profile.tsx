import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Settings, Heart, MapPin, Star, LogOut, CreditCard as Edit } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { mockUser, mockTrips } from '@/data/mockData';
import Button from '@/components/Button';

export default function ProfileScreen() {
  const userTrips = mockTrips.filter(trip => 
    mockUser.tripsJoined.includes(trip.id) || mockUser.tripsInterested.includes(trip.id)
  );

  const joinedTrips = userTrips.filter(trip => mockUser.tripsJoined.includes(trip.id));
  const interestedTrips = userTrips.filter(trip => mockUser.tripsInterested.includes(trip.id));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <Image source={{ uri: mockUser.avatar }} style={styles.avatar} />
            <TouchableOpacity style={styles.editButton}>
              <Edit size={16} color={Colors.white} />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.userName}>{mockUser.name}</Text>
          <Text style={styles.userEmail}>{mockUser.email}</Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>{joinedTrips.length}</Text>
              <Text style={styles.statLabel}>Trips Joined</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>{interestedTrips.length}</Text>
              <Text style={styles.statLabel}>Interested</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>4.8</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Trips</Text>
          {joinedTrips.length > 0 ? (
            joinedTrips.map((trip) => (
              <View key={trip.id} style={styles.tripItem}>
                <Image source={{ uri: trip.imageUrl }} style={styles.tripImage} />
                <View style={styles.tripInfo}>
                  <Text style={styles.tripName}>{trip.name}</Text>
                  <View style={styles.tripMeta}>
                    <MapPin size={14} color={Colors.textSecondary} />
                    <Text style={styles.tripLocation}>{trip.location}</Text>
                  </View>
                  <Text style={styles.tripDate}>{trip.date}</Text>
                </View>
                <View style={styles.tripStatus}>
                  <Text style={styles.statusText}>Joined</Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No trips joined yet</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interested Trips</Text>
          {interestedTrips.length > 0 ? (
            interestedTrips.map((trip) => (
              <View key={trip.id} style={styles.tripItem}>
                <Image source={{ uri: trip.imageUrl }} style={styles.tripImage} />
                <View style={styles.tripInfo}>
                  <Text style={styles.tripName}>{trip.name}</Text>
                  <View style={styles.tripMeta}>
                    <MapPin size={14} color={Colors.textSecondary} />
                    <Text style={styles.tripLocation}>{trip.location}</Text>
                  </View>
                  <Text style={styles.tripDate}>{trip.date}</Text>
                </View>
                <TouchableOpacity style={styles.heartButton}>
                  <Heart size={20} color={Colors.error} fill={Colors.error} />
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No interested trips yet</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <Settings size={20} color={Colors.textSecondary} />
            <Text style={styles.settingText}>Account Settings</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <Star size={20} color={Colors.textSecondary} />
            <Text style={styles.settingText}>Rate & Review</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <LogOut size={20} color={Colors.error} />
            <Text style={[styles.settingText, { color: Colors.error }]}>Sign Out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSection}>
          <Button 
            title="Become an Agent" 
            variant="primary" 
            onPress={() => {}} 
            style={styles.agentButton}
          />
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
    backgroundColor: Colors.white,
    padding: Layout.spacing.lg,
    paddingTop: Layout.spacing.xl,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  profileSection: {
    position: 'relative',
    marginBottom: Layout.spacing.md,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: Layout.borderRadius.full,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.primary,
    width: 32,
    height: 32,
    borderRadius: Layout.borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: Colors.white,
  },
  userName: {
    fontSize: Layout.fontSize.xl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
    marginBottom: Layout.spacing.xs,
    fontFamily: 'Poppins-Bold',
  },
  userEmail: {
    fontSize: Layout.fontSize.md,
    color: Colors.textSecondary,
    marginBottom: Layout.spacing.lg,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: Layout.fontSize.xl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.primary,
  },
  statLabel: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textSecondary,
    marginTop: Layout.spacing.xs,
  },
  section: {
    backgroundColor: Colors.white,
    margin: Layout.spacing.lg,
    marginBottom: 0,
    padding: Layout.spacing.lg,
    borderRadius: Layout.borderRadius.xl,
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: Layout.fontSize.lg,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
    marginBottom: Layout.spacing.lg,
  },
  tripItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.md,
    paddingBottom: Layout.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  tripImage: {
    width: 60,
    height: 60,
    borderRadius: Layout.borderRadius.lg,
    marginRight: Layout.spacing.md,
  },
  tripInfo: {
    flex: 1,
  },
  tripName: {
    fontSize: Layout.fontSize.md,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.textPrimary,
    marginBottom: Layout.spacing.xs,
  },
  tripMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.xs,
  },
  tripLocation: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textSecondary,
    marginLeft: Layout.spacing.xs,
  },
  tripDate: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textTertiary,
  },
  tripStatus: {
    backgroundColor: Colors.success,
    paddingHorizontal: Layout.spacing.sm,
    paddingVertical: Layout.spacing.xs,
    borderRadius: Layout.borderRadius.sm,
  },
  statusText: {
    fontSize: Layout.fontSize.xs,
    color: Colors.white,
    fontWeight: Layout.fontWeight.semibold,
  },
  heartButton: {
    padding: Layout.spacing.sm,
  },
  emptyText: {
    fontSize: Layout.fontSize.md,
    color: Colors.textTertiary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Layout.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  settingText: {
    fontSize: Layout.fontSize.md,
    color: Colors.textPrimary,
    marginLeft: Layout.spacing.md,
    flex: 1,
  },
  bottomSection: {
    padding: Layout.spacing.lg,
  },
  agentButton: {
    marginBottom: Layout.spacing.xl,
  },
});