import { CHANGE_FORCA, CHANGE_OURO, CHANGE_SORTE, CHANGE_VIDA, CHANGE_VIDAMAXIMA } from "../action/actionList";

const initStatus = {
  forca: 5,
  velocidade: 0,
  vidaMaxima: 30,
  vida: 30,
  ouro:0,
  sorte: 1,
}

function statusReducer(state = initStatus, action){
  switch(action.type) {
    case CHANGE_FORCA:
      return { ...state,
        forca: action.forca,
      }
    case CHANGE_OURO:
      return {...state,
        ouro: action.ouro
      }
    case CHANGE_VIDA:
      return {...state,
        vida: action.vida,
      }
    case CHANGE_VIDAMAXIMA:
      return {...state,
        vidaMaxima: action.vidaMaxima,
      }
    case CHANGE_SORTE:
      return{...state,
        sorte: action.sorte,
      }
    default:
      return state;
  }
}

export default statusReducer;