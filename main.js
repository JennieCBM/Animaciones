//funcion cambio colores cubo
const botones = document.querySelector('.lista').children;
const cuadros = document.querySelectorAll('.color');

let cambiarColor = function(nuevoColor){
    //verifico la clase actual de uno solo de los recuadros, para evitar peso innecesario (si uno tiene una clase, todos la tienen)
    let contiene = cuadros[0].classList;
    //con una expresion regular verifico si coincide la clase seleccionada con alguna de las posibilidades, y le asigno el resultado a una variable denominada colorTest
    let colorTest = /original-*/.test(contiene) ? 'original' : /rosa-*/.test(contiene) ? 'rosa' : /verde-*/.test(contiene) ? 'verde' : /azul-*/.test(contiene) ? 'azul' : undefined ;
    //mediante un ciclo itero cada uno de los elementos (cada cuadrito) para reemplazar su clase (resultado de la verificacion anterior) por la nueva clase asignada (el target del evento clcik )
    for (var cadaColor of cuadros) {
      for ( i = 1; i < 7; i++) {
        cadaColor.classList.replace(`${colorTest}-${i}`,`${nuevoColor}-${i}`);
      };//fin for
    };//fin for of cada color
}//cierre funcion cambiarColor
//con un bucle itero cada boton para asignarle un evento de click
for (boton of botones) {
  boton.addEventListener('click', (e)=>{
    //uso el mismo nombre del boton (en minusculas) como parametro
    let color = e.target.textContent.toLowerCase();
    cambiarColor(color);
  });//fin listener de click a botones
};//fin for botones

//cambio color mapamundi
const mapamundi = document.querySelector('.contenedor-mapamundi');
const anochecer = document.querySelector('.b-anochecer');
console.log(mapamundi)
anochecer.addEventListener('click', ()=>{
mapamundi.classList.toggle('anochecer');
if(mapamundi.classList.contains('anochecer')){
    anochecer.value = 'Amanecer';
}else{
    anochecer.value = 'Anochecer';
};
console.log(anochecer)
})