#!/usr/bin/env python3
import pandas as pd
from subprocess import check_output
from io import StringIO

js = StringIO(check_output("node ./correctness-as241.js",shell=True,universal_newlines=True))
py = StringIO(check_output("python3 ./correctness-as241.py",shell=True,universal_newlines=True))

# Note to self: pandas will not display these dframes correctly because they are float128
# You'll see all zeros for values < 1e-300 or so. But internally they are stored correctly. 
df_js = pd.read_table(js,dtype={"value": np.float128})
df_py = pd.read_table(py,dtype={"value": np.float128})

assert np.allclose(df_js.value,df_py.value)
assert np.allclose(df_js.ninv,df_py.ninv)

