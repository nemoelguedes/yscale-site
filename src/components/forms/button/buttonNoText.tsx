import classNames from "classnames";
import { FaAngleLeft, FaAngleRight, FaCheck, FaEdit, FaEye, FaFlag, FaPlus, FaSync, FaTimes, FaTrash} from "react-icons/fa";
import style from "./Button.module.scss";

type IButton = {
  action: any,
  status: boolean,
  text: string,
  to: string,
  icon: string
}

export default function ButtonSystemNoText(props:IButton){

  const submit = (e: any) => {
    e.preventDefault();
    if(props.status === true){
      props.action(e);
    }
  }

  return(
    <>
    <button type="submit" onClick={submit} className={classNames({
      [style.control]: true,
      [props.status === true ? style["control__next--active"] : style["control__next--inactive"]  ]: props.to === "next" ? true : false,
      [props.status === true ? style["control__previous--active"] : style["control__previous--inactive"]  ]: props.to === "previous" ? true : false,
      [props.status === true ? style["control__remove--active"] : style["control__remove--inactive"]  ]: props.to === "remove" ? true : false,
      [props.status === true ? style["control__finish--active"] : style["control__finish--inactive"]  ]: props.to === "finish" ? true : false,
      [props.status === true ? style["control__checkpoint--active"] : style["control__checkpoint--inactive"]  ]: props.to === "checkpoint" ? true : false,
    })}>
      {props.icon === "add" ? <FaPlus className={style.icon__noText} /> : ""}
      {props.icon === "back" ? <FaAngleLeft className={style.icon__noText} /> : ""}
      {props.icon === "cancel" ? <FaTimes className={style.icon__noText} /> : ""}
      {props.icon === "next" ? <FaAngleRight className={style.icon__noText} /> : ""}
      {props.icon === "remove" ? <FaTrash className={style.icon__noText} /> : ""}
      {props.icon === "review" ? <FaEye className={style.icon__noText} /> : ""}
      {props.icon === "finish" ? <FaCheck className={style.icon__noText} /> : ""}
      {props.icon === "update" ? <FaSync className={style.icon__noText} /> : ""}
      {props.icon === "edit" ? <FaEdit className={style.icon__noText} /> : ""}
      {props.icon === "checkpoint" ? <FaFlag className={style.icon__noText} /> : ""}
    </button>
    </>
  )
}