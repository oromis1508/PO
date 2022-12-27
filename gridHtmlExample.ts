let rowResult;
let gridText: string[][] = []
while(rowResult = /<tr>.*?<\/tr>/gms.exec('html')) {
    let cellResult;
    gridText.push([]);
    while(cellResult = /<td>(.*?)<\/td>/gms.exec(rowResult[0])) {
        gridText.at(-1).push(cellResult[1]);
    }
}