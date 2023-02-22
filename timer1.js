const args = process.argv.slice(2);
const beep = function(args) {
  for (const i in args) {
    if (isNaN(args[i]) || args[i] < 0) {
      continue;
    } else if (args.length === 0) {
      break;
    } else {
      setTimeout(() => {
        process.stdout.write('\007');
      }, args[i] * 1000);
    }
  }
};
beep(args);