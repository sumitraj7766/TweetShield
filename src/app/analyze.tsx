
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const API_URL = 'https://tweetshield-api.onrender.com';

interface PredictionResult {
  prediction: number;
  label: string;
  confidence: number;
  threshold: number;
}

export default function AnalyzeScreen() {
  const router = useRouter();

  const [tweet, setTweet] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState('');

  const analyzeTweet = async () => {
  if (!tweet.trim()) {
    setError('Please enter a tweet first.');
    setResult(null);
    return;
  }

  setLoading(true);
  setError('');
  setResult(null);

  console.log('1. Analyze button clicked');
  console.log('2. API URL:', `${API_URL}/predict`);

  try {
    const response = await fetch(`${API_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tweet: tweet }),
    });

    console.log('3. Response status:', response.status);

    const data = await response.json();

    console.log('4. API response:', data);

    if (!response.ok) {
      throw new Error(data.detail || 'Prediction failed.');
    }

    if (data.error) {
      throw new Error(data.error);
    }

    setResult(data);
    console.log('5. Result updated successfully');

  } catch (err) {
    console.log('API ERROR:', err);

    setError(
      err instanceof Error
        ? err.message
        : 'Unable to connect to the AI server.'
    );
  } finally {
    setLoading(false);
    console.log('6. Loading stopped');
  }
};
  

  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={22} color="#101D36" />
        <Text style={styles.backText}>Back to Home</Text>
      </Pressable>

      <Text style={styles.heading}>Analyze a Tweet</Text>

      <Text style={styles.subtitle}>
        Check whether a tweet contains potentially harmful content.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Enter your tweet</Text>

        <TextInput
          style={styles.input}
          placeholder="Write or paste your tweet here..."
          placeholderTextColor="#8994A8"
          multiline
          maxLength={1000}
          value={tweet}
          onChangeText={(value) => {
            setTweet(value);
            setResult(null);
            setError('');
          }}
          textAlignVertical="top"
        />

        <Text style={styles.counter}>{tweet.length}/1000</Text>

        <Pressable
          style={[styles.button, loading && styles.disabledButton]}
          onPress={analyzeTweet}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Ionicons name="shield-checkmark" size={20} color="#FFFFFF" />
          )}

          <Text style={styles.buttonText}>
            {loading ? 'Analyzing...' : 'Analyze Tweet'}
          </Text>
        </Pressable>
      </View>

      {error ? (
        <View style={styles.errorCard}>
          <Ionicons name="alert-circle" size={22} color="#DC2626" />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}

      {result ? (
        <View style={styles.resultCard}>
          <Ionicons
            name={
              result.prediction === 1
                ? 'warning'
                : 'checkmark-circle'
            }
            size={38}
            color={result.prediction === 1 ? '#DC2626' : '#16A34A'}
          />

          <Text style={styles.resultTitle}>Prediction Result</Text>

          <Text
            style={[
              styles.resultLabel,
              {
                color:
                  result.prediction === 1 ? '#DC2626' : '#16A34A',
              },
            ]}
          >
            {result.label}
          </Text>

          <View style={styles.resultDivider} />

          <Text style={styles.probabilityLabel}>
            Probability of class 1
          </Text>

          <Text style={styles.probability}>
            {result.confidence.toFixed(2)}%
          </Text>

          <Text style={styles.threshold}>
            Decision threshold: {(result.threshold * 100).toFixed(0)}%
          </Text>
        </View>
      ) : null}

      <Text style={styles.note}>
        Note: AI predictions are indicative, not definitive. Always review
        the context before judging a tweet.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
    padding: 22,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    gap: 8,
  },
  backText: {
    color: '#101D36',
    fontSize: 15,
    fontWeight: '600',
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#101D36',
  },
  subtitle: {
    color: '#69758A',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#101D36',
    marginBottom: 12,
  },
  input: {
    minHeight: 160,
    borderWidth: 1,
    borderColor: '#DCE3EF',
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    color: '#101D36',
  },
  counter: {
    textAlign: 'right',
    color: '#8994A8',
    marginTop: 8,
    fontSize: 12,
  },
  button: {
    backgroundColor: '#2563EB',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    marginTop: 18,
  },
  disabledButton: {
    opacity: 0.65,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  errorCard: {
    backgroundColor: '#FEE2E2',
    borderRadius: 12,
    padding: 15,
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  errorText: {
    color: '#991B1B',
    flex: 1,
    fontSize: 14,
  },
  resultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 22,
    marginTop: 22,
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#101D36',
    marginTop: 12,
  },
  resultLabel: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  resultDivider: {
    height: 1,
    backgroundColor: '#E5EAF2',
    width: '100%',
    marginVertical: 18,
  },
  probabilityLabel: {
    color: '#69758A',
    fontSize: 13,
  },
  probability: {
    fontSize: 30,
    fontWeight: '800',
    color: '#101D36',
    marginTop: 5,
  },
  threshold: {
    fontSize: 12,
    color: '#8994A8',
    marginTop: 8,
  },
  note: {
    color: '#69758A',
    fontSize: 12,
    lineHeight: 19,
    marginTop: 22,
    marginBottom: 25,
  },
});
