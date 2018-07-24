const commons = require('../');
const path = require('path');
const fs = require('fs');
const moment = require('moment');

//====TEST MONGODB====

// const mongoose = require('mongoose');
// const uri = null;
// const options = null;
//
// commons.db.mongoose.connectToMongoDb(uri, options, function (error) {
//
// });


// ====TEST WINSTON====

// const logger = commons.logger;
// logger.initialize(path.resolve("./logs"), 'debug');
// logger.info('Hey winston logger initialized');
// logger.error('This is an error');
// logger.warn('This is a warning');
// logger.debug('This is a debug');

// ====TEST EMAIL====

// const emailSender = commons.workers.email;
// emailSender.initialize({
//     host: 'localhost',
//     port: 6379,
//     pass: null,
//     db: 0
// }, "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");
//
//
// const fullPath = path.join(__dirname, 'email_templates/account-welcome.html');
//
// const template = fs.readFileSync(fullPath, 'utf-8')
//   .replace(/ContactFirstName/, 'Marios')
//   .replace(/RedirectUrl/, 'fundsup://')
//   .replace(/ExpiryDate/, moment());
//
// const emailData = {
//     to: "marios@fundsup.co",
//     cc: 'mtzakris@gmail.com',
//     from: {name: 'Fundsup', email:'info@fundsup.co'},
//     type: 'INVESTOR_WELCOME',
//     subject: 'Welcome to Fundsup',
//     categories: ['INVESTOR', 'ACCOUNT', 'WELCOME'],
//     html: template
// };
//
// emailSender.send(emailData);


//====Test Utils====
// const utils = commons.utils;
// const kresta = {
//     name: 'asdads',
//     file: 'adasdaaaa'
// };
// utils.removeProperties(kresta, 'name');
// logger.info(utils);
//
//
// const test = utils.appendComponentsToPath(__dirname, ['lib','name'])
// logger.info(test);

// console.log(utils.generateRandomBytes(10, function (error, result) {
//     logger.info(result)
// }));

//====Test S3====

const base64Data = "data:image/png;base64,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"
const bucketOptions = [
    {name: "fundsup-profiles", allowedExtensions:["jpeg", "gif", "bmb", "tiff", "png", "jpg"], maxSize: 5000000},
    {name: "fundsup-logos", allowedExtensions:["jpeg", "gif", "bmb", "tiff", "png", "jpg"], maxSize: 5000000},
    {name: "fundsup-headers", allowedExtensions:["jpeg", "gif", "bmb", "tiff", "png", "jpg"], maxSize: 10000000},
    {name: "fundsup-decks", allowedExtensions:["pdf"], maxSize: 30000000},
    {name: "fundsup-test", allowedExtensions:["jpeg", "gif", "bmb", "tiff", "png", "jpg"], maxSize: 10000000}
];

const s3 = commons.files.s3;
s3.initialize(bucketOptions);
s3.uploadFile({fileName: 'testS3.jpg', bucketName: 'fundsup-test', data: base64Data, size: {height:50, width:50}}, function(error, result){
    if(error){
        console.log(error);
    } else {
        console.log(result);
    }
});






