import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { Text } from '../../components/StyledText';

import { windowWidth, windowHeight } from '../../styles';
import { Spacer } from '../../components';
import ScrollViewContainer from '../../components/Container';

export default function Mbombs14(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      'http://ec2-user@ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080/node/316',
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
        <Spacer />
        <Text hCenter size={22}>
          {data.Name}
        </Text>
        <Spacer />
        {data.ChildrenIDs?.map(a => (
          <>
            <TouchableOpacity>
              <View style={styles.imageSection}>
                <Image
                  source={{
                    uri: a.imgUrl,
                  }}
                  style={styles.imageStyle}
                />
                <Text style={styles.buttonText}>{a.name}</Text>
              </View>
            </TouchableOpacity>
            <Spacer />
          </>
        ))}
      </View>
    </ScrollViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 40,
    gap: 10,
    height: windowHeight - 300,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 3,
  },
  imageStyle: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 10,
  },
  imageSection: {
    alignItems: 'center',
  },
});

/**
 *
 * @todo
 * - [ ] change to scroll view
 * - [ ] extract button to component
 * - [ ] with the button component, change it to module
 */
