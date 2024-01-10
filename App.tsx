import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DayListItem from './src/components/core/DayListItems';

const days = [...Array(30)].map((val,index) => index+1);

export default function App() {
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
