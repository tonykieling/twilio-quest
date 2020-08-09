const receivedArgum = Number(process.argv[2]);

if (receivedArgum === Number(0))
  console.log("alive");
else
  console.log("other");