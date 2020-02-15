import React from 'react';
import {View, StyleSheet} from 'react-native';
import {List, ListItem, Left, Thumbnail, Body, Text, Badge} from 'native-base';

const ChatListItem = () => {
  return (
    <List style={{backgroundColor: '#fff'}}>
      <ListItem avatar style={{height: 70}}>
        <Left>
          <Thumbnail
            style={{height: 50, width: 50, borderRadius: 25}}
            source={{uri: 'https://loremflickr.com/60/60/cat'}}
          />
        </Left>
        <Body style={styles.wrap}>
          <View style={styles.top}>
            <Text>Kenshinman</Text>
            <Text note>3:45pm</Text>
          </View>
          <View style={styles.bottom}>
            <Text note>This is the last message...</Text>
            <Badge
              style={{
                backgroundColor: '#25D366',
                marginRight: 10,
                paddingLeft: 0,
                paddingRight: 0,
                height: 20,
                minWidth: 20,
              }}
            >
              <Text style={styles.badgeText}>2</Text>
            </Badge>
          </View>
        </Body>
      </ListItem>
    </List>
  );
};

const styles = StyleSheet.create ({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrap: {paddingBottom: 10},
  badge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#25D366',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  badgeText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
});

export default ChatListItem;
