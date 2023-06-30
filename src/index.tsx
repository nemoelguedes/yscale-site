import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import "./styles/styles.module.scss";
import App from "./pages/App";
import { RecoilRoot } from 'recoil';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
);

