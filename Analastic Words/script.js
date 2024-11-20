import { drawStrokeOrder } from './drawStrokeOrder.js';

// Sample data to simulate the radical breakdown (in real implementation, this should be fetched from a database or API)
const radicalData = {
  "家": {
    "radicals": ["宀", "豕"],
    "meanings": ["roof", "pig"],
    "strokeOrder": ["宀 (3 strokes)", "豕 (6 strokes)"]
  },
  "学": {
    "radicals": ["子", "冖"],
    "meanings": ["child", "cover"],
    "strokeOrder": ["子 (3 strokes)", "冖 (3 strokes)"]
  }
};


function animateCharacter(character) {
  const writer = HanziWriter.create('stroke-animation', character,{
    width: 300,
    height: 300,
    padding: 10,
  });
  writer.animateCharacter();
}

// Function to fetch radicals and their stroke order
function analyzeWord(word) {
  const result = radicalData[word];
  if (!result) {
    alert("Radicals not found for this word!");
    return;
  }

  displayRadicals(result);
  animateCharacter(word);
}



// Function to display radicals and stroke order
function displayRadicals(result) {
  const radicalList = document.getElementById("radical-list");
  radicalList.innerHTML = ''; // Clear previous content

  result.radicals.forEach((radical, index) => {
    const radicalDiv = document.createElement("div");
    radicalDiv.className = "radical-list_item"
    radicalDiv.innerHTML = `<strong>Radical: ${radical}</strong> - Meaning: ${result.meanings[index]} <br> Stroke Order: ${result.strokeOrder[index]}`;
    radicalList.appendChild(radicalDiv);
  });

  // Show the radical breakdown section
  document.getElementById("radical-info").style.display = "block";
  // document.getElementById("start-tracing").style.display = "inline-block"; // Show the tracing button

}

// Event listener for analyze button
document.getElementById("analyze-btn").addEventListener("click", () => {
  const word = document.getElementById("vocabulary-input").value;
  if (word) {
    analyzeWord(word);
     drawStrokeOrder(radicalData[word].strokeOrder);
  } else {
    alert("Please enter a Chinese word!");
  }
});


// function createQuiz(word) {
//   const radicals = radicalData[word].radicals;
//   const quizContainer = document.getElementById("quiz");
//   quizContainer.innerHTML = `<h3>Quiz: What is the radical for the word "${word}"?</h3>`;

//   // Generate random options
//   const options = radicals.concat(["山", "水", "木"]); // Add some random radicals
//   options.sort(() => Math.random() - 0.5); // Shuffle options

//   options.forEach((radical) => {
//     const button = document.createElement("button");
//     button.textContent = radical;
//     button.onclick = () => {
//       if (radicals.includes(radical)) {
//         alert("Correct!");
//       } else {
//         alert("Try again!");
//       }
//     };
//     quizContainer.appendChild(button);
//   });
// }

// Call createQuiz() inside the analyzeWord function to start the quiz after radical info is shown
