import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  Text,
} from 'native-base';
import ChatListItem from '../components/ChatListItem';

const Chats = () => {
  return (
    <Container>
      <Content>
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default Chats;
