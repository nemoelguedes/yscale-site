import classNames from "classnames";
import style from "../../../styles/components.module.scss";

type ISelect = {
  label: string,
  value: string,
  handleValue: any,
  options: string[]
}

export default function InputSelect(props:ISelect){

  const changeValue = (e: any) => {
      props.handleValue(e.target.value);
  }


  return(
    <div className={style.flexColumn}>
    <div className={style.label}>{props.label}:
          </div>
        <select className={classNames({
          [style.inputSelect]: true,
          [style["input--ok"]] : true,
        })} onChange={changeValue} value={props.value}>
          {props.options.map((e:any, index:any) => <option value={e} key={index}>{e}</option>)}
        </select>
        </div>

  )
}