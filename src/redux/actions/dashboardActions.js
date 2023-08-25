import { dashboardSlice as slice } from '../slices/dashboardSlice';
import { dispatch } from '../store';
import { getDashboardMetricsApi } from '../../apis';
import { errorHandler } from '../../utils/errorHandler';

export function getMetrics() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const { data } = await getDashboardMetricsApi();

      dispatch(slice.actions.getMetricsSuccess(data));
    } catch (err) {
      errorHandler(err, "Failed to get metrics!", false);
      dispatch(slice.actions.hasError(err));
    }
  };
}
