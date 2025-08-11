import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ArrowLeft, MapPin, Star, Users, Shield, Calendar, MessageCircle, Phone, Mail } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { mockAgents, mockTrips } from '@/data/mockData';
import Button from '@/components/Button';
import TripCard from '@/components/TripCard';

export default function AgentDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'trips' | 'reviews'>('overview');
  
  const agent = mockAgents.find(a => a.id === id);
  
  if (!agent) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Agent not found</Text>
          <Button title="Go Back" onPress={() => router.back()} />
        </View>
      </SafeAreaView>
    );
  }

  const agentTrips = mockTrips.filter(trip => trip.createdBy === agent.id);

  const renderOverview = () => (
    <View style={styles.overviewContainer}>
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Users size={24} color={Colors.primary} />
          <Text style={styles.statNumber}>{agent.totalTrips}</Text>
          <Text style={styles.statLabel}>Total Trips</Text>
        </View>
        <View style={styles.statCard}>
          <Star size={24} color={Colors.warning} />
          <Text style={styles.statNumber}>{agent.agentRating}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
        <View style={styles.statCard}>
          <Calendar size={24} color={Colors.success} />
          <Text style={styles.statNumber}>{agent.yearsExperience}</Text>
          <Text style={styles.statLabel}>Years Exp.</Text>
        </View>
      </View>

      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.description}>{agent.description}</Text>
      </View>

      <View style={styles.specialtiesSection}>
        <Text style={styles.sectionTitle}>Specialties</Text>
        <View style={styles.specialtiesGrid}>
          {agent.specialties?.map((specialty, index) => (
            <View key={index} style={styles.specialtyTag}>
              <Text style={styles.specialtyText}>{specialty}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.languagesSection}>
        <Text style={styles.sectionTitle}>Languages</Text>
        <View style={styles.languagesContainer}>
          {agent.languages?.map((language, index) => (
            <Text key={index} style={styles.languageText}>
              {language}{index < (agent.languages?.length || 0) - 1 ? ', ' : ''}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.contactItem}>
          <Mail size={20} color={Colors.textSecondary} />
          <Text style={styles.contactText}>{agent.email}</Text>
        </View>
        <View style={styles.contactItem}>
          <MapPin size={20} color={Colors.textSecondary} />
          <Text style={styles.contactText}>{agent.location}</Text>
        </View>
      </View>
    </View>
  );

  const renderTrips = () => (
    <View style={styles.tripsContainer}>
      {agentTrips.length > 0 ? (
        agentTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No trips available</Text>
          <Text style={styles.emptyText}>
            This agent hasn't created any trips yet.
          </Text>
        </View>
      )}
    </View>
  );

  const renderReviews = () => (
    <View style={styles.reviewsContainer}>
      <View style={styles.reviewsHeader}>
        <Text style={styles.reviewsTitle}>Customer Reviews</Text>
        <View style={styles.ratingOverview}>
          <Star size={20} color={Colors.warning} fill={Colors.warning} />
          <Text style={styles.overallRating}>{agent.agentRating}</Text>
          <Text style={styles.reviewCount}>({agent.reviewCount} reviews)</Text>
        </View>
      </View>
      
      {/* Mock reviews */}
      {[
        {
          id: '1',
          userName: 'Sarah Johnson',
          userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          rating: 5,
          comment: 'Amazing experience! The trip was perfectly organized and exceeded all expectations.',
          date: '2024-01-15'
        },
        {
          id: '2',
          userName: 'Mike Chen',
          userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          rating: 5,
          comment: 'Professional service and attention to detail. Highly recommend!',
          date: '2024-01-10'
        },
        {
          id: '3',
          userName: 'Emma Davis',
          userAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          rating: 4,
          comment: 'Great trip overall. Good value for money and well-planned itinerary.',
          date: '2024-01-05'
        }
      ].map((review) => (
        <View key={review.id} style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Image source={{ uri: review.userAvatar }} style={styles.reviewerAvatar} />
            <View style={styles.reviewerInfo}>
              <Text style={styles.reviewerName}>{review.userName}</Text>
              <View style={styles.reviewRating}>
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    color={i < review.rating ? Colors.warning : Colors.gray300}
                    fill={i < review.rating ? Colors.warning : 'none'}
                  />
                ))}
              </View>
            </View>
            <Text style={styles.reviewDate}>{review.date}</Text>
          </View>
          <Text style={styles.reviewComment}>{review.comment}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Agent Profile</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <Image source={{ uri: agent.avatar }} style={styles.avatar} />
          <View style={styles.profileInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.agentName}>{agent.name}</Text>
              {agent.verified && (
                <Shield size={20} color={Colors.primary} style={styles.verifiedIcon} />
              )}
            </View>
            <View style={styles.locationRow}>
              <MapPin size={16} color={Colors.textSecondary} />
              <Text style={styles.location}>{agent.location}</Text>
            </View>
            <View style={styles.ratingRow}>
              <Star size={16} color={Colors.warning} fill={Colors.warning} />
              <Text style={styles.rating}>{agent.agentRating}</Text>
              <Text style={styles.reviewsText}>({agent.reviewCount} reviews)</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Price range: </Text>
              <Text style={styles.priceRange}>
                R{agent.priceRange?.min?.toLocaleString()} - R{agent.priceRange?.max?.toLocaleString()}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.actionButtons}>
          <Button 
            title="Message Agent" 
            variant="outline" 
            onPress={() => {}}
            style={styles.messageButton}
          />
          <Button 
            title="Book Consultation" 
            variant="primary" 
            onPress={() => {}}
            style={styles.bookButton}
          />
        </View>

        <View style={styles.tabContainer}>
          {(['overview', 'trips', 'reviews'] as const).map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.tabContent}>
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'trips' && renderTrips()}
          {activeTab === 'reviews' && renderReviews()}
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Layout.spacing.lg,
  },
  errorText: {
    fontSize: Layout.fontSize.lg,
    color: Colors.textPrimary,
    marginBottom: Layout.spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Layout.spacing.lg,
    paddingTop: Layout.spacing.xl,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backButton: {
    padding: Layout.spacing.sm,
  },
  headerTitle: {
    fontSize: Layout.fontSize.lg,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
  },
  headerSpacer: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    backgroundColor: Colors.white,
    padding: Layout.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: Layout.borderRadius.full,
    alignSelf: 'center',
    marginBottom: Layout.spacing.lg,
  },
  profileInfo: {
    alignItems: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.sm,
  },
  agentName: {
    fontSize: Layout.fontSize.xl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
    fontFamily: 'Poppins-Bold',
  },
  verifiedIcon: {
    marginLeft: Layout.spacing.sm,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.sm,
  },
  location: {
    fontSize: Layout.fontSize.md,
    color: Colors.textSecondary,
    marginLeft: Layout.spacing.xs,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.sm,
  },
  rating: {
    fontSize: Layout.fontSize.md,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.textPrimary,
    marginLeft: Layout.spacing.xs,
  },
  reviewsText: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textTertiary,
    marginLeft: Layout.spacing.xs,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textSecondary,
  },
  priceRange: {
    fontSize: Layout.fontSize.sm,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.primary,
  },
  actionButtons: {
    flexDirection: 'row',
    padding: Layout.spacing.lg,
    gap: Layout.spacing.md,
  },
  messageButton: {
    flex: 1,
  },
  bookButton: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  tab: {
    flex: 1,
    paddingVertical: Layout.spacing.md,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontSize: Layout.fontSize.md,
    color: Colors.textSecondary,
    fontWeight: Layout.fontWeight.medium,
  },
  activeTabText: {
    color: Colors.primary,
    fontWeight: Layout.fontWeight.semibold,
  },
  tabContent: {
    flex: 1,
  },
  overviewContainer: {
    padding: Layout.spacing.lg,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Layout.spacing.xl,
  },
  statCard: {
    backgroundColor: Colors.white,
    padding: Layout.spacing.lg,
    borderRadius: Layout.borderRadius.xl,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: Layout.spacing.xs,
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statNumber: {
    fontSize: Layout.fontSize.xl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
    marginTop: Layout.spacing.sm,
  },
  statLabel: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: Layout.spacing.xs,
  },
  aboutSection: {
    backgroundColor: Colors.white,
    padding: Layout.spacing.lg,
    borderRadius: Layout.borderRadius.xl,
    marginBottom: Layout.spacing.md,
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
  specialtiesSection: {
    backgroundColor: Colors.white,
    padding: Layout.spacing.lg,
    borderRadius: Layout.borderRadius.xl,
    marginBottom: Layout.spacing.md,
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  specialtiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Layout.spacing.sm,
  },
  specialtyTag: {
    backgroundColor: Colors.backgroundTertiary,
    paddingHorizontal: Layout.spacing.md,
    paddingVertical: Layout.spacing.sm,
    borderRadius: Layout.borderRadius.full,
  },
  specialtyText: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textSecondary,
    fontWeight: Layout.fontWeight.medium,
  },
  languagesSection: {
    backgroundColor: Colors.white,
    padding: Layout.spacing.lg,
    borderRadius: Layout.borderRadius.xl,
    marginBottom: Layout.spacing.md,
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  languagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  languageText: {
    fontSize: Layout.fontSize.md,
    color: Colors.textPrimary,
  },
  contactSection: {
    backgroundColor: Colors.white,
    padding: Layout.spacing.lg,
    borderRadius: Layout.borderRadius.xl,
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.md,
  },
  contactText: {
    fontSize: Layout.fontSize.md,
    color: Colors.textPrimary,
    marginLeft: Layout.spacing.md,
  },
  tripsContainer: {
    padding: Layout.spacing.lg,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: Layout.spacing.xxxl,
  },
  emptyTitle: {
    fontSize: Layout.fontSize.lg,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
    marginBottom: Layout.spacing.sm,
  },
  emptyText: {
    fontSize: Layout.fontSize.md,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  reviewsContainer: {
    padding: Layout.spacing.lg,
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.spacing.lg,
  },
  reviewsTitle: {
    fontSize: Layout.fontSize.lg,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
  },
  ratingOverview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overallRating: {
    fontSize: Layout.fontSize.md,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.textPrimary,
    marginLeft: Layout.spacing.xs,
  },
  reviewCount: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textTertiary,
    marginLeft: Layout.spacing.xs,
  },
  reviewCard: {
    backgroundColor: Colors.white,
    padding: Layout.spacing.lg,
    borderRadius: Layout.borderRadius.xl,
    marginBottom: Layout.spacing.md,
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.md,
  },
  reviewerAvatar: {
    width: 40,
    height: 40,
    borderRadius: Layout.borderRadius.full,
    marginRight: Layout.spacing.md,
  },
  reviewerInfo: {
    flex: 1,
  },
  reviewerName: {
    fontSize: Layout.fontSize.md,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.textPrimary,
    marginBottom: Layout.spacing.xs,
  },
  reviewRating: {
    flexDirection: 'row',
    gap: Layout.spacing.xs,
  },
  reviewDate: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textTertiary,
  },
  reviewComment: {
    fontSize: Layout.fontSize.md,
    color: Colors.textPrimary,
    lineHeight: 22,
  },
});