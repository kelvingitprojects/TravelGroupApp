import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { getTimeUntilTrip } from '@/utils/dateUtils';

interface CountdownProps {
  tripDate: string;
}

export default function Countdown({ tripDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilTrip(tripDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilTrip(tripDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [tripDate]);

  if (timeLeft.isExpired) {
    return (
      <View style={styles.container}>
        <Text style={styles.expiredText}>Trip has started!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Time Until Departure</Text>
      <View style={styles.timeContainer}>
        <View style={styles.timeBlock}>
          <Text style={styles.timeNumber}>{timeLeft.days}</Text>
          <Text style={styles.timeLabel}>Days</Text>
        </View>
        <Text style={styles.separator}>:</Text>
        <View style={styles.timeBlock}>
          <Text style={styles.timeNumber}>{timeLeft.hours.toString().padStart(2, '0')}</Text>
          <Text style={styles.timeLabel}>Hours</Text>
        </View>
        <Text style={styles.separator}>:</Text>
        <View style={styles.timeBlock}>
          <Text style={styles.timeNumber}>{timeLeft.minutes.toString().padStart(2, '0')}</Text>
          <Text style={styles.timeLabel}>Minutes</Text>
        </View>
        <Text style={styles.separator}>:</Text>
        <View style={styles.timeBlock}>
          <Text style={styles.timeNumber}>{timeLeft.seconds.toString().padStart(2, '0')}</Text>
          <Text style={styles.timeLabel}>Seconds</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundSecondary,
    padding: Layout.spacing.lg,
    borderRadius: Layout.borderRadius.xl,
    marginBottom: Layout.spacing.lg,
    alignItems: 'center',
  },
  title: {
    fontSize: Layout.fontSize.lg,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.textPrimary,
    marginBottom: Layout.spacing.md,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeBlock: {
    alignItems: 'center',
    minWidth: 60,
  },
  timeNumber: {
    fontSize: Layout.fontSize.xxxl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.primary,
    lineHeight: Layout.fontSize.xxxl + 4,
  },
  timeLabel: {
    fontSize: Layout.fontSize.xs,
    color: Colors.textSecondary,
    fontWeight: Layout.fontWeight.medium,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  separator: {
    fontSize: Layout.fontSize.xxxl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.primary,
    marginHorizontal: Layout.spacing.sm,
  },
  expiredText: {
    fontSize: Layout.fontSize.xl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.success,
  },
});