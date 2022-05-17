export const CHANGE_FORCA = "CHANGE_FORCA"
export const CHANGE_VIDA = "CHANGE_VIDA"
export const CHANGE_OURO = "CHANGE_OURO"
export const CHANGE_SORTE = "CHANGE_SORTE"
export const CHANGE_VIDAMAXIMA = "CHANGE_VIDAMAXIMA"

export const actionChangeForca = (state) => ({
  type: CHANGE_FORCA ,
  forca: state.forca,
});

export const actionChangeVida = (state) => ({
  type: CHANGE_VIDA,
  vida: state.vida,
});

export const actionChangeVidaMaxima = (state) => ({
  type: CHANGE_VIDAMAXIMA,
  vidaMaxima: state.vidaMaxima,
});

export const actionChangeOuro = (state) => ({
  type: CHANGE_OURO,
  ouro: state.ouro,

});

export const actionChangeSorte = (state) => ({
  type: CHANGE_SORTE,
  sorte: state.sorte,
});