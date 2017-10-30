/**
 * 
 * @file  Resumen de funciones en javascript
 * @author Tomás Fermoso
 * @version 0.1
 */
/**
 * @description piramideMediaInversa
 * @example 012345
 * @example 01234
 * @example 0123
 * @example 012
 * @example 01
 * @example 1
 
 *           
 * @param {number} altura Altura de la pirámide
 * @returns {void} Muestra en consola una media pirámide inversa
 */
 function piramideMediaInversa(altura) { //Iniciamos la funcion con la variable altura que sera un numero                                             entero
    for (let i = 0; i < altura; i++) { //Definimos la variable i como un entero = 0 en esta funcion actuara como un contador y mientras el contador sea menor que la altura Ira ensanchando la base de la piramide.
        let linea = "";
        for (let j = altura - i; j >= 0; j--) {   //Una vez que tenemos la base de nuestra piramide invertida vamos quitandole unidades a la altura hasta que llegamos a 0.
            linea = linea + j;
        }   //redefinimos la variable linea para que escriba el valor correspondiente en cada bucle.
        console.log(linea);
    }
    console.log(0)
}
/**
 * 
* @param {number} altura Altura de la pirámide
* @returns {void} Muestra en consola una media pirámide
*/
function piramideMedia(altura) {
    //Iniciamos la funcion con la variable altura que sera un numero                                             entero
    let contador = 0;
    //inicializamos la variable contador a 0.
    for (let i = 0; i <= altura; i++) {
        //mientras la variable sea menor que la altura vamos sumando el numero de lineas.
        let linea = "";
        for (let j = altura - i; j > 0; j--) { //definimos una variable j 
            linea = linea + " ";
        }
        for (let k = i; k >= 0; k--) {
            linea = linea + k;
        }
        console.log(linea);
    }
}

/**
 * 
* @param {number} altura Altura de la pirámide
* @returns {void} Muestra en consola una piramide.
*/
function piramide(altura) {
    let contador = 0;
    for (let i = 0; i <= altura; i++) {
        let linea = "";
        for (let j = altura - i; j > 0; j--) {
            linea = linea + " ";
        }
        for (let j = i; j >= 0; j--) {
            linea = linea + j;
        }
        if (i > 0) {
            for (let j = 1; j <= i; j++) {
                linea = linea + j;
            }
        }
        console.log(linea);
    }
}

/**
 * @description piramideAsteriscos Función que muestra por consola una pirámide de asteriscos
 * @example     *
 * @example    ***
 * @example   *****
 * @example  *******
 * @example *********
 
 *           
 * @param {number} altura Altura de la pirámide de asteriscos
 * @returns {void}
 */
function piramideAsteriscos(altura) {
    let contador = 0;
    for (let i = 0; i <= altura; i++) {
        let linea = "";
        for (let j = altura - i; j > 0; j--) {
            linea = linea + " ";
        }
        for (let j = i; j >= 0; j--) {
            linea = linea + "*";
        }
        if (i > 0) {
            for (let j = 1; j <= i; j++) {
                linea = linea + "*";
            }
        }
        console.log(linea);
    }
}

piramideMediaInversa(8);
piramideMedia(8);
piramide(8);
piramideAsteriscos(8);
