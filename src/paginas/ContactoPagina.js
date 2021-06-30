export const ContactoPagina = () => {
  return (
    <>
      <h2 className="col-12">Sección Contáctanos</h2>
      <div className="col-12">
        <form className="row">
          <div className="form-group col-12">
            <label htmlFor="nombre">Tu nombre:</label>
            <input type="text" id="nombre" className="form-control" />
          </div>
          <div className="form-group col-12">
            <label htmlFor="email">Tu correo electrónico:</label>
            <input type="text" id="email" className="form-control" />
          </div>
          <div className="form-group col-12">
            <label htmlFor="consulta">Escribe tu consulta:</label>
            <textarea
              id="consulta"
              className="form-control"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group col-12">
            <button type="submit" className="enviar btn btn-block">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
