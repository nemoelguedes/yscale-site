import style from "./lpBeta.module.scss";
import stylePages from "styles/pages.module.scss";
import Menu from "components/menu";
import classNames from "classnames";
import { baseURL } from "baseURL";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import LPForm from "components/forms/lpForm";
import { useRef } from "react";

export default function LPBeta() {

  const formRef = useRef<HTMLDivElement>(null);

  const convert = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (<>
    <header className={style.header}>

      <div className={style.container__horizontal}>
        <Menu />
      </div>

      <div className={style.container__vertical}>

        {/* TITLE */}
        <div className={style.title}>Comunique seus Objetivos,<br className={style.br__mobile} /> Inspire seu Time e Escale <br className={style.br__mobile} />os Resultados.</div>

        {/* SUBTITLE */}
        <div className={style.subtitle}>Gerencie de forma simples e intuitiva, comunique com<br className={style.br__mobile} /> transparência os objetivos da empresa e alcance o sucesso.</div>

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

        <div className={style.item}>
          <img className={style.header__image} src={baseURL + "/assets/tela1.png"} alt="" />
        </div>

      </div>

    </header>
    <section className={style.aboutUs}>
      <div className={style.container__vertical}>

        <div className={style.aboutUs__title}>Sobre nós</div>
        <div className={style.aboutUs__text}>
          Somos uma solução <b className={style.verde}>B2L [Business to Leaders]</b>, ajudamos líderes de pequenas empresas de tecnologia, adeptos da metodologia OKR, que ainda não estão escalando seus resultados.<br /><br />Apresentamos a <b className={style.verde}>Yscale OKR Platform</b>, uma ferramenta projetada para simplificar a comunicação de objetivos e inspirar os colaboradores a alcançarem o máximo de seu potencial.<br /><br />Imagine-nos como o seu GPS para o crescimento, orientando sua equipe de maneira simples, intuitiva e inspiradora rumo ao sucesso."
        </div>

        <div className={style.aboutUs__title}>Dados que importam</div>


      </div>

    </section >
    <section className={style.features}>
      <div className={style.container__horizontal}>
        <div className={style.aboutUs__content}>



          {/* ITEM 1 */}

          <div className={style.features__item}>
            <div className={classNames({
              [style.features__iconArea]: true,
              [style["features__iconArea--verde"]]: true,
            })
            }>
              <FaChartPie className={style.features__icon} />
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
              <FaChartBar className={style.features__icon} />
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
              <FaChartLine className={style.features__icon} />
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

        <div className={style.dash__content}>
          <img className={style.dash__image1} src={baseURL + "/assets/dash1.png"} alt="" />
          <img className={style.dash__image2} src={baseURL + "/assets/dash2.png"} alt="" />
          <img className={style.dash__image3} src={baseURL + "/assets/dash3.png"} alt="" />
          <img className={style.dash__image4} src={baseURL + "/assets/dash4.png"} alt="" />
        </div>
      </div>
    </section>

    <section className={style.form} ref={formRef}>
      <div className={style.container__horizontal}>


        <div className={style.aboutUs__content}>
          <div className={style.aboutUs__title}>Impulsione seu time</div>
          <div className={style.aboutUs__text}>

            <LPForm />
            <br />

            <div className={style.item}>
              * Período teste de 3 meses.<br />
              ** Limite de até 10 líderes por empresa.<br />
              *** Consultar Disponibilidade.
            </div>
          </div>
        </div>

      </div>

    </section >
  </>

  );
}