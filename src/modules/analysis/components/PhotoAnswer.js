import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../components/StyledText';
import { windowHeight, windowWidth } from '../../../styles';
import { Spacer } from '../../../components';

export default function PhotoAnswer({ name, imgUrl }) {
  console.log('a', imgUrl);
  return (
    <>
      <TouchableOpacity>
        <View style={styles.imageSection}>
          <Image
            source={{
              uri: imgUrl,
            }}
            style={styles.imageStyle}
          />
          <Text style={styles.buttonText}>{name}</Text>
        </View>
      </TouchableOpacity>
      <Spacer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 40,
    gap: 10,
    height: windowHeight - 280,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 3,
  },
  imageStyle: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
  },
});
