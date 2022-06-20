import SomeService from '../../services/SomeService';

const SOME_ACTION = 'template/template-reducer/SOME_ACTION';

async function doSomething(dispatch, getState) {
  const { stuff: currentStuffs } = getState();

  if (currentStuffs.length === 0) {
    const { data } = await SomeService.getStuffs();
    const fetchedStuffs = data.map((stuff) => ({
      fetchedValue: stuff.value,
      default: 'default value',
    }));

    dispatch({ type: SOME_ACTION, payload: fetchedStuffs });
  }
}

function doAnotherThing(data) {
  return {
    type: ANOTHER_ACTION,
    payload: data,
  };
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case SOME_ACTION:
      return state
    case ANOTHER_ACTION:
      return state;
    default:
      return state;
  }
}

export { fetchDragons, toggleReservation };
