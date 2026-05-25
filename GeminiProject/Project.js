console.log("Hello Today special!")
async function sendMessage() {

    const prompt = document.getElementById("userInput").value;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyC5nnz5bHeoazDtPiO3w-GipMFZE03g4kA",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      }
    );

    const data = await response.json();

    document.getElementById("response").innerHTML =
      data.candidates[0].content.parts[0].text;
}