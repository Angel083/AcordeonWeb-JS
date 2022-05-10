const bloque  = document.querySelectorAll('.bloque')
const h2      = document.querySelectorAll('.h2')

h2.forEach(( eachH1, index) => {
  h2[index].addEventListener('click', () => {
    if (!bloque[index].classList.contains('activo')) {
      bloque.forEach((eachBloque, i) => {
        bloque[i].classList.remove('activo');
      })
      bloque[index].classList.add('activo')
      
    } else {
      bloque.forEach((eachBloque, i) => {
        bloque[i].classList.remove('activo');
      })
    }
  })
})