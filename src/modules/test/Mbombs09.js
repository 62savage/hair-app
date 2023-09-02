import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import CustomButton from '../../components/Button';
import { Text } from '../../components/StyledText';

import { windowWidth, windowHeight } from '../../styles';
import { Spacer } from '../../components';
import ScrollViewContainer from '../../components/Container';

export default function Mbombs09(props) {
  // 316 - 320 - 321
  // 478 - 486 - 510 - 731
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      'http://ec2-user@ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080/node/320',
    )
      .then(data => data.json())
      .then(setData);
  }, []);
  return (
    <ScrollViewContainer
      header
      screenName="Hair Analyst"
      goBack
      onPressGoBackIcon={() => {
        props.navigation.navigate('Home');
      }}
    >
      <View style={styles.container}>
        <Text hCenter size={22}>
          {data.Name}
        </Text>
        <Spacer />
        {data.ChildrenIDs?.map(a => (
          <CustomButton rounded borderRadius={10} style={{ height: 44 }}>
            <Text style={styles.buttonText}>{a.name}</Text>
          </CustomButton>
        ))}
      </View>
    </ScrollViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 40,
    gap: 10,
    height: windowHeight - 280,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: '#221F32',
    fontWeight: '500',
    width: '100%',
    textAlign: 'center',
  },
});

/**
 *
 * @todo
 * - [ ] change to scroll view
 * - [ ] extract button to component
 * - [ ] with the button component, change it to module
 */
