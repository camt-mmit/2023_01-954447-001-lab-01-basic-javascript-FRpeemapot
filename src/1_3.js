const n =  parseInt(process.argv[2]);
for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        line += ' ';
      } else {
        line += '*';
      }
    }
    console.info(line);
  }