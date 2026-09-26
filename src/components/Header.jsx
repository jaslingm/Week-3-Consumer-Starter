import { Image, StyleSheet, Text, View } from 'react-native';

const icon = require('../../assets/icon.png');

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.brand}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>Health</Text>
      </View>
      <Image source={icon} style={styles.profileIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    borderBottomColor: '#C3C3C3',
    borderBottomWidth: 2,
    flexDirection: 'row',
    height: 88,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  brand: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  icon: {
    height: 24,
    width: 24,
  },
  profileIcon: {
    height: 24,
    width: 24,
  },
  title: {
    color: '#000000',
    fontSize: 20,
    lineHeight: 24,
  },
});
