import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FeedScreen() {
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
            />
            <Feather
              name="filter"
              size={16}
              color="#fff"
              style={styles.filterIcon}
            />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.tabsRow}
          >
            {['All', 'Live Now', 'Nearby', 'Top Rated', 'Urgent'].map(
              (tab, index) => (
                <TouchableOpacity
                  key={tab}
                  style={[
                    styles.tabButton,
                    index === 0 && styles.tabButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.tabText,
                      index === 0 && styles.tabTextActive,
                    ]}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </ScrollView>
        </LinearGradient>
        {[...Array(7)].map((_, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardImageWrapper}>
              <Image
                source={require('../assets/news.png')}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.liveTag}>LIVE</Text>
              <Text style={styles.highTag}>HIGH</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>
                Traffic accident on main street – Emergency vehicles responding
              </Text>

              <View style={styles.cardMetaRow}>
                <Text style={styles.metaText}>WitnessUser</Text>
                <View style={styles.credibilityDot} />
                <Text style={styles.metaText}>94% credible</Text>
              </View>

              <View style={styles.cardMetaRow}>
                <Ionicons name="location-outline" size={14} color="#aaa" />
                <Text style={styles.metaText}>Downtown, NYC</Text>
                <MaterialIcons
                  name="access-time"
                  size={14}
                  color="#aaa"
                  style={{ marginLeft: 10 }}
                />
                <Text style={styles.metaText}>2 min ago</Text>
              </View>

              <View style={styles.cardActionsRow}>
                <View style={styles.iconWithText}>
                  <Ionicons name="thumbs-up" color="#888" size={14} />
                  <Text style={styles.iconText}>89</Text>
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
                <Text style={styles.metaText}>1,234 views</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
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
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerContainer: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 12,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: '#22C55E',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#666666',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    color: '#fff',
    fontSize: 14,
  },
  searchIcon: {
    marginRight: 8,
  },
  filterIcon: {
    marginLeft: 8,
  },
  tabsRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tabButton: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  tabButtonActive: {
    backgroundColor: '#22C55E',
    borderColor: '#22C55E',
  },
  tabText: {
    color: '#ccc',
    fontSize: 13,
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#1A1F1D',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#454343',
    marginHorizontal: 16,
    marginBottom: 20,
    overflow: 'hidden',
  },
  cardImageWrapper: {
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  liveTag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#EF4444',
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  highTag: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#22C55E',
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 8,
  },
  cardMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    flexWrap: 'wrap',
  },
  metaText: {
    color: '#aaa',
    fontSize: 12,
    marginLeft: 4,
  },
  credibilityDot: {
    width: 6,
    height: 6,
    backgroundColor: '#22C55E',
    borderRadius: 3,
    marginHorizontal: 4,
  },
  cardActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 8,
    justifyContent: 'space-between',
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    color: '#888',
    fontSize: 12,
    marginLeft: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1A1F1D',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 10,
    color: '#ccc',
    marginTop: 2,
  },
  navTextActive: {
    fontSize: 10,
    color: '#22C55E',
    marginTop: 2,
  },
});
