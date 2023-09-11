import axios from 'axios';

class MBombsService {
  constructor() {
    this.BASE_TREE_SERVER_URL =
      'http://ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080';
    this.BASE_URL =
      'http://ec2-3-35-174-140.ap-northeast-2.compute.amazonaws.com/api';
    this.axiosInstance = axios.create({
      baseURL: this.BASE_TREE_SERVER_URL,
      timeout: 2000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.axiosWebInstance = axios.create({
      baseURL: this.BASE_URL,
      timeout: 2000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getTree = async () => {
    try {
      let res = await this.axiosWebInstance.get('/tree/branch');
      return res.data;
    } catch (error) {
      console.log('service getting info error', error);
      throw error;
    }
  };

  getInfo = async () => {
    try {
      let res = await this.axiosInstance.get('/notificationinfo');
      return res.data;
    } catch (error) {
      console.log('service getting info error', error);
      throw error;
    }
  };

  getNotice = async () => {
    try {
      let res = await this.axiosWebInstance.get('/notification/published');
      return res.data;
    } catch (error) {
      console.log('service getting notice error', error);
      throw error;
    }
  };

  getResult = async userId => {
    try {
      let res = await this.axiosInstance.get(`/analytics/${userId}`);
      return res.data;
    } catch (error) {
      console.log('service getting analytics result error', error);
      throw error;
    }
  };

  getPrivacyPolicy = async () => {
    try {
      let res = await this.axiosInstance.get('/privatepolicy');
      return res.data;
    } catch (error) {
      console.log('service getting privacy policy error', error);
      throw error;
    }
  };

  getMarketingPolicy = async () => {
    try {
      let res = await this.axiosInstance.get('/marketingpolicy');
      return res.data;
    } catch (error) {
      console.log('service getting privacy policy error', error);
      throw error;
    }
  };

  getAgreementPolicy = async () => {
    try {
      let res = await this.axiosInstance.get('/agreementpolicy');
      return res.data;
    } catch (error) {
      console.log('service getting privacy policy error', error);
      throw error;
    }
  };

  deleteAnalyst = async id => {
    try {
      let res = await this.axiosInstance.delete(`/analytics/${id}`);
      return res.data;
    } catch (error) {
      console.log('service delete analystic error', error);
      throw error;
    }
  };
}

const Service = new MBombsService();

export default Service;
