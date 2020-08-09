function getFirstAmountSorted(argm1, argm2){
  const words   = argm1.sort();
  const result  = words.slice(0, argm2);
  return result;
}
