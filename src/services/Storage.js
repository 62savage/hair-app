import AsyncStorage from '@react-native-async-storage/async-storage';

class RNStorage {
  constructor() {}

  storeUserData = async value => {
    try {
      const jsonValue = JSON.stringify('testvalue');
      await AsyncStorage.setItem('user-data', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user-data');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
}

const Storage = new RNStorage();

export default Storage;
