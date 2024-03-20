console.log("Bienvenidos a mi Ecommerce")

let edad = 23; // number
let nombre = "Bruno"; // string
nombre = "Jose"

nombre.toUpperCase();

console.log(nombre)

let isDarkTheme = true;

// function saludar(nombre:string): string {
//     const saludo = `Hola ${nombre}`;
//     console.log(saludar);
//     return saludo;
// }

// saludar("Martin")

let frutas = ["Manzana", "Naranja", "Banana"] // string[]
let calificaciones = [10, 9, 8, 7] // number[]

// let numerosYLetras: (string | number)[] = ["Matias", "Veronica", 30, 50];

// let usuarios = [{ nombre: "Naruto"}, {nombre: "Dragon"}]; // { nombre: string }[];

interface Usuario {
    nombre: string;
    edad:  number;
    role: Roles;
    iniciarSesion: () => void;
}

class Usuario {
    nombre: string;
    edad:  number;
    role: Roles;

    constructor(nombre: string, edad: number, role: Roles ) {
        this.nombre = nombre;
        this.edad = edad;
        this.role = role;
    }
}

enum Roles {
    Administrador = "admin",
    Usuario = "user",
}

const batman = new Usuario('Bruce Wayne', 20, Roles.Administrador);
const superman = new Usuario('Clark Ken', 22, Roles.Usuario);

let usuarios: Usuario[] = [
    { nombre: "Naruto", 
    edad: 25, 
    role: Roles.Administrador,
    iniciarSesion: () => {
        // Alguna logica
    }
},
{   nombre: "Eclipse", 
    edad: 22, 
    role: Roles.Usuario,
    iniciarSesion: () => {
        // Alguna logica
    }
},
    
    // { nombre: "Dragon", edad: 22, role: Roles.Administrador},
    // { nombre: "Eclipse", edad: 28, role: Roles.Administrador},
];

function validadIsAdmin(role: string) {
    return role === Roles.Administrador;
}

const user = {
    role: "user",
};

validadIsAdmin(user.role);

