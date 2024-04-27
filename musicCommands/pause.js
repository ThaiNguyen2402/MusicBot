const { VoiceConnectionStatus } = require('@discordjs/voice');
const playModule = require('./play.js');

module.exports = {
  name: 'pause',
  description: 'Pause the music playback',
  execute: (message, args) => {
    const currentConnection = playModule.getCurrentConnection();
    if (currentConnection && currentConnection.state.status === VoiceConnectionStatus.Ready) {
      playModule.pause();
    } else {
      message.reply('❌ Không có nhạc nào để quẩy.');
    }
  },
};
