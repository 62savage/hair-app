import { StyleSheet } from 'react-native';
import { Text } from '../../../components/StyledText';
import { windowHeight, windowWidth } from '../../../styles';
import CustomButton from '../../../components/Button';

export default function ButtonAnswer({ name }) {
  return (
    <CustomButton rounded borderRadius={10} style={{ height: 44 }}>
      <Text style={styles.buttonText}>{name}</Text>
    </CustomButton>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 40,
    gap: 10,
    height: windowHeight - 280,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: '#221F32',
    fontWeight: '500',
    width: '100%',
    textAlign: 'center',
    fontWeight: '800',
  },
});
