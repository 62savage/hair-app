import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import CustomButton from '../../components/Button';
import { Text } from '../../components/StyledText';

import { windowWidth, windowHeight } from '../../styles';
import { Spacer } from '../../components';
import ScrollViewContainer from '../../components/Container';

export default function Mbombs15(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      'http://ec2-user@ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080/node/533',
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
        <Image
          source={{
            uri: 'https://m-bombs-admin.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-07-14%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.30.35.png',
          }}
          style={styles.lockImage}
        />
        <Spacer />
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
  lockImage: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
  },
});

/**
 *
 * @todo
 * - [ ] change to scroll view
 * - [ ] extract button to component
 * - [ ] with the button component, change it to module
 */
