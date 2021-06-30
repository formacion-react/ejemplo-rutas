import { useHistory, useLocation } from "react-router-dom";

export const ListadoPagina = () => {
  const parametrosQuery = useLocation().search;
  const params = new URLSearchParams(parametrosQuery);
  console.log(params.get("a"), params.get("b"));
  const history = useHistory();

  const irAEditar = (id) => {
    history.push(`/editar/${id}`);
  };

  return (
    <>
      <h2 className="col-12">Sección listado</h2>
      <div className="col-12">
        <ul className="listado row list-unstyled">
          <li className="item col-4">
            <div className="item-inner" onClick={() => irAEditar(1)}>
              Item 1
            </div>
          </li>
          <li className="item col-4">
            <div className="item-inner" onClick={() => irAEditar(2)}>
              Item 2
            </div>
          </li>
          <li className="item col-4">
            <div className="item-inner" onClick={() => irAEditar(3)}>
              Item 3
            </div>
          </li>
          <li className="item col-4">
            <div className="item-inner" onClick={() => irAEditar(4)}>
              Item 4
            </div>
          </li>
          <li className="item col-4">
            <div className="item-inner">Item 5</div>
          </li>
          <li className="item col-4">
            <div className="item-inner">Item 6</div>
          </li>
          <li className="item col-4">
            <div className="item-inner">Item 7</div>
          </li>
          <li className="item col-4">
            <div className="item-inner">Item 8</div>
          </li>
          <li className="item col-4">
            <div className="item-inner">Item 9</div>
          </li>
        </ul>
      </div>
    </>
  );
};
