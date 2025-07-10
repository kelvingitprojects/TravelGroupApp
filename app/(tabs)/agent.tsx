import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import { Search, MapPin, Star, Users, Shield, Filter } from 'lucide-react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { mockAgents } from '@/data/mockData';
import Button from '@/components/Button';

export default function AgentsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'verified' | 'top-rated'>('all');

  const filteredAgents = mockAgents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchQuery.toLowerCase())
                         );
    
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'verified' && agent.verified) ||
                         (selectedFilter === 'top-rated' && agent.agentRating >= 4.5);
    
    return matchesSearch && matchesFilter;
  });

  const handleAgentPress = (agentId: string) => {
    router.push(`/agent/${agentId}`);
  };

  const renderAgentCard = (agent: typeof mockAgents[0]) => (
    <TouchableOpacity 
      key={agent.id} 
      style={styles.agentCard}
      onPress={() => handleAgentPress(agent.id)}
      activeOpacity={0.9}
    >
      <View style={styles.agentHeader}>
        <Image source={{ uri: agent.avatar }} style={styles.agentAvatar} />
        <View style={styles.agentInfo}>
          <View style={styles.agentNameRow}>
            <Text style={styles.agentName}>{agent.name}</Text>
            {agent.verified && (
              <Shield size={16} color={Colors.primary} style={styles.verifiedIcon} />
            )}
          </View>
          <View style={styles.locationRow}>
            <MapPin size={14} color={Colors.textSecondary} />
            <Text style={styles.agentLocation}>{agent.location}</Text>
          </View>
          <View style={styles.ratingRow}>
            <Star size={14} color={Colors.warning} fill={Colors.warning} />
            <Text style={styles.agentRating}>{agent.agentRating}</Text>
            <Text style={styles.reviewCount}>({agent.reviewCount} reviews)</Text>
          </View>
        </View>
        <View style={styles.agentStats}>
          <Text style={styles.statNumber}>{agent.totalTrips}</Text>
          <Text style={styles.statLabel}>Trips</Text>
        </View>
      </View>

      <View style={styles.specialtiesContainer}>
        {agent.specialties.slice(0, 3).map((specialty, index) => (
          <View key={index} style={styles.specialtyTag}>
            <Text style={styles.specialtyText}>{specialty}</Text>
          </View>
        ))}
        {agent.specialties.length > 3 && (
          <Text style={styles.moreSpecialties}>+{agent.specialties.length - 3} more</Text>
        )}
      </View>

      <Text style={styles.agentDescription} numberOfLines={2}>
        {agent.description}
      </Text>

      <View style={styles.agentFooter}>
        <View style={styles.priceRange}>
          <Text style={styles.priceText}>From ${agent.priceRange.min}</Text>
        </View>
        <Button 
          title="View Profile" 
          variant="outline" 
          size="small" 
          onPress={() => handleAgentPress(agent.id)}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Travel Agents</Text>
        <Text style={styles.subtitle}>Find the perfect agent for your next adventure</Text>
        
        <View style={styles.searchContainer}>
          <Search size={20} color={Colors.textSecondary} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search agents, locations, or specialties..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={Colors.textTertiary}
          />
        </View>

        <View style={styles.filterContainer}>
          {[
            { key: 'all', label: 'All Agents' },
            { key: 'verified', label: 'Verified' },
            { key: 'top-rated', label: 'Top Rated' }
          ].map((filter) => (
            <TouchableOpacity
              key={filter.key}
              style={[
                styles.filterButton,
                selectedFilter === filter.key && styles.activeFilterButton
              ]}
              onPress={() => setSelectedFilter(filter.key as any)}
            >
              <Text style={[
                styles.filterText,
                selectedFilter === filter.key && styles.activeFilterText
              ]}>
                {filter.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.agentsContainer}>
          {filteredAgents.length > 0 ? (
            filteredAgents.map(renderAgentCard)
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>No agents found</Text>
              <Text style={styles.emptyText}>
                Try adjusting your search or filter criteria
              </Text>
            </View>
          )}
        </View>

        <View style={styles.becomeAgentSection}>
          <View style={styles.becomeAgentCard}>
            <Text style={styles.becomeAgentTitle}>Want to become an agent?</Text>
            <Text style={styles.becomeAgentText}>
              Join our network of travel professionals and start organizing amazing group trips.
            </Text>
            <Button 
              title="Apply to Become an Agent" 
              variant="primary" 
              onPress={() => router.push('/(auth)/agent-register')}
              style={styles.becomeAgentButton}
            />
          </View>
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
  header: {
    backgroundColor: Colors.white,
    padding: Layout.spacing.lg,
    paddingTop: Layout.spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  title: {
    fontSize: Layout.fontSize.xxxl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
    marginBottom: Layout.spacing.sm,
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: Layout.fontSize.md,
    color: Colors.textSecondary,
    marginBottom: Layout.spacing.lg,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundTertiary,
    borderRadius: Layout.borderRadius.lg,
    paddingHorizontal: Layout.spacing.md,
    marginBottom: Layout.spacing.md,
  },
  searchIcon: {
    marginRight: Layout.spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: Layout.fontSize.md,
    color: Colors.textPrimary,
    paddingVertical: Layout.spacing.md,
  },
  filterContainer: {
    flexDirection: 'row',
    gap: Layout.spacing.sm,
  },
  filterButton: {
    paddingHorizontal: Layout.spacing.md,
    paddingVertical: Layout.spacing.sm,
    borderRadius: Layout.borderRadius.full,
    backgroundColor: Colors.backgroundTertiary,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  activeFilterButton: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterText: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textSecondary,
    fontWeight: Layout.fontWeight.medium,
  },
  activeFilterText: {
    color: Colors.white,
  },
  content: {
    flex: 1,
  },
  agentsContainer: {
    padding: Layout.spacing.lg,
  },
  agentCard: {
    backgroundColor: Colors.white,
    borderRadius: Layout.borderRadius.xl,
    padding: Layout.spacing.lg,
    marginBottom: Layout.spacing.md,
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  agentHeader: {
    flexDirection: 'row',
    marginBottom: Layout.spacing.md,
  },
  agentAvatar: {
    width: 64,
    height: 64,
    borderRadius: Layout.borderRadius.full,
    marginRight: Layout.spacing.md,
  },
  agentInfo: {
    flex: 1,
  },
  agentNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.xs,
  },
  agentName: {
    fontSize: Layout.fontSize.lg,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
  },
  verifiedIcon: {
    marginLeft: Layout.spacing.sm,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.xs,
  },
  agentLocation: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textSecondary,
    marginLeft: Layout.spacing.xs,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agentRating: {
    fontSize: Layout.fontSize.sm,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.textPrimary,
    marginLeft: Layout.spacing.xs,
  },
  reviewCount: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textTertiary,
    marginLeft: Layout.spacing.xs,
  },
  agentStats: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: Layout.fontSize.xl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.primary,
  },
  statLabel: {
    fontSize: Layout.fontSize.xs,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  specialtiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: Layout.spacing.md,
    alignItems: 'center',
  },
  specialtyTag: {
    backgroundColor: Colors.backgroundTertiary,
    paddingHorizontal: Layout.spacing.sm,
    paddingVertical: Layout.spacing.xs,
    borderRadius: Layout.borderRadius.sm,
    marginRight: Layout.spacing.sm,
    marginBottom: Layout.spacing.xs,
  },
  specialtyText: {
    fontSize: Layout.fontSize.xs,
    color: Colors.textSecondary,
    fontWeight: Layout.fontWeight.medium,
  },
  moreSpecialties: {
    fontSize: Layout.fontSize.xs,
    color: Colors.primary,
    fontWeight: Layout.fontWeight.medium,
  },
  agentDescription: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: Layout.spacing.md,
  },
  agentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceRange: {
    flex: 1,
  },
  priceText: {
    fontSize: Layout.fontSize.md,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.primary,
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
  becomeAgentSection: {
    padding: Layout.spacing.lg,
  },
  becomeAgentCard: {
    backgroundColor: Colors.primary,
    borderRadius: Layout.borderRadius.xl,
    padding: Layout.spacing.xl,
    alignItems: 'center',
  },
  becomeAgentTitle: {
    fontSize: Layout.fontSize.xl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.white,
    marginBottom: Layout.spacing.sm,
    textAlign: 'center',
  },
  becomeAgentText: {
    fontSize: Layout.fontSize.md,
    color: Colors.white,
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: Layout.spacing.lg,
    lineHeight: 22,
  },
  becomeAgentButton: {
    backgroundColor: Colors.white,
  },
});