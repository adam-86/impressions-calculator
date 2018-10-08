const inputs = document.querySelectorAll('.number-input'),
      submit = document.querySelector('.submit'),
      output = document.querySelector('.output');

function getResults() {
  //inputs
  let perDay = inputs[0].value,
      perWeek = inputs[1].value,
      perMonth = inputs[2].value,
      monthRate = inputs[3].value,

    //outputs
    outputDays,
    outputWeeks,
    outputMonths,
    outputCpm,
    roundedCpm,
    markup;

  if (perDay != 0) {
    outputDays = perDay;
    outputWeeks = perDay * 7;
    outputMonths = perDay * 28;

  } else if (perWeek != 0) {
    outputDays = perWeek / 7;
    outputWeeks = perWeek;
    outputMonths = perWeek * 4;

  } else if (perMonth != 0) {
    outputDays = perMonth / 28;
    outputWeeks = perMonth / 4;
    outputMonths = perMonth;

  } if(monthRate != 0) {
    outputCpm = monthRate / outputMonths * 1000;
    roundedCpm = Math.round(outputCpm * 100) / 100;
    markup = (parseInt(monthRate) / 100 * 10 + parseInt(monthRate)) ;
  }

  //output results rounded to the nearest interger
  output.innerHTML = `
      <span>Impressions Per Day:<strong> ${Math.round(outputDays)} </strong></span>
      <span>Impressions Per Week:<strong> ${Math.round(outputWeeks)} </strong></span>
      <span>Impressions Per Month:<strong> ${Math.round(outputMonths)} </strong></span>
      <span>CPM:<strong> $${(roundedCpm)} </strong></span>
      <span>Monthly Rate + 10%:<strong> $${Math.round(markup)} </strong></span>

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
