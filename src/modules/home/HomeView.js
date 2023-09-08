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
import CustomModal from '../components/CustomModal';

const _right_arrow = require('../../../assets/images/icons/right-arrow.png');
const _locked = require('../../../assets/images/icons/locked.png');
const _unlocked = require('../../../assets/images/icons/unlocked.png');

export default function HomeScreen({ isExtended, setIsExtended, ...props }) {
  const tree = props.tree;
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = (id, isLocked) => {
    props.setAnalysisState(id);
    if (!isLocked) {
      props.navigation.navigate('START');
    } else {
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const goStart = () => {
    setModalVisible(false);
    props.navigation.navigate('START');
  };

  useEffect(() => {
    const getTreeData = async () => {
      try {
        let res = await Service.getTree();
        console.log(res);
        props.getTree(res);
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
            <View style={[styles.section]} key={`main-button-${item.id}`}>
              <CustomButton
                rounded
                borderRadius={20}
                style={[styles.mainButton]}
                bgGradientStart={item.startGradient}
                bgGradientEnd={item.endGradient}
                onPress={() => onPress(item.id, item.locked)}
              >
                <View style={styles.mainButtonContent}>
                  <Image
                    style={styles.image}
                    source={item.locked ? _locked : _unlocked}
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
              <CustomModal
                isVisible={modalVisible}
                closeModal={closeModal}
                goStart={goStart}
                height={162}
                bgGradientStart={item.startGradient}
                bgGradientEnd={item.endGradient}
                password={item?.password || '1234'}
              />
            </View>
          ))}
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
  input: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    fontSize: 18,
    marginVertical: 20,
  },
});

/**
 * @todo
 * - [ ] react native vector icons replace > to icon
 * - [ ] react native webview link
 *
 */
