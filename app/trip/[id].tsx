import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity, Modal } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ArrowLeft, MapPin, Calendar, Users, Heart, MessageCircle } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { mockTrips } from '@/data/mockData';
import { formatDate } from '@/utils/dateUtils';
import Countdown from '@/components/Countdown';
import Leaderboard from '@/components/Leaderboard';
import PaymentPlanSelector from '@/components/PaymentPlanSelector';
import Button from '@/components/Button';

export default function TripDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isInterested, setIsInterested] = useState(false);
  
  const trip = mockTrips.find(t => t.id === id);
  
  if (!trip) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Trip not found</Text>
      </SafeAreaView>
    );
  }

  const handleJoinTrip = () => {
    setShowPaymentModal(true);
  };

  const handlePaymentPlanSelect = (plan: 'bit-by-bit' | 'three-parts' | 'full') => {
    console.log('Selected payment plan:', plan);
    setShowPaymentModal(false);
    // Here you would handle the payment logic
  };

  const handleInterest = () => {
    setIsInterested(!isInterested);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: trip.imageUrl }} style={styles.heroImage} />
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <ArrowLeft size={24} color={Colors.white} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{trip.name}</Text>
            <View style={styles.locationContainer}>
              <MapPin size={16} color={Colors.textSecondary} />
              <Text style={styles.location}>{trip.location}</Text>
            </View>
            <View style={styles.metaContainer}>
              <View style={styles.metaItem}>
                <Calendar size={16} color={Colors.textSecondary} />
                <Text style={styles.metaText}>{formatDate(trip.date)}</Text>
              </View>
              <View style={styles.metaItem}>
                <Users size={16} color={Colors.textSecondary} />
                <Text style={styles.metaText}>
                  {trip.participants.length}/{trip.maxParticipants} people
                </Text>
              </View>
            </View>
            <Text style={styles.price}>${trip.price} per person</Text>
          </View>

          <Countdown tripDate={trip.date} />

          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>About This Trip</Text>
            <Text style={styles.description}>{trip.description}</Text>
          </View>

          <Leaderboard participants={trip.participants} />

          <View style={styles.actionsContainer}>
            <Button
              title="Join Trip"
              variant="primary"
              size="large"
              onPress={handleJoinTrip}
              style={styles.joinButton}
            />
            <TouchableOpacity
              style={[styles.interestButton, isInterested && styles.interestedButton]}
              onPress={handleInterest}
            >
              <Heart 
                size={24} 
                color={isInterested ? Colors.white : Colors.error} 
                fill={isInterested ? Colors.white : 'none'}
              />
              <Text style={[styles.interestText, isInterested && styles.interestedText]}>
                {isInterested ? 'Interested' : 'I\'m Interested'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.chatContainer}>
            <View style={styles.chatHeader}>
              <MessageCircle size={20} color={Colors.primary} />
              <Text style={styles.chatTitle}>Group Chat</Text>
            </View>
            <Text style={styles.chatDescription}>
              Join the conversation with other travelers
            </Text>
            <Button
              title="Open Chat"
              variant="outline"
              onPress={() => {}}
              style={styles.chatButton}
            />
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={showPaymentModal}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setShowPaymentModal(false)}>
              <Text style={styles.modalCancel}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Payment Options</Text>
            <View style={styles.modalSpacer} />
          </View>
          <PaymentPlanSelector
            tripPrice={trip.price}
            onPlanSelect={handlePaymentPlanSelect}
          />
        </SafeAreaView>
      </Modal>
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
  imageContainer: {
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: 300,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: Layout.spacing.lg,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 40,
    height: 40,
    borderRadius: Layout.borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: Layout.spacing.lg,
  },
  header: {
    marginBottom: Layout.spacing.lg,
  },
  title: {
    fontSize: Layout.fontSize.xxxl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
    marginBottom: Layout.spacing.sm,
    fontFamily: 'Poppins-Bold',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.md,
  },
  location: {
    fontSize: Layout.fontSize.lg,
    color: Colors.textSecondary,
    marginLeft: Layout.spacing.sm,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Layout.spacing.md,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: Layout.fontSize.md,
    color: Colors.textSecondary,
    marginLeft: Layout.spacing.sm,
  },
  price: {
    fontSize: Layout.fontSize.xl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.primary,
  },
  descriptionContainer: {
    backgroundColor: Colors.white,
    padding: Layout.spacing.lg,
    borderRadius: Layout.borderRadius.xl,
    marginBottom: Layout.spacing.lg,
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
    marginBottom: Layout.spacing.md,
  },
  description: {
    fontSize: Layout.fontSize.md,
    color: Colors.textPrimary,
    lineHeight: 24,
  },
  actionsContainer: {
    flexDirection: 'row',
    marginBottom: Layout.spacing.lg,
    gap: Layout.spacing.md,
  },
  joinButton: {
    flex: 2,
  },
  interestButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.error,
    borderRadius: Layout.borderRadius.lg,
    paddingVertical: Layout.spacing.md,
  },
  interestedButton: {
    backgroundColor: Colors.error,
    borderColor: Colors.error,
  },
  interestText: {
    fontSize: Layout.fontSize.md,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.error,
    marginLeft: Layout.spacing.sm,
  },
  interestedText: {
    color: Colors.white,
  },
  chatContainer: {
    backgroundColor: Colors.white,
    padding: Layout.spacing.lg,
    borderRadius: Layout.borderRadius.xl,
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.sm,
  },
  chatTitle: {
    fontSize: Layout.fontSize.lg,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
    marginLeft: Layout.spacing.sm,
  },
  chatDescription: {
    fontSize: Layout.fontSize.md,
    color: Colors.textSecondary,
    marginBottom: Layout.spacing.lg,
  },
  chatButton: {
    alignSelf: 'flex-start',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Layout.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  modalCancel: {
    fontSize: Layout.fontSize.md,
    color: Colors.primary,
    fontWeight: Layout.fontWeight.medium,
  },
  modalTitle: {
    fontSize: Layout.fontSize.lg,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
  },
  modalSpacer: {
    width: 60,
  },
});