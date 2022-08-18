let backpack=[]

backpack.push('Jedi robe')
backpack.push('Lightsaber')
backpack.push('Crippling sense of failure and guilt')
backpack.splice(1,1)

backpack.push('Wookie coat')
backpack.push('blue milk', 'baby yoda', 'Luke','high ground', 'comm device', 'blaster')
backpack.pop()

console.log(backpack)

let stroller = backpack.splice(4,2)
console.log(backpack)
console.log(stroller)

console.log(backpack.length)


for(let i =0; i < backpack.length; i++){
    console.log(backpack[i])
}