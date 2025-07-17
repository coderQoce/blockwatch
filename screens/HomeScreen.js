import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome,
} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FeedScreen() {
  const [selectedTab, setSelectedTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const cardData = [
    {
      image: require('../assets/news.png'),
      title: 'Traffic accident on main street – Emergency vehicles responding',
      user: 'WitnessUser',
      credibility: 94,
      location: 'Downtown, NYC',
      time: '2 min ago',
      likes: 89,
      views: '1,234',
      isLive: true,
      threatLevel: 'high',
    },
    {
      image: require('../assets/onboarding-image.jpg'),
      title: 'Suspicious activity near mall entrance',
      user: 'SecurityBot_12',
      credibility: 88,
      location: 'Midtown, NYC',
      time: '5 min ago',
      likes: 67,
      views: '850',
      isLive: true,
      threatLevel: 'high',
    },
    {
      image: require('../assets/news.png'),
      title: 'Crowd forming at park — monitoring situation',
      user: 'PatrolCam',
      credibility: 76,
      location: 'Central Park, NYC',
      time: '10 min ago',
      likes: 32,
      views: '580',
      isLive: false,
      threatLevel: 'low',
    },
  ];

  const filteredCards = cardData.filter((card) => {
    if (selectedTab === 'Live Now' && !card.isLive) return false;

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        card.title.toLowerCase().includes(q) ||
        card.location.toLowerCase().includes(q) ||
        card.user.toLowerCase().includes(q)
      );
    }

    return true;
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121F1C' }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        <LinearGradient
          colors={['#011a11', '#121F1C']}
          style={styles.gradientSection}
        >
          {/* Header */}
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.title}>BlockWatch</Text>
              <Text style={styles.subtitle}>Decentralized Security</Text>
            </View>
            <View style={styles.headerActions}>
              <Ionicons
                name="notifications-outline"
                size={20}
                color="#fff"
                style={{ marginRight: 16 }}
              />
              <TouchableOpacity style={styles.uploadButton}>
                <Text style={styles.uploadButtonText}>+ Upload</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Search */}
          <View style={styles.searchBar}>
            <Ionicons
              name="search"
              size={16}
              color="#999"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search videos, location, users"
              placeholderTextColor="#888"
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Feather
              name="filter"
              size={16}
              color="#fff"
              style={styles.filterIcon}
            />
          </View>

          {/* Tabs */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.tabsRow}
          >
            {['All', 'Live Now', 'Nearby', 'Top Rated', 'Urgent'].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tabButton,
                  selectedTab === tab && styles.tabButtonActive,
                ]}
                onPress={() => setSelectedTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    selectedTab === tab && styles.tabTextActive,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </LinearGradient>

        {/* Cards */}
        {filteredCards.map((card, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardImageWrapper}>
              <Image
                source={card.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              {card.isLive && <Text style={styles.liveTag}>LIVE</Text>}
              {card.threatLevel === 'high' && (
                <Text style={styles.highTag}>HIGH</Text>
              )}
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{card.title}</Text>

              <View style={styles.cardMetaRow}>
                <Text style={styles.metaText}>{card.user}</Text>
                <View style={styles.credibilityDot} />
                <Text style={styles.metaText}>
                  {card.credibility}% credible
                </Text>
              </View>

              <View style={styles.cardMetaRow}>
                <Ionicons name="location-outline" size={14} color="#aaa" />
                <Text style={styles.metaText}>{card.location}</Text>
                <MaterialIcons
                  name="access-time"
                  size={14}
                  color="#aaa"
                  style={{ marginLeft: 10 }}
                />
                <Text style={styles.metaText}>{card.time}</Text>
              </View>

              <View style={styles.cardActionsRow}>
                <View style={styles.iconWithText}>
                  <Ionicons name="thumbs-up" color="#888" size={14} />
                  <Text style={styles.iconText}>{card.likes}</Text>
                </View>
                <View style={styles.iconWithText}>
                  <FontAwesome name="share" color="#888" size={14} />
                  <Text style={styles.iconText}>Share</Text>
                </View>
                <View style={styles.iconWithText}>
                  <Ionicons
                    name="alert-circle-outline"
                    color="#888"
                    size={14}
                  />
                  <Text style={styles.iconText}>Report</Text>
                </View>
                <Text style={styles.metaText}>{card.views} views</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#22C55E" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="camera" size={24} color="#ccc" />
          <Text style={styles.navText}>Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="compass" size={24} color="#ccc" />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="gift" size={24} color="#ccc" />
          <Text style={styles.navText}>Reward</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="#ccc" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121F1C',
  },
  gradientSection: {
    paddingBottom: 20,
  },
  headerContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: '#22C55E',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  uploadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#1E2B28',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
  },
  filterIcon: {
    marginHorizontal: 8,
  },
  tabsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#1A2A27',
    marginRight: 10,
  },
  tabButtonActive: {
    backgroundColor: '#22C55E',
  },
  tabText: {
    color: '#ccc',
    fontSize: 13,
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#1E2B28',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardImageWrapper: {
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  liveTag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontSize: 12,
    borderRadius: 4,
    fontWeight: 'bold',
  },
  highTag: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FACC15',
    color: '#000',
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontSize: 12,
    borderRadius: 4,
    fontWeight: 'bold',
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  cardMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  metaText: {
    color: '#aaa',
    fontSize: 12,
    marginLeft: 4,
  },
  credibilityDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#aaa',
    marginHorizontal: 6,
  },
  cardActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    justifyContent: 'space-between',
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  iconText: {
    color: '#aaa',
    fontSize: 12,
    marginLeft: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#1A2A27',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 10,
    color: '#999',
    marginTop: 2,
  },
  navTextActive: {
    fontSize: 10,
    color: '#22C55E',
    marginTop: 2,
    fontWeight: 'bold',
  },
});
