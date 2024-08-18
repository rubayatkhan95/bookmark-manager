
import { NativeModules } from 'react-native';
const CustomNativeModule = NativeModules.CustomNativeModule;

export default {
  show: (message) => CustomNativeModule.show(message) // Pass the message to the native method
};