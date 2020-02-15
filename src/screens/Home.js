import React from 'react';
import {
  Container,
  Content,
  Header,
  Text,
  Body,
  Title,
  Right,
  Icon,
  Button,
} from 'native-base';
import RootTab from '../homeTabs';
import {View} from 'react-native';

const Home = () => {
  return (
    <Container>
      <Header style={{height: 60, paddingTop: 0}}>
        <Body>
          <Title style={{marginLeft: 10, fontWeight: '600'}}>WhatsApp</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
          <Button transparent>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>
      <View style={{flex: 1}}>
        <RootTab />
      </View>
    </Container>
  );
};

export default Home;
