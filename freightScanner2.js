function scan(argm){
  let result = [];
  argm.forEach((e, i) => {
    if (e === "contraband")
      result = [...result, i]
  });

  return result;
}
