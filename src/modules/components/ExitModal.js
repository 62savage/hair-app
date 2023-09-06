import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Spacer, TouchableIcon } from '../../components';
import { colors, windowWidth } from '../../styles';
import CustomButton from '../../components/Button';
import { Text } from '../../components/StyledText';

const _question_button = require('../../../assets/images/icons/close-button.png');

const CustomModal = ({
  isVisible,
  closeModal,
  goHome,
  children,
  button,
  icon,
}) => {
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
          {icon}
          <Spacer />

          {children}
          <Spacer size={30} />
          {button}
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
