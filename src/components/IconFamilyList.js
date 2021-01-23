import React from 'react';

import {
  Container,
  Header,
  Content,
  Body,
  Title,
  List,
  ListItem,
  Text,
} from 'native-base';

export default function IconFamilyList({navigation}) {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Icon Families</Title>
        </Body>
      </Header>
      <Content>
        <List>
          <ListItem
            onPress={() =>
              navigation.navigate('IconList', {
                iconFamily: 'AntDesign',
              })
            }>
            <Text>AntDesign</Text>
          </ListItem>
          <ListItem
            onPress={() =>
              navigation.navigate('IconList', {
                iconFamily: 'Entypo',
              })
            }>
            <Text>Entypo</Text>
          </ListItem>
          <ListItem
            onPress={() =>
              navigation.navigate('IconList', {
                iconFamily: 'EvilIcons',
              })
            }>
            <Text>EvilIcons</Text>
          </ListItem>
          <ListItem
            onPress={() =>
              navigation.navigate('IconList', {
                iconFamily: 'Feather',
              })
            }>
            <Text>Feather</Text>
          </ListItem>
          <ListItem
            onPress={() =>
              navigation.navigate('IconList', {
                iconFamily: 'FontAwesome',
              })
            }>
            <Text>FontAwesome</Text>
          </ListItem>
          <ListItem
            onPress={() =>
              navigation.navigate('IconList', {
                iconFamily: 'FontAwesome5',
              })
            }>
            <Text>FontAwesome5</Text>
          </ListItem>
          <ListItem
            onPress={() =>
              navigation.navigate('IconList', {
                iconFamily: 'Foundation',
              })
            }>
            <Text>Foundation</Text>
          </ListItem>
          <ListItem
            onPress={() =>
              navigation.navigate('IconList', {
                iconFamily: 'Ionicons',
              })
            }>
            <Text>Ionicons</Text>
          </ListItem>
          <ListItem
            onPress={() =>
              navigation.navigate('IconList', {
                iconFamily: 'MaterialIcons',
              })
            }>
            <Text>MaterialIcons</Text>
          </ListItem>
          <ListItem
            onPress={() =>
              navigation.navigate('IconList', {
                iconFamily: 'MaterialCommunityIcons',
              })
            }>
            <Text>MaterialCommunityIcons</Text>
          </ListItem>
          <ListItem
            onPress={() =>
              navigation.navigate('IconList', {
                iconFamily: 'Octicons',
              })
            }>
            <Text>Octicons</Text>
          </ListItem>
          <ListItem
            onPress={() =>
              navigation.navigate('IconList', {
                iconFamily: 'SimpleLineIcons',
              })
            }>
            <Text>SimpleLineIcons</Text>
          </ListItem>
          <ListItem
            onPress={() =>
              navigation.navigate('IconList', {
                iconFamily: 'Zocial',
              })
            }>
            <Text>Zocial</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}
