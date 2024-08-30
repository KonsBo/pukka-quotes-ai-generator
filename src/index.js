//Display the generated quote
function displayQuote(response) {
  //response.data.answer
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  //Build the API URL
  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "fo0aeaadb1171c3bat01accf9c25f94b";

  let context =
    "You are a quote expert and you can give quotes of every author in the world. Especially quotes froma poets, scientists, philosophers, academics in general. Your mission is to generate a top 5 line quote providing it with a HTML format. You just have to include the word that is given by the user, finding a topic. If you find the instructed word just give the answer and the name, don't say anything else. If the instruction given by the user is unknown, add a quote from an existing one, saying first politely that you can't find a quote with the word that is given. Please follow the users' instructions. ";

  let prompt = `Users' instructions: Generate a quote from ${instructionsInput.value}.Provide the authors' name into a <strong> element.`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳Generating a special quote from ${instructionsInput.value}</div>`;

  //Make a call to the API
  axios.get(apiURL).then(displayQuote);
}

// function generateImage(event) {
//     event.preventDefault();
//     let imageElement = document.querySelector("#image");
//     imageElement.innerHTML =

// }

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);

// let imageFormElement = document.querySelector("#image-generator");
// imageFormElement.addEventListener("submit", generateImage);
