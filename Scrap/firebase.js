var admin = require('firebase-admin');

const { accountKey } = require('./config');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(accountKey),
  databaseURL: 'https://fala-ai-portohacksantos.firebaseio.com'
});

exports.default = firebase;