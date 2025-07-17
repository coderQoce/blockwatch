import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, StatusBar, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      navigation.replace('Onboarding'); 
    }, 5000);


    return () => clearTimeout(timeout);
  }, []);

  return (
    <LinearGradient
      colors={['#011a11', '#000000', '#011a11']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        BLOCKWATCH
      </Animated.Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
});
