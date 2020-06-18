//% weight=100 color#333333 icon="\uf256"
namespace functiontest{
//% block
function printString(x: string): void{
console.log(x)
}
//% blockId= printBlock block="printBlock"
function printBlock(x: () => void): void{
console.log(x)
}
}