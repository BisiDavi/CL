import { Provider } from "react-redux";
import { PropsWithChildren } from "react";

import store from "@/redux/store";

export default function ProviderLayout({ children }: PropsWithChildren<{}>) {
  return <Provider store={store}>{children}</Provider>;
}
