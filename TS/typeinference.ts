//Type Inference
const count = 10;
const text = "count: ";
let postfix = true;
const result1 = loopPrint1(count, "", true);
console.log(result1 - 10);

function loopPrint1(count: number, text: string, postfix: boolean): number {
    for (let i = 0; i < count; i++) {
        postfix ? console.log(text + i) : console.log(i + text);
        return 0;
    }

    return 0;
}