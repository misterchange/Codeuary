import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import DayListItem from './src/components/core/DayListItems';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const days = [...Array(30)].map((val,index) => index+1);

export default function App() {

  const[fontsLoaded, fontError] = useFonts({
    Inter:Inter_900Black,
    Amiatic:AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
   }
  },[fontsLoaded,fontError])

  if (!fontsLoaded && !fontError) {
  return null;
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({item}) => <DayListItem day={item}/>}
      />


    <StatusBar style='auto'/>
    </View>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap:30
  },
  content:{
    gap:12,
    padding:12
  },
  column:{
    gap:12,
    // padding:12
  },
});
