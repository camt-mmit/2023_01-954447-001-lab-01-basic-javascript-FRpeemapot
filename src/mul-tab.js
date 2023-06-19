const n =  parseInt(process.argv[2]);

for(let j = 1; j <= 1; j++) {
    let line = '';
    for(let i = 1; i <= n; i++) {
        line += "*".padStart(n, '');
        console.info(line);
    }
    
}