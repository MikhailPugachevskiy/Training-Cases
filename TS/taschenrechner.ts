const n1 = document.getElementById("n1")! as HTMLInputElement; //AUSRUFEZEICHEN !-> Es wird kein undefined geben
const n2 = document.getElementById("n2")! as HTMLInputElement; //AUSRUFEZEICHEN !-> Es wird kein undefined geben
const result = document.getElementById("result")!; //AUSRUFEZEICHEN !-> Es wird kein undefined geben
const calcButton = document.getElementById("calcBtn")!; //AUSRUFEZEICHEN !-> Es wird kein undefined geben

calcButton.addEventListener("click", () => {
    result.innerText = add(parseInt(n1.value), parseInt(n2.value)).toString();
});

function add(n1: number, n2: number) {
    return n1 + n2;
}