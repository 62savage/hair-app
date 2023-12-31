import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import CustomButton from '../../components/Button';
import { Text } from '../../components/StyledText';
import { useEffect, useState } from 'react';
import { TouchableIcon } from '../../components';

const _close_button = require('../../../assets/images/icons/close-button.png');

const CustomModal = ({
  isVisible,
  closeModal,
  height,
  goStart,
  bgGradientStart,
  bgGradientEnd,
  password,
  setIsVisible,
}) => {
  console.log('password 1111? =', password);
  const [text, setText] = useState('');

  const onSubmitText = () => {
    console.log(password, text);

    if (text === password) {
      setText('');
      goStart();
    } else {
      setText('');
      console.log('try other password');
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.5}
      onBackdropPress={closeModal}
    >
      <View style={styles(height).modalContainer}>
        <View style={{ marginRight: 0, marginLeft: 'auto' }}>
          <TouchableIcon icon={_close_button} onPress={setIsVisible} />
        </View>
        <Text style={{ color: '#221F32', fontSize: 16, fontWeight: '600' }}>
          비밀번호를 확인하세요.
        </Text>
        <TextInput
          onChangeText={text => setText(text)}
          //onSubmitEditing={onSubmitText}
          value={text}
          style={styles().input}
          textAlign="center"
          secureTextEntry={true}
        />
        <View style={[styles().buttonContainer]}>
          <CustomButton
            rounded
            borderRadius={20}
            style={[styles().button]}
            onPress={() => {
              onSubmitText();
            }}
            // bgGradientStart={bgGradientStart}
            // bgGradientEnd={bgGradientEnd}
          >
            <Text style={{ fontSize: 16, fontWeight: 700 }}>확인</Text>
          </CustomButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = height =>
  StyleSheet.create({
    modalContainer: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      height: height,
      gap: 10,
    },
    input: {
      borderRadius: 10,
      width: '85%',
      height: 39,
      borderColor: 'black',
      borderWidth: 1,
    },
    buttonContainer: {
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      flexBasis: '100%',
    },
  });

export default CustomModal;
