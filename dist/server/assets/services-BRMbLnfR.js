import { Y as __toESM, c as require_jsx_runtime, q as require_react, t as require_react_dom } from "./react-dom-D3rPRm8N.js";
import { _ as formatErrorMessage, a as useStableCallback, f as resolveStyle, g as useRefWithInit, h as useMergedRefs, i as useIsoLayoutEffect, l as cn, r as useButton, s as getWindow, u as useRenderElement, v as siteConfig } from "./button-lECp910C.js";
import { t as createLucideIcon } from "./createLucideIcon-BxiIRgK4.js";
import { t as HeroCentered } from "./HeroCentered-B8-riJjS.js";
import { i as useControlled, n as none, o as useBaseUiId, r as triggerPress, t as createChangeEventDetails } from "./createBaseUIEventDetails-auGTgIX2.js";
import { t as useOnMount } from "./useOnMount-CIaDzL4s.js";
import { n as ServicesGrid, t as CTABanner } from "./CTABanner-YOidasyl.js";
/**
* @license lucide-react v1.23.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
/**
* @license lucide-react v1.23.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronUp = createLucideIcon("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]);
//#endregion
//#region node_modules/@base-ui/utils/useAnimationFrame.mjs
/** Unlike `setTimeout`, rAF doesn't guarantee a positive integer return value, so we can't have
* a monomorphic `uint` type with `0` meaning empty.
* See warning note at:
* https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame#return_value */
var EMPTY = null;
globalThis.requestAnimationFrame;
var Scheduler = class {
	callbacks = [];
	callbacksCount = 0;
	nextId = 1;
	startId = 1;
	isScheduled = false;
	tick = (timestamp) => {
		this.isScheduled = false;
		const currentCallbacks = this.callbacks;
		const currentCallbacksCount = this.callbacksCount;
		this.callbacks = [];
		this.callbacksCount = 0;
		this.startId = this.nextId;
		if (currentCallbacksCount > 0) for (let i = 0; i < currentCallbacks.length; i += 1) currentCallbacks[i]?.(timestamp);
	};
	request(fn) {
		const id = this.nextId;
		this.nextId += 1;
		this.callbacks.push(fn);
		this.callbacksCount += 1;
		if (!this.isScheduled || false) {
			requestAnimationFrame(this.tick);
			this.isScheduled = true;
		}
		return id;
	}
	cancel(id) {
		const index = id - this.startId;
		if (index < 0 || index >= this.callbacks.length) return;
		this.callbacks[index] = null;
		this.callbacksCount -= 1;
	}
};
var scheduler = new Scheduler();
var AnimationFrame = class AnimationFrame {
	static create() {
		return new AnimationFrame();
	}
	static request(fn) {
		return scheduler.request(fn);
	}
	static cancel(id) {
		return scheduler.cancel(id);
	}
	currentId = EMPTY;
	/**
	* Executes `fn` after `delay`, clearing any previously scheduled call.
	*/
	request(fn) {
		this.cancel();
		this.currentId = scheduler.request(() => {
			this.currentId = EMPTY;
			fn();
		});
	}
	cancel = () => {
		if (this.currentId !== EMPTY) {
			scheduler.cancel(this.currentId);
			this.currentId = EMPTY;
		}
	};
	disposeEffect = () => {
		return this.cancel;
	};
};
/**
* A `requestAnimationFrame` with automatic cleanup and guard.
*/
function useAnimationFrame() {
	const timeout = useRefWithInit(AnimationFrame.create).current;
	useOnMount(timeout.disposeEffect);
	return timeout;
}
//#endregion
//#region node_modules/@base-ui/react/utils/resolveRef.mjs
/**
* If the provided argument is a ref object, returns its `current` value.
* Otherwise, returns the argument itself.
*/
function resolveRef(maybeRef) {
	if (maybeRef == null) return maybeRef;
	return "current" in maybeRef ? maybeRef.current : maybeRef;
}
//#endregion
//#region node_modules/@base-ui/react/internals/stateAttributesMapping.mjs
var TransitionStatusDataAttributes = /*#__PURE__*/ function(TransitionStatusDataAttributes) {
	/**
	* Present when the component is animating in.
	*/
	TransitionStatusDataAttributes["startingStyle"] = "data-starting-style";
	/**
	* Present when the component is animating out.
	*/
	TransitionStatusDataAttributes["endingStyle"] = "data-ending-style";
	return TransitionStatusDataAttributes;
}({});
var STARTING_HOOK = { [TransitionStatusDataAttributes.startingStyle]: "" };
var ENDING_HOOK = { [TransitionStatusDataAttributes.endingStyle]: "" };
var transitionStatusMapping = { transitionStatus(value) {
	if (value === "starting") return STARTING_HOOK;
	if (value === "ending") return ENDING_HOOK;
	return null;
} };
//#endregion
//#region node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
/**
* Executes a function once all animations have finished on the provided element.
* @param elementOrRef - The element to watch for animations.
* @param waitForStartingStyleRemoved - Whether to wait for [data-starting-style] to be removed before checking for animations.
* @param treatAbortedAsFinished - Whether to treat aborted animations as finished. If `false`, and there are aborted animations,
*   the function will check again if any new animations have started and wait for them to finish.
* @returns A function that takes a callback to execute once all animations have finished, and an optional AbortSignal to abort the callback
*/
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false, treatAbortedAsFinished = true) {
	const frame = useAnimationFrame();
	return useStableCallback((fnToExecute, signal = null) => {
		frame.cancel();
		const element = resolveRef(elementOrRef);
		if (element == null) return;
		const resolvedElement = element;
		const done = () => {
			import_react_dom.flushSync(fnToExecute);
		};
		if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
			fnToExecute();
			return;
		}
		function exec() {
			Promise.all(resolvedElement.getAnimations().map((animation) => animation.finished)).then(() => {
				if (!signal?.aborted) done();
			}).catch(() => {
				if (treatAbortedAsFinished) {
					if (!signal?.aborted) done();
					return;
				}
				const currentAnimations = resolvedElement.getAnimations();
				if (!signal?.aborted && currentAnimations.length > 0 && currentAnimations.some((animation) => animation.pending || animation.playState !== "finished")) exec();
			});
		}
		if (waitForStartingStyleRemoved) {
			const startingStyleAttribute = TransitionStatusDataAttributes.startingStyle;
			if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
				frame.request(exec);
				return;
			}
			const attributeObserver = new MutationObserver(() => {
				if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
					attributeObserver.disconnect();
					exec();
				}
			});
			attributeObserver.observe(resolvedElement, {
				attributes: true,
				attributeFilter: [startingStyleAttribute]
			});
			signal?.addEventListener("abort", () => attributeObserver.disconnect(), { once: true });
			return;
		}
		frame.request(exec);
	});
}
//#endregion
//#region node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* Calls the provided function when the CSS open/close animation or transition completes.
*/
function useOpenChangeComplete(parameters) {
	const { enabled = true, open, ref, onComplete: onCompleteParam } = parameters;
	const onComplete = useStableCallback(onCompleteParam);
	const runOnceAnimationsFinish = useAnimationsFinished(ref, open, false);
	import_react.useEffect(() => {
		if (!enabled) return;
		const abortController = new AbortController();
		runOnceAnimationsFinish(onComplete, abortController.signal);
		return () => {
			abortController.abort();
		};
	}, [
		enabled,
		open,
		onComplete,
		runOnceAnimationsFinish
	]);
}
//#endregion
//#region node_modules/@base-ui/react/internals/useTransitionStatus.mjs
/**
* Provides a status string for CSS animations.
* @param open - a boolean that determines if the element is open.
* @param enableIdleState - a boolean that enables the `'idle'` state between `'starting'` and `'ending'`
*/
function useTransitionStatus(open, enableIdleState = false, deferEndingState = false) {
	const [transitionStatus, setTransitionStatus] = import_react.useState(open && enableIdleState ? "idle" : void 0);
	const [mounted, setMounted] = import_react.useState(open);
	if (open && !mounted) {
		setMounted(true);
		setTransitionStatus("starting");
	}
	if (!open && mounted && transitionStatus !== "ending" && !deferEndingState) setTransitionStatus("ending");
	if (!open && !mounted && transitionStatus === "ending") setTransitionStatus(void 0);
	useIsoLayoutEffect(() => {
		if (!open && mounted && transitionStatus !== "ending" && deferEndingState) {
			const frame = AnimationFrame.request(() => {
				setTransitionStatus("ending");
			});
			return () => {
				AnimationFrame.cancel(frame);
			};
		}
	}, [
		open,
		mounted,
		transitionStatus,
		deferEndingState
	]);
	useIsoLayoutEffect(() => {
		if (!open || enableIdleState) return;
		const frame = AnimationFrame.request(() => {
			setTransitionStatus(void 0);
		});
		return () => {
			AnimationFrame.cancel(frame);
		};
	}, [enableIdleState, open]);
	useIsoLayoutEffect(() => {
		if (!open || !enableIdleState) return;
		if (open && mounted && transitionStatus !== "idle") setTransitionStatus("starting");
		const frame = AnimationFrame.request(() => {
			setTransitionStatus("idle");
		});
		return () => {
			AnimationFrame.cancel(frame);
		};
	}, [
		enableIdleState,
		open,
		mounted,
		transitionStatus
	]);
	return {
		mounted,
		setMounted,
		transitionStatus
	};
}
//#endregion
//#region node_modules/@base-ui/react/internals/composite/list/CompositeListContext.mjs
var CompositeListContext = /*#__PURE__*/ import_react.createContext({
	register: () => {},
	unregister: () => {},
	subscribeMapChange: () => {
		return () => {};
	},
	elementsRef: { current: [] },
	nextIndexRef: { current: 0 }
});
function useCompositeListContext() {
	return import_react.useContext(CompositeListContext);
}
//#endregion
//#region node_modules/@base-ui/react/internals/composite/list/CompositeList.mjs
var import_jsx_runtime = require_jsx_runtime();
/**
* Provides context for a list of items in a composite component.
* @internal
*/
function CompositeList(props) {
	const { children, elementsRef, labelsRef, onMapChange: onMapChangeProp } = props;
	const onMapChange = useStableCallback(onMapChangeProp);
	const nextIndexRef = import_react.useRef(0);
	const listeners = useRefWithInit(createListeners).current;
	const map = useRefWithInit(createMap).current;
	const [mapTick, setMapTick] = import_react.useState(0);
	const lastTickRef = import_react.useRef(mapTick);
	const register = useStableCallback((node, metadata) => {
		map.set(node, metadata ?? null);
		lastTickRef.current += 1;
		setMapTick(lastTickRef.current);
	});
	const unregister = useStableCallback((node) => {
		map.delete(node);
		lastTickRef.current += 1;
		setMapTick(lastTickRef.current);
	});
	const sortedMap = import_react.useMemo(() => {
		const newMap = /* @__PURE__ */ new Map();
		Array.from(map.keys()).filter((node) => node.isConnected).sort(sortByDocumentPosition).forEach((node, index) => {
			const metadata = map.get(node) ?? {};
			newMap.set(node, {
				...metadata,
				index
			});
		});
		return newMap;
	}, [map, mapTick]);
	useIsoLayoutEffect(() => {
		if (typeof MutationObserver !== "function" || sortedMap.size === 0) return;
		const mutationObserver = new MutationObserver((entries) => {
			const diff = /* @__PURE__ */ new Set();
			const updateDiff = (node) => diff.has(node) ? diff.delete(node) : diff.add(node);
			entries.forEach((entry) => {
				entry.removedNodes.forEach(updateDiff);
				entry.addedNodes.forEach(updateDiff);
			});
			if (diff.size === 0) {
				lastTickRef.current += 1;
				setMapTick(lastTickRef.current);
			}
		});
		sortedMap.forEach((_, node) => {
			if (node.parentElement) mutationObserver.observe(node.parentElement, { childList: true });
		});
		return () => {
			mutationObserver.disconnect();
		};
	}, [sortedMap]);
	useIsoLayoutEffect(() => {
		if (lastTickRef.current === mapTick) {
			if (elementsRef.current.length !== sortedMap.size) elementsRef.current.length = sortedMap.size;
			if (labelsRef && labelsRef.current.length !== sortedMap.size) labelsRef.current.length = sortedMap.size;
			nextIndexRef.current = sortedMap.size;
		}
		onMapChange(sortedMap);
	}, [
		onMapChange,
		sortedMap,
		elementsRef,
		labelsRef,
		mapTick
	]);
	useIsoLayoutEffect(() => {
		return () => {
			elementsRef.current = [];
		};
	}, [elementsRef]);
	useIsoLayoutEffect(() => {
		return () => {
			if (labelsRef) labelsRef.current = [];
		};
	}, [labelsRef]);
	const subscribeMapChange = useStableCallback((fn) => {
		listeners.add(fn);
		return () => {
			listeners.delete(fn);
		};
	});
	useIsoLayoutEffect(() => {
		listeners.forEach((l) => l(sortedMap));
	}, [listeners, sortedMap]);
	const contextValue = import_react.useMemo(() => ({
		register,
		unregister,
		subscribeMapChange,
		elementsRef,
		labelsRef,
		nextIndexRef
	}), [
		register,
		unregister,
		subscribeMapChange,
		elementsRef,
		labelsRef,
		nextIndexRef
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeListContext.Provider, {
		value: contextValue,
		children
	});
}
function createMap() {
	return /* @__PURE__ */ new Map();
}
function createListeners() {
	return /* @__PURE__ */ new Set();
}
function sortByDocumentPosition(a, b) {
	const position = a.compareDocumentPosition(b);
	if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) return -1;
	if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) return 1;
	return 0;
}
//#endregion
//#region node_modules/@base-ui/react/internals/direction-context/DirectionContext.mjs
/**
* @internal
*/
var DirectionContext = /*#__PURE__*/ import_react.createContext(void 0);
function useDirection() {
	return import_react.useContext(DirectionContext)?.direction ?? "ltr";
}
//#endregion
//#region node_modules/@base-ui/react/accordion/root/AccordionRootContext.mjs
var AccordionRootContext = /*#__PURE__*/ import_react.createContext(void 0);
function useAccordionRootContext() {
	const context = import_react.useContext(AccordionRootContext);
	if (context === void 0) throw new Error(formatErrorMessage(10));
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/accordion/root/AccordionRoot.mjs
var rootStateAttributesMapping = { value: () => null };
/**
* Groups all parts of the accordion.
* Renders a `<div>` element.
*
* Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
*/
var AccordionRoot = /*#__PURE__*/ import_react.forwardRef(function AccordionRoot(componentProps, forwardedRef) {
	const { render, className, disabled = false, hiddenUntilFound: hiddenUntilFoundProp, keepMounted: keepMountedProp, loopFocus, onValueChange, multiple = false, orientation = "vertical", value: valueProp, defaultValue: defaultValueProp, style, ...elementProps } = componentProps;
	const direction = useDirection();
	const defaultValue = import_react.useMemo(() => {
		if (valueProp === void 0) return defaultValueProp ?? [];
	}, [valueProp, defaultValueProp]);
	const accordionItemRefs = import_react.useRef([]);
	const [value, setValue] = useControlled({
		controlled: valueProp,
		default: defaultValue,
		name: "Accordion",
		state: "value"
	});
	const handleValueChange = useStableCallback((newValue, nextOpen, details) => {
		if (!multiple) {
			const nextValue = value[0] === newValue ? [] : [newValue];
			onValueChange?.(nextValue, details);
			if (details.isCanceled) return;
			setValue(nextValue);
		} else if (nextOpen) {
			const nextOpenValues = value.slice();
			nextOpenValues.push(newValue);
			onValueChange?.(nextOpenValues, details);
			if (details.isCanceled) return;
			setValue(nextOpenValues);
		} else {
			const nextOpenValues = value.filter((v) => v !== newValue);
			onValueChange?.(nextOpenValues, details);
			if (details.isCanceled) return;
			setValue(nextOpenValues);
		}
	});
	const state = import_react.useMemo(() => ({
		value,
		disabled,
		orientation
	}), [
		value,
		disabled,
		orientation
	]);
	const contextValue = import_react.useMemo(() => ({
		disabled,
		handleValueChange,
		hiddenUntilFound: hiddenUntilFoundProp ?? false,
		keepMounted: keepMountedProp ?? false,
		state,
		value
	}), [
		disabled,
		handleValueChange,
		hiddenUntilFoundProp,
		keepMountedProp,
		state,
		value
	]);
	const element = useRenderElement("div", componentProps, {
		state,
		ref: forwardedRef,
		props: [{ dir: direction }, elementProps],
		stateAttributesMapping: rootStateAttributesMapping
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(AccordionRootContext.Provider, {
		value: contextValue,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeList, {
			elementsRef: accordionItemRefs,
			children: element
		})
	});
});
//#endregion
//#region node_modules/@base-ui/react/collapsible/root/useCollapsibleRoot.mjs
function useCollapsibleRoot(parameters) {
	const { open: openParam, defaultOpen, onOpenChange, disabled } = parameters;
	const [open, setOpen] = useControlled({
		controlled: openParam,
		default: defaultOpen,
		name: "Collapsible",
		state: "open"
	});
	const { mounted, setMounted, transitionStatus } = useTransitionStatus(open, true, true);
	const defaultPanelId = useBaseUiId();
	const [panelIdState, setPanelIdState] = import_react.useState();
	const panelId = panelIdState ?? defaultPanelId;
	const handleTrigger = useStableCallback((event) => {
		const nextOpen = !open;
		const eventDetails = createChangeEventDetails(triggerPress, event.nativeEvent);
		onOpenChange(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		setOpen(nextOpen);
	});
	return import_react.useMemo(() => ({
		disabled,
		handleTrigger,
		mounted,
		open,
		panelId,
		setMounted,
		setOpen,
		setPanelIdState,
		transitionStatus
	}), [
		disabled,
		handleTrigger,
		mounted,
		open,
		panelId,
		setMounted,
		setOpen,
		setPanelIdState,
		transitionStatus
	]);
}
//#endregion
//#region node_modules/@base-ui/react/collapsible/root/CollapsibleRootContext.mjs
var CollapsibleRootContext = /*#__PURE__*/ import_react.createContext(void 0);
function useCollapsibleRootContext() {
	const context = import_react.useContext(CollapsibleRootContext);
	if (context === void 0) throw new Error(formatErrorMessage(15));
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/internals/composite/list/useCompositeListItem.mjs
var IndexGuessBehavior = /*#__PURE__*/ function(IndexGuessBehavior) {
	IndexGuessBehavior[IndexGuessBehavior["None"] = 0] = "None";
	IndexGuessBehavior[IndexGuessBehavior["GuessFromOrder"] = 1] = "GuessFromOrder";
	return IndexGuessBehavior;
}({});
/**
* Used to register a list item and its index (DOM position) in the `CompositeList`.
*/
function useCompositeListItem(params = {}) {
	const { label, metadata, textRef, indexGuessBehavior, index: externalIndex } = params;
	const { register, unregister, subscribeMapChange, elementsRef, labelsRef, nextIndexRef } = useCompositeListContext();
	const indexRef = import_react.useRef(-1);
	const [index, setIndex] = import_react.useState(externalIndex ?? (indexGuessBehavior === IndexGuessBehavior.GuessFromOrder ? () => {
		if (indexRef.current === -1) {
			const newIndex = nextIndexRef.current;
			nextIndexRef.current += 1;
			indexRef.current = newIndex;
		}
		return indexRef.current;
	} : -1));
	const componentRef = import_react.useRef(null);
	const ref = import_react.useCallback((node) => {
		componentRef.current = node;
		if (index !== -1 && node !== null) {
			elementsRef.current[index] = node;
			if (labelsRef) {
				const isLabelDefined = label !== void 0;
				labelsRef.current[index] = isLabelDefined ? label : textRef?.current?.textContent ?? node.textContent;
			}
		}
	}, [
		index,
		elementsRef,
		labelsRef,
		label,
		textRef
	]);
	useIsoLayoutEffect(() => {
		if (externalIndex != null) return;
		const node = componentRef.current;
		if (node) {
			register(node, metadata);
			return () => {
				unregister(node);
			};
		}
	}, [
		externalIndex,
		register,
		unregister,
		metadata
	]);
	useIsoLayoutEffect(() => {
		if (externalIndex != null) return;
		return subscribeMapChange((map) => {
			const i = componentRef.current ? map.get(componentRef.current)?.index : null;
			if (i != null) setIndex(i);
		});
	}, [
		externalIndex,
		subscribeMapChange,
		setIndex
	]);
	return {
		ref,
		index
	};
}
//#endregion
//#region node_modules/@base-ui/react/accordion/item/AccordionItemContext.mjs
var AccordionItemContext = /*#__PURE__*/ import_react.createContext(void 0);
function useAccordionItemContext() {
	const context = import_react.useContext(AccordionItemContext);
	if (context === void 0) throw new Error(formatErrorMessage(9));
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelDataAttributes.mjs
var CollapsiblePanelDataAttributes = function(CollapsiblePanelDataAttributes) {
	/**
	* Present when the collapsible panel is open.
	*/
	CollapsiblePanelDataAttributes["open"] = "data-open";
	/**
	* Present when the collapsible panel is closed.
	*/
	CollapsiblePanelDataAttributes["closed"] = "data-closed";
	/**
	* Present when the panel is animating in.
	*/
	CollapsiblePanelDataAttributes[CollapsiblePanelDataAttributes["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
	/**
	* Present when the panel is animating out.
	*/
	CollapsiblePanelDataAttributes[CollapsiblePanelDataAttributes["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
	return CollapsiblePanelDataAttributes;
}({});
//#endregion
//#region node_modules/@base-ui/react/collapsible/trigger/CollapsibleTriggerDataAttributes.mjs
var CollapsibleTriggerDataAttributes = /*#__PURE__*/ function(CollapsibleTriggerDataAttributes) {
	/**
	* Present when the collapsible panel is open.
	*/
	CollapsibleTriggerDataAttributes["panelOpen"] = "data-panel-open";
	return CollapsibleTriggerDataAttributes;
}({});
//#endregion
//#region node_modules/@base-ui/react/utils/collapsibleOpenStateMapping.mjs
var PANEL_OPEN_HOOK = { [CollapsiblePanelDataAttributes.open]: "" };
var PANEL_CLOSED_HOOK = { [CollapsiblePanelDataAttributes.closed]: "" };
var triggerOpenStateMapping = { open(value) {
	if (value) return { [CollapsibleTriggerDataAttributes.panelOpen]: "" };
	return null;
} };
var collapsibleOpenStateMapping = { open(value) {
	if (value) return PANEL_OPEN_HOOK;
	return PANEL_CLOSED_HOOK;
} };
//#endregion
//#region node_modules/@base-ui/react/accordion/item/AccordionItemDataAttributes.mjs
var AccordionItemDataAttributes = /*#__PURE__*/ function(AccordionItemDataAttributes) {
	/**
	* Indicates the index of the accordion item.
	* @type {number}
	*/
	AccordionItemDataAttributes["index"] = "data-index";
	/**
	* Present when the accordion item is disabled.
	*/
	AccordionItemDataAttributes["disabled"] = "data-disabled";
	/**
	* Present when the accordion item is open.
	*/
	AccordionItemDataAttributes["open"] = "data-open";
	return AccordionItemDataAttributes;
}({});
//#endregion
//#region node_modules/@base-ui/react/accordion/item/stateAttributesMapping.mjs
var accordionStateAttributesMapping = {
	...collapsibleOpenStateMapping,
	index: (value) => {
		return Number.isInteger(value) ? { [AccordionItemDataAttributes.index]: String(value) } : null;
	},
	...transitionStatusMapping,
	value: () => null
};
//#endregion
//#region node_modules/@base-ui/react/accordion/item/AccordionItem.mjs
/**
* Groups an accordion header with the corresponding panel.
* Renders a `<div>` element.
*
* Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
*/
var AccordionItem$1 = /*#__PURE__*/ import_react.forwardRef(function AccordionItem(componentProps, forwardedRef) {
	const { className, disabled: disabledProp = false, onOpenChange: onOpenChangeProp, render, value: valueProp, style, ...elementProps } = componentProps;
	const { ref: listItemRef, index } = useCompositeListItem();
	const mergedRef = useMergedRefs(forwardedRef, listItemRef);
	const { disabled: contextDisabled, handleValueChange, state: rootState, value: openValues } = useAccordionRootContext();
	const fallbackValue = useBaseUiId();
	const value = valueProp ?? fallbackValue;
	const disabled = disabledProp || contextDisabled;
	const isOpen = import_react.useMemo(() => {
		if (!openValues) return false;
		for (let i = 0; i < openValues.length; i += 1) if (openValues[i] === value) return true;
		return false;
	}, [openValues, value]);
	const onOpenChange = useStableCallback((nextOpen, eventDetails) => {
		onOpenChangeProp?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		handleValueChange(value, nextOpen, eventDetails);
	});
	const collapsible = useCollapsibleRoot({
		open: isOpen,
		onOpenChange,
		disabled
	});
	const collapsibleState = import_react.useMemo(() => ({
		open: collapsible.open,
		disabled: collapsible.disabled,
		transitionStatus: collapsible.transitionStatus
	}), [
		collapsible.open,
		collapsible.disabled,
		collapsible.transitionStatus
	]);
	const collapsibleContext = import_react.useMemo(() => ({
		...collapsible,
		onOpenChange,
		state: collapsibleState
	}), [
		collapsible,
		collapsibleState,
		onOpenChange
	]);
	const state = import_react.useMemo(() => ({
		...rootState,
		hidden: !isOpen && !collapsible.mounted,
		index,
		disabled,
		open: isOpen
	}), [
		collapsible.mounted,
		disabled,
		index,
		isOpen,
		rootState
	]);
	const defaultTriggerId = useBaseUiId();
	const [triggerId, setTriggerId] = import_react.useState();
	const accordionItemContext = import_react.useMemo(() => ({
		open: isOpen,
		state,
		setTriggerId,
		triggerId: triggerId ?? defaultTriggerId
	}), [
		defaultTriggerId,
		isOpen,
		state,
		setTriggerId,
		triggerId
	]);
	const element = useRenderElement("div", componentProps, {
		state,
		ref: mergedRef,
		props: elementProps,
		stateAttributesMapping: accordionStateAttributesMapping
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CollapsibleRootContext.Provider, {
		value: collapsibleContext,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(AccordionItemContext.Provider, {
			value: accordionItemContext,
			children: element
		})
	});
});
//#endregion
//#region node_modules/@base-ui/react/accordion/header/AccordionHeader.mjs
/**
* A heading that labels the corresponding panel.
* Renders an `<h3>` element.
*
* Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
*/
var AccordionHeader = /*#__PURE__*/ import_react.forwardRef(function AccordionHeader(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { state } = useAccordionItemContext();
	return useRenderElement("h3", componentProps, {
		state,
		ref: forwardedRef,
		props: elementProps,
		stateAttributesMapping: accordionStateAttributesMapping
	});
});
//#endregion
//#region node_modules/@base-ui/react/accordion/trigger/AccordionTrigger.mjs
/**
* A button that opens and closes the corresponding panel.
* Renders a `<button>` element.
*
* Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
*/
var AccordionTrigger$1 = /*#__PURE__*/ import_react.forwardRef(function AccordionTrigger(componentProps, forwardedRef) {
	const { disabled: disabledProp, className, id: idProp, render, nativeButton = true, style, ...elementProps } = componentProps;
	const { panelId, open, handleTrigger, disabled: contextDisabled } = useCollapsibleRootContext();
	const { getButtonProps, buttonRef } = useButton({
		disabled: disabledProp || contextDisabled,
		focusableWhenDisabled: true,
		native: nativeButton
	});
	const { state, setTriggerId, triggerId: id } = useAccordionItemContext();
	useIsoLayoutEffect(() => {
		if (idProp) setTriggerId(idProp);
		return () => {
			setTriggerId(void 0);
		};
	}, [idProp, setTriggerId]);
	return useRenderElement("button", componentProps, {
		state,
		ref: [forwardedRef, buttonRef],
		props: [
			{
				"aria-controls": open ? panelId : void 0,
				"aria-expanded": open,
				id,
				onClick: handleTrigger
			},
			elementProps,
			getButtonProps
		],
		stateAttributesMapping: triggerOpenStateMapping
	});
});
//#endregion
//#region node_modules/@base-ui/utils/addEventListener.mjs
/**
* Adds an event listener and returns a cleanup function to remove it.
*/
function addEventListener(target, type, listener, options) {
	target.addEventListener(type, listener, options);
	return () => {
		target.removeEventListener(type, listener, options);
	};
}
//#endregion
//#region node_modules/@base-ui/utils/useValueAsRef.mjs
/**
* Untracks the provided value by turning it into a ref to remove its reactivity.
*
* Used to access the passed value inside `React.useEffect` without causing the effect to re-run when the value changes.
*/
function useValueAsRef(value) {
	const latest = useRefWithInit(createLatestRef, value).current;
	latest.next = value;
	useIsoLayoutEffect(latest.effect);
	return latest;
}
function createLatestRef(value) {
	const latest = {
		current: value,
		next: value,
		effect: () => {
			latest.current = latest.next;
		}
	};
	return latest;
}
//#endregion
//#region node_modules/@base-ui/react/collapsible/panel/useCollapsiblePanel.mjs
var EMPTY_DIMENSIONS = {
	height: void 0,
	width: void 0
};
function useCollapsiblePanel(parameters) {
	const { externalRef, hiddenUntilFound, id: idParam, keepMounted, mounted, onOpenChange, open, setMounted, setOpen, transitionStatus } = parameters;
	const panelRef = import_react.useRef(null);
	const animationTypeRef = import_react.useRef(null);
	const [dimensions, setDimensionsUnwrapped] = import_react.useState(EMPTY_DIMENSIONS);
	const lastMeasuredDimensionsRef = import_react.useRef(EMPTY_DIMENSIONS);
	const shouldSkipNextOpenRef = import_react.useRef(false);
	const shouldPreventMountAnimationRef = import_react.useRef(open);
	const shouldPreventActivityResumeAnimationRef = import_react.useRef(false);
	const [forcePanelIdle, setForcePanelIdle] = import_react.useState(false);
	const pendingTemporaryStyleRestoreRef = import_react.useRef(null);
	const mergedPanelRef = useMergedRefs(externalRef, panelRef);
	const latestStateRef = useValueAsRef({
		mounted,
		open
	});
	const runOnceCloseAnimationsFinish = useAnimationsFinished(panelRef, false, false);
	const hidden = !open && !mounted;
	const panelTransitionStatus = forcePanelIdle ? "idle" : transitionStatus;
	const shouldPreventOpenAnimation = open && (shouldPreventMountAnimationRef.current || shouldPreventActivityResumeAnimationRef.current);
	const renderedDimensions = !open && mounted && animationTypeRef.current === "css-animation" && dimensions.height === void 0 && dimensions.width === void 0 ? lastMeasuredDimensionsRef.current : dimensions;
	const shouldPersistHiddenTransitionStyles = hiddenUntilFound && hidden && animationTypeRef.current !== "css-animation";
	const setDimensions = useStableCallback((nextDimensions, shouldCacheMeasurement = true) => {
		if (shouldCacheMeasurement) lastMeasuredDimensionsRef.current = nextDimensions;
		setDimensionsUnwrapped(nextDimensions);
	});
	const restorePendingTemporaryStyle = useStableCallback(() => {
		pendingTemporaryStyleRestoreRef.current?.();
		pendingTemporaryStyleRestoreRef.current = null;
	});
	const setPendingTemporaryStyleRestore = useStableCallback((restore) => {
		restorePendingTemporaryStyle();
		pendingTemporaryStyleRestoreRef.current = () => {
			pendingTemporaryStyleRestoreRef.current = null;
			restore();
		};
	});
	const markActivityResumeAnimationSuppressed = useStableCallback(() => {
		if (open && mounted && animationTypeRef.current === "css-animation") shouldPreventActivityResumeAnimationRef.current = true;
	});
	useIsoLayoutEffect(() => {
		if (!forcePanelIdle || transitionStatus === "starting") return;
		setForcePanelIdle(false);
	}, [forcePanelIdle, transitionStatus]);
	import_react.useEffect(() => {
		return () => {
			markActivityResumeAnimationSuppressed();
			restorePendingTemporaryStyle();
		};
	}, [markActivityResumeAnimationSuppressed, restorePendingTemporaryStyle]);
	useIsoLayoutEffect(() => {
		const panel = panelRef.current;
		if (!panel) return;
		if (!open && pendingTemporaryStyleRestoreRef.current) restorePendingTemporaryStyle();
		const animationType = getAnimationType(panel, shouldPreventOpenAnimation);
		animationTypeRef.current = animationType;
		if (open && transitionStatus === "idle" && shouldPreventMountAnimationRef.current && animationType === "css-animation") {
			lastMeasuredDimensionsRef.current = getDimensions(panel);
			return;
		}
		if (open && transitionStatus === "starting") {
			const skipNextOpen = shouldSkipNextOpenRef.current;
			shouldSkipNextOpenRef.current = false;
			if (animationType === "none") {
				setDimensions(getDimensions(panel));
				setForcePanelIdle(true);
				return;
			}
			if (animationType === "css-transition") {
				const restoreLayoutStyles = resetLayoutStyles(panel);
				setDimensions(getDimensions(panel));
				if (!skipNextOpen) return restoreLayoutStyles;
				const restoreTransitionDuration = setTemporaryStyle(panel, "transition-duration", "0s");
				setPendingTemporaryStyleRestore(restoreTransitionDuration);
				setForcePanelIdle(true);
				return restoreLayoutStyles;
			}
			if (animationType === "css-animation") {
				setDimensions(getDimensions(panel));
				if (!skipNextOpen) {
					setTemporaryStyle(panel, "animation-name", "none")();
					return;
				}
				const restoreAnimationName = setTemporaryStyle(panel, "animation-name", "none");
				const restoreAnimationDuration = setTemporaryStyle(panel, "animation-duration", "0s");
				restoreAnimationName();
				setPendingTemporaryStyleRestore(restoreAnimationDuration);
				setForcePanelIdle(true);
				return;
			}
		}
		if (!open && mounted && (transitionStatus === "idle" || transitionStatus === "starting")) {
			shouldPreventMountAnimationRef.current = false;
			shouldPreventActivityResumeAnimationRef.current = false;
			if (animationType === "none") {
				setDimensions(EMPTY_DIMENSIONS, false);
				setMounted(false);
				return;
			}
			setDimensions(getDimensions(panel));
			return;
		}
		if (transitionStatus !== "ending") return;
		if (animationType === "none") {
			setMounted(false);
			return;
		}
		const nextDimensions = getDimensions(panel);
		if (!((nextDimensions.height ?? 0) > 0 || (nextDimensions.width ?? 0) > 0)) {
			setMounted(false);
			return;
		}
		setDimensions(nextDimensions);
		if (animationType === "css-animation") setTemporaryStyle(panel, "animation-name", "none")();
	}, [
		mounted,
		open,
		restorePendingTemporaryStyle,
		setDimensions,
		setMounted,
		setPendingTemporaryStyleRestore,
		shouldPreventOpenAnimation,
		transitionStatus
	]);
	useOpenChangeComplete({
		enabled: open && mounted && panelTransitionStatus === "idle",
		open: true,
		ref: panelRef,
		onComplete() {
			if (!open) return;
			setDimensions(EMPTY_DIMENSIONS, false);
		}
	});
	import_react.useEffect(() => {
		if (open || !mounted || panelTransitionStatus !== "ending") return;
		if (!panelRef.current) return;
		const abortController = new AbortController();
		let endingStyleFrame = -1;
		function handleComplete() {
			if (latestStateRef.current.open) return;
			setMounted(false);
			setDimensions(EMPTY_DIMENSIONS, false);
		}
		endingStyleFrame = AnimationFrame.request(() => {
			if (!abortController.signal.aborted) runOnceCloseAnimationsFinish(handleComplete, abortController.signal);
		});
		return () => {
			AnimationFrame.cancel(endingStyleFrame);
			abortController.abort();
		};
	}, [
		latestStateRef,
		mounted,
		open,
		panelTransitionStatus,
		runOnceCloseAnimationsFinish,
		setDimensions,
		setMounted
	]);
	useIsoLayoutEffect(() => {
		const panel = panelRef.current;
		if (!panel || !hiddenUntilFound || !hidden) return;
		panel.setAttribute("hidden", "until-found");
	}, [hidden, hiddenUntilFound]);
	import_react.useEffect(function registerBeforeMatchListener() {
		const panel = panelRef.current;
		if (!panel) return;
		function handleBeforeMatch(event) {
			const eventDetails = createChangeEventDetails(none, event);
			onOpenChange(true, eventDetails);
			if (eventDetails.isCanceled) return;
			shouldSkipNextOpenRef.current = true;
			setOpen(true);
		}
		return addEventListener(panel, "beforematch", handleBeforeMatch);
	}, [onOpenChange, setOpen]);
	const shouldRender = keepMounted || hiddenUntilFound || mounted || open;
	return {
		height: renderedDimensions.height,
		props: {
			...shouldPersistHiddenTransitionStyles ? { [CollapsiblePanelDataAttributes.startingStyle]: "" } : void 0,
			hidden,
			id: idParam
		},
		ref: mergedPanelRef,
		shouldPreventOpenAnimation,
		shouldRender,
		transitionStatus: panelTransitionStatus,
		width: renderedDimensions.width
	};
}
function getDimensions(element) {
	return {
		height: element.scrollHeight,
		width: element.scrollWidth
	};
}
function getAnimationType(element, hasSuppressedMountAnimation = false) {
	const panelStyles = getWindow(element).getComputedStyle(element);
	const hasAnimation = (panelStyles.animationName.split(",").map((name) => name.trim()).some((name) => name !== "" && name !== "none") || hasSuppressedMountAnimation) && hasNonZeroDuration(panelStyles.animationDuration);
	const hasTransition = hasNonZeroDuration(panelStyles.transitionDuration);
	if (hasAnimation && hasTransition) return "css-transition";
	if (hasTransition) return "css-transition";
	if (hasAnimation) return "css-animation";
	return "none";
}
function hasNonZeroDuration(value) {
	return value.split(",").map((part) => part.trim()).some((part) => part !== "" && Number.parseFloat(part) > 0);
}
/**
* Temporarily overrides an inline style property and returns a cleanup that
* restores the previous inline value and priority.
* @param element - The element whose inline style should be updated.
* @param property - The CSS property name to override.
* @param value - The temporary value to assign.
* @returns A cleanup function that restores the original inline style state.
*/
function setTemporaryStyle(element, property, value) {
	const previousValue = element.style.getPropertyValue(property);
	const previousPriority = element.style.getPropertyPriority(property);
	element.style.setProperty(property, value);
	return () => {
		if (previousValue === "") {
			element.style.removeProperty(property);
			return;
		}
		element.style.setProperty(property, previousValue, previousPriority);
	};
}
/**
* Temporarily resets inline alignment styles that can distort scroll-based
* size measurements, then restores them on the next animation frame.
* @param element - The panel element being measured.
* @returns A cleanup function that cancels the scheduled restore and reapplies
* the original inline layout styles immediately.
*/
function resetLayoutStyles(element) {
	const originalLayoutStyles = {
		"justify-content": element.style.justifyContent,
		"align-items": element.style.alignItems,
		"align-content": element.style.alignContent,
		"justify-items": element.style.justifyItems
	};
	Object.keys(originalLayoutStyles).forEach((key) => {
		element.style.setProperty(key, "initial", "important");
	});
	function restoreLayoutStyles() {
		Object.entries(originalLayoutStyles).forEach(([key, value]) => {
			if (value === "") {
				element.style.removeProperty(key);
				return;
			}
			element.style.setProperty(key, value);
		});
	}
	const frame = AnimationFrame.request(restoreLayoutStyles);
	return () => {
		AnimationFrame.cancel(frame);
		restoreLayoutStyles();
	};
}
//#endregion
//#region node_modules/@base-ui/react/accordion/panel/AccordionPanelCssVars.mjs
var AccordionPanelCssVars = /*#__PURE__*/ function(AccordionPanelCssVars) {
	/**
	* The accordion panel's height.
	* @type {number}
	*/
	AccordionPanelCssVars["accordionPanelHeight"] = "--accordion-panel-height";
	/**
	* The accordion panel's width.
	* @type {number}
	*/
	AccordionPanelCssVars["accordionPanelWidth"] = "--accordion-panel-width";
	return AccordionPanelCssVars;
}({});
//#endregion
//#region node_modules/@base-ui/react/accordion/panel/AccordionPanel.mjs
/**
* A collapsible panel with the accordion item contents.
* Renders a `<div>` element.
*
* Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
*/
var AccordionPanel = /*#__PURE__*/ import_react.forwardRef(function AccordionPanel(componentProps, forwardedRef) {
	const { className, hiddenUntilFound: hiddenUntilFoundProp, keepMounted: keepMountedProp, id: idProp, render, style, ...elementProps } = componentProps;
	const { hiddenUntilFound: contextHiddenUntilFound, keepMounted: contextKeepMounted } = useAccordionRootContext();
	const { mounted, onOpenChange, open, panelId, setMounted, setOpen, setPanelIdState, transitionStatus } = useCollapsibleRootContext();
	const hiddenUntilFound = hiddenUntilFoundProp ?? contextHiddenUntilFound;
	const keepMounted = keepMountedProp ?? contextKeepMounted;
	useIsoLayoutEffect(() => {
		if (idProp) {
			setPanelIdState(idProp);
			return () => {
				setPanelIdState(void 0);
			};
		}
	}, [idProp, setPanelIdState]);
	const { height, props, ref, shouldPreventOpenAnimation, shouldRender, transitionStatus: panelTransitionStatus, width } = useCollapsiblePanel({
		externalRef: forwardedRef,
		hiddenUntilFound,
		id: idProp ?? panelId,
		keepMounted,
		mounted,
		onOpenChange,
		open,
		setMounted,
		setOpen,
		transitionStatus
	});
	const { state, triggerId } = useAccordionItemContext();
	const panelState = {
		...state,
		transitionStatus: panelTransitionStatus
	};
	const resolvedStyle = resolveStyle(style, panelState);
	const element = useRenderElement("div", {
		...componentProps,
		style: void 0
	}, {
		state: panelState,
		ref,
		props: [
			props,
			{
				"aria-labelledby": triggerId,
				role: "region",
				style: {
					[AccordionPanelCssVars.accordionPanelHeight]: height === void 0 ? "auto" : `${height}px`,
					[AccordionPanelCssVars.accordionPanelWidth]: width === void 0 ? "auto" : `${width}px`
				}
			},
			elementProps,
			resolvedStyle ? { style: resolvedStyle } : void 0,
			shouldPreventOpenAnimation ? { style: { animationName: "none" } } : void 0
		],
		stateAttributesMapping: accordionStateAttributesMapping
	});
	if (!shouldRender) return null;
	return element;
});
//#endregion
//#region src/components/ui/accordion.tsx
function Accordion({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionRoot, {
		"data-slot": "accordion",
		className: cn("flex w-full flex-col", className),
		...props
	});
}
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
		"data-slot": "accordion-item",
		className: cn("not-last:border-b", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
		className: "flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
			"data-slot": "accordion-trigger",
			className: cn("group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground", className),
			...props,
			children: [
				children,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					"data-slot": "accordion-trigger-icon",
					className: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, {
					"data-slot": "accordion-trigger-icon",
					className: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
				})
			]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionPanel, {
		"data-slot": "accordion-content",
		className: "overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-(--accordion-panel-height) pt-0 pb-2.5 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className),
			children
		})
	});
}
//#endregion
//#region src/components/blocks/FAQAccordion.tsx
function FAQAccordion({ headline = "Frequently asked questions", faqs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-3xl flex-col gap-6 px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-bold tracking-tight",
				children: headline
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				className: "w-full",
				children: faqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `faq-${index}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: faq.question }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: faq.answer })]
				}, faq.question))
			})]
		})
	});
}
//#endregion
//#region src/recipes/services-page.tsx
function renderServicesPage(_brief, config) {
	const serviceItems = config.services.map((service) => ({
		title: service.title,
		description: service.description,
		slug: service.slug
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCentered, {
			headline: "Our services",
			subheadline: "Professional solutions backed by experience and clear pricing.",
			primaryCta: config.primaryCta
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesGrid, {
			headline: "What we offer",
			subheadline: "Every job is handled by licensed professionals.",
			items: serviceItems
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, { faqs: config.faqs }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABanner, {
			headline: "Need help choosing a service?",
			cta: config.primaryCta
		})
	] });
}
//#endregion
//#region src/routes/services.tsx?tsr-split=component
function ServicesPage() {
	return renderServicesPage(null, siteConfig);
}
//#endregion
export { ServicesPage as component };
