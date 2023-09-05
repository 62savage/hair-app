import AsyncStorage from '@react-native-async-storage/async-storage';

class RNStorage {
  constructor() {}

  storeUserData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user-data', jsonValue);
    } catch (e) {
      // saving error
      throw e;
    }
  };

  getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user-data');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      throw e;
    }
  };

  deleteUserData = async () => {
    try {
      await AsyncStorage.removeItem('user-data');
    } catch (e) {
      // error reading value
      throw e;
    }
  };
}

const Storage = new RNStorage();

export default Storage;
