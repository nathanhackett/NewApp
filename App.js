import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Hello World</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 50,
    fontWeight: "light",
    fontFamily: 'notoserif',
    color: "#000",
  }
});

export default App;
