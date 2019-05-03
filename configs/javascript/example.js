import { resolve } from "fs"

import { reinstall } from "../index"
import { four } from "./four"
import { five } from "./five.json"

const example = {
  first: 1,
  second: 2,
  "third-e": ["1", "2", "3", "4"],
  five,
  four,
}

const CONSTANT_NAME = 123
const valueName = 1 + CONSTANT_NAME

const getAsync = (_unused, data) =>
  new Promise((res) => setTimeout(res, 1 * valueName, data))

async function testAsync(list) {
  const [_first, _second, third] = list
  format(third)
  for (const item of list) {
    await getAsync(item)
  }
}
const format = ({ name, surname, age, demo, foo, bar }) =>
  `> ${name} ${surname}, ${age} (${[demo, foo, bar].join("::")})`

const maps = { foo: 1, bar: 2, baz: 3, baf: 4 }
const dats = {
  foo: 1,
  bar: 2,
  baz: 3,
  baf: 4,
  maps,
}

const PART_NUM = 12
const inside = resolve(
  example,
  `report${example["third-e"].join(",")}`,
  `foo${PART_NUM}`,
  reinstall.path,
  format(dats),
)

try {
  if (inside === "demo") {
    global.meet = true
  } else {
    global.meet = false
  }
} catch (_foo) {
  try {
    inside()
  } catch (bar) {
    global.miss(bar)
  }
}

try {
  const demo = 1

  example.first += demo
  example.second = --example.first
} catch (_error) {
  example.second = 0
}

const OFFSET = 12
const INCR = 0.3

let target = global.meet ? "overrided" : "misleaded"

target = example.first + OFFSET

export function fill() {
  return testAsync()
}

export const demo = target * INCR
export { example }
