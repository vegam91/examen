function contarLetraA(frase) {
    let contador = 0;
    
    for (let i = 0; i < frase.length; i++) {
      if (frase[i] === 'a') {
        contador++;
      }
    }
    
    return contador;
  }
  
  const frase = "La vida es un carnaval";
  
  const cantidad = contarLetraA(frase);
  console.log(`La letra "a" aparece ${cantidad} veces en la frase.`);



  //bucle for para pasar por cada letra de la frase
  //en cada letra comprobar que sea estrictamente igual a "a"
  //añadir +1 al contador cada vez que la letra sea = "a"