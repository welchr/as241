function ninv(p) {
  if (p === "0" || p === "0.0") {
    return regninv(p)
  }
  else if (parseFloat(p) == 0) {
    return bigninv(p).toNumber()
  }
  else {
    return regninv(p)
  }
}

function regninv(p) {
  const [SPLIT1,SPLIT2,CONST1,CONST2] = [0.425,5.0,0.180625,1.6]
  const a = [
     3.3871328727963666080E0,
     1.3314166789178437745E2,
     1.9715909503065514427E3,
     1.3731693765509461125E4,
     4.5921953931549871457E4,
     6.7265770927008700853E4,
     3.3430575583588128105E4,
     2.5090809287301226727E3
   ];

  const b = [
    4.2313330701600911252E1,
    6.8718700749205790830E2,
    5.3941960214247511077E3,
    2.1213794301586595867E4,
    3.9307895800092710610E4,
    2.8729085735721942674E4,
    5.2264952788528545610E3
  ];

  const c = [
    1.42343711074968357734E0,
    4.63033784615654529590E0,
    5.76949722146069140550E0,
    3.64784832476320460504E0,
    1.27045825245236838258E0,
    2.41780725177450611770E-1,
    2.27238449892691845833E-2,
    7.74545014278341407640E-4
  ];

  const d = [
    2.05319162663775882187E0,
    1.67638483018380384940E0,
    6.89767334985100004550E-1,
    1.48103976427480074590E-1,
    1.51986665636164571966E-2,
    5.47593808499534494600E-4,
    1.05075007164441684324E-9
  ];

  const e = [
    6.65790464350110377720E0,
    5.46378491116411436990E0,
    1.78482653991729133580E0,
    2.96560571828504891230E-1,
    2.65321895265761230930E-2,
    1.24266094738807843860E-3,
    2.71155556874348757815E-5,
    2.01033439929228813265E-7
  ];

  const f = [
    5.99832206555887937690E-1,
    1.36929880922735805310E-1,
    1.48753612908506148525E-2,
    7.86869131145613259100E-4,
    1.84631831751005468180E-5,
    1.42151175831644588870E-7,
    2.04426310338993978564E-15
  ];

  const q = p - 0.5
  let r, x;

  if (Math.abs(q) < SPLIT1) {
    r = CONST1 - q * q
    return q * ((((((( a[7] * r + a[6] ) * r + a[5] ) * r + a[4] ) * r 
                      + a[3] ) * r + a[2] ) * r + a[1] ) * r + a[0] ) / 
               ((((((( b[6] * r + b[5] ) * r + b[4] ) * r + b[3] ) * r 
                      + b[2] ) * r + b[1] ) * r + b[0] ) * r + 1.0 );
  } 
  else {
    if (q < 0) {
      r = p
    }
    else {
      r = 1.0 - p 
    }

    if (r > 0) {
      r = Math.sqrt(-Math.log(r))
      if (r <= SPLIT2) {
        r -= CONST2
        x = ((((((( c[7] * r + c[6] ) * r + c[5] ) * r + c[4] ) * r
                      + c[3] ) * r + c[2] ) * r + c[1] ) * r + c[0] ) /
                ((((((( d[6] * r + d[5] ) * r + d[4] ) * r + d[3] ) * r
                      + d[2] ) * r + d[1] ) * r + d[0] ) * r + 1.0 );
      }
      else {
        r -= SPLIT2
        x =  ((((((( e[7] * r + e[6] ) * r + e[5] ) * r + e[4] ) * r 
                    + e[3] ) * r + e[2] ) * r + e[1] ) * r + e[0] ) / 
              ((((((( f[6] * r + f[5] ) * r + f[4] ) * r + f[3] ) * r
                    + f[2] ) * r + f[1] ) * r + f[0] ) * r + 1.0 );
      }
    }
    else {
      throw("Not implemented")
    }

    if (q < 0) {
      x = -x
    }

    return x;
  }
}

