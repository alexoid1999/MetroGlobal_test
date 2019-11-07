import React, { useReducer, useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, SectionList, Image } from 'react-native';

import { httpGet } from './components/httpGet'
import { initialState, reducer } from './App.reducer';
import { getPage } from './App.actions';
import { IPost } from './App.types';
import { Label } from './components/Post/Post.styled';

import Post from './components/Post';


export default function App() {
  const [{data}, dispatch] = useReducer(reducer,initialState);

  window.onload = useCallback(()=>{
   dispatch(getPage(1));
  },[]);

 const sections:IPost[] = data;
  return (
      <View style={styles.container}>
        <FlatList<IPost>
          data = {sections}
          renderItem={({item})=> <Post data={item}/>}
          keyExtractor={item => String(item.id)}
          />
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
