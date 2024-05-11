const ebSocket = require('ws');
const crypto = require('crypto');

const APPID = '0424fea3';
const APISecret = 'MlYmNiYjhlMTc0MmE3';
const APIKey = 'a8afb4faf009';

const date = (new Date()).toUTCString();
const host = 'mcitem.com';

const signature_origin = `host: ${host}\ndate: ${date}\nGET /v2/iat HTTP/1.1`;
const signature_sha = crypto.createHmac('sha256', APISecret).update(signature_origin).digest('binary');
const signature = Buffer.from(signature_sha,'binary').toString('base64');

const authorization_origin = `api_key="${APIKey}",algorithm="hmac-sha256",headers="host date request-line",signature="${signature}"`;

const authorization = Buffer.from(authorization_origin).toString('base64');

const wssURL = `wss://iat-api.xfyun.cn/v2/iat?authorization=${authorization}&date=${encodeURIComponent(date)}&host=${host}`


const ws = new ebSocket(wssURL);

ws.onopen = function() {
    console.log('open');
}
// 流式api鉴权
