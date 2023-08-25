import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import { configuredStore as store } from './rootReducer';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

const { dispatch } = store;

const useSelector = useReduxSelector;
const useDispatch = () => useReduxDispatch();

export { store, dispatch, useSelector, useDispatch, persistor };
