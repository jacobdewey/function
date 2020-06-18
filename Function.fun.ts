//% weight=100 color#333333 icon="\uf256"
namespace functiontest{
//% block
function printstring(x: string): void{
console.log(x)
}
//% block
export function printString(x: string): void{
printString(x)
}
//% blockId= printBlock block="printBlock"
export function printBlock(x: () => void): void{
printBlock(function () {
x
})
}





function printblock(x: () => void): void{
console.log(x)
}
}