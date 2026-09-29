const form = document.getElementById('bmi-form');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultText = document.getElementById('bmi-result');
const categoryText = document.getElementById('bmi-category');
const errorText = document.getElementById('error');
const resetBtn = document.getElementById('reset-btn');

function getBmiCategory(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obesity';
}

function displayResult(bmi, category) {
  resultText.textContent = `Your BMI: ${bmi.toFixed(2)}`;
  categoryText.textContent = `Category: ${category}`;
}

function clearResult() {
  resultText.textContent = 'Your BMI: ';
  categoryText.textContent = 'Category: ';
  errorText.textContent = '';
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const weight = Number(weightInput.value);
  const heightCm = Number(heightInput.value);

  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    errorText.textContent = 'Please enter valid weight and height values.';
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const category = getBmiCategory(bmi);

  errorText.textContent = '';
  displayResult(bmi, category);
});

resetBtn.addEventListener('click', function () {
  form.reset();
  clearResult();
  weightInput.focus();
});
