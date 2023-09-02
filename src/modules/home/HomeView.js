import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Linking } from 'react-native';

import { fonts, colors, windowWidth, commonStyles } from '../../styles';
import { Text } from '../../components/StyledText';
import CustomButton from '../../components/Button';
import _checkCircle from '../../../assets/images/check-circle.png';
import _lockIcon from '../../../assets/images/lock-icon.png';
import ScrollViewContainer from '../../components/Container';
import Service from '../../services';
import { Spacer } from '../../components';

const _right_arrow = require('../../../assets/images/icons/right-arrow.png');

export default function HomeScreen({ isExtended, setIsExtended }) {
  const [tree, setTree] = useState([]);

  const handleClickWebviewButton = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  const WebViewLinkButtonContent = [
    {
      title: '남다른 취향을 위한 색다른 감각',
      content: '로이드밤 헤어',
      link: 'http://lloydbomb.com/',
    },
    {
      title: '작은 차이를 만드는 헤어 큐레이터',
      content: '휴이엠 헤어',
      link: 'https://huuim.com/',
    },
  ];

  useEffect(() => {
    const getTreeData = async () => {
      try {
        let res = await Service.getTree();
        console.log(res);
        setTree(res);
      } catch (error) {
        console.log('notice error', error);
      }
    };

    getTreeData();
  }, []);

  return (
    <ScrollViewContainer>
      <View style={styles.bgImage}>
        <View style={styles.commonSection}>
          {tree.map((item, idx) => (
            <View style={[styles.section]}>
              <CustomButton
                key={`main-button-${item.id}`}
                rounded
                borderRadius={20}
                style={[styles.mainButton]}
                bgGradientStart={item.startGradient}
                bgGradientEnd={item.endGradient}
              >
                <View style={styles.mainButtonContent}>
                  <Image
                    style={styles.image}
                    source={_checkCircle}
                    resizeMode="contain"
                  />
                  <Spacer size={10} />
                  <Text
                    color={colors.black}
                    style={{ fontWeight: 100 }}
                    hCenter
                  >
                    {item.subTitle}
                  </Text>
                  <Text
                    bold
                    color={colors.black}
                    hCenter
                    size={15}
                    style={{ fontWeight: 700 }}
                  >
                    {item.title} {'>'}
                  </Text>
                </View>
              </CustomButton>
            </View>
          ))}

          {/**flex 2 */}
          {/* <View
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
                onPress={() => {
                  handleClickWebviewButton(item.link);
                }}
              >
                <View style={{ flexBasis: '90%', flexWrap: 'wrap' }}>
                  <Text style={{ fontWeight: 100 }} hCenter>
                    {item.title}
                  </Text>
                  <Text size={16} style={{ fontWeight: 700 }}>
                    {item.content}
                  </Text>
                </View>
                <View style={{ flexBasis: '10%', flexWrap: 'wrap' }}>
                  <Image
                    resizeMode="contain"
                    source={_right_arrow}
                    style={(styles.icon, { width: 12, height: 12 })}
                  />
                </View>
              </CustomButton>
            ))}
          </View> */}

          {/* <View
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
          </View> */}
        </View>
        <Spacer size={40} />
      </View>
    </ScrollViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary,
  },
  section: {
    width: windowWidth - 40,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
  },
  mainButton: {
    //flex: 1,
    flexBasis: '95%',
  },
  mainButtonContent: {
    height: '70%',
    flexBasis: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: '50%',
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
