import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import Button from '@/components/Button';

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleAuth = () => {
    // Handle authentication logic here
    router.replace('/(tabs)');
  };

  const handleGuestContinue = () => {
    router.replace('/(tabs)');
  };

  const handleAgentRegister = () => {
    router.push('/(auth)/agent-register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' }}
          style={styles.headerImage}
        />
        <View style={styles.overlay} />
        <View style={styles.headerContent}>
          <Text style={styles.title}>TravelTogether</Text>
          <Text style={styles.subtitle}>Join amazing group adventures</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, !isSignUp && styles.activeTab]}
            onPress={() => setIsSignUp(false)}
          >
            <Text style={[styles.tabText, !isSignUp && styles.activeTabText]}>
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, isSignUp && styles.activeTab]}
            onPress={() => setIsSignUp(true)}
          >
            <Text style={[styles.tabText, isSignUp && styles.activeTabText]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          {isSignUp && (
            <View style={styles.inputContainer}>
              <User size={20} color={Colors.textSecondary} style={styles.inputIcon} />
              <Text style={styles.inputLabel}>Full Name</Text>
            </View>
          )}
          
          <View style={styles.inputContainer}>
            <Mail size={20} color={Colors.textSecondary} style={styles.inputIcon} />
            <Text style={styles.inputLabel}>Email Address</Text>
          </View>
          
          <View style={styles.inputContainer}>
            <Lock size={20} color={Colors.textSecondary} style={styles.inputIcon} />
            <Text style={styles.inputLabel}>Password</Text>
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={20} color={Colors.textSecondary} />
              ) : (
                <Eye size={20} color={Colors.textSecondary} />
              )}
            </TouchableOpacity>
          </View>

          <Button
            title={isSignUp ? 'Create Account' : 'Sign In'}
            onPress={handleAuth}
            style={styles.authButton}
          />

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          <Button
            title="Continue as Guest"
            variant="outline"
            onPress={handleGuestContinue}
            style={styles.guestButton}
          />

          <TouchableOpacity style={styles.agentLink} onPress={handleAgentRegister}>
            <Text style={styles.agentLinkText}>
              Want to organize trips? Register as an Agent
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    height: 250,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  headerContent: {
    position: 'absolute',
    bottom: Layout.spacing.xl,
    left: Layout.spacing.lg,
    right: Layout.spacing.lg,
  },
  title: {
    fontSize: Layout.fontSize.xxxl + 8,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.white,
    marginBottom: Layout.spacing.sm,
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: Layout.fontSize.lg,
    color: Colors.white,
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: Layout.spacing.lg,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundTertiary,
    borderRadius: Layout.borderRadius.lg,
    padding: Layout.spacing.xs,
    marginBottom: Layout.spacing.xl,
  },
  tab: {
    flex: 1,
    paddingVertical: Layout.spacing.md,
    alignItems: 'center',
    borderRadius: Layout.borderRadius.md,
  },
  activeTab: {
    backgroundColor: Colors.white,
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  tabText: {
    fontSize: Layout.fontSize.md,
    fontWeight: Layout.fontWeight.medium,
    color: Colors.textSecondary,
  },
  activeTabText: {
    color: Colors.primary,
    fontWeight: Layout.fontWeight.semibold,
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundTertiary,
    borderRadius: Layout.borderRadius.lg,
    paddingHorizontal: Layout.spacing.md,
    paddingVertical: Layout.spacing.lg,
    marginBottom: Layout.spacing.md,
    position: 'relative',
  },
  inputIcon: {
    marginRight: Layout.spacing.md,
  },
  inputLabel: {
    flex: 1,
    fontSize: Layout.fontSize.md,
    color: Colors.textSecondary,
  },
  eyeIcon: {
    padding: Layout.spacing.sm,
  },
  authButton: {
    marginTop: Layout.spacing.lg,
    marginBottom: Layout.spacing.lg,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Layout.spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border,
  },
  dividerText: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textTertiary,
    marginHorizontal: Layout.spacing.md,
  },
  guestButton: {
    marginBottom: Layout.spacing.lg,
  },
  agentLink: {
    alignItems: 'center',
    paddingVertical: Layout.spacing.md,
  },
  agentLinkText: {
    fontSize: Layout.fontSize.md,
    color: Colors.primary,
    fontWeight: Layout.fontWeight.medium,
    textAlign: 'center',
  },
});