import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../components/StyledText';

export default function PhotoAnswer({ name, imgUrl, onPress }) {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.imageSection}>
          <Image
            resizeMode="cover"
            source={{
              uri: imgUrl,
            }}
            style={styles.imageStyle}
          />
          <Text style={styles.buttonText}>{name}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  imageStyle: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
    marginBottom: 10,
  },
});
