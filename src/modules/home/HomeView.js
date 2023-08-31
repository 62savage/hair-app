import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {
  fonts,
  colors,
  commonStyles,
  windowHeight,
  windowWidth,
} from '../../styles';
import { Caption, Text, Title } from '../../components/StyledText';
import CustomButton from '../../components/Button';
import _checkCircle from '../../../assets/images/check-circle.png';
import _lockIcon from '../../../assets/images/lock-icon.png';
import { ScrollViewBackgroundLayer } from '../../components/ScrollViewBackgroundLayer';
import { useRoute } from '@react-navigation/native';
import ScrollViewContainer from '../../components/Container';

export default function HomeScreen({ isExtended, setIsExtended }) {
  // const rnsUrl = 'https://reactnativestarter.com';
  // const handleClick = () => {
  //   Linking.canOpenURL(rnsUrl).then(supported => {
  //     if (supported) {
  //       Linking.openURL(rnsUrl);
  //     } else {
  //       console.log(`Don't know how to open URI: ${rnsUrl}`);
  //     }
  //   });
  // };

  const WebViewLinkButtonContent = [
    {
      title: '남다른 취향을 위한 색다른 감각',
      content: '로이드밤 헤어',
      link: 'https://reactnativestarter.com',
    },
    {
      title: '작은 차이를 만드는 헤어 큐레이터',
      content: '휴이엠 헤어',
      link: 'https://reactnativestarter.com',
    },
  ];

  return (
    <ScrollViewContainer>
      <View style={styles.bgImage}>
        <View style={styles.commonSection}>
          <View style={[styles.section]}>
            <CustomButton
              rounded
              borderRadius={30}
              style={[styles.mainButton]}
              bgGradientStart="#F9FA50"
              bgGradientEnd="#29FC4B"
            >
              <View style={styles.mainButtonContent}>
                <Text color={colors.black} style={{ fontWeight: 100 }} hCenter>
                  Personal Hair Style
                </Text>
                <Text
                  bold
                  color={colors.black}
                  hCenter
                  size={17}
                  style={{ fontWeight: 700 }}
                >
                  나에게 맞는 헤어스타일부터{'\n'} 헤어고민까지 진단테스트
                  시작하기
                </Text>
                <Image
                  style={styles.image}
                  source={_checkCircle}
                  resizeMode="contain"
                />
                <Text
                  color={colors.black}
                  size={16}
                  style={{ fontWeight: 700 }}
                >
                  Analyst Start!
                </Text>
              </View>
            </CustomButton>
          </View>
          {/**flex 2 */}
          <View
            style={[
              styles.section,
              { height: 150 + 10, justifyContent: 'space-between' },
            ]}
          >
            {WebViewLinkButtonContent.map((item, idx) => (
              <CustomButton
                key={`webview-button-${idx}`}
                rounded
                borderRadius={10}
                bgGradientStart="#806FE8"
                bgGradientEnd="#CC7AFF"
                style={{ height: 75 }}
              >
                <View style={{ flexBasis: '80%', flexWrap: 'wrap' }}>
                  <Text style={{ fontWeight: 100 }} hCenter>
                    {item.title}
                  </Text>
                  <Text size={16} style={{ fontWeight: 700 }}>
                    {item.content}
                  </Text>
                </View>
                <View style={{ flexBasis: '20%', flexWrap: 'wrap' }}>
                  <Text size={16} style={{ fontWeight: 700 }}>
                    {'>'}
                  </Text>
                </View>
              </CustomButton>
            ))}
          </View>

          <View
            style={[
              styles.section,
              {
                height: 150,
                flexDirection: 'row',
                gap: 10,
              },
            ]}
          >
            <CustomButton
              rounded
              borderRadius={10}
              bgGradientStart="#FAAC50"
              bgGradientEnd="#F9FA50"
              style={{
                flex: 1,
                height: '100%',
              }}
            >
              <View style={styles.lockContainer}>
                <Image
                  style={styles.lockImage}
                  source={_lockIcon}
                  resizeMode="contain"
                />
                <View>
                  <Text style={{ fontWeight: 100 }}>Designer private</Text>
                  <Text size={16} style={{ fontWeight: 700 }}>
                    디자이너 전용 {'>'}
                  </Text>
                </View>
              </View>
            </CustomButton>
            <CustomButton
              rounded
              borderRadius={10}
              bgGradientStart="#FF7971"
              bgGradientEnd="#FAAC50"
              style={{ flex: 1, height: '100%' }}
            >
              <View style={styles.lockContainer}>
                <Image
                  style={styles.lockImage}
                  source={_lockIcon}
                  resizeMode="contain"
                />
                <View>
                  <Text style={{ fontWeight: 100 }}>Owner private</Text>
                  <Text size={16} style={{ fontWeight: 700 }}>
                    점주 전용 {'>'}
                  </Text>
                </View>
              </View>
            </CustomButton>
          </View>
        </View>
      </View>
    </ScrollViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary,
  },

  mainButton: {
    flex: 1,
    flexBasis: '100%',
  },
  mainButtonContent: {
    height: '70%',
    flexBasis: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: '40%',
    height: 'auto',
    aspectRatio: 26 / 12,
  },
  lockImage: {
    width: '40%',
    height: 'auto',
    aspectRatio: 1,
  },
  bgImage: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary,
  },
  spacer: {
    flex: 0.2,
    backgroundColor: colors.backgroundPrimary,
  },
  lockContainer: {
    flex: 1,
    flexDirection: 'column',
    flexBasis: '100%',
    gap: 5,
  },
  section: {
    width: windowWidth - 40,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    // padding: 10,
  },
  sectionLarge: {
    flex: 1,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});

/**
 * @todo
 * - [ ] react native vector icons replace > to icon
 * - [ ] react native webview link
 *
 */
