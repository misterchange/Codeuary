import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const days = [...Array(30)].map((val,index) => index+1);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.box}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
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
  box:{
    backgroundColor: '#F9EDE3',
    // width: 200,
    // height:200,
    flex:1,
    aspectRatio:1,
    borderWidth:StyleSheet.hairlineWidth,
    borderRadius:15,
    borderColor:'#9b4521',

    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color: '#9b4521',
    fontSize:80,
  }
});
