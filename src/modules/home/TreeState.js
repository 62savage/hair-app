const initialState = {
  tree: [],
};

const TREE_GET = 'TreeState/TREE_GET';

function treeGetHome(tree) {
  return {
    type: TREE_GET,
    tree,
  };
}

export function getTree(data) {
  return (dispatch, getState) => {
    dispatch(treeGetHome(data));
  };
}

export default function TreeStateReducer(state = initialState, action) {
  switch (action.type) {
    case TREE_GET:
      return Object.assign({}, state, {
        tree: action.tree,
      });
    default:
      return state;
  }
}
