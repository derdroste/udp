import {Unit} from "../units/Unit";
import {Physics} from "@enable3d/ammo-on-nodejs";
import {io} from '../scenes/Battle'

export class Player {
    private id: string
    private units: any
    private physics: Physics

    constructor(id: string, physics: Physics) {
        this.id = id
        this.units = {}
        this.physics = physics
    }

    create() {
        const unit = new Unit('flwter');
        this.units[unit.uuid] = unit
        this.physics.add.existing(unit, unit.physics)
        io.emit('create-unit', {
            playerId: this.id,
            unitId: unit.uuid
        })
    }

    move(uuid: string) {
        this.units[uuid].move()
    }
}
