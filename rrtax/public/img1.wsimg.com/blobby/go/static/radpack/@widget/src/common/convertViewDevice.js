import { TABLET, MOBILE } from "../common/constants/device";
const regex = /mobile/i;

function convertViewDevice(viewDevice) {
  return regex.test(viewDevice) ? MOBILE : TABLET;
}

export default convertViewDevice;
