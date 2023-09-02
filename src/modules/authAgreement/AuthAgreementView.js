import React from 'react';
import ViewContainer from '../../components/Container';
import { Text } from '../../components/StyledText';
import { StyleSheet, View } from 'react-native';
import { colors, commonStyles, windowWidth } from '../../styles';
import { Spacer } from '../../components';

import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function AuthAgreementView(props) {
  return (
    <ViewContainer scrollable={false}>
      <View style={[styles.container]}>
        <View>
          <Text hCenter size={18} fontWeight="500">
            환영합니다.{'\n'}가입하시려면 약관에 동의해주세요.
          </Text>
          <Spacer />
          <View width={windowWidth - 60} style={styles.section}>
            <View width="100%" style={styles.sectionView}>
              <AwesomeIcon />
            </View>
          </View>
        </View>
      </View>
    </ViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  section: {
    backgroundColor: colors.backgroundSecondary,
    height: 300,
    borderRadius: 15,
    padding: 30,
  },
  sectionView: {
    flex: 1,
    flexBasis: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    ...commonStyles.borderTest,
  },
});
