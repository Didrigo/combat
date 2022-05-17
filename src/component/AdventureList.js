import React from "react";
import { connect } from "react-redux";
// import TimeCounter from "./TimeCounter";
import { actionChangeVida, actionChangeOuro } from "../redux/action/actionList.js"
import { dadosAventura } from "../data/dadosAventura.js";
import Status from "./Status.js";

function AdventureList(props) {
  const { forca, vida, ouro, sorte } = props;
  function valoresDaAventura(numero) {
    let ouroGanho = numero.ouro;
    let valorVida = numero.vida;
   
    return{valorVida, ouroGanho}
 }

  function resultadoDaAventura(numero) {
    let {valorVida, ouroGanho} =  valoresDaAventura(dadosAventura[numero]);
    let vidaPerdida = (forca * 2 > valorVida) ? 0 : valorVida - (forca * 2);
    let random = (Math.random() * 100) + 1
    console.log(ouroGanho);
    if (random < sorte) {ouroGanho = (ouroGanho * 1,5); console.log('DEU SORTE VIU');}
    if (vida - vidaPerdida <= 0) {
      vidaPerdida = vida - 1;
      ouroGanho = 0;
    }
    props.handleOuro({ ouro: ouro + ouroGanho })
    props.handleVida({ vida: vida - vidaPerdida })
  };
  return <div>
    <ul>
      <li>Aventura 1 
        <button onClick={ () => {resultadoDaAventura(0)} 
          }> 
            iniciar 
        </button>
      </li>
      <li>Aventura 2
        <button onClick={ () => {resultadoDaAventura(1)} 
          }> 
            iniciar 
        </button>
      </li>
      <li>Aventura 3
        <button onClick={ () => {resultadoDaAventura(2)} 
          }> 
            iniciar 
        </button>
      </li>
      <li>Aventura 4
        <button onClick={ () => {resultadoDaAventura(3)} 
          }> 
            iniciar 
        </button>
      </li>
      <li>Aventura 5
        <button onClick={ () => {resultadoDaAventura(4)} 
          }> 
            iniciar 
        </button>
        </li>
      <li>Aventura final
        <button onClick={ () => {resultadoDaAventura(5)} 
          }> 
            iniciar 
        </button>
      </li>
    </ul>
    <Status />
  </div>
  
};
const mapStateToProps = (state) => ({
    forca: state.statusReducer.forca,
    velocidade: state.statusReducer.velocidade,
    sorte: state.statusReducer.sorte,
    vida: state.statusReducer.vida,
    ouro: state.statusReducer.ouro,
});
const mapDispatchToProps = (dispatch) => {
  return {
    handleVida: (state) =>{
      dispatch(actionChangeVida(state))
    },
    handleOuro: (state) =>{
      dispatch(actionChangeOuro(state))
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdventureList);