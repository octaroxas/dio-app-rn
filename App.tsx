import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home/Home'
import Curriculo from './src/pages/Curriculo/Curriculo';


export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <StatusBar style="auto" /> */}
    // </View>
      <Curriculo/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
