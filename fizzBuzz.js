const argm = process.argv[2];

let result = "";

if (argm % 15 === 0)
  result = "JavaScript";
else if (argm % 3 === 0)
  result = "Java";
else if (argm % 5 === 0)
  result = "Script";
else
  result = argm;

console.log(result);