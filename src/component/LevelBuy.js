import React from "react";
import { connect } from 'react-redux';
import { actionChangeForca, actionChangeOuro, actionChangeSorte, actionChangeVida, actionChangeVidaMaxima } from "../redux/action/actionList";

function LevelBuy(props) {
  const { forca, vida, ouro, sorte, vidaMaxima } = props;
  function custo(status){
    return (status * 2) + (status + 3)
  }
  console.log(vida, vidaMaxima);
  return <div>
    <h2>Seu ouro atual : {ouro}</h2>
    <ul>
      <li>Melhorar Força: { custo(forca) } PO, atual : {forca}
        <button
          onClick={ () => {
            if(custo(forca) <= ouro ){
              props.handleOuro({ ouro: ouro - custo(forca) });
              props.handleForca({ forca: forca + 1 }) 
            }
          } 
          }>melhorar
        </button></li>
      <li>Melhorar Sorte: {custo(sorte)} PO
        <button
          onClick={ () => {
            if((custo(sorte) <= ouro )){
              props.handleOuro({ ouro: ouro - custo(sorte) });
              props.handleSorte({ sorte: sorte + 1 })}
          } 
            }>melhorar
        </button>
      </li>
      <li>Melhorar Vida: {custo(vidaMaxima) / 3} PO
        <button
          onClick={ () => {
            if(custo(vidaMaxima) / 3 <= ouro){
              props.handleOuro({ ouro: ouro - custo(vidaMaxima) / 3 });
              props.handleVidaMaxima({ vidaMaxima: vidaMaxima + 3 })
            }
          }}>melhorar
        </button>
      </li>
      <li> Curar: 50 PO
        <button
          onClick={ () => {
            if(((-1 * vida) + vidaMaxima * 1.2) <= ouro){
              props.handleOuro({ ouro: ouro - 50 });
              props.handleVida({ vida: vidaMaxima})
            } 
          }}>melhorar
        </button>            

      </li>
    </ul>
  </div>
}

const mapStateToProps = (state) => ({
  forca: state.statusReducer.forca,
  velocidade: state.statusReducer.velocidade,
  sorte: state.statusReducer.sorte,
  vida: state.statusReducer.vida,
  vidaMaxima: state.statusReducer.vidaMaxima,
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
  handleSorte: (state) =>{
    dispatch(actionChangeSorte(state))
  },
  handleForca: (state) =>{
    dispatch(actionChangeForca(state))
  },
  handleVidaMaxima: (state) =>{
    dispatch(actionChangeVidaMaxima(state))
  },
};
};

export default connect(mapStateToProps, mapDispatchToProps)(LevelBuy);