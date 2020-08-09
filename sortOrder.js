const firstE  = process.argv[2];
const secondE = process.argv[3];


if (firstE.toLowerCase() === secondE.toLowerCase()) {
  console.log(0);
  return;
}

const sortedArray = [firstE, secondE].sort();

if (firstE == sortedArray[0])
  console.log(-1);
else
  console.log(1);
