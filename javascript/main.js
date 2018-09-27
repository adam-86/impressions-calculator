const inputs = document.querySelectorAll('.number-input'),
  submit = document.querySelector('.submit'),
  output = document.querySelector('.output');

function getResults() {
  //inputs
  let perDay = inputs[0].value,
    perWeek = inputs[1].value,
    perMonth = inputs[2].value,

    //outputs
    outputDays,
    outputWeeks,
    outputMonths;

  if (perDay != 0) {
    outputDays = perDay;
    outputWeeks = perDay * 7;
    outputMonths = perDay * 30;

  } else if (perWeek != 0) {
    outputDays = perWeek / 7;
    outputWeeks = perWeek;
    outputMonths = perWeek * 30;

  } else if (perMonth != 0) {
    outputDays = perMonth / 30;
    outputWeeks = perMonth / 4;
    outputMonths = perMonth;
  }

  //output results rounded to the nearest interger
  output.innerHTML = `
      <span>Impressions per day:<strong> ${Math.round(outputDays)} </strong></span>
      <span>Impressions per week:<strong> ${Math.round(outputWeeks)} </strong></span>
      <span>Impressions per day:<strong> ${Math.round(outputMonths)} </strong></span>
      `;

  clearInputs();
}


function clearInputs() {
  inputs.forEach(input => {
    input.value = '';
  });
}

//simulate submit button click when user presses enter key
inputs.forEach(input => {
  input.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
      (submit).click();
    }
  });
});

submit.addEventListener('click', function() {
  getResults();
});
