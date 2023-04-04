import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import store from "@/redux/store";
import SpinnerRipple from "./SpinnerRipple";

export default function ProviderLayout({ children }: PropsWithChildren<{}>) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="vh-100 container-fluid d-flex mx-auto justify-content-center w-100 align-items-center">
            <SpinnerRipple centerRipple color="blue" />
          </div>
        }
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
