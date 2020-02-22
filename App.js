import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import Card from './card.js';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Notícias</Text>
      </View>
      <ScrollView>
        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 30,
  },

  title: {
    fontSize: 30,
  },

});