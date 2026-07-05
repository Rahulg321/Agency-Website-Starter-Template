import { Y as __toESM, q as require_react } from "./react-dom-D3rPRm8N.js";
//#region node_modules/@base-ui/utils/useOnMount.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var EMPTY = [];
/**
* A React.useEffect equivalent that runs once, when the component is mounted.
*/
function useOnMount(fn) {
	import_react.useEffect(fn, EMPTY);
}
//#endregion
export { useOnMount as t };
