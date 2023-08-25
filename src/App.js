import "./globals/utilities.css";
import "./globals/typography.css";
import Routes from "./Routes";
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from "./redux/store";
import PageLoading from "./components/UI/PageLoading/PageLoading";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<PageLoading />} persistor={persistor}>
        <Routes />
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
