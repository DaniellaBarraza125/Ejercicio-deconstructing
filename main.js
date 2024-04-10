const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
    ];
//! 1.  Ejercicios destructuring
//         Extrae la empleada Ana con todos sus datos personales:
const [luis,ana] = empleados

console.log("Extraer a Ana", ana);

// Extrae el email del empleado Luis --> Luis@gmail.com
const [persona1] =empleados
console.log("Coger a luis", persona1);
const {email} = persona1
console.log("Mostrar core=" , email);



const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
const {name:nombre} =pokemon
console.log("cambiar name a nombre y mostrar=", nombre);
const {type} = pokemon
console.log("mostrar tipo= ", type);
const {moves} = pokemon
console.log(moves);
const [,ataque] = moves
console.log("Mostrar ataque=", ataque);

//! 2. Ejercicios spread/rest

// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}
const mergearobjeta = {...pikachu, ...pokemon }

//*como las propiedades tiene los mismos nombres se sobre escriben con los ultimos
console.log("Mergeando= ", mergearobjeta);

const sumEveryOther=((...numeros)=>{
    return numeros.reduce((a, b)=> a + b )
})

console.log("sumEveryOther= ",sumEveryOther(6, 8, 2, 3, 1)); // Debería imprimir 20
console.log("sumEveryOther= ",sumEveryOther(11, 3, 12));      // Debería imprimir 26



const addOnlyNums =((...only)=>{
    const result =  only.filter((x)=>(typeof x == "number"))
    return result.reduce((a,b)=>a+b)
})
console.log("addOnlynums= ",addOnlyNums(1, 'perro', 2, 4));


const countTheArgs = ((...cosillas)=> cosillas.length)
console.log("largo array ", countTheArgs('gato', 'perro')); 

console.log("largo array ", countTheArgs('gato', 'perro', 'pollo', 'oso')); //4

const array1 = ["hola", "Hi", "Ciao"]
const array2 = ["adios", "bye", "Ciao"]
const combineTwoArrays = [...array1, ...array2]
console.log("concatenar arrays= ", combineTwoArrays);

// !3. Extras

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

const {yesterday, today:maximaHoy, tomorrow:maximaManana} = HIGH_TEMPERATURES

console.log("maximaHoy", maximaHoy)
console.log("maximaManana" , maximaManana)


const onlyUniques = ((...cualquier)=>{ 
    return new Set(cualquier)
})
                // * new Set elimina repeticiones
console.log(onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'))
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); 

//? Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.


const combineAllArrays = (...arrays) => {
    return arrays.reduce((a, b) => a.concat(b));
};

//? . concat ha concatenado las arrays y manteni
console.log("combineAllArrays", combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]))
// [3, 6, 7, 8, 2, 7, 3, 1]
console.log("combineAllArrays", combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]));
// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]



