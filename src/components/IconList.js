import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {
  Container,
  Header,
  Content,
  View,
  Icon,
  Left,
  Button,
  Body,
  Right,
  Title,
  Text,
} from 'native-base';

import antDesign from '../icon-list/AntDesign';
import entypo from '../icon-list/Entypo';
import evilIcons from '../icon-list/EvilIcons';
import feather from '../icon-list/Feather';
import fontAwesome from '../icon-list/FontAwesome';
import fontAwesome5 from '../icon-list/FontAwesome5';
import foundation from '../icon-list/Foundation';
import ionicons from '../icon-list/Ionicons';
import materialCommunityIcons from '../icon-list/MaterialCommunityIcons';
import materialIcons from '../icon-list/MaterialIcons';
import octicons from '../icon-list/Octicons';
import simpleLineIcons from '../icon-list/SimpleLineIcons';
import zocial from '../icon-list/Zocial';

function getIconList(iconFamily) {
  switch (iconFamily) {
    case 'AntDesign':
      return antDesign;
    case 'Entypo':
      return entypo;
    case 'EvilIcons':
      return evilIcons;
    case 'Feather':
      return feather;
    case 'FontAwesome':
      return fontAwesome;
    case 'FontAwesome5':
      return fontAwesome5;
    case 'Foundation':
      return foundation;
    case 'Ionicons':
      return ionicons;
    case 'MaterialCommunityIcons':
      return materialCommunityIcons;
    case 'MaterialIcons':
      return materialIcons;
    case 'Octicons':
      return octicons;
    case 'SimpleLineIcons':
      return simpleLineIcons;
    case 'Zocial':
      return zocial;
    default:
      return ionicons;
  }
}

export default function IconList({route, navigation}) {
  const {iconFamily} = route.params;
  const iconList = getIconList(iconFamily);

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{iconFamily}</Title>
        </Body>
      </Header>
      <Content>
        <FlatList
          data={iconList}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.text}>{item}</Text>
              <Icon name={item} type={iconFamily} />
            </View>
          )}
        />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 5,
    borderColor: 'grey',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    alignItems: 'center',
  },
  text: {marginRight: 15},
});
