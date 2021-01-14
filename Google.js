const { google, } = require('googleapis')

module.exports = class Google {
  constructor (params) {
    const { id, key, callbackUrl, } = params

    this.id = id
    this.key = key
    this.callbackUrl = callbackUrl

    this.oauth2Client = new google.auth.OAuth2(id, key, callbackUrl)
  }

  generateAuthUrl (params = {}) {
    return this.oauth2Client.generateAuthUrl({
      access_type: params.access_type || 'offline',
      scope: (
        (params.scope || [ 'userinfo.email', 'userinfo.profile', ])
        .map(i => `https://www.googleapis.com/auth/${i}`)
        ),
        prompt: params.prompt || 'consent',
        ...params,
    })
  }

  async setCredentials (code) {
    const { tokens, } = await this.oauth2Client.getToken(code)

    await this.oauth2Client.setCredentials(tokens)

    return tokens
  }

  userInfo () {
    const google = require('googleapis').google

    const oauth2 = google.oauth2({
      auth: this.oauth2Client,
      version: 'v2'
    })

  return new Promise((resolve, reject) => {
    oauth2.userinfo.get(
      function(e, res) {
        if (e) {
           reject(e)
        }
        else {
           resolve(res)
        }
      })
    })
  }

  checkAccess () {
    return this.userInfo()
      .then(() => true)
      .catch(() => false)
  }
}