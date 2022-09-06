import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Square from './components/Square';
export default function App() {
  return (
    <View style={styles.container}>

      <Square color = 'red' name = 'Square 1' />
      <Square color= 'yellow' name = 'Square 2' />
      <Square color = 'purple' name = 'Square 3' />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});
