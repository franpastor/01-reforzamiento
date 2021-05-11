import { useState } from "react"


// SINTAXIS PARA GENÉRICOS (CUANDO NO SABEMOS QUE TIPO TENDRÁ EL CUSTOM HOOK)
// <T extends Object>(formulario: T) 

export const useForm = <T extends Object>(formulario: T) => {
  const [state, setState] = useState(formulario)


  // KEYOF T, PARA QUE EL CAMPO SEA DEL TIPO T
  const onChange = (value: string, campo: keyof T) => {
    setState({
      ...state,
      // Llaves cuadradas computan el valor interno
      [campo]: value,
    })
  }

  return {
    state,
    onChange,
  }
}
