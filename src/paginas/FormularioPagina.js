import { useParams } from "react-router-dom";

export const FormularioPagina = () => {
  const parametros = useParams();
  const estaEditando = !!parametros.id;
  const { id } = parametros;
  return (
    <>
      <h2 className="col-12">Sección Crear ítem</h2>
      <p>{id}</p>
      <div className="col-12">
        <form className="row">
          <div className="form-group col">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" className="form-control" />
          </div>
          <div className="form-group col">
            <label htmlFor="puntuacion">Puntuación:</label>
            <select id="puntuacion" className="form-control">
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div className="form-group col-12">
            <button type="submit" className="enviar btn btn-block">
              {estaEditando ? "Modificar" : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
