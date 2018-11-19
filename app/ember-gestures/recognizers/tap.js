export default {
  include: ['tap'], //an array of recognizers to recognize with.
  exclude: [], //an array of recognizers that must first fail
  options: {
    taps: 1  // the settings to pass to the recognizer, event will be added automatically
  },
  recognizer: 'tap' // `tap|press|pan|swipe|rotate|pinch` the base Hammer recognizer to use
};
