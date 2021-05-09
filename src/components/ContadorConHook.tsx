import { useCounter } from "../hooks/useCounter"

export const ContadorConhook = () => {
  const { valor, acumular } = useCounter(100)

  return (
    <>
      <h3>
        Contador con Hook: <small>{valor}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => acumular(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => acumular(-1)}>
        -1
      </button>
    </>
  )
}
