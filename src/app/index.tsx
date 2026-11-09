
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Ionicons name="shield-checkmark" size={27} color="#FFFFFF" />
          </View>

          <View style={styles.brand}>
            <Text style={styles.brandName}>TweetShield</Text>
            <Text style={styles.brandTag}>AI TWEET SAFETY</Text>
          </View>

          <View style={styles.onlineBadge}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>Online</Text>
          </View>
        </View>

        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroLabel}>WELCOME TO TWEETSHIELD</Text>

          <Text style={styles.heroTitle}>
            Make social media{'\n'}
            <Text style={styles.highlight}>safer for everyone.</Text>
          </Text>

          <Text style={styles.heroDescription}>
            Detect potentially racist or sexist content using
            machine learning.
          </Text>
        </View>

        {/* Main card */}
        <View style={styles.mainCard}>
          <View style={styles.cardIcon}>
            <Ionicons name="scan-outline" size={28} color="#2563EB" />
          </View>

          <Text style={styles.cardTitle}>Analyze a Tweet</Text>

          <Text style={styles.cardDescription}>
            Check a tweet for potentially harmful language
            with our AI classification system.
          </Text>

          <Pressable
            style={styles.primaryButton}
            onPress={() => router.push('/analyze')}
          >
            <Text style={styles.primaryButtonText}>
              Analyze Tweet
            </Text>
            <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
          </Pressable>
        </View>

        {/* Features */}
        <Text style={styles.sectionTitle}>Explore Features</Text>

        <View style={styles.featureGrid}>
          <View style={styles.featureCard}>
            <Ionicons name="time-outline" size={25} color="#2563EB" />
            <Text style={styles.featureTitle}>History</Text>
            <Text style={styles.featureDescription}>
              View previous predictions
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Ionicons name="information-circle-outline" size={25} color="#2563EB" />
            <Text style={styles.featureTitle}>About Model</Text>
            <Text style={styles.featureDescription}>
              Learn how AI works
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Ionicons name="shield-checkmark-outline" size={25} color="#2563EB" />
            <Text style={styles.featureTitle}>Privacy</Text>
            <Text style={styles.featureDescription}>
              Understand data usage
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Ionicons name="moon-outline" size={25} color="#2563EB" />
            <Text style={styles.featureTitle}>Dark Mode</Text>
            <Text style={styles.featureDescription}>
              Comfortable viewing
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Powered by TF-IDF & Logistic Regression
          </Text>
          <Text style={styles.disclaimer}>
            AI predictions are not definitive judgments.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
  },
  header: {
    backgroundColor: '#101D36',
    paddingHorizontal: 22,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brand: {
    marginLeft: 12,
    flex: 1,
  },
  brandName: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
  },
  brandTag: {
    color: '#A5B4FC',
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 3,
  },
  onlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E3A35',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#34D399',
    marginRight: 6,
  },
  onlineText: {
    color: '#6EE7B7',
    fontSize: 11,
    fontWeight: '600',
  },
  hero: {
    backgroundColor: '#101D36',
    paddingHorizontal: 24,
    paddingBottom: 42,
  },
  heroLabel: {
    color: '#93C5FD',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 15,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 42,
  },
  highlight: {
    color: '#60A5FA',
  },
  heroDescription: {
    color: '#CBD5E1',
    fontSize: 14,
    lineHeight: 23,
    marginTop: 14,
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: -18,
    padding: 22,
    borderRadius: 22,
    elevation: 4,
  },
  cardIcon: {
    backgroundColor: '#EFF6FF',
    width: 55,
    height: 55,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#172554',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 17,
  },
  cardDescription: {
    color: '#64748B',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 9,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 13,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  sectionTitle: {
    color: '#172554',
    fontSize: 19,
    fontWeight: 'bold',
    marginHorizontal: 22,
    marginTop: 30,
    marginBottom: 15,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 14,
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    width: '46%',
    margin: '2%',
    padding: 17,
    borderRadius: 17,
    minHeight: 125,
  },
  featureTitle: {
    color: '#172554',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 12,
  },
  featureDescription: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 5,
  },
  footer: {
    alignItems: 'center',
    padding: 25,
  },
  footerText: {
    color: '#475569',
    fontSize: 11,
    fontWeight: '600',
  },
  disclaimer: {
    color: '#94A3B8',
    fontSize: 10,
    marginTop: 7,
  },
});
