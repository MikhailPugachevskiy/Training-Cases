const result = loopPrint(10, "count:", false);

function loopPrint(count: number, text: string, postfix: boolean): boolean {
    for (let i = 0; i < count; i++) {
        postfix ? console.log(text + i) : console.log(i + text);
    }

    return true;
}
//..., postfix: boolean): string {...} => return "finished"; => will work
//..., postfix: boolean): number {...} => return 0; => will work


//Arrow-functions:
const add = (e: number, f: number) => e + f;


/*Never-functions:
const result = loopPrint("count:");

function loopPrint(text: string): never {
    while (true) {
        console.log(text);
    }
}*/
