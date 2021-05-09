import { useReducer, useEffect } from "react"

interface AuthState {
  validando: boolean
  token: string | null
  username: string
  nombre: string
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
}

type LoginActionPayload = { username: string; nombre: string }

/// El tipo es como un objeto plano, no se puede expandir como una interfaz
type AuthAction =
  | { type: "logout" }
  | { type: "login"; payload: LoginActionPayload }

// State nunca debe mutar, ni aunque sea un arreglo se debe hacer push
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: "",
      }
    case "login":
      const { nombre, username } = action.payload
      return {
        validando: false,
        token: "123",
        nombre,
        username,
      }

    default:
      return state
  }
}

export const Login = () => {
  // Como el useState pero más completo. El initialState es un objeto.
  // El reducer recibe un state y una acción, la cual será type
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  )
  //   const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" })
    }, 1500)
  }, [])

  const login = () => {
    dispatch({ type: "login", payload: { nombre: "Fran", username: "Pastor" } })
  }

  const logout = () => {
    dispatch({ type: "logout" })
  }

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    )
  }

  return (
    <>
      <h3>Login</h3>

      {token ? (
        <div className="alert alert-success">Autenticado como : {nombre}</div>
      ) : (
        <div className="alert alert-danger">No autenticado...</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  )
}
