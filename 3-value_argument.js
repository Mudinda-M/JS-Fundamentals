let value = process.argv[2];

if (value === undefined || isNaN(parseInt(value))) {
    console.log("Missing number of occurrences");
}else{
    let i = 0;
    while(i < parseInt(value)){
        console.log(value);
        i++;
}
}
