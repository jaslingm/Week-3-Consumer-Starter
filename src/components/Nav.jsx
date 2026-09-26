import { usePathname, useRouter } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Tab } from 'week-3-inclass';

const icon = require('../../assets/icon.png');

const items = [
  { label: 'Heart Rate', href: '/heart-rate' },
  { label: 'Sleep', href: '/sleep' },
  { label: 'Hydration', href: '/hydration' },
];

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <View style={styles.navigation}>
      {items.map((item) => {
        const active = pathname === item.href;

        return (
          <View key={item.href} style={styles.item}>
            <Tab
              onPress={() => router.replace(item.href)}
              variant="secondary"
              style={[styles.tab, active && styles.activeTab]}
            />
            <View pointerEvents="none" style={styles.tabContent}>
              <Image
                source={icon}
                style={[styles.icon, active && styles.activeIcon]}
              />
              <Text style={[styles.label, active && styles.activeLabel]}>{item.label}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    alignItems: 'center',
    borderTopColor: '#C3C3C3',
    borderTopWidth: 2,
    flexDirection: 'row',
    height: 88,
    justifyContent: 'space-around',
    paddingHorizontal: 8,
  },
  item: {
    height: 56,
    position: 'relative',
    width: 88,
  },
  tab: {
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    height: 56,
    width: 88,
  },
  activeTab: {
    backgroundColor: '#D9D9D9',
  },
  tabContent: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  icon: {
    height: 22,
    tintColor: '#2B2B2B',
    width: 22,
  },
  activeIcon: {
    tintColor: '#FFFFFF',
  },
  label: {
    color: '#2B2B2B',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
  activeLabel: {
    color: '#FFFFFF',
  },
});
