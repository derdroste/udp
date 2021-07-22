import { ExtendedObject3D } from 'enable3d'
import {io} from '../scenes/Battle'

export class Unit extends ExtendedObject3D {
    name: string
    physics: object

    constructor(name: string) {
        super();

        this.name = name;
        this.physics = { y: 20 };
        setInterval(() => this.send(), 1000 / 300)
    }

    move() {
        this.body.setVelocity(2, 0, 0);
    }

    send() {
        const { uuid, position: pos, quaternion: quat } = this

        const fixed = (n: number, f: number) => {
            return parseFloat(n.toFixed(f))
        }

        const updates = {
            uuid,

            pos: {
                x: fixed(pos.x, 2),
                y: fixed(pos.y, 2),
                z: fixed(pos.z, 2),
            },
            quat: {
                x: fixed(quat.x, 3),
                y: fixed(quat.y, 3),
                z: fixed(quat.z, 3),
                w: fixed(quat.w, 3),
            },
        }
        io.emit('updates', updates)
    }
}

