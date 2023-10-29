import { CartWidget } from "../WidgetWeb/UserWidget";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-start p-4">
    <div>
      <button className="btn btn-warning mx-5">Home</button>
      <button className="btn btn-warning mx-5">Productos</button>
      <button className="btn btn-warning mx-5">Contactos</button>
    </div>
      <div className="d-flex">
      <CartWidget/>
      <p className="mx-2">3</p>
      </div>
      </nav>
  )
}