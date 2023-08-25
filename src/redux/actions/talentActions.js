import { talentSlice as slice } from '../slices/talentSlice';
import { dispatch } from '../store';
import { errorHandler } from '../../utils/errorHandler';
import { getTalentsApi } from '../../apis';

export function getTalents() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const { data } = await getTalentsApi();

      dispatch(slice.actions.getTalentsSuccess(data));
    } catch (err) {
      errorHandler(err, "Failed to get talents!", false);
      dispatch(slice.actions.hasError(err));
    }
  };
}
