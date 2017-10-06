#!/usr/bin/env node
var as241 = require("./as241.js")

function* range(start,end,increment) {
  comp = start < end ? (x,y) => x < y : (x,y) => x > y
  for (let i = start; comp(i,end); i += increment) {
    yield i
  }
}

values = [
  ...Array.from(range(600,0,-1)).map((x) => "1e-" + x),
  ...Array.from(range(0.01,1,0.01))
]

console.log("value\tninv")
for (let v of values) {
  r = as241.ninv(v)
  console.log(v + "\t" + String(r))
}

