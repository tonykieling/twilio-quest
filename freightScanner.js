function scan(argm){
  let count = 0;
  argm.forEach(e => e === "contraband" && count++);

  return count;
}
