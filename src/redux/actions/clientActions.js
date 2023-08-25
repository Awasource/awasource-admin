import { clientSlice as slice } from '../slices/clientSlice';
import { dispatch } from '../store';
import { errorHandler } from '../../utils/errorHandler';
import { getClientsApi } from '../../apis';

export function getClients() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const { data } = await getClientsApi();

      dispatch(slice.actions.getClientsSuccess(data));
    } catch (err) {
      errorHandler(err, "Failed to get clients!", false);
      dispatch(slice.actions.hasError(err));
    }
  };
}
