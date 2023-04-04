import Box from "@mui/material/Box";
import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import store from "@/redux/store";
import SpinnerRipple from "@/components/SpinnerRipple";

export default function ProviderLayout({ children }: PropsWithChildren<{}>) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SpinnerRipple color="blue" />
          </Box>
        }
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
