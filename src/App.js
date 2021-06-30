import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Cabecera } from "./componentes/Cabecera";
import { ContactoPagina } from "./paginas/ContactoPagina";
import { FormularioPagina } from "./paginas/FormularioPagina";
import { ListadoPagina } from "./paginas/ListadoPagina";
import { NotFoundPagina } from "./paginas/NotFoundPagina";

function App() {
  return (
    <Router>
      <div className="container contenedor">
        <Cabecera />
        <main className="principal row">
          <Switch>
            <Route path="/listado" exact>
              <ListadoPagina />
            </Route>
            <Route path="/nuevo" exact>
              <FormularioPagina />
            </Route>
            <Route path="/editar/:id" exact>
              <FormularioPagina />
            </Route>
            <Route path="/contacto" exact>
              <ContactoPagina />
            </Route>
            <Route path="/" exact>
              <Redirect to="/listado" />
            </Route>
            <Route path="**">
              <NotFoundPagina />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
