import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, CreditCard, Zap } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';

interface PaymentPlanSelectorProps {
  tripPrice: number;
  onPlanSelect: (plan: 'bit-by-bit' | 'three-parts' | 'full') => void;
}

export default function PaymentPlanSelector({ tripPrice, onPlanSelect }: PaymentPlanSelectorProps) {
  const [selectedPlan, setSelectedPlan] = useState<'bit-by-bit' | 'three-parts' | 'full' | null>(null);

  const plans = [
    {
      id: 'bit-by-bit' as const,
      title: 'Bit-by-Bit',
      description: 'Pay small amounts daily/weekly until trip date',
      icon: Calendar,
      color: Colors.primary,
      example: `~$${Math.round(tripPrice / 30)}/day`,
    },
    {
      id: 'three-parts' as const,
      title: '3 Parts',
      description: 'Split payment into 3 equal milestones',
      icon: CreditCard,
      color: Colors.secondary,
      example: `$${Math.round(tripPrice / 3)} × 3`,
    },
    {
      id: 'full' as const,
      title: 'Full Payment',
      description: 'Pay the entire amount now',
      icon: Zap,
      color: Colors.success,
      example: `$${tripPrice} now`,
    },
  ];

  const handlePlanSelect = (planId: 'bit-by-bit' | 'three-parts' | 'full') => {
    setSelectedPlan(planId);
    onPlanSelect(planId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Payment Plan</Text>
      <Text style={styles.subtitle}>Select how you'd like to pay for this trip</Text>
      
      {plans.map((plan) => {
        const Icon = plan.icon;
        const isSelected = selectedPlan === plan.id;
        
        return (
          <TouchableOpacity
            key={plan.id}
            style={[
              styles.planCard,
              isSelected && { borderColor: plan.color, backgroundColor: `${plan.color}10` }
            ]}
            onPress={() => handlePlanSelect(plan.id)}
            activeOpacity={0.7}
          >
            <View style={styles.planHeader}>
              <View style={[styles.iconContainer, { backgroundColor: plan.color }]}>
                <Icon size={24} color={Colors.white} />
              </View>
              <View style={styles.planInfo}>
                <Text style={styles.planTitle}>{plan.title}</Text>
                <Text style={styles.planDescription}>{plan.description}</Text>
              </View>
              <Text style={styles.planExample}>{plan.example}</Text>
            </View>
            
            {isSelected && (
              <View style={styles.selectedIndicator}>
                <View style={[styles.selectedDot, { backgroundColor: plan.color }]} />
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Layout.spacing.lg,
  },
  title: {
    fontSize: Layout.fontSize.xl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: Layout.spacing.sm,
  },
  subtitle: {
    fontSize: Layout.fontSize.md,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: Layout.spacing.xl,
  },
  planCard: {
    backgroundColor: Colors.white,
    borderRadius: Layout.borderRadius.xl,
    padding: Layout.spacing.lg,
    marginBottom: Layout.spacing.md,
    borderWidth: 2,
    borderColor: Colors.border,
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  planHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: Layout.borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Layout.spacing.md,
  },
  planInfo: {
    flex: 1,
  },
  planTitle: {
    fontSize: Layout.fontSize.lg,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.textPrimary,
    marginBottom: Layout.spacing.xs,
  },
  planDescription: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  planExample: {
    fontSize: Layout.fontSize.md,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
  },
  selectedIndicator: {
    position: 'absolute',
    top: Layout.spacing.md,
    right: Layout.spacing.md,
  },
  selectedDot: {
    width: 12,
    height: 12,
    borderRadius: Layout.borderRadius.full,
  },
});