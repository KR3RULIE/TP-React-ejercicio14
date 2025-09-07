const urlrecetas = import.meta.env.VITE_API_RECETAS;
const urlusuarios = import.meta.env.VITE_API_USUARIOS;
// get - post - put - delete

export const leerRecetas = async () => {
  try {
    const respuesta = await fetch(urlrecetas);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const obtenerRecetaPorID = async (id) => {
  try {
    const respuesta = await fetch(urlrecetas + `/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const crearReceta = async (recetaNueva) => {
  try {
    const respuesta = await fetch(urlrecetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaNueva),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const editarReceta = async (recetaEditada, id) => {
  try {
    const respuesta = await fetch(urlrecetas + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaEditada),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const borrarRecetasPorID = async (id) => {
  try {
    const respuesta = await fetch(urlrecetas + `/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// USUARIOS

export const leerUsuarios = async () => {
  try {
    const respuesta = await fetch(urlusuarios);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const crearUsuario = async (usuarioNuevo) => {
  try {
    const respuesta = await fetch(urlusuarios, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioNuevo),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};