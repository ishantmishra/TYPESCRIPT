// const person: {
//    name: string;
//    age:number;
//
//} = {
const person = {
    name: 'ISHANT',
    age: 18,
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
} 