function bigninv(p) {
  p = Decimal(p);
  const [SPLIT1,SPLIT2,CONST1,CONST2] = [0.425,5.0,0.180625,1.6].map(Decimal);
  const a = [
     3.3871328727963666080E0,
     1.3314166789178437745E2,
     1.9715909503065514427E3,
     1.3731693765509461125E4,
     4.5921953931549871457E4,
     6.7265770927008700853E4,
     3.3430575583588128105E4,
     2.5090809287301226727E3
   ].map(Decimal);

  const b = [
    4.2313330701600911252E1,
    6.8718700749205790830E2,
    5.3941960214247511077E3,
    2.1213794301586595867E4,
    3.9307895800092710610E4,
    2.8729085735721942674E4,
    5.2264952788528545610E3
  ].map(Decimal);

  const c = [
    1.42343711074968357734E0,
    4.63033784615654529590E0,
    5.76949722146069140550E0,
    3.64784832476320460504E0,
    1.27045825245236838258E0,
    2.41780725177450611770E-1,
    2.27238449892691845833E-2,
    7.74545014278341407640E-4
  ].map(Decimal);

  const d = [
    2.05319162663775882187E0,
    1.67638483018380384940E0,
    6.89767334985100004550E-1,
    1.48103976427480074590E-1,
    1.51986665636164571966E-2,
    5.47593808499534494600E-4,
    1.05075007164441684324E-9
  ].map(Decimal);

  const e = [
    6.65790464350110377720E0,
    5.46378491116411436990E0,
    1.78482653991729133580E0,
    2.96560571828504891230E-1,
    2.65321895265761230930E-2,
    1.24266094738807843860E-3,
    2.71155556874348757815E-5,
    2.01033439929228813265E-7
  ].map(Decimal);

  const f = [
    5.99832206555887937690E-1,
    1.36929880922735805310E-1,
    1.48753612908506148525E-2,
    7.86869131145613259100E-4,
    1.84631831751005468180E-5,
    1.42151175831644588870E-7,
    2.04426310338993978564E-15
  ].map(Decimal);

  const q = p.sub(0.5);
  let r, x;

  if (q.abs().lessThan(SPLIT1)) {
    r = CONST1.sub(q.mul(q))
    return q.mul(
      a[7].mul(r).add(a[6]).mul(r).add(a[5]).mul(r).add(a[4]).mul(r)
        .add(a[3]).mul(r).add(a[2]).mul(r).add(a[1]).mul(r).add(a[0])
        .div(b[6].mul(r).add(b[5]).mul(r).add(b[4]).mul(r).add(b[3]).mul(r)
        .add(b[2]).mul(r).add(b[1]).mul(r).add(b[0]).mul(r).add(1))
    )    
  } 
  else {
    if (q.lessThan(0)) {
      r = p
    }
    else {
      r = Decimal(1).sub(p)
    }

    if (r.greaterThan(0)) {
      r = r.ln().mul(-1).sqrt()
      if (r.lessThanOrEqualTo(SPLIT2)) {
        r = r.sub(CONST2)
        x = c[7].mul(r).add(c[6]).mul(r).add(c[5]).mul(r).add(c[4]).mul(r)
          .add(c[3]).mul(r).add(c[2]).mul(r).add(c[1]).mul(r).add(c[0])
          .div(d[6].mul(r).add(d[5]).mul(r).add(d[4]).mul(r).add(d[3]).mul(r)
          .add(d[2]).mul(r).add(d[1]).mul(r).add(d[0]).mul(r).add(1))
      }
      else {
        r = r.sub(SPLIT2)
        x = e[7].mul(r).add(e[6]).mul(r).add(e[5]).mul(r).add(e[4]).mul(r)
          .add(e[3]).mul(r).add(e[2]).mul(r).add(e[1]).mul(r).add(e[0])
          .div(f[6].mul(r).add(f[5]).mul(r).add(f[4]).mul(r).add(f[3]).mul(r)
          .add(f[2]).mul(r).add(f[1]).mul(r).add(f[0]).mul(r).add(1))
      }
    }
    else {
      throw("Not implemented")
    }

    if (q.lessThan(0)) {
      x = x.mul(-1);
    }

    return x;
  }
}

function time_test(vfunc) {
  let n = 50100;
  let burnin = 250;
  let start, end;
  const times = []
  let outer_start = performance.now()
  for (let i = 0; i < n; i++) {
    start = performance.now()
    ninv(vfunc())
    end = performance.now()

    if (i > burnin) {
      times.push((end - start) * 1000)
    }
  }
  let outer_end = performance.now()

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
  console.log("Total time (s): ",(outer_end - outer_start) * 1000)
}

// Test with very small value
console.log("Time with very small value constant value of 1e-400: ")
time_test(() => "1e-400")

console.log("")

// Test with random values in [0,1]
console.log("Time with random values [0,1]")
time_test(Math.random)

