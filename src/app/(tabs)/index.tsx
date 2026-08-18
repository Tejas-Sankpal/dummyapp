import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Developers
        <Text style={styles.title}>Tejas</Text>
        
                i am a developer of mobile application👋</Text>
      <Text style={styles.subtitle}>Welcome to Dummy app </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
});