let i = 0;

while (process.argv[i] !== undefined){
    console.log(process.argv[i]);
    i++;
}

const args = i - 2;

if (args === 0){
    console.log("No argument");
}