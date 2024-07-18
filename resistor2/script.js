function calculateResistance() {
    let firstBand = parseInt(document.getElementById("first-band").value);
    let secondBand = parseInt(document.getElementById("second-band").value);
    let multiplier = parseFloat(document.getElementById("multiplier").value);
    let tolerance = parseFloat(document.getElementById("tolerance").value);

    let resistanceValue = (firstBand * 10 + secondBand) * multiplier;
    let resultText = `Сопротивление: ${resistanceValue} Ом ± ${tolerance}%`;

    document.getElementById("result").innerText = resultText;
}