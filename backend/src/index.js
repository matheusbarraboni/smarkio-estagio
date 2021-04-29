const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth')
const fs = require('fs');

textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: "API_KEY"
  }),
  serviceUrl: "URL_SERVICE",
  disableSslVerification: true
})

function getTextToSpeech(text, fileName) {
  const synthesizeParams = {
    text: text,
    accept: 'audio/mp3',
    voice: 'pt-BR_IsabelaV3Voice',
  }
  textToSpeech
    .synthesize(synthesizeParams)
    .then((response) => {generateFile(response, fileName)})
    .catch(err => {
      console.log('error:', err);
    });
}

function generateFile(response, fileName) {
    const audio = response.result;
    audio.pipe(fs.createWriteStream(`resources/${fileName}.mp3`));
  }

getTextToSpeech("Olá, Watson!", "audioteste")
