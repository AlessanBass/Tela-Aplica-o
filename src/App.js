import React, { useState, useEffect } from "react";
// Configuração para requisições na rede
import web3 from "./web3";
// Informação do contrato
import loteria from "./IC";

const App = () => {
  

  return (
    <div className="divPrincipal">

      <div className="divTexto">
         <h2 className="titulo">Painel de Controle</h2>

      </div>
     
      <p className="texto">
        Neste painel você tem acesso as principais funções do SWM.
      </p>
      <br />

        <div className="grid">
        <button className="b1">Nível de água</button>   <br />   <br />
        <button className="b2">Ligar Bomba</button>   <br />   <br />
        <button className="b3">Desligar Bomba</button>   <br />  <br />
        <button className="b4">Abrir valvula</button>   <br />  <br />
        <button className="b5">Fechar valvula</button>   <br />  <br />
        <button className="b6">Abrir Painel</button>   <br />  <br />
        <button className="b7">Atualizar Painel</button>   <br />  <br />

        </div>

      
    </div>
  );
};

export default App;