#!/usr/bin/env node

main()
  .then(ret => console.log(ret))
  .catch(err => { console.error(err); process.exit(1); })

async function main() {
  const input = await getStdin();
  return input;
}

// From https://github.com/sindresorhus/get-stdin
// MIT LICENSED
function getStdin() {
  return new Promise(resolve => {
    const stdin = process.stdin;
    let ret = '';

    if (stdin.isTTY) {
      return resolve(ret);
    }

    stdin.setEncoding('utf8');

    stdin.on('readable', () => {
      let chunk;

      while ((chunk = stdin.read())) {
        ret += chunk;
      }
    });

    stdin.on('end', () => resolve(ret));
  });
}