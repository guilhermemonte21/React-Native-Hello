import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Person from './src/components/Person/Person'

export default function App() {
  return (
    <SafeAreaView>
      <Person name='Guilherme' age={18}/>
      <Person name='Guilherme' age={18}/>
      <Person name='Guilherme' age={18}/>

      <StatusBar style="auto" />
    </SafeAreaView>
      

  );
}
