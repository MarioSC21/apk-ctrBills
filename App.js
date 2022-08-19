import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

import MyApp from "./src/pages";

export default function App() {
  return (
    <MyApp/>
  );
}