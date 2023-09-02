import { StyleSheet } from 'react-native';
import { Text } from '../../../components/StyledText';
import CustomButton from '../../../components/Button';

export default function ButtonAnswer({ name, onPress }) {
  return (
    <CustomButton
      rounded
      borderRadius={10}
      style={{ height: 44 }}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{name}</Text>
    </CustomButton>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 12,
    color: '#221F32',
    fontWeight: '500',
    width: '100%',
    textAlign: 'center',
    fontWeight: '800',
  },
});
