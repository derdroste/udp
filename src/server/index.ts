import { Ammo } from '@enable3d/ammo-on-nodejs'
import {Battle} from "./scenes/Battle";

Ammo().then(() => {
  // @ts-ignore
  global.Ammo = Ammo
  new Battle()
})
