export const formatTime = (time) => {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
};

// examples

const time = 10;
const timeString = time < 10 ? `0${time}` : time;

let answer = 0;

if (time < 10) {
  answer = `0${time}`;
} else if (time > 60) {
  answer = time % 60;
} else {
  answer = time;
}

// ternary expression
// if time < 10 ? `0${time}` : if time > 60 ? time % 60 : time

const answer1 = time < 10 ? `0${time}` : time > 60 ? time % 60 : time;

/**
* ? - nurodo kad buvo parašyta sąlyga
* : - atskiria vertę if true nuo vertės if false formatu:
* <true> : <false>
*
* <condition|boolean> ? <true value> : <false value>
* <condition|boolean> ? <true value> : <condition|boolean> ? <second true value> : <false value>
*/