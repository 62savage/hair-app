import React from 'react';
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
    ></ScrollViewContainer>
  );
}
