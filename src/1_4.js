const n =  parseInt(process.argv[2]);


for(let i = 0; i < n; i++) {
    let line = '';
    for(let j = 0; j < n; j++){
    
    if(i === 0)
    {
       line += '*';
    }
    else if(j === 0)
    {
       line += '*';
    }
    else if(i === n - 1)
    {
       line += '*';
    }
    else if(j === n - 1)
    {
       line += '*';
    }
    else{
        
       line += ' ';
    }}
    console.info(line);
      
    
    
}