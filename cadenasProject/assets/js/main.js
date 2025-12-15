/*Cadenas en JavaScript
*
*/

// Cadena base para los ejemplos

let lorem1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
let lorem2 = "Quisquam cupiditate tempora amet esse qui rem officia in distinctio inventore?";
let lorem3 = " Aspernatur quos et officiis aliquid optio natus doloribus molestiae maiores totam.";

// 1. length
// Devuelve la cantidad total de caracteres del string
console.log(lorem1.length);

// 2. charAt()
// Devuelve el carácter ubicado en la posición indicada
console.log(lorem1.charAt(1));

// 3. charCodeAt()
// Devuelve el valor Unicode del carácter según su posición
console.log(lorem1.charCodeAt(1));

// 4. at()
// Devuelve el carácter según el índice (permite índices negativos)
console.log(lorem2.at(-2));

// 5. String[ ]
// Permite acceder directamente a un carácter del string
console.log(lorem2[2]);

// 6. slice()
// Extrae una parte del string según los índices indicados
console.log(lorem2.slice(1, 5));

// 7. substring()
// Similar a slice, pero no admite valores negativos
console.log(lorem3.substring(1, 5));

// 8. substr()
// Extrae una cantidad de caracteres desde una posición (método en desuso)
console.log(lorem3.substr(1, 4));

// 9. toUpperCase()
// Convierte el string a mayúsculas
console.log(lorem3.toUpperCase());

// 10. toLowerCase()
// Convierte el string a minúsculas
console.log(lorem1.toLowerCase());

// 11. concat()
// Une uno o más strings
console.log(lorem1.concat("Bienvenido"));

// 12. trim()
// Elimina los espacios en blanco al inicio y al final
console.log(lorem1.trim());

// 13. trimStart()
// Elimina solo los espacios del inicio
console.log(lorem1.trimStart());

// 14. trimEnd()
// Elimina solo los espacios del final
console.log(lorem1.trimEnd());

// 15. padStart()
// Rellena el string desde el inicio hasta alcanzar una longitud
console.log("5".padStart(3, "0"));

// 16. padEnd()
// Rellena el string desde el final
console.log("5".padEnd(3, "0"));

// 17. repeat()
// Repite el contenido del string la cantidad de veces indicada
console.log("Hola ".repeat(3));

// 18. replace()
// Reemplaza la primera coincidencia encontrada
console.log(lorem2.replace("Mundo", "JavaScript"));

// 19. replaceAll()
// Reemplaza todas las coincidencias encontradas
console.log("a-a-a".replaceAll("a", "b"));

// 20. split()
// Divide el string y lo convierte en un arreglo
console.log("Hola Mundo JavaScript".split(" "));