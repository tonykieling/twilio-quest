function calculateMass(argm){
  // let result = 0;
  // for (let e of argm)
  //   result = result + e.length;
  //    OR
  return argm.reduce((sum, current) => sum + current.length, 0);
}
