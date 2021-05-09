// import { ObjetosLiterales } from "./typescript/ObjetosLiterales"
// import { TiposBasicos } from "./typescript/TiposBasicos"
// import { Funciones } from './typescript/Funciones';
// import { Contador } from "./components/Contador"
// import { ContadorConhook } from "./components/ContadorConHook"
// import { Login } from './components/Login';
import { Usuarios } from './components/Usuarios';

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TS - React</h1>
      <hr></hr>
      {/* <TiposBasicos></TiposBasicos> */}
      {/* <ObjetosLiterales></ObjetosLiterales> */}
      {/* <Funciones></Funciones> */}
      {/* <Contador></Contador> */}
      {/* <ContadorConhook></ContadorConhook> */}
      {/* <Login></Login> */}
      <Usuarios></Usuarios>
    </div>
  )
}

export default App;