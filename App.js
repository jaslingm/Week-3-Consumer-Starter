import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Input, List, Tab } from 'week-3-inclass';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Button" />
      <Input placeholder="Input" />
      <List text="List" />
      <Tab />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 16,
    justifyContent: 'center',
    padding: 24,
  },
});
