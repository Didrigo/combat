import React from "react";
import { connect } from 'react-redux'
function Status(props) {
  return <div>
    <p>Força: {props.forca}</p>
    <p>Velocidade: {props.velocidade}</p>
    <p>Sorte: {props.sorte}</p>
    <p>Vida: {props.vida}</p>
    <p>Ouro: {props.ouro}</p>
  </div>
};

const mapStateToProps = (state) => ({
  forca: state.statusReducer.forca,
  velocidade: state.statusReducer.velocidade,
  vida: state.statusReducer.vida,
  ouro: state.statusReducer.ouro,
  sorte: state.statusReducer.sorte,
});

export default connect(mapStateToProps)(Status);