import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          width: 300,
          height: 350,
          uri: "https://lh3.googleusercontent.com/67g4UUZ7ZrQ2bPNcRc_9lQYaI7wNf2IbbKGNyfxUlfkjzBeaXSD1iPTtn8H4JX-3clB0JovnTqeslnFKfEDxfJ7ZXAN1cPzZQFhiauUsP3lc4X2eLi093OnDyRQzZHp-ldTPPKVcCQ=w2400",
        }}
      />
    <Button 
      title='Get Started'
      onPress={() => alert("Button Pressed")}
    />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#949DFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
