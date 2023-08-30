import React from 'react';

import Navigator from './navigation/Navigator';

export default function AppView(props) {
  return (
    <Navigator
      isAuth={props.user}
      onNavigationStateChange={() => {}}
      uriPrefix="/app"
    />
  );
}
