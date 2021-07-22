import { Physics, ServerClock } from '@enable3d/ammo-on-nodejs'
import geckos, { iceServers, ServerChannel} from "@geckos.io/server";
import {Player} from "../players/Player";

export const io = geckos({ iceServers })
io.listen()

export class Battle {
    private physics = new Physics()
    private players: any

    constructor() {
        this.players = {};

        this.create()
    }

    create() {
        io.onConnection((channel: ServerChannel) => {
            this.players[<string>channel.id] = new Player(<string>channel.id, <Physics>this.physics)
            io.emit('player-joined', this.players)

            channel.on('create-unit', () => {
                this.players[<string>channel.id].create();
            })

            channel.on('move', (uuid) => {
                this.players[<string>channel.id].move(<string>uuid);
            })
        })

        this.physics.setGravity(0, -9.81 * 2, 0)

        // add ground
        this.physics.add.ground({
            y: -0.5,
            collisionFlags: 1,
            mass: 0,
            width: 20,
            height: 20,
        })

        // clock
        const clock = new ServerClock()
        clock.disableHighAccuracy()
        clock.onTick((delta: number) => this.update(delta))
    }

    update(delta: number) {
        this.physics.update(delta * 1000)
    }
}
