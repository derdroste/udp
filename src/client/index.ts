import { Project, Scene3D } from 'enable3d'
import geckos from '@geckos.io/client'
import {Player} from "./players/Player";

class Geckos extends Scene3D {
  me: string
  players: any
  units: any

  constructor() {
    super();

    this.players = {}
    this.units = {}
  }

  geckos() {
    const channel = geckos({url: 'http://googleexxxx.com', port: 8080})

    channel.onConnect(error => {
      if (error) {
        console.error(error.message)
        return
      }

      this.me = <string>channel.id

      channel.on('player-joined', (players: any) => {
        for (const [key, v] of Object.entries(players)) {
          console.log(players)
          // @ts-ignore
          this.players[key] = new Player(v.id)
        }
        console.log(this.players)
      })

      channel.on('updates', (updates: any) => {
        const u = updates
        if (this.units[updates.uuid]) {
          this.units[updates.uuid].position.set(u.pos.x, u.pos.y, u.pos.z)
          this.units[updates.uuid].quaternion.set(u.quat.x, u.quat.y, u.quat.z, u.quat.w)
        } else {
          this.units[updates.uuid] = this.add.box({}, { phong: { color: 'red' } })
        }
      })

      channel.on('create-unit', (updates: any) => {
        this.players[updates.playerId].units[updates.unitId] = this.add.box({}, { phong: { color: 'red' } })
      })

      window.addEventListener('keydown', (ev) => {
        switch (ev.key) {
          case 'c':
            channel.emit('create-unit')
            break
          case 'w':
            for (const [key, val] of Object.entries(this.players[this.me].units)) {
              channel.emit('move', key)
            }
            break
        }
      })
    })
  }
  init() {
    this.setSize(window.innerWidth / 2, window.innerHeight)
    this.warpSpeed()
    this.camera.position.set(0, 2, 10)
    this.camera.lookAt(0, 0, 0)
  }
  create() {
    this.geckos()
  }
}

new Project({ scenes: [Geckos], parent: 'canvas', antialias: true })
