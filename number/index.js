

document.write("Number(stringNum) convert string number in number:    " + Number("987654"))
document.write("<br>")
document.write(" parseInt(stringNumber/floatNumber) covert string number in integer:   "+parseInt(4.1234))
document.write("<br>")
document.write(" parseFloat(stringNumber) covert string number in float:   "+parseFloat(89643.3904))
document.write("<br>")
document.write(" toFixed(num) number after point   "+ (89643.3904).toFixed(2))
document.write("<br>")
document.write(" toPrecision(num) gives exponiential value  and gives exact number which is given   "+ (89643.3904).toPrecision(4))
document.write("<br>")
document.write("is 234  integer :   "+Number.isInteger(234))
document.write("<br>")
document.write("is 2.34 Finite :   "+Number.isFinite(2.34))
document.write("<br>")
document.write("is 1.797693134862315E+308 * 1.001 Finite :   "+Number.isFinite(1.797693134862315E+3008 * 1.000001))