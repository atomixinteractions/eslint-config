import { resolve } from 'fs'
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
  `report${example['third-e'].join(',')}`
)

if (inside === 'demo') {
  global.meet = true
}
else {
  global.meet = false
}

let target = global.meet
  ? 'overrided'
  : 'misleaded'

target = example.first + 12

export const demo = target * 0.3
export default example
