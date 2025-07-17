import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

export default function OnboardingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />

          
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/onboarding-image.jpg')}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.bottomContainer}>
                <Text style={styles.title}>Connect. Verify. Earn.</Text>
                <Text style={styles.description}>
                    BlockWatch verifies video evidence on-chain, empowering users to earn trust and rewards.
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.replace('ConnectWallet')}
                >
                    <Text style={styles.buttonText}>Get started</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    imageContainer: {
        height: height * 0.55,
        width: '100%',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#003014',
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    description: {
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 32,
    },
    button: {
        backgroundColor: '#16A34A',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});
