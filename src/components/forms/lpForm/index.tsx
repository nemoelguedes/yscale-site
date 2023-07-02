import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import style from "./lpForm.module.scss";
import { useReducer, useState } from "react";
import classNames from "classnames";

import axios from 'axios';
import { FaCheckCircle } from "react-icons/fa";


const initialForm = {
  nome: "",
  email: "",
  whatsapp: "",
  empresa: "",
  cargo: "",
  departamento: "",
  lideres: ""
};

const filtersForm = (state: any, action: any) => {
  switch (action.type) {

    case "nome":
      return { ...state, nome: action.payload };

    case "email":
      return { ...state, email: action.payload };

    case "whatsapp":
      return { ...state, whatsapp: action.payload };

    case "empresa":
      return { ...state, empresa: action.payload };

    case "cargo":
      return { ...state, cargo: action.payload };

    case "departamento":
      return { ...state, departamento: action.payload };

    case "lideres":
      return { ...state, lideres: action.payload };

    case "reset":
      return action.payload;

    default:
      throw new Error();

  }
}


export default function LPForm() {

  const [form, setForm] = useReducer(filtersForm, initialForm);

  const [open, setOpen] = useState(false);


  const [messageNome, setMessageNome] = useState(false);
  const [messageEmail, setMessageEmail] = useState(false);
  const [messageWhatsapp, setMessageWhatsapp] = useState(false);
  const [messageEmpresa, setMessageEmpresa] = useState(false);
  const [messageCargo, setMessageCargo] = useState(false);
  const [messageDepartamento, setMessageDepartamento] = useState(false);
  const [messageLideres, setMessageLideres] = useState(false);

  const submit = async () => {
    // Verificar se todos os campos foram preenchidos
    if (!form.nome || !form.email || !form.whatsapp || !form.empresa || !form.cargo || !form.departamento || !form.lideres) {
      // Exibir mensagens de erro para campos vazios
      setMessageNome(!form.nome);
      setMessageEmail(!form.email);
      setMessageWhatsapp(!form.whatsapp);
      setMessageEmpresa(!form.empresa);
      setMessageCargo(!form.cargo);
      setMessageDepartamento(!form.departamento);
      setMessageLideres(!form.lideres);
      return;
    }

    try {
      const webhookUrl = 'https://discord.com/api/webhooks/1124400142792011776/lq6ZPKrrvbwmUfX12vuE4SdzbgWYKnw72SwKlBfwjqtccppM0cr4n24UEBYblfyTsneL'; // Substitua com o URL do seu webhook do Discord

      const message = `Nome: ${form.nome}\nEmail: ${form.email}\nWhatsapp: ${form.whatsapp}\nEmpresa: ${form.empresa}\nCargo: ${form.cargo}\nDepartamento: ${form.departamento}\nNúmero de líderes na empresa: ${form.lideres}`;

      await axios.post(webhookUrl, { content: message });

      handleOpen();


    } catch (error) {
      console.error('Erro ao enviar a mensagem para o webhook do Discord:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const styleModal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };


  return (
    <div className={style.container}>

      Estamos em Beta, rode seu próximo ciclo OKR de até 3 meses conosco gratuitamente.<br /><br />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>

          <div className={style.success}>
            <FaCheckCircle className={style.success__icon} />
          </div>

          <div className={style.success}>
            Sucesso!<br/> Recebemos os seus dados.
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Em breve, retornaremos com mais informações via whatsapp ou e-mail.
          </Typography>
        </Box>
      </Modal>

      <div className={style.input}>



        <TextField
          label="Nome"
          error={Boolean(messageNome)}
          helperText={messageNome ? "Digite o seu nome." : ""}
          value={form.nome}
          onChange={(e: any) => setForm({ type: "nome", payload: e.target.value })}
          sx={{
            width: '100%', '& label': {
              minWidth: 200,
            },
          }}
          fullWidth
        />

      </div>
      <div className={style.input}>

        <TextField
          label="E-mail"
          error={Boolean(messageEmail)}
          type="email"
          helperText={messageEmail ? "Digite o seu melhor e-mail." : ""}
          value={form.email}
          onChange={(e: any) => setForm({ type: "email", payload: e.target.value })}
          sx={{
            width: '100%', '& label': {
              minWidth: 200,
            },
          }}
          fullWidth
        />
      </div>
      <div className={style.input}>

        <TextField
          label="Whatsapp"
          error={Boolean(messageWhatsapp)}
          helperText={messageWhatsapp ? "Digite o número do seu whatsapp." : ""}
          value={form.whatsapp}
          onChange={(e: any) => setForm({ type: "whatsapp", payload: e.target.value })}
          sx={{
            width: '100%', '& label': {
              minWidth: 200,
            },
          }}
          fullWidth
        />
      </div>
      <div className={style.input}>
        <TextField
          label="Empresa"
          error={Boolean(messageEmpresa)}
          helperText={messageEmpresa ? "Digite o nome da sua empresa." : ""}
          value={form.empresa}
          onChange={(e: any) => setForm({ type: "empresa", payload: e.target.value })}
          sx={{
            width: '100%', '& label': {
              minWidth: 200,
            },
          }}
          fullWidth
        />
      </div>
      <div className={style.input}>
        <TextField
          label="Cargo"
          error={Boolean(messageCargo)}
          helperText={messageCargo ? "Digite o seu cargo." : ""}
          value={form.cargo}
          onChange={(e: any) => setForm({ type: "cargo", payload: e.target.value })}
          sx={{
            width: '100%', '& label': {
              minWidth: 200,
            },
          }}
          fullWidth
        />
      </div>
      <div className={style.input}>
        <TextField
          label="Departamento"
          error={Boolean(messageDepartamento)}
          helperText={messageDepartamento ? "Digite o seu departamento." : ""}
          value={form.departamento}
          onChange={(e: any) => setForm({ type: "departamento", payload: e.target.value })}
          sx={{
            width: '100%', '& label': {
              minWidth: 200,
            },
          }}
          fullWidth
        />
      </div>
      <div className={style.input}>
        <TextField
          label="Nº de líderes na empresa"
          error={Boolean(messageLideres)}
          helperText={messageLideres ? "Digite o número de líderes na empresa." : ""}
          value={form.lideres}
          onChange={(e: any) => setForm({ type: "lideres", payload: e.target.value })}
          sx={{
            width: '100%', '& label': {
              minWidth: 200,
            },
          }}
          fullWidth
        />
      </div>
      <div className={style.input}>

        <button type="submit" onClick={submit} className={classNames({
          [style.button]: true,
          [style["button--active"]]: true,
        })}>
          <div>
            Quero escalar meu time!
          </div>
        </button>

      </div>
    </div >
  )
}