const isMS =
  /MSIE 10/i.test(navigator.userAgent) ||
  /MSIE 9/i.test(navigator.userAgent) ||
  /rv:11.0/i.test(navigator.userAgent) ||
  /Edge\/\d./i.test(navigator.userAgent)
    ? true
    : false;

export const browserIs = {
  Chrome: () => {
    return !isMS && !!window.chrome ? true : false;
  },
  Firefox: () => {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1
      ? true
      : false;
  },
  MS: () => {
    return isMS ? true : false;
  }
};

export const crYear = (dt = new Date()) => {
  return dt.getFullYear();
};
