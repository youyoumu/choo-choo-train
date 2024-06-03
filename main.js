import { Application, Container } from 'pixi.js'
import { addStars } from './addStars.js'
import { addMoon } from './addMoon.js'
import { addMountains } from './addMountains.js'
import { addTrees } from './addTrees.js'
import { addGround } from './addGround'
import { addTrain } from './addTrain.js'
import { addSmokes } from './addSmokes.js'

const app = new Application()
const trainContainer = new Container()

;(async () => {
  await app.init({ background: '#021f4b', resizeTo: window })

  document.body.appendChild(app.canvas)
  addStars(app)
  addMoon(app)
  addMountains(app)
  addTrees(app)
  addGround(app)
  addTrain(app, trainContainer)
  addSmokes(app, trainContainer)
})()
