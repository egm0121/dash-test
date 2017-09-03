const DashButton = require('dash-button');

const DASH_BUTTON_MAC_ADDRESS = require('./config.json').mac;

let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);

button.addListener(() => {
  console.log('hey amazon dash button pressed 💪🏼');
});

