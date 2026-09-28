import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Header from '@/components/Header';
import { COLORS } from '@/constants/colors';

type Action = {
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  tint: string;
  onPress: () => void;
};

const ACTIONS: Action[] = [
  {
    title: 'Scan QR',
    subtitle: 'Record attendance',
    icon: 'qr-code-outline',
    tint: '#22C55E',
    onPress: () => router.push('/scan'),
  },
  {
    title: 'History',
    subtitle: 'Past records',
    icon: 'time-outline',
    tint: '#16A34A',
    onPress: () => router.push('/history'),
  },
  {
    title: 'Teacher',
    subtitle: 'Class dashboard',
    icon: 'clipboard-outline',
    tint: '#A6E9C0',
    onPress: () => router.push('/teacher'),
  },
  {
    title: 'Profile',
    subtitle: 'View account',
    icon: 'person-outline',
    tint: '#22C55E',
    onPress: () => router.push('/profile'),
  },
];

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Header title="QR Attendance" />
        <Text style={styles.byLine}>by Richard Canumay</Text>

        <View style={styles.heroCard}>
          <View style={styles.heroIconWrap}>
            <Ionicons name="qr-code" size={30} color={COLORS.primary} />
          </View>
          <Text style={styles.mainTitle}>School Event Attendance</Text>
          <Text style={styles.subtitle}>
            Scan QR Codes to record attendance during school activities.
          </Text>
        </View>

        <Text style={styles.sectionLabel}>Quick Actions</Text>
        <View style={styles.grid}>
          {ACTIONS.map((action) => (
            <Pressable
              key={action.title}
              style={({ pressed }) => [
                styles.actionCard,
                pressed && styles.actionCardPressed,
              ]}
              onPress={action.onPress}
            >
              <View style={[styles.actionIcon, { backgroundColor: action.tint + '1A' }]}>
                <Ionicons name={action.icon} size={26} color={action.tint} />
              </View>
              <Text style={styles.actionTitle}>{action.title}</Text>
              <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  byLine: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: -12,
    marginBottom: 20,
  },
  heroCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  heroIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primary + '1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
    textAlign: 'center',
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 10,
  },
  actionCard: {
    width: '48%',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 18,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  actionCardPressed: {
    backgroundColor: COLORS.surface,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  actionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  actionSubtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
    textAlign: 'center',
  },
});