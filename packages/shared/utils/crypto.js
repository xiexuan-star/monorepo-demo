import CryptoJS from 'crypto-js';

// 加密
function encrypt(word) {
	const key = CryptoJS.enc.Utf8.parse('0D7FB71E8EC31E97');
	const srcs = CryptoJS.enc.Utf8.parse(word);
	const encrypted = CryptoJS.AES.encrypt(srcs, key, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	return encrypted.toString();
}
// 解密
function decrypt(word) {
	const key = CryptoJS.enc.Utf8.parse('0D7FB71E8EC31E97');
	const decrypt = CryptoJS.AES.decrypt(word, key, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}
export default {
	encrypt,
	decrypt
};
