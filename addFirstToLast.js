function addFirstToLast(argm){
  if (argm.length === 0) return "";
  const firstItem = argm[0];
  const lastItem  = argm[argm.length - 1];

  return `${firstItem}${lastItem}`;
}

