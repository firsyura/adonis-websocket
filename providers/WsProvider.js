'use strict'

/*
 * adonis-websocket
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const { ServiceProvider } = require('@adonisjs/fold')
const Session = require('@adonisjs/session/src/Session')

class WsProvider extends ServiceProvider {

  register () {
    this.app.singleton('Adonis/Addons/Ws', (app) => {
      const Ws = require('../src/Ws')
      const Config = app.use('Adonis/Src/Config')
      const Request = app.use('Adonis/Src/Request')
      const Server = app.use('Adonis/Src/Server')
      const Helpers = app.use('Adonis/Src/Helpers')
      return new Ws(Config, Request, Server, Session, Helpers)
    })
  }

}

module.exports = WsProvider
