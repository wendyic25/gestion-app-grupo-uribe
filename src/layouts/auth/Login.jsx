import userLogo from "../../assets/user.avif";
import { useState } from "react";

const Login = () => { 
    const[getUsuario,setUsuario] = useState(null);
    const[getContrasena,setContrasena] = useState(""); 
    const[getCorreo,setCorreo] = useState(""); 

    

    console.log(getUsuario)
 
  return (
    <form className="login-form">
      <img src={userLogo} alt="Usuario" />
      <h2>Iniciar sesión</h2>
      <div className="input-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input value={getUsuario} type="text" name="" id="" onChange={function name(e) {setUsuario(e.target.value)}} />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña:</label>
        <input type="text" />
      </div>
      <div className="input-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input type="text" />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
