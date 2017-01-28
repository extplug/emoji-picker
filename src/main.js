import Plugin from 'extplug/Plugin'
import request from 'extplug/util/request'

const EMOJI_PICKER_URL = 'https://rawgit.com/Burkes/emoji-picker/master/dist/emoji-picker.min.js'
const evil = eval

export default Plugin.extend({
  name: 'Emoji Picker',
  description: 'Burkes\' Emoji Picker script as a plugin.',

  enable () {
    request(EMOJI_PICKER_URL).then(
      (source) => evil(source)
    )
  },

  disable () {
    if (window.ep && window.ep.kill) {
      window.ep.kill()
      delete window.ep
    }
  }
})
