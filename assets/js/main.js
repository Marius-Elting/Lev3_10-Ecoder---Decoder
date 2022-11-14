let encoder = [
    { letter: "A", encode: 1 },
    { letter: "B", encode: 2 },
    { letter: "C", encode: 3 },
    { letter: "D", encode: 4 },
    { letter: "E", encode: 5 },
    { letter: "F", encode: 6 },
    { letter: "G", encode: 7 },
    { letter: "H", encode: 8 },
    { letter: "I", encode: 9 },
    { letter: "J", encode: 10 },
    { letter: "K", encode: 11 },
    { letter: "L", encode: 12 },
    { letter: "M", encode: 13 },
    { letter: "N", encode: 14 },
    { letter: "O", encode: 15 },
    { letter: "P", encode: 16 },
    { letter: "Q", encode: 17 },
    { letter: "R", encode: 18 },
    { letter: "S", encode: 19 },
    { letter: "T", encode: 20 },
    { letter: "U", encode: 21 },
    { letter: "V", encode: 22 },
    { letter: "W", encode: 23 },
    { letter: "X", encode: 24 },
    { letter: "Y", encode: 25 },
    { letter: "Z", encode: 26 },
    { letter: "1", encode: 27 },
    { letter: "2", encode: 28 },
    { letter: "3", encode: 29 },
    { letter: "4", encode: 30 },
    { letter: "5", encode: 31 },
    { letter: "6", encode: 32 },
    { letter: "7", encode: 33 },
    { letter: "8", encode: 34 },
    { letter: "9", encode: 35 },
    { letter: "0", encode: 36 },
    { letter: " ", encode: 37 },
];

let outputALPHA = [];
let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ";
let outputP = "";
let encoOutput = document.getElementById("encoOutput");
let decoOutput = document.getElementById("decoOutput");

function encode() {
    let encoSchlüssel = Number(document.getElementById("encoSchlüssel").value);
    let encoInput = document.getElementById("encoInput").value;
    let inputUper = encoInput.toUpperCase();
    let outputJ = "";
    let outputA = [];
    encoOutput.innerHTML = "";

    for (let i = 0; i < inputUper.length; i++) {
        encoder.forEach(function (val) {
            if (inputUper[i] == val.letter) {
                outputP = val.encode + encoSchlüssel;
                if (outputP <= 37) {
                    outputALPHA = alpha.slice(outputP - 1, outputP);
                    outputA.push(outputALPHA);
                } else {
                    outputP = outputP - 37;
                    outputALPHA = alpha.slice(outputP - 1, outputP);
                    outputA.push(outputALPHA);

                }
            }
        });
    };

    outputJ = outputA.join("");
    outputJ.toString();
    encoOutput.innerHTML += outputJ;

}

alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ";
function decode() {
    let decoSchlüssel = Number(document.getElementById("decoSchlüssel").value);
    let decoInput = document.getElementById("decoInput").value;
    let inputUper = decoInput.toUpperCase();
    let outputJ = "";
    let outputA = [];
    decoOutput.innerHTML = "";

    for (let inputs of inputUper) {
        encoder.forEach(function (val) {
            if (val.letter == inputs) {
                outputP = val.encode - decoSchlüssel;
                if (outputP <= 37) {
                    outputALPHA = alpha.slice(outputP - 1, outputP);
                    outputA.push(outputALPHA);
                } else {
                    outputP = outputP - 37;
                    outputALPHA = alpha.slice(outputP - 1, outputP);
                    outputA.push(outputALPHA);

                }
            }
        });
    };
    outputJ = outputA.join("");
    outputJ.toString();
    decoOutput.innerHTML += outputJ;
}

let decoCopyButton = document.getElementById("decoCopyButton");
decoCopyButton.addEventListener("click", (event) => {
    let copyText = decoOutput.textContent;
    navigator.clipboard.writeText(copyText);
});

let decoPasteButton = document.getElementById("decoPasteButton");

decoPasteButton.addEventListener("click", async (event) => {
    let read = await navigator.clipboard.readText();
    decoInput.value = read;
});



let encoCopyButton = document.getElementById("encoCopyButton");
encoCopyButton.addEventListener("click", (event) => {
    let copyText = encoOutput.textContent;
    navigator.clipboard.writeText(copyText);

});

let encoPasteButton = document.getElementById("encoPasteButton");
encoPasteButton.addEventListener("click", async (event) => {
    let read = await navigator.clipboard.readText();
    encoInput.value = read;
});
