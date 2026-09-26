import { usePathname, useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { Tab } from "week-3-inclass";

const items = [
  {
    label: "Heart Rate",
    href: "/heart-rate",
    icon: require("../../assets/icon.png"),
  },
  {
    label: "Sleep",
    href: "/sleep",
    icon: require("../../assets/icon.png"),
  },
  {
    label: "Hydration",
    href: "/hydration",
    icon: require("../../assets/icon.png"),
  },
];

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <View style={styles.navigation}>
      {items.map((item) => {
        const active = pathname === item.href;

        return (
          <Tab
            key={item.href}
            onPress={() => router.replace(item.href)}
            variant={active ? "primary" : "secondary"}
            style={styles.item}
          >
            <View style={styles.tabContent}>
              <Image
                source={item.icon}
                style={[styles.icon, active && styles.activeIcon]}
              />
              <Text style={[styles.label, active && styles.activeLabel]}>
                {item.label}
              </Text>
            </View>
          </Tab>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    alignItems: "center",
    borderTopColor: "#C3C3C3",
    borderTopWidth: 2,
    flexDirection: "row",
    height: 88,
    justifyContent: "space-around",
    paddingHorizontal: 8,
  },
  item: {
    height: 56,
    width: 88,
  },
  tabContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 22,
    tintColor: "#2B2B2B",
    width: 22,
  },
  activeIcon: {
    tintColor: "#FFFFFF",
  },
  label: {
    color: "#2B2B2B",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
  },
  activeLabel: {
    color: "#FFFFFF",
  },
});
