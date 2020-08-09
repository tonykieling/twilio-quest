const argm = process.argv[2];

let label = "";
if (Number(argm) === 0)
  label = "alive";
else if (Number(argm) === 1)
  label = "flowering";
else if (Number(argm) === 2)
  label = "shedding";
else if (Number(argm) >= 3)
  label = "other";

console.log(label);