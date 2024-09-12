//1. Crear una función que encuentre el número más repetido en un array.
//Ejemplo Input -> [3,6,1,8,2,3,6,3,2,5,6]
//Salida -> 6
function numeroMasRepetido(arr) {
    const conteo = {};
    let maxNumero = arr[0];
    let maxConteo = 0;

    for (const num of arr) {
        conteo[num] = (conteo[num] || 0) + 1;
        if (conteo[num] > maxConteo) {
            maxConteo = conteo[num];
            maxNumero = num;
        }
    }

    return maxNumero;
}
// Ejemplo:
const input1 = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];
console.log(numeroMasRepetido(input1)); // Salida -> 3



//2. Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras.
//Ejemplo input -> [8,‘e’,7,2,‘a’,‘d’,‘f’,2,3,1,4,3]
//Salida → [‘e’,‘a’,‘d’,‘f’]
function filtrarLetras(arr) {
    return arr.filter(item => typeof item === 'string' && item.length === 1 && /[a-zA-Z]/.test(item));
}
// Ejemplo:
const input2 = [8, 'e', 7, 2, 'a', 'd', 'f', 2, 3, 1, 4, 3];
console.log(filtrarLetras(input2)); // Salida -> ['e', 'a', 'd', 'f']


//3. Crear una función que busque el número más grande en un arreglo.
//Ejemplo input - > [1,4,7,2,4,1,9,4,0,2,4,5,12]
//Salida -> 12
function numeroMasGrande(arr) {
    return Math.max(...arr);
}
// Ejemplo:
const input3 = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
console.log(numeroMasGrande(input3)); // Salida -> 12


//4.- Crear una función que busque el número más pequeño en el arreglo.
//Ejemplo input - > [1,4,5,-1,-7,2,3,9]
//Salida -> -7
function numeroMasPequeno(arr) {
    return Math.min(...arr);
}
// Ejemplo:
const input4 = [1, 4, 5, -1, -7, 2, 3, 9];
console.log(numeroMasPequeno(input4)); // Salida -> -7


//5. Crear una clase llamada ``Contacto`` con los siguientes datos:
//Nombre
//Apellidos
//Teléfono
class Contacto {
    constructor(nombre, apellidos, telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }
}

class ListaContactos {
    constructor() {
        this.contactos = [];
    }

    agregarContacto(contacto) {
        this.contactos.push(contacto);
    }

    buscarContactoPorNombre(nombre) {
        return this.contactos.filter(contacto => contacto.nombre === nombre);
    }
}
// Ejemplo:
const lista = new ListaContactos();
const contacto1 = new Contacto('Karina', 'Rivas', '123456789');
const contacto2 = new Contacto('Esmeralda', 'Palafox', '987654321');

lista.agregarContacto(contacto1);
lista.agregarContacto(contacto2);

console.log(lista.buscarContactoPorNombre('Karina')); // Salida -> [ Contacto { nombre: 'Karina', apellidos: 'Rivas', telefono: '987654321' } ]


