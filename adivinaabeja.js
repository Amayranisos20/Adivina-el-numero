let low = 1;
let high = 100;
let guess;

document.getElementById('startBtn').addEventListener('click', function() {
  low = 1;
  high = 100;
  makeGuess();
});

function makeGuess() {
  if (low <= high) {
    guess = Math.floor((low + high) / 2);
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p> Tu abeja es la ${guess}?</p>
                           <button id="yesBtn" class="btn btn-success">Si</button>
                           <button id="noBtn" class="btn btn-danger">No</button>`;
    addEventListeners();
  } else {
    alert("Couldn't guess your number. Please try again.");
  }
}

function addEventListeners() {
  document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('feedback').innerHTML = `Tu abeja es la ${guess}. Exelente cuida de ella estan en peligro de extincion !`;
    document.getElementById('result').innerHTML = '';
  });

  document.getElementById('noBtn').addEventListener('click', function() {
    let isLower = confirm(`La abeja seleccionada es menor a ${guess}?`);
    if (isLower) {
      high = guess - 1;
    } else {
      low = guess + 1;
    }
    makeGuess();
  });
}
