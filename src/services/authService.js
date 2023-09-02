import axios from 'axios';

class MBOMBSAuthService {
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

  socialLoginOrRegister = async (email, signinMethod) => {
    try {
      let res = await this.axiosWebInstance.post('/signup', {
        email,
        signinMethod,
      });
      return res.data;
    } catch (error) {
      console.log('service login error', error);
      throw error;
    }
  };

  register = async (email, password) => {
    try {
      let res = await this.axiosInstance.post('/auth/register', {
        email,
        password,
      });
      return res.data;
    } catch (error) {
      console.log('service register error', error);
      throw error;
    }
  };

  logout = async () => {
    try {
      let res = await this.axiosInstance.post('/auth/logout');
      return res.data;
    } catch (error) {
      console.log('service logout error', error);
      throw error;
    }
  };

  forgotPassword = async email => {
    try {
      let res = await this.axiosInstance.post('/auth/forgot-password', {
        email,
      });
      return res.data;
    } catch (error) {
      console.log('service forgot password error', error);
      throw error;
    }
  };

  resetPassword = async (password, token) => {
    try {
      let res = await this.axiosInstance.post('/auth/reset-password', {
        password,
        token,
      });
      return res.data;
    } catch (error) {
      console.log('service reset password error', error);
      throw error;
    }
  };

  verifyEmail = async token => {
    try {
      let res = await this.axiosInstance.post('/auth/verify-email', {
        token,
      });
      return res.data;
    } catch (error) {
      console.log('service verify email error', error);
      throw error;
    }
  };

  resendEmailVerification = async () => {
    try {
      let res = await this.axiosInstance.post(
        '/auth/resend-email-verification',
      );
      return res.data;
    } catch (error) {
      console.log('service resend email verification error', error);
      throw error;
    }
  };
}

const AuthService = new MBOMBSAuthService();

export default AuthService;
