import { BrowserRouter as Router } from "react-router-dom";
import style from "styles/pages.module.scss";
import Menu from "components/menu";
import RoutesComponent from "routes/routes";

export default function App() {

  return (
    <Router>
      <section className={style.section}>
        <div className={style.body}>
          <RoutesComponent />
        </div>
      </section>
    </Router>
  );
}