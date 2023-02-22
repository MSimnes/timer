/**
 * Plays a beep sound with a specified delay between beeps.
 * @param {number[]} args - An array of command-line arguments specifying the delay in seconds between beeps.
 */

const beep = function(args) {
  for (const i in args) {
    // Check if the argument is not a number or is a negative number, and skip to the next item if so.
    if (isNaN(args[i]) || args[i] < 0) {
      continue;
    // Check if the array is empty, and end the function if so.
    } else if (args.length === 0) {
      break;
    } else {
      // Play a beep sound at the interval specified by the command-line argument.
      setTimeout(() => {
        process.stdout.write('\007');
      }, args[i] * 1000);
    }
  }
};

// Get the command-line arguments and pass them to the beep function.
const args = process.argv.slice(2);
beep(args);
