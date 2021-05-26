const person = {
    name: 'Alex',
    tel: '+370 54 45 32',
    parents: {
        mom: 'O',
        dad: 'M'
    }
};

console.log(JSON.parse(JSON.stringify(person)));
const clone = JSON.parse(JSON.stringify(person));

clone.parents.mom = 'A';
console.log(
    person
)
console.log(clone);

console.table(person);