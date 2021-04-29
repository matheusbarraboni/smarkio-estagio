
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth')
const fs = require('fs');

class IbmWatsonService {
  textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
      apikey: "API_KEY"
    }),
    serviceUrl: "URL_KEY",
    disableSslVerification: true
  })

  getTextToSpeech(text, fileName) {
    const synthesizeParams = {
      text: text,
      accept: 'audio/mp3',
      voice: 'pt-BR_IsabelaV3Voice',
    }
    this.textToSpeech
      .synthesize(synthesizeParams)
      .then((response) => {this.generateFile(response, fileName)})
      .catch(err => {
        console.log('error:', err);
      });
  }

  generateFile(response, fileName) {
      const audio = response.result;
      audio.pipe(fs.createWriteStream(`resources/${fileName}.mp3`));
  }
}

module.exports = IbmWatsonService
