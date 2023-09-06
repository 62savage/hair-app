import { StyleSheet } from 'react-native';
import { Text } from '../../../components/StyledText';
import CustomButton from '../../../components/Button';
import { store } from '../../../redux/store';

export default function ButtonAnswer({ name, onPress }) {
  const { tree } = store.getState().tree;
  const { curAnalysis } = store.getState().analysisState;

  let curBranch = tree.filter(item => item.id == curAnalysis)[0];

  return (
    <CustomButton
      rounded
      borderRadius={10}
      style={{ height: 44 }}
      onPress={onPress}
      bgGradientStart={curBranch.startGradient}
      bgGradientEnd={curBranch.endGradient}
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
