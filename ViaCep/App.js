import { StatusBar } from 'react-native';

import { ContainerApp } from './style';
import { Header } from './src/Components/Header';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Home } from './src/screens/Home';


export default () => {
  let [fontsLoaded] = useFonts({
    
    Roboto_500Medium,
    Roboto_700Bold,
    
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <ContainerApp>
      <StatusBar backgroundColor={'transparent'} translucent/>
      {/* Header */}
    <Header/>
      {/* HOMESCREEN */}
      <Home/>
    </ContainerApp>
  );
}

};
