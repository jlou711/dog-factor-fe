/*function takes in a number and returns a string. Each case in the switch statement 
refers to the index and returns relevant medal colour*/

export function displayMedal(index: number): string {
  switch (index) {
    case 0:
      return "🥇";
    case 1:
      return "🥈";
    case 2:
      return "🥉";
    default:
      return "";
  }
}
