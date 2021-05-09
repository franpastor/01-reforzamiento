import { useState } from "react"

// Un HOOK no es más que una función

// inicial: number , si pongo = 10, es un valor por defecto
export const useCounter = (inicial: number = 10) => {
  const [valor, setValor] = useState<number>(inicial)

  const acumular = (numero: number) => {
    setValor(valor + numero)
  }

  // Expone objeto, si es el mismo nombre del valor se puede poner solo 1 vez
  // return {
  //     valor: valor,
  //     acumular: acumular
  // }
  return {
    valor,
    acumular,
  }
}
