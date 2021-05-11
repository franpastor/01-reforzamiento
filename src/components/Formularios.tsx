import { useForm } from "../hooks/useForm"

export const Formularios = () => {
  const { state, onChange } = useForm({
    email: "test@test.com",
    password: "123456",
  })

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Email"
        value={state.email}
        onChange={(ev) => onChange(ev.target.value, "email")}
      ></input>
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={state.password}
        onChange={(ev) => onChange(ev.target.value, "password")}
      ></input>

      <code>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </code>
    </>
  )
}
