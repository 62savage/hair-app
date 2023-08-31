import React from 'react';
import { StyleSheet, View } from 'react-native';

import CustomButton from '../../components/Button';
import { Text } from '../../components/StyledText';

import { colors } from '../../styles';

export default function Mbombs09(props) {
  return (
    <View style={styles.container}>
      <Text hCenter size={22}>
        최근 1년 이내 {'\n'}셀프 염색 혹은 탈색{'\n'}시술한 경험이 있다.
      </Text>
      <CustomButton>
        <Text style={styles.buttonText}>YES</Text>
      </CustomButton>
      <CustomButton bgGradientStart="#EDF0F1" bgGradientEnd="#96A5B1">
        <Text style={styles.buttonText}>NO</Text>
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
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

let selectedId = 480;

const apiRequestUrl =
  'http://ec2-user@ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080/node/478';
const apiRequestUrl2 = `http://ec2-user@ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080/${selectedId}/children`;

const mockData = {
  ID: 478,
  CreatedAt: '2023-07-14T06:51:37.831032Z',
  UpdatedAt: '2023-07-14T07:02:20.850465Z',
  DeletedAt: null,
  Name: '당신의 퍼스널 컬러는?\t',
  Deps: 0,
  ParentID: null,
  Parent: null,
  ChildrenIDs: [
    {
      imgUrl: '',
      name: '봄웜',
      id: 480,
    },
    {
      imgUrl: '',
      name: '가을웜\t\t',
      id: 481,
    },
    {
      imgUrl: '',
      name: '여름쿨\t\t',
      id: 482,
    },
    {
      imgUrl: '',
      name: '겨울쿨\t\t',
      id: 483,
    },
  ],
  Position: {
    X: 472,
    Y: -174,
  },
  ImgUrl: '',
  IsFinal: false,
  Grouping: 0,
  Category: 2,
  NextCategory: 3,
};
