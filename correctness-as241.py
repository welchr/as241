#!/usr/bin/env python3
import numpy as np
from as241 import ninv

values = ["1e-" + str(x) for x in range(600,0,-1)] + list(map(str,np.arange(0.01,1,0.01)))

print("value\tninv")
for v in values:
  r = ninv(np.float128(v))
  print(v,"\t",r)

