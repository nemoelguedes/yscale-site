import classNames from "classnames";
import style from "../../../styles/components.module.scss";

type ITextValid = {
  label: string,
  status: boolean,
  value: number | string,
  handleValue: any,
  erro: string,
  placeholder: string
}

export default function TextInput(props:ITextValid){

  const changeValue = (e: any) => {
      props.handleValue(e.target.value);
  }


  return(
    <div className={style.label}>{props.label}:
        <input type="text" className={classNames({
          [style.input]: true,
          [props.status === true ? style["input--notOk"] : ""]: true,
          [props.status === false ? style["input--ok"] : ""]: true,
        })} onChange={changeValue} value={props.value} placeholder="" />
        <span className={style.message}>
          {props.status === true ? props.erro : ""}
        </span>
      </div>
  )
}