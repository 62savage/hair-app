import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import CustomHeader from '../../components/Header';
import { Button } from '../../components';
import { Text } from '../../components/StyledText';
import { ScrollViewBackgroundLayer } from '../../components/ScrollViewBackgroundLayer';
import { colors } from '../../styles';
import ScrollViewContainer from '../../components/Container';

export default function InfoView(props) {
  console.log('InfoView props', props);

  return (
    <ScrollViewContainer
      header
      screenName="Info"
      goBack
      onPressGoBackIcon={() => {
        props.navigation.navigate('Home');
      }}
      childre
    >
      <View>
        <Text>Info</Text>
      </View>
    </ScrollViewContainer>
  );
}
