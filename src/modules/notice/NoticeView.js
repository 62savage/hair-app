import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Service from '../../services';

import ViewContainer from '../../components/Container';
import CustomButton from '../../components/Button';
import { Text } from '../../components/StyledText';
import Spacer from '../../components/Spacer';

import { colors, commonStyles, windowHeight, windowWidth } from '../../styles';

const _right_arrow = require('../../../assets/images/icons/right-arrow.png');

export default function NoticeView(props) {
  const [notice, setNotice] = useState([]);
  const [noticeClicked, setNoticeClicked] = useState({});

  useEffect(() => {
    const getNotice = async () => {
      try {
        let res = await Service.getNotice();
        setNotice(res);
      } catch (error) {
        console.log('notice error', error);
      }
    };

    getNotice();

    return () => {
      setNotice([]);
      setNoticeClicked(false);
    };
  }, []);

  console.log(notice);

  const NoticeButton = prop => {
    return (
      <CustomButton
        rounded
        borderRadius={10}
        bgGradientStart={colors.backgroundSecondary}
        bgGradientEnd={colors.backgroundSecondary}
        style={{
          width: windowWidth - 40,
          justifyContent: 'flex-start',
          height: 75,
        }}
        onPress={() => {
          let _notice = notice.filter(item => item.id === prop.id)[0];
          setNoticeClicked(_notice);
        }}
      >
        <View
          style={{
            flexBasis: '85%',
            flexWrap: 'wrap',
          }}
        >
          <Text fontWeight="700" size={16}>
            {prop.title}
          </Text>
          <Text fontWeight="300" size={12}>
            {prop.updatedAt ? prop.updatedAt : prop.createdAt}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            flexBasis: '15%',
            flexWrap: 'wrap',
          }}
        >
          <Image
            resizeMode="contain"
            source={_right_arrow}
            style={(styles.icon, { width: 12, height: 12 })}
          />
        </View>
      </CustomButton>
    );
  };

  if (noticeClicked && noticeClicked.id) {
    return (
      <ViewContainer
        header
        screenName="Notice"
        goBack
        onPressGoBackIcon={() => {
          setNoticeClicked({});
        }}
        scrollable={false}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: colors.backgroundSecondary,
            width: windowWidth - 40,
            borderRadius: 15,
            padding: 30,
          }}
        >
          <ViewContainer
            style={{
              flex: 1,
              backgroundColor: colors.backgroundSecondary,
              alignItems: 'left',
            }}
            safeAreaViewBounceColor={colors.backgroundSecondary}
            //   commonStyles.borderTest,
          >
            <Text fontWeight="700" size={18}>
              {noticeClicked.title}
            </Text>
            <Spacer size={5} />

            <Text fontWeight="300" size={12}>
              {noticeClicked.updatedAt
                ? noticeClicked.updatedAt
                : noticeClicked.createdAt}
            </Text>
            <Spacer />
            {noticeClicked.imgUrl && (
              <Image src={noticeClicked.imgUrl} style={styles.image} />
            )}
            <Spacer />
            <Text>{noticeClicked.content}</Text>
          </ViewContainer>
        </View>
      </ViewContainer>
    );
  } else {
    return (
      <ViewContainer
        header
        screenName="Notice"
        goBack
        onPressGoBackIcon={() => {
          props.navigation.navigate('Home');
        }}
      >
        {notice.map((item, _) => {
          return (
            <View key={`notice-${item.id}`}>
              <NoticeButton
                title={item.title}
                createdAt={item.createdAt}
                updatedAt={item.updatedAt}
                {...item}
              />
              <Spacer size={10} />
            </View>
          );
        })}
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
    borderRadius: 10,
  },
});
