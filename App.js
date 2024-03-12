import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style={styles.container}
        source={{uri:'https://i.pinimg.com/236x/fd/9d/1c/fd9d1ca5dd067f1b10f0ff72b6b14e54.jpg'}}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:400,
    width:400,
  },
    Segview: {
      height:400,
      backgroundColor: '#f00',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
