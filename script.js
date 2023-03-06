const entrada = prompt('digite una frase')
function esPalindromo(palabra) {
  palabra = palabra.toLowerCase().replace(/\s/g, '')
  var longitud = palabra.length

  for (var i = 0; i < longitud / 2; i++) {
    if (palabra[i] !== palabra[longitud - 1 - i]) {
      return false
    }
  }
  return true
}

const mensaje = esPalindromo(entrada) ? 'La cadena es un palindromo' : 'La cadena no es un palindromo'
alert(mensaje)
