import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, User, Mail, Phone, MapPin, FileText, Camera } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import Button from '@/components/Button';

export default function AgentRegisterScreen() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    location: '',
    description: '',
    experience: '',
  });

  const handleSubmit = () => {
    // Handle agent registration logic here
    console.log('Agent registration:', formData);
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.title}>Become an Agent</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.subtitle}>
          Join our network of travel professionals and start organizing amazing group trips
        </Text>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Business/Agency Name *</Text>
            <View style={styles.inputContainer}>
              <User size={20} color={Colors.textSecondary} />
              <Text style={styles.inputPlaceholder}>Enter your business name</Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Contact Person *</Text>
            <View style={styles.inputContainer}>
              <User size={20} color={Colors.textSecondary} />
              <Text style={styles.inputPlaceholder}>Your full name</Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email Address *</Text>
            <View style={styles.inputContainer}>
              <Mail size={20} color={Colors.textSecondary} />
              <Text style={styles.inputPlaceholder}>business@example.com</Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Phone Number *</Text>
            <View style={styles.inputContainer}>
              <Phone size={20} color={Colors.textSecondary} />
              <Text style={styles.inputPlaceholder}>+1 (555) 123-4567</Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Location *</Text>
            <View style={styles.inputContainer}>
              <MapPin size={20} color={Colors.textSecondary} />
              <Text style={styles.inputPlaceholder}>City, Country</Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Business Description *</Text>
            <View style={[styles.inputContainer, styles.textAreaContainer]}>
              <FileText size={20} color={Colors.textSecondary} />
              <Text style={styles.inputPlaceholder}>
                Tell us about your travel business and services...
              </Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Years of Experience</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputPlaceholder}>Select experience level</Text>
            </View>
          </View>

          <View style={styles.documentsSection}>
            <Text style={styles.sectionTitle}>Required Documents</Text>
            <Text style={styles.sectionSubtitle}>
              Please upload the following documents for verification
            </Text>

            <TouchableOpacity style={styles.uploadButton}>
              <Camera size={24} color={Colors.primary} />
              <View style={styles.uploadText}>
                <Text style={styles.uploadTitle}>Business License</Text>
                <Text style={styles.uploadSubtitle}>Upload a clear photo</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.uploadButton}>
              <Camera size={24} color={Colors.primary} />
              <View style={styles.uploadText}>
                <Text style={styles.uploadTitle}>ID/Passport</Text>
                <Text style={styles.uploadSubtitle}>Government issued ID</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.uploadButton}>
              <Camera size={24} color={Colors.primary} />
              <View style={styles.uploadText}>
                <Text style={styles.uploadTitle}>Insurance Certificate</Text>
                <Text style={styles.uploadSubtitle}>Travel insurance proof</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.termsSection}>
            <Text style={styles.termsText}>
              By registering as an agent, you agree to our Terms of Service and 
              Agent Agreement. Your application will be reviewed within 2-3 business days.
            </Text>
          </View>

          <Button
            title="Submit Application"
            onPress={handleSubmit}
            style={styles.submitButton}
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
  title: {
    fontSize: Layout.fontSize.xl,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
    fontFamily: 'Poppins-Bold',
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  subtitle: {
    fontSize: Layout.fontSize.md,
    color: Colors.textSecondary,
    textAlign: 'center',
    padding: Layout.spacing.lg,
    lineHeight: 22,
  },
  form: {
    padding: Layout.spacing.lg,
  },
  inputGroup: {
    marginBottom: Layout.spacing.lg,
  },
  inputLabel: {
    fontSize: Layout.fontSize.md,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.textPrimary,
    marginBottom: Layout.spacing.sm,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: Layout.borderRadius.lg,
    paddingHorizontal: Layout.spacing.md,
    paddingVertical: Layout.spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  textAreaContainer: {
    alignItems: 'flex-start',
    minHeight: 100,
  },
  inputPlaceholder: {
    flex: 1,
    fontSize: Layout.fontSize.md,
    color: Colors.textTertiary,
    marginLeft: Layout.spacing.md,
  },
  documentsSection: {
    marginTop: Layout.spacing.xl,
    marginBottom: Layout.spacing.xl,
  },
  sectionTitle: {
    fontSize: Layout.fontSize.lg,
    fontWeight: Layout.fontWeight.bold,
    color: Colors.textPrimary,
    marginBottom: Layout.spacing.sm,
  },
  sectionSubtitle: {
    fontSize: Layout.fontSize.md,
    color: Colors.textSecondary,
    marginBottom: Layout.spacing.lg,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: Layout.borderRadius.lg,
    padding: Layout.spacing.lg,
    marginBottom: Layout.spacing.md,
    borderWidth: 2,
    borderColor: Colors.border,
    borderStyle: 'dashed',
  },
  uploadText: {
    flex: 1,
    marginLeft: Layout.spacing.md,
  },
  uploadTitle: {
    fontSize: Layout.fontSize.md,
    fontWeight: Layout.fontWeight.semibold,
    color: Colors.textPrimary,
  },
  uploadSubtitle: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textSecondary,
    marginTop: Layout.spacing.xs,
  },
  termsSection: {
    backgroundColor: Colors.backgroundTertiary,
    padding: Layout.spacing.lg,
    borderRadius: Layout.borderRadius.lg,
    marginBottom: Layout.spacing.xl,
  },
  termsText: {
    fontSize: Layout.fontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
    textAlign: 'center',
  },
  submitButton: {
    marginBottom: Layout.spacing.xl,
  },
});