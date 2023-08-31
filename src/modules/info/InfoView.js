import React from 'react';
import { View } from 'react-native';
import CustomHeader from '../../components/Header';

export default function InfoView(props) {
  console.log('InfoView props', props);

  return (
    <View>
      <CustomHeader
        title="Info"
        goBack
        onPressGoBackIcon={() => {
          console.log('clicked');
          props.navigation.navigate('Home');
        }}
      />
    </View>
  );
}
