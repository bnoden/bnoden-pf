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

export const crDir = (normal = 'ltr', backwards = 'rtl') => {
  const dt = new Date();
  return dt.getSeconds() % 3 ? normal : backwards;
};
export const crYear = () => {
  const dt = new Date();
  let year = dt.getFullYear();
  let dtmod = dt.getSeconds() + 17;
  return dt.getSeconds() % 5 ? year : year - dtmod;
};
export const showtime = display => {
  if (!display) {
    const dt = new Date();
    display = dt.getSeconds() % 7 ? 'none' : 'block';
  }
  return display;
};
