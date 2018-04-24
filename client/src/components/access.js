const isMS = () =>
  /MSIE 10/i.test(navigator.userAgent) ||
  /MSIE 9/i.test(navigator.userAgent) ||
  /rv:11.0/i.test(navigator.userAgent) ||
  /Edge\/\d./i.test(navigator.userAgent)
    ? 1
    : 0;

export const browserIs = {
  Chrome: () => (!isMS() && !!window.chrome ? 1 : 0),
  Firefox: () =>
    navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ? 1 : 0,
  MS: () => (isMS() ? 1 : 0)
};

export const crYear = (dt = new Date()) => dt.getFullYear();

export const my = {
  email: 'brandon@bnoden.com',
  linkedin: 'linkedin.com/in/bnoden',
  github: 'github.com/bnoden'
};
