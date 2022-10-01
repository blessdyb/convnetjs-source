import { get } from "lodash";

const emailRegex =
  /^[A-Z0-9+_.-]+@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i;
const phoneUSRegex = /^1?[0-9]{3}[0-9]{3}?[0-9]{4}$/i;

export default {
  email: {
    test: function emailTest(value) {
      return emailRegex.test(value.trim());
    },
  },
  emailAllowEmpty: {
    test: function emailAllowEmptyTest(value) {
      return !value || emailRegex.test(value.trim());
    },
  },
  emailMaxCount: {
    test: function emailMaxCountTest(value) {
      return get(value, "length", 0) <= 80;
    },
  },
  phone: {
    test: function phoneTest(value) {
      return /^\d{7,}$/.test(value.replace(/[\s()+\-.]|ext/gi, ""));
    },
  },
  phoneUsOnly: {
    test: function phoneUSTest(value) {
      return phoneUSRegex.test(value.replace(/[\s()+\-.]|ext/gi, ""));
    },
  },
  required: {
    test: function requiredTest(value) {
      return !!value && value.length > 0;
    },
  },
  maxCount: {
    test: function maxCountTest(value, { maxCount }) {
      return value && value.length <= maxCount;
    },
  },
};
