//Type Any -> avoid whenever possible

let result = loopPrint(10, "", true);
console.log(result);

function loopPrint(count: number, text: string, postfix: boolean): number {
    let z: any;
    for (let i = 0; i < count; i++) {
        postfix ? console.log(text + i) : console.log(i + text);
        z = i;
    }

    z?.toFixed();
    return 0;
}