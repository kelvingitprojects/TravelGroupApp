import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Trophy, Medal, Award } from 'lucide-react-native';
import { Participant } from '@/types';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';

interface LeaderboardProps {
  participants: Participant[];
}

export default function Leaderboard({ participants }: LeaderboardProps) {
  const sortedParticipants = [...participants].sort((a, b) => b.paymentProgress - a.paymentProgress);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy size={20} color={Colors.warning} />;
      case 1:
        return <Medal size={20} color={Colors.gray400} />;
      case 2:
        return <Award size={20} color={Colors.secondary} />;
      default:
        return <Text style={styles.rankNumber}>{index + 1}</Text>;
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 100) return Colors.success;
    if (progress >= 75) return Colors.primary;
    if (progress >= 50) return Colors.warning;
    return Colors.error;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Leaderboard</Text>
      {sortedParticipants.map((participant, index) => (
        <View key={participant.userId} style={styles.participantRow}>
          <View style={styles.rankContainer}>
            {getRankIcon(index)}
          </View>
          
          <Image 
            source={{ uri: participant.avatar || 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' }} 
            style={styles.avatar} 
          />
          
          <View style={styles.participantInfo}>
            <Text style={styles.participantName}>{participant.name}</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill, 
                    { 
                      width: `${participant.paymentProgress}%`,
                      backgroundColor: getProgressColor(participant.paymentProgress)
                    }
                  ]} 
                />
              </View>
              <Text style={styles.progressText}>{participant.paymentProgress}%</Text>
            </View>
            <Text style={styles.amountText}>${participant.amountPaid} paid</Text>
            <Text style={styles.amountText}>R{participant.amountPaid.toLocaleString()} paid</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  title: {
    fontSize: Layout.fontSize.lg,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
    marginBottom: Layout.spacing.lg,
    textAlign: 'center',
  },
  participantRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.md,
    paddingBottom: Layout.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  rankContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Layout.spacing.md,
  },
  rankNumber: {
    fontSize: Layout.fontSize.md,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textSecondary,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: Layout.borderRadius.full,
    marginRight: Layout.spacing.md,
  },
  participantInfo: {
    flex: 1,
  },
  participantName: {
    fontSize: Layout.fontSize.md,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.textPrimary,
    marginBottom: Layout.spacing.xs,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.xs,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: Colors.gray200,
    borderRadius: Layout.borderRadius.sm,
    marginRight: Layout.spacing.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: Layout.borderRadius.sm,
  },
  progressText: {
    fontSize: Layout.fontSize.sm,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.textSecondary,
    minWidth: 40,
    textAlign: 'right',
  },
  amountText: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textTertiary,
  },
});