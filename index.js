let n = 20
let nMeter = 0
let nFeet = 0
let nGallon = 0
let nLiter = 0
let nPound = 0
let nKilogram = 0

function lengthMeter () {nMeter = n*0.3048}
function lengthFeet () {nFeet = n*3.2808}
function volumeGallon () {nGallon = n*0.2641}
function volumeLiter () {nLiter = n*3.7854}
function weightPound () {nPound = n*2.2046}
function weightKilogram () {nKilogram = n*0.4535}

document.getElementById("number-el").textContent = n

lengthMeter()
lengthFeet()
volumeGallon()
volumeLiter()
weightPound()
weightKilogram()

document.getElementById("p2").textContent = n + " meters = " + nFeet + " feet | " + n + " feet = " + nMeter + " meters"
document.getElementById("p4").textContent = n + " liters = " + nGallon + " gallon | " + n + " gallon = " + nLiter + " liters"
document.getElementById("p6").textContent = n + " kilos = " + nPound + " pounds | " + n + " pounds = " + nKilogram + " kilos"
