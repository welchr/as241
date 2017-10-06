#!/usr/bin/env node
var as241 = require("./as241.js")
var jStat = require("jStat")

function time_test() {
  let n = 50100;
  let burnin = 250;
  let start, end;
  const times = []
  for (let i = 0; i < n; i++) {
    start = process.hrtime()
    as241.ninv(Math.random())
    end = process.hrtime(start)

    if (i > burnin) {
      times.push(end[1]/1000)
    }
  }

  let avg = jStat.mean(times)
  let sd = jStat.stdev(times)
  let tmin = jStat.min(times)
  let tmax = jStat.max(times)

  console.log("Iterations: ",n)
  console.log("Burnin: ",burnin)
  console.log("Average time (us): ",avg)
  console.log("SD (us): ",sd)
  console.log("Min (us): ",tmin)
  console.log("Max (us): ",tmax)
}

time_test()

