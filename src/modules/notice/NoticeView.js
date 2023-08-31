import React from 'react';
import ScrollViewContainer from '../../components/Container';

export default function NoticeView() {
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
