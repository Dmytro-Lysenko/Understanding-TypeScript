
// const names: Array<string> = []// string []#
// // names[0].split(' ')

// const promise: Promise<string> = new Promise((resolve,reject) => {
//     setTimeout (() => {
//         resolve('This is done!')
//     }, 2000);
// })

// promise.then(data => {
//     data.split(' ')
// })


function merge<T extends object, U extends object>(objA: T,objB: U) {
    return Object.assign(objA,objB)
}
const mergeObj = merge( {name: 'Max', hobbies: ['Sports']}, {age: 30},)
// const mergeObj2 = merge( {name: 'Max'}, {age: 30},)
// console.log(merge({name: 'Max'}, {age: 44}));

console.log(mergeObj.age);

interface Lengthy {
    length: number
}

function countAndPrint <T extends Lengthy>(element: T): [T,string] {
    let descruptionText = 'Got no value.'
    if(element.length === 1) {
        descruptionText = 'Got 1 element'
    } else if (element.length > 1) {
        descruptionText = 'Got ' + element.length + ' elements'
    }
    return[element, descruptionText];

}

console.log(countAndPrint(['10','ttt']));

function extractAndConvert<T extends Object, U extends keyof T>(obj: T,key: U) {
    return  'Value' + obj[key]
}

extractAndConvert({name: 'Max'},'name');
console.log(extractAndConvert({name: 'Max'},'name'));


class DataStorage<T> {
    private data: T[] = [];
    addItem(item: T) {
            this.data.push(item)
        }
    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item),1)
    }    
    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max')
console.log(textStorage.getItems());

const numbersStorage = new DataStorage<number | string>()