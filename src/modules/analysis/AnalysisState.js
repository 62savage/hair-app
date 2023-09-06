const initialState = {
  curAnalysis: 0,
};

const ANALYSIS_GET = 'AnalysisState/ANALYSIS_GET';

function analysisGetHome(curAnalysis) {
  return {
    type: ANALYSIS_GET,
    curAnalysis,
  };
}

export function setAnalysis(data) {
  return (dispatch, getState) => {
    dispatch(analysisGetHome(data));
  };
}

export default function AnalysisStateReducer(state = initialState, action) {
  switch (action.type) {
    case ANALYSIS_GET:
      return Object.assign({}, state, {
        curAnalysis: action.curAnalysis,
      });
    default:
      return state;
  }
}
