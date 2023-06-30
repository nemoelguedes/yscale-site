import style from "./lpBeta.module.scss";
import stylePages from "styles/pages.module.scss";
import Menu from "components/menu";
import classNames from "classnames";
import { baseURL } from "baseURL";
import { FaArrowRight, FaDashcube } from "react-icons/fa";

export default function LPBeta() {

  const convert = () => {

  }


  return (<>
    <header className={style.header}>

      <div className={style.container__horizontal}>
        <Menu />
      </div>

      <div className={stylePages.container__vertical}>

        {/* TITLE */}
        <div className={style.title}>Comunique seus Objetivos,<br />Inspire seu Time e Escale <br />os Resultados.</div>

        {/* SUBTITLE */}
        <div className={style.subtitle}>Gerencie de forma simples e intuitiva, comunique com<br /> transparência os objetivos da empresa e alcance o sucesso.</div>

        {/* BUTTON */}
        <div className={style.item}>
          <button type="submit" onClick={convert} className={classNames({
            [style.header__button]: true,
            [style["header__button--active"]]: true,
          })}>
            <div>
              Quero impulsionar meu time!
            </div>
          </button>
        </div>

        {/* WARNING */}
        <div className={style.item}>
          [Versão Beta]
        </div>
      </div>

    </header>
    <section className={style.aboutUs}>
      <div className={style.container__horizontal}>

        <div className={style.aboutUs__content}>
          <img className={style.aboutUs__image} src={baseURL + "/assets/placeholder.png"} alt="" />
        </div>
        <div className={style.aboutUs__content}>
          <div className={style.aboutUs__title}>Sobre nós</div>
          <div className={style.aboutUs__text}>
            Somos uma solução <b className={style.verde}>B2L [Business to Leaders]</b>, ajudamos líderes de pequenas empresas de tecnologia, adeptos da metodologia OKR, que ainda não estão escalando seus resultados.<br /><br />Apresentamos a <b className={style.verde}>Yscale OKR Platform</b>, uma ferramenta projetada para simplificar a comunicação de objetivos e inspirar os colaboradores a alcançarem o máximo de seu potencial.<br /><br />Imagine-nos como o seu GPS para o crescimento, orientando sua equipe de maneira simples, intuitiva e inspiradora rumo ao sucesso."
          </div>
        </div>

      </div>

    </section >
    <section className={style.features}>
      <div className={style.container__horizontal}>
        <div className={style.aboutUs__content}>

          <div className={style.aboutUs__title}>Dados que importam</div>

          {/* ITEM 1 */}

          <div className={style.features__item}>
            <div className={classNames({
              [style.features__iconArea]: true,
              [style["features__iconArea--verde"]]: true,
            })
            }>
              <FaArrowRight className={style.features__icon} />
            </div>
            <div className={style.features__content}>
              <div className={style.features__itemTitle}>
                Simplicidade e intuitividade
              </div>
              <div className={style.features__itemText}>
                Configure em minutos [ideia button], atualize em segundos e tenha clareza dos avanços globais, individuais ou dos times. Viva uma nova experiência de liderança.
              </div>
            </div>
          </div>

          {/* ITEM 2 */}

          <div className={style.features__item}>
          <div className={classNames({
              [style.features__iconArea]: true,
              [style["features__iconArea--azul"]]: true,
            })
            }>
              <FaArrowRight className={style.features__icon} />
            </div>
            <div className={style.features__content}>
              <div className={style.features__itemTitle}>
                Dashboards que importam
              </div>
              <div className={style.features__itemText}>
                Aquela tela que você sempre quis para alinhar e engajar o time, acesse as informações mais relevantes para informar os progressos a todos. Acelere a velocidade de escalada.
              </div>
            </div>
          </div>

          {/* ITEM 3 */}

          <div className={style.features__item}>
          <div className={classNames({
              [style.features__iconArea]: true,
              [style["features__iconArea--roxo"]]: true,
            })
            }>
              <FaArrowRight className={style.features__icon} />
            </div>
            <div className={style.features__content}>
              <div className={style.features__itemTitle}>
                Mantenha o ritmo da escalada
              </div>
              <div className={style.features__itemText}>
                Gerencie as principais atividades que devem ser feitas em torno de cada resultado chave e receba dicas de boas práticas da Yscale OKR Platform no processo de “subida”. #keepclimbing
              </div>
            </div>
          </div>



        </div>

        <div className={style.aboutUs__content}>
          <img className={style.aboutUs__image} src={baseURL + "/assets/placeholder.png"} alt="" />
        </div>
      </div>
    </section>

    <div className={stylePages.container}>
      <section className={style.section}>
        Estamos em Beta, rode seu próximo ciclo OKR de até 3 meses conosco gratuitamente.<br /><br />

        dados do form: nome, email, telefone/whatsapp; empresa; cargo, departamento, número de líderes na empresa<br /><br />
        [no rodapé] *período teste de 3 meses, com limite de até 10 líderes por empresa


      </section>
    </div>
  </>

  );
}