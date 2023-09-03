import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Spacer, TouchableIcon } from '../../components';
import { colors, windowWidth } from '../../styles';
import CustomButton from '../../components/Button';
import { Text } from '../../components/StyledText';

const _check_linear_gradient = require('../../../assets/images/icons/question-button.png');
const _question_button = require('../../../assets/images/icons/close-button.png');

const CustomModal = ({ isVisible, closeModal, goHome }) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.5}
      onBackdropPress={() => console.log('aa')}
      onBackButtonPress={() => console.log('backdor')}
      stlye={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: colors.backgroundPrimary,
            padding: 20,
            borderRadius: 20,
            width: windowWidth * 0.85,
            height: 348,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={styles.closeIcon}>
            <TouchableIcon
              icon={_question_button}
              onPress={closeModal}
              style={{ width: 14, height: 14 }}
            />
          </View>
          <Image
            resizeMode="contain"
            source={_check_linear_gradient}
            style={[styles.icon, { width: 80, height: 80 }]}
          />
          <Spacer />
          <Text
            hCenter
            size={20}
            style={{ color: '#fff', fontWeight: 900, fontSize: 20 }}
          >
            잠깐!
          </Text>
          <Spacer size={4} />
          <Text hCenter size={12} fontWeight="400" style={{ color: '#fff' }}>
            지금까지 과정의 데이터는 모두 삭제 됩니다.
          </Text>
          <Text hCenter size={12} fontWeight="400" style={{ color: '#fff' }}>
            정말 뒤로 가시겠습니까?
          </Text>
          <Spacer size={30} />
          <CustomButton
            rounded
            borderRadius={20}
            style={{ height: 32, width: 124 }}
            onPress={goHome}
          >
            <Text style={{ color: '#000', fontSize: 16, fontWeight: 500 }}>
              종료하기
            </Text>
          </CustomButton>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
  },
  closeIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
});
