import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Status = () => {
  return (
    <View style={styles.container}>
      <Text>Status</Text>
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

export default Status;
