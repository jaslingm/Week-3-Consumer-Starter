import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Input, List } from 'week-3-inclass';
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';

export default function SleepScreen() {
  return (
    <View style={styles.screen}>
      <Header />
      <ScrollView style={styles.body} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Sleep</Text>
        <View style={styles.stats}>
          <List variant="bullet" text="Status: Optimal" />
          <List variant="bullet" text="Total Time Asleep: 9 hours" />
          <List variant="bullet" text="Sleep Score: 88%" />
        </View>
        <View style={styles.form}>
          <Input variant="danger" placeholder="Please enter your name" />
          <Button title="Save" variant="secondary" style={styles.saveButton} />
        </View>
      </ScrollView>
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: '#FFFFFF', flex: 1 },
  body: { flex: 1 },
  content: { paddingHorizontal: 40, paddingTop: 64 },
  title: { color: '#000000', fontSize: 28, fontWeight: '700', lineHeight: 40, textAlign: 'center' },
  stats: { gap: 8, marginTop: 32 },
  form: { gap: 16, marginTop: 24 },
  saveButton: { backgroundColor: '#D9D9D9', borderWidth: 0 },
});
