var ImageKit = require("imagekit");

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT_URL,
});

async function uploadFile(file, filename) {
  const result = await imagekit.upload({
    file: file, //required
    fileName: filename, //required
  });
  return result;
}

module.exports = { uploadFile };
