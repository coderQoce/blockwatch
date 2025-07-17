import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const WalletOption = ({ iconName, IconSet, glowColor, title, subtitle }) => (
  <TouchableOpacity style={styles.walletItem}>
    <View style={[styles.iconWrapper, { shadowColor: glowColor }]}>
      <IconSet name={iconName} size={22} color={glowColor} />
    </View>
    <View>
      <Text style={styles.walletTitle}>{title}</Text>
      <Text style={styles.walletSubtitle}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
);

export default function ConnectWalletScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('HomeScreen'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={['#011a11', '#000000', '#011a11']}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Connect Your Wallet to Begin</Text>
          <Text style={styles.subtext}>
            We use your wallet to verify your identity and reward your content
          </Text>

          <WalletOption
            iconName="shield-outline"
            IconSet={Ionicons}
            glowColor="#3B82F6"
            title="Internet Identity"
            subtitle="Secure blockchain identity"
          />

          <WalletOption
            iconName="bolt"
            IconSet={MaterialIcons}
            glowColor="#EAB308"
            title="Plug ICP Wallet"
            subtitle="Popular ICP wallet"
          />

          <WalletOption
            iconName="wallet"
            IconSet={FontAwesome5}
            glowColor="#22C55E"
            title="Stoic Wallet"
            subtitle="Web-based ICP wallet"
          />

          <WalletOption
            iconName="wallet"
            IconSet={FontAwesome5}
            glowColor="#16A34A"
            title="NFID Wallet"
            subtitle="Secure blockchain identity"
          />

          <Text style={styles.footerText}>
            By connecting you agree to our{' '}
            <Text style={styles.link}>Terms of Service</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  innerContainer: {
    width: '100%',
    maxWidth: 400,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtext: {
    color: '#CCCCCC',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 32,
  },
  walletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
  walletTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  walletSubtitle: {
    color: '#CCCCCC',
    fontSize: 13,
  },
  footerText: {
    color: '#CCCCCC',
    fontSize: 12,
    marginTop: 48,
    textAlign: 'center',
    lineHeight: 18,
  },
  link: {
    color: '#22C55E',
    fontWeight: '600',
  },
});
