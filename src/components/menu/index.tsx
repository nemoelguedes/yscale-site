import { NavLink, useNavigate } from "react-router-dom";
import style from "./Menu.module.scss";
import { FaChartBar } from "react-icons/fa";
import { useState } from "react";
import classNames from "classnames";
import { baseURL } from "baseURL";
import ButtonSystem from "components/forms/button";

export default function Menu() {

  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const goTo = () => {
    navigate("https://yscale.com.br");
  }

  function openMenu() {
    setMenu(!menu);
  }

  function closeMenu() {
    setMenu(false);
  }

  if (menu === true) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'unset';
  }

  return (
    <>
      <div className={style.header}>

        <div className={style.logo}>
          <NavLink to="/"><img src={
            baseURL + "/assets/yscale_white.svg"} alt="Yscale" className={style.logo__img} /></NavLink>
        </div>

        <div className={classNames({
          [style.menu]: true,
          [menu === true ? style["menu--active"] : style["menu--hidden"]]: true,
        })}>
          <nav onClick={closeMenu}>
            <ul>


              {/* <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? style.active : "")}>
                  <FaChartBar className={style.menu__icon} />
                  <div className={style.title}>
                    Acessar Plataforma
                  </div>
                </NavLink>
              </li> */}

              <button type="submit" onClick={goTo} className={classNames({
                [style.button]: true,
                [style["button--active"]]: true,
              })}>
                <div>
                  Acessar Plataforma
                </div>
              </button>

            </ul>
          </nav>

        </div>

        <div className={style.toggle}>
          <label htmlFor="check">
            <input type="checkbox" id="check" checked={menu} onClick={openMenu} />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

      </div>





    </>
  );
}