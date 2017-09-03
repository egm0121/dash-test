const DashButton = require('dash-button');
const Http = require('http');

const DASH_BUTTON_MAC_ADDRESS = require('./config.json').mac;

let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);

button.addListener(() => {
  console.log('hey amazon dash button pressed 💪🏼');
  Http.get('http://localhost:2222/light/dim/toggle',() => {});
});

