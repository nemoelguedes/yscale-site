import classNames from "classnames";
import style from "./Steps.module.scss";

type ISteps = {
  totalSteps: number,
  currentStep: number,
}

export default function Steps(props:ISteps){

  const steps = props.totalSteps;
  
  return(
    <div className={style.progressBar}><>
    {[...Array(steps)].map((r:any, index:any) => <div className={style.item} key={index}>
<div  className={classNames({
            [style.step]: true,
            [style["step--active"]]: props.currentStep === index+1 ? true : false,
            [style["step--complete"]]: props.currentStep > index+1 ? true : false,
            [style["step--inactive"]]: props.currentStep < index+1 ? true : false,
          })}></div>
          <div className={style.divisor}></div>
    </div>)}</>
    </div>
  );
}