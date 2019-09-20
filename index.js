import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-360';

export default class mindbox_vr extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Do you remember every each of them? This is MindBox Therapy.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0,4)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  greetingBox: {
    padding: 50,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderRadius: 50
    // borderWidth: 2
  },
  greeting: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('mindbox_vr', () => mindbox_vr);
