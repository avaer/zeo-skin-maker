const bs = [];
process.stdin.on('data', d => {
  bs.push(d);
});
process.stdin.on('end', () => {
  process.stdout.write(JSON.stringify({
    asset: 'ITEM.SKIN',
    skin: {
      name: process.argv[2],
      data: Buffer.concat(bs).toString('base64'),
    }
  }, null, 2));
  process.exit();
});
