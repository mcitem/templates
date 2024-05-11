const crypto = require('crypto');


const APPID = '0424fea3'
const APISecret = 'secretxxxxxxxx2df7900c09xxxxxxxx'
const APIKey = 'keyxxxxxxxx8ee279348519exxxxxxxx'

const date = 'Wed, 10 Jul 2019 07:35:43 GMT';
const host = 'iat-api.xfyun.cn';

const signature_origin = `host: ${host}\ndate: ${date}\nGET /v2/iat HTTP/1.1`
const signature_sha = crypto.createHmac('sha256', APISecret).update(signature_origin).digest('binary');
const signature = Buffer.from(signature_sha,'binary').toString('base64');

const authorization_origin = `api_key="${APIKey}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`
const template = 'api_key="keyxxxxxxxx8ee279348519exxxxxxxx", algorithm="hmac-sha256", headers="host date request-line", signature="Hp3Ty4ZkSBmL8jKyOLpQiv9Sr5nvmeYEH7WsL/ZO2Jg="'
console.log(authorization_origin === template);

const authorization = Buffer.from(authorization_origin).toString('base64');

const template2 = 'YXBpX2tleT0ia2V5eHh4eHh4eHg4ZWUyNzkzNDg1MTlleHh4eHh4eHgiLCBhbGdvcml0aG09ImhtYWMtc2hhMjU2IiwgaGVhZGVycz0iaG9zdCBkYXRlIHJlcXVlc3QtbGluZSIsIHNpZ25hdHVyZT0iSHAzVHk0WmtTQm1MOGpLeU9McFFpdjlTcjVudm1lWUVIN1dzTC9aTzJKZz0i'

console.log(authorization === template2);
