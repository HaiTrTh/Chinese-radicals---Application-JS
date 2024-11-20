const radicals = [
  { radical: "氵", meaning: "water", examples: ["河", "海", "泉"], stroke_count: 3 },
  { radical: "木", meaning: "wood", examples: ["林", "森", "桐"], stroke_count: 4 },
  { radical: "火", meaning: "fire", examples: ["炎", "灶", "焚"], stroke_count: 4 }
];

let currentIndex = 0;

const radicalDisplay = document.getElementById("radical-display");
const nextRadicalButton = document.getElementById("next-radical");
const quizOptions = document.getElementById("quiz-options");

// Function to display a radical
function displayRadical(index) {
  const radical = radicals[index];
  radicalDisplay.innerHTML = `
    <p>部首: ${radical.radical}</p>
    <p>Meaning: ${radical.meaning}</p>
    <p>Examples: ${radical.examples.join(", ")}</p>
    <p>Stroke Count: ${radical.stroke_count}</p>
  `;
}

// Function to generate a quiz
function generateQuiz() {
  const correctRadical = radicals[currentIndex];
  const options = [...radicals];
  options.sort(() => Math.random() - 0.5);

  quizOptions.innerHTML = "";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.radical;
    button.onclick = () => {
      if (option.radical === correctRadical.radical) {
        alert("Correct!");
      } else {
        alert("Try again!");
      }
    };
    quizOptions.appendChild(button);
  });
}

// Event Listener for Next Radical
nextRadicalButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % radicals.length;
  displayRadical(currentIndex);
  generateQuiz();
});

// Initial Display
displayRadical(currentIndex);
generateQuiz();
