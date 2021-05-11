import { AxiosInstance } from "axios"
import { useEffect, useRef, useState } from "react"

import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from "../interfaces/reqResp"

export const useUsuarios = () => {
  const [usuario, setUsuario] = useState<Usuario[]>([])
  const paginaRef = useRef(1)

  useEffect(() => {
    cargarUsuarios(0)
  }, [])

  const cargarUsuarios = (desplazamiento: number) => {
    if (paginaRef.current + desplazamiento <= 0) {
      alert("No hay página anterior")
    } else {
      reqResApi
        .get<ReqResListado>("/users", {
          params: {
            // con el current se pasa solo el valor en lugar del objeto MutableRefObject completo
            page: paginaRef.current + desplazamiento,
          },
        })
        .then((resp) => {
          console.log(
            "anterior",
            paginaRef.current,
            resp.data.data.length,
            resp
          )
          if (resp.data.data.length > 0) {
            setUsuario(resp.data.data)
            paginaRef.current = paginaRef.current + desplazamiento
            console.log("actual", paginaRef.current, resp.data.data.length)
          } else {
            alert("No hay mas registros")
          }
        })
        .catch(console.log)
      // .catch((err) => console.log(err))
    }
  }

  const paginaSiguiente = () => {
    cargarUsuarios(1)
  }

  const paginaAnterior = () => {
    cargarUsuarios(-1)
  }

  return { usuario, paginaSiguiente, paginaAnterior }
}
