import { Application } from 'pixi.js'
import { addStars } from './addStars.js'
import { addMoon } from './addMoon.js'
import { addMountains } from './addMountains.js'
import { addTrees } from './addTrees.js'
import { addGround } from './addGround'

const app = new Application()

;(async () => {
  await app.init({ background: '#021f4b', resizeTo: window })

  document.body.appendChild(app.canvas)
  addStars(app)
  addMoon(app)
  addMountains(app)
  addTrees(app)
  addGround(app)
})()
