import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Calls = () => {
  return (
    <View style={styles.container}>
      <Text>Calls</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Calls;
