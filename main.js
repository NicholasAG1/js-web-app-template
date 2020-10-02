// FUDDIFY TEXT

// Event listiners
document.getElementById('usertext').addEventListener("change", fuddifyText);

// Event Functions
function fuddifyText() {
    // Get the text and convert it into a array of charachters
    let userText = document.getElementById("usertext").value;
    let textArray = userText.split("");
    
    // Loop through array and change r's and l's to w's
    for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] == "r" || textArray [i] == "l") {
            textArray[i] = "w";
        }else if (textArray[i] == "R" || textArray [i] == "L") {
            textArray[i] = "W";
        }
    }

    // Convert textArray into a string and display
    let textString = textArray.join("");
    document.getElementById("FuddifyText").innerHTML = textString;

 }


