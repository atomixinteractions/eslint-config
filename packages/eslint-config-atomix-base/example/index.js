import { resolve } from 'fs'

import reinstall from '../index'
import four from './four'
import five from './five.json'


const example = {
  first: 1,
  second: 2,
  'third-e': [
    1,
    2,
    3,
    '4',
  ],
  five,
  four,
}

const inside = resolve(
  example,
  `report${example['third-e'].join(',')}`,
  reinstall.path
)

try {
  if (inside === 'demo') {
    global.meet = true
  }
  else {
    global.meet = false
  }
}
catch (foo) {
  try {
    inside()
  }
  catch (bar) {
    global.miss(bar)
  }
}

try {
  example.first++
  example.second = --example.first
}
catch (error) {
  example.second = 0
}

let target = global.meet
  ? 'overrided'
  : 'misleaded'

target = example.first + 12

export const demo = target * 0.3
export default example
