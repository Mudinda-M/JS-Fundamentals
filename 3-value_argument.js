let value = process.argv[2];

for (let i = 0; i < value; i++) {
    if (i === 0){
        console.log("No argument");
    } else{
        console.log(value[i]);
    }
}
