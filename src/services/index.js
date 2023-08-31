import axios from 'axios';

class MBombsService {
  constructor() {
    this.BASE_TREE_SERVER_URL =
      'http://ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080';
    this.BASE_URL = 'http://ec2-user@ec2-43-201-111-38';
    this.axiosInstance = axios.create({
      baseURL: this.BASE_TREE_SERVER_URL,
      timeout: 2000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getNotice = async () => {
    try {
      let res = await this.axiosInstance.get('/notificationinfo');
      return res.data;
    } catch (error) {
      console.log('service getting notice error', error);
      throw error;
    }
  };
}

const Service = new MBombsService();

export default Service;
