import { View, StyleSheet, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import CustomButton from '../../components/Button';
import { Text } from '../../components/StyledText';
import { useState } from 'react';

const CustomModal = ({ isVisible, closeModal, height, goStart }) => {
  const [text, setText] = useState('');
  const password = '123';

  const onChangeText = e => setText(e);

  const onSubmitText = () => {
    if (text === password) {
      goStart();
    } else {
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
        <Text style={{ color: '#221F32', fontSize: 16, fontWeight: '600' }}>
          비밀번호를 확인하세요.
        </Text>
        <TextInput
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitText}
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
            onPress={onSubmitText}
            bgGradientStart={'#FF7971'}
            bgGradientEnd={'#FAAC50'}
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
