import { useEffect, useRef, useState } from "react"

import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from "../interfaces/reqResp"

export const Usuarios = () => {
  const [usuario, setUsuario] = useState<Usuario[]>([])

  const paginaRef = useRef(1)

  useEffect(() => {
    cargarUsuarios()
  }, [])

  const cargarUsuarios = () => {
    reqResApi
      .get<ReqResListado>("/users", {
        params: {
          // con el current se pasa solo el valor en lugar del objeto MutableRefObject completo
          page: paginaRef.current,
        },
      })
      .then((resp) => {
        if (resp.data.data.length > 0) {
          setUsuario(resp.data.data)
          paginaRef.current++
        } else {
          alert("No hay mas registros")
        }
      })
      .catch(console.log)
    // .catch((err) => console.log(err))
  }

  const renderItem = ({ id, first_name, avatar, email }: Usuario) => {
    return (
      <tr key={id}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 35, borderRadius: 100 }}
          ></img>
        </td>
        <td>{first_name}</td>
        <td>{email}</td>
      </tr>
    )
  }

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuario.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={cargarUsuarios}>
        Siguientes
      </button>
    </>
  )
}
