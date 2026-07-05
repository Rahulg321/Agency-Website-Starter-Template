import { Y as __toESM, c as require_jsx_runtime, q as require_react, r as require_with_selector } from "./react-dom-D3rPRm8N.js";
import { _ as formatErrorMessage, a as useStableCallback, c as isElement, g as useRefWithInit, i as useIsoLayoutEffect, l as cn, m as NOOP, n as cva, p as EMPTY_OBJECT, t as Button, u as useRenderElement, v as siteConfig } from "./button-lECp910C.js";
import { a as toast, n as Phone, r as LoaderCircle } from "./separator-MLZU8JxO.js";
import { t as createLucideIcon } from "./createLucideIcon-BxiIRgK4.js";
import { t as HeroCentered } from "./HeroCentered-B8-riJjS.js";
import { a as ownerDocument, i as useControlled, n as none, o as useBaseUiId, t as createChangeEventDetails } from "./createBaseUIEventDetails-auGTgIX2.js";
/**
* @license lucide-react v1.23.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Clock = createLucideIcon("clock", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l4 2",
	key: "mmk7yg"
}]]);
/**
* @license lucide-react v1.23.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Mail = createLucideIcon("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]);
/**
* @license lucide-react v1.23.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MapPin = createLucideIcon("map-pin", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["circle", {
	cx: "12",
	cy: "10",
	r: "3",
	key: "ilqhr7"
}]]);
//#endregion
//#region node_modules/zod/v4/core/core.js
var _a$1;
function $constructor(name, initializer, params) {
	function init(inst, def) {
		if (!inst._zod) Object.defineProperty(inst, "_zod", {
			value: {
				def,
				constr: _,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: false
		});
		if (inst._zod.traits.has(name)) return;
		inst._zod.traits.add(name);
		initializer(inst, def);
		const proto = _.prototype;
		const keys = Object.keys(proto);
		for (let i = 0; i < keys.length; i++) {
			const k = keys[i];
			if (!(k in inst)) inst[k] = proto[k].bind(inst);
		}
	}
	const Parent = params?.Parent ?? Object;
	class Definition extends Parent {}
	Object.defineProperty(Definition, "name", { value: name });
	function _(def) {
		var _a;
		const inst = params?.Parent ? new Definition() : this;
		init(inst, def);
		(_a = inst._zod).deferred ?? (_a.deferred = []);
		for (const fn of inst._zod.deferred) fn();
		return inst;
	}
	Object.defineProperty(_, "init", { value: init });
	Object.defineProperty(_, Symbol.hasInstance, { value: (inst) => {
		if (params?.Parent && inst instanceof params.Parent) return true;
		return inst?._zod?.traits?.has(name);
	} });
	Object.defineProperty(_, "name", { value: name });
	return _;
}
var $ZodAsyncError = class extends Error {
	constructor() {
		super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
	}
};
var $ZodEncodeError = class extends Error {
	constructor(name) {
		super(`Encountered unidirectional transform during encode: ${name}`);
		this.name = "ZodEncodeError";
	}
};
(_a$1 = globalThis).__zod_globalConfig ?? (_a$1.__zod_globalConfig = {});
var globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
	if (newConfig) Object.assign(globalConfig, newConfig);
	return globalConfig;
}
//#endregion
//#region node_modules/zod/v4/core/util.js
function getEnumValues(entries) {
	const numericValues = Object.values(entries).filter((v) => typeof v === "number");
	return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
}
function jsonStringifyReplacer(_, value) {
	if (typeof value === "bigint") return value.toString();
	return value;
}
function cached(getter) {
	return { get value() {
		{
			const value = getter();
			Object.defineProperty(this, "value", { value });
			return value;
		}
		throw new Error("cached value already set");
	} };
}
function nullish(input) {
	return input === null || input === void 0;
}
function cleanRegex(source) {
	const start = source.startsWith("^") ? 1 : 0;
	const end = source.endsWith("$") ? source.length - 1 : source.length;
	return source.slice(start, end);
}
var EVALUATING = /* @__PURE__*/ Symbol("evaluating");
function defineLazy(object, key, getter) {
	let value = void 0;
	Object.defineProperty(object, key, {
		get() {
			if (value === EVALUATING) return;
			if (value === void 0) {
				value = EVALUATING;
				value = getter();
			}
			return value;
		},
		set(v) {
			Object.defineProperty(object, key, { value: v });
		},
		configurable: true
	});
}
function assignProp(target, prop, value) {
	Object.defineProperty(target, prop, {
		value,
		writable: true,
		enumerable: true,
		configurable: true
	});
}
function mergeDefs(...defs) {
	const mergedDescriptors = {};
	for (const def of defs) {
		const descriptors = Object.getOwnPropertyDescriptors(def);
		Object.assign(mergedDescriptors, descriptors);
	}
	return Object.defineProperties({}, mergedDescriptors);
}
function esc(str) {
	return JSON.stringify(str);
}
function slugify(input) {
	return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
function isObject(data) {
	return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = /* @__PURE__*/ cached(() => {
	if (globalConfig.jitless) return false;
	if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) return false;
	try {
		new Function("");
		return true;
	} catch (_) {
		return false;
	}
});
function isPlainObject(o) {
	if (isObject(o) === false) return false;
	const ctor = o.constructor;
	if (ctor === void 0) return true;
	if (typeof ctor !== "function") return true;
	const prot = ctor.prototype;
	if (isObject(prot) === false) return false;
	if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) return false;
	return true;
}
function shallowClone(o) {
	if (isPlainObject(o)) return { ...o };
	if (Array.isArray(o)) return [...o];
	if (o instanceof Map) return new Map(o);
	if (o instanceof Set) return new Set(o);
	return o;
}
var propertyKeyTypes = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
]);
function escapeRegex(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
	const cl = new inst._zod.constr(def ?? inst._zod.def);
	if (!def || params?.parent) cl._zod.parent = inst;
	return cl;
}
function normalizeParams(_params) {
	const params = _params;
	if (!params) return {};
	if (typeof params === "string") return { error: () => params };
	if (params?.message !== void 0) {
		if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
		params.error = params.message;
	}
	delete params.message;
	if (typeof params.error === "string") return {
		...params,
		error: () => params.error
	};
	return params;
}
function optionalKeys(shape) {
	return Object.keys(shape).filter((k) => {
		return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
	});
}
Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, -Number.MAX_VALUE, Number.MAX_VALUE;
function pick(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const newShape = {};
			for (const key in mask) {
				if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				newShape[key] = currDef.shape[key];
			}
			assignProp(this, "shape", newShape);
			return newShape;
		},
		checks: []
	}));
}
function omit(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const newShape = { ...schema._zod.def.shape };
			for (const key in mask) {
				if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				delete newShape[key];
			}
			assignProp(this, "shape", newShape);
			return newShape;
		},
		checks: []
	}));
}
function extend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to extend: expected a plain object");
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) {
		const existingShape = schema._zod.def.shape;
		for (const key in shape) if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const _shape = {
			...schema._zod.def.shape,
			...shape
		};
		assignProp(this, "shape", _shape);
		return _shape;
	} }));
}
function safeExtend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to safeExtend: expected a plain object");
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const _shape = {
			...schema._zod.def.shape,
			...shape
		};
		assignProp(this, "shape", _shape);
		return _shape;
	} }));
}
function merge(a, b) {
	if (a._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return clone(a, mergeDefs(a._zod.def, {
		get shape() {
			const _shape = {
				...a._zod.def.shape,
				...b._zod.def.shape
			};
			assignProp(this, "shape", _shape);
			return _shape;
		},
		get catchall() {
			return b._zod.def.catchall;
		},
		checks: b._zod.def.checks ?? []
	}));
}
function partial(Class, schema, mask) {
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const oldShape = schema._zod.def.shape;
			const shape = { ...oldShape };
			if (mask) for (const key in mask) {
				if (!(key in oldShape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				shape[key] = Class ? new Class({
					type: "optional",
					innerType: oldShape[key]
				}) : oldShape[key];
			}
			else for (const key in oldShape) shape[key] = Class ? new Class({
				type: "optional",
				innerType: oldShape[key]
			}) : oldShape[key];
			assignProp(this, "shape", shape);
			return shape;
		},
		checks: []
	}));
}
function required(Class, schema, mask) {
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const oldShape = schema._zod.def.shape;
		const shape = { ...oldShape };
		if (mask) for (const key in mask) {
			if (!(key in shape)) throw new Error(`Unrecognized key: "${key}"`);
			if (!mask[key]) continue;
			shape[key] = new Class({
				type: "nonoptional",
				innerType: oldShape[key]
			});
		}
		else for (const key in oldShape) shape[key] = new Class({
			type: "nonoptional",
			innerType: oldShape[key]
		});
		assignProp(this, "shape", shape);
		return shape;
	} }));
}
function aborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue !== true) return true;
	return false;
}
function explicitlyAborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue === false) return true;
	return false;
}
function prefixIssues(path, issues) {
	return issues.map((iss) => {
		var _a;
		(_a = iss).path ?? (_a.path = []);
		iss.path.unshift(path);
		return iss;
	});
}
function unwrapMessage(message) {
	return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config) {
	const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
	const { inst: _inst, continue: _continue, input: _input, ...rest } = iss;
	rest.path ?? (rest.path = []);
	rest.message = message;
	if (ctx?.reportInput) rest.input = _input;
	return rest;
}
function getLengthableOrigin(input) {
	if (Array.isArray(input)) return "array";
	if (typeof input === "string") return "string";
	return "unknown";
}
function issue(...args) {
	const [iss, input, inst] = args;
	if (typeof iss === "string") return {
		message: iss,
		code: "custom",
		input,
		inst
	};
	return { ...iss };
}
//#endregion
//#region node_modules/zod/v4/core/errors.js
var initializer$1 = (inst, def) => {
	inst.name = "$ZodError";
	Object.defineProperty(inst, "_zod", {
		value: inst._zod,
		enumerable: false
	});
	Object.defineProperty(inst, "issues", {
		value: def,
		enumerable: false
	});
	inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
	Object.defineProperty(inst, "toString", {
		value: () => inst.message,
		enumerable: false
	});
};
var $ZodError = $constructor("$ZodError", initializer$1);
var $ZodRealError = $constructor("$ZodError", initializer$1, { Parent: Error });
function flattenError(error, mapper = (issue) => issue.message) {
	const fieldErrors = {};
	const formErrors = [];
	for (const sub of error.issues) if (sub.path.length > 0) {
		fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
		fieldErrors[sub.path[0]].push(mapper(sub));
	} else formErrors.push(mapper(sub));
	return {
		formErrors,
		fieldErrors
	};
}
function formatError(error, mapper = (issue) => issue.message) {
	const fieldErrors = { _errors: [] };
	const processError = (error, path = []) => {
		for (const issue of error.issues) if (issue.code === "invalid_union" && issue.errors.length) issue.errors.map((issues) => processError({ issues }, [...path, ...issue.path]));
		else if (issue.code === "invalid_key") processError({ issues: issue.issues }, [...path, ...issue.path]);
		else if (issue.code === "invalid_element") processError({ issues: issue.issues }, [...path, ...issue.path]);
		else {
			const fullpath = [...path, ...issue.path];
			if (fullpath.length === 0) fieldErrors._errors.push(mapper(issue));
			else {
				let curr = fieldErrors;
				let i = 0;
				while (i < fullpath.length) {
					const el = fullpath[i];
					if (!(i === fullpath.length - 1)) curr[el] = curr[el] || { _errors: [] };
					else {
						curr[el] = curr[el] || { _errors: [] };
						curr[el]._errors.push(mapper(issue));
					}
					curr = curr[el];
					i++;
				}
			}
		}
	};
	processError(error);
	return fieldErrors;
}
//#endregion
//#region node_modules/zod/v4/core/parse.js
var _parse = (_Err) => (schema, value, _ctx, _params) => {
	const ctx = _ctx ? {
		..._ctx,
		async: false
	} : { async: false };
	const result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	if (result.issues.length) {
		const e = new ((_params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
		captureStackTrace(e, _params?.callee);
		throw e;
	}
	return result.value;
};
var _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
	const ctx = _ctx ? {
		..._ctx,
		async: true
	} : { async: true };
	let result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	if (result.issues.length) {
		const e = new ((params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
		captureStackTrace(e, params?.callee);
		throw e;
	}
	return result.value;
};
var _safeParse = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: false
	} : { async: false };
	const result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	return result.issues.length ? {
		success: false,
		error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	} : {
		success: true,
		data: result.value
	};
};
var safeParse$1 = /* @__PURE__*/ _safeParse($ZodRealError);
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: true
	} : { async: true };
	let result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	return result.issues.length ? {
		success: false,
		error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	} : {
		success: true,
		data: result.value
	};
};
var safeParseAsync$1 = /* @__PURE__*/ _safeParseAsync($ZodRealError);
var _encode = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _parse(_Err)(schema, value, ctx);
};
var _decode = (_Err) => (schema, value, _ctx) => {
	return _parse(_Err)(schema, value, _ctx);
};
var _encodeAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _parseAsync(_Err)(schema, value, ctx);
};
var _decodeAsync = (_Err) => async (schema, value, _ctx) => {
	return _parseAsync(_Err)(schema, value, _ctx);
};
var _safeEncode = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParse(_Err)(schema, value, ctx);
};
var _safeDecode = (_Err) => (schema, value, _ctx) => {
	return _safeParse(_Err)(schema, value, _ctx);
};
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParseAsync(_Err)(schema, value, ctx);
};
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
	return _safeParseAsync(_Err)(schema, value, _ctx);
};
//#endregion
//#region node_modules/zod/v4/core/regexes.js
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link cuid2} instead.
* See https://github.com/paralleldrive/cuid.
*/
var cuid = /^[cC][0-9a-z]{6,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
var duration$1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
/** Returns a regex for validating an RFC 9562/4122 UUID.
*
* @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
var uuid$1 = (version) => {
	if (!version) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
	return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
/** Practical email validation */
var email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var _emoji$1 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function emoji() {
	return new RegExp(_emoji$1, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^[A-Za-z0-9_-]*$/;
var httpProtocol = /^https?$/;
var e164 = /^\+[1-9]\d{6,14}$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
var date$1 = /*@__PURE__*/ new RegExp(`^${dateSource}$`);
function timeSource(args) {
	const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
	return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function time$1(args) {
	return new RegExp(`^${timeSource(args)}$`);
}
function datetime$1(args) {
	const time = timeSource({ precision: args.precision });
	const opts = ["Z"];
	if (args.local) opts.push("");
	if (args.offset) opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
	const timeRegex = `${time}(?:${opts.join("|")})`;
	return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var string$1 = (params) => {
	const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
	return new RegExp(`^${regex}$`);
};
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;
//#endregion
//#region node_modules/zod/v4/core/checks.js
var $ZodCheck = /*@__PURE__*/ $constructor("$ZodCheck", (inst, def) => {
	var _a;
	inst._zod ?? (inst._zod = {});
	inst._zod.def = def;
	(_a = inst._zod).onattach ?? (_a.onattach = []);
});
var $ZodCheckMaxLength = /*@__PURE__*/ $constructor("$ZodCheckMaxLength", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const curr = inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.length <= def.maximum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_big",
			maximum: def.maximum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMinLength = /*@__PURE__*/ $constructor("$ZodCheckMinLength", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const curr = inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.length >= def.minimum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_small",
			minimum: def.minimum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckLengthEquals = /*@__PURE__*/ $constructor("$ZodCheckLengthEquals", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.minimum = def.length;
		bag.maximum = def.length;
		bag.length = def.length;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		const length = input.length;
		if (length === def.length) return;
		const origin = getLengthableOrigin(input);
		const tooBig = length > def.length;
		payload.issues.push({
			origin,
			...tooBig ? {
				code: "too_big",
				maximum: def.length
			} : {
				code: "too_small",
				minimum: def.length
			},
			inclusive: true,
			exact: true,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckStringFormat = /*@__PURE__*/ $constructor("$ZodCheckStringFormat", (inst, def) => {
	var _a, _b;
	$ZodCheck.init(inst, def);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.format = def.format;
		if (def.pattern) {
			bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
			bag.patterns.add(def.pattern);
		}
	});
	if (def.pattern) (_a = inst._zod).check ?? (_a.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: def.format,
			input: payload.value,
			...def.pattern ? { pattern: def.pattern.toString() } : {},
			inst,
			continue: !def.abort
		});
	});
	else (_b = inst._zod).check ?? (_b.check = () => {});
});
var $ZodCheckRegex = /*@__PURE__*/ $constructor("$ZodCheckRegex", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: payload.value,
			pattern: def.pattern.toString(),
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckLowerCase = /*@__PURE__*/ $constructor("$ZodCheckLowerCase", (inst, def) => {
	def.pattern ?? (def.pattern = lowercase);
	$ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /*@__PURE__*/ $constructor("$ZodCheckUpperCase", (inst, def) => {
	def.pattern ?? (def.pattern = uppercase);
	$ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /*@__PURE__*/ $constructor("$ZodCheckIncludes", (inst, def) => {
	$ZodCheck.init(inst, def);
	const escapedRegex = escapeRegex(def.includes);
	const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
	def.pattern = pattern;
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.includes(def.includes, def.position)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: def.includes,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckStartsWith = /*@__PURE__*/ $constructor("$ZodCheckStartsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.startsWith(def.prefix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: def.prefix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckEndsWith = /*@__PURE__*/ $constructor("$ZodCheckEndsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.endsWith(def.suffix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: def.suffix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckOverwrite = /*@__PURE__*/ $constructor("$ZodCheckOverwrite", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.check = (payload) => {
		payload.value = def.tx(payload.value);
	};
});
//#endregion
//#region node_modules/zod/v4/core/doc.js
var Doc = class {
	constructor(args = []) {
		this.content = [];
		this.indent = 0;
		if (this) this.args = args;
	}
	indented(fn) {
		this.indent += 1;
		fn(this);
		this.indent -= 1;
	}
	write(arg) {
		if (typeof arg === "function") {
			arg(this, { execution: "sync" });
			arg(this, { execution: "async" });
			return;
		}
		const lines = arg.split("\n").filter((x) => x);
		const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
		const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
		for (const line of dedented) this.content.push(line);
	}
	compile() {
		const F = Function;
		const args = this?.args;
		const lines = [...(this?.content ?? [``]).map((x) => `  ${x}`)];
		return new F(...args, lines.join("\n"));
	}
};
//#endregion
//#region node_modules/zod/v4/core/versions.js
var version = {
	major: 4,
	minor: 4,
	patch: 3
};
//#endregion
//#region node_modules/zod/v4/core/schemas.js
var $ZodType = /*@__PURE__*/ $constructor("$ZodType", (inst, def) => {
	var _a;
	inst ?? (inst = {});
	inst._zod.def = def;
	inst._zod.bag = inst._zod.bag || {};
	inst._zod.version = version;
	const checks = [...inst._zod.def.checks ?? []];
	if (inst._zod.traits.has("$ZodCheck")) checks.unshift(inst);
	for (const ch of checks) for (const fn of ch._zod.onattach) fn(inst);
	if (checks.length === 0) {
		(_a = inst._zod).deferred ?? (_a.deferred = []);
		inst._zod.deferred?.push(() => {
			inst._zod.run = inst._zod.parse;
		});
	} else {
		const runChecks = (payload, checks, ctx) => {
			let isAborted = aborted(payload);
			let asyncResult;
			for (const ch of checks) {
				if (ch._zod.def.when) {
					if (explicitlyAborted(payload)) continue;
					if (!ch._zod.def.when(payload)) continue;
				} else if (isAborted) continue;
				const currLen = payload.issues.length;
				const _ = ch._zod.check(payload);
				if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
				if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
					await _;
					if (payload.issues.length === currLen) return;
					if (!isAborted) isAborted = aborted(payload, currLen);
				});
				else {
					if (payload.issues.length === currLen) continue;
					if (!isAborted) isAborted = aborted(payload, currLen);
				}
			}
			if (asyncResult) return asyncResult.then(() => {
				return payload;
			});
			return payload;
		};
		const handleCanaryResult = (canary, payload, ctx) => {
			if (aborted(canary)) {
				canary.aborted = true;
				return canary;
			}
			const checkResult = runChecks(payload, checks, ctx);
			if (checkResult instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
			}
			return inst._zod.parse(checkResult, ctx);
		};
		inst._zod.run = (payload, ctx) => {
			if (ctx.skipChecks) return inst._zod.parse(payload, ctx);
			if (ctx.direction === "backward") {
				const canary = inst._zod.parse({
					value: payload.value,
					issues: []
				}, {
					...ctx,
					skipChecks: true
				});
				if (canary instanceof Promise) return canary.then((canary) => {
					return handleCanaryResult(canary, payload, ctx);
				});
				return handleCanaryResult(canary, payload, ctx);
			}
			const result = inst._zod.parse(payload, ctx);
			if (result instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return result.then((result) => runChecks(result, checks, ctx));
			}
			return runChecks(result, checks, ctx);
		};
	}
	defineLazy(inst, "~standard", () => ({
		validate: (value) => {
			try {
				const r = safeParse$1(inst, value);
				return r.success ? { value: r.data } : { issues: r.error?.issues };
			} catch (_) {
				return safeParseAsync$1(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
});
var $ZodString = /*@__PURE__*/ $constructor("$ZodString", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string$1(inst._zod.bag);
	inst._zod.parse = (payload, _) => {
		if (def.coerce) try {
			payload.value = String(payload.value);
		} catch (_) {}
		if (typeof payload.value === "string") return payload;
		payload.issues.push({
			expected: "string",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
var $ZodStringFormat = /*@__PURE__*/ $constructor("$ZodStringFormat", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	$ZodString.init(inst, def);
});
var $ZodGUID = /*@__PURE__*/ $constructor("$ZodGUID", (inst, def) => {
	def.pattern ?? (def.pattern = guid);
	$ZodStringFormat.init(inst, def);
});
var $ZodUUID = /*@__PURE__*/ $constructor("$ZodUUID", (inst, def) => {
	if (def.version) {
		const v = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[def.version];
		if (v === void 0) throw new Error(`Invalid UUID version: "${def.version}"`);
		def.pattern ?? (def.pattern = uuid$1(v));
	} else def.pattern ?? (def.pattern = uuid$1());
	$ZodStringFormat.init(inst, def);
});
var $ZodEmail = /*@__PURE__*/ $constructor("$ZodEmail", (inst, def) => {
	def.pattern ?? (def.pattern = email);
	$ZodStringFormat.init(inst, def);
});
var $ZodURL = /*@__PURE__*/ $constructor("$ZodURL", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		try {
			const trimmed = payload.value.trim();
			if (!def.normalize && def.protocol?.source === httpProtocol.source) {
				if (!/^https?:\/\//i.test(trimmed)) {
					payload.issues.push({
						code: "invalid_format",
						format: "url",
						note: "Invalid URL format",
						input: payload.value,
						inst,
						continue: !def.abort
					});
					return;
				}
			}
			const url = new URL(trimmed);
			if (def.hostname) {
				def.hostname.lastIndex = 0;
				if (!def.hostname.test(url.hostname)) payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid hostname",
					pattern: def.hostname.source,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
			if (def.protocol) {
				def.protocol.lastIndex = 0;
				if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid protocol",
					pattern: def.protocol.source,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
			if (def.normalize) payload.value = url.href;
			else payload.value = trimmed;
			return;
		} catch (_) {
			payload.issues.push({
				code: "invalid_format",
				format: "url",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
var $ZodEmoji = /*@__PURE__*/ $constructor("$ZodEmoji", (inst, def) => {
	def.pattern ?? (def.pattern = emoji());
	$ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /*@__PURE__*/ $constructor("$ZodNanoID", (inst, def) => {
	def.pattern ?? (def.pattern = nanoid);
	$ZodStringFormat.init(inst, def);
});
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link $ZodCUID2} instead.
* See https://github.com/paralleldrive/cuid.
*/
var $ZodCUID = /*@__PURE__*/ $constructor("$ZodCUID", (inst, def) => {
	def.pattern ?? (def.pattern = cuid);
	$ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /*@__PURE__*/ $constructor("$ZodCUID2", (inst, def) => {
	def.pattern ?? (def.pattern = cuid2);
	$ZodStringFormat.init(inst, def);
});
var $ZodULID = /*@__PURE__*/ $constructor("$ZodULID", (inst, def) => {
	def.pattern ?? (def.pattern = ulid);
	$ZodStringFormat.init(inst, def);
});
var $ZodXID = /*@__PURE__*/ $constructor("$ZodXID", (inst, def) => {
	def.pattern ?? (def.pattern = xid);
	$ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /*@__PURE__*/ $constructor("$ZodKSUID", (inst, def) => {
	def.pattern ?? (def.pattern = ksuid);
	$ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /*@__PURE__*/ $constructor("$ZodISODateTime", (inst, def) => {
	def.pattern ?? (def.pattern = datetime$1(def));
	$ZodStringFormat.init(inst, def);
});
var $ZodISODate = /*@__PURE__*/ $constructor("$ZodISODate", (inst, def) => {
	def.pattern ?? (def.pattern = date$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /*@__PURE__*/ $constructor("$ZodISOTime", (inst, def) => {
	def.pattern ?? (def.pattern = time$1(def));
	$ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /*@__PURE__*/ $constructor("$ZodISODuration", (inst, def) => {
	def.pattern ?? (def.pattern = duration$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /*@__PURE__*/ $constructor("$ZodIPv4", (inst, def) => {
	def.pattern ?? (def.pattern = ipv4);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.format = `ipv4`;
});
var $ZodIPv6 = /*@__PURE__*/ $constructor("$ZodIPv6", (inst, def) => {
	def.pattern ?? (def.pattern = ipv6);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.format = `ipv6`;
	inst._zod.check = (payload) => {
		try {
			new URL(`http://[${payload.value}]`);
		} catch {
			payload.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
var $ZodCIDRv4 = /*@__PURE__*/ $constructor("$ZodCIDRv4", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv4);
	$ZodStringFormat.init(inst, def);
});
var $ZodCIDRv6 = /*@__PURE__*/ $constructor("$ZodCIDRv6", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv6);
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		const parts = payload.value.split("/");
		try {
			if (parts.length !== 2) throw new Error();
			const [address, prefix] = parts;
			if (!prefix) throw new Error();
			const prefixNum = Number(prefix);
			if (`${prefixNum}` !== prefix) throw new Error();
			if (prefixNum < 0 || prefixNum > 128) throw new Error();
			new URL(`http://[${address}]`);
		} catch {
			payload.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
function isValidBase64(data) {
	if (data === "") return true;
	if (/\s/.test(data)) return false;
	if (data.length % 4 !== 0) return false;
	try {
		atob(data);
		return true;
	} catch {
		return false;
	}
}
var $ZodBase64 = /*@__PURE__*/ $constructor("$ZodBase64", (inst, def) => {
	def.pattern ?? (def.pattern = base64);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.contentEncoding = "base64";
	inst._zod.check = (payload) => {
		if (isValidBase64(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
function isValidBase64URL(data) {
	if (!base64url.test(data)) return false;
	const base64 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
	return isValidBase64(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
}
var $ZodBase64URL = /*@__PURE__*/ $constructor("$ZodBase64URL", (inst, def) => {
	def.pattern ?? (def.pattern = base64url);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.contentEncoding = "base64url";
	inst._zod.check = (payload) => {
		if (isValidBase64URL(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodE164 = /*@__PURE__*/ $constructor("$ZodE164", (inst, def) => {
	def.pattern ?? (def.pattern = e164);
	$ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
	try {
		const tokensParts = token.split(".");
		if (tokensParts.length !== 3) return false;
		const [header] = tokensParts;
		if (!header) return false;
		const parsedHeader = JSON.parse(atob(header));
		if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT") return false;
		if (!parsedHeader.alg) return false;
		if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
		return true;
	} catch {
		return false;
	}
}
var $ZodJWT = /*@__PURE__*/ $constructor("$ZodJWT", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (isValidJWT(payload.value, def.alg)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodUnknown = /*@__PURE__*/ $constructor("$ZodUnknown", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload) => payload;
});
var $ZodNever = /*@__PURE__*/ $constructor("$ZodNever", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		payload.issues.push({
			expected: "never",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
function handleArrayResult(result, final, index) {
	if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
	final.value[index] = result.value;
}
var $ZodArray = /*@__PURE__*/ $constructor("$ZodArray", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!Array.isArray(input)) {
			payload.issues.push({
				expected: "array",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = Array(input.length);
		const proms = [];
		for (let i = 0; i < input.length; i++) {
			const item = input[i];
			const result = def.element._zod.run({
				value: item,
				issues: []
			}, ctx);
			if (result instanceof Promise) proms.push(result.then((result) => handleArrayResult(result, payload, i)));
			else handleArrayResult(result, payload, i);
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
function handlePropertyResult(result, final, key, input, isOptionalIn, isOptionalOut) {
	const isPresent = key in input;
	if (result.issues.length) {
		if (isOptionalIn && isOptionalOut && !isPresent) return;
		final.issues.push(...prefixIssues(key, result.issues));
	}
	if (!isPresent && !isOptionalIn) {
		if (!result.issues.length) final.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [key]
		});
		return;
	}
	if (result.value === void 0) {
		if (isPresent) final.value[key] = void 0;
	} else final.value[key] = result.value;
}
function normalizeDef(def) {
	const keys = Object.keys(def.shape);
	for (const k of keys) if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
	const okeys = optionalKeys(def.shape);
	return {
		...def,
		keys,
		keySet: new Set(keys),
		numKeys: keys.length,
		optionalKeys: new Set(okeys)
	};
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
	const unrecognized = [];
	const keySet = def.keySet;
	const _catchall = def.catchall._zod;
	const t = _catchall.def.type;
	const isOptionalIn = _catchall.optin === "optional";
	const isOptionalOut = _catchall.optout === "optional";
	for (const key in input) {
		if (key === "__proto__") continue;
		if (keySet.has(key)) continue;
		if (t === "never") {
			unrecognized.push(key);
			continue;
		}
		const r = _catchall.run({
			value: input[key],
			issues: []
		}, ctx);
		if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
		else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
	}
	if (unrecognized.length) payload.issues.push({
		code: "unrecognized_keys",
		keys: unrecognized,
		input,
		inst
	});
	if (!proms.length) return payload;
	return Promise.all(proms).then(() => {
		return payload;
	});
}
var $ZodObject = /*@__PURE__*/ $constructor("$ZodObject", (inst, def) => {
	$ZodType.init(inst, def);
	if (!Object.getOwnPropertyDescriptor(def, "shape")?.get) {
		const sh = def.shape;
		Object.defineProperty(def, "shape", { get: () => {
			const newSh = { ...sh };
			Object.defineProperty(def, "shape", { value: newSh });
			return newSh;
		} });
	}
	const _normalized = cached(() => normalizeDef(def));
	defineLazy(inst._zod, "propValues", () => {
		const shape = def.shape;
		const propValues = {};
		for (const key in shape) {
			const field = shape[key]._zod;
			if (field.values) {
				propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
				for (const v of field.values) propValues[key].add(v);
			}
		}
		return propValues;
	});
	const isObject$2 = isObject;
	const catchall = def.catchall;
	let value;
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$2(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = {};
		const proms = [];
		const shape = value.shape;
		for (const key of value.keys) {
			const el = shape[key];
			const isOptionalIn = el._zod.optin === "optional";
			const isOptionalOut = el._zod.optout === "optional";
			const r = el._zod.run({
				value: input[key],
				issues: []
			}, ctx);
			if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
			else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
		}
		if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
		return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
	};
});
var $ZodObjectJIT = /*@__PURE__*/ $constructor("$ZodObjectJIT", (inst, def) => {
	$ZodObject.init(inst, def);
	const superParse = inst._zod.parse;
	const _normalized = cached(() => normalizeDef(def));
	const generateFastpass = (shape) => {
		const doc = new Doc([
			"shape",
			"payload",
			"ctx"
		]);
		const normalized = _normalized.value;
		const parseStr = (key) => {
			const k = esc(key);
			return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
		};
		doc.write(`const input = payload.value;`);
		const ids = Object.create(null);
		let counter = 0;
		for (const key of normalized.keys) ids[key] = `key_${counter++}`;
		doc.write(`const newResult = {};`);
		for (const key of normalized.keys) {
			const id = ids[key];
			const k = esc(key);
			const schema = shape[key];
			const isOptionalIn = schema?._zod?.optin === "optional";
			const isOptionalOut = schema?._zod?.optout === "optional";
			doc.write(`const ${id} = ${parseStr(key)};`);
			if (isOptionalIn && isOptionalOut) doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
			else if (!isOptionalIn) doc.write(`
        const ${id}_present = ${k} in input;
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          if (${id}.value === undefined) {
            newResult[${k}] = undefined;
          } else {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
			else doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
		}
		doc.write(`payload.value = newResult;`);
		doc.write(`return payload;`);
		const fn = doc.compile();
		return (payload, ctx) => fn(shape, payload, ctx);
	};
	let fastpass;
	const isObject$1 = isObject;
	const jit = !globalConfig.jitless;
	const fastEnabled = jit && allowsEval.value;
	const catchall = def.catchall;
	let value;
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$1(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
			if (!fastpass) fastpass = generateFastpass(def.shape);
			payload = fastpass(payload, ctx);
			if (!catchall) return payload;
			return handleCatchall([], input, payload, ctx, value, inst);
		}
		return superParse(payload, ctx);
	};
});
function handleUnionResults(results, final, inst, ctx) {
	for (const result of results) if (result.issues.length === 0) {
		final.value = result.value;
		return final;
	}
	const nonaborted = results.filter((r) => !aborted(r));
	if (nonaborted.length === 1) {
		final.value = nonaborted[0].value;
		return nonaborted[0];
	}
	final.issues.push({
		code: "invalid_union",
		input: final.value,
		inst,
		errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	});
	return final;
}
var $ZodUnion = /*@__PURE__*/ $constructor("$ZodUnion", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
	defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
	defineLazy(inst._zod, "values", () => {
		if (def.options.every((o) => o._zod.values)) return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
	});
	defineLazy(inst._zod, "pattern", () => {
		if (def.options.every((o) => o._zod.pattern)) {
			const patterns = def.options.map((o) => o._zod.pattern);
			return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
		}
	});
	const first = def.options.length === 1 ? def.options[0]._zod.run : null;
	inst._zod.parse = (payload, ctx) => {
		if (first) return first(payload, ctx);
		let async = false;
		const results = [];
		for (const option of def.options) {
			const result = option._zod.run({
				value: payload.value,
				issues: []
			}, ctx);
			if (result instanceof Promise) {
				results.push(result);
				async = true;
			} else {
				if (result.issues.length === 0) return result;
				results.push(result);
			}
		}
		if (!async) return handleUnionResults(results, payload, inst, ctx);
		return Promise.all(results).then((results) => {
			return handleUnionResults(results, payload, inst, ctx);
		});
	};
});
var $ZodIntersection = /*@__PURE__*/ $constructor("$ZodIntersection", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		const left = def.left._zod.run({
			value: input,
			issues: []
		}, ctx);
		const right = def.right._zod.run({
			value: input,
			issues: []
		}, ctx);
		if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left, right]) => {
			return handleIntersectionResults(payload, left, right);
		});
		return handleIntersectionResults(payload, left, right);
	};
});
function mergeValues(a, b) {
	if (a === b) return {
		valid: true,
		data: a
	};
	if (a instanceof Date && b instanceof Date && +a === +b) return {
		valid: true,
		data: a
	};
	if (isPlainObject(a) && isPlainObject(b)) {
		const bKeys = Object.keys(b);
		const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
		const newObj = {
			...a,
			...b
		};
		for (const key of sharedKeys) {
			const sharedValue = mergeValues(a[key], b[key]);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
			};
			newObj[key] = sharedValue.data;
		}
		return {
			valid: true,
			data: newObj
		};
	}
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return {
			valid: false,
			mergeErrorPath: []
		};
		const newArray = [];
		for (let index = 0; index < a.length; index++) {
			const itemA = a[index];
			const itemB = b[index];
			const sharedValue = mergeValues(itemA, itemB);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
			};
			newArray.push(sharedValue.data);
		}
		return {
			valid: true,
			data: newArray
		};
	}
	return {
		valid: false,
		mergeErrorPath: []
	};
}
function handleIntersectionResults(result, left, right) {
	const unrecKeys = /* @__PURE__ */ new Map();
	let unrecIssue;
	for (const iss of left.issues) if (iss.code === "unrecognized_keys") {
		unrecIssue ?? (unrecIssue = iss);
		for (const k of iss.keys) {
			if (!unrecKeys.has(k)) unrecKeys.set(k, {});
			unrecKeys.get(k).l = true;
		}
	} else result.issues.push(iss);
	for (const iss of right.issues) if (iss.code === "unrecognized_keys") for (const k of iss.keys) {
		if (!unrecKeys.has(k)) unrecKeys.set(k, {});
		unrecKeys.get(k).r = true;
	}
	else result.issues.push(iss);
	const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
	if (bothKeys.length && unrecIssue) result.issues.push({
		...unrecIssue,
		keys: bothKeys
	});
	if (aborted(result)) return result;
	const merged = mergeValues(left.value, right.value);
	if (!merged.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
	result.value = merged.data;
	return result;
}
var $ZodEnum = /*@__PURE__*/ $constructor("$ZodEnum", (inst, def) => {
	$ZodType.init(inst, def);
	const values = getEnumValues(def.entries);
	const valuesSet = new Set(values);
	inst._zod.values = valuesSet;
	inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (valuesSet.has(input)) return payload;
		payload.issues.push({
			code: "invalid_value",
			values,
			input,
			inst
		});
		return payload;
	};
});
var $ZodTransform = /*@__PURE__*/ $constructor("$ZodTransform", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		const _out = def.transform(payload.value, payload);
		if (ctx.async) return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
			payload.value = output;
			payload.fallback = true;
			return payload;
		});
		if (_out instanceof Promise) throw new $ZodAsyncError();
		payload.value = _out;
		payload.fallback = true;
		return payload;
	};
});
function handleOptionalResult(result, input) {
	if (input === void 0 && (result.issues.length || result.fallback)) return {
		issues: [],
		value: void 0
	};
	return result;
}
var $ZodOptional = /*@__PURE__*/ $constructor("$ZodOptional", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	inst._zod.optout = "optional";
	defineLazy(inst._zod, "values", () => {
		return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
	});
	defineLazy(inst._zod, "pattern", () => {
		const pattern = def.innerType._zod.pattern;
		return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (def.innerType._zod.optin === "optional") {
			const input = payload.value;
			const result = def.innerType._zod.run(payload, ctx);
			if (result instanceof Promise) return result.then((r) => handleOptionalResult(r, input));
			return handleOptionalResult(result, input);
		}
		if (payload.value === void 0) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodExactOptional = /*@__PURE__*/ $constructor("$ZodExactOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
	inst._zod.parse = (payload, ctx) => {
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodNullable = /*@__PURE__*/ $constructor("$ZodNullable", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
	defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
	defineLazy(inst._zod, "pattern", () => {
		const pattern = def.innerType._zod.pattern;
		return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
	});
	defineLazy(inst._zod, "values", () => {
		return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (payload.value === null) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodDefault = /*@__PURE__*/ $constructor("$ZodDefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) {
			payload.value = def.defaultValue;
			/**
			* $ZodDefault returns the default value immediately in forward direction.
			* It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
			return payload;
		}
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => handleDefaultResult(result, def));
		return handleDefaultResult(result, def);
	};
});
function handleDefaultResult(payload, def) {
	if (payload.value === void 0) payload.value = def.defaultValue;
	return payload;
}
var $ZodPrefault = /*@__PURE__*/ $constructor("$ZodPrefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) payload.value = def.defaultValue;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodNonOptional = /*@__PURE__*/ $constructor("$ZodNonOptional", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => {
		const v = def.innerType._zod.values;
		return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => handleNonOptionalResult(result, inst));
		return handleNonOptionalResult(result, inst);
	};
});
function handleNonOptionalResult(payload, inst) {
	if (!payload.issues.length && payload.value === void 0) payload.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: payload.value,
		inst
	});
	return payload;
}
var $ZodCatch = /*@__PURE__*/ $constructor("$ZodCatch", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => {
			payload.value = result.value;
			if (result.issues.length) {
				payload.value = def.catchValue({
					...payload,
					error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
					input: payload.value
				});
				payload.issues = [];
				payload.fallback = true;
			}
			return payload;
		});
		payload.value = result.value;
		if (result.issues.length) {
			payload.value = def.catchValue({
				...payload,
				error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
				input: payload.value
			});
			payload.issues = [];
			payload.fallback = true;
		}
		return payload;
	};
});
var $ZodPipe = /*@__PURE__*/ $constructor("$ZodPipe", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => def.in._zod.values);
	defineLazy(inst._zod, "optin", () => def.in._zod.optin);
	defineLazy(inst._zod, "optout", () => def.out._zod.optout);
	defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") {
			const right = def.out._zod.run(payload, ctx);
			if (right instanceof Promise) return right.then((right) => handlePipeResult(right, def.in, ctx));
			return handlePipeResult(right, def.in, ctx);
		}
		const left = def.in._zod.run(payload, ctx);
		if (left instanceof Promise) return left.then((left) => handlePipeResult(left, def.out, ctx));
		return handlePipeResult(left, def.out, ctx);
	};
});
function handlePipeResult(left, next, ctx) {
	if (left.issues.length) {
		left.aborted = true;
		return left;
	}
	return next._zod.run({
		value: left.value,
		issues: left.issues,
		fallback: left.fallback
	}, ctx);
}
var $ZodReadonly = /*@__PURE__*/ $constructor("$ZodReadonly", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
	defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then(handleReadonlyResult);
		return handleReadonlyResult(result);
	};
});
function handleReadonlyResult(payload) {
	payload.value = Object.freeze(payload.value);
	return payload;
}
var $ZodCustom = /*@__PURE__*/ $constructor("$ZodCustom", (inst, def) => {
	$ZodCheck.init(inst, def);
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _) => {
		return payload;
	};
	inst._zod.check = (payload) => {
		const input = payload.value;
		const r = def.fn(input);
		if (r instanceof Promise) return r.then((r) => handleRefineResult(r, payload, input, inst));
		handleRefineResult(r, payload, input, inst);
	};
});
function handleRefineResult(result, payload, input, inst) {
	if (!result) {
		const _iss = {
			code: "custom",
			input,
			inst,
			path: [...inst._zod.def.path ?? []],
			continue: !inst._zod.def.abort
		};
		if (inst._zod.def.params) _iss.params = inst._zod.def.params;
		payload.issues.push(issue(_iss));
	}
}
//#endregion
//#region node_modules/zod/v4/core/registries.js
var _a;
var $ZodRegistry = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
	}
	add(schema, ..._meta) {
		const meta = _meta[0];
		this._map.set(schema, meta);
		if (meta && typeof meta === "object" && "id" in meta) this._idmap.set(meta.id, schema);
		return this;
	}
	clear() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
		return this;
	}
	remove(schema) {
		const meta = this._map.get(schema);
		if (meta && typeof meta === "object" && "id" in meta) this._idmap.delete(meta.id);
		this._map.delete(schema);
		return this;
	}
	get(schema) {
		const p = schema._zod.parent;
		if (p) {
			const pm = { ...this.get(p) ?? {} };
			delete pm.id;
			const f = {
				...pm,
				...this._map.get(schema)
			};
			return Object.keys(f).length ? f : void 0;
		}
		return this._map.get(schema);
	}
	has(schema) {
		return this._map.has(schema);
	}
};
function registry() {
	return new $ZodRegistry();
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;
//#endregion
//#region node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function _string(Class, params) {
	return new Class({
		type: "string",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _email(Class, params) {
	return new Class({
		type: "string",
		format: "email",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _guid(Class, params) {
	return new Class({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _uuid(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _uuidv4(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v4",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _uuidv6(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v6",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _uuidv7(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v7",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _url(Class, params) {
	return new Class({
		type: "string",
		format: "url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _emoji(Class, params) {
	return new Class({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _nanoid(Class, params) {
	return new Class({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link _cuid2} instead.
* See https://github.com/paralleldrive/cuid.
*/
// @__NO_SIDE_EFFECTS__
function _cuid(Class, params) {
	return new Class({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _cuid2(Class, params) {
	return new Class({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _ulid(Class, params) {
	return new Class({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _xid(Class, params) {
	return new Class({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _ksuid(Class, params) {
	return new Class({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _ipv4(Class, params) {
	return new Class({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _ipv6(Class, params) {
	return new Class({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _cidrv4(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _cidrv6(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _base64(Class, params) {
	return new Class({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _base64url(Class, params) {
	return new Class({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _e164(Class, params) {
	return new Class({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _jwt(Class, params) {
	return new Class({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _isoDateTime(Class, params) {
	return new Class({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: false,
		local: false,
		precision: null,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _isoDate(Class, params) {
	return new Class({
		type: "string",
		format: "date",
		check: "string_format",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _isoTime(Class, params) {
	return new Class({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _isoDuration(Class, params) {
	return new Class({
		type: "string",
		format: "duration",
		check: "string_format",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _unknown(Class) {
	return new Class({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function _never(Class, params) {
	return new Class({
		type: "never",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _maxLength(maximum, params) {
	return new $ZodCheckMaxLength({
		check: "max_length",
		...normalizeParams(params),
		maximum
	});
}
// @__NO_SIDE_EFFECTS__
function _minLength(minimum, params) {
	return new $ZodCheckMinLength({
		check: "min_length",
		...normalizeParams(params),
		minimum
	});
}
// @__NO_SIDE_EFFECTS__
function _length(length, params) {
	return new $ZodCheckLengthEquals({
		check: "length_equals",
		...normalizeParams(params),
		length
	});
}
// @__NO_SIDE_EFFECTS__
function _regex(pattern, params) {
	return new $ZodCheckRegex({
		check: "string_format",
		format: "regex",
		...normalizeParams(params),
		pattern
	});
}
// @__NO_SIDE_EFFECTS__
function _lowercase(params) {
	return new $ZodCheckLowerCase({
		check: "string_format",
		format: "lowercase",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _uppercase(params) {
	return new $ZodCheckUpperCase({
		check: "string_format",
		format: "uppercase",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _includes(includes, params) {
	return new $ZodCheckIncludes({
		check: "string_format",
		format: "includes",
		...normalizeParams(params),
		includes
	});
}
// @__NO_SIDE_EFFECTS__
function _startsWith(prefix, params) {
	return new $ZodCheckStartsWith({
		check: "string_format",
		format: "starts_with",
		...normalizeParams(params),
		prefix
	});
}
// @__NO_SIDE_EFFECTS__
function _endsWith(suffix, params) {
	return new $ZodCheckEndsWith({
		check: "string_format",
		format: "ends_with",
		...normalizeParams(params),
		suffix
	});
}
// @__NO_SIDE_EFFECTS__
function _overwrite(tx) {
	return new $ZodCheckOverwrite({
		check: "overwrite",
		tx
	});
}
// @__NO_SIDE_EFFECTS__
function _normalize(form) {
	return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
// @__NO_SIDE_EFFECTS__
function _trim() {
	return /* @__PURE__ */ _overwrite((input) => input.trim());
}
// @__NO_SIDE_EFFECTS__
function _toLowerCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function _toUpperCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function _slugify() {
	return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
// @__NO_SIDE_EFFECTS__
function _array(Class, element, params) {
	return new Class({
		type: "array",
		element,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _refine(Class, fn, _params) {
	return new Class({
		type: "custom",
		check: "custom",
		fn,
		...normalizeParams(_params)
	});
}
// @__NO_SIDE_EFFECTS__
function _superRefine(fn, params) {
	const ch = /* @__PURE__ */ _check((payload) => {
		payload.addIssue = (issue$2) => {
			if (typeof issue$2 === "string") payload.issues.push(issue(issue$2, payload.value, ch._zod.def));
			else {
				const _issue = issue$2;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				_issue.input ?? (_issue.input = payload.value);
				_issue.inst ?? (_issue.inst = ch);
				_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
				payload.issues.push(issue(_issue));
			}
		};
		return fn(payload.value, payload);
	}, params);
	return ch;
}
// @__NO_SIDE_EFFECTS__
function _check(fn, params) {
	const ch = new $ZodCheck({
		check: "custom",
		...normalizeParams(params)
	});
	ch._zod.check = fn;
	return ch;
}
//#endregion
//#region node_modules/zod/v4/core/to-json-schema.js
function initializeContext(params) {
	let target = params?.target ?? "draft-2020-12";
	if (target === "draft-4") target = "draft-04";
	if (target === "draft-7") target = "draft-07";
	return {
		processors: params.processors ?? {},
		metadataRegistry: params?.metadata ?? globalRegistry,
		target,
		unrepresentable: params?.unrepresentable ?? "throw",
		override: params?.override ?? (() => {}),
		io: params?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		cycles: params?.cycles ?? "ref",
		reused: params?.reused ?? "inline",
		external: params?.external ?? void 0
	};
}
function process(schema, ctx, _params = {
	path: [],
	schemaPath: []
}) {
	var _a;
	const def = schema._zod.def;
	const seen = ctx.seen.get(schema);
	if (seen) {
		seen.count++;
		if (_params.schemaPath.includes(schema)) seen.cycle = _params.path;
		return seen.schema;
	}
	const result = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: _params.path
	};
	ctx.seen.set(schema, result);
	const overrideSchema = schema._zod.toJSONSchema?.();
	if (overrideSchema) result.schema = overrideSchema;
	else {
		const params = {
			..._params,
			schemaPath: [..._params.schemaPath, schema],
			path: _params.path
		};
		if (schema._zod.processJSONSchema) schema._zod.processJSONSchema(ctx, result.schema, params);
		else {
			const _json = result.schema;
			const processor = ctx.processors[def.type];
			if (!processor) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
			processor(schema, ctx, _json, params);
		}
		const parent = schema._zod.parent;
		if (parent) {
			if (!result.ref) result.ref = parent;
			process(parent, ctx, params);
			ctx.seen.get(parent).isParent = true;
		}
	}
	const meta = ctx.metadataRegistry.get(schema);
	if (meta) Object.assign(result.schema, meta);
	if (ctx.io === "input" && isTransforming(schema)) {
		delete result.schema.examples;
		delete result.schema.default;
	}
	if (ctx.io === "input" && "_prefault" in result.schema) (_a = result.schema).default ?? (_a.default = result.schema._prefault);
	delete result.schema._prefault;
	return ctx.seen.get(schema).schema;
}
function extractDefs(ctx, schema) {
	const root = ctx.seen.get(schema);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const idToSchema = /* @__PURE__ */ new Map();
	for (const entry of ctx.seen.entries()) {
		const id = ctx.metadataRegistry.get(entry[0])?.id;
		if (id) {
			const existing = idToSchema.get(id);
			if (existing && existing !== entry[0]) throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			idToSchema.set(id, entry[0]);
		}
	}
	const makeURI = (entry) => {
		const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
		if (ctx.external) {
			const externalId = ctx.external.registry.get(entry[0])?.id;
			const uriGenerator = ctx.external.uri ?? ((id) => id);
			if (externalId) return { ref: uriGenerator(externalId) };
			const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
			entry[1].defId = id;
			return {
				defId: id,
				ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}`
			};
		}
		if (entry[1] === root) return { ref: "#" };
		const defUriPrefix = `#/${defsSegment}/`;
		const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
		return {
			defId,
			ref: defUriPrefix + defId
		};
	};
	const extractToDef = (entry) => {
		if (entry[1].schema.$ref) return;
		const seen = entry[1];
		const { ref, defId } = makeURI(entry);
		seen.def = { ...seen.schema };
		if (defId) seen.defId = defId;
		const schema = seen.schema;
		for (const key in schema) delete schema[key];
		schema.$ref = ref;
	};
	if (ctx.cycles === "throw") for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.cycle) throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (schema === entry[0]) {
			extractToDef(entry);
			continue;
		}
		if (ctx.external) {
			const ext = ctx.external.registry.get(entry[0])?.id;
			if (schema !== entry[0] && ext) {
				extractToDef(entry);
				continue;
			}
		}
		if (ctx.metadataRegistry.get(entry[0])?.id) {
			extractToDef(entry);
			continue;
		}
		if (seen.cycle) {
			extractToDef(entry);
			continue;
		}
		if (seen.count > 1) {
			if (ctx.reused === "ref") {
				extractToDef(entry);
				continue;
			}
		}
	}
}
function finalize(ctx, schema) {
	const root = ctx.seen.get(schema);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const flattenRef = (zodSchema) => {
		const seen = ctx.seen.get(zodSchema);
		if (seen.ref === null) return;
		const schema = seen.def ?? seen.schema;
		const _cached = { ...schema };
		const ref = seen.ref;
		seen.ref = null;
		if (ref) {
			flattenRef(ref);
			const refSeen = ctx.seen.get(ref);
			const refSchema = refSeen.schema;
			if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
				schema.allOf = schema.allOf ?? [];
				schema.allOf.push(refSchema);
			} else Object.assign(schema, refSchema);
			Object.assign(schema, _cached);
			if (zodSchema._zod.parent === ref) for (const key in schema) {
				if (key === "$ref" || key === "allOf") continue;
				if (!(key in _cached)) delete schema[key];
			}
			if (refSchema.$ref && refSeen.def) for (const key in schema) {
				if (key === "$ref" || key === "allOf") continue;
				if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) delete schema[key];
			}
		}
		const parent = zodSchema._zod.parent;
		if (parent && parent !== ref) {
			flattenRef(parent);
			const parentSeen = ctx.seen.get(parent);
			if (parentSeen?.schema.$ref) {
				schema.$ref = parentSeen.schema.$ref;
				if (parentSeen.def) for (const key in schema) {
					if (key === "$ref" || key === "allOf") continue;
					if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) delete schema[key];
				}
			}
		}
		ctx.override({
			zodSchema,
			jsonSchema: schema,
			path: seen.path ?? []
		});
	};
	for (const entry of [...ctx.seen.entries()].reverse()) flattenRef(entry[0]);
	const result = {};
	if (ctx.target === "draft-2020-12") result.$schema = "https://json-schema.org/draft/2020-12/schema";
	else if (ctx.target === "draft-07") result.$schema = "http://json-schema.org/draft-07/schema#";
	else if (ctx.target === "draft-04") result.$schema = "http://json-schema.org/draft-04/schema#";
	else if (ctx.target === "openapi-3.0") {}
	if (ctx.external?.uri) {
		const id = ctx.external.registry.get(schema)?.id;
		if (!id) throw new Error("Schema is missing an `id` property");
		result.$id = ctx.external.uri(id);
	}
	Object.assign(result, root.def ?? root.schema);
	const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
	if (rootMetaId !== void 0 && result.id === rootMetaId) delete result.id;
	const defs = ctx.external?.defs ?? {};
	for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.def && seen.defId) {
			if (seen.def.id === seen.defId) delete seen.def.id;
			defs[seen.defId] = seen.def;
		}
	}
	if (ctx.external) {} else if (Object.keys(defs).length > 0) if (ctx.target === "draft-2020-12") result.$defs = defs;
	else result.definitions = defs;
	try {
		const finalized = JSON.parse(JSON.stringify(result));
		Object.defineProperty(finalized, "~standard", {
			value: {
				...schema["~standard"],
				jsonSchema: {
					input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
					output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
				}
			},
			enumerable: false,
			writable: false
		});
		return finalized;
	} catch (_err) {
		throw new Error("Error converting schema to JSON.");
	}
}
function isTransforming(_schema, _ctx) {
	const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
	if (ctx.seen.has(_schema)) return false;
	ctx.seen.add(_schema);
	const def = _schema._zod.def;
	if (def.type === "transform") return true;
	if (def.type === "array") return isTransforming(def.element, ctx);
	if (def.type === "set") return isTransforming(def.valueType, ctx);
	if (def.type === "lazy") return isTransforming(def.getter(), ctx);
	if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") return isTransforming(def.innerType, ctx);
	if (def.type === "intersection") return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
	if (def.type === "record" || def.type === "map") return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
	if (def.type === "pipe") {
		if (_schema._zod.traits.has("$ZodCodec")) return true;
		return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
	}
	if (def.type === "object") {
		for (const key in def.shape) if (isTransforming(def.shape[key], ctx)) return true;
		return false;
	}
	if (def.type === "union") {
		for (const option of def.options) if (isTransforming(option, ctx)) return true;
		return false;
	}
	if (def.type === "tuple") {
		for (const item of def.items) if (isTransforming(item, ctx)) return true;
		if (def.rest && isTransforming(def.rest, ctx)) return true;
		return false;
	}
	return false;
}
/**
* Creates a toJSONSchema method for a schema instance.
* This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
*/
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
	const ctx = initializeContext({
		...params,
		processors
	});
	process(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
	const { libraryOptions, target } = params ?? {};
	const ctx = initializeContext({
		...libraryOptions ?? {},
		target,
		io,
		processors
	});
	process(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};
//#endregion
//#region node_modules/zod/v4/core/json-schema-processors.js
var formatMap = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
};
var stringProcessor = (schema, ctx, _json, _params) => {
	const json = _json;
	json.type = "string";
	const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
	if (typeof minimum === "number") json.minLength = minimum;
	if (typeof maximum === "number") json.maxLength = maximum;
	if (format) {
		json.format = formatMap[format] ?? format;
		if (json.format === "") delete json.format;
		if (format === "time") delete json.format;
	}
	if (contentEncoding) json.contentEncoding = contentEncoding;
	if (patterns && patterns.size > 0) {
		const regexes = [...patterns];
		if (regexes.length === 1) json.pattern = regexes[0].source;
		else if (regexes.length > 1) json.allOf = [...regexes.map((regex) => ({
			...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: regex.source
		}))];
	}
};
var neverProcessor = (_schema, _ctx, json, _params) => {
	json.not = {};
};
var enumProcessor = (schema, _ctx, json, _params) => {
	const def = schema._zod.def;
	const values = getEnumValues(def.entries);
	if (values.every((v) => typeof v === "number")) json.type = "number";
	if (values.every((v) => typeof v === "string")) json.type = "string";
	json.enum = values;
};
var customProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
};
var transformProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
};
var arrayProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	const { minimum, maximum } = schema._zod.bag;
	if (typeof minimum === "number") json.minItems = minimum;
	if (typeof maximum === "number") json.maxItems = maximum;
	json.type = "array";
	json.items = process(def.element, ctx, {
		...params,
		path: [...params.path, "items"]
	});
};
var objectProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	json.type = "object";
	json.properties = {};
	const shape = def.shape;
	for (const key in shape) json.properties[key] = process(shape[key], ctx, {
		...params,
		path: [
			...params.path,
			"properties",
			key
		]
	});
	const allKeys = new Set(Object.keys(shape));
	const requiredKeys = new Set([...allKeys].filter((key) => {
		const v = def.shape[key]._zod;
		if (ctx.io === "input") return v.optin === void 0;
		else return v.optout === void 0;
	}));
	if (requiredKeys.size > 0) json.required = Array.from(requiredKeys);
	if (def.catchall?._zod.def.type === "never") json.additionalProperties = false;
	else if (!def.catchall) {
		if (ctx.io === "output") json.additionalProperties = false;
	} else if (def.catchall) json.additionalProperties = process(def.catchall, ctx, {
		...params,
		path: [...params.path, "additionalProperties"]
	});
};
var unionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const isExclusive = def.inclusive === false;
	const options = def.options.map((x, i) => process(x, ctx, {
		...params,
		path: [
			...params.path,
			isExclusive ? "oneOf" : "anyOf",
			i
		]
	}));
	if (isExclusive) json.oneOf = options;
	else json.anyOf = options;
};
var intersectionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const a = process(def.left, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			0
		]
	});
	const b = process(def.right, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			1
		]
	});
	const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
	json.allOf = [...isSimpleIntersection(a) ? a.allOf : [a], ...isSimpleIntersection(b) ? b.allOf : [b]];
};
var nullableProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const inner = process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	if (ctx.target === "openapi-3.0") {
		seen.ref = def.innerType;
		json.nullable = true;
	} else json.anyOf = [inner, { type: "null" }];
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
var defaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	json.default = JSON.parse(JSON.stringify(def.defaultValue));
};
var prefaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	if (ctx.io === "input") json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
};
var catchProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	let catchValue;
	try {
		catchValue = def.catchValue(void 0);
	} catch {
		throw new Error("Dynamic catch values are not supported in JSON Schema");
	}
	json.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	const inIsTransform = def.in._zod.traits.has("$ZodTransform");
	const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
	process(innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	json.readOnly = true;
};
var optionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
//#endregion
//#region node_modules/zod/v4/classic/iso.js
var ZodISODateTime = /*@__PURE__*/ $constructor("ZodISODateTime", (inst, def) => {
	$ZodISODateTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function datetime(params) {
	return /* @__PURE__ */ _isoDateTime(ZodISODateTime, params);
}
var ZodISODate = /*@__PURE__*/ $constructor("ZodISODate", (inst, def) => {
	$ZodISODate.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function date(params) {
	return /* @__PURE__ */ _isoDate(ZodISODate, params);
}
var ZodISOTime = /*@__PURE__*/ $constructor("ZodISOTime", (inst, def) => {
	$ZodISOTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function time(params) {
	return /* @__PURE__ */ _isoTime(ZodISOTime, params);
}
var ZodISODuration = /*@__PURE__*/ $constructor("ZodISODuration", (inst, def) => {
	$ZodISODuration.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function duration(params) {
	return /* @__PURE__ */ _isoDuration(ZodISODuration, params);
}
//#endregion
//#region node_modules/zod/v4/classic/errors.js
var initializer = (inst, issues) => {
	$ZodError.init(inst, issues);
	inst.name = "ZodError";
	Object.defineProperties(inst, {
		format: { value: (mapper) => formatError(inst, mapper) },
		flatten: { value: (mapper) => flattenError(inst, mapper) },
		addIssue: { value: (issue) => {
			inst.issues.push(issue);
			inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
		} },
		addIssues: { value: (issues) => {
			inst.issues.push(...issues);
			inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
		} },
		isEmpty: { get() {
			return inst.issues.length === 0;
		} }
	});
};
var ZodRealError = /*@__PURE__*/ $constructor("ZodError", initializer, { Parent: Error });
//#endregion
//#region node_modules/zod/v4/classic/parse.js
var parse = /* @__PURE__ */ _parse(ZodRealError);
var parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
var encode = /* @__PURE__ */ _encode(ZodRealError);
var decode = /* @__PURE__ */ _decode(ZodRealError);
var encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
var decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
var safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
var safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
//#endregion
//#region node_modules/zod/v4/classic/schemas.js
var _installedGroups = /* @__PURE__ */ new WeakMap();
function _installLazyMethods(inst, group, methods) {
	const proto = Object.getPrototypeOf(inst);
	let installed = _installedGroups.get(proto);
	if (!installed) {
		installed = /* @__PURE__ */ new Set();
		_installedGroups.set(proto, installed);
	}
	if (installed.has(group)) return;
	installed.add(group);
	for (const key in methods) {
		const fn = methods[key];
		Object.defineProperty(proto, key, {
			configurable: true,
			enumerable: false,
			get() {
				const bound = fn.bind(this);
				Object.defineProperty(this, key, {
					configurable: true,
					writable: true,
					enumerable: true,
					value: bound
				});
				return bound;
			},
			set(v) {
				Object.defineProperty(this, key, {
					configurable: true,
					writable: true,
					enumerable: true,
					value: v
				});
			}
		});
	}
}
var ZodType = /*@__PURE__*/ $constructor("ZodType", (inst, def) => {
	$ZodType.init(inst, def);
	Object.assign(inst["~standard"], { jsonSchema: {
		input: createStandardJSONSchemaMethod(inst, "input"),
		output: createStandardJSONSchemaMethod(inst, "output")
	} });
	inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
	inst.def = def;
	inst.type = def.type;
	Object.defineProperty(inst, "_def", { value: def });
	inst.parse = (data, params) => parse(inst, data, params, { callee: inst.parse });
	inst.safeParse = (data, params) => safeParse(inst, data, params);
	inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
	inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
	inst.spa = inst.safeParseAsync;
	inst.encode = (data, params) => encode(inst, data, params);
	inst.decode = (data, params) => decode(inst, data, params);
	inst.encodeAsync = async (data, params) => encodeAsync(inst, data, params);
	inst.decodeAsync = async (data, params) => decodeAsync(inst, data, params);
	inst.safeEncode = (data, params) => safeEncode(inst, data, params);
	inst.safeDecode = (data, params) => safeDecode(inst, data, params);
	inst.safeEncodeAsync = async (data, params) => safeEncodeAsync(inst, data, params);
	inst.safeDecodeAsync = async (data, params) => safeDecodeAsync(inst, data, params);
	_installLazyMethods(inst, "ZodType", {
		check(...chks) {
			const def = this.def;
			return this.clone(mergeDefs(def, { checks: [...def.checks ?? [], ...chks.map((ch) => typeof ch === "function" ? { _zod: {
				check: ch,
				def: { check: "custom" },
				onattach: []
			} } : ch)] }), { parent: true });
		},
		with(...chks) {
			return this.check(...chks);
		},
		clone(def, params) {
			return clone(this, def, params);
		},
		brand() {
			return this;
		},
		register(reg, meta) {
			reg.add(this, meta);
			return this;
		},
		refine(check, params) {
			return this.check(refine(check, params));
		},
		superRefine(refinement, params) {
			return this.check(superRefine(refinement, params));
		},
		overwrite(fn) {
			return this.check(/* @__PURE__ */ _overwrite(fn));
		},
		optional() {
			return optional(this);
		},
		exactOptional() {
			return exactOptional(this);
		},
		nullable() {
			return nullable(this);
		},
		nullish() {
			return optional(nullable(this));
		},
		nonoptional(params) {
			return nonoptional(this, params);
		},
		array() {
			return array(this);
		},
		or(arg) {
			return union([this, arg]);
		},
		and(arg) {
			return intersection(this, arg);
		},
		transform(tx) {
			return pipe(this, transform(tx));
		},
		default(d) {
			return _default(this, d);
		},
		prefault(d) {
			return prefault(this, d);
		},
		catch(params) {
			return _catch(this, params);
		},
		pipe(target) {
			return pipe(this, target);
		},
		readonly() {
			return readonly(this);
		},
		describe(description) {
			const cl = this.clone();
			globalRegistry.add(cl, { description });
			return cl;
		},
		meta(...args) {
			if (args.length === 0) return globalRegistry.get(this);
			const cl = this.clone();
			globalRegistry.add(cl, args[0]);
			return cl;
		},
		isOptional() {
			return this.safeParse(void 0).success;
		},
		isNullable() {
			return this.safeParse(null).success;
		},
		apply(fn) {
			return fn(this);
		}
	});
	Object.defineProperty(inst, "description", {
		get() {
			return globalRegistry.get(inst)?.description;
		},
		configurable: true
	});
	return inst;
});
/** @internal */
var _ZodString = /*@__PURE__*/ $constructor("_ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
	const bag = inst._zod.bag;
	inst.format = bag.format ?? null;
	inst.minLength = bag.minimum ?? null;
	inst.maxLength = bag.maximum ?? null;
	_installLazyMethods(inst, "_ZodString", {
		regex(...args) {
			return this.check(/* @__PURE__ */ _regex(...args));
		},
		includes(...args) {
			return this.check(/* @__PURE__ */ _includes(...args));
		},
		startsWith(...args) {
			return this.check(/* @__PURE__ */ _startsWith(...args));
		},
		endsWith(...args) {
			return this.check(/* @__PURE__ */ _endsWith(...args));
		},
		min(...args) {
			return this.check(/* @__PURE__ */ _minLength(...args));
		},
		max(...args) {
			return this.check(/* @__PURE__ */ _maxLength(...args));
		},
		length(...args) {
			return this.check(/* @__PURE__ */ _length(...args));
		},
		nonempty(...args) {
			return this.check(/* @__PURE__ */ _minLength(1, ...args));
		},
		lowercase(params) {
			return this.check(/* @__PURE__ */ _lowercase(params));
		},
		uppercase(params) {
			return this.check(/* @__PURE__ */ _uppercase(params));
		},
		trim() {
			return this.check(/* @__PURE__ */ _trim());
		},
		normalize(...args) {
			return this.check(/* @__PURE__ */ _normalize(...args));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ _toLowerCase());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ _toUpperCase());
		},
		slugify() {
			return this.check(/* @__PURE__ */ _slugify());
		}
	});
});
var ZodString = /*@__PURE__*/ $constructor("ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	_ZodString.init(inst, def);
	inst.email = (params) => inst.check(/* @__PURE__ */ _email(ZodEmail, params));
	inst.url = (params) => inst.check(/* @__PURE__ */ _url(ZodURL, params));
	inst.jwt = (params) => inst.check(/* @__PURE__ */ _jwt(ZodJWT, params));
	inst.emoji = (params) => inst.check(/* @__PURE__ */ _emoji(ZodEmoji, params));
	inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
	inst.uuid = (params) => inst.check(/* @__PURE__ */ _uuid(ZodUUID, params));
	inst.uuidv4 = (params) => inst.check(/* @__PURE__ */ _uuidv4(ZodUUID, params));
	inst.uuidv6 = (params) => inst.check(/* @__PURE__ */ _uuidv6(ZodUUID, params));
	inst.uuidv7 = (params) => inst.check(/* @__PURE__ */ _uuidv7(ZodUUID, params));
	inst.nanoid = (params) => inst.check(/* @__PURE__ */ _nanoid(ZodNanoID, params));
	inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
	inst.cuid = (params) => inst.check(/* @__PURE__ */ _cuid(ZodCUID, params));
	inst.cuid2 = (params) => inst.check(/* @__PURE__ */ _cuid2(ZodCUID2, params));
	inst.ulid = (params) => inst.check(/* @__PURE__ */ _ulid(ZodULID, params));
	inst.base64 = (params) => inst.check(/* @__PURE__ */ _base64(ZodBase64, params));
	inst.base64url = (params) => inst.check(/* @__PURE__ */ _base64url(ZodBase64URL, params));
	inst.xid = (params) => inst.check(/* @__PURE__ */ _xid(ZodXID, params));
	inst.ksuid = (params) => inst.check(/* @__PURE__ */ _ksuid(ZodKSUID, params));
	inst.ipv4 = (params) => inst.check(/* @__PURE__ */ _ipv4(ZodIPv4, params));
	inst.ipv6 = (params) => inst.check(/* @__PURE__ */ _ipv6(ZodIPv6, params));
	inst.cidrv4 = (params) => inst.check(/* @__PURE__ */ _cidrv4(ZodCIDRv4, params));
	inst.cidrv6 = (params) => inst.check(/* @__PURE__ */ _cidrv6(ZodCIDRv6, params));
	inst.e164 = (params) => inst.check(/* @__PURE__ */ _e164(ZodE164, params));
	inst.datetime = (params) => inst.check(datetime(params));
	inst.date = (params) => inst.check(date(params));
	inst.time = (params) => inst.check(time(params));
	inst.duration = (params) => inst.check(duration(params));
});
function string(params) {
	return /* @__PURE__ */ _string(ZodString, params);
}
var ZodStringFormat = /*@__PURE__*/ $constructor("ZodStringFormat", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	_ZodString.init(inst, def);
});
var ZodEmail = /*@__PURE__*/ $constructor("ZodEmail", (inst, def) => {
	$ZodEmail.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodGUID = /*@__PURE__*/ $constructor("ZodGUID", (inst, def) => {
	$ZodGUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodUUID = /*@__PURE__*/ $constructor("ZodUUID", (inst, def) => {
	$ZodUUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodURL = /*@__PURE__*/ $constructor("ZodURL", (inst, def) => {
	$ZodURL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodEmoji = /*@__PURE__*/ $constructor("ZodEmoji", (inst, def) => {
	$ZodEmoji.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodNanoID = /*@__PURE__*/ $constructor("ZodNanoID", (inst, def) => {
	$ZodNanoID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link ZodCUID2} instead.
* See https://github.com/paralleldrive/cuid.
*/
var ZodCUID = /*@__PURE__*/ $constructor("ZodCUID", (inst, def) => {
	$ZodCUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCUID2 = /*@__PURE__*/ $constructor("ZodCUID2", (inst, def) => {
	$ZodCUID2.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodULID = /*@__PURE__*/ $constructor("ZodULID", (inst, def) => {
	$ZodULID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodXID = /*@__PURE__*/ $constructor("ZodXID", (inst, def) => {
	$ZodXID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodKSUID = /*@__PURE__*/ $constructor("ZodKSUID", (inst, def) => {
	$ZodKSUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodIPv4 = /*@__PURE__*/ $constructor("ZodIPv4", (inst, def) => {
	$ZodIPv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodIPv6 = /*@__PURE__*/ $constructor("ZodIPv6", (inst, def) => {
	$ZodIPv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCIDRv4 = /*@__PURE__*/ $constructor("ZodCIDRv4", (inst, def) => {
	$ZodCIDRv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCIDRv6 = /*@__PURE__*/ $constructor("ZodCIDRv6", (inst, def) => {
	$ZodCIDRv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodBase64 = /*@__PURE__*/ $constructor("ZodBase64", (inst, def) => {
	$ZodBase64.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodBase64URL = /*@__PURE__*/ $constructor("ZodBase64URL", (inst, def) => {
	$ZodBase64URL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodE164 = /*@__PURE__*/ $constructor("ZodE164", (inst, def) => {
	$ZodE164.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodJWT = /*@__PURE__*/ $constructor("ZodJWT", (inst, def) => {
	$ZodJWT.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodUnknown = /*@__PURE__*/ $constructor("ZodUnknown", (inst, def) => {
	$ZodUnknown.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => void 0;
});
function unknown() {
	return /* @__PURE__ */ _unknown(ZodUnknown);
}
var ZodNever = /*@__PURE__*/ $constructor("ZodNever", (inst, def) => {
	$ZodNever.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
	return /* @__PURE__ */ _never(ZodNever, params);
}
var ZodArray = /*@__PURE__*/ $constructor("ZodArray", (inst, def) => {
	$ZodArray.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
	inst.element = def.element;
	_installLazyMethods(inst, "ZodArray", {
		min(n, params) {
			return this.check(/* @__PURE__ */ _minLength(n, params));
		},
		nonempty(params) {
			return this.check(/* @__PURE__ */ _minLength(1, params));
		},
		max(n, params) {
			return this.check(/* @__PURE__ */ _maxLength(n, params));
		},
		length(n, params) {
			return this.check(/* @__PURE__ */ _length(n, params));
		},
		unwrap() {
			return this.element;
		}
	});
});
function array(element, params) {
	return /* @__PURE__ */ _array(ZodArray, element, params);
}
var ZodObject = /*@__PURE__*/ $constructor("ZodObject", (inst, def) => {
	$ZodObjectJIT.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
	defineLazy(inst, "shape", () => {
		return def.shape;
	});
	_installLazyMethods(inst, "ZodObject", {
		keyof() {
			return _enum(Object.keys(this._zod.def.shape));
		},
		catchall(catchall) {
			return this.clone({
				...this._zod.def,
				catchall
			});
		},
		passthrough() {
			return this.clone({
				...this._zod.def,
				catchall: unknown()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: unknown()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: never()
			});
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(incoming) {
			return extend(this, incoming);
		},
		safeExtend(incoming) {
			return safeExtend(this, incoming);
		},
		merge(other) {
			return merge(this, other);
		},
		pick(mask) {
			return pick(this, mask);
		},
		omit(mask) {
			return omit(this, mask);
		},
		partial(...args) {
			return partial(ZodOptional, this, args[0]);
		},
		required(...args) {
			return required(ZodNonOptional, this, args[0]);
		}
	});
});
function object(shape, params) {
	return new ZodObject({
		type: "object",
		shape: shape ?? {},
		...normalizeParams(params)
	});
}
var ZodUnion = /*@__PURE__*/ $constructor("ZodUnion", (inst, def) => {
	$ZodUnion.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
	inst.options = def.options;
});
function union(options, params) {
	return new ZodUnion({
		type: "union",
		options,
		...normalizeParams(params)
	});
}
var ZodIntersection = /*@__PURE__*/ $constructor("ZodIntersection", (inst, def) => {
	$ZodIntersection.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
	return new ZodIntersection({
		type: "intersection",
		left,
		right
	});
}
var ZodEnum = /*@__PURE__*/ $constructor("ZodEnum", (inst, def) => {
	$ZodEnum.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
	inst.enum = def.entries;
	inst.options = Object.values(def.entries);
	const keys = new Set(Object.keys(def.entries));
	inst.extract = (values, params) => {
		const newEntries = {};
		for (const value of values) if (keys.has(value)) newEntries[value] = def.entries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
	inst.exclude = (values, params) => {
		const newEntries = { ...def.entries };
		for (const value of values) if (keys.has(value)) delete newEntries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
});
function _enum(values, params) {
	return new ZodEnum({
		type: "enum",
		entries: Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values,
		...normalizeParams(params)
	});
}
var ZodTransform = /*@__PURE__*/ $constructor("ZodTransform", (inst, def) => {
	$ZodTransform.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
	inst._zod.parse = (payload, _ctx) => {
		if (_ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		payload.addIssue = (issue$1) => {
			if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, def));
			else {
				const _issue = issue$1;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				_issue.input ?? (_issue.input = payload.value);
				_issue.inst ?? (_issue.inst = inst);
				payload.issues.push(issue(_issue));
			}
		};
		const output = def.transform(payload.value, payload);
		if (output instanceof Promise) return output.then((output) => {
			payload.value = output;
			payload.fallback = true;
			return payload;
		});
		payload.value = output;
		payload.fallback = true;
		return payload;
	};
});
function transform(fn) {
	return new ZodTransform({
		type: "transform",
		transform: fn
	});
}
var ZodOptional = /*@__PURE__*/ $constructor("ZodOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
	return new ZodOptional({
		type: "optional",
		innerType
	});
}
var ZodExactOptional = /*@__PURE__*/ $constructor("ZodExactOptional", (inst, def) => {
	$ZodExactOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
	return new ZodExactOptional({
		type: "optional",
		innerType
	});
}
var ZodNullable = /*@__PURE__*/ $constructor("ZodNullable", (inst, def) => {
	$ZodNullable.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
	return new ZodNullable({
		type: "nullable",
		innerType
	});
}
var ZodDefault = /*@__PURE__*/ $constructor("ZodDefault", (inst, def) => {
	$ZodDefault.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
	return new ZodDefault({
		type: "default",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
var ZodPrefault = /*@__PURE__*/ $constructor("ZodPrefault", (inst, def) => {
	$ZodPrefault.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
	return new ZodPrefault({
		type: "prefault",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
var ZodNonOptional = /*@__PURE__*/ $constructor("ZodNonOptional", (inst, def) => {
	$ZodNonOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
	return new ZodNonOptional({
		type: "nonoptional",
		innerType,
		...normalizeParams(params)
	});
}
var ZodCatch = /*@__PURE__*/ $constructor("ZodCatch", (inst, def) => {
	$ZodCatch.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
	return new ZodCatch({
		type: "catch",
		innerType,
		catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
	});
}
var ZodPipe = /*@__PURE__*/ $constructor("ZodPipe", (inst, def) => {
	$ZodPipe.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
	inst.in = def.in;
	inst.out = def.out;
});
function pipe(in_, out) {
	return new ZodPipe({
		type: "pipe",
		in: in_,
		out
	});
}
var ZodReadonly = /*@__PURE__*/ $constructor("ZodReadonly", (inst, def) => {
	$ZodReadonly.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
	return new ZodReadonly({
		type: "readonly",
		innerType
	});
}
var ZodCustom = /*@__PURE__*/ $constructor("ZodCustom", (inst, def) => {
	$ZodCustom.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function refine(fn, _params = {}) {
	return /* @__PURE__ */ _refine(ZodCustom, fn, _params);
}
function superRefine(fn, params) {
	return /* @__PURE__ */ _superRefine(fn, params);
}
//#endregion
//#region src/components/ui/label.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		"data-slot": "label",
		className: cn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
		...props
	});
}
//#endregion
//#region src/components/ui/field.tsx
function FieldGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "field-group",
		className: cn("group/field-group @container/field-group flex w-full flex-col gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4", className),
		...props
	});
}
var fieldVariants = cva("group/field flex w-full gap-2 data-[invalid=true]:text-destructive", {
	variants: { orientation: {
		vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
		horizontal: "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
});
function Field$1({ className, orientation = "vertical", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "group",
		"data-slot": "field",
		"data-orientation": orientation,
		className: cn(fieldVariants({ orientation }), className),
		...props
	});
}
function FieldLabel({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
		"data-slot": "field-label",
		className: cn("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col", className),
		...props
	});
}
function FieldDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		"data-slot": "field-description",
		className: cn("text-left text-sm leading-normal font-normal text-muted-foreground group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5", "last:mt-0 nth-last-2:-mt-1", "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", className),
		...props
	});
}
//#endregion
//#region node_modules/@base-ui/react/field/control/FieldControlDataAttributes.mjs
var FieldControlDataAttributes = /*#__PURE__*/ function(FieldControlDataAttributes) {
	/**
	* Present when the field is disabled.
	*/
	FieldControlDataAttributes["disabled"] = "data-disabled";
	/**
	* Present when the field is in a valid state.
	*/
	FieldControlDataAttributes["valid"] = "data-valid";
	/**
	* Present when the field is in an invalid state.
	*/
	FieldControlDataAttributes["invalid"] = "data-invalid";
	/**
	* Present when the field has been touched.
	*/
	FieldControlDataAttributes["touched"] = "data-touched";
	/**
	* Present when the field's value has changed.
	*/
	FieldControlDataAttributes["dirty"] = "data-dirty";
	/**
	* Present when the field is filled.
	*/
	FieldControlDataAttributes["filled"] = "data-filled";
	/**
	* Present when the field control is focused.
	*/
	FieldControlDataAttributes["focused"] = "data-focused";
	return FieldControlDataAttributes;
}({});
//#endregion
//#region node_modules/@base-ui/react/internals/field-constants/constants.mjs
var DEFAULT_VALIDITY_STATE = {
	badInput: false,
	customError: false,
	patternMismatch: false,
	rangeOverflow: false,
	rangeUnderflow: false,
	stepMismatch: false,
	tooLong: false,
	tooShort: false,
	typeMismatch: false,
	valid: null,
	valueMissing: false
};
var DEFAULT_FIELD_STATE_ATTRIBUTES = {
	valid: null,
	touched: false,
	dirty: false,
	filled: false,
	focused: false
};
var DEFAULT_FIELD_ROOT_STATE = {
	disabled: false,
	...DEFAULT_FIELD_STATE_ATTRIBUTES
};
var fieldValidityMapping = { valid(value) {
	if (value === null) return null;
	if (value) return { [FieldControlDataAttributes.valid]: "" };
	return { [FieldControlDataAttributes.invalid]: "" };
} };
//#endregion
//#region node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
var DEFAULT_FIELD_ROOT_CONTEXT = {
	invalid: void 0,
	name: void 0,
	validityData: {
		state: DEFAULT_VALIDITY_STATE,
		errors: [],
		error: "",
		value: "",
		initialValue: null
	},
	setValidityData: NOOP,
	disabled: void 0,
	touched: DEFAULT_FIELD_STATE_ATTRIBUTES.touched,
	setTouched: NOOP,
	dirty: DEFAULT_FIELD_STATE_ATTRIBUTES.dirty,
	setDirty: NOOP,
	filled: DEFAULT_FIELD_STATE_ATTRIBUTES.filled,
	setFilled: NOOP,
	focused: DEFAULT_FIELD_STATE_ATTRIBUTES.focused,
	setFocused: NOOP,
	validate: () => null,
	validationMode: "onSubmit",
	validationDebounceTime: 0,
	shouldValidateOnChange: () => false,
	state: DEFAULT_FIELD_ROOT_STATE,
	markedDirtyRef: { current: false },
	registerFieldControl: NOOP,
	validation: {
		getValidationProps: (_disabled, props = EMPTY_OBJECT) => props,
		inputRef: { current: null },
		registerInput: NOOP,
		commit: async () => {},
		change: NOOP
	}
};
var FieldRootContext = /*#__PURE__*/ import_react.createContext(DEFAULT_FIELD_ROOT_CONTEXT);
function useFieldRootContext(optional = true) {
	const context = import_react.useContext(FieldRootContext);
	if (context.setValidityData === NOOP && !optional) throw new Error(formatErrorMessage(28));
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/internals/form-context/FormContext.mjs
var FormContext = /*#__PURE__*/ import_react.createContext({
	formRef: { current: { fields: /* @__PURE__ */ new Map() } },
	errors: {},
	clearErrors: NOOP,
	validationMode: "onSubmit",
	submitAttemptedRef: { current: false }
});
function useFormContext() {
	return import_react.useContext(FormContext);
}
//#endregion
//#region node_modules/@base-ui/react/internals/labelable-provider/LabelableContext.mjs
/**
* A context for providing [labelable elements](https://html.spec.whatwg.org/multipage/forms.html#category-label)\
* with an accessible name (label) and description.
*/
var LabelableContext = /*#__PURE__*/ import_react.createContext({
	controlId: void 0,
	registerControlId: NOOP,
	labelId: void 0,
	setLabelId: NOOP,
	messageIds: [],
	setMessageIds: NOOP,
	getDescriptionProps: (externalProps) => externalProps
});
function useLabelableContext() {
	return import_react.useContext(LabelableContext);
}
//#endregion
//#region node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
function useLabelableId(params = {}) {
	const { id, implicit = false, controlRef } = params;
	const { controlId, registerControlId } = useLabelableContext();
	const defaultId = useBaseUiId(id);
	const controlIdForEffect = implicit ? controlId : void 0;
	const controlSourceRef = useRefWithInit(() => Symbol("labelable-control"));
	const hasRegisteredRef = import_react.useRef(false);
	const hadExplicitIdRef = import_react.useRef(id != null);
	const unregisterControlId = useStableCallback(() => {
		if (!hasRegisteredRef.current || registerControlId === NOOP) return;
		hasRegisteredRef.current = false;
		registerControlId(controlSourceRef.current, void 0);
	});
	useIsoLayoutEffect(() => {
		if (registerControlId === NOOP) return;
		let nextId;
		if (implicit) {
			const elem = controlRef?.current;
			if (isElement(elem) && elem.closest("label") != null) nextId = id ?? null;
			else nextId = controlIdForEffect ?? defaultId;
		} else if (id != null) {
			hadExplicitIdRef.current = true;
			nextId = id;
		} else if (hadExplicitIdRef.current) nextId = defaultId;
		else {
			unregisterControlId();
			return;
		}
		if (nextId === void 0) {
			unregisterControlId();
			return;
		}
		hasRegisteredRef.current = true;
		registerControlId(controlSourceRef.current, nextId);
	}, [
		id,
		controlRef,
		controlIdForEffect,
		registerControlId,
		implicit,
		defaultId,
		controlSourceRef,
		unregisterControlId
	]);
	import_react.useEffect(() => {
		return unregisterControlId;
	}, [unregisterControlId]);
	return controlId ?? defaultId;
}
//#endregion
//#region node_modules/@base-ui/react/internals/shadowDom.mjs
function activeElement(doc) {
	let element = doc.activeElement;
	while (element?.shadowRoot?.activeElement != null) element = element.shadowRoot.activeElement;
	return element;
}
//#endregion
//#region node_modules/@base-ui/react/internals/field-register-control/useRegisterFieldControl.mjs
function useRegisterFieldControl(controlRef, id, value, getFormValueOverride, enabled = true, name) {
	const { registerFieldControl } = useFieldRootContext();
	const sourceRef = import_react.useRef(null);
	if (!sourceRef.current) sourceRef.current = Symbol();
	useIsoLayoutEffect(() => {
		const source = sourceRef.current;
		if (!source || !enabled) return;
		registerFieldControl(source, {
			controlRef,
			getValue: getFormValueOverride,
			id,
			name,
			value
		});
		return () => {
			registerFieldControl(source, void 0);
		};
	}, [
		controlRef,
		enabled,
		getFormValueOverride,
		id,
		name,
		registerFieldControl,
		value
	]);
}
//#endregion
//#region node_modules/@base-ui/react/field/control/FieldControl.mjs
/**
* The form control to label and validate.
* Renders an `<input>` element.
*
* You can omit this part and use any Base UI input component instead. For example,
* [Input](https://base-ui.com/react/components/input), [Checkbox](https://base-ui.com/react/components/checkbox),
* or [Select](https://base-ui.com/react/components/select), among others, will work with Field out of the box.
*
* Documentation: [Base UI Field](https://base-ui.com/react/components/field)
*/
var FieldControl = /*#__PURE__*/ import_react.forwardRef(function FieldControl(componentProps, forwardedRef) {
	const { render, className, id: idProp, name: nameProp, value: valueProp, disabled: disabledProp = false, onValueChange, defaultValue, autoFocus = false, style, ...elementProps } = componentProps;
	const { state: fieldState, name: fieldName, disabled: fieldDisabled, setTouched, setDirty, validityData, setFocused, setFilled, validationMode, validation } = useFieldRootContext();
	const { clearErrors } = useFormContext();
	const disabled = fieldDisabled || disabledProp;
	const name = fieldName ?? nameProp;
	const state = {
		...fieldState,
		disabled
	};
	const { labelId } = useLabelableContext();
	const id = useLabelableId({ id: idProp });
	useIsoLayoutEffect(() => {
		const hasExternalValue = valueProp != null;
		if (validation.inputRef.current?.value || hasExternalValue && valueProp !== "") setFilled(true);
		else if (hasExternalValue && valueProp === "") setFilled(false);
	}, [
		validation.inputRef,
		setFilled,
		valueProp
	]);
	const inputRef = import_react.useRef(null);
	useIsoLayoutEffect(() => {
		if (autoFocus && inputRef.current === activeElement(ownerDocument(inputRef.current))) setFocused(true);
	}, [autoFocus, setFocused]);
	const [valueUnwrapped] = useControlled({
		controlled: valueProp,
		default: defaultValue,
		name: "FieldControl",
		state: "value"
	});
	const isControlled = valueProp !== void 0;
	const value = isControlled ? valueUnwrapped : void 0;
	const getValueFromInput = useStableCallback(() => validation.inputRef.current?.value);
	useRegisterFieldControl(validation.inputRef, id, value, getValueFromInput, !disabled, nameProp);
	return useRenderElement("input", componentProps, {
		ref: [forwardedRef, inputRef],
		state,
		props: [
			{
				id,
				disabled,
				name,
				ref: validation.inputRef,
				"aria-labelledby": labelId,
				autoFocus,
				...isControlled ? { value } : { defaultValue },
				onChange(event) {
					const inputValue = event.currentTarget.value;
					onValueChange?.(inputValue, createChangeEventDetails(none, event.nativeEvent));
					setDirty(inputValue !== validityData.initialValue);
					setFilled(inputValue !== "");
					if (!event.nativeEvent.defaultPrevented) {
						clearErrors(name);
						validation.change(inputValue);
					}
				},
				onFocus() {
					setFocused(true);
				},
				onBlur(event) {
					setTouched(true);
					setFocused(false);
					if (validationMode === "onBlur") validation.commit(event.currentTarget.value);
				},
				onKeyDown(event) {
					if (event.currentTarget.tagName === "INPUT" && event.key === "Enter") {
						setTouched(true);
						validation.commit(event.currentTarget.value);
					}
				}
			},
			elementProps,
			(props) => validation.getValidationProps(disabled, props)
		],
		stateAttributesMapping: fieldValidityMapping
	});
});
//#endregion
//#region node_modules/@base-ui/react/input/Input.mjs
/**
* A native input element that automatically works with [Field](https://base-ui.com/react/components/field).
* Renders an `<input>` element.
*
* Documentation: [Base UI Input](https://base-ui.com/react/components/input)
*/
var Input$1 = /*#__PURE__*/ import_react.forwardRef(function Input(props, forwardedRef) {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FieldControl, {
		ref: forwardedRef,
		...props
	});
});
//#endregion
//#region src/components/ui/input.tsx
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
		type,
		"data-slot": "input",
		className: cn("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
//#endregion
//#region src/components/blocks/ContactSection.tsx
function ContactSection({ config, headline = "Get in touch" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-8 px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-bold tracking-tight",
				children: headline
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: config.phone
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: config.email
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: config.address
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Hours"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: config.hours
								})]
							})]
						})
					]
				})
			})]
		})
	});
}
//#endregion
//#region node_modules/@tanstack/store/dist/alien.js
var ReactiveFlags = /* @__PURE__ */ function(ReactiveFlags) {
	ReactiveFlags[ReactiveFlags["None"] = 0] = "None";
	ReactiveFlags[ReactiveFlags["Mutable"] = 1] = "Mutable";
	ReactiveFlags[ReactiveFlags["Watching"] = 2] = "Watching";
	ReactiveFlags[ReactiveFlags["RecursedCheck"] = 4] = "RecursedCheck";
	ReactiveFlags[ReactiveFlags["Recursed"] = 8] = "Recursed";
	ReactiveFlags[ReactiveFlags["Dirty"] = 16] = "Dirty";
	ReactiveFlags[ReactiveFlags["Pending"] = 32] = "Pending";
	return ReactiveFlags;
}({});
/* @__NO_SIDE_EFFECTS__ */
function createReactiveSystem({ update, notify, unwatched }) {
	return {
		link,
		unlink,
		propagate,
		checkDirty,
		shallowPropagate
	};
	function link(dep, sub, version) {
		const prevDep = sub.depsTail;
		if (prevDep !== void 0 && prevDep.dep === dep) return;
		const nextDep = prevDep !== void 0 ? prevDep.nextDep : sub.deps;
		if (nextDep !== void 0 && nextDep.dep === dep) {
			nextDep.version = version;
			sub.depsTail = nextDep;
			return;
		}
		const prevSub = dep.subsTail;
		if (prevSub !== void 0 && prevSub.version === version && prevSub.sub === sub) return;
		const newLink = sub.depsTail = dep.subsTail = {
			version,
			dep,
			sub,
			prevDep,
			nextDep,
			prevSub,
			nextSub: void 0
		};
		if (nextDep !== void 0) nextDep.prevDep = newLink;
		if (prevDep !== void 0) prevDep.nextDep = newLink;
		else sub.deps = newLink;
		if (prevSub !== void 0) prevSub.nextSub = newLink;
		else dep.subs = newLink;
	}
	function unlink(link, sub = link.sub) {
		const dep = link.dep;
		const prevDep = link.prevDep;
		const nextDep = link.nextDep;
		const nextSub = link.nextSub;
		const prevSub = link.prevSub;
		if (nextDep !== void 0) nextDep.prevDep = prevDep;
		else sub.depsTail = prevDep;
		if (prevDep !== void 0) prevDep.nextDep = nextDep;
		else sub.deps = nextDep;
		if (nextSub !== void 0) nextSub.prevSub = prevSub;
		else dep.subsTail = prevSub;
		if (prevSub !== void 0) prevSub.nextSub = nextSub;
		else if ((dep.subs = nextSub) === void 0) unwatched(dep);
		return nextDep;
	}
	function propagate(link) {
		let next = link.nextSub;
		let stack;
		top: do {
			const sub = link.sub;
			let flags = sub.flags;
			if (!(flags & (ReactiveFlags.RecursedCheck | ReactiveFlags.Recursed | ReactiveFlags.Dirty | ReactiveFlags.Pending))) sub.flags = flags | ReactiveFlags.Pending;
			else if (!(flags & (ReactiveFlags.RecursedCheck | ReactiveFlags.Recursed))) flags = ReactiveFlags.None;
			else if (!(flags & ReactiveFlags.RecursedCheck)) sub.flags = flags & ~ReactiveFlags.Recursed | ReactiveFlags.Pending;
			else if (!(flags & (ReactiveFlags.Dirty | ReactiveFlags.Pending)) && isValidLink(link, sub)) {
				sub.flags = flags | (ReactiveFlags.Recursed | ReactiveFlags.Pending);
				flags &= ReactiveFlags.Mutable;
			} else flags = ReactiveFlags.None;
			if (flags & ReactiveFlags.Watching) notify(sub);
			if (flags & ReactiveFlags.Mutable) {
				const subSubs = sub.subs;
				if (subSubs !== void 0) {
					const nextSub = (link = subSubs).nextSub;
					if (nextSub !== void 0) {
						stack = {
							value: next,
							prev: stack
						};
						next = nextSub;
					}
					continue;
				}
			}
			if ((link = next) !== void 0) {
				next = link.nextSub;
				continue;
			}
			while (stack !== void 0) {
				link = stack.value;
				stack = stack.prev;
				if (link !== void 0) {
					next = link.nextSub;
					continue top;
				}
			}
			break;
		} while (true);
	}
	function checkDirty(link, sub) {
		let stack;
		let checkDepth = 0;
		let dirty = false;
		top: do {
			const dep = link.dep;
			const flags = dep.flags;
			if (sub.flags & ReactiveFlags.Dirty) dirty = true;
			else if ((flags & (ReactiveFlags.Mutable | ReactiveFlags.Dirty)) === (ReactiveFlags.Mutable | ReactiveFlags.Dirty)) {
				if (update(dep)) {
					const subs = dep.subs;
					if (subs.nextSub !== void 0) shallowPropagate(subs);
					dirty = true;
				}
			} else if ((flags & (ReactiveFlags.Mutable | ReactiveFlags.Pending)) === (ReactiveFlags.Mutable | ReactiveFlags.Pending)) {
				if (link.nextSub !== void 0 || link.prevSub !== void 0) stack = {
					value: link,
					prev: stack
				};
				link = dep.deps;
				sub = dep;
				++checkDepth;
				continue;
			}
			if (!dirty) {
				const nextDep = link.nextDep;
				if (nextDep !== void 0) {
					link = nextDep;
					continue;
				}
			}
			while (checkDepth--) {
				const firstSub = sub.subs;
				const hasMultipleSubs = firstSub.nextSub !== void 0;
				if (hasMultipleSubs) {
					link = stack.value;
					stack = stack.prev;
				} else link = firstSub;
				if (dirty) {
					if (update(sub)) {
						if (hasMultipleSubs) shallowPropagate(firstSub);
						sub = link.sub;
						continue;
					}
					dirty = false;
				} else sub.flags &= ~ReactiveFlags.Pending;
				sub = link.sub;
				const nextDep = link.nextDep;
				if (nextDep !== void 0) {
					link = nextDep;
					continue top;
				}
			}
			return dirty;
		} while (true);
	}
	function shallowPropagate(link) {
		do {
			const sub = link.sub;
			const flags = sub.flags;
			if ((flags & (ReactiveFlags.Pending | ReactiveFlags.Dirty)) === ReactiveFlags.Pending) {
				sub.flags = flags | ReactiveFlags.Dirty;
				if ((flags & (ReactiveFlags.Watching | ReactiveFlags.RecursedCheck)) === ReactiveFlags.Watching) notify(sub);
			}
		} while ((link = link.nextSub) !== void 0);
	}
	function isValidLink(checkLink, sub) {
		let link = sub.depsTail;
		while (link !== void 0) {
			if (link === checkLink) return true;
			link = link.prevDep;
		}
		return false;
	}
}
//#endregion
//#region node_modules/@tanstack/store/dist/atom.js
function toObserver(nextHandler, errorHandler, completionHandler) {
	const isObserver = typeof nextHandler === "object";
	const self = isObserver ? nextHandler : void 0;
	return {
		next: (isObserver ? nextHandler.next : nextHandler)?.bind(self),
		error: (isObserver ? nextHandler.error : errorHandler)?.bind(self),
		complete: (isObserver ? nextHandler.complete : completionHandler)?.bind(self)
	};
}
var queuedEffects = [];
var cycle = 0;
var { link, unlink, propagate, checkDirty, shallowPropagate } = /* @__PURE__ */ createReactiveSystem({
	update(atom) {
		return atom._update();
	},
	notify(effect) {
		queuedEffects[queuedEffectsLength++] = effect;
		effect.flags &= ~ReactiveFlags.Watching;
	},
	unwatched(atom) {
		if (atom.depsTail !== void 0) {
			atom.depsTail = void 0;
			atom.flags = ReactiveFlags.Mutable | ReactiveFlags.Dirty;
			purgeDeps(atom);
		}
	}
});
var notifyIndex = 0;
var queuedEffectsLength = 0;
var activeSub;
var batchDepth = 0;
function batch(fn) {
	try {
		++batchDepth;
		fn();
	} finally {
		if (!--batchDepth) flush();
	}
}
function purgeDeps(sub) {
	const depsTail = sub.depsTail;
	let dep = depsTail !== void 0 ? depsTail.nextDep : sub.deps;
	while (dep !== void 0) dep = unlink(dep, sub);
}
function flush() {
	if (batchDepth > 0) return;
	while (notifyIndex < queuedEffectsLength) {
		const effect = queuedEffects[notifyIndex];
		queuedEffects[notifyIndex++] = void 0;
		effect.notify();
	}
	notifyIndex = 0;
	queuedEffectsLength = 0;
}
function createAtom(valueOrFn, options) {
	const isComputed = typeof valueOrFn === "function";
	const getter = valueOrFn;
	const atom = {
		_snapshot: isComputed ? void 0 : valueOrFn,
		subs: void 0,
		subsTail: void 0,
		deps: void 0,
		depsTail: void 0,
		flags: isComputed ? ReactiveFlags.None : ReactiveFlags.Mutable,
		get() {
			if (activeSub !== void 0) link(atom, activeSub, cycle);
			return atom._snapshot;
		},
		subscribe(observerOrFn) {
			const obs = toObserver(observerOrFn);
			const observed = { current: false };
			const e = effect(() => {
				atom.get();
				if (!observed.current) observed.current = true;
				else obs.next?.(atom._snapshot);
			});
			return { unsubscribe: () => {
				e.stop();
			} };
		},
		_update(getValue) {
			const prevSub = activeSub;
			const compare = options?.compare ?? Object.is;
			if (isComputed) {
				activeSub = atom;
				++cycle;
				atom.depsTail = void 0;
			} else if (getValue === void 0) return false;
			if (isComputed) atom.flags = ReactiveFlags.Mutable | ReactiveFlags.RecursedCheck;
			try {
				const oldValue = atom._snapshot;
				const newValue = typeof getValue === "function" ? getValue(oldValue) : getValue === void 0 && isComputed ? getter(oldValue) : getValue;
				if (oldValue === void 0 || !compare(oldValue, newValue)) {
					atom._snapshot = newValue;
					return true;
				}
				return false;
			} finally {
				activeSub = prevSub;
				if (isComputed) atom.flags &= ~ReactiveFlags.RecursedCheck;
				purgeDeps(atom);
			}
		}
	};
	if (isComputed) {
		atom.flags = ReactiveFlags.Mutable | ReactiveFlags.Dirty;
		atom.get = function() {
			const flags = atom.flags;
			if (flags & ReactiveFlags.Dirty || flags & ReactiveFlags.Pending && checkDirty(atom.deps, atom)) {
				if (atom._update()) {
					const subs = atom.subs;
					if (subs !== void 0) shallowPropagate(subs);
				}
			} else if (flags & ReactiveFlags.Pending) atom.flags = flags & ~ReactiveFlags.Pending;
			if (activeSub !== void 0) link(atom, activeSub, cycle);
			return atom._snapshot;
		};
	} else atom.set = function(valueOrFn) {
		if (atom._update(valueOrFn)) {
			const subs = atom.subs;
			if (subs !== void 0) {
				propagate(subs);
				shallowPropagate(subs);
				flush();
			}
		}
	};
	return atom;
}
function effect(fn) {
	const run = () => {
		const prevSub = activeSub;
		activeSub = effectObj;
		++cycle;
		effectObj.depsTail = void 0;
		effectObj.flags = ReactiveFlags.Watching | ReactiveFlags.RecursedCheck;
		try {
			return fn();
		} finally {
			activeSub = prevSub;
			effectObj.flags &= ~ReactiveFlags.RecursedCheck;
			purgeDeps(effectObj);
		}
	};
	const effectObj = {
		deps: void 0,
		depsTail: void 0,
		subs: void 0,
		subsTail: void 0,
		flags: ReactiveFlags.Watching | ReactiveFlags.RecursedCheck,
		notify() {
			const flags = this.flags;
			if (flags & ReactiveFlags.Dirty || flags & ReactiveFlags.Pending && checkDirty(this.deps, this)) run();
			else this.flags = ReactiveFlags.Watching;
		},
		stop() {
			this.flags = ReactiveFlags.None;
			this.depsTail = void 0;
			purgeDeps(this);
		}
	};
	run();
	return effectObj;
}
//#endregion
//#region node_modules/@tanstack/store/dist/store.js
var Store = class {
	constructor(valueOrFn, actionsFactory) {
		this.atom = createAtom(valueOrFn);
		this.get = this.get.bind(this);
		this.setState = this.setState.bind(this);
		this.subscribe = this.subscribe.bind(this);
		if (actionsFactory) this.actions = actionsFactory(this);
	}
	setState(updater) {
		this.atom.set(updater);
	}
	get state() {
		return this.atom.get();
	}
	get() {
		return this.state;
	}
	subscribe(observerOrFn) {
		return this.atom.subscribe(toObserver(observerOrFn));
	}
};
var ReadonlyStore = class {
	constructor(valueOrFn) {
		this.atom = createAtom(valueOrFn);
	}
	get state() {
		return this.atom.get();
	}
	get() {
		return this.state;
	}
	subscribe(observerOrFn) {
		return this.atom.subscribe(toObserver(observerOrFn));
	}
};
function createStore(valueOrFn, actions) {
	if (typeof valueOrFn === "function") return new ReadonlyStore(valueOrFn);
	if (actions) return new Store(valueOrFn, actions);
	return new Store(valueOrFn);
}
//#endregion
//#region node_modules/@tanstack/pacer-lite/dist/lite-throttler.js
/**
* A lightweight class that creates a throttled function.
*
* This is an alternative to the Throttler in the core @tanstack/pacer package, but is more
* suitable for libraries and npm packages that need minimal overhead. Unlike the core Throttler,
* this version does not use TanStack Store for state management, has no devtools integration,
* and provides only essential throttling functionality.
*
* Throttling ensures a function is called at most once within a specified time window.
* Unlike debouncing which waits for a pause in calls, throttling guarantees consistent
* execution timing regardless of call frequency.
*
* Supports both leading and trailing edge execution:
* - Leading: Execute immediately on first call (default: true)
* - Trailing: Execute after wait period if called during throttle (default: true)
*
* Features:
* - Zero dependencies - no external libraries required
* - Minimal API surface - only essential methods (maybeExecute, flush, cancel)
* - Simple state management - uses basic private properties instead of reactive stores
* - Callback support for monitoring execution events
* - Lightweight - designed for use in npm packages where bundle size matters
*
* @example
* ```ts
* const throttler = new LiteThrottler((scrollY: number) => {
*   updateScrollPosition(scrollY);
* }, {
*   wait: 100,
*   onExecute: (args, throttler) => {
*     console.log('Updated scroll position:', args[0]);
*   }
* });
*
* // Will execute at most once per 100ms
* window.addEventListener('scroll', () => {
*   throttler.maybeExecute(window.scrollY);
* });
* ```
*/
var LiteThrottler = class {
	constructor(fn, options) {
		this.fn = fn;
		this.options = options;
		this.lastExecutionTime = 0;
		this.isPending = false;
		this.maybeExecute = (...args) => {
			const timeSinceLastExecution = Date.now() - this.lastExecutionTime;
			if (this.options.leading && timeSinceLastExecution >= this.options.wait) this.execute(...args);
			else {
				this.lastArgs = args;
				if (!this.timeoutId && this.options.trailing) {
					const timeoutDuration = this.options.wait - timeSinceLastExecution;
					this.isPending = true;
					this.timeoutId = setTimeout(() => {
						if (this.lastArgs !== void 0) this.execute(...this.lastArgs);
					}, timeoutDuration);
				}
			}
		};
		this.execute = (...args) => {
			this.fn(...args);
			this.options.onExecute?.(args, this);
			this.lastExecutionTime = Date.now();
			this.clearTimeout();
			this.lastArgs = void 0;
			this.isPending = false;
		};
		this.flush = () => {
			if (this.isPending && this.lastArgs) this.execute(...this.lastArgs);
		};
		this.cancel = () => {
			this.clearTimeout();
			this.lastArgs = void 0;
			this.isPending = false;
		};
		this.clearTimeout = () => {
			if (this.timeoutId) {
				clearTimeout(this.timeoutId);
				this.timeoutId = void 0;
			}
		};
		if (this.options.leading === void 0 && this.options.trailing === void 0) {
			this.options.leading = true;
			this.options.trailing = true;
		}
	}
};
/**
* Creates a lightweight throttled function that limits how often the provided function can execute.
*
* This is an alternative to the throttle function in the core @tanstack/pacer package, but is more
* suitable for libraries and npm packages that need minimal overhead. Unlike the core version,
* this function creates a throttler with no external dependencies, devtools integration, or reactive state.
*
* Throttling ensures a function executes at most once within a specified time window,
* regardless of how many times it is called. This is useful for rate-limiting
* expensive operations or UI updates.
*
* @example
* ```ts
* const throttledScroll = liteThrottle(() => {
*   updateScrollIndicator();
* }, { wait: 100 });
*
* // Will execute at most once per 100ms
* window.addEventListener('scroll', throttledScroll);
* ```
*
* @example
* ```ts
* // Leading edge execution - fires immediately then throttles
* const throttledResize = liteThrottle(() => {
*   recalculateLayout();
* }, { wait: 250, leading: true, trailing: false });
* ```
*/
function liteThrottle(fn, options) {
	return new LiteThrottler(fn, options).maybeExecute;
}
//#endregion
//#region node_modules/@tanstack/devtools-event-client/dist/esm/plugin.js
var EventClient = class {
	#enabled = true;
	#pluginId;
	#eventTarget;
	#debug;
	#queuedEvents;
	#connected;
	#connectIntervalId;
	#connectEveryMs;
	#retryCount = 0;
	#maxRetries = 5;
	#connecting = false;
	#failedToConnect = false;
	#internalEventTarget = null;
	#onConnected = () => {
		this.debugLog("Connected to event bus");
		this.#connected = true;
		this.#connecting = false;
		this.debugLog("Emitting queued events", this.#queuedEvents);
		this.#queuedEvents.forEach((event) => this.emitEventToBus(event));
		this.#queuedEvents = [];
		this.stopConnectLoop();
		this.#eventTarget().removeEventListener("tanstack-connect-success", this.#onConnected);
	};
	#retryConnection = () => {
		if (this.#retryCount < this.#maxRetries) {
			this.#retryCount++;
			this.dispatchCustomEvent("tanstack-connect", {});
			return;
		}
		this.#eventTarget().removeEventListener("tanstack-connect", this.#retryConnection);
		this.#failedToConnect = true;
		this.debugLog("Max retries reached, giving up on connection");
		this.stopConnectLoop();
	};
	#connectFunction = () => {
		if (this.#connecting) return;
		this.#connecting = true;
		this.#eventTarget().addEventListener("tanstack-connect-success", this.#onConnected);
		this.#retryConnection();
	};
	constructor({ pluginId, debug = false, enabled = true, reconnectEveryMs = 300 }) {
		this.#pluginId = pluginId;
		this.#enabled = enabled;
		this.#eventTarget = this.getGlobalTarget;
		this.#debug = debug;
		this.debugLog(" Initializing event subscription for plugin", this.#pluginId);
		this.#queuedEvents = [];
		this.#connected = false;
		this.#failedToConnect = false;
		this.#connectIntervalId = null;
		this.#connectEveryMs = reconnectEveryMs;
	}
	startConnectLoop() {
		if (this.#connectIntervalId !== null || this.#connected) return;
		this.debugLog(`Starting connect loop (every ${this.#connectEveryMs}ms)`);
		this.#connectIntervalId = setInterval(this.#retryConnection, this.#connectEveryMs);
	}
	stopConnectLoop() {
		this.#connecting = false;
		if (this.#connectIntervalId === null) return;
		clearInterval(this.#connectIntervalId);
		this.#connectIntervalId = null;
		this.#queuedEvents = [];
		this.debugLog("Stopped connect loop");
	}
	debugLog(...args) {
		if (this.#debug) console.log(`🌴 [tanstack-devtools:${this.#pluginId}-plugin]`, ...args);
	}
	getGlobalTarget() {
		if (typeof globalThis !== "undefined" && globalThis.__TANSTACK_EVENT_TARGET__) {
			this.debugLog("Using global event target");
			return globalThis.__TANSTACK_EVENT_TARGET__;
		}
		if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
			this.debugLog("Using window as event target");
			return window;
		}
		const eventTarget = typeof EventTarget !== "undefined" ? new EventTarget() : void 0;
		if (typeof eventTarget === "undefined" || typeof eventTarget.addEventListener === "undefined") {
			this.debugLog("No event mechanism available, running in non-web environment");
			return {
				addEventListener: () => {},
				removeEventListener: () => {},
				dispatchEvent: () => false
			};
		}
		this.debugLog("Using new EventTarget as fallback");
		return eventTarget;
	}
	getPluginId() {
		return this.#pluginId;
	}
	dispatchCustomEventShim(eventName, detail) {
		try {
			const event = new Event(eventName, { detail });
			this.#eventTarget().dispatchEvent(event);
		} catch (e) {
			this.debugLog("Failed to dispatch shim event");
		}
	}
	dispatchCustomEvent(eventName, detail) {
		try {
			this.#eventTarget().dispatchEvent(new CustomEvent(eventName, { detail }));
		} catch (e) {
			this.dispatchCustomEventShim(eventName, detail);
		}
	}
	emitEventToBus(event) {
		this.debugLog("Emitting event to client bus", event);
		this.dispatchCustomEvent("tanstack-dispatch-event", event);
	}
	createEventPayload(eventSuffix, payload) {
		return {
			type: `${this.#pluginId}:${eventSuffix}`,
			payload,
			pluginId: this.#pluginId
		};
	}
	emit(eventSuffix, payload) {
		if (!this.#enabled) {
			this.debugLog("Event bus client is disabled, not emitting event", eventSuffix, payload);
			return;
		}
		if (this.#internalEventTarget) {
			this.debugLog("Emitting event to internal event target", eventSuffix, payload);
			this.#internalEventTarget.dispatchEvent(new CustomEvent(`${this.#pluginId}:${eventSuffix}`, { detail: this.createEventPayload(eventSuffix, payload) }));
		}
		if (this.#failedToConnect) {
			this.debugLog("Previously failed to connect, not emitting to bus");
			return;
		}
		if (!this.#connected) {
			this.debugLog("Bus not available, will be pushed as soon as connected");
			this.#queuedEvents.push(this.createEventPayload(eventSuffix, payload));
			if (typeof CustomEvent !== "undefined" && !this.#connecting) {
				this.#connectFunction();
				this.startConnectLoop();
			}
			return;
		}
		return this.emitEventToBus(this.createEventPayload(eventSuffix, payload));
	}
	on(eventSuffix, cb, options) {
		const withEventTarget = options?.withEventTarget ?? false;
		const eventName = `${this.#pluginId}:${eventSuffix}`;
		if (withEventTarget) {
			if (!this.#internalEventTarget) this.#internalEventTarget = new EventTarget();
			this.#internalEventTarget.addEventListener(eventName, (e) => {
				cb(e.detail);
			});
		}
		if (!this.#enabled) {
			this.debugLog("Event bus client is disabled, not registering event", eventName);
			return () => {};
		}
		const handler = (e) => {
			this.debugLog("Received event from bus", e.detail);
			cb(e.detail);
		};
		this.#eventTarget().addEventListener(eventName, handler);
		this.debugLog("Registered event to bus", eventName);
		return () => {
			if (withEventTarget) this.#internalEventTarget?.removeEventListener(eventName, handler);
			this.#eventTarget().removeEventListener(eventName, handler);
		};
	}
	onAll(cb) {
		if (!this.#enabled) {
			this.debugLog("Event bus client is disabled, not registering event");
			return () => {};
		}
		const handler = (e) => {
			const event = e.detail;
			cb(event);
		};
		this.#eventTarget().addEventListener("tanstack-devtools-global", handler);
		return () => this.#eventTarget().removeEventListener("tanstack-devtools-global", handler);
	}
	onAllPluginEvents(cb) {
		if (!this.#enabled) {
			this.debugLog("Event bus client is disabled, not registering event");
			return () => {};
		}
		const handler = (e) => {
			const event = e.detail;
			if (this.#pluginId && event.pluginId !== this.#pluginId) return;
			cb(event);
		};
		this.#eventTarget().addEventListener("tanstack-devtools-global", handler);
		return () => this.#eventTarget().removeEventListener("tanstack-devtools-global", handler);
	}
};
//#endregion
//#region node_modules/@tanstack/form-core/dist/esm/EventClient.js
var FormEventClient = class extends EventClient {
	constructor() {
		super({
			pluginId: "form-devtools",
			reconnectEveryMs: 1e3
		});
	}
};
var formEventClient = new FormEventClient();
//#endregion
//#region node_modules/@tanstack/form-core/dist/esm/utils.js
function functionalUpdate(updater, input) {
	return typeof updater === "function" ? updater(input) : updater;
}
function getBy(obj, path) {
	return makePathArray(path).reduce((current, pathPart) => {
		if (current === null) return null;
		if (typeof current !== "undefined") return current[pathPart];
	}, obj);
}
function setBy(obj, _path, updater) {
	const path = makePathArray(_path);
	function doSet(parent) {
		if (!path.length) return functionalUpdate(updater, parent);
		const key = path.shift();
		if (typeof key === "string" || typeof key === "number" && !Array.isArray(parent)) {
			if (typeof parent === "object") {
				if (parent === null) parent = {};
				return {
					...parent,
					[key]: doSet(parent[key])
				};
			}
			return { [key]: doSet() };
		}
		if (Array.isArray(parent) && typeof key === "number") {
			const prefix = parent.slice(0, key);
			return [
				...prefix.length ? prefix : new Array(key),
				doSet(parent[key]),
				...parent.slice(key + 1)
			];
		}
		return [...new Array(key), doSet()];
	}
	return doSet(obj);
}
function deleteBy(obj, _path) {
	const path = makePathArray(_path);
	function doDelete(parent) {
		if (!parent) return;
		if (path.length === 1) {
			const finalPath = path[0];
			if (Array.isArray(parent) && typeof finalPath === "number") return parent.filter((_, i) => i !== finalPath);
			const { [finalPath]: remove, ...rest } = parent;
			return rest;
		}
		const key = path.shift();
		if (typeof key === "string" || typeof key === "number" && !Array.isArray(parent)) {
			if (typeof parent === "object") return {
				...parent,
				[key]: doDelete(parent[key])
			};
		}
		if (typeof key === "number") {
			if (Array.isArray(parent)) {
				if (key >= parent.length) return parent;
				const prefix = parent.slice(0, key);
				return [
					...prefix.length ? prefix : new Array(key),
					doDelete(parent[key]),
					...parent.slice(key + 1)
				];
			}
		}
		throw new Error("It seems we have created an infinite loop in deleteBy. ");
	}
	return doDelete(obj);
}
var CC_DOT = 46;
var CC_OPEN = 91;
var CC_CLOSE = 93;
var CC_ZERO = 48;
var CC_NINE = 57;
function makePathArray(str) {
	if (Array.isArray(str)) return [...str];
	if (typeof str !== "string") throw new Error("Path must be a string.");
	const len = str.length;
	const result = [];
	let segStart = len > 0 && str.charCodeAt(0) === CC_OPEN ? 1 : 0;
	let allDigits = true;
	let prev = -1;
	for (let i = segStart; i <= len; i++) {
		const char = i < len ? str.charCodeAt(i) : -1;
		if (i === len || char === CC_DOT || char === CC_OPEN || char === CC_CLOSE) {
			const segLen = i - segStart;
			if (segLen > 0) {
				const treatAsNumber = allDigits && (segLen === 1 || str.charCodeAt(segStart) !== CC_ZERO);
				const seg = str.slice(segStart, i);
				if (treatAsNumber) {
					const num = parseInt(seg, 10);
					if (segLen <= 15 || String(num) === seg) result.push(num);
					else result.push(seg);
				} else result.push(seg);
			} else if (prev !== CC_CLOSE && !(prev === -1 && char === CC_CLOSE) && !(prev === char && (char === CC_DOT || char === CC_OPEN))) result.push("");
			segStart = i + 1;
			allDigits = true;
		} else if (char < CC_ZERO || char > CC_NINE) allDigits = false;
		prev = char;
	}
	if (!result.length) result.push("");
	return result;
}
function isNonEmptyArray(obj) {
	return !(Array.isArray(obj) && obj.length === 0);
}
function getSyncValidatorArray(cause, options) {
	const runValidation = (props) => {
		return props.validators.filter(Boolean).map((validator) => {
			return {
				cause: validator.cause,
				validate: validator.fn
			};
		});
	};
	return options.validationLogic({
		form: options.form,
		group: options.group,
		validators: options.validators,
		event: {
			type: cause,
			fieldName: options.fieldName,
			async: false
		},
		runValidation
	});
}
function getAsyncValidatorArray(cause, options) {
	const { asyncDebounceMs } = options;
	const { onBlurAsyncDebounceMs, onChangeAsyncDebounceMs, onDynamicAsyncDebounceMs } = options.validators || {};
	const defaultDebounceMs = asyncDebounceMs ?? 0;
	const runValidation = (props) => {
		return props.validators.filter(Boolean).map((validator) => {
			const validatorCause = validator?.cause || cause;
			let debounceMs = defaultDebounceMs;
			switch (validatorCause) {
				case "change":
					debounceMs = onChangeAsyncDebounceMs ?? defaultDebounceMs;
					break;
				case "blur":
					debounceMs = onBlurAsyncDebounceMs ?? defaultDebounceMs;
					break;
				case "dynamic":
					debounceMs = onDynamicAsyncDebounceMs ?? defaultDebounceMs;
					break;
				case "submit":
					debounceMs = 0;
					break;
			}
			if (cause === "submit") debounceMs = 0;
			return {
				cause: validatorCause,
				validate: validator.fn,
				debounceMs
			};
		});
	};
	return options.validationLogic({
		form: options.form,
		group: options.group,
		validators: options.validators,
		event: {
			type: cause,
			fieldName: options.fieldName,
			async: true
		},
		runValidation
	});
}
var isGlobalFormValidationError = (error) => {
	return !!error && typeof error === "object" && "fields" in error;
};
function evaluate(objA, objB) {
	if (Object.is(objA, objB)) return true;
	if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;
	if (objA instanceof Date && objB instanceof Date) return objA.getTime() === objB.getTime();
	if (objA instanceof Map && objB instanceof Map) {
		if (objA.size !== objB.size) return false;
		for (const [k, v] of objA) if (!objB.has(k) || !Object.is(v, objB.get(k))) return false;
		return true;
	}
	if (objA instanceof Set && objB instanceof Set) {
		if (objA.size !== objB.size) return false;
		for (const v of objA) if (!objB.has(v)) return false;
		return true;
	}
	const keysA = Object.keys(objA);
	const keysB = Object.keys(objB);
	if (keysA.length !== keysB.length) return false;
	if (keysA.length === 0 && !Array.isArray(objA) && !Array.isArray(objB) && (Object.getPrototypeOf(objA) !== Object.prototype || Object.getPrototypeOf(objB) !== Object.prototype)) return false;
	for (const key of keysA) if (!keysB.includes(key) || !evaluate(objA[key], objB[key])) return false;
	return true;
}
var determineFormLevelErrorSourceAndValue = ({ newFormValidatorError, isPreviousErrorFromFormValidator, previousErrorValue }) => {
	if (newFormValidatorError) return {
		newErrorValue: newFormValidatorError,
		newSource: "form"
	};
	if (isPreviousErrorFromFormValidator) return {
		newErrorValue: void 0,
		newSource: void 0
	};
	if (previousErrorValue) return {
		newErrorValue: previousErrorValue,
		newSource: "field"
	};
	return {
		newErrorValue: void 0,
		newSource: void 0
	};
};
var determineFieldLevelErrorSourceAndValue = ({ formLevelError, fieldLevelError }) => {
	if (fieldLevelError) return {
		newErrorValue: fieldLevelError,
		newSource: "field"
	};
	if (formLevelError) return {
		newErrorValue: formLevelError,
		newSource: "form"
	};
	return {
		newErrorValue: void 0,
		newSource: void 0
	};
};
function mergeOpts(originalOpts, overrides) {
	if (originalOpts === void 0 || originalOpts === null) return overrides;
	return {
		...originalOpts,
		...overrides
	};
}
var IDX = 256;
var HEX = [];
var BUFFER;
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);
function uuid() {
	let i = 0;
	let num;
	let out = "";
	if (!BUFFER || IDX + 16 > 256) {
		BUFFER = new Array(256);
		i = 256;
		while (i--) BUFFER[i] = 256 * Math.random() | 0;
		i = 0;
		IDX = 0;
	}
	for (; i < 16; i++) {
		num = BUFFER[IDX + i];
		if (i === 6) out += HEX[num & 15 | 64];
		else if (i === 8) out += HEX[num & 63 | 128];
		else out += HEX[num];
		if (i & 1 && i > 1 && i < 11) out += "-";
	}
	IDX++;
	return out;
}
var throttleFormState = liteThrottle((form) => formEventClient.emit("form-state", {
	id: form.formId,
	state: form.store.state
}), { wait: 300 });
function deepCopy(obj) {
	if (obj === null || typeof obj !== "object") return obj;
	if (obj instanceof Date) return new Date(obj.getTime());
	if (Array.isArray(obj)) {
		const arrCopy = [];
		for (let i = 0; i < obj.length; i++) arrCopy[i] = deepCopy(obj[i]);
		return arrCopy;
	}
	if (obj instanceof Map) {
		const mapCopy = /* @__PURE__ */ new Map();
		obj.forEach((value, key) => {
			mapCopy.set(key, deepCopy(value));
		});
		return mapCopy;
	}
	if (obj instanceof Set) {
		const setCopy = /* @__PURE__ */ new Set();
		obj.forEach((value) => {
			setCopy.add(deepCopy(value));
		});
		return setCopy;
	}
	const copy = {};
	for (const key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) copy[key] = deepCopy(obj[key]);
	return copy;
}
function isFieldInGroup(groupName, fieldName) {
	return fieldName === groupName || fieldName.startsWith(`${groupName}.`) || fieldName.startsWith(`${groupName}[`);
}
//#endregion
//#region node_modules/@tanstack/form-core/dist/esm/ValidationLogic.js
var defaultValidationLogic = (props) => {
	if (!props.validators) return props.runValidation({
		validators: [],
		form: props.form
	});
	const isAsync = props.event.async;
	const onMountValidator = isAsync ? void 0 : {
		fn: props.validators.onMount,
		cause: "mount"
	};
	const onChangeValidator = {
		fn: isAsync ? props.validators.onChangeAsync : props.validators.onChange,
		cause: "change"
	};
	const onBlurValidator = {
		fn: isAsync ? props.validators.onBlurAsync : props.validators.onBlur,
		cause: "blur"
	};
	const onSubmitValidator = {
		fn: isAsync ? props.validators.onSubmitAsync : props.validators.onSubmit,
		cause: "submit"
	};
	const onServerValidator = isAsync ? void 0 : {
		fn: () => void 0,
		cause: "server"
	};
	switch (props.event.type) {
		case "mount": return props.runValidation({
			validators: [onMountValidator],
			form: props.form
		});
		case "submit": return props.runValidation({
			validators: [
				onChangeValidator,
				onBlurValidator,
				onSubmitValidator,
				onServerValidator
			],
			form: props.form
		});
		case "server": return props.runValidation({
			validators: [],
			form: props.form
		});
		case "blur": return props.runValidation({
			validators: [onBlurValidator, onServerValidator],
			form: props.form
		});
		case "change": return props.runValidation({
			validators: [onChangeValidator, onServerValidator],
			form: props.form
		});
		default: throw new Error(`Unknown validation event type: ${props.event.type}`);
	}
};
//#endregion
//#region node_modules/@tanstack/form-core/dist/esm/standardSchemaValidator.js
function prefixSchemaToErrors(issues, formValue) {
	const schema = /* @__PURE__ */ new Map();
	for (const issue of issues) {
		const issuePath = issue.path ?? [];
		let currentFormValue = formValue;
		let path = "";
		for (let i = 0; i < issuePath.length; i++) {
			const pathSegment = issuePath[i];
			if (pathSegment === void 0) continue;
			const segment = typeof pathSegment === "object" ? pathSegment.key : pathSegment;
			const segmentAsNumber = Number(segment);
			if (Array.isArray(currentFormValue) && !Number.isNaN(segmentAsNumber)) path += `[${segmentAsNumber}]`;
			else path += (i > 0 ? "." : "") + String(segment);
			if (typeof currentFormValue === "object" && currentFormValue !== null) currentFormValue = currentFormValue[segment];
			else currentFormValue = void 0;
		}
		schema.set(path, (schema.get(path) ?? []).concat(issue));
	}
	return Object.fromEntries(schema);
}
var transformFormIssues = (issues, formValue) => {
	const schemaErrors = prefixSchemaToErrors(issues, formValue);
	return {
		form: schemaErrors,
		fields: schemaErrors
	};
};
var standardSchemaValidators = {
	validate({ value, validationSource }, schema) {
		const result = schema["~standard"].validate(value);
		if (result instanceof Promise) throw new Error("async function passed to sync validator");
		if (!result.issues) return;
		if (validationSource === "field") return result.issues;
		return transformFormIssues(result.issues, value);
	},
	async validateAsync({ value, validationSource }, schema) {
		const result = await schema["~standard"].validate(value);
		if (!result.issues) return;
		if (validationSource === "field") return result.issues;
		return transformFormIssues(result.issues, value);
	}
};
var isStandardSchemaValidator = (validator) => !!validator && "~standard" in validator;
//#endregion
//#region node_modules/@tanstack/form-core/dist/esm/metaHelper.js
var defaultFieldMeta = {
	isValidating: false,
	isTouched: false,
	isBlurred: false,
	isDirty: false,
	isPristine: true,
	isValid: true,
	isDefaultValue: true,
	errors: [],
	errorMap: {},
	errorSourceMap: {},
	_arrayVersion: 0
};
function metaHelper(formApi) {
	function bumpArrayVersion(field) {
		const currentMeta = formApi.getFieldMeta(field) ?? defaultFieldMeta;
		formApi.setFieldMeta(field, {
			...currentMeta,
			_arrayVersion: (currentMeta._arrayVersion || 0) + 1
		});
	}
	function handleArrayMove(field, fromIndex, toIndex) {
		bumpArrayVersion(field);
		const affectedFields = getAffectedFields(field, fromIndex, "move", toIndex);
		const startIndex = Math.min(fromIndex, toIndex);
		const endIndex = Math.max(fromIndex, toIndex);
		for (let i = startIndex; i <= endIndex; i++) affectedFields.push(getFieldPath(field, i));
		const fromFields = Object.keys(formApi.fieldInfo).reduce((fieldMap, fieldKey) => {
			if (fieldKey.startsWith(getFieldPath(field, fromIndex))) fieldMap.set(fieldKey, formApi.getFieldMeta(fieldKey));
			return fieldMap;
		}, /* @__PURE__ */ new Map());
		shiftMeta(affectedFields, fromIndex < toIndex ? "up" : "down");
		Object.keys(formApi.fieldInfo).filter((fieldKey) => fieldKey.startsWith(getFieldPath(field, toIndex))).forEach((fieldKey) => {
			const fromKey = fieldKey.replace(getFieldPath(field, toIndex), getFieldPath(field, fromIndex));
			const fromMeta = fromFields.get(fromKey);
			if (fromMeta) formApi.setFieldMeta(fieldKey, fromMeta);
		});
	}
	function handleArrayRemove(field, index) {
		bumpArrayVersion(field);
		shiftMeta(getAffectedFields(field, index, "remove"), "up");
	}
	function handleArraySwap(field, index, secondIndex) {
		bumpArrayVersion(field);
		getAffectedFields(field, index, "swap", secondIndex).forEach((fieldKey) => {
			if (!fieldKey.toString().startsWith(getFieldPath(field, index))) return;
			const swappedKey = fieldKey.toString().replace(getFieldPath(field, index), getFieldPath(field, secondIndex));
			const [meta1, meta2] = [formApi.getFieldMeta(fieldKey), formApi.getFieldMeta(swappedKey)];
			if (meta1) formApi.setFieldMeta(swappedKey, meta1);
			if (meta2) formApi.setFieldMeta(fieldKey, meta2);
		});
	}
	function handleArrayInsert(field, insertIndex) {
		bumpArrayVersion(field);
		const affectedFields = getAffectedFields(field, insertIndex, "insert");
		shiftMeta(affectedFields, "down");
		affectedFields.forEach((fieldKey) => {
			if (fieldKey.toString().startsWith(getFieldPath(field, insertIndex))) formApi.setFieldMeta(fieldKey, getEmptyFieldMeta());
		});
	}
	function getFieldPath(field, index) {
		return `${field}[${index}]`;
	}
	function getAffectedFields(field, index, mode, secondIndex) {
		const affectedFieldKeys = [getFieldPath(field, index)];
		switch (mode) {
			case "swap":
				affectedFieldKeys.push(getFieldPath(field, secondIndex));
				break;
			case "move": {
				const [startIndex, endIndex] = [Math.min(index, secondIndex), Math.max(index, secondIndex)];
				for (let i = startIndex; i <= endIndex; i++) affectedFieldKeys.push(getFieldPath(field, i));
				break;
			}
			default: {
				const currentValue = formApi.getFieldValue(field);
				const fieldItems = Array.isArray(currentValue) ? currentValue.length : 0;
				for (let i = index + 1; i < fieldItems; i++) affectedFieldKeys.push(getFieldPath(field, i));
				break;
			}
		}
		return Object.keys(formApi.fieldInfo).filter((fieldKey) => affectedFieldKeys.some((key) => fieldKey.startsWith(key)));
	}
	function updateIndex(fieldKey, direction) {
		return fieldKey.replace(/\[(\d+)\]/, (_, num) => {
			const currIndex = parseInt(num, 10);
			return `[${direction === "up" ? currIndex + 1 : Math.max(0, currIndex - 1)}]`;
		});
	}
	function shiftMeta(fields, direction) {
		(direction === "up" ? fields : [...fields].reverse()).forEach((fieldKey) => {
			const nextFieldKey = updateIndex(fieldKey.toString(), direction);
			const nextFieldMeta = formApi.getFieldMeta(nextFieldKey);
			if (nextFieldMeta) formApi.setFieldMeta(fieldKey, nextFieldMeta);
			else formApi.setFieldMeta(fieldKey, getEmptyFieldMeta());
		});
	}
	const getEmptyFieldMeta = () => defaultFieldMeta;
	return {
		bumpArrayVersion,
		handleArrayMove,
		handleArrayRemove,
		handleArraySwap,
		handleArrayInsert
	};
}
//#endregion
//#region node_modules/@tanstack/form-core/dist/esm/FormApi.js
function getDefaultFormState(defaultState) {
	return {
		values: defaultState.values ?? {},
		errorMap: defaultState.errorMap ?? {},
		fieldMetaBase: defaultState.fieldMetaBase ?? {},
		formGroupStateBase: defaultState.formGroupStateBase ?? {},
		isSubmitted: defaultState.isSubmitted ?? false,
		isSubmitting: defaultState.isSubmitting ?? false,
		isValidating: defaultState.isValidating ?? false,
		submissionAttempts: defaultState.submissionAttempts ?? 0,
		isSubmitSuccessful: defaultState.isSubmitSuccessful ?? false,
		validationMetaMap: defaultState.validationMetaMap ?? {
			onChange: void 0,
			onBlur: void 0,
			onSubmit: void 0,
			onMount: void 0,
			onServer: void 0,
			onDynamic: void 0
		}
	};
}
var FormApi = class {
	/**
	* Constructs a new `FormApi` instance with the given form options.
	*/
	constructor(opts) {
		this.options = {};
		this.fieldInfo = {};
		this.formGroupApis = /* @__PURE__ */ new Set();
		this.mount = () => {
			const cleanupDevtoolBroadcast = this.store.subscribe(() => {
				throttleFormState(this);
			});
			const cleanupFormStateListener = formEventClient.on("request-form-state", (e) => {
				if (e.payload.id === this._formId) formEventClient.emit("form-api", {
					id: this._formId,
					state: this.store.state,
					options: this.options
				});
			});
			const cleanupFormResetListener = formEventClient.on("request-form-reset", (e) => {
				if (e.payload.id === this._formId) this.reset();
			});
			const cleanupFormForceSubmitListener = formEventClient.on("request-form-force-submit", (e) => {
				if (e.payload.id === this._formId) {
					this._devtoolsSubmissionOverride = true;
					this.handleSubmit();
					this._devtoolsSubmissionOverride = false;
				}
			});
			const cleanup = () => {
				cleanupFormForceSubmitListener();
				cleanupFormResetListener();
				cleanupFormStateListener();
				cleanupDevtoolBroadcast.unsubscribe();
				formEventClient.emit("form-unmounted", { id: this._formId });
			};
			this.options.listeners?.onMount?.({ formApi: this });
			const { onMount } = this.options.validators || {};
			formEventClient.emit("form-api", {
				id: this._formId,
				state: this.store.state,
				options: this.options
			});
			if (!onMount) return cleanup;
			this.validateSync("mount");
			return cleanup;
		};
		this.update = (options) => {
			if (!options) return;
			const oldOptions = this.options;
			this.options = options;
			const shouldUpdateValues = options.defaultValues && !evaluate(options.defaultValues, oldOptions.defaultValues) && !this.state.isTouched;
			const shouldUpdateState = !evaluate(options.defaultState, oldOptions.defaultState) && !this.state.isTouched;
			if (!shouldUpdateValues && !shouldUpdateState) return;
			batch(() => {
				this.baseStore.setState(() => getDefaultFormState(Object.assign({}, this.state, shouldUpdateState ? options.defaultState : {}, shouldUpdateValues ? { values: options.defaultValues } : {})));
			});
			if (shouldUpdateValues) {
				const helper = metaHelper(this);
				for (const fieldKey of Object.keys(this.fieldInfo)) if (Array.isArray(this.getFieldValue(fieldKey))) helper.bumpArrayVersion(fieldKey);
			}
			formEventClient.emit("form-api", {
				id: this._formId,
				state: this.store.state,
				options: this.options
			});
		};
		this.reset = (values, opts2) => {
			const { fieldMeta: currentFieldMeta } = this.state;
			const fieldMetaBase = this.resetFieldMeta(currentFieldMeta);
			if (values && !opts2?.keepDefaultValues) this.options = {
				...this.options,
				defaultValues: values
			};
			this.baseStore.setState(() => {
				let nextValues = values ?? this.options.defaultValues ?? this.options.defaultState?.values;
				if (!values) Object.values(this.fieldInfo).forEach((fieldInfo) => {
					if (fieldInfo.instance && fieldInfo.instance.options.defaultValue !== void 0) nextValues = setBy(nextValues, fieldInfo.instance.name, fieldInfo.instance.options.defaultValue);
				});
				return getDefaultFormState({
					...this.options.defaultState,
					values: nextValues,
					fieldMetaBase
				});
			});
		};
		this.validateAllFields = async (cause) => {
			const fieldValidationPromises = [];
			batch(() => {
				Object.values(this.fieldInfo).forEach((field) => {
					if (!field.instance) return;
					const fieldInstance = field.instance;
					fieldValidationPromises.push(Promise.resolve().then(() => fieldInstance.validate(cause, {
						skipFormValidation: true,
						skipGroupValidation: true
					})));
					if (!field.instance.store.state.meta.isTouched) field.instance.setMeta((prev) => ({
						...prev,
						isTouched: true
					}));
				});
			});
			return (await Promise.all(fieldValidationPromises)).flat();
		};
		this.validateArrayFieldsStartingFrom = async (field, index, cause) => {
			const currentValue = this.getFieldValue(field);
			const lastIndex = Array.isArray(currentValue) ? Math.max(currentValue.length - 1, 0) : null;
			const fieldKeysToValidate = [`${field}[${index}]`];
			for (let i = index + 1; i <= (lastIndex ?? 0); i++) fieldKeysToValidate.push(`${field}[${i}]`);
			const fieldsToValidate = Object.keys(this.fieldInfo).filter((fieldKey) => fieldKeysToValidate.some((key) => fieldKey.startsWith(key)));
			const fieldValidationPromises = [];
			batch(() => {
				fieldsToValidate.forEach((nestedField) => {
					fieldValidationPromises.push(Promise.resolve().then(() => this.validateField(nestedField, cause)));
				});
			});
			return (await Promise.all(fieldValidationPromises)).flat();
		};
		this.validateField = (field, cause) => {
			const fieldInstance = this.fieldInfo[field]?.instance;
			if (!fieldInstance) {
				const { hasErrored } = this.validateSync(cause);
				if (hasErrored && !this.options.asyncAlways) return this.getFieldMeta(field)?.errors ?? [];
				return this.validateAsync(cause).then(() => {
					return this.getFieldMeta(field)?.errors ?? [];
				});
			}
			if (!fieldInstance.store.state.meta.isTouched) fieldInstance.setMeta((prev) => ({
				...prev,
				isTouched: true
			}));
			return fieldInstance.validate(cause);
		};
		this.validateSync = (cause, validateOpts) => {
			const validates = getSyncValidatorArray(cause, {
				...this.options,
				form: this,
				group: validateOpts?.group,
				validationLogic: this.options.validationLogic || defaultValidationLogic
			});
			let hasErrored = false;
			const currentValidationErrorMap = {};
			batch(() => {
				for (const validateObj of validates) {
					if (!validateObj.validate) continue;
					const { formError, fieldErrors } = normalizeError$2(this.runValidator({
						validate: validateObj.validate,
						value: {
							value: this.state.values,
							formApi: this,
							validationSource: "form"
						},
						type: "validate"
					}));
					const errorMapKey = getErrorMapKey$2(validateObj.cause);
					let allFieldsToProcess = /* @__PURE__ */ new Set([...Object.keys(this.state.fieldMeta), ...Object.keys(fieldErrors || {})]);
					if (validateOpts?.filterFieldNames) allFieldsToProcess = new Set([...allFieldsToProcess].filter(validateOpts.filterFieldNames));
					for (const field of allFieldsToProcess) {
						if (this.baseStore.state.fieldMetaBase[field] === void 0 && !fieldErrors?.[field]) continue;
						const { errorMap: currentErrorMap, errorSourceMap: currentErrorMapSource } = this.getFieldMeta(field) ?? defaultFieldMeta;
						const newFormValidatorError = fieldErrors?.[field];
						const { newErrorValue, newSource } = determineFormLevelErrorSourceAndValue({
							newFormValidatorError,
							isPreviousErrorFromFormValidator: currentErrorMapSource?.[errorMapKey] === "form",
							previousErrorValue: currentErrorMap?.[errorMapKey]
						});
						if (newSource === "form") currentValidationErrorMap[field] = {
							...currentValidationErrorMap[field],
							[errorMapKey]: newFormValidatorError
						};
						if (currentErrorMap?.[errorMapKey] !== newErrorValue) this.setFieldMeta(field, (prev = defaultFieldMeta) => ({
							...prev,
							errorMap: {
								...prev.errorMap,
								[errorMapKey]: newErrorValue
							},
							errorSourceMap: {
								...prev.errorSourceMap,
								[errorMapKey]: newSource
							}
						}));
					}
					if (!validateOpts?.dontUpdateFormErrorMap) {
						if (this.state.errorMap?.[errorMapKey] !== formError) this.baseStore.setState((prev) => ({
							...prev,
							errorMap: {
								...prev.errorMap,
								[errorMapKey]: formError
							}
						}));
					}
					if (formError || fieldErrors) hasErrored = true;
				}
				if (validateOpts?.dontUpdateFormErrorMap) return;
				const submitErrKey = getErrorMapKey$2("submit");
				if (this.state.errorMap?.[submitErrKey] && cause !== "submit" && !hasErrored) this.baseStore.setState((prev) => ({
					...prev,
					errorMap: {
						...prev.errorMap,
						[submitErrKey]: void 0
					}
				}));
				const serverErrKey = getErrorMapKey$2("server");
				if (this.state.errorMap?.[serverErrKey] && cause !== "server" && !hasErrored) this.baseStore.setState((prev) => ({
					...prev,
					errorMap: {
						...prev.errorMap,
						[serverErrKey]: void 0
					}
				}));
			});
			return {
				hasErrored,
				fieldsErrorMap: currentValidationErrorMap
			};
		};
		this.validateAsync = async (cause, validateOpts) => {
			const validates = getAsyncValidatorArray(cause, {
				...this.options,
				form: this,
				group: validateOpts?.group,
				validationLogic: this.options.validationLogic || defaultValidationLogic
			});
			if (!this.state.isFormValidating) this.baseStore.setState((prev) => ({
				...prev,
				isFormValidating: true
			}));
			const promises = [];
			let fieldErrorsFromFormValidators;
			for (const validateObj of validates) {
				if (!validateObj.validate) continue;
				const key = getErrorMapKey$2(validateObj.cause);
				this.state.validationMetaMap[key]?.lastAbortController.abort();
				const controller = new AbortController();
				this.state.validationMetaMap[key] = { lastAbortController: controller };
				promises.push(new Promise(async (resolve) => {
					let rawError;
					try {
						rawError = await new Promise((rawResolve, rawReject) => {
							setTimeout(async () => {
								if (controller.signal.aborted) return rawResolve(void 0);
								try {
									rawResolve(await this.runValidator({
										validate: validateObj.validate,
										value: {
											value: this.state.values,
											formApi: this,
											validationSource: "form",
											signal: controller.signal
										},
										type: "validateAsync"
									}));
								} catch (e) {
									rawReject(e);
								}
							}, validateObj.debounceMs);
						});
					} catch (e) {
						rawError = e;
					}
					const { formError, fieldErrors: fieldErrorsFromNormalizeError } = normalizeError$2(rawError);
					if (fieldErrorsFromNormalizeError) fieldErrorsFromFormValidators = fieldErrorsFromFormValidators ? {
						...fieldErrorsFromFormValidators,
						...fieldErrorsFromNormalizeError
					} : fieldErrorsFromNormalizeError;
					const errorMapKey = getErrorMapKey$2(validateObj.cause);
					let fields = Object.keys(this.state.fieldMeta);
					if (validateOpts?.filterFieldNames) fields = fields.filter(validateOpts.filterFieldNames);
					for (const field of fields) {
						if (this.baseStore.state.fieldMetaBase[field] === void 0) continue;
						const fieldMeta = this.getFieldMeta(field);
						if (!fieldMeta) continue;
						const { errorMap: currentErrorMap, errorSourceMap: currentErrorMapSource } = fieldMeta;
						const newFormValidatorError = fieldErrorsFromFormValidators?.[field];
						const { newErrorValue, newSource } = determineFormLevelErrorSourceAndValue({
							newFormValidatorError,
							isPreviousErrorFromFormValidator: currentErrorMapSource?.[errorMapKey] === "form",
							previousErrorValue: currentErrorMap?.[errorMapKey]
						});
						if (currentErrorMap?.[errorMapKey] !== newErrorValue) this.setFieldMeta(field, (prev) => ({
							...prev,
							errorMap: {
								...prev.errorMap,
								[errorMapKey]: newErrorValue
							},
							errorSourceMap: {
								...prev.errorSourceMap,
								[errorMapKey]: newSource
							}
						}));
					}
					if (!validateOpts?.dontUpdateFormErrorMap) this.baseStore.setState((prev) => ({
						...prev,
						errorMap: {
							...prev.errorMap,
							[errorMapKey]: formError
						}
					}));
					resolve(fieldErrorsFromFormValidators ? {
						fieldErrors: fieldErrorsFromFormValidators,
						errorMapKey
					} : void 0);
				}));
			}
			let results = [];
			const fieldsErrorMap = {};
			if (promises.length) {
				results = await Promise.all(promises);
				for (const fieldValidationResult of results) if (fieldValidationResult?.fieldErrors) {
					const { errorMapKey } = fieldValidationResult;
					for (const [field, fieldError] of Object.entries(fieldValidationResult.fieldErrors)) fieldsErrorMap[field] = {
						...fieldsErrorMap[field] || {},
						[errorMapKey]: fieldError
					};
				}
			}
			this.baseStore.setState((prev) => ({
				...prev,
				isFormValidating: false
			}));
			return fieldsErrorMap;
		};
		this.validate = (cause, validateOpts) => {
			const { hasErrored, fieldsErrorMap } = this.validateSync(cause, validateOpts);
			if (hasErrored && !this.options.asyncAlways) return fieldsErrorMap;
			return this.validateAsync(cause, validateOpts);
		};
		this._handleSubmit = async (submitMeta) => {
			this.baseStore.setState((old) => ({
				...old,
				isSubmitted: false,
				submissionAttempts: old.submissionAttempts + 1,
				isSubmitSuccessful: false
			}));
			batch(() => {
				Object.values(this.fieldInfo).forEach((field) => {
					if (!field.instance) return;
					if (!field.instance.store.state.meta.isTouched) field.instance.setMeta((prev) => ({
						...prev,
						isTouched: true
					}));
				});
			});
			const submitMetaArg = submitMeta ?? this.options.onSubmitMeta;
			if (!this.state.canSubmit && !this._devtoolsSubmissionOverride) {
				this.options.onSubmitInvalid?.({
					value: this.state.values,
					formApi: this,
					meta: submitMetaArg
				});
				return;
			}
			this.baseStore.setState((d) => ({
				...d,
				isSubmitting: true
			}));
			const done = () => {
				this.baseStore.setState((prev) => ({
					...prev,
					isSubmitting: false
				}));
			};
			await this.validateAllFields("submit");
			if (!this.state.isFieldsValid) {
				done();
				this.options.onSubmitInvalid?.({
					value: this.state.values,
					formApi: this,
					meta: submitMetaArg
				});
				formEventClient.emit("form-submission", {
					id: this._formId,
					submissionAttempt: this.state.submissionAttempts,
					successful: false,
					stage: "validateAllFields",
					errors: Object.values(this.state.fieldMeta).map((meta) => meta.errors).flat()
				});
				return;
			}
			await this.validate("submit");
			if (!this.state.isValid) {
				done();
				this.options.onSubmitInvalid?.({
					value: this.state.values,
					formApi: this,
					meta: submitMetaArg
				});
				formEventClient.emit("form-submission", {
					id: this._formId,
					submissionAttempt: this.state.submissionAttempts,
					successful: false,
					stage: "validate",
					errors: this.state.errors
				});
				return;
			}
			batch(() => {
				Object.values(this.fieldInfo).forEach((field) => {
					field.instance?.triggerOnSubmitListener();
				});
			});
			this.options.listeners?.onSubmit?.({
				formApi: this,
				meta: submitMetaArg
			});
			try {
				await this.options.onSubmit?.({
					value: this.state.values,
					formApi: this,
					meta: submitMetaArg
				});
				batch(() => {
					this.baseStore.setState((prev) => ({
						...prev,
						isSubmitted: true,
						isSubmitSuccessful: true
					}));
					formEventClient.emit("form-submission", {
						id: this._formId,
						submissionAttempt: this.state.submissionAttempts,
						successful: true
					});
					done();
				});
			} catch (err) {
				this.baseStore.setState((prev) => ({
					...prev,
					isSubmitSuccessful: false
				}));
				formEventClient.emit("form-submission", {
					id: this._formId,
					submissionAttempt: this.state.submissionAttempts,
					successful: false,
					stage: "inflight",
					onError: err
				});
				done();
				throw err;
			}
		};
		this.getFieldValue = (field) => getBy(this.state.values, field);
		this.getFieldMeta = (field) => {
			return this.state.fieldMeta[field];
		};
		this.getFormGroupMeta = (name) => {
			return this.formGroupMetaDerived.state[name];
		};
		this.getFieldInfo = (field) => {
			return this.fieldInfo[field] ||= {
				instance: null,
				validationMetaMap: {
					onChange: void 0,
					onBlur: void 0,
					onSubmit: void 0,
					onMount: void 0,
					onServer: void 0,
					onDynamic: void 0
				}
			};
		};
		this.setFieldMeta = (field, updater) => {
			this.baseStore.setState((prev) => {
				return {
					...prev,
					fieldMetaBase: {
						...prev.fieldMetaBase,
						[field]: functionalUpdate(updater, prev.fieldMetaBase[field])
					}
				};
			});
		};
		this.resetFieldMeta = (fieldMeta) => {
			return Object.keys(fieldMeta).reduce((acc, key) => {
				const fieldKey = key;
				acc[fieldKey] = defaultFieldMeta;
				return acc;
			}, {});
		};
		this.setFieldValue = (field, updater, opts2) => {
			const dontUpdateMeta = opts2?.dontUpdateMeta ?? false;
			const dontRunListeners = opts2?.dontRunListeners ?? false;
			const dontValidate = opts2?.dontValidate ?? false;
			batch(() => {
				if (!dontUpdateMeta) this.setFieldMeta(field, (prev) => ({
					...prev,
					isTouched: true,
					isDirty: true,
					errorMap: {
						...prev?.errorMap,
						onMount: void 0
					}
				}));
				this.baseStore.setState((prev) => {
					return {
						...prev,
						values: setBy(prev.values, field, updater)
					};
				});
			});
			if (!dontRunListeners) this.getFieldInfo(field).instance?.triggerOnChangeListener();
			if (!dontValidate) this.validateField(field, "change");
		};
		this.deleteField = (field) => {
			const fieldsToDelete = [...Object.keys(this.fieldInfo).filter((f) => {
				const fieldStr = field.toString();
				return f !== fieldStr && f.startsWith(fieldStr);
			}), field];
			this.baseStore.setState((prev) => {
				const newState = { ...prev };
				fieldsToDelete.forEach((f) => {
					newState.values = deleteBy(newState.values, f);
					delete this.fieldInfo[f];
					delete newState.fieldMetaBase[f];
				});
				return newState;
			});
		};
		this.pushFieldValue = (field, value, options) => {
			this.setFieldValue(field, (prev) => [...Array.isArray(prev) ? prev : [], value], options);
			metaHelper(this).bumpArrayVersion(field);
		};
		this.insertFieldValue = async (field, index, value, options) => {
			this.setFieldValue(field, (prev) => {
				return [
					...prev.slice(0, index),
					value,
					...prev.slice(index)
				];
			}, mergeOpts(options, { dontValidate: true }));
			const dontValidate = options?.dontValidate ?? false;
			if (!dontValidate) await this.validateField(field, "change");
			metaHelper(this).handleArrayInsert(field, index);
			if (!dontValidate) await this.validateArrayFieldsStartingFrom(field, index, "change");
		};
		this.replaceFieldValue = async (field, index, value, options) => {
			this.setFieldValue(field, (prev) => {
				return prev.map((d, i) => i === index ? value : d);
			}, mergeOpts(options, { dontValidate: true }));
			metaHelper(this).bumpArrayVersion(field);
			if (!(options?.dontValidate ?? false)) {
				await this.validateField(field, "change");
				await this.validateArrayFieldsStartingFrom(field, index, "change");
			}
		};
		this.removeFieldValue = async (field, index, options) => {
			const fieldValue = this.getFieldValue(field);
			const lastIndex = Array.isArray(fieldValue) ? Math.max(fieldValue.length - 1, 0) : null;
			this.setFieldValue(field, (prev) => {
				return prev.filter((_d, i) => i !== index);
			}, mergeOpts(options, { dontValidate: true }));
			metaHelper(this).handleArrayRemove(field, index);
			if (lastIndex !== null) {
				const start = `${field}[${lastIndex}]`;
				this.deleteField(start);
			}
			if (!(options?.dontValidate ?? false)) {
				await this.validateField(field, "change");
				await this.validateArrayFieldsStartingFrom(field, index, "change");
			}
		};
		this.swapFieldValues = (field, index1, index2, options) => {
			this.setFieldValue(field, (prev) => {
				const prev1 = prev[index1];
				const prev2 = prev[index2];
				return setBy(setBy(prev, `${index1}`, prev2), `${index2}`, prev1);
			}, mergeOpts(options, { dontValidate: true }));
			metaHelper(this).handleArraySwap(field, index1, index2);
			if (!(options?.dontValidate ?? false)) {
				this.validateField(field, "change");
				this.validateField(`${field}[${index1}]`, "change");
				this.validateField(`${field}[${index2}]`, "change");
			}
		};
		this.moveFieldValues = (field, index1, index2, options) => {
			this.setFieldValue(field, (prev) => {
				const next = [...prev];
				next.splice(index2, 0, next.splice(index1, 1)[0]);
				return next;
			}, mergeOpts(options, { dontValidate: true }));
			metaHelper(this).handleArrayMove(field, index1, index2);
			if (!(options?.dontValidate ?? false)) {
				this.validateField(field, "change");
				this.validateField(`${field}[${index1}]`, "change");
				this.validateField(`${field}[${index2}]`, "change");
			}
		};
		this.clearFieldValues = (field, options) => {
			const fieldValue = this.getFieldValue(field);
			const lastIndex = Array.isArray(fieldValue) ? Math.max(fieldValue.length - 1, 0) : null;
			this.setFieldValue(field, [], mergeOpts(options, { dontValidate: true }));
			metaHelper(this).bumpArrayVersion(field);
			if (lastIndex !== null) for (let i = 0; i <= lastIndex; i++) {
				const fieldKey = `${field}[${i}]`;
				this.deleteField(fieldKey);
			}
			if (!(options?.dontValidate ?? false)) this.validateField(field, "change");
		};
		this.resetField = (field) => {
			this.baseStore.setState((prev) => {
				const fieldDefault = this.getFieldInfo(field).instance?.options.defaultValue;
				const formDefault = getBy(this.options.defaultValues, field);
				const targetValue = fieldDefault ?? formDefault;
				return {
					...prev,
					fieldMetaBase: {
						...prev.fieldMetaBase,
						[field]: defaultFieldMeta
					},
					values: targetValue !== void 0 ? setBy(prev.values, field, targetValue) : prev.values
				};
			});
		};
		this.setErrorMap = (errorMap) => {
			batch(() => {
				Object.entries(errorMap).forEach(([key, value]) => {
					const errorMapKey = key;
					if (isGlobalFormValidationError(value)) {
						const { formError, fieldErrors } = normalizeError$2(value);
						for (const fieldName of Object.keys(this.fieldInfo)) {
							if (!this.getFieldMeta(fieldName)) continue;
							this.setFieldMeta(fieldName, (prev) => ({
								...prev,
								errorMap: {
									...prev.errorMap,
									[errorMapKey]: fieldErrors?.[fieldName]
								},
								errorSourceMap: {
									...prev.errorSourceMap,
									[errorMapKey]: "form"
								}
							}));
						}
						this.baseStore.setState((prev) => ({
							...prev,
							errorMap: {
								...prev.errorMap,
								[errorMapKey]: formError
							}
						}));
					} else this.baseStore.setState((prev) => ({
						...prev,
						errorMap: {
							...prev.errorMap,
							[errorMapKey]: value
						}
					}));
				});
			});
		};
		this.getAllErrors = () => {
			return {
				form: {
					errors: this.state.errors,
					errorMap: this.state.errorMap
				},
				fields: Object.entries(this.state.fieldMeta).reduce((acc, [fieldName, fieldMeta]) => {
					if (Object.keys(fieldMeta).length && fieldMeta.errors.length) acc[fieldName] = {
						errors: fieldMeta.errors,
						errorMap: fieldMeta.errorMap
					};
					return acc;
				}, {})
			};
		};
		this.parseValuesWithSchema = (schema) => {
			return standardSchemaValidators.validate({
				value: this.state.values,
				validationSource: "form"
			}, schema);
		};
		this.parseValuesWithSchemaAsync = (schema) => {
			return standardSchemaValidators.validateAsync({
				value: this.state.values,
				validationSource: "form"
			}, schema);
		};
		this.timeoutIds = {
			validations: {},
			listeners: {},
			formListeners: {}
		};
		this._formId = opts?.formId ?? uuid();
		this._devtoolsSubmissionOverride = false;
		let baseStoreVal = getDefaultFormState({
			...opts?.defaultState,
			values: opts?.defaultValues ?? opts?.defaultState?.values
		});
		if (opts?.transform) {
			baseStoreVal = opts.transform({ state: baseStoreVal }).state;
			for (const errKey of Object.keys(baseStoreVal.errorMap)) {
				const errKeyMap = baseStoreVal.errorMap[errKey];
				if (errKeyMap === void 0 || !isGlobalFormValidationError(errKeyMap)) continue;
				for (const fieldName of Object.keys(errKeyMap.fields)) {
					const fieldErr = errKeyMap.fields[fieldName];
					if (fieldErr === void 0) continue;
					const existingFieldMeta = baseStoreVal.fieldMetaBase[fieldName];
					baseStoreVal.fieldMetaBase[fieldName] = {
						isTouched: false,
						isValidating: false,
						isBlurred: false,
						isDirty: false,
						_arrayVersion: 0,
						...existingFieldMeta ?? {},
						errorSourceMap: {
							...existingFieldMeta?.["errorSourceMap"] ?? {},
							onChange: "form"
						},
						errorMap: {
							...existingFieldMeta?.["errorMap"] ?? {},
							[errKey]: fieldErr
						}
					};
				}
			}
		}
		this.baseStore = createStore(baseStoreVal);
		let prevBaseStore = void 0;
		this.fieldMetaDerived = createStore((prevVal) => {
			const currBaseStore = this.baseStore.get();
			let originalMetaCount = 0;
			const fieldMeta = {};
			for (const fieldName of Object.keys(currBaseStore.fieldMetaBase)) {
				const currBaseMeta = currBaseStore.fieldMetaBase[fieldName];
				const prevBaseMeta = prevBaseStore?.fieldMetaBase[fieldName];
				const prevFieldInfo = prevVal?.[fieldName];
				const curFieldVal = getBy(currBaseStore.values, fieldName);
				let fieldErrors = prevFieldInfo?.errors;
				if (!prevBaseMeta || currBaseMeta.errorMap !== prevBaseMeta.errorMap) {
					fieldErrors = Object.values(currBaseMeta.errorMap ?? {}).filter((val) => val !== void 0);
					const fieldInstance = this.getFieldInfo(fieldName)?.instance;
					if (!fieldInstance || !fieldInstance.options.disableErrorFlat) fieldErrors = fieldErrors.flat(1);
				}
				const isFieldValid = !isNonEmptyArray(fieldErrors);
				const isFieldPristine = !currBaseMeta.isDirty;
				const isDefaultValue = evaluate(curFieldVal, this.getFieldInfo(fieldName)?.instance?.options.defaultValue ?? getBy(this.options.defaultValues, fieldName));
				if (prevFieldInfo && prevFieldInfo.isPristine === isFieldPristine && prevFieldInfo.isValid === isFieldValid && prevFieldInfo.isDefaultValue === isDefaultValue && prevFieldInfo.errors === fieldErrors && currBaseMeta === prevBaseMeta) {
					fieldMeta[fieldName] = prevFieldInfo;
					originalMetaCount++;
					continue;
				}
				fieldMeta[fieldName] = {
					...currBaseMeta,
					errors: fieldErrors ?? [],
					isPristine: isFieldPristine,
					isValid: isFieldValid,
					isDefaultValue
				};
			}
			if (!Object.keys(currBaseStore.fieldMetaBase).length) return fieldMeta;
			if (prevVal && originalMetaCount === Object.keys(currBaseStore.fieldMetaBase).length) return prevVal;
			prevBaseStore = this.baseStore.get();
			return fieldMeta;
		});
		this.formGroupMetaDerived = createStore((prevVal) => {
			const currBaseStore = this.baseStore.get();
			const currFieldMeta = this.fieldMetaDerived.get();
			const result = {};
			for (const group of this.formGroupApis) {
				const groupName = group.name;
				const lifecycle = currBaseStore.formGroupStateBase[groupName] ?? {
					isSubmitted: false,
					isSubmitting: false,
					isValidating: false,
					submissionAttempts: 0,
					isSubmitSuccessful: false
				};
				const ownFieldMeta = currFieldMeta[groupName];
				let isFieldsValidating = false;
				let isFieldsValid = true;
				let aggIsTouched = false;
				let aggIsBlurred = false;
				let aggIsDefaultValue = true;
				let aggIsDirty = false;
				for (const fieldName in currFieldMeta) {
					if (fieldName === groupName) continue;
					if (!isFieldInGroup(groupName, fieldName)) continue;
					const m = currFieldMeta[fieldName];
					if (!m) continue;
					if (m.isValidating) isFieldsValidating = true;
					if (!m.isValid) isFieldsValid = false;
					if (m.isTouched) aggIsTouched = true;
					if (m.isBlurred) aggIsBlurred = true;
					if (!m.isDefaultValue) aggIsDefaultValue = false;
					if (m.isDirty) aggIsDirty = true;
				}
				const isPristine = !aggIsDirty;
				const isValidating = !!isFieldsValidating || lifecycle.isValidating;
				const errorMap = ownFieldMeta?.errorMap ?? {};
				const errorSourceMap = ownFieldMeta?.errorSourceMap ?? {};
				const hasOnMountError = Boolean(errorMap.onMount || Object.entries(currFieldMeta).some(([fieldName, field]) => field && fieldName !== groupName && isFieldInGroup(groupName, fieldName) && field.errorMap.onMount));
				const prevGroupMeta = prevVal?.[groupName];
				let errors = prevGroupMeta?.errors ?? [];
				if (!prevGroupMeta || prevGroupMeta.__srcErrorMap !== errorMap) errors = Object.values(errorMap).reduce((acc, curr) => {
					if (curr === void 0) return acc;
					if (curr && typeof curr === "object" && "fields" in curr) {
						const groupErr = curr.group;
						if (groupErr !== void 0) acc.push(groupErr);
						return acc;
					}
					acc.push(curr);
					return acc;
				}, []);
				const isGroupValid = errors.length === 0;
				const isValid = isFieldsValid && isGroupValid;
				const submitInvalid = group.options.canSubmitWhenInvalid ?? false;
				const canSubmit = lifecycle.submissionAttempts === 0 && !aggIsTouched && !hasOnMountError || !isValidating && !lifecycle.isSubmitting && isValid || submitInvalid;
				if (prevGroupMeta && prevGroupMeta.errorMap === errorMap && prevGroupMeta.errorSourceMap === errorSourceMap && prevGroupMeta.errors === errors && prevGroupMeta.isFieldsValidating === isFieldsValidating && prevGroupMeta.isFieldsValid === isFieldsValid && prevGroupMeta.isGroupValid === isGroupValid && prevGroupMeta.isValid === isValid && prevGroupMeta.canSubmit === canSubmit && prevGroupMeta.isTouched === aggIsTouched && prevGroupMeta.isBlurred === aggIsBlurred && prevGroupMeta.isPristine === isPristine && prevGroupMeta.isDefaultValue === aggIsDefaultValue && prevGroupMeta.isDirty === aggIsDirty && prevGroupMeta.isValidating === isValidating && prevGroupMeta.isSubmitting === lifecycle.isSubmitting && prevGroupMeta.isSubmitted === lifecycle.isSubmitted && prevGroupMeta.submissionAttempts === lifecycle.submissionAttempts && prevGroupMeta.isSubmitSuccessful === lifecycle.isSubmitSuccessful) {
					result[groupName] = prevGroupMeta;
					continue;
				}
				const meta = {
					...lifecycle,
					errorMap,
					errorSourceMap,
					_arrayVersion: ownFieldMeta?._arrayVersion ?? 0,
					isTouched: aggIsTouched,
					isBlurred: aggIsBlurred,
					isDirty: aggIsDirty,
					isPristine,
					isDefaultValue: aggIsDefaultValue,
					isValid,
					errors,
					isValidating,
					isFieldsValidating,
					isFieldsValid,
					isGroupValid,
					canSubmit
				};
				Object.defineProperty(meta, "__srcErrorMap", {
					value: errorMap,
					enumerable: false,
					configurable: true
				});
				result[groupName] = meta;
			}
			return result;
		});
		let prevBaseStoreForStore = void 0;
		this.store = createStore((prevVal) => {
			const currBaseStore = this.baseStore.get();
			const currFieldMeta = this.fieldMetaDerived.get();
			const fieldMetaValues = Object.values(currFieldMeta).filter(Boolean);
			const isFieldsValidating = fieldMetaValues.some((field) => field.isValidating);
			const isFieldsValid = fieldMetaValues.every((field) => field.isValid);
			const isTouched = fieldMetaValues.some((field) => field.isTouched);
			const isBlurred = fieldMetaValues.some((field) => field.isBlurred);
			const isDefaultValue = fieldMetaValues.every((field) => field.isDefaultValue);
			const shouldInvalidateOnMount = isTouched && currBaseStore.errorMap?.onMount;
			const isDirty = fieldMetaValues.some((field) => field.isDirty);
			const isPristine = !isDirty;
			const hasOnMountError = Boolean(currBaseStore.errorMap?.onMount || fieldMetaValues.some((f) => f?.errorMap?.onMount));
			const isValidating = !!isFieldsValidating;
			let errors = prevVal?.errors ?? [];
			if (!prevBaseStoreForStore || currBaseStore.errorMap !== prevBaseStoreForStore.errorMap) errors = Object.values(currBaseStore.errorMap).reduce((prev, curr) => {
				if (curr === void 0) return prev;
				if (curr && isGlobalFormValidationError(curr)) {
					prev.push(curr.form);
					return prev;
				}
				prev.push(curr);
				return prev;
			}, []);
			const isFormValid = errors.length === 0;
			const isValid = isFieldsValid && isFormValid;
			const submitInvalid = this.options.canSubmitWhenInvalid ?? false;
			const canSubmit = currBaseStore.submissionAttempts === 0 && !isTouched && !hasOnMountError || !isValidating && !currBaseStore.isSubmitting && isValid || submitInvalid;
			let errorMap = currBaseStore.errorMap;
			if (shouldInvalidateOnMount) {
				errors = errors.filter((err) => err !== currBaseStore.errorMap.onMount);
				errorMap = Object.assign(errorMap, { onMount: void 0 });
			}
			if (prevVal && prevBaseStoreForStore && prevVal.errorMap === errorMap && prevVal.fieldMeta === this.fieldMetaDerived.state && prevVal.errors === errors && prevVal.isFieldsValidating === isFieldsValidating && prevVal.isFieldsValid === isFieldsValid && prevVal.isFormValid === isFormValid && prevVal.isValid === isValid && prevVal.canSubmit === canSubmit && prevVal.isTouched === isTouched && prevVal.isBlurred === isBlurred && prevVal.isPristine === isPristine && prevVal.isDefaultValue === isDefaultValue && prevVal.isDirty === isDirty && evaluate(prevBaseStoreForStore, currBaseStore)) return prevVal;
			const state = {
				...currBaseStore,
				errorMap,
				fieldMeta: this.fieldMetaDerived.state,
				errors,
				isFieldsValidating,
				isFieldsValid,
				isFormValid,
				isValid,
				canSubmit,
				isTouched,
				isBlurred,
				isPristine,
				isDefaultValue,
				isDirty
			};
			prevBaseStoreForStore = this.baseStore.get();
			return state;
		});
		this.handleSubmit = this.handleSubmit.bind(this);
		this.update(opts || {});
	}
	get state() {
		return this.store.state;
	}
	get formId() {
		return this._formId;
	}
	/**
	* @private
	*/
	runValidator(props) {
		if (isStandardSchemaValidator(props.validate)) return standardSchemaValidators[props.type](props.value, props.validate);
		return props.validate(props.value);
	}
	handleSubmit(submitMeta) {
		return this._handleSubmit(submitMeta);
	}
};
function normalizeError$2(rawError) {
	if (rawError) {
		if (isGlobalFormValidationError(rawError)) return {
			formError: normalizeError$2(rawError.form).formError,
			fieldErrors: rawError.fields
		};
		return { formError: rawError };
	}
	return { formError: void 0 };
}
function getErrorMapKey$2(cause) {
	switch (cause) {
		case "submit": return "onSubmit";
		case "blur": return "onBlur";
		case "mount": return "onMount";
		case "server": return "onServer";
		case "dynamic": return "onDynamic";
		default: return "onChange";
	}
}
//#endregion
//#region node_modules/@tanstack/form-core/dist/esm/FieldApi.js
var FieldApi = class FieldApi {
	/**
	* Initializes a new `FieldApi` instance.
	*/
	constructor(opts) {
		this.options = {};
		this.mount = () => {
			if (this.options.defaultValue !== void 0 && !this.getMeta().isTouched) this.form.setFieldValue(this.name, this.options.defaultValue, { dontUpdateMeta: true });
			const info = this.getInfo();
			info.instance = this;
			this.update(this.options);
			const { onMount } = this.options.validators || {};
			if (onMount) {
				const error = this.runValidator({
					validate: onMount,
					value: {
						value: this.state.value,
						fieldApi: this,
						validationSource: "field"
					},
					type: "validate"
				});
				if (error) this.setMeta((prev) => ({
					...prev,
					errorMap: {
						...prev?.errorMap,
						onMount: error
					},
					errorSourceMap: {
						...prev?.errorSourceMap,
						onMount: "field"
					}
				}));
			}
			this.options.listeners?.onMount?.({
				value: this.state.value,
				fieldApi: this
			});
			return () => {
				for (const [key, timeout] of Object.entries(this.timeoutIds.validations)) if (timeout) {
					clearTimeout(timeout);
					this.timeoutIds.validations[key] = null;
				}
				for (const [key, timeout] of Object.entries(this.timeoutIds.listeners)) if (timeout) {
					clearTimeout(timeout);
					this.timeoutIds.listeners[key] = null;
				}
				for (const [key, timeout] of Object.entries(this.timeoutIds.formListeners)) if (timeout) {
					clearTimeout(timeout);
					this.timeoutIds.formListeners[key] = null;
				}
				const fieldInfo = this.form.fieldInfo[this.name];
				if (!fieldInfo) return;
				if (fieldInfo.instance !== this) return;
				for (const [key, validationMeta] of Object.entries(fieldInfo.validationMetaMap)) {
					validationMeta?.lastAbortController.abort();
					fieldInfo.validationMetaMap[key] = void 0;
				}
				this.form.baseStore.setState((prev) => ({
					...prev,
					fieldMetaBase: {
						...prev.fieldMetaBase,
						[this.name]: {
							...defaultFieldMeta,
							isTouched: prev.fieldMetaBase[this.name]?.isTouched ?? defaultFieldMeta.isTouched,
							isBlurred: prev.fieldMetaBase[this.name]?.isBlurred ?? defaultFieldMeta.isBlurred,
							isDirty: prev.fieldMetaBase[this.name]?.isDirty ?? defaultFieldMeta.isDirty
						}
					}
				}));
				fieldInfo.instance = null;
				this.options.listeners?.onUnmount?.({
					value: this.state.value,
					fieldApi: this
				});
				this.form.options.listeners?.onFieldUnmount?.({
					formApi: this.form,
					fieldApi: this
				});
			};
		};
		this.update = (opts2) => {
			this.options = opts2;
			this.name = opts2.name;
			if (!this.state.meta.isTouched && this.options.defaultValue !== void 0) {
				if (!evaluate(this.form.getFieldValue(this.name), opts2.defaultValue)) this.form.setFieldValue(this.name, opts2.defaultValue, {
					dontUpdateMeta: true,
					dontValidate: true,
					dontRunListeners: true
				});
			}
			if (!this.form.getFieldMeta(this.name)) this.form.setFieldMeta(this.name, this.state.meta);
		};
		this.getValue = () => {
			return this.form.getFieldValue(this.name);
		};
		this.setValue = (updater, options) => {
			this.form.setFieldValue(this.name, updater, mergeOpts(options, {
				dontRunListeners: true,
				dontValidate: true
			}));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
			if (!options?.dontValidate) this.validate("change");
		};
		this.getMeta = () => this.store.state.meta;
		this.setMeta = (updater) => this.form.setFieldMeta(this.name, updater);
		this.getInfo = () => this.form.getFieldInfo(this.name);
		this.pushValue = (value, options) => {
			this.form.pushFieldValue(this.name, value, mergeOpts(options, { dontRunListeners: true }));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
		};
		this.insertValue = (index, value, options) => {
			this.form.insertFieldValue(this.name, index, value, mergeOpts(options, { dontRunListeners: true }));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
		};
		this.replaceValue = (index, value, options) => {
			this.form.replaceFieldValue(this.name, index, value, mergeOpts(options, { dontRunListeners: true }));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
		};
		this.removeValue = (index, options) => {
			this.form.removeFieldValue(this.name, index, mergeOpts(options, { dontRunListeners: true }));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
		};
		this.swapValues = (aIndex, bIndex, options) => {
			this.form.swapFieldValues(this.name, aIndex, bIndex, mergeOpts(options, { dontRunListeners: true }));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
		};
		this.moveValue = (aIndex, bIndex, options) => {
			this.form.moveFieldValues(this.name, aIndex, bIndex, mergeOpts(options, { dontRunListeners: true }));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
		};
		this.clearValues = (options) => {
			this.form.clearFieldValues(this.name, mergeOpts(options, { dontRunListeners: true }));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
		};
		this.getLinkedFields = (cause) => {
			const fields = Object.values(this.form.fieldInfo);
			const linkedFields = [];
			for (const field of fields) {
				if (!field.instance) continue;
				if (!(field.instance instanceof FieldApi)) continue;
				const { onChangeListenTo, onBlurListenTo } = field.instance.options.validators || {};
				if (cause === "change" && onChangeListenTo?.includes(this.name)) linkedFields.push(field.instance);
				if (cause === "blur" && onBlurListenTo?.includes(this.name)) linkedFields.push(field.instance);
			}
			return linkedFields;
		};
		this.validateSync = (cause, errorFromForm) => {
			const validates = getSyncValidatorArray(cause, {
				...this.options,
				form: this.form,
				fieldName: this.name,
				validationLogic: this.form.options.validationLogic || defaultValidationLogic
			});
			const linkedFieldValidates = this.getLinkedFields(cause).reduce((acc, field) => {
				const fieldValidates = getSyncValidatorArray(cause, {
					...field.options,
					form: field.form,
					fieldName: field.name,
					validationLogic: field.form.options.validationLogic || defaultValidationLogic
				});
				fieldValidates.forEach((validate) => {
					validate.field = field;
				});
				return acc.concat(fieldValidates);
			}, []);
			let hasErrored = false;
			batch(() => {
				const validateFieldFn = (field, validateObj) => {
					const errorMapKey = getErrorMapKey$1(validateObj.cause);
					const fieldLevelError = validateObj.validate ? normalizeError$1(field.runValidator({
						validate: validateObj.validate,
						value: {
							value: field.store.state.value,
							validationSource: "field",
							fieldApi: field
						},
						type: "validate"
					})) : void 0;
					const formLevelError = errorFromForm[errorMapKey];
					const { newErrorValue, newSource } = determineFieldLevelErrorSourceAndValue({
						formLevelError,
						fieldLevelError
					});
					if (field.state.meta.errorMap?.[errorMapKey] !== newErrorValue) field.setMeta((prev) => ({
						...prev,
						errorMap: {
							...prev.errorMap,
							[errorMapKey]: newErrorValue
						},
						errorSourceMap: {
							...prev.errorSourceMap,
							[errorMapKey]: newSource
						}
					}));
					if (newErrorValue) hasErrored = true;
				};
				for (const validateObj of validates) validateFieldFn(this, validateObj);
				for (const fieldValitateObj of linkedFieldValidates) {
					if (!fieldValitateObj.validate) continue;
					validateFieldFn(fieldValitateObj.field, fieldValitateObj);
				}
			});
			const submitErrKey = getErrorMapKey$1("submit");
			if (this.state.meta.errorMap?.[submitErrKey] && cause !== "submit" && !hasErrored) this.setMeta((prev) => ({
				...prev,
				errorMap: {
					...prev.errorMap,
					[submitErrKey]: void 0
				},
				errorSourceMap: {
					...prev.errorSourceMap,
					[submitErrKey]: void 0
				}
			}));
			return { hasErrored };
		};
		this.validateAsync = async (cause, formValidationResultPromise) => {
			const validates = getAsyncValidatorArray(cause, {
				...this.options,
				form: this.form,
				fieldName: this.name,
				validationLogic: this.form.options.validationLogic || defaultValidationLogic
			});
			const asyncFormValidationResults = await formValidationResultPromise;
			const linkedFields = this.getLinkedFields(cause);
			const linkedFieldValidates = linkedFields.reduce((acc, field) => {
				const fieldValidates = getAsyncValidatorArray(cause, {
					...field.options,
					form: field.form,
					fieldName: field.name,
					validationLogic: field.form.options.validationLogic || defaultValidationLogic
				});
				fieldValidates.forEach((validate) => {
					validate.field = field;
				});
				return acc.concat(fieldValidates);
			}, []);
			const validatesPromises = [];
			const linkedPromises = [];
			const hasAsyncValidators = validates.some((v) => v.validate) || linkedFieldValidates.some((v) => v.validate);
			if (hasAsyncValidators) {
				if (!this.state.meta.isValidating) this.setMeta((prev) => ({
					...prev,
					isValidating: true
				}));
				for (const linkedField of linkedFields) linkedField.setMeta((prev) => ({
					...prev,
					isValidating: true
				}));
			}
			const validateFieldAsyncFn = (field, validateObj, promises) => {
				const errorMapKey = getErrorMapKey$1(validateObj.cause);
				const fieldInfo = field.getInfo();
				fieldInfo.validationMetaMap[errorMapKey]?.lastAbortController.abort();
				const controller = new AbortController();
				fieldInfo.validationMetaMap[errorMapKey] = { lastAbortController: controller };
				promises.push(new Promise(async (resolve) => {
					let rawError;
					try {
						rawError = await new Promise((rawResolve, rawReject) => {
							if (field.timeoutIds.validations[validateObj.cause]) clearTimeout(field.timeoutIds.validations[validateObj.cause]);
							field.timeoutIds.validations[validateObj.cause] = setTimeout(async () => {
								if (controller.signal.aborted) return rawResolve(void 0);
								try {
									rawResolve(await this.runValidator({
										validate: validateObj.validate,
										value: {
											value: field.store.state.value,
											fieldApi: field,
											signal: controller.signal,
											validationSource: "field"
										},
										type: "validateAsync"
									}));
								} catch (e) {
									rawReject(e);
								}
							}, validateObj.debounceMs);
						});
					} catch (e) {
						rawError = e;
					}
					if (controller.signal.aborted) return resolve(void 0);
					const fieldLevelError = normalizeError$1(rawError);
					const formLevelError = asyncFormValidationResults[field.name]?.[errorMapKey];
					const { newErrorValue, newSource } = determineFieldLevelErrorSourceAndValue({
						formLevelError,
						fieldLevelError
					});
					if (field.getInfo().instance !== field) return resolve(void 0);
					field.setMeta((prev) => {
						return {
							...prev,
							errorMap: {
								...prev?.errorMap,
								[errorMapKey]: newErrorValue
							},
							errorSourceMap: {
								...prev.errorSourceMap,
								[errorMapKey]: newSource
							}
						};
					});
					resolve(newErrorValue);
				}));
			};
			for (const validateObj of validates) {
				if (!validateObj.validate) continue;
				validateFieldAsyncFn(this, validateObj, validatesPromises);
			}
			for (const fieldValitateObj of linkedFieldValidates) {
				if (!fieldValitateObj.validate) continue;
				validateFieldAsyncFn(fieldValitateObj.field, fieldValitateObj, linkedPromises);
			}
			let results = [];
			if (validatesPromises.length || linkedPromises.length) {
				results = await Promise.all(validatesPromises);
				await Promise.all(linkedPromises);
			}
			if (hasAsyncValidators) {
				this.setMeta((prev) => ({
					...prev,
					isValidating: false
				}));
				for (const linkedField of linkedFields) linkedField.setMeta((prev) => ({
					...prev,
					isValidating: false
				}));
			}
			return results.filter(Boolean);
		};
		this.validate = (cause, opts2) => {
			if (!this.state.meta.isTouched) return [];
			const encompassingGroups = opts2?.skipGroupValidation ? [] : Array.from(this.form.formGroupApis).filter((group) => this.name.startsWith(group.name));
			let fieldsErrorMap = (opts2?.skipFormValidation ? { fieldsErrorMap: {} } : this.form.validateSync(cause)).fieldsErrorMap[this.name] ?? {};
			if (!opts2?.skipFormValidation) for (const group of encompassingGroups) {
				if (group.state.meta.submissionAttempts === 0) continue;
				const { fieldsErrorMap: groupFormErrors } = this.form.validateSync(cause, {
					group,
					dontUpdateFormErrorMap: true,
					filterFieldNames: (fieldName) => isFieldInGroup(group.name, fieldName)
				});
				fieldsErrorMap = {
					...fieldsErrorMap,
					...groupFormErrors[this.name] ?? {}
				};
			}
			const { hasErrored } = this.validateSync(cause, fieldsErrorMap);
			const groupHasErroredWeakMap = /* @__PURE__ */ new WeakMap();
			for (const group of encompassingGroups) {
				const { hasErrored: groupHasErrored } = group.validateSync(cause, {}, { skipRelatedFieldValidation: true });
				groupHasErroredWeakMap.set(group, groupHasErrored);
			}
			if (hasErrored && !this.options.asyncAlways) {
				this.getInfo().validationMetaMap[getErrorMapKey$1(cause)]?.lastAbortController.abort();
				const groupErrors = [];
				for (const group of encompassingGroups) {
					group.getInfo().validationMetaMap[getErrorMapKey$1(cause)]?.lastAbortController.abort();
					groupErrors.push(group.state.meta.errors);
				}
				return [...this.state.meta.errors, ...groupErrors.flat()];
			}
			const formValidationResultPromise = opts2?.skipFormValidation ? Promise.resolve({}) : this.form.validateAsync(cause);
			const fieldAsyncResults = this.validateAsync(cause, formValidationResultPromise);
			const groupAsyncResults = [];
			for (const group of encompassingGroups) {
				if (groupHasErroredWeakMap.get(group) && !group.options.asyncAlways) continue;
				groupAsyncResults.push(group.validateAsync(cause, formValidationResultPromise, { skipRelatedFieldValidation: true }));
			}
			if (groupAsyncResults.length === 0) return fieldAsyncResults;
			return Promise.all([fieldAsyncResults, ...groupAsyncResults]).then((results) => results.flat());
		};
		this.handleChange = (updater) => {
			this.setValue(updater);
		};
		this.handleBlur = () => {
			if (!this.state.meta.isTouched) this.setMeta((prev) => ({
				...prev,
				isTouched: true
			}));
			if (!this.state.meta.isBlurred) this.setMeta((prev) => ({
				...prev,
				isBlurred: true
			}));
			this.validate("blur");
			this.triggerOnBlurListener();
		};
		this.setErrorMap = (errorMap) => {
			this.setMeta((prev) => ({
				...prev,
				errorMap: {
					...prev.errorMap,
					...errorMap
				}
			}));
		};
		this.parseValueWithSchema = (schema) => {
			return standardSchemaValidators.validate({
				value: this.state.value,
				validationSource: "field"
			}, schema);
		};
		this.parseValueWithSchemaAsync = (schema) => {
			return standardSchemaValidators.validateAsync({
				value: this.state.value,
				validationSource: "field"
			}, schema);
		};
		this.triggerOnBlurListener = () => {
			const formDebounceMs = this.form.options.listeners?.onBlurDebounceMs;
			if (formDebounceMs && formDebounceMs > 0) {
				if (this.timeoutIds.formListeners.blur) clearTimeout(this.timeoutIds.formListeners.blur);
				this.timeoutIds.formListeners.blur = setTimeout(() => {
					this.form.options.listeners?.onBlur?.({
						formApi: this.form,
						fieldApi: this
					});
				}, formDebounceMs);
			} else this.form.options.listeners?.onBlur?.({
				formApi: this.form,
				fieldApi: this
			});
			const fieldDebounceMs = this.options.listeners?.onBlurDebounceMs;
			if (fieldDebounceMs && fieldDebounceMs > 0) {
				if (this.timeoutIds.listeners.blur) clearTimeout(this.timeoutIds.listeners.blur);
				this.timeoutIds.listeners.blur = setTimeout(() => {
					this.options.listeners?.onBlur?.({
						value: this.state.value,
						fieldApi: this
					});
				}, fieldDebounceMs);
			} else this.options.listeners?.onBlur?.({
				value: this.state.value,
				fieldApi: this
			});
		};
		this.triggerOnChangeListener = () => {
			const formDebounceMs = this.form.options.listeners?.onChangeDebounceMs;
			if (formDebounceMs && formDebounceMs > 0) {
				if (this.timeoutIds.formListeners.change) clearTimeout(this.timeoutIds.formListeners.change);
				this.timeoutIds.formListeners.change = setTimeout(() => {
					this.form.options.listeners?.onChange?.({
						formApi: this.form,
						fieldApi: this
					});
				}, formDebounceMs);
			} else this.form.options.listeners?.onChange?.({
				formApi: this.form,
				fieldApi: this
			});
			const fieldDebounceMs = this.options.listeners?.onChangeDebounceMs;
			if (fieldDebounceMs && fieldDebounceMs > 0) {
				if (this.timeoutIds.listeners.change) clearTimeout(this.timeoutIds.listeners.change);
				this.timeoutIds.listeners.change = setTimeout(() => {
					this.options.listeners?.onChange?.({
						value: this.state.value,
						fieldApi: this
					});
				}, fieldDebounceMs);
			} else this.options.listeners?.onChange?.({
				value: this.state.value,
				fieldApi: this
			});
			for (const group of this.form.formGroupApis) if (isFieldInGroup(group.name, this.name)) group.triggerOnChangeListener();
		};
		this.triggerOnSubmitListener = () => {
			this.options.listeners?.onSubmit?.({
				value: this.state.value,
				fieldApi: this
			});
		};
		this.form = opts.form;
		this.name = opts.name;
		this.options = opts;
		this.timeoutIds = {
			validations: {},
			listeners: {},
			formListeners: {}
		};
		this.store = createStore((prevVal) => {
			this.form.store.get();
			const meta = this.form.getFieldMeta(this.name) ?? {
				...defaultFieldMeta,
				...opts.defaultMeta
			};
			let value = this.form.getFieldValue(this.name);
			if (!meta.isTouched && value === void 0 && this.options.defaultValue !== void 0 && !evaluate(value, this.options.defaultValue)) value = this.options.defaultValue;
			if (prevVal && prevVal.value === value && prevVal.meta === meta) return prevVal;
			return {
				value,
				meta
			};
		});
	}
	/**
	* The current field state.
	*/
	get state() {
		return this.store.state;
	}
	/**
	* @private
	*/
	runValidator(props) {
		if (isStandardSchemaValidator(props.validate)) return standardSchemaValidators[props.type](props.value, props.validate);
		return props.validate(props.value);
	}
};
function normalizeError$1(rawError) {
	if (rawError) return rawError;
}
function getErrorMapKey$1(cause) {
	switch (cause) {
		case "submit": return "onSubmit";
		case "blur": return "onBlur";
		case "mount": return "onMount";
		case "server": return "onServer";
		case "dynamic": return "onDynamic";
		default: return "onChange";
	}
}
//#endregion
//#region node_modules/@tanstack/form-core/dist/esm/FormGroupApi.js
function getDefaultFormGroupState(defaultState) {
	return {
		isSubmitted: defaultState.isSubmitted ?? false,
		isSubmitting: defaultState.isSubmitting ?? false,
		isValidating: defaultState.isValidating ?? false,
		submissionAttempts: defaultState.submissionAttempts ?? 0,
		isSubmitSuccessful: defaultState.isSubmitSuccessful ?? false
	};
}
function getDefaultFormGroupMeta(defaultMeta) {
	return {
		...defaultFieldMeta,
		...defaultMeta,
		errors: [],
		isPristine: true,
		isValid: true,
		isDefaultValue: true,
		isFieldsValidating: false,
		isFieldsValid: true,
		isGroupValid: true,
		canSubmit: true,
		isSubmitting: false,
		isSubmitted: false,
		isValidating: false,
		submissionAttempts: 0,
		isSubmitSuccessful: false
	};
}
var FormGroupApi = class FormGroupApi {
	constructor(opts) {
		this.options = {};
		this.setFormGroupState = (updater) => {
			this.form.baseStore.setState((prev) => {
				const prevGroupState = prev.formGroupStateBase[this.name] ?? getDefaultFormGroupState({});
				return {
					...prev,
					formGroupStateBase: {
						...prev.formGroupStateBase,
						[this.name]: updater(prevGroupState)
					}
				};
			});
		};
		this._lastDistributedFieldNames = {};
		this.update = (opts2) => {
			this.options = opts2;
			this.name = opts2.name;
			if (!this.state.meta.isTouched && this.options.defaultValue !== void 0) {
				if (!evaluate(this.form.getFieldValue(this.name), opts2.defaultValue)) this.form.setFieldValue(this.name, opts2.defaultValue, {
					dontUpdateMeta: true,
					dontValidate: true,
					dontRunListeners: true
				});
			}
			if (!this.form.getFieldMeta(this.name)) this.form.setFieldMeta(this.name, {
				...defaultFieldMeta,
				...this.options.defaultMeta
			});
		};
		this.mount = () => {
			this.update(this.options);
			this.form.formGroupApis.add(this);
			this.fieldInfo.instance = this;
			this.form.baseStore.setState((prev) => ({
				...prev,
				formGroupStateBase: {
					...prev.formGroupStateBase,
					[this.name]: prev.formGroupStateBase[this.name] ?? getDefaultFormGroupState({ ...this.options.defaultState })
				}
			}));
			const { onMount } = this.options.validators || {};
			if (onMount) {
				const rawError = this.runValidator({
					validate: onMount,
					value: {
						value: this.state.value,
						groupApi: this,
						validationSource: "form"
					},
					type: "validate"
				});
				let groupOwnRawError = rawError;
				let groupFieldErrors = void 0;
				if (isGlobalGroupValidationError(rawError)) {
					groupOwnRawError = rawError.group;
					groupFieldErrors = rawError.fields;
				}
				const error = normalizeError(groupOwnRawError);
				if (error) this.setMeta((prev) => ({
					...prev,
					errorMap: {
						...prev.errorMap,
						onMount: error
					},
					errorSourceMap: {
						...prev.errorSourceMap,
						onMount: "field"
					}
				}));
				this.distributeFieldErrors("onMount", groupFieldErrors);
			}
			this.options.listeners?.onMount?.({
				value: this.state.value,
				groupApi: this
			});
			return () => {
				for (const [key, timeout] of Object.entries(this.timeoutIds.validations)) if (timeout) {
					clearTimeout(timeout);
					this.timeoutIds.validations[key] = null;
				}
				for (const [key, timeout] of Object.entries(this.timeoutIds.listeners)) if (timeout) {
					clearTimeout(timeout);
					this.timeoutIds.listeners[key] = null;
				}
				for (const [key, timeout] of Object.entries(this.timeoutIds.formListeners)) if (timeout) {
					clearTimeout(timeout);
					this.timeoutIds.formListeners[key] = null;
				}
				if (this.fieldInfo.instance !== this) return;
				for (const [key, validationMeta] of Object.entries(this.fieldInfo.validationMetaMap)) {
					validationMeta?.lastAbortController.abort();
					this.fieldInfo.validationMetaMap[key] = void 0;
				}
				this.form.formGroupApis.delete(this);
				this.form.baseStore.setState((prev) => ({
					...prev,
					formGroupStateBase: {
						...prev.formGroupStateBase,
						[this.name]: getDefaultFormGroupState({})
					}
				}));
				this.fieldInfo.instance = null;
				this.options.listeners?.onUnmount?.({
					value: this.state.value,
					groupApi: this
				});
			};
		};
		this.setValue = (updater, options) => {
			this.form.setFieldValue(this.name, updater, mergeOpts(options, {
				dontRunListeners: true,
				dontValidate: true
			}));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
			if (!options?.dontValidate) this.validate("change");
		};
		this.getMeta = () => this.store.state.meta;
		this.setMeta = (updater) => this.form.setFieldMeta(this.name, updater);
		this.getInfo = () => this.fieldInfo;
		this.getRelatedFields = () => {
			const fields = Object.values(this.form.fieldInfo);
			const relatedFields = [];
			for (const field of fields) {
				if (!field.instance) continue;
				if (!(field.instance instanceof FieldApi)) continue;
				if (field.instance.name.startsWith(this.name)) relatedFields.push(field.instance);
			}
			return relatedFields;
		};
		this.getRelatedFieldMetasDerived = () => {
			const fields = Object.entries(this.form.fieldMetaDerived.state);
			const relatedFieldMetas = [];
			for (const [fieldName, fieldMeta] of fields) {
				if (fieldName === this.name) continue;
				if (isFieldInGroup(this.name, fieldName)) relatedFieldMetas.push({
					...fieldMeta,
					name: fieldName
				});
			}
			return relatedFieldMetas;
		};
		this.buildChildFieldName = (relativeName) => {
			if (relativeName === "") return this.name;
			if (relativeName.startsWith("[")) return `${this.name}${relativeName}`;
			return `${this.name}.${relativeName}`;
		};
		this.distributeFieldErrors = (errorMapKey, fieldErrors) => {
			const previousNames = this._lastDistributedFieldNames[errorMapKey] ?? /* @__PURE__ */ new Set();
			const currentNames = /* @__PURE__ */ new Set();
			if (fieldErrors) for (const [relativeName, err] of Object.entries(fieldErrors)) {
				if (err === void 0 || err === null || err === false) continue;
				currentNames.add(this.buildChildFieldName(relativeName));
			}
			const allNames = /* @__PURE__ */ new Set([...previousNames, ...currentNames]);
			let hasErrored = false;
			for (const fullName of allNames) {
				const relativeName = fullName.startsWith(this.name + "[") ? fullName.slice(this.name.length) : fullName.slice(this.name.length + 1);
				const newFormValidatorError = fieldErrors?.[relativeName];
				const fieldMeta = this.form.getFieldMeta(fullName);
				if (!fieldMeta && !newFormValidatorError) continue;
				const previousErrorValue = fieldMeta?.errorMap[errorMapKey];
				const { newErrorValue, newSource } = determineFormLevelErrorSourceAndValue({
					newFormValidatorError,
					isPreviousErrorFromFormValidator: fieldMeta?.errorSourceMap[errorMapKey] === "form",
					previousErrorValue
				});
				if (newErrorValue) hasErrored = true;
				if (previousErrorValue === newErrorValue && fieldMeta?.errorSourceMap[errorMapKey] === newSource) continue;
				this.form.setFieldMeta(fullName, (prev) => ({
					...prev,
					errorMap: {
						...prev.errorMap,
						[errorMapKey]: newErrorValue
					},
					errorSourceMap: {
						...prev.errorSourceMap,
						[errorMapKey]: newSource
					}
				}));
			}
			this._lastDistributedFieldNames[errorMapKey] = currentNames;
			return hasErrored;
		};
		this.validateSync = (cause, errorFromForm, opts2 = {}) => {
			const validates = getSyncValidatorArray(cause, {
				...this.options,
				form: this.form,
				group: this,
				validationLogic: this.options.validationLogic || this.form.options.validationLogic || defaultValidationLogic
			});
			const relatedFieldValidates = (opts2.skipRelatedFieldValidation ? [] : this.getRelatedFields()).reduce((acc, field) => {
				const fieldValidates = getSyncValidatorArray(cause, {
					...field.options,
					form: field.form,
					validationLogic: field.form.options.validationLogic || defaultValidationLogic
				});
				fieldValidates.forEach((validate) => {
					validate.field = field;
				});
				return acc.concat(fieldValidates);
			}, []);
			let hasErrored = false;
			batch(() => {
				const validateFieldOrGroupFn = (fieldOrGroup, validateObj) => {
					const errorMapKey = getErrorMapKey(validateObj.cause);
					const isGroup = fieldOrGroup === this;
					let rawError = void 0;
					if (validateObj.validate) rawError = fieldOrGroup.runValidator({
						validate: validateObj.validate,
						value: {
							value: fieldOrGroup.store.state.value,
							validationSource: isGroup ? "form" : "field",
							...fieldOrGroup instanceof FormGroupApi ? { groupApi: fieldOrGroup } : { fieldApi: fieldOrGroup }
						},
						type: "validate"
					});
					let groupOwnRawError = rawError;
					let groupFieldErrors = void 0;
					if (isGroup && isGlobalGroupValidationError(rawError)) {
						groupOwnRawError = rawError.group;
						groupFieldErrors = rawError.fields;
					}
					const fieldLevelError = normalizeError(groupOwnRawError);
					const formLevelError = errorFromForm[errorMapKey];
					const { newErrorValue, newSource } = determineFieldLevelErrorSourceAndValue({
						formLevelError,
						fieldLevelError
					});
					if (fieldOrGroup.state.meta.errorMap?.[errorMapKey] !== newErrorValue) fieldOrGroup.setMeta((prev) => ({
						...prev,
						errorMap: {
							...prev.errorMap,
							[errorMapKey]: newErrorValue
						},
						errorSourceMap: {
							...prev.errorSourceMap,
							[errorMapKey]: newSource
						}
					}));
					if (newErrorValue) hasErrored = true;
					if (isGroup) {
						if (this.distributeFieldErrors(errorMapKey, groupFieldErrors)) hasErrored = true;
					}
				};
				for (const validateObj of validates) validateFieldOrGroupFn(this, validateObj);
				for (const fieldValidateObj of relatedFieldValidates) {
					if (!fieldValidateObj.validate) continue;
					validateFieldOrGroupFn(fieldValidateObj.field, fieldValidateObj);
				}
			});
			const submitErrKey = getErrorMapKey("submit");
			if (this.state.meta.errorMap?.[submitErrKey] && cause !== "submit" && !hasErrored) this.setMeta((prev) => ({
				...prev,
				errorMap: {
					...prev.errorMap,
					[submitErrKey]: void 0
				},
				errorSourceMap: {
					...prev.errorSourceMap,
					[submitErrKey]: void 0
				}
			}));
			return { hasErrored };
		};
		this.validateAsync = async (cause, formValidationResultPromise, opts2 = {}) => {
			const validates = getAsyncValidatorArray(cause, {
				...this.options,
				form: this.form,
				group: this,
				validationLogic: this.options.validationLogic || this.form.options.validationLogic || defaultValidationLogic
			});
			const asyncFormValidationResults = await formValidationResultPromise;
			const relatedFields = opts2.skipRelatedFieldValidation ? [] : this.getRelatedFields();
			const relatedFieldValidates = relatedFields.reduce((acc, field) => {
				const fieldValidates = getAsyncValidatorArray(cause, {
					...field.options,
					form: field.form,
					validationLogic: field.form.options.validationLogic || defaultValidationLogic
				});
				fieldValidates.forEach((validate) => {
					validate.field = field;
				});
				return acc.concat(fieldValidates);
			}, []);
			const validatesPromises = [];
			const linkedPromises = [];
			const hasAsyncValidators = validates.some((v) => v.validate) || relatedFieldValidates.some((v) => v.validate);
			if (hasAsyncValidators) {
				if (!this.state.meta.isValidating) this.setMeta((prev) => ({
					...prev,
					isValidating: true
				}));
				for (const linkedField of relatedFields) linkedField.setMeta((prev) => ({
					...prev,
					isValidating: true
				}));
			}
			const validateFieldOrGroupAsyncFn = (fieldOrGroup, validateObj, promises) => {
				const errorMapKey = getErrorMapKey(validateObj.cause);
				const fieldInfo = fieldOrGroup.getInfo();
				fieldInfo.validationMetaMap[errorMapKey]?.lastAbortController.abort();
				const controller = new AbortController();
				fieldInfo.validationMetaMap[errorMapKey] = { lastAbortController: controller };
				const isGroup = fieldOrGroup === this;
				promises.push(new Promise(async (resolve) => {
					let rawError;
					try {
						rawError = await new Promise((rawResolve, rawReject) => {
							if (fieldOrGroup.timeoutIds.validations[validateObj.cause]) clearTimeout(fieldOrGroup.timeoutIds.validations[validateObj.cause]);
							fieldOrGroup.timeoutIds.validations[validateObj.cause] = setTimeout(async () => {
								if (controller.signal.aborted) return rawResolve(void 0);
								try {
									rawResolve(await this.runValidator({
										validate: validateObj.validate,
										value: {
											value: fieldOrGroup.store.state.value,
											signal: controller.signal,
											validationSource: isGroup ? "form" : "field",
											...fieldOrGroup instanceof FormGroupApi ? { groupApi: fieldOrGroup } : { fieldApi: fieldOrGroup }
										},
										type: "validateAsync"
									}));
								} catch (e) {
									rawReject(e);
								}
							}, validateObj.debounceMs);
						});
					} catch (e) {
						rawError = e;
					}
					if (controller.signal.aborted) return resolve(void 0);
					let groupOwnRawError = rawError;
					let groupFieldErrors = void 0;
					if (isGroup && isGlobalGroupValidationError(rawError)) {
						groupOwnRawError = rawError.group;
						groupFieldErrors = rawError.fields;
					}
					const fieldLevelError = normalizeError(groupOwnRawError);
					const formLevelError = asyncFormValidationResults[fieldOrGroup.name]?.[errorMapKey];
					const { newErrorValue, newSource } = determineFieldLevelErrorSourceAndValue({
						formLevelError,
						fieldLevelError
					});
					if (fieldOrGroup.getInfo().instance !== fieldOrGroup) return resolve(void 0);
					fieldOrGroup.setMeta((prev) => {
						return {
							...prev,
							errorMap: {
								...prev?.errorMap,
								[errorMapKey]: newErrorValue
							},
							errorSourceMap: {
								...prev.errorSourceMap,
								[errorMapKey]: newSource
							}
						};
					});
					if (isGroup) this.distributeFieldErrors(errorMapKey, groupFieldErrors);
					resolve(newErrorValue);
				}));
			};
			for (const validateObj of validates) {
				if (!validateObj.validate) continue;
				validateFieldOrGroupAsyncFn(this, validateObj, validatesPromises);
			}
			for (const fieldValitateObj of relatedFieldValidates) {
				if (!fieldValitateObj.validate) continue;
				validateFieldOrGroupAsyncFn(fieldValitateObj.field, fieldValitateObj, linkedPromises);
			}
			let results = [];
			if (validatesPromises.length || linkedPromises.length) {
				results = await Promise.all(validatesPromises);
				await Promise.all(linkedPromises);
			}
			if (hasAsyncValidators) {
				this.setMeta((prev) => ({
					...prev,
					isValidating: false
				}));
				for (const linkedField of relatedFields) linkedField.setMeta((prev) => ({
					...prev,
					isValidating: false
				}));
			}
			return results.filter(Boolean);
		};
		this.validateAllFields = async (cause) => {
			const fieldValidationPromises = [];
			batch(() => {
				Object.values(this.getRelatedFields()).forEach((fieldInstance) => {
					fieldValidationPromises.push(Promise.resolve().then(() => fieldInstance.validate(cause, {
						skipFormValidation: true,
						skipGroupValidation: true
					})));
					if (!fieldInstance.store.state.meta.isTouched) fieldInstance.setMeta((prev) => ({
						...prev,
						isTouched: true
					}));
				});
			});
			return (await Promise.all(fieldValidationPromises)).flat();
		};
		this.validateArrayFieldsStartingFrom = (field, index, cause) => {
			return this.form.validateArrayFieldsStartingFrom(field, index, cause);
		};
		this.validateField = (field, cause) => {
			return this.form.validateField(field, cause);
		};
		this.getFieldValue = (field) => {
			return this.form.getFieldValue(field);
		};
		this.getFieldMeta = (field) => {
			return this.form.getFieldMeta(field);
		};
		this.setFieldMeta = (field, updater) => {
			return this.form.setFieldMeta(field, updater);
		};
		this.setFieldValue = (field, value) => {
			return this.form.setFieldValue(field, value);
		};
		this.deleteField = (field) => {
			return this.form.deleteField(field);
		};
		this.pushFieldValue = (field, value) => {
			return this.form.pushFieldValue(field, value);
		};
		this.insertFieldValue = (field, index, value) => {
			return this.form.insertFieldValue(field, index, value);
		};
		this.replaceFieldValue = (field, index, value) => {
			return this.form.replaceFieldValue(field, index, value);
		};
		this.swapFieldValues = (field, index1, index2) => {
			return this.form.swapFieldValues(field, index1, index2);
		};
		this.moveFieldValues = (field, fromIndex, toIndex) => {
			return this.form.moveFieldValues(field, fromIndex, toIndex);
		};
		this.clearFieldValues = (field) => {
			return this.form.clearFieldValues(field);
		};
		this.resetField = (field) => {
			return this.form.resetField(field);
		};
		this.removeFieldValue = (field, index) => {
			return this.form.removeFieldValue(field, index);
		};
		this.areRelatedFieldsValid = () => {
			return Object.values(this.getRelatedFields()).every((field) => field.state.meta.isValid);
		};
		this.validate = (cause, opts2) => {
			const { fieldsErrorMap } = opts2?.skipFormValidation ? { fieldsErrorMap: {} } : this.form.validateSync(cause, {
				dontUpdateFormErrorMap: true,
				filterFieldNames: (fieldName) => isFieldInGroup(this.name, fieldName)
			});
			const { hasErrored } = this.validateSync(cause, fieldsErrorMap[this.name] ?? {}, { skipRelatedFieldValidation: opts2?.skipRelatedFieldValidation });
			if (hasErrored && !this.options.asyncAlways) {
				this.getInfo().validationMetaMap[getErrorMapKey(cause)]?.lastAbortController.abort();
				return this.state.meta.errors;
			}
			const formValidationResultPromise = opts2?.skipFormValidation ? Promise.resolve({}) : this.form.validateAsync(cause, {
				dontUpdateFormErrorMap: true,
				filterFieldNames: (fieldName) => isFieldInGroup(this.name, fieldName)
			});
			return this.validateAsync(cause, formValidationResultPromise, { skipRelatedFieldValidation: opts2?.skipRelatedFieldValidation });
		};
		this.triggerOnChangeListener = () => {
			const formDebounceMs = this.form.options.listeners?.onChangeGroupDebounceMs;
			if (formDebounceMs && formDebounceMs > 0) {
				if (this.timeoutIds.formListeners.change) clearTimeout(this.timeoutIds.formListeners.change);
				this.timeoutIds.formListeners.change = setTimeout(() => {
					this.form.options.listeners?.onChangeGroup?.({
						formApi: this.form,
						groupApi: this
					});
				}, formDebounceMs);
			} else this.form.options.listeners?.onChangeGroup?.({
				formApi: this.form,
				groupApi: this
			});
			const fieldDebounceMs = this.options.listeners?.onChangeDebounceMs;
			if (fieldDebounceMs && fieldDebounceMs > 0) {
				if (this.timeoutIds.listeners.change) clearTimeout(this.timeoutIds.listeners.change);
				this.timeoutIds.listeners.change = setTimeout(() => {
					this.options.listeners?.onChange?.({
						value: this.state.value,
						groupApi: this
					});
				}, fieldDebounceMs);
			} else this.options.listeners?.onChange?.({
				value: this.state.value,
				groupApi: this
			});
		};
		this.triggerOnSubmitListener = () => {
			this.options.listeners?.onSubmit?.({
				value: this.state.value,
				groupApi: this
			});
		};
		this._handleSubmit = async (submitMeta) => {
			this.setFormGroupState((old) => ({
				...old,
				isSubmitted: false,
				submissionAttempts: old.submissionAttempts + 1,
				isSubmitSuccessful: false
			}));
			batch(() => {
				Object.values(this.getRelatedFields()).forEach((field) => {
					if (!field.state.meta.isTouched) field.setMeta((prev) => ({
						...prev,
						isTouched: true
					}));
				});
			});
			const submitMetaArg = submitMeta ?? this.options.onSubmitMeta;
			this.setFormGroupState((d) => ({
				...d,
				isSubmitting: true
			}));
			const done = () => {
				this.setFormGroupState((prev) => ({
					...prev,
					isSubmitting: false
				}));
			};
			await this.validateAllFields("submit");
			if (!this.areRelatedFieldsValid()) {
				done();
				this.options.onGroupSubmitInvalid?.({
					value: this.state.value,
					groupApi: this,
					meta: submitMetaArg
				});
				return;
			}
			await this.validate("submit", { skipRelatedFieldValidation: true });
			if (!this.areRelatedFieldsValid() || !this.state.meta.isValid) {
				done();
				this.options.onGroupSubmitInvalid?.({
					value: this.state.value,
					groupApi: this,
					meta: submitMetaArg
				});
				return;
			}
			batch(() => {
				Object.values(this.getRelatedFields()).forEach((field) => {
					field.options.listeners?.onGroupSubmit?.({
						value: field.state.value,
						fieldApi: field
					});
				});
			});
			this.options.listeners?.onSubmit?.({
				groupApi: this,
				value: this.state.value
			});
			try {
				await this.options.onGroupSubmit?.({
					value: this.state.value,
					groupApi: this,
					meta: submitMetaArg
				});
				batch(() => {
					this.setFormGroupState((prev) => ({
						...prev,
						isSubmitted: true,
						isSubmitSuccessful: true
					}));
					done();
				});
			} catch (err) {
				this.setFormGroupState((prev) => ({
					...prev,
					isSubmitSuccessful: false
				}));
				done();
				throw err;
			}
		};
		this.form = opts.form;
		this.name = opts.name;
		this.options = opts;
		this.timeoutIds = {
			validations: {},
			listeners: {},
			formListeners: {}
		};
		this.fieldInfo = {
			instance: null,
			validationMetaMap: {
				onChange: void 0,
				onBlur: void 0,
				onSubmit: void 0,
				onMount: void 0,
				onServer: void 0,
				onDynamic: void 0
			}
		};
		this.store = createStore((prevVal) => {
			this.form.formGroupMetaDerived.get();
			this.form.baseStore.get();
			const meta = this.form.getFormGroupMeta(this.name) ?? getDefaultFormGroupMeta(opts.defaultMeta);
			let value = this.form.getFieldValue(this.name);
			if (!meta.isTouched && value === void 0 && this.options.defaultValue !== void 0 && !evaluate(value, this.options.defaultValue)) value = this.options.defaultValue;
			if (prevVal && prevVal.value === value && prevVal.meta === meta) return prevVal;
			return {
				value,
				meta
			};
		});
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	/**
	* The current field state.
	*/
	get state() {
		return this.store.state;
	}
	/**
	* @private
	*/
	runValidator(props) {
		if (isStandardSchemaValidator(props.validate)) {
			const result = standardSchemaValidators[props.type](props.value, props.validate);
			if (props.type === "validate") return remapStandardSchemaResultForGroup(result);
			return result.then(remapStandardSchemaResultForGroup);
		}
		return props.validate(props.value);
	}
	handleSubmit(submitMeta) {
		return this._handleSubmit(submitMeta);
	}
};
function normalizeError(rawError) {
	if (rawError) return rawError;
}
function isGlobalGroupValidationError(error) {
	return !!error && typeof error === "object" && "fields" in error;
}
function remapStandardSchemaResultForGroup(result) {
	if (!result || typeof result !== "object") return result;
	if (!("form" in result) && !("fields" in result)) return result;
	const { form, fields, ...rest } = result;
	return {
		...rest,
		group: form,
		fields
	};
}
function getErrorMapKey(cause) {
	switch (cause) {
		case "submit": return "onSubmit";
		case "blur": return "onBlur";
		case "mount": return "onMount";
		case "server": return "onServer";
		case "dynamic": return "onDynamic";
		default: return "onChange";
	}
}
//#endregion
//#region node_modules/@tanstack/form-core/dist/esm/transform.js
function mergeAndUpdate(form, fn) {
	if (!fn) return;
	const newObj = Object.assign({}, form, { state: deepCopy(form.state) });
	fn(newObj);
	if (newObj.fieldInfo !== form.fieldInfo) form.fieldInfo = newObj.fieldInfo;
	if (newObj.options !== form.options) form.options = newObj.options;
	const diffedObject = Object.keys({
		values: null,
		validationMetaMap: null,
		fieldMetaBase: null,
		formGroupStateBase: null,
		isSubmitting: null,
		isSubmitted: null,
		isValidating: null,
		submissionAttempts: null,
		isSubmitSuccessful: null,
		_force_re_eval: null
	}).reduce((prev, key) => {
		if (form.state[key] !== newObj.state[key]) prev[key] = newObj.state[key];
		return prev;
	}, {});
	batch(() => {
		if (Object.keys(diffedObject).length) form.baseStore.setState((prev) => ({
			...prev,
			...diffedObject
		}));
		if (newObj.state.errorMap !== form.state.errorMap) form.setErrorMap(newObj.state.errorMap);
	});
	return newObj;
}
//#endregion
//#region node_modules/@tanstack/react-store/dist/useSelector.js
var import_with_selector = require_with_selector();
function defaultCompare(a, b) {
	return a === b;
}
/**
* Selects a slice of state from an atom or store and subscribes the component
* to that selection.
*
* This is the primary React read hook for TanStack Store. It works with any
* source that exposes `get()` and `subscribe()`, including atoms, readonly
* atoms, stores, and readonly stores.
*
* Omit the selector to subscribe to the whole value.
*
* @example
* ```tsx
* const count = useSelector(counterStore, (state) => state.count)
* ```
*
* @example
* ```tsx
* const value = useSelector(countAtom)
* ```
*/
function useSelector(source, selector = (s) => s, options) {
	const compare = options?.compare ?? defaultCompare;
	const subscribe = (0, import_react.useCallback)((handleStoreChange) => {
		const { unsubscribe } = source.subscribe(handleStoreChange);
		return unsubscribe;
	}, [source]);
	const getSnapshot = (0, import_react.useCallback)(() => source.get(), [source]);
	return (0, import_with_selector.useSyncExternalStoreWithSelector)(subscribe, getSnapshot, getSnapshot, selector, compare);
}
//#endregion
//#region node_modules/@tanstack/react-store/dist/useStore.js
/**
* Deprecated alias for {@link useSelector}.
*
* @example
* ```tsx
* const count = useStore(counterStore, (state) => state.count)
* ```
*
* @deprecated Use `useSelector` instead.
*/
var useStore = (source, selector = (s) => s, compare) => useSelector(source, selector, { compare });
//#endregion
//#region node_modules/@tanstack/react-form/dist/esm/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
//#endregion
//#region node_modules/@tanstack/react-form/dist/esm/useField.js
function useField(opts) {
	const [prevOptions, setPrevOptions] = (0, import_react.useState)(() => ({
		form: opts.form,
		name: opts.name
	}));
	const [fieldApi, setFieldApi] = (0, import_react.useState)(() => {
		return new FieldApi({ ...opts });
	});
	if (prevOptions.form !== opts.form || prevOptions.name !== opts.name) {
		setFieldApi(new FieldApi({ ...opts }));
		setPrevOptions({
			form: opts.form,
			name: opts.name
		});
	}
	const reactiveStateValue = useStore(fieldApi.store, opts.mode === "array" ? (state) => state.meta._arrayVersion || 0 : (state) => state.value);
	const reactiveMetaIsTouched = useStore(fieldApi.store, (state) => state.meta.isTouched);
	const reactiveMetaIsBlurred = useStore(fieldApi.store, (state) => state.meta.isBlurred);
	const reactiveMetaIsDirty = useStore(fieldApi.store, (state) => state.meta.isDirty);
	const reactiveMetaErrorMap = useStore(fieldApi.store, (state) => state.meta.errorMap);
	const reactiveMetaErrorSourceMap = useStore(fieldApi.store, (state) => state.meta.errorSourceMap);
	const reactiveMetaIsValidating = useStore(fieldApi.store, (state) => state.meta.isValidating);
	const extendedFieldApi = (0, import_react.useMemo)(() => {
		return {
			...fieldApi,
			get state() {
				return {
					value: opts.mode === "array" ? fieldApi.state.value : reactiveStateValue,
					get meta() {
						return {
							...fieldApi.state.meta,
							isTouched: reactiveMetaIsTouched,
							isBlurred: reactiveMetaIsBlurred,
							isDirty: reactiveMetaIsDirty,
							errorMap: reactiveMetaErrorMap,
							errorSourceMap: reactiveMetaErrorSourceMap,
							isValidating: reactiveMetaIsValidating
						};
					}
				};
			}
		};
	}, [
		fieldApi,
		opts.mode,
		reactiveStateValue,
		reactiveMetaIsTouched,
		reactiveMetaIsBlurred,
		reactiveMetaIsDirty,
		reactiveMetaErrorMap,
		reactiveMetaErrorSourceMap,
		reactiveMetaIsValidating
	]);
	useIsomorphicLayoutEffect(fieldApi.mount, [fieldApi]);
	useIsomorphicLayoutEffect(() => {
		fieldApi.update(opts);
	});
	return extendedFieldApi;
}
var Field = (({ children, ...fieldOptions }) => {
	const fieldApi = useField(fieldOptions);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_react.useMemo)(() => functionalUpdate(children, fieldApi), [children, fieldApi]) });
});
//#endregion
//#region node_modules/@tanstack/react-form/dist/esm/useUUID.js
function useUUID() {
	return (0, import_react.useState)(() => uuid())[0];
}
//#endregion
//#region node_modules/@tanstack/react-form/dist/esm/useFormId.js
var _React = import_react;
var useFormId = "19.2.7".split(".")[0] === "17" ? useUUID : _React.useId;
//#endregion
//#region node_modules/@tanstack/react-form/dist/esm/useFormGroup.js
function useFormGroup(opts) {
	const [prevOptions, setPrevOptions] = (0, import_react.useState)(() => ({
		form: opts.form,
		name: opts.name
	}));
	const [formGroupApi, setFormGroupApi] = (0, import_react.useState)(() => {
		return new FormGroupApi({ ...opts });
	});
	if (prevOptions.form !== opts.form || prevOptions.name !== opts.name) {
		setFormGroupApi(new FormGroupApi({ ...opts }));
		setPrevOptions({
			form: opts.form,
			name: opts.name
		});
	}
	const reactiveStateValue = useStore(formGroupApi.store, (state) => state.value);
	const reactiveMetaIsTouched = useStore(formGroupApi.store, (state) => state.meta.isTouched);
	const reactiveMetaIsBlurred = useStore(formGroupApi.store, (state) => state.meta.isBlurred);
	const reactiveMetaIsDirty = useStore(formGroupApi.store, (state) => state.meta.isDirty);
	const reactiveMetaErrorMap = useStore(formGroupApi.store, (state) => state.meta.errorMap);
	const reactiveMetaErrorSourceMap = useStore(formGroupApi.store, (state) => state.meta.errorSourceMap);
	const reactiveMetaIsValidating = useStore(formGroupApi.store, (state) => state.meta.isValidating);
	const reactiveMetaIsSubmitting = useStore(formGroupApi.store, (state) => state.meta.isSubmitting);
	const reactiveMetaIsSubmitted = useStore(formGroupApi.store, (state) => state.meta.isSubmitted);
	const reactiveMetaSubmissionAttempts = useStore(formGroupApi.store, (state) => state.meta.submissionAttempts);
	const reactiveMetaIsSubmitSuccessful = useStore(formGroupApi.store, (state) => state.meta.isSubmitSuccessful);
	const reactiveMetaCanSubmit = useStore(formGroupApi.store, (state) => state.meta.canSubmit);
	const reactiveMetaIsValid = useStore(formGroupApi.store, (state) => state.meta.isValid);
	const reactiveMetaIsFieldsValid = useStore(formGroupApi.store, (state) => state.meta.isFieldsValid);
	const reactiveMetaIsFieldsValidating = useStore(formGroupApi.store, (state) => state.meta.isFieldsValidating);
	const reactiveMetaIsGroupValid = useStore(formGroupApi.store, (state) => state.meta.isGroupValid);
	const extendedFieldApi = (0, import_react.useMemo)(() => {
		return {
			...formGroupApi,
			handleSubmit: ((...props) => {
				return formGroupApi._handleSubmit(...props);
			}),
			get state() {
				return {
					...formGroupApi.state,
					value: reactiveStateValue,
					get meta() {
						return {
							...formGroupApi.state.meta,
							isTouched: reactiveMetaIsTouched,
							isBlurred: reactiveMetaIsBlurred,
							isDirty: reactiveMetaIsDirty,
							errorMap: reactiveMetaErrorMap,
							errorSourceMap: reactiveMetaErrorSourceMap,
							isValidating: reactiveMetaIsValidating,
							isSubmitting: reactiveMetaIsSubmitting,
							isSubmitted: reactiveMetaIsSubmitted,
							submissionAttempts: reactiveMetaSubmissionAttempts,
							isSubmitSuccessful: reactiveMetaIsSubmitSuccessful,
							canSubmit: reactiveMetaCanSubmit,
							isValid: reactiveMetaIsValid,
							isFieldsValid: reactiveMetaIsFieldsValid,
							isFieldsValidating: reactiveMetaIsFieldsValidating,
							isGroupValid: reactiveMetaIsGroupValid
						};
					}
				};
			}
		};
	}, [
		formGroupApi,
		reactiveStateValue,
		reactiveMetaIsTouched,
		reactiveMetaIsBlurred,
		reactiveMetaIsDirty,
		reactiveMetaErrorMap,
		reactiveMetaErrorSourceMap,
		reactiveMetaIsValidating,
		reactiveMetaIsSubmitting,
		reactiveMetaIsSubmitted,
		reactiveMetaSubmissionAttempts,
		reactiveMetaIsSubmitSuccessful,
		reactiveMetaCanSubmit,
		reactiveMetaIsValid,
		reactiveMetaIsFieldsValid,
		reactiveMetaIsFieldsValidating,
		reactiveMetaIsGroupValid
	]);
	useIsomorphicLayoutEffect(formGroupApi.mount, [formGroupApi]);
	useIsomorphicLayoutEffect(() => {
		formGroupApi.update(opts);
	});
	return extendedFieldApi;
}
var FormGroup = (({ children, ...formGroupOptions }) => {
	const formGroupApi = useFormGroup(formGroupOptions);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_react.useMemo)(() => functionalUpdate(children, formGroupApi), [children, formGroupApi]) });
});
//#endregion
//#region node_modules/@tanstack/react-form/dist/esm/useForm.js
function LocalSubscribe({ form, selector = (state) => state, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: functionalUpdate(children, useStore(form.store, selector)) });
}
function useForm(opts) {
	const fallbackFormId = useFormId();
	const [prevFormId, setPrevFormId] = (0, import_react.useState)(opts?.formId);
	const [formApi, setFormApi] = (0, import_react.useState)(() => {
		return new FormApi({
			...opts,
			formId: opts?.formId ?? fallbackFormId
		});
	});
	if (prevFormId !== opts?.formId) {
		const formId = opts?.formId ?? fallbackFormId;
		setFormApi(new FormApi({
			...opts,
			formId
		}));
		setPrevFormId(formId);
	}
	const extendedFormApi = (0, import_react.useMemo)(() => {
		const extendedApi = {
			...formApi,
			handleSubmit: ((...props) => {
				return formApi._handleSubmit(...props);
			}),
			get formId() {
				return formApi._formId;
			},
			get state() {
				return formApi.store.state;
			}
		};
		extendedApi.Field = function APIField(props) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				...props,
				form: formApi
			});
		};
		extendedApi.FormGroup = function APIFormGroup(props) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormGroup, {
				...props,
				form: formApi
			});
		};
		extendedApi.Subscribe = function Subscribe(props) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalSubscribe, {
				form: formApi,
				selector: props.selector,
				children: props.children
			});
		};
		return extendedApi;
	}, [formApi]);
	useIsomorphicLayoutEffect(formApi.mount, []);
	useIsomorphicLayoutEffect(() => {
		formApi.update(opts);
	});
	const hasRan = (0, import_react.useRef)(false);
	useIsomorphicLayoutEffect(() => {
		if (!hasRan.current) return;
		if (!opts?.transform) return;
		mergeAndUpdate(formApi, opts.transform);
	}, [formApi, opts?.transform]);
	useIsomorphicLayoutEffect(() => {
		hasRan.current = true;
	});
	return extendedFormApi;
}
//#endregion
//#region src/components/ui/textarea.tsx
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		"data-slot": "textarea",
		className: cn("flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
//#endregion
//#region src/components/ui/spinner.tsx
function Spinner({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
		"data-slot": "spinner",
		role: "status",
		"aria-label": "Loading",
		className: cn("size-4 animate-spin", className),
		...props
	});
}
//#endregion
//#region src/components/blocks/ContactForm.tsx
var contactFormSchema = object({
	name: string().min(2, "Name must be at least 2 characters"),
	email: string().email("Enter a valid email address"),
	phone: string().min(7, "Enter a valid phone number"),
	message: string().min(10, "Message must be at least 10 characters")
});
function ContactForm() {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			message: ""
		},
		onSubmit: async ({ value }) => {
			const result = contactFormSchema.safeParse(value);
			if (!result.success) return;
			console.info("Contact form submission (stub):", result.data);
			toast.success("Message sent! We will get back to you shortly.");
			form.reset();
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
		className: "flex flex-col gap-5",
		onSubmit: (event) => {
			event.preventDefault();
			form.handleSubmit();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldGroup, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "name",
				validators: { onChange: ({ value }) => {
					const result = contactFormSchema.shape.name.safeParse(value);
					return result.success ? void 0 : result.error.issues[0]?.message;
				} },
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field$1, {
					"data-invalid": field.state.meta.errors.length > 0 || void 0,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							htmlFor: "contact-name",
							children: "Name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "contact-name",
							value: field.state.value,
							onBlur: field.handleBlur,
							onChange: (event) => field.handleChange(event.target.value),
							"aria-invalid": field.state.meta.errors.length > 0 || void 0
						}),
						field.state.meta.errors[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDescription, { children: field.state.meta.errors[0] }) : null
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "email",
				validators: { onChange: ({ value }) => {
					const result = contactFormSchema.shape.email.safeParse(value);
					return result.success ? void 0 : result.error.issues[0]?.message;
				} },
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field$1, {
					"data-invalid": field.state.meta.errors.length > 0 || void 0,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							htmlFor: "contact-email",
							children: "Email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "contact-email",
							type: "email",
							value: field.state.value,
							onBlur: field.handleBlur,
							onChange: (event) => field.handleChange(event.target.value),
							"aria-invalid": field.state.meta.errors.length > 0 || void 0
						}),
						field.state.meta.errors[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDescription, { children: field.state.meta.errors[0] }) : null
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "phone",
				validators: { onChange: ({ value }) => {
					const result = contactFormSchema.shape.phone.safeParse(value);
					return result.success ? void 0 : result.error.issues[0]?.message;
				} },
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field$1, {
					"data-invalid": field.state.meta.errors.length > 0 || void 0,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							htmlFor: "contact-phone",
							children: "Phone"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "contact-phone",
							type: "tel",
							value: field.state.value,
							onBlur: field.handleBlur,
							onChange: (event) => field.handleChange(event.target.value),
							"aria-invalid": field.state.meta.errors.length > 0 || void 0
						}),
						field.state.meta.errors[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDescription, { children: field.state.meta.errors[0] }) : null
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "message",
				validators: { onChange: ({ value }) => {
					const result = contactFormSchema.shape.message.safeParse(value);
					return result.success ? void 0 : result.error.issues[0]?.message;
				} },
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field$1, {
					"data-invalid": field.state.meta.errors.length > 0 || void 0,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							htmlFor: "contact-message",
							children: "Message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "contact-message",
							rows: 5,
							value: field.state.value,
							onBlur: field.handleBlur,
							onChange: (event) => field.handleChange(event.target.value),
							"aria-invalid": field.state.meta.errors.length > 0 || void 0
						}),
						field.state.meta.errors[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDescription, { children: field.state.meta.errors[0] }) : null
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
				selector: (state) => state.isSubmitting,
				children: (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					disabled: isSubmitting,
					children: [isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, { "data-icon": "inline-start" }) : null, "Send message"]
				})
			})
		] })
	});
}
//#endregion
//#region src/recipes/contact-page.tsx
function renderContactPage(_brief, config) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCentered, {
			headline: "Contact us",
			subheadline: "Request a quote or call our team directly.",
			primaryCta: config.secondaryCta ?? config.primaryCta
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, { config }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-xl px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
			})
		})
	] });
}
//#endregion
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	return renderContactPage(null, siteConfig);
}
//#endregion
export { ContactPage as component };
