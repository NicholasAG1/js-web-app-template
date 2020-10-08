// FUDDIFY TEXT

// Event listiners
document.getElementById('usertext').addEventListener('change', fuddifyInput);
document.getElementById('fuddifyBtn').addEventListener('click', fuddifyFile)

// Event Functions
function fuddifyInput() {
    // Get the text and convert it into a array of charachters
    let userText = document.getElementById("usertext").value;
    document.getElementById("FuddifyText").innerHTML = fuddifyText(userText);
}



function fuddifyFile() {
    // Get the text from the file and convert it into a array of charachters
    fetch("sample.txt").then((rawData) => rawData.text()).then((data) => {
        document.getElementById("FuddifyText").innerHTML = fuddifyText(data);
    });
}

function fuddifyText(aString) {
    // Change all the r's and l's to w's in aString and return the new string

    let textArray = aString.split("");

    // Loop through array and change r's and l's to w's
    for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] == "r" || textArray[i] == "l") {
            textArray[i] = "w";
        } else if (textArray[i] == "R" || textArray[i] == "L") {
            textArray[i] = "W";
        }
    }

    // Convert textArray into a string and display
    return textArray.join("");
}