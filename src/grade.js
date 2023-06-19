import { createInterface } from "node:readline";

const rl= createInterface(process.stdin, process.stdout);

rl.question('Input grade: ', (grade) => {
    
    if(grade <=50){console.log(`Your grade is D`);}
    else if(grade <=60){console.log(`Your grade is C`);}
    else if(grade <=70){console.log(`Your grade is B`);}
    else if(grade <=80){console.log(`Your grade is A`);}
    else {console.log(`Your grade is F`);}
    

    rl.close();

});

console.log('finish!!!');