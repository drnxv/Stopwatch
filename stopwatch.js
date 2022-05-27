// formatted time
let ftime = "00:00:00";
// boolean to stop time
let stopped = true;
let s = 0, m = 0, h = 0;

const start = () => {
  if (stopped === true) {
    stopped = false;
    go();
  }
};

const reset = () => {
  // set the text back to zero
  document.getElementById("time").innerHTML = "00:00:00";
  stopped = true;
  s = 0;
  m = 0;
  h = 0;
};

const stop = () => {
  if (stopped === false) {
    stopped = true;
  }
};

// this function keeps the timer going
const go = () => {
  if (stopped === false) {
    let std = 60;
    s = parseInt(s);
    m = parseInt(m);
    h = parseInt(h);
    s = s + 1;
    if (s === std) {
      m = m + 1;
      s = 0;
      if (m === std) {
        h = h + 1;
        m = 0;
        s = 0;
      }
    }

    if (s < 10 || s === 0) {
      s = '0' + s;
    }

    if (m < 10 || m === 0) {
      m = '0' + m;
    }

    if (h < 10 || h === 0) {
      h = '0' + h;
    }

    document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
    setTimeout("go()", 1000);
  }
};
