import LoginScreens from './LoginScreens';
import SignUpScreens from './SignUpScreens';
import InformationScreen from './InformationScreen';
import ChangePasswordScreen from './ChangePassScreen';
import FlashScreen from './FlashScreen';
import EmailScreen from './ForgotPasswordScreen/Email';
import SendOTPScreen from './ForgotPasswordScreen/SendOTP';
import ForgotPasswordScreen from './ForgotPasswordScreen/ForgotPassword';

export const auth = {
  FLASHSCREEN: FlashScreen,
  LOGINSCREENS: LoginScreens,
  SIGNUPSCREENS: SignUpScreens,
  INFORMATIONSCREEN: InformationScreen,
  CHANGEPASSSCREEN: ChangePasswordScreen,
  EMAILSCREEN: EmailScreen,
  SENDOTPSCREEN: SendOTPScreen,
  FORGOTPASSWORDSCREEN: ForgotPasswordScreen,
};
