type LocaleType = {
  [key: string]: string;
};

const handler = {
  get(target: LocaleType, prop: string) {
    if (prop in target || prop === '$$typeof' || prop === 'prototype') {
      return target[prop];
    }
    // eslint-disable-next-line no-console
    console.error(`'${prop}' key doesn't exist in locale file`);
    return prop;
  },

};

// Alphabetical sorting for keys
const en: LocaleType = new Proxy({
  exclamationSign: 'Exclamation Sign',
  loading: 'Loading',
  pleaseTryAgainLater: 'Please try again later.',
  sorrySmthWentWrong: 'Sorry something went wrong',
}, handler);

export default en;
