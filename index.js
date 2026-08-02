// @bun
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toESMCache_node;
var __toESMCache_esm;
var __toESM = (mod, isNodeMode, target) => {
  var canCache = mod != null && typeof mod === "object";
  if (canCache) {
    var cache = isNodeMode ? __toESMCache_node ??= new WeakMap : __toESMCache_esm ??= new WeakMap;
    var cached = cache.get(mod);
    if (cached)
      return cached;
  }
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: __accessProp.bind(mod, key),
        enumerable: true
      });
  if (canCache)
    cache.set(mod, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};

// node_modules/tslib/tslib.js
var require_tslib = __commonJS((exports, module) => {
  var __extends;
  var __assign;
  var __rest;
  var __decorate;
  var __param;
  var __esDecorate;
  var __runInitializers;
  var __propKey;
  var __setFunctionName;
  var __metadata;
  var __awaiter;
  var __generator;
  var __exportStar;
  var __values;
  var __read;
  var __spread;
  var __spreadArrays;
  var __spreadArray;
  var __await;
  var __asyncGenerator;
  var __asyncDelegator;
  var __asyncValues;
  var __makeTemplateObject;
  var __importStar;
  var __importDefault;
  var __classPrivateFieldGet;
  var __classPrivateFieldSet;
  var __classPrivateFieldIn;
  var __createBinding;
  var __addDisposableResource;
  var __disposeResources;
  var __rewriteRelativeImportExtension;
  (function(factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
      define("tslib", ["exports"], function(exports2) {
        factory(createExporter(root, createExporter(exports2)));
      });
    } else if (typeof module === "object" && typeof exports === "object") {
      factory(createExporter(root, createExporter(exports)));
    } else {
      factory(createExporter(root));
    }
    function createExporter(exports2, previous) {
      if (exports2 !== root) {
        if (typeof Object.create === "function") {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          exports2.__esModule = true;
        }
      }
      return function(id2, v) {
        return exports2[id2] = previous ? previous(id2, v) : v;
      };
    }
  })(function(exporter) {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    __extends = function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length;i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    __rest = function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s);i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    __decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1;i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __param = function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    };
    __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f) {
        if (f !== undefined && typeof f !== "function")
          throw new TypeError("Function expected");
        return f;
      }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _, done = false;
      for (var i = decorators.length - 1;i >= 0; i--) {
        var context = {};
        for (var p in contextIn)
          context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access)
          context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
          if (done)
            throw new TypeError("Cannot add initializers after decoration has completed");
          extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
          if (result === undefined)
            continue;
          if (result === null || typeof result !== "object")
            throw new TypeError("Object expected");
          if (_ = accept(result.get))
            descriptor.get = _;
          if (_ = accept(result.set))
            descriptor.set = _;
          if (_ = accept(result.init))
            initializers.unshift(_);
        } else if (_ = accept(result)) {
          if (kind === "field")
            initializers.unshift(_);
          else
            descriptor[key] = _;
        }
      }
      if (target)
        Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
    };
    __runInitializers = function(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i = 0;i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }
      return useValue ? value : undefined;
    };
    __propKey = function(x) {
      return typeof x === "symbol" ? x : "".concat(x);
    };
    __setFunctionName = function(f, name, prefix) {
      if (typeof name === "symbol")
        name = name.description ? "[".concat(name.description, "]") : "";
      return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    };
    __metadata = function(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    __generator = function(thisArg, body2) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
      return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body2.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : undefined, done: true };
      }
    };
    __exportStar = function(m, o) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
          __createBinding(o, m, p);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      o[k2] = m[k];
    };
    __values = function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = undefined;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read = function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === undefined || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    __spread = function() {
      for (var ar = [], i = 0;i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    __spreadArrays = function() {
      for (var s = 0, i = 0, il = arguments.length;i < il; i++)
        s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0;i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length;j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    __spreadArray = function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar;i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    __await = function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    __asyncGenerator = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function awaitReturn(f) {
        return function(v) {
          return Promise.resolve(v).then(f, reject);
        };
      }
      function verb(n, f) {
        if (g[n]) {
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
          if (f)
            i[n] = f(i[n]);
        }
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    __asyncDelegator = function(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function(v) {
          return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
        } : f;
      }
    };
    __asyncValues = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve2, reject) {
            v = o[n](v), settle(resolve2, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve2, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve2({ value: v2, done: d });
        }, reject);
      }
    };
    __makeTemplateObject = function(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };
    var __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    var ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2)
          if (Object.prototype.hasOwnProperty.call(o2, k))
            ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    __importStar = function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k = ownKeys(mod), i = 0;i < k.length; i++)
          if (k[i] !== "default")
            __createBinding(result, mod, k[i]);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    __importDefault = function(mod) {
      return mod && mod.__esModule ? mod : { default: mod };
    };
    __classPrivateFieldGet = function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    __classPrivateFieldSet = function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    __classPrivateFieldIn = function(state, receiver) {
      if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof state === "function" ? receiver === state : state.has(receiver);
    };
    __addDisposableResource = function(env, value, async) {
      if (value !== null && value !== undefined) {
        if (typeof value !== "object" && typeof value !== "function")
          throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
          if (!Symbol.asyncDispose)
            throw new TypeError("Symbol.asyncDispose is not defined.");
          dispose = value[Symbol.asyncDispose];
        }
        if (dispose === undefined) {
          if (!Symbol.dispose)
            throw new TypeError("Symbol.dispose is not defined.");
          dispose = value[Symbol.dispose];
          if (async)
            inner = dispose;
        }
        if (typeof dispose !== "function")
          throw new TypeError("Object not disposable.");
        if (inner)
          dispose = function() {
            try {
              inner.call(this);
            } catch (e) {
              return Promise.reject(e);
            }
          };
        env.stack.push({ value, dispose, async });
      } else if (async) {
        env.stack.push({ async: true });
      }
      return value;
    };
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    __disposeResources = function(env) {
      function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r, s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1)
              return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async)
                return s |= 2, Promise.resolve(result).then(next, function(e) {
                  fail(e);
                  return next();
                });
            } else
              s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1)
          return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
    __rewriteRelativeImportExtension = function(path, preserveJsx) {
      if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
      }
      return path;
    };
    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__esDecorate", __esDecorate);
    exporter("__runInitializers", __runInitializers);
    exporter("__propKey", __propKey);
    exporter("__setFunctionName", __setFunctionName);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    exporter("__addDisposableResource", __addDisposableResource);
    exporter("__disposeResources", __disposeResources);
    exporter("__rewriteRelativeImportExtension", __rewriteRelativeImportExtension);
  });
});

// node_modules/reflect-metadata/Reflect.js
var require_Reflect = __commonJS(() => {
  /*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  var Reflect2;
  (function(Reflect3) {
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
      var exporter = makeExporter(Reflect3);
      if (typeof root.Reflect !== "undefined") {
        exporter = makeExporter(root.Reflect, exporter);
      }
      factory(exporter, root);
      if (typeof root.Reflect === "undefined") {
        root.Reflect = Reflect3;
      }
      function makeExporter(target, previous) {
        return function(key, value) {
          Object.defineProperty(target, key, { configurable: true, writable: true, value });
          if (previous)
            previous(key, value);
        };
      }
      function functionThis() {
        try {
          return Function("return this;")();
        } catch (_) {}
      }
      function indirectEvalThis() {
        try {
          return (undefined, eval)("(function() { return this; })()");
        } catch (_) {}
      }
      function sloppyModeThis() {
        return functionThis() || indirectEvalThis();
      }
    })(function(exporter, root) {
      var hasOwn = Object.prototype.hasOwnProperty;
      var supportsSymbol = typeof Symbol === "function";
      var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
      var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
      var supportsCreate = typeof Object.create === "function";
      var supportsProto = { __proto__: [] } instanceof Array;
      var downLevel = !supportsCreate && !supportsProto;
      var HashMap = {
        create: supportsCreate ? function() {
          return MakeDictionary(Object.create(null));
        } : supportsProto ? function() {
          return MakeDictionary({ __proto__: null });
        } : function() {
          return MakeDictionary({});
        },
        has: downLevel ? function(map, key) {
          return hasOwn.call(map, key);
        } : function(map, key) {
          return key in map;
        },
        get: downLevel ? function(map, key) {
          return hasOwn.call(map, key) ? map[key] : undefined;
        } : function(map, key) {
          return map[key];
        }
      };
      var functionPrototype = Object.getPrototypeOf(Function);
      var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
      var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
      var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
      var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : undefined;
      var metadataRegistry = GetOrCreateMetadataRegistry();
      var metadataProvider = CreateMetadataProvider(metadataRegistry);
      function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
          if (!IsArray(decorators))
            throw new TypeError;
          if (!IsObject(target))
            throw new TypeError;
          if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
            throw new TypeError;
          if (IsNull(attributes))
            attributes = undefined;
          propertyKey = ToPropertyKey(propertyKey);
          return DecorateProperty(decorators, target, propertyKey, attributes);
        } else {
          if (!IsArray(decorators))
            throw new TypeError;
          if (!IsConstructor(target))
            throw new TypeError;
          return DecorateConstructor(decorators, target);
        }
      }
      exporter("decorate", decorate);
      function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError;
          if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
            throw new TypeError;
          OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
      }
      exporter("metadata", metadata);
      function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError;
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }
      exporter("defineMetadata", defineMetadata);
      function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError;
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasMetadata", hasMetadata);
      function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError;
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasOwnMetadata", hasOwnMetadata);
      function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError;
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
      }
      exporter("getMetadata", getMetadata);
      function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError;
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("getOwnMetadata", getOwnMetadata);
      function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError;
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
      }
      exporter("getMetadataKeys", getMetadataKeys);
      function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError;
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
      }
      exporter("getOwnMetadataKeys", getOwnMetadataKeys);
      function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError;
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        if (!IsObject(target))
          throw new TypeError;
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        var provider = GetMetadataProvider(target, propertyKey, false);
        if (IsUndefined(provider))
          return false;
        return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
      }
      exporter("deleteMetadata", deleteMetadata);
      function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1;i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated))
              throw new TypeError;
            target = decorated;
          }
        }
        return target;
      }
      function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1;i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target, propertyKey, descriptor);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated))
              throw new TypeError;
            descriptor = decorated;
          }
        }
        return descriptor;
      }
      function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn2)
          return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
          return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
      }
      function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var provider = GetMetadataProvider(O, P, false);
        if (IsUndefined(provider))
          return false;
        return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
      }
      function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn2)
          return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
          return OrdinaryGetMetadata(MetadataKey, parent, P);
        return;
      }
      function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var provider = GetMetadataProvider(O, P, false);
        if (IsUndefined(provider))
          return;
        return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
      }
      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var provider = GetMetadataProvider(O, P, true);
        provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
      }
      function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null)
          return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0)
          return ownKeys;
        if (ownKeys.length <= 0)
          return parentKeys;
        var set = new _Set;
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys;_i < ownKeys_1.length; _i++) {
          var key = ownKeys_1[_i];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        for (var _a2 = 0, parentKeys_1 = parentKeys;_a2 < parentKeys_1.length; _a2++) {
          var key = parentKeys_1[_a2];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        return keys;
      }
      function OrdinaryOwnMetadataKeys(O, P) {
        var provider = GetMetadataProvider(O, P, false);
        if (!provider) {
          return [];
        }
        return provider.OrdinaryOwnMetadataKeys(O, P);
      }
      function Type(x) {
        if (x === null)
          return 1;
        switch (typeof x) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return x === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function IsUndefined(x) {
        return x === undefined;
      }
      function IsNull(x) {
        return x === null;
      }
      function IsSymbol(x) {
        return typeof x === "symbol";
      }
      function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
      }
      function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
          case 0:
            return input;
          case 1:
            return input;
          case 2:
            return input;
          case 3:
            return input;
          case 4:
            return input;
          case 5:
            return input;
        }
        var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== undefined) {
          var result = exoticToPrim.call(input, hint);
          if (IsObject(result))
            throw new TypeError;
          return result;
        }
        return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
      }
      function OrdinaryToPrimitive(O, hint) {
        if (hint === "string") {
          var toString_1 = O.toString;
          if (IsCallable(toString_1)) {
            var result = toString_1.call(O);
            if (!IsObject(result))
              return result;
          }
          var valueOf = O.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result))
              return result;
          }
        } else {
          var valueOf = O.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result))
              return result;
          }
          var toString_2 = O.toString;
          if (IsCallable(toString_2)) {
            var result = toString_2.call(O);
            if (!IsObject(result))
              return result;
          }
        }
        throw new TypeError;
      }
      function ToBoolean(argument) {
        return !!argument;
      }
      function ToString(argument) {
        return "" + argument;
      }
      function ToPropertyKey(argument) {
        var key = ToPrimitive(argument, 3);
        if (IsSymbol(key))
          return key;
        return ToString(key);
      }
      function IsArray(argument) {
        return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
      }
      function IsCallable(argument) {
        return typeof argument === "function";
      }
      function IsConstructor(argument) {
        return typeof argument === "function";
      }
      function IsPropertyKey(argument) {
        switch (Type(argument)) {
          case 3:
            return true;
          case 4:
            return true;
          default:
            return false;
        }
      }
      function SameValueZero(x, y) {
        return x === y || x !== x && y !== y;
      }
      function GetMethod(V, P) {
        var func = V[P];
        if (func === undefined || func === null)
          return;
        if (!IsCallable(func))
          throw new TypeError;
        return func;
      }
      function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
          throw new TypeError;
        var iterator = method.call(obj);
        if (!IsObject(iterator))
          throw new TypeError;
        return iterator;
      }
      function IteratorValue(iterResult) {
        return iterResult.value;
      }
      function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
      }
      function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f)
          f.call(iterator);
      }
      function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype)
          return proto;
        if (proto !== functionPrototype)
          return proto;
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
          return proto;
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
          return proto;
        if (constructor === O)
          return proto;
        return constructor;
      }
      function CreateMetadataRegistry() {
        var fallback;
        if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
          fallback = CreateFallbackProvider(root.Reflect);
        }
        var first;
        var second;
        var rest;
        var targetProviderMap = new _WeakMap;
        var registry = {
          registerProvider,
          getProvider,
          setProvider
        };
        return registry;
        function registerProvider(provider) {
          if (!Object.isExtensible(registry)) {
            throw new Error("Cannot add provider to a frozen registry.");
          }
          switch (true) {
            case fallback === provider:
              break;
            case IsUndefined(first):
              first = provider;
              break;
            case first === provider:
              break;
            case IsUndefined(second):
              second = provider;
              break;
            case second === provider:
              break;
            default:
              if (rest === undefined)
                rest = new _Set;
              rest.add(provider);
              break;
          }
        }
        function getProviderNoCache(O, P) {
          if (!IsUndefined(first)) {
            if (first.isProviderFor(O, P))
              return first;
            if (!IsUndefined(second)) {
              if (second.isProviderFor(O, P))
                return first;
              if (!IsUndefined(rest)) {
                var iterator = GetIterator(rest);
                while (true) {
                  var next = IteratorStep(iterator);
                  if (!next) {
                    return;
                  }
                  var provider = IteratorValue(next);
                  if (provider.isProviderFor(O, P)) {
                    IteratorClose(iterator);
                    return provider;
                  }
                }
              }
            }
          }
          if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
            return fallback;
          }
          return;
        }
        function getProvider(O, P) {
          var providerMap = targetProviderMap.get(O);
          var provider;
          if (!IsUndefined(providerMap)) {
            provider = providerMap.get(P);
          }
          if (!IsUndefined(provider)) {
            return provider;
          }
          provider = getProviderNoCache(O, P);
          if (!IsUndefined(provider)) {
            if (IsUndefined(providerMap)) {
              providerMap = new _Map;
              targetProviderMap.set(O, providerMap);
            }
            providerMap.set(P, provider);
          }
          return provider;
        }
        function hasProvider(provider) {
          if (IsUndefined(provider))
            throw new TypeError;
          return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
        }
        function setProvider(O, P, provider) {
          if (!hasProvider(provider)) {
            throw new Error("Metadata provider not registered.");
          }
          var existingProvider = getProvider(O, P);
          if (existingProvider !== provider) {
            if (!IsUndefined(existingProvider)) {
              return false;
            }
            var providerMap = targetProviderMap.get(O);
            if (IsUndefined(providerMap)) {
              providerMap = new _Map;
              targetProviderMap.set(O, providerMap);
            }
            providerMap.set(P, provider);
          }
          return true;
        }
      }
      function GetOrCreateMetadataRegistry() {
        var metadataRegistry2;
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          metadataRegistry2 = root.Reflect[registrySymbol];
        }
        if (IsUndefined(metadataRegistry2)) {
          metadataRegistry2 = CreateMetadataRegistry();
        }
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          Object.defineProperty(root.Reflect, registrySymbol, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: metadataRegistry2
          });
        }
        return metadataRegistry2;
      }
      function CreateMetadataProvider(registry) {
        var metadata2 = new _WeakMap;
        var provider = {
          isProviderFor: function(O, P) {
            var targetMetadata = metadata2.get(O);
            if (IsUndefined(targetMetadata))
              return false;
            return targetMetadata.has(P);
          },
          OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
          OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
          OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
          OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
          OrdinaryDeleteMetadata
        };
        metadataRegistry.registerProvider(provider);
        return provider;
        function GetOrCreateMetadataMap(O, P, Create) {
          var targetMetadata = metadata2.get(O);
          var createdTargetMetadata = false;
          if (IsUndefined(targetMetadata)) {
            if (!Create)
              return;
            targetMetadata = new _Map;
            metadata2.set(O, targetMetadata);
            createdTargetMetadata = true;
          }
          var metadataMap = targetMetadata.get(P);
          if (IsUndefined(metadataMap)) {
            if (!Create)
              return;
            metadataMap = new _Map;
            targetMetadata.set(P, metadataMap);
            if (!registry.setProvider(O, P, provider)) {
              targetMetadata.delete(P);
              if (createdTargetMetadata) {
                metadata2.delete(O);
              }
              throw new Error("Wrong provider for target.");
            }
          }
          return metadataMap;
        }
        function OrdinaryHasOwnMetadata2(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(O, P, false);
          if (IsUndefined(metadataMap))
            return false;
          return ToBoolean(metadataMap.has(MetadataKey));
        }
        function OrdinaryGetOwnMetadata2(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(O, P, false);
          if (IsUndefined(metadataMap))
            return;
          return metadataMap.get(MetadataKey);
        }
        function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O, P) {
          var metadataMap = GetOrCreateMetadataMap(O, P, true);
          metadataMap.set(MetadataKey, MetadataValue);
        }
        function OrdinaryOwnMetadataKeys2(O, P) {
          var keys = [];
          var metadataMap = GetOrCreateMetadataMap(O, P, false);
          if (IsUndefined(metadataMap))
            return keys;
          var keysObj = metadataMap.keys();
          var iterator = GetIterator(keysObj);
          var k = 0;
          while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
              keys.length = k;
              return keys;
            }
            var nextValue = IteratorValue(next);
            try {
              keys[k] = nextValue;
            } catch (e) {
              try {
                IteratorClose(iterator);
              } finally {
                throw e;
              }
            }
            k++;
          }
        }
        function OrdinaryDeleteMetadata(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(O, P, false);
          if (IsUndefined(metadataMap))
            return false;
          if (!metadataMap.delete(MetadataKey))
            return false;
          if (metadataMap.size === 0) {
            var targetMetadata = metadata2.get(O);
            if (!IsUndefined(targetMetadata)) {
              targetMetadata.delete(P);
              if (targetMetadata.size === 0) {
                metadata2.delete(targetMetadata);
              }
            }
          }
          return true;
        }
      }
      function CreateFallbackProvider(reflect) {
        var { defineMetadata: defineMetadata2, hasOwnMetadata: hasOwnMetadata2, getOwnMetadata: getOwnMetadata2, getOwnMetadataKeys: getOwnMetadataKeys2, deleteMetadata: deleteMetadata2 } = reflect;
        var metadataOwner = new _WeakMap;
        var provider = {
          isProviderFor: function(O, P) {
            var metadataPropertySet = metadataOwner.get(O);
            if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
              return true;
            }
            if (getOwnMetadataKeys2(O, P).length) {
              if (IsUndefined(metadataPropertySet)) {
                metadataPropertySet = new _Set;
                metadataOwner.set(O, metadataPropertySet);
              }
              metadataPropertySet.add(P);
              return true;
            }
            return false;
          },
          OrdinaryDefineOwnMetadata: defineMetadata2,
          OrdinaryHasOwnMetadata: hasOwnMetadata2,
          OrdinaryGetOwnMetadata: getOwnMetadata2,
          OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
          OrdinaryDeleteMetadata: deleteMetadata2
        };
        return provider;
      }
      function GetMetadataProvider(O, P, Create) {
        var registeredProvider = metadataRegistry.getProvider(O, P);
        if (!IsUndefined(registeredProvider)) {
          return registeredProvider;
        }
        if (Create) {
          if (metadataRegistry.setProvider(O, P, metadataProvider)) {
            return metadataProvider;
          }
          throw new Error("Illegal state.");
        }
        return;
      }
      function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = function() {
          function MapIterator2(keys, values, selector) {
            this._index = 0;
            this._keys = keys;
            this._values = values;
            this._selector = selector;
          }
          MapIterator2.prototype["@@iterator"] = function() {
            return this;
          };
          MapIterator2.prototype[iteratorSymbol] = function() {
            return this;
          };
          MapIterator2.prototype.next = function() {
            var index = this._index;
            if (index >= 0 && index < this._keys.length) {
              var result = this._selector(this._keys[index], this._values[index]);
              if (index + 1 >= this._keys.length) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              } else {
                this._index++;
              }
              return { value: result, done: false };
            }
            return { value: undefined, done: true };
          };
          MapIterator2.prototype.throw = function(error) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            }
            throw error;
          };
          MapIterator2.prototype.return = function(value) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            }
            return { value, done: true };
          };
          return MapIterator2;
        }();
        var Map2 = function() {
          function Map3() {
            this._keys = [];
            this._values = [];
            this._cacheKey = cacheSentinel;
            this._cacheIndex = -2;
          }
          Object.defineProperty(Map3.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: true,
            configurable: true
          });
          Map3.prototype.has = function(key) {
            return this._find(key, false) >= 0;
          };
          Map3.prototype.get = function(key) {
            var index = this._find(key, false);
            return index >= 0 ? this._values[index] : undefined;
          };
          Map3.prototype.set = function(key, value) {
            var index = this._find(key, true);
            this._values[index] = value;
            return this;
          };
          Map3.prototype.delete = function(key) {
            var index = this._find(key, false);
            if (index >= 0) {
              var size = this._keys.length;
              for (var i = index + 1;i < size; i++) {
                this._keys[i - 1] = this._keys[i];
                this._values[i - 1] = this._values[i];
              }
              this._keys.length--;
              this._values.length--;
              if (SameValueZero(key, this._cacheKey)) {
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              }
              return true;
            }
            return false;
          };
          Map3.prototype.clear = function() {
            this._keys.length = 0;
            this._values.length = 0;
            this._cacheKey = cacheSentinel;
            this._cacheIndex = -2;
          };
          Map3.prototype.keys = function() {
            return new MapIterator(this._keys, this._values, getKey);
          };
          Map3.prototype.values = function() {
            return new MapIterator(this._keys, this._values, getValue);
          };
          Map3.prototype.entries = function() {
            return new MapIterator(this._keys, this._values, getEntry);
          };
          Map3.prototype["@@iterator"] = function() {
            return this.entries();
          };
          Map3.prototype[iteratorSymbol] = function() {
            return this.entries();
          };
          Map3.prototype._find = function(key, insert) {
            if (!SameValueZero(this._cacheKey, key)) {
              this._cacheIndex = -1;
              for (var i = 0;i < this._keys.length; i++) {
                if (SameValueZero(this._keys[i], key)) {
                  this._cacheIndex = i;
                  break;
                }
              }
            }
            if (this._cacheIndex < 0 && insert) {
              this._cacheIndex = this._keys.length;
              this._keys.push(key);
              this._values.push(undefined);
            }
            return this._cacheIndex;
          };
          return Map3;
        }();
        return Map2;
        function getKey(key, _) {
          return key;
        }
        function getValue(_, value) {
          return value;
        }
        function getEntry(key, value) {
          return [key, value];
        }
      }
      function CreateSetPolyfill() {
        var Set3 = function() {
          function Set4() {
            this._map = new _Map;
          }
          Object.defineProperty(Set4.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: true,
            configurable: true
          });
          Set4.prototype.has = function(value) {
            return this._map.has(value);
          };
          Set4.prototype.add = function(value) {
            return this._map.set(value, value), this;
          };
          Set4.prototype.delete = function(value) {
            return this._map.delete(value);
          };
          Set4.prototype.clear = function() {
            this._map.clear();
          };
          Set4.prototype.keys = function() {
            return this._map.keys();
          };
          Set4.prototype.values = function() {
            return this._map.keys();
          };
          Set4.prototype.entries = function() {
            return this._map.entries();
          };
          Set4.prototype["@@iterator"] = function() {
            return this.keys();
          };
          Set4.prototype[iteratorSymbol] = function() {
            return this.keys();
          };
          return Set4;
        }();
        return Set3;
      }
      function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return function() {
          function WeakMap2() {
            this._key = CreateUniqueKey();
          }
          WeakMap2.prototype.has = function(target) {
            var table = GetOrCreateWeakMapTable(target, false);
            return table !== undefined ? HashMap.has(table, this._key) : false;
          };
          WeakMap2.prototype.get = function(target) {
            var table = GetOrCreateWeakMapTable(target, false);
            return table !== undefined ? HashMap.get(table, this._key) : undefined;
          };
          WeakMap2.prototype.set = function(target, value) {
            var table = GetOrCreateWeakMapTable(target, true);
            table[this._key] = value;
            return this;
          };
          WeakMap2.prototype.delete = function(target) {
            var table = GetOrCreateWeakMapTable(target, false);
            return table !== undefined ? delete table[this._key] : false;
          };
          WeakMap2.prototype.clear = function() {
            this._key = CreateUniqueKey();
          };
          return WeakMap2;
        }();
        function CreateUniqueKey() {
          var key;
          do
            key = "@@WeakMap@@" + CreateUUID();
          while (HashMap.has(keys, key));
          keys[key] = true;
          return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
          if (!hasOwn.call(target, rootKey)) {
            if (!create)
              return;
            Object.defineProperty(target, rootKey, { value: HashMap.create() });
          }
          return target[rootKey];
        }
        function FillRandomBytes(buffer, size) {
          for (var i = 0;i < size; ++i)
            buffer[i] = Math.random() * 255 | 0;
          return buffer;
        }
        function GenRandomBytes(size) {
          if (typeof Uint8Array === "function") {
            var array = new Uint8Array(size);
            if (typeof crypto !== "undefined") {
              crypto.getRandomValues(array);
            } else if (typeof msCrypto !== "undefined") {
              msCrypto.getRandomValues(array);
            } else {
              FillRandomBytes(array, size);
            }
            return array;
          }
          return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
          var data = GenRandomBytes(UUID_SIZE);
          data[6] = data[6] & 79 | 64;
          data[8] = data[8] & 191 | 128;
          var result = "";
          for (var offset = 0;offset < UUID_SIZE; ++offset) {
            var byte = data[offset];
            if (offset === 4 || offset === 6 || offset === 8)
              result += "-";
            if (byte < 16)
              result += "0";
            result += byte.toString(16).toLowerCase();
          }
          return result;
        }
      }
      function MakeDictionary(obj) {
        obj.__ = undefined;
        delete obj.__;
        return obj;
      }
    });
  })(Reflect2 || (Reflect2 = {}));
});

// node_modules/tsyringe/node_modules/tslib/tslib.js
var require_tslib2 = __commonJS((exports, module) => {
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var __extends2;
  var __assign2;
  var __rest2;
  var __decorate2;
  var __param2;
  var __metadata2;
  var __awaiter2;
  var __generator2;
  var __exportStar2;
  var __values2;
  var __read2;
  var __spread2;
  var __spreadArrays2;
  var __await2;
  var __asyncGenerator2;
  var __asyncDelegator2;
  var __asyncValues2;
  var __makeTemplateObject2;
  var __importStar2;
  var __importDefault2;
  var __classPrivateFieldGet2;
  var __classPrivateFieldSet2;
  var __createBinding2;
  (function(factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
      define("tslib", ["exports"], function(exports2) {
        factory(createExporter(root, createExporter(exports2)));
      });
    } else if (typeof module === "object" && typeof exports === "object") {
      factory(createExporter(root, createExporter(exports)));
    } else {
      factory(createExporter(root));
    }
    function createExporter(exports2, previous) {
      if (exports2 !== root) {
        if (typeof Object.create === "function") {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          exports2.__esModule = true;
        }
      }
      return function(id2, v) {
        return exports2[id2] = previous ? previous(id2, v) : v;
      };
    }
  })(function(exporter) {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
    };
    __extends2 = function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
    __assign2 = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length;i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    __rest2 = function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s);i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    __decorate2 = function(decorators, target2, key, desc) {
      var c = arguments.length, r = c < 3 ? target2 : desc === null ? desc = Object.getOwnPropertyDescriptor(target2, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target2, key, desc);
      else
        for (var i = decorators.length - 1;i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target2, key, r) : d(target2, key)) || r;
      return c > 3 && r && Object.defineProperty(target2, key, r), r;
    };
    __param2 = function(paramIndex, decorator) {
      return function(target2, key) {
        decorator(target2, key, paramIndex);
      };
    };
    __metadata2 = function(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter2 = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    __generator2 = function(thisArg, body2) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body2.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : undefined, done: true };
      }
    };
    __createBinding2 = function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      o[k2] = m[k];
    };
    __exportStar2 = function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !exports2.hasOwnProperty(p))
          exports2[p] = m[p];
    };
    __values2 = function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = undefined;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read2 = function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === undefined || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    __spread2 = function() {
      for (var ar = [], i = 0;i < arguments.length; i++)
        ar = ar.concat(__read2(arguments[i]));
      return ar;
    };
    __spreadArrays2 = function() {
      for (var s = 0, i = 0, il = arguments.length;i < il; i++)
        s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0;i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length;j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    __await2 = function(v) {
      return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
    };
    __asyncGenerator2 = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function verb(n) {
        if (g[n])
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    __asyncDelegator2 = function(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function(v) {
          return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
        } : f;
      }
    };
    __asyncValues2 = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve2, reject) {
            v = o[n](v), settle(resolve2, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve2, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve2({ value: v2, done: d });
        }, reject);
      }
    };
    __makeTemplateObject2 = function(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };
    __importStar2 = function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (Object.hasOwnProperty.call(mod, k))
            result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    };
    __importDefault2 = function(mod) {
      return mod && mod.__esModule ? mod : { default: mod };
    };
    __classPrivateFieldGet2 = function(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    };
    __classPrivateFieldSet2 = function(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    };
    exporter("__extends", __extends2);
    exporter("__assign", __assign2);
    exporter("__rest", __rest2);
    exporter("__decorate", __decorate2);
    exporter("__param", __param2);
    exporter("__metadata", __metadata2);
    exporter("__awaiter", __awaiter2);
    exporter("__generator", __generator2);
    exporter("__exportStar", __exportStar2);
    exporter("__createBinding", __createBinding2);
    exporter("__values", __values2);
    exporter("__read", __read2);
    exporter("__spread", __spread2);
    exporter("__spreadArrays", __spreadArrays2);
    exporter("__await", __await2);
    exporter("__asyncGenerator", __asyncGenerator2);
    exporter("__asyncDelegator", __asyncDelegator2);
    exporter("__asyncValues", __asyncValues2);
    exporter("__makeTemplateObject", __makeTemplateObject2);
    exporter("__importStar", __importStar2);
    exporter("__importDefault", __importDefault2);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
  });
});

// src/index.ts
import { join as join2, resolve as resolve2 } from "path";

// src/db/database.ts
import { Database } from "bun:sqlite";
import { mkdirSync } from "fs";
import { dirname } from "path";

// src/domain/types.ts
class AppError extends Error {
  status;
  code;
  constructor(message, status = 400, code = "bad_request") {
    super(message);
    this.status = status;
    this.code = code;
  }
}

// src/db/database.ts
var now = () => new Date().toISOString();
var id = () => crypto.randomUUID();
function asProject(row) {
  return {
    id: String(row.id),
    name: String(row.name),
    description: String(row.description ?? ""),
    rootDirectory: String(row.root_directory),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
    recentRunStatus: row.recent_run_status ?? undefined
  };
}
function asWorkflow(row) {
  return {
    id: String(row.id),
    projectId: String(row.project_id),
    name: String(row.name),
    description: String(row.description ?? ""),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
    stepCount: row.step_count === undefined ? undefined : Number(row.step_count),
    activeStepCount: row.active_step_count === undefined ? undefined : Number(row.active_step_count),
    recentRunStatus: row.recent_run_status ?? undefined
  };
}
function asStep(row) {
  return {
    id: String(row.id),
    workflowId: String(row.workflow_id),
    name: String(row.name),
    command: String(row.command),
    position: Number(row.position),
    workingDirectory: String(row.working_directory ?? ""),
    timeoutSeconds: row.timeout_seconds === null || row.timeout_seconds === undefined ? null : Number(row.timeout_seconds),
    inputPrompt: String(row.input_prompt ?? ""),
    inputSensitive: Boolean(row.input_sensitive),
    enabled: Boolean(row.enabled)
  };
}
function asRun(row) {
  return {
    id: String(row.id),
    projectId: String(row.project_id),
    workflowId: row.workflow_id === null ? null : String(row.workflow_id),
    workflowName: String(row.workflow_name),
    status: row.status,
    startedAt: row.started_at === null ? null : String(row.started_at),
    finishedAt: row.finished_at === null ? null : String(row.finished_at),
    currentStepId: row.current_step_id === null ? null : String(row.current_step_id),
    exitCode: row.exit_code === null ? null : Number(row.exit_code),
    createdAt: String(row.created_at)
  };
}
function asStepRun(row) {
  return {
    id: String(row.id),
    runId: String(row.run_id),
    stepId: row.step_id === null ? null : String(row.step_id),
    stepName: String(row.step_name),
    command: String(row.command),
    position: Number(row.position),
    workingDirectory: String(row.working_directory ?? ""),
    timeoutSeconds: row.timeout_seconds === null ? null : Number(row.timeout_seconds),
    inputPrompt: String(row.input_prompt ?? ""),
    inputSensitive: Boolean(row.input_sensitive),
    status: row.status,
    startedAt: row.started_at === null ? null : String(row.started_at),
    finishedAt: row.finished_at === null ? null : String(row.finished_at),
    exitCode: row.exit_code === null ? null : Number(row.exit_code)
  };
}
function asInputRequest(row) {
  return {
    id: String(row.id),
    runId: String(row.run_id),
    stepRunId: String(row.step_run_id),
    prompt: String(row.prompt),
    sensitive: Boolean(row.sensitive),
    requestedAt: String(row.requested_at)
  };
}
function asAuthUser(row) {
  return {
    id: String(row.id),
    username: String(row.username),
    displayName: String(row.display_name),
    webauthnUserId: String(row.webauthn_user_id),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at)
  };
}
function asPasskey(row) {
  const publicKey = row.public_key;
  if (!(publicKey instanceof Uint8Array)) {
    throw new Error("\uC800\uC7A5\uB41C \uD328\uC2A4\uD0A4 \uACF5\uAC1C\uD0A4 \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
  }
  let transports = [];
  try {
    const parsed = JSON.parse(String(row.transports));
    if (Array.isArray(parsed)) {
      transports = parsed.filter((item) => typeof item === "string");
    }
  } catch {
    transports = [];
  }
  return {
    id: String(row.credential_id),
    userId: String(row.user_id),
    publicKey: new Uint8Array(publicKey),
    counter: Number(row.counter),
    deviceType: row.device_type,
    backedUp: Boolean(row.backed_up),
    transports,
    name: String(row.name),
    createdAt: String(row.created_at),
    lastUsedAt: row.last_used_at === null ? null : String(row.last_used_at)
  };
}
function asAuthSession(row) {
  return {
    tokenHash: String(row.token_hash),
    userId: String(row.user_id),
    csrfToken: String(row.csrf_token),
    createdAt: String(row.created_at),
    expiresAt: String(row.expires_at)
  };
}

class AppDatabase {
  sqlite;
  constructor(path) {
    if (path !== ":memory:") {
      mkdirSync(dirname(path), { recursive: true });
    }
    this.sqlite = new Database(path, { create: true, strict: true });
    this.sqlite.exec("PRAGMA foreign_keys = ON");
    this.sqlite.exec("PRAGMA journal_mode = WAL");
    this.sqlite.exec("PRAGMA busy_timeout = 5000");
    this.migrate();
  }
  close() {
    this.sqlite.close();
  }
  migrate() {
    this.sqlite.exec(`
      CREATE TABLE IF NOT EXISTS projects (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL DEFAULT '',
        root_directory TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS workflows (
        id TEXT PRIMARY KEY,
        project_id TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
        name TEXT NOT NULL,
        description TEXT NOT NULL DEFAULT '',
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS steps (
        id TEXT PRIMARY KEY,
        workflow_id TEXT NOT NULL REFERENCES workflows(id) ON DELETE CASCADE,
        name TEXT NOT NULL,
        command TEXT NOT NULL,
        position INTEGER NOT NULL,
        working_directory TEXT NOT NULL DEFAULT '',
        timeout_seconds INTEGER,
        input_prompt TEXT NOT NULL DEFAULT '',
        input_sensitive INTEGER NOT NULL DEFAULT 1,
        enabled INTEGER NOT NULL DEFAULT 1,
        UNIQUE(workflow_id, position)
      );

      CREATE TABLE IF NOT EXISTS runs (
        id TEXT PRIMARY KEY,
        project_id TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
        workflow_id TEXT REFERENCES workflows(id) ON DELETE SET NULL,
        workflow_name TEXT NOT NULL,
        status TEXT NOT NULL,
        started_at TEXT,
        finished_at TEXT,
        current_step_id TEXT,
        exit_code INTEGER,
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS step_runs (
        id TEXT PRIMARY KEY,
        run_id TEXT NOT NULL REFERENCES runs(id) ON DELETE CASCADE,
        step_id TEXT REFERENCES steps(id) ON DELETE SET NULL,
        step_name TEXT NOT NULL,
        command TEXT NOT NULL,
        position INTEGER NOT NULL,
        working_directory TEXT NOT NULL DEFAULT '',
        timeout_seconds INTEGER,
        input_prompt TEXT NOT NULL DEFAULT '',
        input_sensitive INTEGER NOT NULL DEFAULT 1,
        status TEXT NOT NULL,
        started_at TEXT,
        finished_at TEXT,
        exit_code INTEGER
      );

      CREATE TABLE IF NOT EXISTS run_logs (
        seq INTEGER PRIMARY KEY AUTOINCREMENT,
        run_id TEXT NOT NULL REFERENCES runs(id) ON DELETE CASCADE,
        step_run_id TEXT REFERENCES step_runs(id) ON DELETE SET NULL,
        stream TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS input_requests (
        id TEXT PRIMARY KEY,
        run_id TEXT NOT NULL REFERENCES runs(id) ON DELETE CASCADE,
        step_run_id TEXT NOT NULL UNIQUE REFERENCES step_runs(id) ON DELETE CASCADE,
        prompt TEXT NOT NULL,
        sensitive INTEGER NOT NULL DEFAULT 1,
        status TEXT NOT NULL,
        requested_at TEXT NOT NULL,
        answered_at TEXT
      );

      CREATE TABLE IF NOT EXISTS auth_users (
        id TEXT PRIMARY KEY,
        singleton INTEGER NOT NULL DEFAULT 1 CHECK (singleton = 1),
        username TEXT NOT NULL UNIQUE,
        display_name TEXT NOT NULL,
        webauthn_user_id TEXT NOT NULL UNIQUE,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        UNIQUE(singleton)
      );

      CREATE TABLE IF NOT EXISTS passkey_credentials (
        credential_id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL REFERENCES auth_users(id) ON DELETE CASCADE,
        public_key BLOB NOT NULL,
        counter INTEGER NOT NULL,
        device_type TEXT NOT NULL,
        backed_up INTEGER NOT NULL,
        transports TEXT NOT NULL DEFAULT '[]',
        name TEXT NOT NULL,
        created_at TEXT NOT NULL,
        last_used_at TEXT
      );

      CREATE TABLE IF NOT EXISTS auth_sessions (
        token_hash TEXT PRIMARY KEY,
        user_id TEXT NOT NULL REFERENCES auth_users(id) ON DELETE CASCADE,
        csrf_token TEXT NOT NULL,
        created_at TEXT NOT NULL,
        expires_at TEXT NOT NULL
      );

      CREATE INDEX IF NOT EXISTS idx_workflows_project ON workflows(project_id);
      CREATE INDEX IF NOT EXISTS idx_steps_workflow_position ON steps(workflow_id, position);
      CREATE INDEX IF NOT EXISTS idx_runs_project_created ON runs(project_id, created_at DESC);
      CREATE INDEX IF NOT EXISTS idx_step_runs_run_position ON step_runs(run_id, position);
      CREATE INDEX IF NOT EXISTS idx_run_logs_run_seq ON run_logs(run_id, seq);
      CREATE INDEX IF NOT EXISTS idx_input_requests_run_status ON input_requests(run_id, status);
      CREATE INDEX IF NOT EXISTS idx_passkeys_user ON passkey_credentials(user_id);
      CREATE INDEX IF NOT EXISTS idx_auth_sessions_expiry ON auth_sessions(expires_at);
    `);
    this.ensureColumn("steps", "input_prompt", "TEXT NOT NULL DEFAULT ''");
    this.ensureColumn("steps", "input_sensitive", "INTEGER NOT NULL DEFAULT 1");
    this.ensureColumn("step_runs", "input_prompt", "TEXT NOT NULL DEFAULT ''");
    this.ensureColumn("step_runs", "input_sensitive", "INTEGER NOT NULL DEFAULT 1");
  }
  ensureColumn(table, column, sql) {
    const columns = this.sqlite.query(`PRAGMA table_info(${table})`).all();
    if (!columns.some((item) => item.name === column)) {
      this.sqlite.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${sql}`);
    }
  }
  hasAuthUser() {
    return Boolean(this.sqlite.query("SELECT 1 FROM auth_users LIMIT 1").get());
  }
  getAuthUser() {
    const row = this.sqlite.query("SELECT * FROM auth_users LIMIT 1").get();
    return row ? asAuthUser(row) : null;
  }
  getAuthUserById(userId) {
    const row = this.sqlite.query("SELECT * FROM auth_users WHERE id = ?").get(userId);
    return row ? asAuthUser(row) : null;
  }
  createAuthUserWithPasskey(userInput, credentialInput) {
    const userId = id();
    const timestamp = now();
    const transaction = this.sqlite.transaction(() => {
      if (this.hasAuthUser()) {
        throw new AppError("\uAD00\uB9AC\uC790 \uC124\uC815\uC774 \uC774\uBBF8 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", 409, "setup_complete");
      }
      this.sqlite.query(`INSERT INTO auth_users
           (id, username, display_name, webauthn_user_id, created_at, updated_at)
           VALUES (?, ?, ?, ?, ?, ?)`).run(userId, userInput.username, userInput.displayName, userInput.webauthnUserId, timestamp, timestamp);
      this.insertPasskey(userId, credentialInput, timestamp);
    });
    transaction();
    return {
      user: this.getAuthUserById(userId),
      passkey: this.getPasskey(credentialInput.id)
    };
  }
  insertPasskey(userId, input, timestamp = now()) {
    this.sqlite.query(`INSERT INTO passkey_credentials
         (credential_id, user_id, public_key, counter, device_type,
          backed_up, transports, name, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(input.id, userId, input.publicKey, input.counter, input.deviceType, input.backedUp ? 1 : 0, JSON.stringify(input.transports), input.name, timestamp);
  }
  addPasskey(userId, input) {
    if (!this.getAuthUserById(userId)) {
      throw new AppError("\uAD00\uB9AC\uC790\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
    }
    this.insertPasskey(userId, input);
    return this.getPasskey(input.id);
  }
  getPasskey(credentialId) {
    const row = this.sqlite.query("SELECT * FROM passkey_credentials WHERE credential_id = ?").get(credentialId);
    return row ? asPasskey(row) : null;
  }
  listPasskeys(userId) {
    return this.sqlite.query(`SELECT * FROM passkey_credentials
           WHERE user_id = ? ORDER BY created_at DESC`).all(userId).map(asPasskey);
  }
  updatePasskeyUsage(credentialId, input) {
    const result = this.sqlite.query(`UPDATE passkey_credentials
         SET counter = ?, device_type = ?, backed_up = ?, last_used_at = ?
         WHERE credential_id = ?`).run(input.counter, input.deviceType, input.backedUp ? 1 : 0, now(), credentialId);
    if (!result.changes) {
      throw new AppError("\uD328\uC2A4\uD0A4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
    }
    return this.getPasskey(credentialId);
  }
  deletePasskey(userId, credentialId) {
    const transaction = this.sqlite.transaction(() => {
      const credentials = this.listPasskeys(userId);
      if (!credentials.some((credential) => credential.id === credentialId)) {
        throw new AppError("\uD328\uC2A4\uD0A4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
      }
      if (credentials.length <= 1) {
        throw new AppError("\uB9C8\uC9C0\uB9C9 \uD328\uC2A4\uD0A4\uB294 \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 409, "last_passkey");
      }
      this.sqlite.query("DELETE FROM passkey_credentials WHERE credential_id = ? AND user_id = ?").run(credentialId, userId);
    });
    transaction();
  }
  createAuthSession(input) {
    this.sqlite.query(`INSERT INTO auth_sessions
         (token_hash, user_id, csrf_token, created_at, expires_at)
         VALUES (?, ?, ?, ?, ?)`).run(input.tokenHash, input.userId, input.csrfToken, input.createdAt, input.expiresAt);
    return input;
  }
  getAuthSession(tokenHash, currentTime = now()) {
    const row = this.sqlite.query(`SELECT * FROM auth_sessions
         WHERE token_hash = ? AND expires_at > ?`).get(tokenHash, currentTime);
    return row ? asAuthSession(row) : null;
  }
  deleteAuthSession(tokenHash) {
    this.sqlite.query("DELETE FROM auth_sessions WHERE token_hash = ?").run(tokenHash);
  }
  deleteExpiredAuthSessions(currentTime = now()) {
    return this.sqlite.query("DELETE FROM auth_sessions WHERE expires_at <= ?").run(currentTime).changes;
  }
  recoverInterruptedRuns() {
    const timestamp = now();
    const transaction = this.sqlite.transaction(() => {
      this.sqlite.query(`UPDATE step_runs
           SET status = 'interrupted', finished_at = ?
           WHERE status IN ('queued', 'running')
             AND run_id IN (
               SELECT id FROM runs WHERE status IN ('queued', 'running')
             )`).run(timestamp);
      return this.sqlite.query(`UPDATE runs
           SET status = 'interrupted', finished_at = ?, current_step_id = NULL
           WHERE status IN ('queued', 'running')`).run(timestamp).changes;
    });
    return transaction();
  }
  listProjects() {
    return this.sqlite.query(`SELECT p.*,
            (SELECT r.status FROM runs r
             WHERE r.project_id = p.id
             ORDER BY r.created_at DESC LIMIT 1) AS recent_run_status
           FROM projects p ORDER BY p.updated_at DESC`).all().map(asProject);
  }
  getProject(projectId) {
    const row = this.sqlite.query("SELECT * FROM projects WHERE id = ?").get(projectId);
    return row ? asProject(row) : null;
  }
  createProject(input) {
    const projectId = id();
    const timestamp = now();
    this.sqlite.query(`INSERT INTO projects
         (id, name, description, root_directory, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?)`).run(projectId, input.name, input.description ?? "", input.rootDirectory, timestamp, timestamp);
    return this.getProject(projectId);
  }
  updateProject(projectId, input) {
    const current = this.getProject(projectId);
    if (!current)
      throw new AppError("\uD504\uB85C\uC81D\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
    this.sqlite.query(`UPDATE projects
         SET name = ?, description = ?, root_directory = ?, updated_at = ?
         WHERE id = ?`).run(input.name ?? current.name, input.description ?? current.description, input.rootDirectory ?? current.rootDirectory, now(), projectId);
    return this.getProject(projectId);
  }
  deleteProject(projectId) {
    const result = this.sqlite.query("DELETE FROM projects WHERE id = ?").run(projectId);
    if (!result.changes)
      throw new AppError("\uD504\uB85C\uC81D\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
  }
  listWorkflows(projectId) {
    return this.sqlite.query(`SELECT w.*,
            (SELECT COUNT(*) FROM steps s WHERE s.workflow_id = w.id) AS step_count,
            (SELECT COUNT(*) FROM steps s
             WHERE s.workflow_id = w.id AND s.enabled = 1) AS active_step_count,
            (SELECT r.status FROM runs r
             WHERE r.workflow_id = w.id
             ORDER BY r.created_at DESC LIMIT 1) AS recent_run_status
           FROM workflows w WHERE w.project_id = ?
           ORDER BY w.updated_at DESC`).all(projectId).map(asWorkflow);
  }
  getWorkflow(workflowId) {
    const row = this.sqlite.query("SELECT * FROM workflows WHERE id = ?").get(workflowId);
    if (!row)
      return null;
    const steps = this.sqlite.query("SELECT * FROM steps WHERE workflow_id = ? ORDER BY position").all(workflowId).map(asStep);
    return { ...asWorkflow(row), steps };
  }
  createWorkflow(projectId, input) {
    if (!this.getProject(projectId)) {
      throw new AppError("\uD504\uB85C\uC81D\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
    }
    const workflowId = id();
    const timestamp = now();
    this.sqlite.query(`INSERT INTO workflows
         (id, project_id, name, description, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?)`).run(workflowId, projectId, input.name, input.description ?? "", timestamp, timestamp);
    return this.getWorkflow(workflowId);
  }
  updateWorkflow(workflowId, input) {
    const current = this.getWorkflow(workflowId);
    if (!current)
      throw new AppError("\uC6CC\uD06C\uD50C\uB85C\uC6B0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
    this.sqlite.query("UPDATE workflows SET name = ?, description = ?, updated_at = ? WHERE id = ?").run(input.name ?? current.name, input.description ?? current.description, now(), workflowId);
    return this.getWorkflow(workflowId);
  }
  deleteWorkflow(workflowId) {
    const result = this.sqlite.query("DELETE FROM workflows WHERE id = ?").run(workflowId);
    if (!result.changes) {
      throw new AppError("\uC6CC\uD06C\uD50C\uB85C\uC6B0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
    }
  }
  createStep(workflowId, input) {
    if (!this.getWorkflow(workflowId)) {
      throw new AppError("\uC6CC\uD06C\uD50C\uB85C\uC6B0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
    }
    const next = this.sqlite.query("SELECT COALESCE(MAX(position), 0) + 1 AS position FROM steps WHERE workflow_id = ?").get(workflowId);
    const stepId = id();
    this.sqlite.query(`INSERT INTO steps
         (id, workflow_id, name, command, position, working_directory,
          timeout_seconds, input_prompt, input_sensitive, enabled)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(stepId, workflowId, input.name, input.command, next.position, input.workingDirectory ?? "", input.timeoutSeconds ?? null, input.inputPrompt ?? "", input.inputSensitive === false ? 0 : 1, input.enabled === false ? 0 : 1);
    this.touchWorkflow(workflowId);
    return this.getStep(stepId);
  }
  getStep(stepId) {
    const row = this.sqlite.query("SELECT * FROM steps WHERE id = ?").get(stepId);
    return row ? asStep(row) : null;
  }
  updateStep(stepId, input) {
    const current = this.getStep(stepId);
    if (!current)
      throw new AppError("\uB2E8\uACC4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
    this.sqlite.query(`UPDATE steps SET
           name = ?, command = ?, working_directory = ?, timeout_seconds = ?,
           input_prompt = ?, input_sensitive = ?, enabled = ?
         WHERE id = ?`).run(input.name ?? current.name, input.command ?? current.command, input.workingDirectory ?? current.workingDirectory, input.timeoutSeconds === undefined ? current.timeoutSeconds : input.timeoutSeconds, input.inputPrompt ?? current.inputPrompt, input.inputSensitive ?? current.inputSensitive ? 1 : 0, input.enabled ?? current.enabled ? 1 : 0, stepId);
    this.touchWorkflow(current.workflowId);
    return this.getStep(stepId);
  }
  deleteStep(stepId) {
    const current = this.getStep(stepId);
    if (!current)
      throw new AppError("\uB2E8\uACC4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
    const transaction = this.sqlite.transaction(() => {
      this.sqlite.query("DELETE FROM steps WHERE id = ?").run(stepId);
      const remaining = this.sqlite.query("SELECT id FROM steps WHERE workflow_id = ? ORDER BY position").all(current.workflowId);
      this.reposition(current.workflowId, remaining.map((row) => row.id));
      this.touchWorkflow(current.workflowId);
    });
    transaction();
  }
  reorderSteps(workflowId, stepIds) {
    const current = this.getWorkflow(workflowId);
    if (!current)
      throw new AppError("\uC6CC\uD06C\uD50C\uB85C\uC6B0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
    const existing = current.steps.map((step) => step.id);
    if (existing.length !== stepIds.length || existing.some((stepId) => !stepIds.includes(stepId)) || new Set(stepIds).size !== stepIds.length) {
      throw new AppError("\uB2E8\uACC4 \uC21C\uC11C \uBAA9\uB85D\uC774 \uD604\uC7AC \uC6CC\uD06C\uD50C\uB85C\uC6B0\uC640 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
    }
    const transaction = this.sqlite.transaction(() => {
      this.reposition(workflowId, stepIds);
      this.touchWorkflow(workflowId);
    });
    transaction();
    return this.getWorkflow(workflowId);
  }
  reposition(workflowId, stepIds) {
    for (let index = 0;index < stepIds.length; index++) {
      this.sqlite.query("UPDATE steps SET position = ? WHERE id = ? AND workflow_id = ?").run(-(index + 1), stepIds[index], workflowId);
    }
    for (let index = 0;index < stepIds.length; index++) {
      this.sqlite.query("UPDATE steps SET position = ? WHERE id = ? AND workflow_id = ?").run(index + 1, stepIds[index], workflowId);
    }
  }
  touchWorkflow(workflowId) {
    this.sqlite.query("UPDATE workflows SET updated_at = ? WHERE id = ?").run(now(), workflowId);
  }
  createRun(workflowId) {
    const workflow = this.getWorkflow(workflowId);
    if (!workflow)
      throw new AppError("\uC6CC\uD06C\uD50C\uB85C\uC6B0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
    const activeSteps = workflow.steps.filter((step) => step.enabled);
    if (!activeSteps.length) {
      throw new AppError("\uD65C\uC131\uD654\uB41C \uB2E8\uACC4\uB97C \uD558\uB098 \uC774\uC0C1 \uCD94\uAC00\uD574 \uC8FC\uC138\uC694.", 409, "no_active_steps");
    }
    const project = this.getProject(workflow.projectId);
    const runId = id();
    const createdAt = now();
    const transaction = this.sqlite.transaction(() => {
      const active = this.sqlite.query(`SELECT id FROM runs
           WHERE project_id = ? AND status IN ('queued', 'running', 'waiting_input') LIMIT 1`).get(project.id);
      if (active) {
        throw new AppError("\uC774 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC774\uBBF8 \uC6CC\uD06C\uD50C\uB85C\uC6B0\uAC00 \uC2E4\uD589 \uC911\uC785\uB2C8\uB2E4.", 409, "project_busy");
      }
      this.sqlite.query(`INSERT INTO runs
           (id, project_id, workflow_id, workflow_name, status, created_at)
           VALUES (?, ?, ?, ?, 'queued', ?)`).run(runId, project.id, workflow.id, workflow.name, createdAt);
      const insertStepRun = this.sqlite.query(`INSERT INTO step_runs
         (id, run_id, step_id, step_name, command, position,
          working_directory, timeout_seconds, input_prompt, input_sensitive, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'queued')`);
      for (const step of activeSteps) {
        insertStepRun.run(id(), runId, step.id, step.name, step.command, step.position, step.workingDirectory, step.timeoutSeconds, step.inputPrompt, step.inputSensitive ? 1 : 0);
      }
    });
    transaction();
    return this.getRun(runId);
  }
  listRuns(options = {}) {
    const limit = Math.min(Math.max(options.limit ?? 30, 1), 100);
    const rows = options.projectId ? this.sqlite.query("SELECT * FROM runs WHERE project_id = ? ORDER BY created_at DESC LIMIT ?").all(options.projectId, limit) : this.sqlite.query("SELECT * FROM runs ORDER BY created_at DESC LIMIT ?").all(limit);
    return rows.map(asRun);
  }
  hasActiveProjectRun(projectId) {
    return Boolean(this.sqlite.query(`SELECT 1 AS active FROM runs
           WHERE project_id = ? AND status IN ('queued', 'running', 'waiting_input') LIMIT 1`).get(projectId));
  }
  getRun(runId) {
    const row = this.sqlite.query(`SELECT r.*, p.name AS project_name, p.root_directory
         FROM runs r JOIN projects p ON p.id = r.project_id
         WHERE r.id = ?`).get(runId);
    if (!row)
      return null;
    const steps = this.sqlite.query("SELECT * FROM step_runs WHERE run_id = ? ORDER BY position").all(runId).map(asStepRun);
    return {
      ...asRun(row),
      projectName: String(row.project_name),
      rootDirectory: String(row.root_directory),
      steps,
      pendingInput: this.getPendingInput(runId)
    };
  }
  updateRun(runId, input) {
    const current = this.getRun(runId);
    if (!current)
      throw new AppError("\uC2E4\uD589\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
    this.sqlite.query(`UPDATE runs SET
          status = ?, started_at = ?, finished_at = ?,
          current_step_id = ?, exit_code = ?
         WHERE id = ?`).run(input.status ?? current.status, input.startedAt === undefined ? current.startedAt : input.startedAt, input.finishedAt === undefined ? current.finishedAt : input.finishedAt, input.currentStepId === undefined ? current.currentStepId : input.currentStepId, input.exitCode === undefined ? current.exitCode : input.exitCode, runId);
  }
  updateStepRun(stepRunId, input) {
    const current = this.sqlite.query("SELECT * FROM step_runs WHERE id = ?").get(stepRunId);
    if (!current)
      throw new AppError("\uB2E8\uACC4 \uC2E4\uD589\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
    this.sqlite.query(`UPDATE step_runs SET
          status = ?, started_at = ?, finished_at = ?, exit_code = ?
         WHERE id = ?`).run(input.status, input.startedAt === undefined ? current.started_at : input.startedAt, input.finishedAt === undefined ? current.finished_at : input.finishedAt, input.exitCode === undefined ? current.exit_code : input.exitCode, stepRunId);
  }
  updateRemainingSteps(runId, status) {
    this.sqlite.query(`UPDATE step_runs SET status = ?, finished_at = ?
         WHERE run_id = ? AND status IN ('queued', 'waiting_input')`).run(status, now(), runId);
  }
  createInputRequest(runId, stepRunId, prompt, sensitive) {
    const existing = this.sqlite.query(`SELECT * FROM input_requests
         WHERE run_id = ? AND step_run_id = ? AND status = 'pending'`).get(runId, stepRunId);
    if (existing)
      return asInputRequest(existing);
    const requestId = id();
    const requestedAt = now();
    this.sqlite.query(`INSERT INTO input_requests
         (id, run_id, step_run_id, prompt, sensitive, status, requested_at)
         VALUES (?, ?, ?, ?, ?, 'pending', ?)`).run(requestId, runId, stepRunId, prompt, sensitive ? 1 : 0, requestedAt);
    return this.getPendingInput(runId);
  }
  getPendingInput(runId) {
    const row = this.sqlite.query(`SELECT * FROM input_requests
         WHERE run_id = ? AND status = 'pending'
         ORDER BY requested_at DESC LIMIT 1`).get(runId);
    return row ? asInputRequest(row) : null;
  }
  answerInputRequest(runId, requestId) {
    const transaction = this.sqlite.transaction(() => {
      const row = this.sqlite.query(`SELECT ir.* FROM input_requests ir
           JOIN runs r ON r.id = ir.run_id
           WHERE ir.id = ? AND ir.run_id = ? AND ir.status = 'pending'
             AND r.status = 'waiting_input'`).get(requestId, runId);
      if (!row) {
        throw new AppError("\uC774\uBBF8 \uCC98\uB9AC\uB418\uC5C8\uAC70\uB098 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uC785\uB825 \uC694\uCCAD\uC785\uB2C8\uB2E4.", 409, "input_not_pending");
      }
      const answeredAt = now();
      this.sqlite.query("UPDATE input_requests SET status = 'answered', answered_at = ? WHERE id = ?").run(answeredAt, requestId);
      this.sqlite.query("UPDATE step_runs SET status = 'queued' WHERE id = ? AND status = 'waiting_input'").run(String(row.step_run_id));
      this.sqlite.query("UPDATE runs SET status = 'queued' WHERE id = ? AND status = 'waiting_input'").run(runId);
      return asInputRequest(row);
    });
    return transaction();
  }
  cancelPendingInputRequests(runId) {
    this.sqlite.query(`UPDATE input_requests SET status = 'canceled', answered_at = ?
         WHERE run_id = ? AND status = 'pending'`).run(now(), runId);
  }
  appendLog(runId, stepRunId, stream, content) {
    const createdAt = now();
    const result = this.sqlite.query(`INSERT INTO run_logs
         (run_id, step_run_id, stream, content, created_at)
         VALUES (?, ?, ?, ?, ?)`).run(runId, stepRunId, stream, content, createdAt);
    return {
      seq: Number(result.lastInsertRowid),
      runId,
      stepRunId,
      stream,
      content,
      createdAt
    };
  }
  getLogs(runId, after = 0, limit = 5000) {
    return this.sqlite.query(`SELECT * FROM run_logs
           WHERE run_id = ? AND seq > ? ORDER BY seq LIMIT ?`).all(runId, after, Math.min(Math.max(limit, 1), 1e4)).map((row) => ({
      seq: Number(row.seq),
      runId: String(row.run_id),
      stepRunId: row.step_run_id === null ? null : String(row.step_run_id),
      stream: row.stream,
      content: String(row.content),
      createdAt: String(row.created_at)
    }));
  }
}

// src/server/validation.ts
import { statSync } from "fs";
import { isAbsolute, normalize, relative, resolve, sep } from "path";
function objectBody(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new AppError("JSON \uAC1D\uCCB4 \uD615\uC2DD\uC758 \uC694\uCCAD \uBCF8\uBB38\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.");
  }
  return value;
}
function requiredString(value, label, maxLength = 200) {
  if (typeof value !== "string" || !value.trim()) {
    throw new AppError(`${label}\uC744(\uB97C) \uC785\uB825\uD574 \uC8FC\uC138\uC694.`);
  }
  const result = value.trim();
  if (result.length > maxLength) {
    throw new AppError(`${label}\uC740(\uB294) ${maxLength}\uC790 \uC774\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.`);
  }
  return result;
}
function optionalString(value, label, maxLength = 2000) {
  if (value === undefined)
    return;
  if (typeof value !== "string") {
    throw new AppError(`${label}\uC740(\uB294) \uBB38\uC790\uC5F4\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.`);
  }
  if (value.length > maxLength) {
    throw new AppError(`${label}\uC740(\uB294) ${maxLength}\uC790 \uC774\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.`);
  }
  return value.trim();
}
function optionalBoolean(value, label) {
  if (value === undefined)
    return;
  if (typeof value !== "boolean") {
    throw new AppError(`${label}\uC740(\uB294) \uCC38 \uB610\uB294 \uAC70\uC9D3\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.`);
  }
  return value;
}
function optionalTimeout(value) {
  if (value === undefined || value === null || value === "") {
    return value === undefined ? undefined : null;
  }
  if (typeof value !== "number" || !Number.isInteger(value) || value < 1 || value > 86400) {
    throw new AppError("\uD0C0\uC784\uC544\uC6C3\uC740 1~86400 \uC0AC\uC774\uC758 \uC815\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4.");
  }
  return value;
}
function oneLineInput(value) {
  if (typeof value !== "string" || value.length === 0) {
    throw new AppError("\uC785\uB825\uAC12\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.");
  }
  if (value.length > 1e4) {
    throw new AppError("\uC785\uB825\uAC12\uC740 10000\uC790 \uC774\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.");
  }
  if (value.includes(`
`) || value.includes("\r")) {
    throw new AppError("\uC785\uB825\uAC12\uC740 \uD55C \uC904\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.");
  }
  return value;
}
function rootDirectory(value) {
  const path = requiredString(value, "\uAE30\uBCF8 \uC791\uC5C5 \uACBD\uB85C", 4096);
  if (!isAbsolute(path)) {
    throw new AppError("\uAE30\uBCF8 \uC791\uC5C5 \uACBD\uB85C\uB294 \uC808\uB300 \uACBD\uB85C\uC5EC\uC57C \uD569\uB2C8\uB2E4.");
  }
  try {
    if (!statSync(path).isDirectory()) {
      throw new Error("not-directory");
    }
  } catch {
    throw new AppError("\uAE30\uBCF8 \uC791\uC5C5 \uACBD\uB85C\uAC00 \uC874\uC7AC\uD558\uB294 \uB514\uB809\uD130\uB9AC\uAC00 \uC544\uB2D9\uB2C8\uB2E4.");
  }
  return normalize(path);
}
function workingDirectory(value) {
  if (value === undefined)
    return;
  if (typeof value !== "string") {
    throw new AppError("\uD558\uC704 \uC791\uC5C5 \uACBD\uB85C\uB294 \uBB38\uC790\uC5F4\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.");
  }
  const path = value.trim();
  if (!path)
    return "";
  if (isAbsolute(path)) {
    throw new AppError("\uD558\uC704 \uC791\uC5C5 \uACBD\uB85C\uC5D0\uB294 \uD504\uB85C\uC81D\uD2B8 \uAE30\uC900 \uC0C1\uB300 \uACBD\uB85C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.");
  }
  const normalized = normalize(path);
  if (normalized === ".." || normalized.startsWith(`..${sep}`) || normalized.includes(`%2e${sep}`)) {
    throw new AppError("\uD558\uC704 \uC791\uC5C5 \uACBD\uB85C\uB294 \uD504\uB85C\uC81D\uD2B8 \uBC16\uC744 \uAC00\uB9AC\uD0AC \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
  }
  return normalized === "." ? "" : normalized;
}
function resolveWorkingDirectory(root, child) {
  const target = resolve(root, child || ".");
  const relation = relative(root, target);
  if (relation === ".." || relation.startsWith(`..${sep}`) || isAbsolute(relation)) {
    throw new AppError("\uC791\uC5C5 \uACBD\uB85C\uAC00 \uD504\uB85C\uC81D\uD2B8 \uBC16\uC744 \uAC00\uB9AC\uD0B5\uB2C8\uB2E4.");
  }
  try {
    if (!statSync(target).isDirectory())
      throw new Error("not-directory");
  } catch {
    throw new AppError(`\uC791\uC5C5 \uACBD\uB85C\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4: ${target}`);
  }
  return target;
}

// src/runner/runner.ts
var timestamp = () => new Date().toISOString();
function signalProcess(pid, signal) {
  try {
    process.kill(pid, signal);
    return true;
  } catch {
    return false;
  }
}
function childProcessIds(pid) {
  if (process.platform === "win32")
    return [];
  try {
    const result = Bun.spawnSync({
      cmd: ["/usr/bin/pgrep", "-P", String(pid)],
      stdout: "pipe",
      stderr: "ignore"
    });
    return result.stdout.toString().trim().split(/\s+/).map(Number).filter(Number.isInteger);
  } catch {
    return [];
  }
}
function processTree(pid) {
  const children = childProcessIds(pid);
  return children.flatMap((child) => [...processTree(child), child]);
}
function terminateProcessTree(control) {
  const subprocess = control.process;
  if (!subprocess || subprocess.exitCode !== null)
    return;
  const groupTerminated = process.platform !== "win32" && signalProcess(-subprocess.pid, "SIGTERM");
  const descendants = groupTerminated ? [] : processTree(subprocess.pid);
  if (!groupTerminated) {
    for (const pid of descendants)
      signalProcess(pid, "SIGTERM");
    try {
      subprocess.kill("SIGTERM");
    } catch {}
  }
  setTimeout(() => {
    if (subprocess.exitCode !== null)
      return;
    if (groupTerminated) {
      signalProcess(-subprocess.pid, "SIGKILL");
    } else {
      for (const pid of descendants)
        signalProcess(pid, "SIGKILL");
      try {
        subprocess.kill("SIGKILL");
      } catch {}
    }
  }, 750);
}

class SecretRedactor {
  secret;
  pending = "";
  constructor(secret) {
    this.secret = secret;
  }
  write(content, final = false) {
    this.pending += content;
    let output = "";
    while (this.pending.length >= this.secret.length) {
      if (this.pending.startsWith(this.secret)) {
        output += "[\uBBFC\uAC10\uD55C \uC785\uB825 \uC228\uAE40]";
        this.pending = this.pending.slice(this.secret.length);
      } else {
        output += this.pending[0];
        this.pending = this.pending.slice(1);
      }
    }
    if (final) {
      output += this.pending;
      this.pending = "";
    }
    return output;
  }
}

class WorkflowRunner {
  db;
  controls = new Map;
  subscribers = new Map;
  constructor(db) {
    this.db = db;
  }
  start(workflowId) {
    const run = this.db.createRun(workflowId);
    queueMicrotask(() => void this.execute(run.id));
    return run;
  }
  respond(runId, requestId, value) {
    const request = this.db.answerInputRequest(runId, requestId);
    const suppliedInput = {
      stepRunId: request.stepRunId,
      value,
      sensitive: request.sensitive
    };
    this.log(runId, request.stepRunId, "system", `[workflow-manager] \uC785\uB825\uC744 \uBC1B\uC544 \uC2E4\uD589\uC744 \uC7AC\uAC1C\uD569\uB2C8\uB2E4. \uC785\uB825\uAC12\uC740 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
`);
    this.emitRun(runId);
    queueMicrotask(() => void this.execute(runId, suppliedInput));
    return this.db.getRun(runId);
  }
  cancel(runId) {
    const run = this.db.getRun(runId);
    if (!run)
      throw new AppError("\uC2E4\uD589\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
    if (!["queued", "running", "waiting_input"].includes(run.status)) {
      throw new AppError("\uB300\uAE30 \uC911\uC774\uAC70\uB098 \uC2E4\uD589 \uC911\uC778 \uC791\uC5C5\uB9CC \uCDE8\uC18C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", 409, "run_finished");
    }
    const control = this.controls.get(runId);
    this.db.cancelPendingInputRequests(runId);
    if (control) {
      control.canceled = true;
      this.log(runId, null, "system", `
[workflow-manager] \uCDE8\uC18C \uC694\uCCAD\uC744 \uBC1B\uC558\uC2B5\uB2C8\uB2E4.
`);
      terminateProcessTree(control);
    } else {
      const finishedAt = timestamp();
      this.db.updateRemainingSteps(runId, "canceled");
      this.db.updateRun(runId, {
        status: "canceled",
        finishedAt,
        currentStepId: null,
        exitCode: null
      });
    }
    this.emitRun(runId);
    return this.db.getRun(runId);
  }
  events(runId, after = 0) {
    const run = this.db.getRun(runId);
    if (!run)
      throw new AppError("\uC2E4\uD589\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
    const encoder = new TextEncoder;
    let unsubscribe = null;
    let heartbeat = null;
    const stream = new ReadableStream({
      start: (controller) => {
        const send = (event) => {
          const eventId = event.type === "log" ? `id: ${event.data.seq}
` : "";
          controller.enqueue(encoder.encode(`${eventId}event: ${event.type}
data: ${JSON.stringify(event.data)}

`));
        };
        unsubscribe = this.subscribe(runId, send);
        send({ type: "run", data: this.db.getRun(runId) });
        for (const log of this.db.getLogs(runId, after)) {
          send({ type: "log", data: log });
        }
        heartbeat = setInterval(() => {
          try {
            controller.enqueue(encoder.encode(`: heartbeat

`));
          } catch {
            if (heartbeat)
              clearInterval(heartbeat);
          }
        }, 15000);
      },
      cancel: () => {
        unsubscribe?.();
        if (heartbeat)
          clearInterval(heartbeat);
      }
    });
    return new Response(stream, {
      headers: {
        "content-type": "text/event-stream; charset=utf-8",
        "cache-control": "no-cache, no-transform",
        connection: "keep-alive",
        "x-accel-buffering": "no"
      }
    });
  }
  subscribe(runId, subscriber) {
    let listeners = this.subscribers.get(runId);
    if (!listeners) {
      listeners = new Set;
      this.subscribers.set(runId, listeners);
    }
    listeners.add(subscriber);
    return () => {
      listeners.delete(subscriber);
      if (!listeners.size)
        this.subscribers.delete(runId);
    };
  }
  emit(runId, event) {
    for (const subscriber of this.subscribers.get(runId) ?? []) {
      try {
        subscriber(event);
      } catch {}
    }
  }
  emitRun(runId) {
    const run = this.db.getRun(runId);
    if (run)
      this.emit(runId, { type: "run", data: run });
  }
  log(runId, stepRunId, stream, content) {
    if (!content)
      return;
    const log = this.db.appendLog(runId, stepRunId, stream, content);
    this.emit(runId, { type: "log", data: log });
  }
  async consume(runId, stepRunId, stream, readable, secret = null) {
    if (!readable)
      return;
    const reader = readable.getReader();
    const decoder = new TextDecoder;
    const redactor = secret ? new SecretRedactor(secret) : null;
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done)
          break;
        const decoded = decoder.decode(value, { stream: true });
        this.log(runId, stepRunId, stream, redactor ? redactor.write(decoded) : decoded);
      }
      const remainder = decoder.decode();
      const finalContent = redactor ? redactor.write(remainder, true) : remainder;
      if (finalContent)
        this.log(runId, stepRunId, stream, finalContent);
    } finally {
      reader.releaseLock();
    }
  }
  finishRun(runId, status, exitCode) {
    this.db.updateRun(runId, {
      status,
      finishedAt: timestamp(),
      currentStepId: null,
      exitCode
    });
    this.emitRun(runId);
  }
  async execute(runId, suppliedInput) {
    const run = this.db.getRun(runId);
    if (!run || run.status !== "queued")
      return;
    const control = {
      runId,
      projectId: run.projectId,
      canceled: false,
      timedOut: false,
      process: null
    };
    this.controls.set(runId, control);
    try {
      this.db.updateRun(runId, {
        status: "running",
        startedAt: run.startedAt ?? timestamp()
      });
      if (!run.startedAt) {
        this.log(runId, null, "system", `[workflow-manager] "${run.workflowName}" \uC2E4\uD589\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4.
`);
      }
      this.emitRun(runId);
      for (const step of run.steps) {
        if (step.status === "succeeded")
          continue;
        if (step.status !== "queued")
          continue;
        if (control.canceled) {
          this.db.updateRemainingSteps(runId, "canceled");
          this.finishRun(runId, "canceled", null);
          return;
        }
        const stepInput = suppliedInput?.stepRunId === step.id ? suppliedInput : undefined;
        if (step.inputPrompt && !stepInput) {
          const startedAt2 = step.startedAt ?? timestamp();
          this.db.updateStepRun(step.id, {
            status: "waiting_input",
            startedAt: startedAt2
          });
          this.db.updateRun(runId, {
            status: "waiting_input",
            currentStepId: step.stepId
          });
          this.db.createInputRequest(runId, step.id, step.inputPrompt, step.inputSensitive);
          this.log(runId, step.id, "system", `[workflow-manager] \uC785\uB825\uC744 \uAE30\uB2E4\uB9BD\uB2C8\uB2E4: ${step.inputPrompt}
`);
          this.emitRun(runId);
          return;
        }
        const startedAt = step.startedAt ?? timestamp();
        this.db.updateRun(runId, { currentStepId: step.stepId });
        this.db.updateStepRun(step.id, { status: "running", startedAt });
        this.log(runId, step.id, "system", `
[workflow-manager] \uB2E8\uACC4 ${step.position}: ${step.stepName}
$ ${step.command}
`);
        this.emitRun(runId);
        let cwd;
        try {
          cwd = resolveWorkingDirectory(run.rootDirectory, step.workingDirectory);
        } catch (error) {
          const message = error instanceof Error ? error.message : "\uC791\uC5C5 \uACBD\uB85C\uB97C \uD655\uC778\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
          this.log(runId, step.id, "system", `[workflow-manager] ${message}
`);
          this.db.updateStepRun(step.id, {
            status: "failed",
            finishedAt: timestamp(),
            exitCode: 1
          });
          this.db.updateRemainingSteps(runId, "skipped");
          this.finishRun(runId, "failed", 1);
          return;
        }
        control.timedOut = false;
        let timeout = null;
        let exitCode = 1;
        try {
          const subprocess = Bun.spawn({
            cmd: ["/bin/sh", "-lc", step.command],
            cwd,
            env: process.env,
            stdin: stepInput ? "pipe" : "ignore",
            stdout: "pipe",
            stderr: "pipe",
            detached: process.platform !== "win32"
          });
          control.process = subprocess;
          if (stepInput) {
            const stdin = subprocess.stdin;
            stdin.write(`${stepInput.value}
`);
            stdin.end();
          }
          if (step.timeoutSeconds) {
            timeout = setTimeout(() => {
              control.timedOut = true;
              this.log(runId, step.id, "system", `
[workflow-manager] ${step.timeoutSeconds}\uCD08 \uD0C0\uC784\uC544\uC6C3\uC744 \uCD08\uACFC\uD588\uC2B5\uB2C8\uB2E4.
`);
              terminateProcessTree(control);
            }, step.timeoutSeconds * 1000);
          }
          const stdout = this.consume(runId, step.id, "stdout", subprocess.stdout, stepInput?.sensitive ? stepInput.value : null);
          const stderr = this.consume(runId, step.id, "stderr", subprocess.stderr, stepInput?.sensitive ? stepInput.value : null);
          exitCode = await subprocess.exited;
          await Promise.all([stdout, stderr]);
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          this.log(runId, step.id, "system", `[workflow-manager] \uBA85\uB839\uC744 \uC2DC\uC791\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: ${message}
`);
          exitCode = 1;
        } finally {
          if (timeout)
            clearTimeout(timeout);
          control.process = null;
        }
        if (stepInput)
          stepInput.value = "";
        suppliedInput = undefined;
        const finishedAt = timestamp();
        if (control.canceled) {
          this.db.updateStepRun(step.id, {
            status: "canceled",
            finishedAt,
            exitCode: null
          });
          this.db.updateRemainingSteps(runId, "canceled");
          this.finishRun(runId, "canceled", null);
          return;
        }
        if (control.timedOut) {
          this.db.updateStepRun(step.id, {
            status: "failed",
            finishedAt,
            exitCode: 124
          });
          this.db.updateRemainingSteps(runId, "skipped");
          this.finishRun(runId, "failed", 124);
          return;
        }
        if (exitCode !== 0) {
          this.log(runId, step.id, "system", `
[workflow-manager] \uC885\uB8CC \uCF54\uB4DC ${exitCode}\uB85C \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.
`);
          this.db.updateStepRun(step.id, {
            status: "failed",
            finishedAt,
            exitCode
          });
          this.db.updateRemainingSteps(runId, "skipped");
          this.finishRun(runId, "failed", exitCode);
          return;
        }
        this.db.updateStepRun(step.id, {
          status: "succeeded",
          finishedAt,
          exitCode: 0
        });
        this.emitRun(runId);
      }
      this.log(runId, null, "system", `
[workflow-manager] \uBAA8\uB4E0 \uB2E8\uACC4\uB97C \uC644\uB8CC\uD588\uC2B5\uB2C8\uB2E4.
`);
      this.finishRun(runId, "succeeded", 0);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.log(runId, null, "system", `
[workflow-manager] \uC2E4\uD589 \uC624\uB958: ${message}
`);
      this.db.updateRemainingSteps(runId, "skipped");
      this.finishRun(runId, control.canceled ? "canceled" : "failed", null);
    } finally {
      this.controls.delete(runId);
    }
  }
}

// src/server/app.ts
import { join } from "path";
var JSON_HEADERS = { "content-type": "application/json; charset=utf-8" };
function json(data, status = 200, headers = {}) {
  return Response.json(data, {
    status,
    headers: { ...JSON_HEADERS, ...headers }
  });
}
function authJson(data, status = 200, headers = {}) {
  return json(data, status, {
    "cache-control": "no-store",
    ...headers
  });
}
function empty(status = 204) {
  return new Response(null, { status });
}
async function body(request) {
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > 1e6) {
    throw new AppError("\uC694\uCCAD \uBCF8\uBB38\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4.", 413, "payload_too_large");
  }
  try {
    return objectBody(await request.json());
  } catch (error) {
    if (error instanceof AppError)
      throw error;
    throw new AppError("\uC62C\uBC14\uB978 JSON \uC694\uCCAD \uBCF8\uBB38\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.");
  }
}
function idFrom(pathname, pattern) {
  const match = pathname.match(pattern);
  return match ? decodeURIComponent(match[1]) : null;
}
function requireProject(db, projectId) {
  const project = db.getProject(projectId);
  if (!project)
    throw new AppError("\uD504\uB85C\uC81D\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
  return project;
}
function requireWorkflow(db, workflowId) {
  const workflow = db.getWorkflow(workflowId);
  if (!workflow) {
    throw new AppError("\uC6CC\uD06C\uD50C\uB85C\uC6B0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
  }
  return workflow;
}
function securityHeaders(response) {
  const headers = new Headers(response.headers);
  headers.set("x-content-type-options", "nosniff");
  headers.set("referrer-policy", "same-origin");
  headers.set("x-frame-options", "DENY");
  headers.set("content-security-policy", "default-src 'self'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'; connect-src 'self'; img-src 'self' data:; object-src 'none'; script-src 'self'; style-src 'self'");
  headers.set("permissions-policy", "publickey-credentials-create=(self), publickey-credentials-get=(self)");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}
function createApp(options) {
  const { db, runner, environmentSettings, auth } = options;
  const publicDirectory = options.publicDirectory ?? join(import.meta.dir, "..", "web");
  return async function fetch(request) {
    try {
      const url = new URL(request.url);
      const { pathname } = url;
      const method = request.method;
      if (pathname === "/api/health" && method === "GET") {
        return json({ ok: true });
      }
      if (pathname === "/manifest.webmanifest" && method === "GET") {
        const settings = environmentSettings.applicationSettings();
        return securityHeaders(json({
          id: "/",
          name: settings.name,
          short_name: settings.name,
          description: [settings.title, settings.description].filter(Boolean).join(" "),
          start_url: "/",
          scope: "/",
          display: "standalone",
          background_color: "#f4f3ee",
          theme_color: "#14776d",
          icons: [
            {
              src: "/icon-192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any maskable"
            },
            {
              src: "/icon-512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable"
            }
          ]
        }, 200, {
          "cache-control": "no-cache",
          "content-type": "application/manifest+json; charset=utf-8"
        }));
      }
      if (pathname === "/api/auth/status" && method === "GET") {
        return authJson({
          ...auth.status(request),
          settings: environmentSettings.applicationSettings()
        });
      }
      if (pathname === "/api/auth/setup/options" && method === "POST") {
        auth.assertTrustedOrigin(request);
        return authJson(await auth.beginSetup(await body(request)));
      }
      if (pathname === "/api/auth/setup/verify" && method === "POST") {
        auth.assertTrustedOrigin(request);
        const result = await auth.finishSetup(await body(request));
        return authJson({
          user: result.user,
          csrfToken: result.session.csrfToken,
          expiresAt: result.session.expiresAt
        }, 201, { "set-cookie": result.session.cookie });
      }
      if (pathname === "/api/auth/login/options" && method === "POST") {
        auth.assertTrustedOrigin(request);
        return authJson(await auth.beginLogin());
      }
      if (pathname === "/api/auth/login/verify" && method === "POST") {
        auth.assertTrustedOrigin(request);
        const result = await auth.finishLogin(await body(request));
        return authJson({
          user: result.user,
          csrfToken: result.session.csrfToken,
          expiresAt: result.session.expiresAt
        }, 200, { "set-cookie": result.session.cookie });
      }
      const authContext = pathname.startsWith("/api/") ? auth.requireSession(request) : null;
      if (authContext && !["GET", "HEAD", "OPTIONS"].includes(method)) {
        auth.assertCsrf(request, authContext);
      }
      if (pathname === "/api/auth/logout" && method === "POST") {
        return authJson({ authenticated: false }, 200, { "set-cookie": auth.logout(request) });
      }
      if (pathname === "/api/auth/passkeys" && method === "GET") {
        return authJson(auth.listPasskeys(authContext));
      }
      if (pathname === "/api/auth/passkeys/options" && method === "POST") {
        return authJson(await auth.beginAddPasskey(authContext, await body(request)));
      }
      if (pathname === "/api/auth/passkeys/verify" && method === "POST") {
        return authJson(await auth.finishAddPasskey(authContext, await body(request)), 201);
      }
      const passkeyId = idFrom(pathname, /^\/api\/auth\/passkeys\/([^/]+)$/);
      if (passkeyId && method === "DELETE") {
        auth.deletePasskey(authContext, passkeyId);
        return empty();
      }
      if (pathname === "/api/settings" && method === "GET") {
        return json({
          settings: environmentSettings.applicationSettings(),
          environment: environmentSettings.list()
        });
      }
      if (pathname === "/api/settings" && method === "PATCH") {
        const input = await body(request);
        return json(environmentSettings.update(objectBody(input.values)));
      }
      if (pathname === "/api/projects" && method === "GET") {
        return json({ projects: db.listProjects() });
      }
      if (pathname === "/api/projects" && method === "POST") {
        const input = await body(request);
        const project = db.createProject({
          name: requiredString(input.name, "\uD504\uB85C\uC81D\uD2B8 \uC774\uB984"),
          description: optionalString(input.description, "\uC124\uBA85") ?? "",
          rootDirectory: rootDirectory(input.rootDirectory)
        });
        return json({ project }, 201);
      }
      const projectId = idFrom(pathname, /^\/api\/projects\/([^/]+)$/);
      if (projectId && method === "GET") {
        const project = requireProject(db, projectId);
        return json({
          project,
          workflows: db.listWorkflows(projectId),
          runs: db.listRuns({ projectId, limit: 30 })
        });
      }
      if (projectId && method === "PATCH") {
        const current = requireProject(db, projectId);
        const input = await body(request);
        const nextRootDirectory = input.rootDirectory === undefined ? undefined : rootDirectory(input.rootDirectory);
        if (nextRootDirectory !== undefined && current.rootDirectory !== nextRootDirectory && db.hasActiveProjectRun(projectId)) {
          throw new AppError("\uC2E4\uD589 \uC911\uC5D0\uB294 \uD504\uB85C\uC81D\uD2B8 \uC791\uC5C5 \uACBD\uB85C\uB97C \uBCC0\uACBD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 409, "project_busy");
        }
        const project = db.updateProject(projectId, {
          name: input.name === undefined ? undefined : requiredString(input.name, "\uD504\uB85C\uC81D\uD2B8 \uC774\uB984"),
          description: optionalString(input.description, "\uC124\uBA85"),
          rootDirectory: nextRootDirectory
        });
        return json({ project });
      }
      if (projectId && method === "DELETE") {
        requireProject(db, projectId);
        if (db.hasActiveProjectRun(projectId)) {
          throw new AppError("\uC2E4\uD589 \uC911\uC778 \uD504\uB85C\uC81D\uD2B8\uB294 \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 409, "project_busy");
        }
        db.deleteProject(projectId);
        return empty();
      }
      const projectWorkflowsId = idFrom(pathname, /^\/api\/projects\/([^/]+)\/workflows$/);
      if (projectWorkflowsId && method === "GET") {
        requireProject(db, projectWorkflowsId);
        return json({ workflows: db.listWorkflows(projectWorkflowsId) });
      }
      if (projectWorkflowsId && method === "POST") {
        const input = await body(request);
        const workflow = db.createWorkflow(projectWorkflowsId, {
          name: requiredString(input.name, "\uC6CC\uD06C\uD50C\uB85C\uC6B0 \uC774\uB984"),
          description: optionalString(input.description, "\uC124\uBA85") ?? ""
        });
        return json({ workflow }, 201);
      }
      const workflowId = idFrom(pathname, /^\/api\/workflows\/([^/]+)$/);
      if (workflowId && method === "GET") {
        return json({ workflow: requireWorkflow(db, workflowId) });
      }
      if (workflowId && method === "PATCH") {
        requireWorkflow(db, workflowId);
        const input = await body(request);
        const workflow = db.updateWorkflow(workflowId, {
          name: input.name === undefined ? undefined : requiredString(input.name, "\uC6CC\uD06C\uD50C\uB85C\uC6B0 \uC774\uB984"),
          description: optionalString(input.description, "\uC124\uBA85")
        });
        return json({ workflow });
      }
      if (workflowId && method === "DELETE") {
        requireWorkflow(db, workflowId);
        db.deleteWorkflow(workflowId);
        return empty();
      }
      const workflowStepsId = idFrom(pathname, /^\/api\/workflows\/([^/]+)\/steps$/);
      if (workflowStepsId && method === "POST") {
        const input = await body(request);
        const step = db.createStep(workflowStepsId, {
          name: requiredString(input.name, "\uB2E8\uACC4 \uC774\uB984"),
          command: requiredString(input.command, "\uBA85\uB839", 20000),
          workingDirectory: workingDirectory(input.workingDirectory),
          timeoutSeconds: optionalTimeout(input.timeoutSeconds),
          inputPrompt: optionalString(input.inputPrompt, "\uC785\uB825 \uC548\uB0B4", 500),
          inputSensitive: optionalBoolean(input.inputSensitive, "\uBBFC\uAC10\uD55C \uC785\uB825"),
          enabled: optionalBoolean(input.enabled, "\uD65C\uC131\uD654 \uC0C1\uD0DC")
        });
        return json({ step }, 201);
      }
      const reorderWorkflowId = idFrom(pathname, /^\/api\/workflows\/([^/]+)\/steps\/reorder$/);
      if (reorderWorkflowId && method === "POST") {
        const input = await body(request);
        if (!Array.isArray(input.stepIds) || !input.stepIds.every((stepId2) => typeof stepId2 === "string")) {
          throw new AppError("stepIds \uBB38\uC790\uC5F4 \uBC30\uC5F4\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.");
        }
        const workflow = db.reorderSteps(reorderWorkflowId, input.stepIds);
        return json({ workflow });
      }
      const stepId = idFrom(pathname, /^\/api\/steps\/([^/]+)$/);
      if (stepId && method === "PATCH") {
        const input = await body(request);
        const step = db.updateStep(stepId, {
          name: input.name === undefined ? undefined : requiredString(input.name, "\uB2E8\uACC4 \uC774\uB984"),
          command: input.command === undefined ? undefined : requiredString(input.command, "\uBA85\uB839", 20000),
          workingDirectory: workingDirectory(input.workingDirectory),
          timeoutSeconds: optionalTimeout(input.timeoutSeconds),
          inputPrompt: optionalString(input.inputPrompt, "\uC785\uB825 \uC548\uB0B4", 500),
          inputSensitive: optionalBoolean(input.inputSensitive, "\uBBFC\uAC10\uD55C \uC785\uB825"),
          enabled: optionalBoolean(input.enabled, "\uD65C\uC131\uD654 \uC0C1\uD0DC")
        });
        return json({ step });
      }
      if (stepId && method === "DELETE") {
        db.deleteStep(stepId);
        return empty();
      }
      const runWorkflowId = idFrom(pathname, /^\/api\/workflows\/([^/]+)\/runs$/);
      if (runWorkflowId && method === "POST") {
        const run = runner.start(runWorkflowId);
        return json({ run }, 202);
      }
      if (pathname === "/api/runs" && method === "GET") {
        const projectIdFilter = url.searchParams.get("projectId") ?? undefined;
        const limit = Number(url.searchParams.get("limit") ?? 30);
        return json({
          runs: db.listRuns({
            projectId: projectIdFilter,
            limit: Number.isFinite(limit) ? limit : 30
          })
        });
      }
      const runId = idFrom(pathname, /^\/api\/runs\/([^/]+)$/);
      if (runId && method === "GET") {
        const run = db.getRun(runId);
        if (!run)
          throw new AppError("\uC2E4\uD589\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
        return json({ run });
      }
      const cancelRunId = idFrom(pathname, /^\/api\/runs\/([^/]+)\/cancel$/);
      if (cancelRunId && method === "POST") {
        const run = runner.cancel(cancelRunId);
        return json({ run }, 202);
      }
      const inputRunId = idFrom(pathname, /^\/api\/runs\/([^/]+)\/input$/);
      if (inputRunId && method === "POST") {
        const input = await body(request);
        const run = runner.respond(inputRunId, requiredString(input.requestId, "\uC785\uB825 \uC694\uCCAD ID"), oneLineInput(input.value));
        return authJson({ run }, 202);
      }
      const logRunId = idFrom(pathname, /^\/api\/runs\/([^/]+)\/logs$/);
      if (logRunId && method === "GET") {
        if (!db.getRun(logRunId)) {
          throw new AppError("\uC2E4\uD589\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
        }
        const after = Number(url.searchParams.get("after") ?? 0);
        return json({
          logs: db.getLogs(logRunId, Number.isFinite(after) ? after : 0)
        });
      }
      const eventRunId = idFrom(pathname, /^\/api\/runs\/([^/]+)\/events$/);
      if (eventRunId && method === "GET") {
        const after = Number(url.searchParams.get("after") ?? 0);
        return runner.events(eventRunId, Number.isFinite(after) ? after : 0);
      }
      if (pathname.startsWith("/api/")) {
        throw new AppError("API \uACBD\uB85C\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 404, "not_found");
      }
      const staticFiles = {
        "/": "index.html",
        "/index.html": "index.html",
        "/app.js": "app.js",
        "/styles.css": "styles.css",
        "/favicon-32.png": "assets/favicon-32.png",
        "/apple-touch-icon.png": "assets/apple-touch-icon.png",
        "/icon-192.png": "assets/icon-192.png",
        "/icon-512.png": "assets/icon-512.png"
      };
      const fileName = staticFiles[pathname];
      if (!fileName)
        return new Response("Not found", { status: 404 });
      const file = Bun.file(join(publicDirectory, fileName));
      if (!await file.exists())
        return new Response("Not found", { status: 404 });
      return securityHeaders(new Response(file));
    } catch (error) {
      if (error instanceof AppError) {
        return json({ error: { code: error.code, message: error.message } }, error.status);
      }
      console.error(error);
      return json({ error: { code: "internal_error", message: "\uC11C\uBC84 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4." } }, 500);
    }
  };
}

// src/server/environment-settings.ts
import {
  existsSync,
  mkdirSync as mkdirSync2,
  readFileSync,
  renameSync,
  writeFileSync
} from "fs";
import { dirname as dirname2, isAbsolute as isAbsolute2 } from "path";
var DEFINITIONS = [
  {
    key: "WORKFLOW_MANAGER_NAME",
    label: "\uC11C\uBE44\uC2A4 \uC774\uB984",
    description: "\uD5E4\uB354 \uBE0C\uB79C\uB4DC\uC640 \uBE0C\uB77C\uC6B0\uC800 \uC81C\uBAA9\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.",
    apply: "immediate",
    control: "text"
  },
  {
    key: "WORKFLOW_MANAGER_TAGLINE",
    label: "\uD5E4\uB354 \uBCF4\uC870 \uBB38\uAD6C",
    description: "\uC11C\uBE44\uC2A4 \uC774\uB984 \uC606\uC5D0\uC11C \uC81C\uD488\uC758 \uC6A9\uB3C4\uB97C \uC9E7\uAC8C \uC124\uBA85\uD569\uB2C8\uB2E4.",
    apply: "immediate",
    control: "text"
  },
  {
    key: "WORKFLOW_MANAGER_TITLE",
    label: "\uD648 \uC81C\uBAA9",
    description: "\uD504\uB85C\uC81D\uD2B8 \uBAA9\uB85D \uD654\uBA74\uC758 \uAC00\uC7A5 \uD070 \uC81C\uBAA9\uC785\uB2C8\uB2E4.",
    apply: "immediate",
    control: "text"
  },
  {
    key: "WORKFLOW_MANAGER_DESCRIPTION",
    label: "\uD648 \uC124\uBA85",
    description: "\uD648 \uC81C\uBAA9 \uC544\uB798\uC640 \uD398\uC774\uC9C0 \uC124\uBA85 \uBA54\uD0C0 \uC815\uBCF4\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.",
    apply: "immediate",
    control: "textarea"
  },
  {
    key: "WORKFLOW_MANAGER_ACCESS_MODE",
    label: "\uC811\uADFC \uBC94\uC704",
    description: "private\uC740 \uB0B4\uBD80\uB9DD, local\uC740 \uAC19\uC740 \uC11C\uBC84\uC5D0\uC11C\uB9CC \uC811\uADFC\uC744 \uD5C8\uC6A9\uD569\uB2C8\uB2E4.",
    apply: "restart",
    control: "select",
    options: [
      { value: "private", label: "\uB0B4\uBD80 \uB124\uD2B8\uC6CC\uD06C (private)" },
      { value: "local", label: "\uC774 \uC11C\uBC84\uC5D0\uC11C\uB9CC (local)" }
    ]
  },
  {
    key: "WORKFLOW_MANAGER_DATA_DIR",
    label: "\uB370\uC774\uD130 \uB514\uB809\uD130\uB9AC",
    description: "\uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC640 \uB7F0\uD0C0\uC784 \uB370\uC774\uD130\uB97C \uBCF4\uAD00\uD558\uB294 \uC808\uB300 \uACBD\uB85C\uC785\uB2C8\uB2E4.",
    apply: "restart",
    control: "text"
  }
];
var DEFINITION_BY_KEY = new Map(DEFINITIONS.map((definition) => [definition.key, definition]));
var IMMEDIATE_KEYS = new Set([
  "WORKFLOW_MANAGER_NAME",
  "WORKFLOW_MANAGER_TAGLINE",
  "WORKFLOW_MANAGER_TITLE",
  "WORKFLOW_MANAGER_DESCRIPTION"
]);
function envLines(content) {
  return content ? content.replace(/\r\n/g, `
`).split(`
`) : [];
}
function keyFromLine(line) {
  return line.match(/^\s*(?:export\s+)?([A-Z][A-Z0-9_]*)\s*=/)?.[1] ?? null;
}
function decodeValue(raw) {
  const value = raw.trim();
  if (value.startsWith('"') && value.endsWith('"')) {
    try {
      return JSON.parse(value);
    } catch {
      return value.slice(1, -1);
    }
  }
  if (value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1);
  }
  return value;
}
function parsedValues(content) {
  const values = {};
  for (const line of envLines(content)) {
    const key = keyFromLine(line);
    if (!key)
      continue;
    values[key] = decodeValue(line.slice(line.indexOf("=") + 1));
  }
  return values;
}
function readEnvironmentFile(filePath) {
  if (!existsSync(filePath))
    return {};
  return parsedValues(readFileSync(filePath, "utf8"));
}
function managedValues(content) {
  const values = new Map;
  for (const [rawKey, value] of Object.entries(parsedValues(content))) {
    const key = rawKey;
    if (!key || !DEFINITION_BY_KEY.has(key))
      continue;
    values.set(key, value);
  }
  return values;
}
function textValue(value, label, options) {
  if (typeof value !== "string") {
    throw new AppError(`${label}\uC740(\uB294) \uBB38\uC790\uC5F4\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.`);
  }
  const result = value.trim();
  if (options.required !== false && !result) {
    throw new AppError(`${label}\uC744(\uB97C) \uC785\uB825\uD574 \uC8FC\uC138\uC694.`);
  }
  if (/[\r\n]/.test(result)) {
    throw new AppError(`${label}\uC5D0\uB294 \uC904\uBC14\uAFC8\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`);
  }
  if (result.length > options.maxLength) {
    throw new AppError(`${label}\uC740(\uB294) ${options.maxLength}\uC790 \uC774\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.`);
  }
  return result;
}
function validateValue(key, value) {
  switch (key) {
    case "WORKFLOW_MANAGER_NAME":
      return textValue(value, "\uC11C\uBE44\uC2A4 \uC774\uB984", { maxLength: 80 });
    case "WORKFLOW_MANAGER_TAGLINE":
      return textValue(value, "\uD5E4\uB354 \uBCF4\uC870 \uBB38\uAD6C", { maxLength: 120 });
    case "WORKFLOW_MANAGER_TITLE":
      return textValue(value, "\uD648 \uC81C\uBAA9", { maxLength: 200 });
    case "WORKFLOW_MANAGER_DESCRIPTION":
      return textValue(value, "\uD648 \uC124\uBA85", {
        required: false,
        maxLength: 500
      });
    case "WORKFLOW_MANAGER_ACCESS_MODE":
      if (value !== "private" && value !== "local") {
        throw new AppError("\uC811\uADFC \uBC94\uC704\uB294 private \uB610\uB294 local\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.");
      }
      return value;
    case "WORKFLOW_MANAGER_DATA_DIR": {
      const label = "\uB370\uC774\uD130 \uB514\uB809\uD130\uB9AC";
      const path = textValue(value, label, { maxLength: 4096 });
      if (!isAbsolute2(path)) {
        throw new AppError(`${label}\uC740(\uB294) \uC808\uB300 \uACBD\uB85C\uC5EC\uC57C \uD569\uB2C8\uB2E4.`);
      }
      return path;
    }
  }
}

class EnvironmentSettings {
  options;
  currentValues;
  constructor(options) {
    this.options = options;
    this.currentValues = { ...options.currentValues };
  }
  readFile() {
    return existsSync(this.options.filePath) ? readFileSync(this.options.filePath, "utf8") : "";
  }
  applicationSettings() {
    return {
      name: this.currentValues.WORKFLOW_MANAGER_NAME,
      tagline: this.currentValues.WORKFLOW_MANAGER_TAGLINE,
      title: this.currentValues.WORKFLOW_MANAGER_TITLE,
      description: this.currentValues.WORKFLOW_MANAGER_DESCRIPTION
    };
  }
  list() {
    const configured = managedValues(this.readFile());
    return DEFINITIONS.map((definition) => ({
      ...definition,
      currentValue: this.currentValues[definition.key],
      defaultValue: this.options.defaultValues[definition.key],
      value: configured.get(definition.key) ?? this.currentValues[definition.key]
    }));
  }
  update(input) {
    const entries = Object.entries(input);
    if (!entries.length) {
      throw new AppError("\uBCC0\uACBD\uD560 \uD658\uACBD \uBCC0\uC218\uAC12\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.");
    }
    const updates = new Map;
    for (const [rawKey, rawValue] of entries) {
      const key = rawKey;
      if (!DEFINITION_BY_KEY.has(key)) {
        throw new AppError(`\uC218\uC815\uD560 \uC218 \uC5C6\uB294 \uD658\uACBD \uBCC0\uC218\uC785\uB2C8\uB2E4: ${rawKey}`);
      }
      updates.set(key, validateValue(key, rawValue));
    }
    const lines = envLines(this.readFile());
    const output = [];
    const written = new Set;
    for (const line of lines) {
      const key = keyFromLine(line);
      if (!key || !updates.has(key)) {
        output.push(line);
        continue;
      }
      if (!written.has(key)) {
        output.push(`${key}=${JSON.stringify(updates.get(key))}`);
        written.add(key);
      }
    }
    for (const [key, value] of updates) {
      if (!written.has(key))
        output.push(`${key}=${JSON.stringify(value)}`);
    }
    const content = `${output.filter((line, index) => line || index < output.length - 1).join(`
`)}
`;
    const temporaryPath = `${this.options.filePath}.tmp-${process.pid}-${Date.now()}`;
    try {
      mkdirSync2(dirname2(this.options.filePath), { recursive: true });
      writeFileSync(temporaryPath, content, { encoding: "utf8", mode: 384 });
      renameSync(temporaryPath, this.options.filePath);
    } catch {
      throw new AppError("\uD658\uACBD \uC124\uC815 \uD30C\uC77C\uC744 \uC800\uC7A5\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 500, "settings_write_failed");
    }
    for (const [key, value] of updates) {
      if (IMMEDIATE_KEYS.has(key))
        this.currentValues[key] = value;
    }
    const restartRequired = [...updates].some(([key, value]) => DEFINITION_BY_KEY.get(key)?.apply === "restart" && value !== this.currentValues[key]);
    return {
      settings: this.applicationSettings(),
      environment: this.list(),
      restartRequired
    };
  }
}

// src/server/network-access.ts
import { isIP } from "net";
import { networkInterfaces } from "os";
function normalizedAddress(address) {
  const withoutZone = address.toLowerCase().split("%", 1)[0];
  return withoutZone.startsWith("::ffff:") ? withoutZone.slice("::ffff:".length) : withoutZone;
}
function ipv4Parts(address) {
  if (isIP(address) !== 4)
    return null;
  return address.split(".").map(Number);
}
function isLoopbackAddress(address) {
  if (!address)
    return false;
  const normalized = normalizedAddress(address);
  const parts = ipv4Parts(normalized);
  if (parts)
    return parts[0] === 127;
  return normalized === "::1" || normalized === "0:0:0:0:0:0:0:1";
}
function isPrivateAddress(address) {
  if (!address)
    return false;
  const normalized = normalizedAddress(address);
  const parts = ipv4Parts(normalized);
  if (parts) {
    const [first, second] = parts;
    return first === 10 || first === 172 && second >= 16 && second <= 31 || first === 192 && second === 168 || first === 169 && second === 254 || first === 100 && second >= 64 && second <= 127;
  }
  if (isIP(normalized) !== 6)
    return false;
  return normalized.startsWith("fc") || normalized.startsWith("fd") || /^fe[89ab]/.test(normalized);
}
function parseAccessMode(value) {
  const mode = value ?? "private";
  if (mode !== "local" && mode !== "private") {
    throw new Error("WORKFLOW_MANAGER_ACCESS_MODE must be either 'local' or 'private'.");
  }
  return mode;
}
function isAllowedClientAddress(address, mode) {
  if (isLoopbackAddress(address))
    return true;
  return mode === "private" && isPrivateAddress(address);
}
function privateNetworkUrls(port) {
  const urls = new Set;
  for (const addresses of Object.values(networkInterfaces())) {
    for (const address of addresses ?? []) {
      const normalized = normalizedAddress(address.address);
      const parts = ipv4Parts(normalized);
      const isLanIpv4 = parts !== null && (parts[0] === 10 || parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31 || parts[0] === 192 && parts[1] === 168);
      const isUniqueLocalIpv6 = isIP(normalized) === 6 && (normalized.startsWith("fc") || normalized.startsWith("fd"));
      if (!address.internal && (isLanIpv4 || isUniqueLocalIpv6)) {
        const host = address.family === "IPv6" ? `[${address.address}]` : address.address;
        urls.add(`http://${host}:${port}/`);
      }
    }
  }
  return [...urls];
}

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js
var exports_isoBase64URL = {};
__export(exports_isoBase64URL, {
  trimPadding: () => trimPadding,
  toUTF8String: () => toUTF8String,
  toBuffer: () => toBuffer,
  toBase64: () => toBase64,
  isBase64URL: () => isBase64URL,
  isBase64: () => isBase64,
  fromUTF8String: () => fromUTF8String,
  fromBuffer: () => fromBuffer
});

// node_modules/@hexagon/base64/src/base64.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var charsUrl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
var genLookup = (target) => {
  const lookupTemp = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
  const len = chars.length;
  for (let i = 0;i < len; i++) {
    lookupTemp[target.charCodeAt(i)] = i;
  }
  return lookupTemp;
};
var lookup = genLookup(chars);
var lookupUrl = genLookup(charsUrl);
var base64UrlPattern = /^[-A-Za-z0-9\-_]*$/;
var base64Pattern = /^[-A-Za-z0-9+/]*={0,3}$/;
var base64 = {};
base64.toArrayBuffer = (data, urlMode) => {
  const len = data.length;
  let bufferLength = data.length * 0.75, i, p = 0, encoded1, encoded2, encoded3, encoded4;
  if (data[data.length - 1] === "=") {
    bufferLength--;
    if (data[data.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer), target = urlMode ? lookupUrl : lookup;
  for (i = 0;i < len; i += 4) {
    encoded1 = target[data.charCodeAt(i)];
    encoded2 = target[data.charCodeAt(i + 1)];
    encoded3 = target[data.charCodeAt(i + 2)];
    encoded4 = target[data.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};
base64.fromArrayBuffer = (arrBuf, urlMode) => {
  const bytes = new Uint8Array(arrBuf);
  let i, result = "";
  const len = bytes.length, target = urlMode ? charsUrl : chars;
  for (i = 0;i < len; i += 3) {
    result += target[bytes[i] >> 2];
    result += target[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    result += target[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    result += target[bytes[i + 2] & 63];
  }
  const remainder = len % 3;
  if (remainder === 2) {
    result = result.substring(0, result.length - 1) + (urlMode ? "" : "=");
  } else if (remainder === 1) {
    result = result.substring(0, result.length - 2) + (urlMode ? "" : "==");
  }
  return result;
};
base64.toString = (str, urlMode) => {
  return new TextDecoder().decode(base64.toArrayBuffer(str, urlMode));
};
base64.fromString = (str, urlMode) => {
  return base64.fromArrayBuffer(new TextEncoder().encode(str), urlMode);
};
base64.validate = (encoded, urlMode) => {
  if (!(typeof encoded === "string" || encoded instanceof String)) {
    return false;
  }
  try {
    return urlMode ? base64UrlPattern.test(encoded) : base64Pattern.test(encoded);
  } catch (_e) {
    return false;
  }
};
base64.base64 = base64;
var base64_default = base64;

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js
function toBuffer(base64urlString, from = "base64url") {
  const _buffer = base64_default.toArrayBuffer(base64urlString, from === "base64url");
  return new Uint8Array(_buffer);
}
function fromBuffer(buffer, to = "base64url") {
  const _normalized = new Uint8Array(buffer);
  return base64_default.fromArrayBuffer(_normalized.buffer, to === "base64url");
}
function toBase64(base64urlString) {
  const fromBase64Url = base64_default.toArrayBuffer(base64urlString, true);
  const toBase642 = base64_default.fromArrayBuffer(fromBase64Url);
  return toBase642;
}
function fromUTF8String(utf8String) {
  return base64_default.fromString(utf8String, true);
}
function toUTF8String(base64urlString) {
  return base64_default.toString(base64urlString, true);
}
function isBase64(input) {
  return base64_default.validate(input, false);
}
function isBase64URL(input) {
  input = trimPadding(input);
  return base64_default.validate(input, true);
}
function trimPadding(input) {
  return input.replace(/=/g, "");
}
// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCBOR.js
var exports_isoCBOR = {};
__export(exports_isoCBOR, {
  encode: () => encode,
  decodeFirst: () => decodeFirst
});

// node_modules/@levischuck/tiny-cbor/esm/cbor/cbor_internal.js
function decodeLength(data, argument, index) {
  if (argument < 24) {
    return [argument, 1];
  }
  const remainingDataLength = data.byteLength - index - 1;
  const view = new DataView(data.buffer, index + 1);
  let output;
  let bytes = 0;
  switch (argument) {
    case 24: {
      if (remainingDataLength > 0) {
        output = view.getUint8(0);
        bytes = 2;
      }
      break;
    }
    case 25: {
      if (remainingDataLength > 1) {
        output = view.getUint16(0, false);
        bytes = 3;
      }
      break;
    }
    case 26: {
      if (remainingDataLength > 3) {
        output = view.getUint32(0, false);
        bytes = 5;
      }
      break;
    }
    case 27: {
      if (remainingDataLength > 7) {
        const bigOutput = view.getBigUint64(0, false);
        if (bigOutput >= 24n && bigOutput <= Number.MAX_SAFE_INTEGER) {
          return [Number(bigOutput), 9];
        }
      }
      break;
    }
  }
  if (output && output >= 24) {
    return [output, bytes];
  }
  throw new Error("Length not supported or not well formed");
}
var MAJOR_TYPE_UNSIGNED_INTEGER = 0;
var MAJOR_TYPE_NEGATIVE_INTEGER = 1;
var MAJOR_TYPE_BYTE_STRING = 2;
var MAJOR_TYPE_TEXT_STRING = 3;
var MAJOR_TYPE_ARRAY = 4;
var MAJOR_TYPE_MAP = 5;
var MAJOR_TYPE_TAG = 6;
var MAJOR_TYPE_SIMPLE_OR_FLOAT = 7;
function encodeLength(major, argument) {
  const majorEncoded = major << 5;
  if (argument < 0) {
    throw new Error("CBOR Data Item argument must not be negative");
  }
  let bigintArgument;
  if (typeof argument == "number") {
    if (!Number.isInteger(argument)) {
      throw new Error("CBOR Data Item argument must be an integer");
    }
    bigintArgument = BigInt(argument);
  } else {
    bigintArgument = argument;
  }
  if (major == MAJOR_TYPE_NEGATIVE_INTEGER) {
    if (bigintArgument == 0n) {
      throw new Error("CBOR Data Item argument cannot be zero when negative");
    }
    bigintArgument = bigintArgument - 1n;
  }
  if (bigintArgument > 18446744073709551615n) {
    throw new Error("CBOR number out of range");
  }
  const buffer = new Uint8Array(8);
  const view = new DataView(buffer.buffer);
  view.setBigUint64(0, bigintArgument, false);
  if (bigintArgument <= 23) {
    return [majorEncoded | buffer[7]];
  } else if (bigintArgument <= 255) {
    return [majorEncoded | 24, buffer[7]];
  } else if (bigintArgument <= 65535) {
    return [majorEncoded | 25, ...buffer.slice(6)];
  } else if (bigintArgument <= 4294967295) {
    return [
      majorEncoded | 26,
      ...buffer.slice(4)
    ];
  } else {
    return [
      majorEncoded | 27,
      ...buffer
    ];
  }
}

// node_modules/@levischuck/tiny-cbor/esm/cbor/cbor.js
class CBORTag {
  constructor(tag, value) {
    Object.defineProperty(this, "tagId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: undefined
    });
    Object.defineProperty(this, "tagValue", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: undefined
    });
    this.tagId = tag;
    this.tagValue = value;
  }
  get tag() {
    return this.tagId;
  }
  get value() {
    return this.tagValue;
  }
}
function decodeUnsignedInteger(data, argument, index) {
  return decodeLength(data, argument, index);
}
function decodeNegativeInteger(data, argument, index) {
  const [value, length] = decodeUnsignedInteger(data, argument, index);
  return [-value - 1, length];
}
function decodeByteString(data, argument, index) {
  const [lengthValue, lengthConsumed] = decodeLength(data, argument, index);
  const dataStartIndex = index + lengthConsumed;
  return [
    new Uint8Array(data.buffer.slice(dataStartIndex, dataStartIndex + lengthValue)),
    lengthConsumed + lengthValue
  ];
}
var TEXT_DECODER = new TextDecoder;
function decodeString(data, argument, index) {
  const [value, length] = decodeByteString(data, argument, index);
  return [TEXT_DECODER.decode(value), length];
}
function decodeArray(data, argument, index) {
  if (argument === 0) {
    return [[], 1];
  }
  const [length, lengthConsumed] = decodeLength(data, argument, index);
  let consumedLength = lengthConsumed;
  const value = [];
  for (let i = 0;i < length; i++) {
    const remainingDataLength = data.byteLength - index - consumedLength;
    if (remainingDataLength <= 0) {
      throw new Error("array is not supported or well formed");
    }
    const [decodedValue, consumed] = decodeNext(data, index + consumedLength);
    value.push(decodedValue);
    consumedLength += consumed;
  }
  return [value, consumedLength];
}
var MAP_ERROR = "Map is not supported or well formed";
function decodeMap(data, argument, index) {
  if (argument === 0) {
    return [new Map, 1];
  }
  const [length, lengthConsumed] = decodeLength(data, argument, index);
  let consumedLength = lengthConsumed;
  const result = new Map;
  for (let i = 0;i < length; i++) {
    let remainingDataLength = data.byteLength - index - consumedLength;
    if (remainingDataLength <= 0) {
      throw new Error(MAP_ERROR);
    }
    const [key, keyConsumed] = decodeNext(data, index + consumedLength);
    consumedLength += keyConsumed;
    remainingDataLength -= keyConsumed;
    if (remainingDataLength <= 0) {
      throw new Error(MAP_ERROR);
    }
    if (typeof key !== "string" && typeof key !== "number") {
      throw new Error(MAP_ERROR);
    }
    if (result.has(key)) {
      throw new Error(MAP_ERROR);
    }
    const [value, valueConsumed] = decodeNext(data, index + consumedLength);
    consumedLength += valueConsumed;
    result.set(key, value);
  }
  return [result, consumedLength];
}
function decodeFloat16(data, index) {
  if (index + 3 > data.byteLength) {
    throw new Error("CBOR stream ended before end of Float 16");
  }
  const result = data.getUint16(index + 1, false);
  if (result == 31744) {
    return [Infinity, 3];
  } else if (result == 32256) {
    return [NaN, 3];
  } else if (result == 64512) {
    return [-Infinity, 3];
  }
  throw new Error("Float16 data is unsupported");
}
function decodeFloat32(data, index) {
  if (index + 5 > data.byteLength) {
    throw new Error("CBOR stream ended before end of Float 32");
  }
  const result = data.getFloat32(index + 1, false);
  return [result, 5];
}
function decodeFloat64(data, index) {
  if (index + 9 > data.byteLength) {
    throw new Error("CBOR stream ended before end of Float 64");
  }
  const result = data.getFloat64(index + 1, false);
  return [result, 9];
}
function decodeTag(data, argument, index) {
  const [tag, tagBytes] = decodeLength(data, argument, index);
  const [value, valueBytes] = decodeNext(data, index + tagBytes);
  return [new CBORTag(tag, value), tagBytes + valueBytes];
}
function decodeNext(data, index) {
  if (index >= data.byteLength) {
    throw new Error("CBOR stream ended before tag value");
  }
  const byte = data.getUint8(index);
  const majorType = byte >> 5;
  const argument = byte & 31;
  switch (majorType) {
    case MAJOR_TYPE_UNSIGNED_INTEGER: {
      return decodeUnsignedInteger(data, argument, index);
    }
    case MAJOR_TYPE_NEGATIVE_INTEGER: {
      return decodeNegativeInteger(data, argument, index);
    }
    case MAJOR_TYPE_BYTE_STRING: {
      return decodeByteString(data, argument, index);
    }
    case MAJOR_TYPE_TEXT_STRING: {
      return decodeString(data, argument, index);
    }
    case MAJOR_TYPE_ARRAY: {
      return decodeArray(data, argument, index);
    }
    case MAJOR_TYPE_MAP: {
      return decodeMap(data, argument, index);
    }
    case MAJOR_TYPE_TAG: {
      return decodeTag(data, argument, index);
    }
    case MAJOR_TYPE_SIMPLE_OR_FLOAT: {
      switch (argument) {
        case 20:
          return [false, 1];
        case 21:
          return [true, 1];
        case 22:
          return [null, 1];
        case 23:
          return [undefined, 1];
        case 25:
          return decodeFloat16(data, index);
        case 26:
          return decodeFloat32(data, index);
        case 27:
          return decodeFloat64(data, index);
      }
    }
  }
  throw new Error(`Unsupported or not well formed at ${index}`);
}
function encodeSimple(data) {
  if (data === true) {
    return 245;
  } else if (data === false) {
    return 244;
  } else if (data === null) {
    return 246;
  }
  return 247;
}
function encodeFloat(data) {
  if (Math.fround(data) == data || !Number.isFinite(data) || Number.isNaN(data)) {
    const output = new Uint8Array(5);
    output[0] = 250;
    const view = new DataView(output.buffer);
    view.setFloat32(1, data, false);
    return output;
  } else {
    const output = new Uint8Array(9);
    output[0] = 251;
    const view = new DataView(output.buffer);
    view.setFloat64(1, data, false);
    return output;
  }
}
function encodeNumber(data) {
  if (typeof data == "number") {
    if (Number.isSafeInteger(data)) {
      if (data < 0) {
        return encodeLength(MAJOR_TYPE_NEGATIVE_INTEGER, Math.abs(data));
      } else {
        return encodeLength(MAJOR_TYPE_UNSIGNED_INTEGER, data);
      }
    }
    return [encodeFloat(data)];
  } else {
    if (data < 0n) {
      return encodeLength(MAJOR_TYPE_NEGATIVE_INTEGER, data * -1n);
    } else {
      return encodeLength(MAJOR_TYPE_UNSIGNED_INTEGER, data);
    }
  }
}
var ENCODER = new TextEncoder;
function encodeString(data, output) {
  output.push(...encodeLength(MAJOR_TYPE_TEXT_STRING, data.length));
  output.push(ENCODER.encode(data));
}
function encodeBytes(data, output) {
  output.push(...encodeLength(MAJOR_TYPE_BYTE_STRING, data.length));
  output.push(data);
}
function encodeArray(data, output) {
  output.push(...encodeLength(MAJOR_TYPE_ARRAY, data.length));
  for (const element of data) {
    encodePartialCBOR(element, output);
  }
}
function encodeMap(data, output) {
  output.push(new Uint8Array(encodeLength(MAJOR_TYPE_MAP, data.size)));
  for (const [key, value] of data.entries()) {
    encodePartialCBOR(key, output);
    encodePartialCBOR(value, output);
  }
}
function encodeTag(tag, output) {
  output.push(...encodeLength(MAJOR_TYPE_TAG, tag.tag));
  encodePartialCBOR(tag.value, output);
}
function encodePartialCBOR(data, output) {
  if (typeof data == "boolean" || data === null || data == undefined) {
    output.push(encodeSimple(data));
    return;
  }
  if (typeof data == "number" || typeof data == "bigint") {
    output.push(...encodeNumber(data));
    return;
  }
  if (typeof data == "string") {
    encodeString(data, output);
    return;
  }
  if (data instanceof Uint8Array) {
    encodeBytes(data, output);
    return;
  }
  if (Array.isArray(data)) {
    encodeArray(data, output);
    return;
  }
  if (data instanceof Map) {
    encodeMap(data, output);
    return;
  }
  if (data instanceof CBORTag) {
    encodeTag(data, output);
    return;
  }
  throw new Error("Not implemented");
}
function decodePartialCBOR(data, index) {
  if (data.byteLength === 0 || data.byteLength <= index || index < 0) {
    throw new Error("No data");
  }
  if (data instanceof Uint8Array) {
    return decodeNext(new DataView(data.buffer), index);
  } else if (data instanceof ArrayBuffer) {
    return decodeNext(new DataView(data), index);
  }
  return decodeNext(data, index);
}
function encodeCBOR(data) {
  const results = [];
  encodePartialCBOR(data, results);
  let length = 0;
  for (const result of results) {
    if (typeof result == "number") {
      length += 1;
    } else {
      length += result.length;
    }
  }
  const output = new Uint8Array(length);
  let index = 0;
  for (const result of results) {
    if (typeof result == "number") {
      output[index] = result;
      index += 1;
    } else {
      output.set(result, index);
      index += result.length;
    }
  }
  return output;
}
// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCBOR.js
function decodeFirst(input) {
  const _input = new Uint8Array(input);
  const decoded = decodePartialCBOR(_input, 0);
  const [first] = decoded;
  return first;
}
function encode(input) {
  return encodeCBOR(input);
}
// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js
var exports_isoCrypto = {};
__export(exports_isoCrypto, {
  verify: () => verify,
  getRandomValues: () => getRandomValues,
  digest: () => digest
});

// node_modules/@simplewebauthn/server/esm/helpers/cose.js
function isCOSEPublicKeyOKP(cosePublicKey) {
  const kty = cosePublicKey.get(COSEKEYS.kty);
  return isCOSEKty(kty) && kty === COSEKTY.OKP;
}
function isCOSEPublicKeyEC2(cosePublicKey) {
  const kty = cosePublicKey.get(COSEKEYS.kty);
  return isCOSEKty(kty) && kty === COSEKTY.EC2;
}
function isCOSEPublicKeyRSA(cosePublicKey) {
  const kty = cosePublicKey.get(COSEKEYS.kty);
  return isCOSEKty(kty) && kty === COSEKTY.RSA;
}
var COSEKEYS;
(function(COSEKEYS2) {
  COSEKEYS2[COSEKEYS2["kty"] = 1] = "kty";
  COSEKEYS2[COSEKEYS2["alg"] = 3] = "alg";
  COSEKEYS2[COSEKEYS2["crv"] = -1] = "crv";
  COSEKEYS2[COSEKEYS2["x"] = -2] = "x";
  COSEKEYS2[COSEKEYS2["y"] = -3] = "y";
  COSEKEYS2[COSEKEYS2["n"] = -1] = "n";
  COSEKEYS2[COSEKEYS2["e"] = -2] = "e";
})(COSEKEYS || (COSEKEYS = {}));
var COSEKTY;
(function(COSEKTY2) {
  COSEKTY2[COSEKTY2["OKP"] = 1] = "OKP";
  COSEKTY2[COSEKTY2["EC2"] = 2] = "EC2";
  COSEKTY2[COSEKTY2["RSA"] = 3] = "RSA";
})(COSEKTY || (COSEKTY = {}));
function isCOSEKty(kty) {
  return Object.values(COSEKTY).indexOf(kty) >= 0;
}
var COSECRV;
(function(COSECRV2) {
  COSECRV2[COSECRV2["P256"] = 1] = "P256";
  COSECRV2[COSECRV2["P384"] = 2] = "P384";
  COSECRV2[COSECRV2["P521"] = 3] = "P521";
  COSECRV2[COSECRV2["ED25519"] = 6] = "ED25519";
  COSECRV2[COSECRV2["SECP256K1"] = 8] = "SECP256K1";
})(COSECRV || (COSECRV = {}));
function isCOSECrv(crv) {
  return Object.values(COSECRV).indexOf(crv) >= 0;
}
var COSEALG;
(function(COSEALG2) {
  COSEALG2[COSEALG2["ES256"] = -7] = "ES256";
  COSEALG2[COSEALG2["EdDSA"] = -8] = "EdDSA";
  COSEALG2[COSEALG2["ES384"] = -35] = "ES384";
  COSEALG2[COSEALG2["ES512"] = -36] = "ES512";
  COSEALG2[COSEALG2["PS256"] = -37] = "PS256";
  COSEALG2[COSEALG2["PS384"] = -38] = "PS384";
  COSEALG2[COSEALG2["PS512"] = -39] = "PS512";
  COSEALG2[COSEALG2["ES256K"] = -47] = "ES256K";
  COSEALG2[COSEALG2["RS256"] = -257] = "RS256";
  COSEALG2[COSEALG2["RS384"] = -258] = "RS384";
  COSEALG2[COSEALG2["RS512"] = -259] = "RS512";
  COSEALG2[COSEALG2["RS1"] = -65535] = "RS1";
})(COSEALG || (COSEALG = {}));
function isCOSEAlg(alg) {
  return Object.values(COSEALG).indexOf(alg) >= 0;
}

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/mapCoseAlgToWebCryptoAlg.js
function mapCoseAlgToWebCryptoAlg(alg) {
  if ([COSEALG.RS1].indexOf(alg) >= 0) {
    return "SHA-1";
  } else if ([COSEALG.ES256, COSEALG.PS256, COSEALG.RS256].indexOf(alg) >= 0) {
    return "SHA-256";
  } else if ([COSEALG.ES384, COSEALG.PS384, COSEALG.RS384].indexOf(alg) >= 0) {
    return "SHA-384";
  } else if ([COSEALG.ES512, COSEALG.PS512, COSEALG.RS512, COSEALG.EdDSA].indexOf(alg) >= 0) {
    return "SHA-512";
  }
  throw new Error(`Could not map COSE alg value of ${alg} to a WebCrypto alg`);
}

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/getWebCrypto.js
var webCrypto = undefined;
function getWebCrypto() {
  const toResolve = new Promise((resolve2, reject) => {
    if (webCrypto) {
      return resolve2(webCrypto);
    }
    const _globalThisCrypto = _getWebCryptoInternals.stubThisGlobalThisCrypto();
    if (_globalThisCrypto) {
      webCrypto = _globalThisCrypto;
      return resolve2(webCrypto);
    }
    return reject(new MissingWebCrypto);
  });
  return toResolve;
}

class MissingWebCrypto extends Error {
  constructor() {
    const message = "An instance of the Crypto API could not be located";
    super(message);
    this.name = "MissingWebCrypto";
  }
}
var _getWebCryptoInternals = {
  stubThisGlobalThisCrypto: () => globalThis.crypto,
  setCachedCrypto: (newCrypto) => {
    webCrypto = newCrypto;
  }
};

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/digest.js
async function digest(data, algorithm) {
  const WebCrypto = await getWebCrypto();
  const subtleAlgorithm = mapCoseAlgToWebCryptoAlg(algorithm);
  const hashed = await WebCrypto.subtle.digest(subtleAlgorithm, data);
  return new Uint8Array(hashed);
}
// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/getRandomValues.js
async function getRandomValues(array) {
  const WebCrypto = await getWebCrypto();
  WebCrypto.getRandomValues(array);
  return array;
}
// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/importKey.js
async function importKey(opts) {
  const WebCrypto = await getWebCrypto();
  const { keyData, algorithm } = opts;
  return WebCrypto.subtle.importKey("jwk", keyData, algorithm, false, [
    "verify"
  ]);
}

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verifyEC2.js
async function verifyEC2(opts) {
  const { cosePublicKey, signature, data, shaHashOverride } = opts;
  const WebCrypto = await getWebCrypto();
  const alg = cosePublicKey.get(COSEKEYS.alg);
  const crv = cosePublicKey.get(COSEKEYS.crv);
  const x = cosePublicKey.get(COSEKEYS.x);
  const y = cosePublicKey.get(COSEKEYS.y);
  if (!alg) {
    throw new Error("Public key was missing alg (EC2)");
  }
  if (!crv) {
    throw new Error("Public key was missing crv (EC2)");
  }
  if (!x) {
    throw new Error("Public key was missing x (EC2)");
  }
  if (!y) {
    throw new Error("Public key was missing y (EC2)");
  }
  let _crv;
  if (crv === COSECRV.P256) {
    _crv = "P-256";
  } else if (crv === COSECRV.P384) {
    _crv = "P-384";
  } else if (crv === COSECRV.P521) {
    _crv = "P-521";
  } else {
    throw new Error(`Unexpected COSE crv value of ${crv} (EC2)`);
  }
  const keyData = {
    kty: "EC",
    crv: _crv,
    x: exports_isoBase64URL.fromBuffer(x),
    y: exports_isoBase64URL.fromBuffer(y),
    ext: false
  };
  const keyAlgorithm = {
    name: "ECDSA",
    namedCurve: _crv
  };
  const key = await importKey({
    keyData,
    algorithm: keyAlgorithm
  });
  let subtleAlg = mapCoseAlgToWebCryptoAlg(alg);
  if (shaHashOverride) {
    subtleAlg = mapCoseAlgToWebCryptoAlg(shaHashOverride);
  }
  const verifyAlgorithm = {
    name: "ECDSA",
    hash: { name: subtleAlg }
  };
  return WebCrypto.subtle.verify(verifyAlgorithm, key, signature, data);
}

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/mapCoseAlgToWebCryptoKeyAlgName.js
function mapCoseAlgToWebCryptoKeyAlgName(alg) {
  if ([COSEALG.EdDSA].indexOf(alg) >= 0) {
    return "Ed25519";
  } else if ([COSEALG.ES256, COSEALG.ES384, COSEALG.ES512, COSEALG.ES256K].indexOf(alg) >= 0) {
    return "ECDSA";
  } else if ([COSEALG.RS256, COSEALG.RS384, COSEALG.RS512, COSEALG.RS1].indexOf(alg) >= 0) {
    return "RSASSA-PKCS1-v1_5";
  } else if ([COSEALG.PS256, COSEALG.PS384, COSEALG.PS512].indexOf(alg) >= 0) {
    return "RSA-PSS";
  }
  throw new Error(`Could not map COSE alg value of ${alg} to a WebCrypto key alg name`);
}

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verifyRSA.js
async function verifyRSA(opts) {
  const { cosePublicKey, signature, data, shaHashOverride } = opts;
  const WebCrypto = await getWebCrypto();
  const alg = cosePublicKey.get(COSEKEYS.alg);
  const n = cosePublicKey.get(COSEKEYS.n);
  const e = cosePublicKey.get(COSEKEYS.e);
  if (!alg) {
    throw new Error("Public key was missing alg (RSA)");
  }
  if (!isCOSEAlg(alg)) {
    throw new Error(`Public key had invalid alg ${alg} (RSA)`);
  }
  if (!n) {
    throw new Error("Public key was missing n (RSA)");
  }
  if (!e) {
    throw new Error("Public key was missing e (RSA)");
  }
  const keyData = {
    kty: "RSA",
    alg: "",
    n: exports_isoBase64URL.fromBuffer(n),
    e: exports_isoBase64URL.fromBuffer(e),
    ext: false
  };
  const keyAlgorithm = {
    name: mapCoseAlgToWebCryptoKeyAlgName(alg),
    hash: { name: mapCoseAlgToWebCryptoAlg(alg) }
  };
  const verifyAlgorithm = {
    name: mapCoseAlgToWebCryptoKeyAlgName(alg)
  };
  if (shaHashOverride) {
    keyAlgorithm.hash.name = mapCoseAlgToWebCryptoAlg(shaHashOverride);
  }
  if (keyAlgorithm.name === "RSASSA-PKCS1-v1_5") {
    if (keyAlgorithm.hash.name === "SHA-256") {
      keyData.alg = "RS256";
    } else if (keyAlgorithm.hash.name === "SHA-384") {
      keyData.alg = "RS384";
    } else if (keyAlgorithm.hash.name === "SHA-512") {
      keyData.alg = "RS512";
    } else if (keyAlgorithm.hash.name === "SHA-1") {
      keyData.alg = "RS1";
    }
  } else if (keyAlgorithm.name === "RSA-PSS") {
    let saltLength = 0;
    if (keyAlgorithm.hash.name === "SHA-256") {
      keyData.alg = "PS256";
      saltLength = 32;
    } else if (keyAlgorithm.hash.name === "SHA-384") {
      keyData.alg = "PS384";
      saltLength = 48;
    } else if (keyAlgorithm.hash.name === "SHA-512") {
      keyData.alg = "PS512";
      saltLength = 64;
    }
    verifyAlgorithm.saltLength = saltLength;
  } else {
    throw new Error(`Unexpected RSA key algorithm ${alg} (${keyAlgorithm.name})`);
  }
  const key = await importKey({
    keyData,
    algorithm: keyAlgorithm
  });
  return WebCrypto.subtle.verify(verifyAlgorithm, key, signature, data);
}

// node_modules/@simplewebauthn/server/esm/helpers/convertAAGUIDToString.js
function convertAAGUIDToString(aaguid) {
  const hex = exports_isoUint8Array.toHex(aaguid);
  const segments = [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20, 32)
  ];
  return segments.join("-");
}
// node_modules/@simplewebauthn/server/esm/helpers/convertCertBufferToPEM.js
function convertCertBufferToPEM(certBuffer) {
  let b64cert;
  if (typeof certBuffer === "string") {
    if (exports_isoBase64URL.isBase64URL(certBuffer)) {
      b64cert = exports_isoBase64URL.toBase64(certBuffer);
    } else if (exports_isoBase64URL.isBase64(certBuffer)) {
      b64cert = certBuffer;
    } else {
      throw new Error("Certificate is not a valid base64 or base64url string");
    }
  } else {
    b64cert = exports_isoBase64URL.fromBuffer(certBuffer, "base64");
  }
  let PEMKey = "";
  for (let i = 0;i < Math.ceil(b64cert.length / 64); i += 1) {
    const start = 64 * i;
    PEMKey += `${b64cert.substr(start, 64)}
`;
  }
  PEMKey = `-----BEGIN CERTIFICATE-----
${PEMKey}-----END CERTIFICATE-----
`;
  return PEMKey;
}
// node_modules/@simplewebauthn/server/esm/helpers/convertCOSEtoPKCS.js
function convertCOSEtoPKCS(cosePublicKey) {
  const struct = exports_isoCBOR.decodeFirst(cosePublicKey);
  const tag = Uint8Array.from([4]);
  const x = struct.get(COSEKEYS.x);
  const y = struct.get(COSEKEYS.y);
  if (!x) {
    throw new Error("COSE public key was missing x");
  }
  if (y) {
    return exports_isoUint8Array.concat([tag, x, y]);
  }
  return exports_isoUint8Array.concat([tag, x]);
}
// node_modules/@simplewebauthn/server/esm/helpers/decodeAttestationObject.js
function decodeAttestationObject(attestationObject) {
  return _decodeAttestationObjectInternals.stubThis(exports_isoCBOR.decodeFirst(attestationObject));
}
var _decodeAttestationObjectInternals = {
  stubThis: (value) => value
};
// node_modules/@simplewebauthn/server/esm/helpers/decodeClientDataJSON.js
function decodeClientDataJSON(data) {
  const toString = exports_isoBase64URL.toUTF8String(data);
  const clientData = JSON.parse(toString);
  return _decodeClientDataJSONInternals.stubThis(clientData);
}
var _decodeClientDataJSONInternals = {
  stubThis: (value) => value
};
// node_modules/@simplewebauthn/server/esm/helpers/decodeCredentialPublicKey.js
function decodeCredentialPublicKey(publicKey) {
  return _decodeCredentialPublicKeyInternals.stubThis(exports_isoCBOR.decodeFirst(publicKey));
}
var _decodeCredentialPublicKeyInternals = {
  stubThis: (value) => value
};
// node_modules/@simplewebauthn/server/esm/helpers/generateUserID.js
async function generateUserID() {
  const newUserID = new Uint8Array(32);
  await exports_isoCrypto.getRandomValues(newUserID);
  return _generateUserIDInternals.stubThis(newUserID);
}
var _generateUserIDInternals = {
  stubThis: (value) => value
};
// node_modules/asn1js/build/index.es.js
var exports_index_es = {};
__export(exports_index_es, {
  verifySchema: () => verifySchema,
  fromBER: () => fromBER,
  compareSchema: () => compareSchema,
  VisibleString: () => VisibleString,
  ViewWriter: () => ViewWriter,
  VideotexString: () => VideotexString,
  ValueBlock: () => ValueBlock,
  Utf8String: () => Utf8String,
  UniversalString: () => UniversalString,
  UTCTime: () => UTCTime,
  TimeOfDay: () => TimeOfDay,
  TeletexString: () => TeletexString,
  TIME: () => TIME,
  Set: () => Set2,
  Sequence: () => Sequence,
  Repeated: () => Repeated,
  RelativeObjectIdentifier: () => RelativeObjectIdentifier,
  RawData: () => RawData,
  PrintableString: () => PrintableString,
  Primitive: () => Primitive,
  OctetString: () => OctetString,
  ObjectIdentifier: () => ObjectIdentifier,
  NumericString: () => NumericString,
  Null: () => Null,
  Integer: () => Integer,
  IA5String: () => IA5String,
  HexBlock: () => HexBlock,
  GraphicString: () => GraphicString,
  GeneralizedTime: () => GeneralizedTime,
  GeneralString: () => GeneralString,
  Enumerated: () => Enumerated,
  EndOfContent: () => EndOfContent,
  Duration: () => Duration,
  DateTime: () => DateTime,
  DEFAULT_MAX_NODES: () => DEFAULT_MAX_NODES,
  DEFAULT_MAX_DEPTH: () => DEFAULT_MAX_DEPTH,
  DEFAULT_MAX_CONTENT_LENGTH: () => DEFAULT_MAX_CONTENT_LENGTH,
  DATE: () => DATE,
  Constructed: () => Constructed,
  Choice: () => Choice,
  CharacterString: () => CharacterString,
  Boolean: () => Boolean2,
  BmpString: () => BmpString,
  BitString: () => BitString,
  BaseStringBlock: () => BaseStringBlock,
  BaseBlock: () => BaseBlock,
  Any: () => Any
});

// node_modules/pvtsutils/build/index.es.js
/*!
 * MIT License
 * 
 * Copyright (c) 2017-2024 Peculiar Ventures, LLC
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
var ARRAY_BUFFER_NAME = "[object ArrayBuffer]";

class BufferSourceConverter {
  static isArrayBuffer(data) {
    return Object.prototype.toString.call(data) === ARRAY_BUFFER_NAME;
  }
  static toArrayBuffer(data) {
    if (this.isArrayBuffer(data)) {
      return data;
    }
    if (data.byteLength === data.buffer.byteLength) {
      return data.buffer;
    }
    if (data.byteOffset === 0 && data.byteLength === data.buffer.byteLength) {
      return data.buffer;
    }
    return this.toUint8Array(data.buffer).slice(data.byteOffset, data.byteOffset + data.byteLength).buffer;
  }
  static toUint8Array(data) {
    return this.toView(data, Uint8Array);
  }
  static toView(data, type) {
    if (data.constructor === type) {
      return data;
    }
    if (this.isArrayBuffer(data)) {
      return new type(data);
    }
    if (this.isArrayBufferView(data)) {
      return new type(data.buffer, data.byteOffset, data.byteLength);
    }
    throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
  }
  static isBufferSource(data) {
    return this.isArrayBufferView(data) || this.isArrayBuffer(data);
  }
  static isArrayBufferView(data) {
    return ArrayBuffer.isView(data) || data && this.isArrayBuffer(data.buffer);
  }
  static isEqual(a, b) {
    const aView = BufferSourceConverter.toUint8Array(a);
    const bView = BufferSourceConverter.toUint8Array(b);
    if (aView.length !== bView.byteLength) {
      return false;
    }
    for (let i = 0;i < aView.length; i++) {
      if (aView[i] !== bView[i]) {
        return false;
      }
    }
    return true;
  }
  static concat(...args) {
    let buffers;
    if (Array.isArray(args[0]) && !(args[1] instanceof Function)) {
      buffers = args[0];
    } else if (Array.isArray(args[0]) && args[1] instanceof Function) {
      buffers = args[0];
    } else {
      if (args[args.length - 1] instanceof Function) {
        buffers = args.slice(0, args.length - 1);
      } else {
        buffers = args;
      }
    }
    let size = 0;
    for (const buffer of buffers) {
      size += buffer.byteLength;
    }
    const res = new Uint8Array(size);
    let offset = 0;
    for (const buffer of buffers) {
      const view = this.toUint8Array(buffer);
      res.set(view, offset);
      offset += view.length;
    }
    if (args[args.length - 1] instanceof Function) {
      return this.toView(res, args[args.length - 1]);
    }
    return res.buffer;
  }
}
var STRING_TYPE = "string";
var HEX_REGEX = /^[0-9a-f\s]+$/i;
var BASE64_REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
var BASE64URL_REGEX = /^[a-zA-Z0-9-_]+$/;

class Utf8Converter {
  static fromString(text) {
    const s = unescape(encodeURIComponent(text));
    const uintArray = new Uint8Array(s.length);
    for (let i = 0;i < s.length; i++) {
      uintArray[i] = s.charCodeAt(i);
    }
    return uintArray.buffer;
  }
  static toString(buffer) {
    const buf = BufferSourceConverter.toUint8Array(buffer);
    let encodedString = "";
    for (let i = 0;i < buf.length; i++) {
      encodedString += String.fromCharCode(buf[i]);
    }
    const decodedString = decodeURIComponent(escape(encodedString));
    return decodedString;
  }
}

class Utf16Converter {
  static toString(buffer, littleEndian = false) {
    const arrayBuffer = BufferSourceConverter.toArrayBuffer(buffer);
    const dataView = new DataView(arrayBuffer);
    let res = "";
    for (let i = 0;i < arrayBuffer.byteLength; i += 2) {
      const code = dataView.getUint16(i, littleEndian);
      res += String.fromCharCode(code);
    }
    return res;
  }
  static fromString(text, littleEndian = false) {
    const res = new ArrayBuffer(text.length * 2);
    const dataView = new DataView(res);
    for (let i = 0;i < text.length; i++) {
      dataView.setUint16(i * 2, text.charCodeAt(i), littleEndian);
    }
    return res;
  }
}

class Convert {
  static isHex(data) {
    return typeof data === STRING_TYPE && HEX_REGEX.test(data);
  }
  static isBase64(data) {
    return typeof data === STRING_TYPE && BASE64_REGEX.test(data);
  }
  static isBase64Url(data) {
    return typeof data === STRING_TYPE && BASE64URL_REGEX.test(data);
  }
  static ToString(buffer, enc = "utf8") {
    const buf = BufferSourceConverter.toUint8Array(buffer);
    switch (enc.toLowerCase()) {
      case "utf8":
        return this.ToUtf8String(buf);
      case "binary":
        return this.ToBinary(buf);
      case "hex":
        return this.ToHex(buf);
      case "base64":
        return this.ToBase64(buf);
      case "base64url":
        return this.ToBase64Url(buf);
      case "utf16le":
        return Utf16Converter.toString(buf, true);
      case "utf16":
      case "utf16be":
        return Utf16Converter.toString(buf);
      default:
        throw new Error(`Unknown type of encoding '${enc}'`);
    }
  }
  static FromString(str, enc = "utf8") {
    if (!str) {
      return new ArrayBuffer(0);
    }
    switch (enc.toLowerCase()) {
      case "utf8":
        return this.FromUtf8String(str);
      case "binary":
        return this.FromBinary(str);
      case "hex":
        return this.FromHex(str);
      case "base64":
        return this.FromBase64(str);
      case "base64url":
        return this.FromBase64Url(str);
      case "utf16le":
        return Utf16Converter.fromString(str, true);
      case "utf16":
      case "utf16be":
        return Utf16Converter.fromString(str);
      default:
        throw new Error(`Unknown type of encoding '${enc}'`);
    }
  }
  static ToBase64(buffer) {
    const buf = BufferSourceConverter.toUint8Array(buffer);
    if (typeof btoa !== "undefined") {
      const binary = this.ToString(buf, "binary");
      return btoa(binary);
    } else {
      return Buffer.from(buf).toString("base64");
    }
  }
  static FromBase64(base642) {
    const formatted = this.formatString(base642);
    if (!formatted) {
      return new ArrayBuffer(0);
    }
    if (!Convert.isBase64(formatted)) {
      throw new TypeError("Argument 'base64Text' is not Base64 encoded");
    }
    if (typeof atob !== "undefined") {
      return this.FromBinary(atob(formatted));
    } else {
      return new Uint8Array(Buffer.from(formatted, "base64")).buffer;
    }
  }
  static FromBase64Url(base64url) {
    const formatted = this.formatString(base64url);
    if (!formatted) {
      return new ArrayBuffer(0);
    }
    if (!Convert.isBase64Url(formatted)) {
      throw new TypeError("Argument 'base64url' is not Base64Url encoded");
    }
    return this.FromBase64(this.Base64Padding(formatted.replace(/\-/g, "+").replace(/\_/g, "/")));
  }
  static ToBase64Url(data) {
    return this.ToBase64(data).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
  }
  static FromUtf8String(text, encoding = Convert.DEFAULT_UTF8_ENCODING) {
    switch (encoding) {
      case "ascii":
        return this.FromBinary(text);
      case "utf8":
        return Utf8Converter.fromString(text);
      case "utf16":
      case "utf16be":
        return Utf16Converter.fromString(text);
      case "utf16le":
      case "usc2":
        return Utf16Converter.fromString(text, true);
      default:
        throw new Error(`Unknown type of encoding '${encoding}'`);
    }
  }
  static ToUtf8String(buffer, encoding = Convert.DEFAULT_UTF8_ENCODING) {
    switch (encoding) {
      case "ascii":
        return this.ToBinary(buffer);
      case "utf8":
        return Utf8Converter.toString(buffer);
      case "utf16":
      case "utf16be":
        return Utf16Converter.toString(buffer);
      case "utf16le":
      case "usc2":
        return Utf16Converter.toString(buffer, true);
      default:
        throw new Error(`Unknown type of encoding '${encoding}'`);
    }
  }
  static FromBinary(text) {
    const stringLength = text.length;
    const resultView = new Uint8Array(stringLength);
    for (let i = 0;i < stringLength; i++) {
      resultView[i] = text.charCodeAt(i);
    }
    return resultView.buffer;
  }
  static ToBinary(buffer) {
    const buf = BufferSourceConverter.toUint8Array(buffer);
    let res = "";
    for (let i = 0;i < buf.length; i++) {
      res += String.fromCharCode(buf[i]);
    }
    return res;
  }
  static ToHex(buffer) {
    const buf = BufferSourceConverter.toUint8Array(buffer);
    let result = "";
    const len = buf.length;
    for (let i = 0;i < len; i++) {
      const byte = buf[i];
      if (byte < 16) {
        result += "0";
      }
      result += byte.toString(16);
    }
    return result;
  }
  static FromHex(hexString) {
    let formatted = this.formatString(hexString);
    if (!formatted) {
      return new ArrayBuffer(0);
    }
    if (!Convert.isHex(formatted)) {
      throw new TypeError("Argument 'hexString' is not HEX encoded");
    }
    if (formatted.length % 2) {
      formatted = `0${formatted}`;
    }
    const res = new Uint8Array(formatted.length / 2);
    for (let i = 0;i < formatted.length; i = i + 2) {
      const c = formatted.slice(i, i + 2);
      res[i / 2] = parseInt(c, 16);
    }
    return res.buffer;
  }
  static ToUtf16String(buffer, littleEndian = false) {
    return Utf16Converter.toString(buffer, littleEndian);
  }
  static FromUtf16String(text, littleEndian = false) {
    return Utf16Converter.fromString(text, littleEndian);
  }
  static Base64Padding(base642) {
    const padCount = 4 - base642.length % 4;
    if (padCount < 4) {
      for (let i = 0;i < padCount; i++) {
        base642 += "=";
      }
    }
    return base642;
  }
  static formatString(data) {
    return (data === null || data === undefined ? undefined : data.replace(/[\n\r\t ]/g, "")) || "";
  }
}
Convert.DEFAULT_UTF8_ENCODING = "utf8";
function combine(...buf) {
  const totalByteLength = buf.map((item) => item.byteLength).reduce((prev, cur) => prev + cur);
  const res = new Uint8Array(totalByteLength);
  let currentPos = 0;
  buf.map((item) => new Uint8Array(item)).forEach((arr) => {
    for (const item2 of arr) {
      res[currentPos++] = item2;
    }
  });
  return res.buffer;
}
function isEqual(bytes1, bytes2) {
  if (!(bytes1 && bytes2)) {
    return false;
  }
  if (bytes1.byteLength !== bytes2.byteLength) {
    return false;
  }
  const b1 = new Uint8Array(bytes1);
  const b2 = new Uint8Array(bytes2);
  for (let i = 0;i < bytes1.byteLength; i++) {
    if (b1[i] !== b2[i]) {
      return false;
    }
  }
  return true;
}

// node_modules/pvutils/build/utils.es.js
/*!
 Copyright (c) Peculiar Ventures, LLC
*/
function utilFromBase(inputBuffer, inputBase) {
  let result = 0;
  if (inputBuffer.length === 1) {
    return inputBuffer[0];
  }
  for (let i = inputBuffer.length - 1;i >= 0; i--) {
    result += inputBuffer[inputBuffer.length - 1 - i] * Math.pow(2, inputBase * i);
  }
  return result;
}
function utilToBase(value, base, reserved = -1) {
  const internalReserved = reserved;
  let internalValue = value;
  let result = 0;
  let biggest = Math.pow(2, base);
  for (let i = 1;i < 8; i++) {
    if (value < biggest) {
      let retBuf;
      if (internalReserved < 0) {
        retBuf = new ArrayBuffer(i);
        result = i;
      } else {
        if (internalReserved < i) {
          return new ArrayBuffer(0);
        }
        retBuf = new ArrayBuffer(internalReserved);
        result = internalReserved;
      }
      const retView = new Uint8Array(retBuf);
      for (let j = i - 1;j >= 0; j--) {
        const basis = Math.pow(2, j * base);
        retView[result - j - 1] = Math.floor(internalValue / basis);
        internalValue -= retView[result - j - 1] * basis;
      }
      return retBuf;
    }
    biggest *= Math.pow(2, base);
  }
  return new ArrayBuffer(0);
}
function utilConcatView(...views) {
  let outputLength = 0;
  let prevLength = 0;
  for (const view of views) {
    outputLength += view.length;
  }
  const retBuf = new ArrayBuffer(outputLength);
  const retView = new Uint8Array(retBuf);
  for (const view of views) {
    retView.set(view, prevLength);
    prevLength += view.length;
  }
  return retView;
}
function utilDecodeTC() {
  const buf = new Uint8Array(this.valueHex);
  if (this.valueHex.byteLength >= 2) {
    const condition1 = buf[0] === 255 && buf[1] & 128;
    const condition2 = buf[0] === 0 && (buf[1] & 128) === 0;
    if (condition1 || condition2) {
      this.warnings.push("Needlessly long format");
    }
  }
  const bigIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
  const bigIntView = new Uint8Array(bigIntBuffer);
  for (let i = 0;i < this.valueHex.byteLength; i++) {
    bigIntView[i] = 0;
  }
  bigIntView[0] = buf[0] & 128;
  const bigInt = utilFromBase(bigIntView, 8);
  const smallIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
  const smallIntView = new Uint8Array(smallIntBuffer);
  for (let j = 0;j < this.valueHex.byteLength; j++) {
    smallIntView[j] = buf[j];
  }
  smallIntView[0] &= 127;
  const smallInt = utilFromBase(smallIntView, 8);
  return smallInt - bigInt;
}
function utilEncodeTC(value) {
  const modValue = value < 0 ? value * -1 : value;
  let bigInt = 128;
  for (let i = 1;i < 8; i++) {
    if (modValue <= bigInt) {
      if (value < 0) {
        const smallInt = bigInt - modValue;
        const retBuf2 = utilToBase(smallInt, 8, i);
        const retView2 = new Uint8Array(retBuf2);
        retView2[0] |= 128;
        return retBuf2;
      }
      let retBuf = utilToBase(modValue, 8, i);
      let retView = new Uint8Array(retBuf);
      if (retView[0] & 128) {
        const tempBuf = retBuf.slice(0);
        const tempView = new Uint8Array(tempBuf);
        retBuf = new ArrayBuffer(retBuf.byteLength + 1);
        retView = new Uint8Array(retBuf);
        for (let k = 0;k < tempBuf.byteLength; k++) {
          retView[k + 1] = tempView[k];
        }
        retView[0] = 0;
      }
      return retBuf;
    }
    bigInt *= Math.pow(2, 8);
  }
  return new ArrayBuffer(0);
}
function isEqualBuffer(inputBuffer1, inputBuffer2) {
  if (inputBuffer1.byteLength !== inputBuffer2.byteLength) {
    return false;
  }
  const view1 = new Uint8Array(inputBuffer1);
  const view2 = new Uint8Array(inputBuffer2);
  for (let i = 0;i < view1.length; i++) {
    if (view1[i] !== view2[i]) {
      return false;
    }
  }
  return true;
}
function padNumber(inputNumber, fullLength) {
  const str = inputNumber.toString(10);
  if (fullLength < str.length) {
    return "";
  }
  const dif = fullLength - str.length;
  const padding = new Array(dif);
  for (let i = 0;i < dif; i++) {
    padding[i] = "0";
  }
  const paddingString = padding.join("");
  return paddingString.concat(str);
}
var log2 = Math.log(2);

// node_modules/asn1js/build/index.es.js
/*!
 * Copyright (c) 2014, GMO GlobalSign
 * Copyright (c) 2015-2022, Peculiar Ventures
 * All rights reserved.
 * 
 * Author 2014-2019, Yury Strozhevsky
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * 
 * * Redistributions in binary form must reproduce the above copyright notice, this
 *   list of conditions and the following disclaimer in the documentation and/or
 *   other materials provided with the distribution.
 * 
 * * Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 */
function assertBigInt() {
  if (typeof BigInt === "undefined") {
    throw new Error("BigInt is not defined. Your environment doesn't implement BigInt.");
  }
}
function concat(buffers) {
  let outputLength = 0;
  let prevLength = 0;
  for (let i = 0;i < buffers.length; i++) {
    const buffer = buffers[i];
    outputLength += buffer.byteLength;
  }
  const retView = new Uint8Array(outputLength);
  for (let i = 0;i < buffers.length; i++) {
    const buffer = buffers[i];
    retView.set(new Uint8Array(buffer), prevLength);
    prevLength += buffer.byteLength;
  }
  return retView.buffer;
}
function checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength) {
  if (!(inputBuffer instanceof Uint8Array)) {
    baseBlock.error = "Wrong parameter: inputBuffer must be 'Uint8Array'";
    return false;
  }
  if (!inputBuffer.byteLength) {
    baseBlock.error = "Wrong parameter: inputBuffer has zero length";
    return false;
  }
  if (inputOffset < 0) {
    baseBlock.error = "Wrong parameter: inputOffset less than zero";
    return false;
  }
  if (inputLength < 0) {
    baseBlock.error = "Wrong parameter: inputLength less than zero";
    return false;
  }
  if (inputBuffer.byteLength - inputOffset - inputLength < 0) {
    baseBlock.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
    return false;
  }
  return true;
}

class ViewWriter {
  constructor() {
    this.items = [];
  }
  write(buf) {
    this.items.push(buf);
  }
  final() {
    return concat(this.items);
  }
}
var powers2 = [new Uint8Array([1])];
var digitsString = "0123456789";
var NAME = "name";
var VALUE_HEX_VIEW = "valueHexView";
var IS_HEX_ONLY = "isHexOnly";
var ID_BLOCK = "idBlock";
var TAG_CLASS = "tagClass";
var TAG_NUMBER = "tagNumber";
var IS_CONSTRUCTED = "isConstructed";
var FROM_BER = "fromBER";
var TO_BER = "toBER";
var LOCAL = "local";
var EMPTY_STRING = "";
var EMPTY_BUFFER = new ArrayBuffer(0);
var EMPTY_VIEW = new Uint8Array(0);
var END_OF_CONTENT_NAME = "EndOfContent";
var OCTET_STRING_NAME = "OCTET STRING";
var BIT_STRING_NAME = "BIT STRING";
function HexBlock(BaseClass) {
  var _a;
  return _a = class Some extends BaseClass {
    get valueHex() {
      return this.valueHexView.slice().buffer;
    }
    set valueHex(value) {
      this.valueHexView = new Uint8Array(value);
    }
    constructor(...args) {
      var _b;
      super(...args);
      const params = args[0] || {};
      this.isHexOnly = (_b = params.isHexOnly) !== null && _b !== undefined ? _b : false;
      this.valueHexView = params.valueHex ? BufferSourceConverter.toUint8Array(params.valueHex) : EMPTY_VIEW;
    }
    fromBER(inputBuffer, inputOffset, inputLength, _context) {
      const view = inputBuffer instanceof ArrayBuffer ? new Uint8Array(inputBuffer) : inputBuffer;
      if (!checkBufferParams(this, view, inputOffset, inputLength)) {
        return -1;
      }
      const endLength = inputOffset + inputLength;
      this.valueHexView = view.subarray(inputOffset, endLength);
      if (!this.valueHexView.length) {
        this.warnings.push("Zero buffer length");
        return inputOffset;
      }
      this.blockLength = inputLength;
      return endLength;
    }
    toBER(sizeOnly = false) {
      if (!this.isHexOnly) {
        this.error = "Flag 'isHexOnly' is not set, abort";
        return EMPTY_BUFFER;
      }
      if (sizeOnly) {
        return new ArrayBuffer(this.valueHexView.byteLength);
      }
      return this.valueHexView.byteLength === this.valueHexView.buffer.byteLength ? this.valueHexView.buffer : this.valueHexView.slice().buffer;
    }
    toJSON() {
      return {
        ...super.toJSON(),
        isHexOnly: this.isHexOnly,
        valueHex: Convert.ToHex(this.valueHexView)
      };
    }
  }, _a.NAME = "hexBlock", _a;
}

class LocalBaseBlock {
  static blockName() {
    return this.NAME;
  }
  get valueBeforeDecode() {
    return this.valueBeforeDecodeView.slice().buffer;
  }
  set valueBeforeDecode(value) {
    this.valueBeforeDecodeView = new Uint8Array(value);
  }
  constructor({ blockLength = 0, error = EMPTY_STRING, warnings = [], valueBeforeDecode = EMPTY_VIEW } = {}) {
    this.blockLength = blockLength;
    this.error = error;
    this.warnings = warnings;
    this.valueBeforeDecodeView = BufferSourceConverter.toUint8Array(valueBeforeDecode);
  }
  toJSON() {
    return {
      blockName: this.constructor.NAME,
      blockLength: this.blockLength,
      error: this.error,
      warnings: this.warnings,
      valueBeforeDecode: Convert.ToHex(this.valueBeforeDecodeView)
    };
  }
}
LocalBaseBlock.NAME = "baseBlock";

class ValueBlock extends LocalBaseBlock {
  fromBER(_inputBuffer, _inputOffset, _inputLength, _context) {
    throw TypeError("User need to make a specific function in a class which extends 'ValueBlock'");
  }
  toBER(_sizeOnly, _writer) {
    throw TypeError("User need to make a specific function in a class which extends 'ValueBlock'");
  }
}
ValueBlock.NAME = "valueBlock";

class LocalIdentificationBlock extends HexBlock(LocalBaseBlock) {
  constructor({ idBlock = {} } = {}) {
    var _a, _b, _c, _d;
    super();
    if (idBlock) {
      this.isHexOnly = (_a = idBlock.isHexOnly) !== null && _a !== undefined ? _a : false;
      this.valueHexView = idBlock.valueHex ? BufferSourceConverter.toUint8Array(idBlock.valueHex) : EMPTY_VIEW;
      this.tagClass = (_b = idBlock.tagClass) !== null && _b !== undefined ? _b : -1;
      this.tagNumber = (_c = idBlock.tagNumber) !== null && _c !== undefined ? _c : -1;
      this.isConstructed = (_d = idBlock.isConstructed) !== null && _d !== undefined ? _d : false;
    } else {
      this.tagClass = -1;
      this.tagNumber = -1;
      this.isConstructed = false;
    }
  }
  toBER(sizeOnly = false) {
    let firstOctet = 0;
    switch (this.tagClass) {
      case 1:
        firstOctet |= 0;
        break;
      case 2:
        firstOctet |= 64;
        break;
      case 3:
        firstOctet |= 128;
        break;
      case 4:
        firstOctet |= 192;
        break;
      default:
        this.error = "Unknown tag class";
        return EMPTY_BUFFER;
    }
    if (this.isConstructed)
      firstOctet |= 32;
    if (this.tagNumber < 31 && !this.isHexOnly) {
      const retView2 = new Uint8Array(1);
      if (!sizeOnly) {
        let number = this.tagNumber;
        number &= 31;
        firstOctet |= number;
        retView2[0] = firstOctet;
      }
      return retView2.buffer;
    }
    if (!this.isHexOnly) {
      const encodedBuf = utilToBase(this.tagNumber, 7);
      const encodedView = new Uint8Array(encodedBuf);
      const size = encodedBuf.byteLength;
      const retView2 = new Uint8Array(size + 1);
      retView2[0] = firstOctet | 31;
      if (!sizeOnly) {
        for (let i = 0;i < size - 1; i++)
          retView2[i + 1] = encodedView[i] | 128;
        retView2[size] = encodedView[size - 1];
      }
      return retView2.buffer;
    }
    const retView = new Uint8Array(this.valueHexView.byteLength + 1);
    retView[0] = firstOctet | 31;
    if (!sizeOnly) {
      const curView = this.valueHexView;
      for (let i = 0;i < curView.length - 1; i++)
        retView[i + 1] = curView[i] | 128;
      retView[this.valueHexView.byteLength] = curView[curView.length - 1];
    }
    return retView.buffer;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
      return -1;
    }
    const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
    if (intBuffer.length === 0) {
      this.error = "Zero buffer length";
      return -1;
    }
    const tagClassMask = intBuffer[0] & 192;
    switch (tagClassMask) {
      case 0:
        this.tagClass = 1;
        break;
      case 64:
        this.tagClass = 2;
        break;
      case 128:
        this.tagClass = 3;
        break;
      case 192:
        this.tagClass = 4;
        break;
      default:
        this.error = "Unknown tag class";
        return -1;
    }
    this.isConstructed = (intBuffer[0] & 32) === 32;
    this.isHexOnly = false;
    const tagNumberMask = intBuffer[0] & 31;
    if (tagNumberMask !== 31) {
      this.tagNumber = tagNumberMask;
      this.blockLength = 1;
    } else {
      let count = 0;
      while (true) {
        const tagByteIndex = count + 1;
        if (tagByteIndex >= intBuffer.length) {
          this.error = "End of input reached before message was fully decoded";
          return -1;
        }
        count++;
        if ((intBuffer[tagByteIndex] & 128) === 0)
          break;
      }
      this.blockLength = count + 1;
      const intTagNumberBuffer = this.valueHexView = new Uint8Array(count);
      for (let i = 0;i < count; i++)
        intTagNumberBuffer[i] = intBuffer[i + 1] & 127;
      if (this.blockLength <= 9)
        this.tagNumber = utilFromBase(intTagNumberBuffer, 7);
      else {
        this.isHexOnly = true;
        this.warnings.push("Tag too long, represented as hex-coded");
      }
    }
    if (this.tagClass === 1 && this.isConstructed) {
      switch (this.tagNumber) {
        case 1:
        case 2:
        case 5:
        case 6:
        case 9:
        case 13:
        case 14:
        case 23:
        case 24:
        case 31:
        case 32:
        case 33:
        case 34:
          this.error = "Constructed encoding used for primitive type";
          return -1;
      }
    }
    return inputOffset + this.blockLength;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      tagClass: this.tagClass,
      tagNumber: this.tagNumber,
      isConstructed: this.isConstructed
    };
  }
}
LocalIdentificationBlock.NAME = "identificationBlock";

class LocalLengthBlock extends LocalBaseBlock {
  constructor({ lenBlock = {} } = {}) {
    var _a, _b, _c;
    super();
    this.isIndefiniteForm = (_a = lenBlock.isIndefiniteForm) !== null && _a !== undefined ? _a : false;
    this.longFormUsed = (_b = lenBlock.longFormUsed) !== null && _b !== undefined ? _b : false;
    this.length = (_c = lenBlock.length) !== null && _c !== undefined ? _c : 0;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const view = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, view, inputOffset, inputLength)) {
      return -1;
    }
    const intBuffer = view.subarray(inputOffset, inputOffset + inputLength);
    if (intBuffer.length === 0) {
      this.error = "Zero buffer length";
      return -1;
    }
    if (intBuffer[0] === 255) {
      this.error = "Length block 0xFF is reserved by standard";
      return -1;
    }
    this.isIndefiniteForm = intBuffer[0] === 128;
    if (this.isIndefiniteForm) {
      this.blockLength = 1;
      return inputOffset + this.blockLength;
    }
    this.longFormUsed = !!(intBuffer[0] & 128);
    if (this.longFormUsed === false) {
      this.length = intBuffer[0];
      this.blockLength = 1;
      return inputOffset + this.blockLength;
    }
    const count = intBuffer[0] & 127;
    if (count > 8) {
      this.error = "Too big integer";
      return -1;
    }
    if (count + 1 > intBuffer.length) {
      this.error = "End of input reached before message was fully decoded";
      return -1;
    }
    const lenOffset = inputOffset + 1;
    const lengthBufferView = view.subarray(lenOffset, lenOffset + count);
    if (lengthBufferView[count - 1] === 0)
      this.warnings.push("Needlessly long encoded length");
    this.length = utilFromBase(lengthBufferView, 8);
    if (this.longFormUsed && this.length <= 127)
      this.warnings.push("Unnecessary usage of long length form");
    this.blockLength = count + 1;
    return inputOffset + this.blockLength;
  }
  toBER(sizeOnly = false) {
    let retBuf;
    let retView;
    if (this.length > 127)
      this.longFormUsed = true;
    if (this.isIndefiniteForm) {
      retBuf = new ArrayBuffer(1);
      if (sizeOnly === false) {
        retView = new Uint8Array(retBuf);
        retView[0] = 128;
      }
      return retBuf;
    }
    if (this.longFormUsed) {
      const encodedBuf = utilToBase(this.length, 8);
      if (encodedBuf.byteLength > 127) {
        this.error = "Too big length";
        return EMPTY_BUFFER;
      }
      retBuf = new ArrayBuffer(encodedBuf.byteLength + 1);
      if (sizeOnly)
        return retBuf;
      const encodedView = new Uint8Array(encodedBuf);
      retView = new Uint8Array(retBuf);
      retView[0] = encodedBuf.byteLength | 128;
      for (let i = 0;i < encodedBuf.byteLength; i++)
        retView[i + 1] = encodedView[i];
      return retBuf;
    }
    retBuf = new ArrayBuffer(1);
    if (sizeOnly === false) {
      retView = new Uint8Array(retBuf);
      retView[0] = this.length;
    }
    return retBuf;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      isIndefiniteForm: this.isIndefiniteForm,
      longFormUsed: this.longFormUsed,
      length: this.length
    };
  }
}
LocalLengthBlock.NAME = "lengthBlock";
var typeStore = {};

class BaseBlock extends LocalBaseBlock {
  constructor({ name = EMPTY_STRING, optional = false, primitiveSchema, ...parameters } = {}, valueBlockType) {
    super(parameters);
    this.name = name;
    this.optional = optional;
    if (primitiveSchema) {
      this.primitiveSchema = primitiveSchema;
    }
    this.idBlock = new LocalIdentificationBlock(parameters);
    this.lenBlock = new LocalLengthBlock(parameters);
    this.valueBlock = valueBlockType ? new valueBlockType(parameters) : new ValueBlock(parameters);
  }
  fromBER(inputBuffer, inputOffset, inputLength, context) {
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm ? inputLength : this.lenBlock.length, context);
    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }
    if (!this.idBlock.error.length)
      this.blockLength += this.idBlock.blockLength;
    if (!this.lenBlock.error.length)
      this.blockLength += this.lenBlock.blockLength;
    if (!this.valueBlock.error.length)
      this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  }
  toBER(sizeOnly, writer) {
    const _writer = writer || new ViewWriter;
    if (!writer) {
      prepareIndefiniteForm(this);
    }
    const idBlockBuf = this.idBlock.toBER(sizeOnly);
    _writer.write(idBlockBuf);
    if (this.lenBlock.isIndefiniteForm) {
      _writer.write(new Uint8Array([128]).buffer);
      this.valueBlock.toBER(sizeOnly, _writer);
      _writer.write(new ArrayBuffer(2));
    } else {
      const valueBlockBuf = this.valueBlock.toBER(sizeOnly);
      this.lenBlock.length = valueBlockBuf.byteLength;
      const lenBlockBuf = this.lenBlock.toBER(sizeOnly);
      _writer.write(lenBlockBuf);
      _writer.write(valueBlockBuf);
    }
    if (!writer) {
      return _writer.final();
    }
    return EMPTY_BUFFER;
  }
  toJSON() {
    const object = {
      ...super.toJSON(),
      idBlock: this.idBlock.toJSON(),
      lenBlock: this.lenBlock.toJSON(),
      valueBlock: this.valueBlock.toJSON(),
      name: this.name,
      optional: this.optional
    };
    if (this.primitiveSchema)
      object.primitiveSchema = this.primitiveSchema.toJSON();
    return object;
  }
  toString(encoding = "ascii") {
    if (encoding === "ascii") {
      return this.onAsciiEncoding();
    }
    return Convert.ToHex(this.toBER());
  }
  onAsciiEncoding() {
    const name = this.constructor.NAME;
    const value = Convert.ToHex(this.valueBlock.valueBeforeDecodeView);
    return `${name} : ${value}`;
  }
  isEqual(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof this.constructor)) {
      return false;
    }
    const thisRaw = this.toBER();
    const otherRaw = other.toBER();
    return isEqualBuffer(thisRaw, otherRaw);
  }
}
BaseBlock.NAME = "BaseBlock";
function prepareIndefiniteForm(baseBlock) {
  var _a;
  if (baseBlock instanceof typeStore.Constructed) {
    for (const value of baseBlock.valueBlock.value) {
      if (prepareIndefiniteForm(value)) {
        baseBlock.lenBlock.isIndefiniteForm = true;
      }
    }
  }
  return !!((_a = baseBlock.lenBlock) === null || _a === undefined ? undefined : _a.isIndefiniteForm);
}

class BaseStringBlock extends BaseBlock {
  getValue() {
    return this.valueBlock.value;
  }
  setValue(value) {
    this.valueBlock.value = value;
  }
  constructor({ value = EMPTY_STRING, ...parameters } = {}, stringValueBlockType) {
    super(parameters, stringValueBlockType);
    if (value) {
      this.fromString(value);
    }
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm ? inputLength : this.lenBlock.length);
    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }
    this.fromBuffer(this.valueBlock.valueHexView);
    if (!this.idBlock.error.length)
      this.blockLength += this.idBlock.blockLength;
    if (!this.lenBlock.error.length)
      this.blockLength += this.lenBlock.blockLength;
    if (!this.valueBlock.error.length)
      this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : '${this.valueBlock.value}'`;
  }
}
BaseStringBlock.NAME = "BaseStringBlock";

class LocalPrimitiveValueBlock extends HexBlock(ValueBlock) {
  constructor({ isHexOnly = true, ...parameters } = {}) {
    super(parameters);
    this.isHexOnly = isHexOnly;
  }
}
LocalPrimitiveValueBlock.NAME = "PrimitiveValueBlock";
var _a$w;

class Primitive extends BaseBlock {
  constructor(parameters = {}) {
    super(parameters, LocalPrimitiveValueBlock);
    this.idBlock.isConstructed = false;
  }
}
_a$w = Primitive;
(() => {
  typeStore.Primitive = _a$w;
})();
Primitive.NAME = "PRIMITIVE";
var DEFAULT_MAX_DEPTH = 100;
var DEFAULT_MAX_NODES = 1e4;
var DEFAULT_MAX_CONTENT_LENGTH = 16 * 1024 * 1024;
var MAX_DEPTH_EXCEEDED_ERROR = "Maximum ASN.1 nesting depth exceeded";
var MAX_NODES_EXCEEDED_ERROR = "Maximum ASN.1 node count exceeded";
var MAX_CONTENT_LENGTH_EXCEEDED_ERROR = "Maximum ASN.1 content length exceeded";
function createFromBerContext(options = {}) {
  var _a, _b, _c;
  return {
    depth: 0,
    maxDepth: (_a = options.maxDepth) !== null && _a !== undefined ? _a : DEFAULT_MAX_DEPTH,
    nodesCount: 0,
    maxNodes: (_b = options.maxNodes) !== null && _b !== undefined ? _b : DEFAULT_MAX_NODES,
    maxContentLength: (_c = options.maxContentLength) !== null && _c !== undefined ? _c : DEFAULT_MAX_CONTENT_LENGTH
  };
}
function createErrorResult(error) {
  const result = new BaseBlock({}, ValueBlock);
  result.error = error;
  return {
    offset: -1,
    result
  };
}
function checkNodesLimit(context) {
  context.nodesCount += 1;
  if (context.nodesCount > context.maxNodes) {
    return MAX_NODES_EXCEEDED_ERROR;
  }
  return;
}
function checkContentLengthLimit(inputLength, context) {
  if (inputLength > context.maxContentLength) {
    return MAX_CONTENT_LENGTH_EXCEEDED_ERROR;
  }
  return;
}
function localFromBERWithChildContext(inputBuffer, inputOffset, inputLength, context) {
  const childDepth = context.depth + 1;
  if (childDepth > context.maxDepth) {
    return createErrorResult(MAX_DEPTH_EXCEEDED_ERROR);
  }
  context.depth = childDepth;
  try {
    return localFromBER(inputBuffer, inputOffset, inputLength, context);
  } finally {
    context.depth -= 1;
  }
}
function localChangeType(inputObject, newType) {
  if (inputObject instanceof newType) {
    return inputObject;
  }
  const newObject = new newType;
  newObject.idBlock = inputObject.idBlock;
  newObject.lenBlock = inputObject.lenBlock;
  newObject.warnings = inputObject.warnings;
  newObject.valueBeforeDecodeView = inputObject.valueBeforeDecodeView;
  return newObject;
}
function localFromBER(inputBuffer, inputOffset = 0, inputLength = inputBuffer.length, context = createFromBerContext()) {
  const incomingOffset = inputOffset;
  let returnObject = new BaseBlock({}, ValueBlock);
  const baseBlock = new LocalBaseBlock;
  if (!checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength)) {
    returnObject.error = baseBlock.error;
    return {
      offset: -1,
      result: returnObject
    };
  }
  const intBuffer = inputBuffer.subarray(inputOffset, inputOffset + inputLength);
  if (!intBuffer.length) {
    returnObject.error = "Zero buffer length";
    return {
      offset: -1,
      result: returnObject
    };
  }
  const nodesLimitError = checkNodesLimit(context);
  if (nodesLimitError) {
    returnObject.error = nodesLimitError;
    return {
      offset: -1,
      result: returnObject
    };
  }
  let resultOffset = returnObject.idBlock.fromBER(inputBuffer, inputOffset, inputLength);
  if (returnObject.idBlock.warnings.length) {
    returnObject.warnings.concat(returnObject.idBlock.warnings);
  }
  if (resultOffset === -1) {
    returnObject.error = returnObject.idBlock.error;
    return {
      offset: -1,
      result: returnObject
    };
  }
  inputOffset = resultOffset;
  inputLength -= returnObject.idBlock.blockLength;
  resultOffset = returnObject.lenBlock.fromBER(inputBuffer, inputOffset, inputLength);
  if (returnObject.lenBlock.warnings.length) {
    returnObject.warnings.concat(returnObject.lenBlock.warnings);
  }
  if (resultOffset === -1) {
    returnObject.error = returnObject.lenBlock.error;
    return {
      offset: -1,
      result: returnObject
    };
  }
  inputOffset = resultOffset;
  inputLength -= returnObject.lenBlock.blockLength;
  const valueLength = returnObject.lenBlock.isIndefiniteForm ? inputLength : returnObject.lenBlock.length;
  const contentLengthError = checkContentLengthLimit(valueLength, context);
  if (contentLengthError) {
    returnObject.error = contentLengthError;
    return {
      offset: -1,
      result: returnObject
    };
  }
  if (!returnObject.idBlock.isConstructed && returnObject.lenBlock.isIndefiniteForm) {
    returnObject.error = "Indefinite length form used for primitive encoding form";
    return {
      offset: -1,
      result: returnObject
    };
  }
  let newASN1Type = BaseBlock;
  switch (returnObject.idBlock.tagClass) {
    case 1:
      if (returnObject.idBlock.tagNumber >= 37 && returnObject.idBlock.isHexOnly === false) {
        returnObject.error = "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard";
        return {
          offset: -1,
          result: returnObject
        };
      }
      switch (returnObject.idBlock.tagNumber) {
        case 0:
          if (returnObject.idBlock.isConstructed && returnObject.lenBlock.length > 0) {
            returnObject.error = "Type [UNIVERSAL 0] is reserved";
            return {
              offset: -1,
              result: returnObject
            };
          }
          newASN1Type = typeStore.EndOfContent;
          break;
        case 1:
          newASN1Type = typeStore.Boolean;
          break;
        case 2:
          newASN1Type = typeStore.Integer;
          break;
        case 3:
          newASN1Type = typeStore.BitString;
          break;
        case 4:
          newASN1Type = typeStore.OctetString;
          break;
        case 5:
          newASN1Type = typeStore.Null;
          break;
        case 6:
          newASN1Type = typeStore.ObjectIdentifier;
          break;
        case 10:
          newASN1Type = typeStore.Enumerated;
          break;
        case 12:
          newASN1Type = typeStore.Utf8String;
          break;
        case 13:
          newASN1Type = typeStore.RelativeObjectIdentifier;
          break;
        case 14:
          newASN1Type = typeStore.TIME;
          break;
        case 15:
          returnObject.error = "[UNIVERSAL 15] is reserved by ASN.1 standard";
          return {
            offset: -1,
            result: returnObject
          };
        case 16:
          newASN1Type = typeStore.Sequence;
          break;
        case 17:
          newASN1Type = typeStore.Set;
          break;
        case 18:
          newASN1Type = typeStore.NumericString;
          break;
        case 19:
          newASN1Type = typeStore.PrintableString;
          break;
        case 20:
          newASN1Type = typeStore.TeletexString;
          break;
        case 21:
          newASN1Type = typeStore.VideotexString;
          break;
        case 22:
          newASN1Type = typeStore.IA5String;
          break;
        case 23:
          newASN1Type = typeStore.UTCTime;
          break;
        case 24:
          newASN1Type = typeStore.GeneralizedTime;
          break;
        case 25:
          newASN1Type = typeStore.GraphicString;
          break;
        case 26:
          newASN1Type = typeStore.VisibleString;
          break;
        case 27:
          newASN1Type = typeStore.GeneralString;
          break;
        case 28:
          newASN1Type = typeStore.UniversalString;
          break;
        case 29:
          newASN1Type = typeStore.CharacterString;
          break;
        case 30:
          newASN1Type = typeStore.BmpString;
          break;
        case 31:
          newASN1Type = typeStore.DATE;
          break;
        case 32:
          newASN1Type = typeStore.TimeOfDay;
          break;
        case 33:
          newASN1Type = typeStore.DateTime;
          break;
        case 34:
          newASN1Type = typeStore.Duration;
          break;
        default: {
          const newObject = returnObject.idBlock.isConstructed ? new typeStore.Constructed : new typeStore.Primitive;
          newObject.idBlock = returnObject.idBlock;
          newObject.lenBlock = returnObject.lenBlock;
          newObject.warnings = returnObject.warnings;
          returnObject = newObject;
        }
      }
      break;
    case 2:
    case 3:
    case 4:
    default: {
      newASN1Type = returnObject.idBlock.isConstructed ? typeStore.Constructed : typeStore.Primitive;
    }
  }
  returnObject = localChangeType(returnObject, newASN1Type);
  resultOffset = returnObject.fromBER(inputBuffer, inputOffset, valueLength, context);
  returnObject.valueBeforeDecodeView = inputBuffer.subarray(incomingOffset, incomingOffset + returnObject.blockLength);
  return {
    offset: resultOffset,
    result: returnObject
  };
}
function fromBER(inputBuffer, options = {}) {
  if (!inputBuffer.byteLength) {
    const result = new BaseBlock({}, ValueBlock);
    result.error = "Input buffer has zero length";
    return {
      offset: -1,
      result
    };
  }
  return localFromBER(BufferSourceConverter.toUint8Array(inputBuffer).slice(), 0, inputBuffer.byteLength, createFromBerContext(options));
}
function checkLen(indefiniteLength, length) {
  if (indefiniteLength) {
    return 1;
  }
  return length;
}

class LocalConstructedValueBlock extends ValueBlock {
  constructor({ value = [], isIndefiniteForm = false, ...parameters } = {}) {
    super(parameters);
    this.value = value;
    this.isIndefiniteForm = isIndefiniteForm;
  }
  fromBER(inputBuffer, inputOffset, inputLength, context) {
    const view = BufferSourceConverter.toUint8Array(inputBuffer);
    const parseContext = context !== null && context !== undefined ? context : createFromBerContext();
    if (!checkBufferParams(this, view, inputOffset, inputLength)) {
      return -1;
    }
    this.valueBeforeDecodeView = view.subarray(inputOffset, inputOffset + inputLength);
    if (this.valueBeforeDecodeView.length === 0) {
      this.warnings.push("Zero buffer length");
      return inputOffset;
    }
    let currentOffset = inputOffset;
    while (checkLen(this.isIndefiniteForm, inputLength) > 0) {
      const returnObject = localFromBERWithChildContext(view, currentOffset, inputLength, parseContext);
      if (returnObject.offset === -1) {
        this.error = returnObject.result.error;
        this.warnings.concat(returnObject.result.warnings);
        return -1;
      }
      currentOffset = returnObject.offset;
      this.blockLength += returnObject.result.blockLength;
      inputLength -= returnObject.result.blockLength;
      this.value.push(returnObject.result);
      if (this.isIndefiniteForm && returnObject.result.constructor.NAME === END_OF_CONTENT_NAME) {
        break;
      }
    }
    if (this.isIndefiniteForm) {
      if (this.value[this.value.length - 1].constructor.NAME === END_OF_CONTENT_NAME) {
        this.value.pop();
      } else {
        this.warnings.push("No EndOfContent block encoded");
      }
    }
    return currentOffset;
  }
  toBER(sizeOnly, writer) {
    const _writer = writer || new ViewWriter;
    for (let i = 0;i < this.value.length; i++) {
      this.value[i].toBER(sizeOnly, _writer);
    }
    if (!writer) {
      return _writer.final();
    }
    return EMPTY_BUFFER;
  }
  toJSON() {
    const object = {
      ...super.toJSON(),
      isIndefiniteForm: this.isIndefiniteForm,
      value: []
    };
    for (const value of this.value) {
      object.value.push(value.toJSON());
    }
    return object;
  }
}
LocalConstructedValueBlock.NAME = "ConstructedValueBlock";
var _a$v;

class Constructed extends BaseBlock {
  constructor(parameters = {}) {
    super(parameters, LocalConstructedValueBlock);
    this.idBlock.isConstructed = true;
  }
  fromBER(inputBuffer, inputOffset, inputLength, context) {
    this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm ? inputLength : this.lenBlock.length, context);
    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }
    if (!this.idBlock.error.length)
      this.blockLength += this.idBlock.blockLength;
    if (!this.lenBlock.error.length)
      this.blockLength += this.lenBlock.blockLength;
    if (!this.valueBlock.error.length)
      this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  }
  onAsciiEncoding() {
    const values = [];
    for (const value of this.valueBlock.value) {
      values.push(value.toString("ascii").split(`
`).map((o) => `  ${o}`).join(`
`));
    }
    const blockName = this.idBlock.tagClass === 3 ? `[${this.idBlock.tagNumber}]` : this.constructor.NAME;
    return values.length ? `${blockName} :
${values.join(`
`)}` : `${blockName} :`;
  }
}
_a$v = Constructed;
(() => {
  typeStore.Constructed = _a$v;
})();
Constructed.NAME = "CONSTRUCTED";

class LocalEndOfContentValueBlock extends ValueBlock {
  fromBER(inputBuffer, inputOffset, _inputLength) {
    return inputOffset;
  }
  toBER(_sizeOnly) {
    return EMPTY_BUFFER;
  }
}
LocalEndOfContentValueBlock.override = "EndOfContentValueBlock";
var _a$u;

class EndOfContent extends BaseBlock {
  constructor(parameters = {}) {
    super(parameters, LocalEndOfContentValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 0;
  }
}
_a$u = EndOfContent;
(() => {
  typeStore.EndOfContent = _a$u;
})();
EndOfContent.NAME = END_OF_CONTENT_NAME;
var _a$t;

class Null extends BaseBlock {
  constructor(parameters = {}) {
    super(parameters, ValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 5;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    if (this.lenBlock.length > 0)
      this.warnings.push("Non-zero length of value block for Null type");
    if (!this.idBlock.error.length)
      this.blockLength += this.idBlock.blockLength;
    if (!this.lenBlock.error.length)
      this.blockLength += this.lenBlock.blockLength;
    this.blockLength += inputLength;
    if (inputOffset + inputLength > inputBuffer.byteLength) {
      this.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
      return -1;
    }
    return inputOffset + inputLength;
  }
  toBER(sizeOnly, writer) {
    const retBuf = new ArrayBuffer(2);
    if (!sizeOnly) {
      const retView = new Uint8Array(retBuf);
      retView[0] = 5;
      retView[1] = 0;
    }
    if (writer) {
      writer.write(retBuf);
    }
    return retBuf;
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME}`;
  }
}
_a$t = Null;
(() => {
  typeStore.Null = _a$t;
})();
Null.NAME = "NULL";

class LocalBooleanValueBlock extends HexBlock(ValueBlock) {
  get value() {
    for (const octet of this.valueHexView) {
      if (octet > 0) {
        return true;
      }
    }
    return false;
  }
  set value(value) {
    this.valueHexView[0] = value ? 255 : 0;
  }
  constructor({ value, ...parameters } = {}) {
    super(parameters);
    if (parameters.valueHex) {
      this.valueHexView = BufferSourceConverter.toUint8Array(parameters.valueHex);
    } else {
      this.valueHexView = new Uint8Array(1);
    }
    if (value) {
      this.value = value;
    }
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
      return -1;
    }
    this.valueHexView = inputView.subarray(inputOffset, inputOffset + inputLength);
    if (inputLength > 1)
      this.warnings.push("Boolean value encoded in more then 1 octet");
    this.isHexOnly = true;
    utilDecodeTC.call(this);
    this.blockLength = inputLength;
    return inputOffset + inputLength;
  }
  toBER() {
    return this.valueHexView.slice();
  }
  toJSON() {
    return {
      ...super.toJSON(),
      value: this.value
    };
  }
}
LocalBooleanValueBlock.NAME = "BooleanValueBlock";
var _a$s;

class Boolean2 extends BaseBlock {
  getValue() {
    return this.valueBlock.value;
  }
  setValue(value) {
    this.valueBlock.value = value;
  }
  constructor(parameters = {}) {
    super(parameters, LocalBooleanValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 1;
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${this.getValue}`;
  }
}
_a$s = Boolean2;
(() => {
  typeStore.Boolean = _a$s;
})();
Boolean2.NAME = "BOOLEAN";

class LocalOctetStringValueBlock extends HexBlock(LocalConstructedValueBlock) {
  constructor({ isConstructed = false, ...parameters } = {}) {
    super(parameters);
    this.isConstructed = isConstructed;
  }
  fromBER(inputBuffer, inputOffset, inputLength, context) {
    let resultOffset = 0;
    if (this.isConstructed) {
      this.isHexOnly = false;
      resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength, context);
      if (resultOffset === -1)
        return resultOffset;
      for (let i = 0;i < this.value.length; i++) {
        const currentBlockName = this.value[i].constructor.NAME;
        if (currentBlockName === END_OF_CONTENT_NAME) {
          if (this.isIndefiniteForm)
            break;
          else {
            this.error = "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only";
            return -1;
          }
        }
        if (currentBlockName !== OCTET_STRING_NAME) {
          this.error = "OCTET STRING may consists of OCTET STRINGs only";
          return -1;
        }
      }
    } else {
      this.isHexOnly = true;
      resultOffset = super.fromBER(inputBuffer, inputOffset, inputLength);
      this.blockLength = inputLength;
    }
    return resultOffset;
  }
  toBER(sizeOnly, writer) {
    if (this.isConstructed)
      return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly, writer);
    return sizeOnly ? new ArrayBuffer(this.valueHexView.byteLength) : this.valueHexView.slice().buffer;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      isConstructed: this.isConstructed
    };
  }
}
LocalOctetStringValueBlock.NAME = "OctetStringValueBlock";
var _a$r;

class OctetString extends BaseBlock {
  constructor({ idBlock = {}, lenBlock = {}, ...parameters } = {}) {
    var _b, _c;
    (_b = parameters.isConstructed) !== null && _b !== undefined || (parameters.isConstructed = !!((_c = parameters.value) === null || _c === undefined ? undefined : _c.length));
    super({
      idBlock: {
        isConstructed: parameters.isConstructed,
        ...idBlock
      },
      lenBlock: {
        ...lenBlock,
        isIndefiniteForm: !!parameters.isIndefiniteForm
      },
      ...parameters
    }, LocalOctetStringValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 4;
  }
  fromBER(inputBuffer, inputOffset, inputLength, context) {
    this.valueBlock.isConstructed = this.idBlock.isConstructed;
    this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
    if (inputLength === 0) {
      if (this.idBlock.error.length === 0)
        this.blockLength += this.idBlock.blockLength;
      if (this.lenBlock.error.length === 0)
        this.blockLength += this.lenBlock.blockLength;
      return inputOffset;
    }
    if (!this.valueBlock.isConstructed) {
      const view = inputBuffer instanceof ArrayBuffer ? new Uint8Array(inputBuffer) : inputBuffer;
      const buf = view.subarray(inputOffset, inputOffset + inputLength);
      try {
        if (buf.byteLength) {
          const parseContext = context !== null && context !== undefined ? context : createFromBerContext();
          const asn = localFromBERWithChildContext(buf, 0, buf.byteLength, parseContext);
          if (asn.offset !== -1 && asn.offset === inputLength) {
            this.valueBlock.value = [asn.result];
          }
        }
      } catch {}
    }
    return super.fromBER(inputBuffer, inputOffset, inputLength, context);
  }
  onAsciiEncoding() {
    if (this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length) {
      return Constructed.prototype.onAsciiEncoding.call(this);
    }
    const name = this.constructor.NAME;
    const value = Convert.ToHex(this.valueBlock.valueHexView);
    return `${name} : ${value}`;
  }
  getValue() {
    if (!this.idBlock.isConstructed) {
      return this.valueBlock.valueHexView.slice().buffer;
    }
    const array = [];
    for (const content of this.valueBlock.value) {
      if (content instanceof _a$r) {
        array.push(content.valueBlock.valueHexView);
      }
    }
    return BufferSourceConverter.concat(array);
  }
}
_a$r = OctetString;
(() => {
  typeStore.OctetString = _a$r;
})();
OctetString.NAME = OCTET_STRING_NAME;

class LocalBitStringValueBlock extends HexBlock(LocalConstructedValueBlock) {
  constructor({ unusedBits = 0, isConstructed = false, ...parameters } = {}) {
    super(parameters);
    this.unusedBits = unusedBits;
    this.isConstructed = isConstructed;
    this.blockLength = this.valueHexView.byteLength;
  }
  fromBER(inputBuffer, inputOffset, inputLength, context) {
    if (!inputLength) {
      return inputOffset;
    }
    let resultOffset = -1;
    if (this.isConstructed) {
      resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength, context);
      if (resultOffset === -1)
        return resultOffset;
      for (const value of this.value) {
        const currentBlockName = value.constructor.NAME;
        if (currentBlockName === END_OF_CONTENT_NAME) {
          if (this.isIndefiniteForm)
            break;
          else {
            this.error = "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only";
            return -1;
          }
        }
        if (currentBlockName !== BIT_STRING_NAME) {
          this.error = "BIT STRING may consists of BIT STRINGs only";
          return -1;
        }
        const valueBlock = value.valueBlock;
        if (this.unusedBits > 0 && valueBlock.unusedBits > 0) {
          this.error = 'Using of "unused bits" inside constructive BIT STRING allowed for least one only';
          return -1;
        }
        this.unusedBits = valueBlock.unusedBits;
      }
      return resultOffset;
    }
    const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
      return -1;
    }
    const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
    this.unusedBits = intBuffer[0];
    if (this.unusedBits > 7) {
      this.error = "Unused bits for BitString must be in range 0-7";
      return -1;
    }
    if (!this.unusedBits) {
      const buf = intBuffer.subarray(1);
      try {
        if (buf.byteLength) {
          const parseContext = context !== null && context !== undefined ? context : createFromBerContext();
          const asn = localFromBERWithChildContext(buf, 0, buf.byteLength, parseContext);
          if (asn.offset !== -1 && asn.offset === inputLength - 1) {
            this.value = [asn.result];
          }
        }
      } catch {}
    }
    this.valueHexView = intBuffer.subarray(1);
    this.blockLength = intBuffer.length;
    return inputOffset + inputLength;
  }
  toBER(sizeOnly, writer) {
    if (this.isConstructed) {
      return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly, writer);
    }
    if (sizeOnly) {
      return new ArrayBuffer(this.valueHexView.byteLength + 1);
    }
    if (!this.valueHexView.byteLength) {
      const empty2 = new Uint8Array(1);
      empty2[0] = 0;
      return empty2.buffer;
    }
    const retView = new Uint8Array(this.valueHexView.length + 1);
    retView[0] = this.unusedBits;
    retView.set(this.valueHexView, 1);
    return retView.buffer;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      unusedBits: this.unusedBits,
      isConstructed: this.isConstructed
    };
  }
}
LocalBitStringValueBlock.NAME = "BitStringValueBlock";
var _a$q;

class BitString extends BaseBlock {
  constructor({ idBlock = {}, lenBlock = {}, ...parameters } = {}) {
    var _b, _c;
    (_b = parameters.isConstructed) !== null && _b !== undefined || (parameters.isConstructed = !!((_c = parameters.value) === null || _c === undefined ? undefined : _c.length));
    super({
      idBlock: {
        isConstructed: parameters.isConstructed,
        ...idBlock
      },
      lenBlock: {
        ...lenBlock,
        isIndefiniteForm: !!parameters.isIndefiniteForm
      },
      ...parameters
    }, LocalBitStringValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 3;
  }
  fromBER(inputBuffer, inputOffset, inputLength, context) {
    this.valueBlock.isConstructed = this.idBlock.isConstructed;
    this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
    return super.fromBER(inputBuffer, inputOffset, inputLength, context);
  }
  onAsciiEncoding() {
    if (this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length) {
      return Constructed.prototype.onAsciiEncoding.call(this);
    } else {
      const bits = [];
      const valueHex = this.valueBlock.valueHexView;
      for (const byte of valueHex) {
        bits.push(byte.toString(2).padStart(8, "0"));
      }
      const bitsStr = bits.join("");
      const name = this.constructor.NAME;
      const value = bitsStr.substring(0, bitsStr.length - this.valueBlock.unusedBits);
      return `${name} : ${value}`;
    }
  }
}
_a$q = BitString;
(() => {
  typeStore.BitString = _a$q;
})();
BitString.NAME = BIT_STRING_NAME;
var _a$p;
function viewAdd(first, second) {
  const c = new Uint8Array([0]);
  const firstView = new Uint8Array(first);
  const secondView = new Uint8Array(second);
  let firstViewCopy = firstView.slice(0);
  const firstViewCopyLength = firstViewCopy.length - 1;
  const secondViewCopy = secondView.slice(0);
  const secondViewCopyLength = secondViewCopy.length - 1;
  let value = 0;
  const max = secondViewCopyLength < firstViewCopyLength ? firstViewCopyLength : secondViewCopyLength;
  let counter = 0;
  for (let i = max;i >= 0; i--, counter++) {
    switch (true) {
      case counter < secondViewCopy.length:
        value = firstViewCopy[firstViewCopyLength - counter] + secondViewCopy[secondViewCopyLength - counter] + c[0];
        break;
      default:
        value = firstViewCopy[firstViewCopyLength - counter] + c[0];
    }
    c[0] = value / 10;
    switch (true) {
      case counter >= firstViewCopy.length:
        firstViewCopy = utilConcatView(new Uint8Array([value % 10]), firstViewCopy);
        break;
      default:
        firstViewCopy[firstViewCopyLength - counter] = value % 10;
    }
  }
  if (c[0] > 0)
    firstViewCopy = utilConcatView(c, firstViewCopy);
  return firstViewCopy;
}
function power2(n) {
  if (n >= powers2.length) {
    for (let p = powers2.length;p <= n; p++) {
      const c = new Uint8Array([0]);
      let digits = powers2[p - 1].slice(0);
      for (let i = digits.length - 1;i >= 0; i--) {
        const newValue = new Uint8Array([(digits[i] << 1) + c[0]]);
        c[0] = newValue[0] / 10;
        digits[i] = newValue[0] % 10;
      }
      if (c[0] > 0)
        digits = utilConcatView(c, digits);
      powers2.push(digits);
    }
  }
  return powers2[n];
}
function viewSub(first, second) {
  let b = 0;
  const firstView = new Uint8Array(first);
  const secondView = new Uint8Array(second);
  const firstViewCopy = firstView.slice(0);
  const firstViewCopyLength = firstViewCopy.length - 1;
  const secondViewCopy = secondView.slice(0);
  const secondViewCopyLength = secondViewCopy.length - 1;
  let value;
  let counter = 0;
  for (let i = secondViewCopyLength;i >= 0; i--, counter++) {
    value = firstViewCopy[firstViewCopyLength - counter] - secondViewCopy[secondViewCopyLength - counter] - b;
    switch (true) {
      case value < 0:
        b = 1;
        firstViewCopy[firstViewCopyLength - counter] = value + 10;
        break;
      default:
        b = 0;
        firstViewCopy[firstViewCopyLength - counter] = value;
    }
  }
  if (b > 0) {
    for (let i = firstViewCopyLength - secondViewCopyLength + 1;i >= 0; i--, counter++) {
      value = firstViewCopy[firstViewCopyLength - counter] - b;
      if (value < 0) {
        b = 1;
        firstViewCopy[firstViewCopyLength - counter] = value + 10;
      } else {
        b = 0;
        firstViewCopy[firstViewCopyLength - counter] = value;
        break;
      }
    }
  }
  return firstViewCopy.slice();
}

class LocalIntegerValueBlock extends HexBlock(ValueBlock) {
  setValueHex() {
    if (this.valueHexView.length >= 4) {
      this.warnings.push("Too big Integer for decoding, hex only");
      this.isHexOnly = true;
      this._valueDec = 0;
    } else {
      this.isHexOnly = false;
      if (this.valueHexView.length > 0) {
        this._valueDec = utilDecodeTC.call(this);
      }
    }
  }
  constructor({ value, ...parameters } = {}) {
    super(parameters);
    this._valueDec = 0;
    if (parameters.valueHex) {
      this.setValueHex();
    }
    if (value !== undefined) {
      this.valueDec = value;
    }
  }
  set valueDec(v) {
    this._valueDec = v;
    this.isHexOnly = false;
    this.valueHexView = new Uint8Array(utilEncodeTC(v));
  }
  get valueDec() {
    return this._valueDec;
  }
  fromDER(inputBuffer, inputOffset, inputLength, expectedLength = 0) {
    const offset = this.fromBER(inputBuffer, inputOffset, inputLength);
    if (offset === -1)
      return offset;
    const view = this.valueHexView;
    if (view[0] === 0 && (view[1] & 128) !== 0) {
      this.valueHexView = view.subarray(1);
    } else {
      if (expectedLength !== 0) {
        if (view.length < expectedLength) {
          if (expectedLength - view.length > 1)
            expectedLength = view.length + 1;
          this.valueHexView = view.subarray(expectedLength - view.length);
        }
      }
    }
    return offset;
  }
  toDER(sizeOnly = false) {
    const view = this.valueHexView;
    switch (true) {
      case (view[0] & 128) !== 0:
        {
          const updatedView = new Uint8Array(this.valueHexView.length + 1);
          updatedView[0] = 0;
          updatedView.set(view, 1);
          this.valueHexView = updatedView;
        }
        break;
      case (view[0] === 0 && (view[1] & 128) === 0):
        {
          this.valueHexView = this.valueHexView.subarray(1);
        }
        break;
    }
    return this.toBER(sizeOnly);
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const resultOffset = super.fromBER(inputBuffer, inputOffset, inputLength);
    if (resultOffset === -1) {
      return resultOffset;
    }
    this.setValueHex();
    return resultOffset;
  }
  toBER(sizeOnly) {
    return sizeOnly ? new ArrayBuffer(this.valueHexView.length) : this.valueHexView.slice().buffer;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      valueDec: this.valueDec
    };
  }
  toString() {
    const firstBit = this.valueHexView.length * 8 - 1;
    let digits = new Uint8Array(this.valueHexView.length * 8 / 3);
    let bitNumber = 0;
    let currentByte;
    const asn1View = this.valueHexView;
    let result = "";
    let flag = false;
    for (let byteNumber = asn1View.byteLength - 1;byteNumber >= 0; byteNumber--) {
      currentByte = asn1View[byteNumber];
      for (let i = 0;i < 8; i++) {
        if ((currentByte & 1) === 1) {
          switch (bitNumber) {
            case firstBit:
              digits = viewSub(power2(bitNumber), digits);
              result = "-";
              break;
            default:
              digits = viewAdd(digits, power2(bitNumber));
          }
        }
        bitNumber++;
        currentByte >>= 1;
      }
    }
    for (let i = 0;i < digits.length; i++) {
      if (digits[i])
        flag = true;
      if (flag)
        result += digitsString.charAt(digits[i]);
    }
    if (flag === false)
      result += digitsString.charAt(0);
    return result;
  }
}
_a$p = LocalIntegerValueBlock;
LocalIntegerValueBlock.NAME = "IntegerValueBlock";
(() => {
  Object.defineProperty(_a$p.prototype, "valueHex", {
    set: function(v) {
      this.valueHexView = new Uint8Array(v);
      this.setValueHex();
    },
    get: function() {
      return this.valueHexView.slice().buffer;
    }
  });
})();
var _a$o;

class Integer extends BaseBlock {
  constructor(parameters = {}) {
    super(parameters, LocalIntegerValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 2;
  }
  toBigInt() {
    assertBigInt();
    return BigInt(this.valueBlock.toString());
  }
  static fromBigInt(value) {
    assertBigInt();
    const bigIntValue = BigInt(value);
    const writer = new ViewWriter;
    const hex = bigIntValue.toString(16).replace(/^-/, "");
    const view = new Uint8Array(Convert.FromHex(hex));
    if (bigIntValue < 0) {
      const first = new Uint8Array(view.length + (view[0] & 128 ? 1 : 0));
      first[0] |= 128;
      const firstInt = BigInt(`0x${Convert.ToHex(first)}`);
      const secondInt = firstInt + bigIntValue;
      const second = BufferSourceConverter.toUint8Array(Convert.FromHex(secondInt.toString(16)));
      second[0] |= 128;
      writer.write(second);
    } else {
      if (view[0] & 128) {
        writer.write(new Uint8Array([0]));
      }
      writer.write(view);
    }
    const res = new _a$o({ valueHex: writer.final() });
    return res;
  }
  convertToDER() {
    const integer = new _a$o({ valueHex: this.valueBlock.valueHexView });
    integer.valueBlock.toDER();
    return integer;
  }
  convertFromDER() {
    return new _a$o({
      valueHex: this.valueBlock.valueHexView[0] === 0 ? this.valueBlock.valueHexView.subarray(1) : this.valueBlock.valueHexView
    });
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${this.valueBlock.toString()}`;
  }
}
_a$o = Integer;
(() => {
  typeStore.Integer = _a$o;
})();
Integer.NAME = "INTEGER";
var _a$n;

class Enumerated extends Integer {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 10;
  }
}
_a$n = Enumerated;
(() => {
  typeStore.Enumerated = _a$n;
})();
Enumerated.NAME = "ENUMERATED";

class LocalSidValueBlock extends HexBlock(ValueBlock) {
  constructor({ valueDec = -1, isFirstSid = false, ...parameters } = {}) {
    super(parameters);
    this.valueDec = valueDec;
    this.isFirstSid = isFirstSid;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    if (!inputLength) {
      return inputOffset;
    }
    const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
      return -1;
    }
    const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
    this.valueHexView = new Uint8Array(inputLength);
    for (let i = 0;i < inputLength; i++) {
      this.valueHexView[i] = intBuffer[i] & 127;
      this.blockLength++;
      if ((intBuffer[i] & 128) === 0)
        break;
    }
    const tempView = new Uint8Array(this.blockLength);
    for (let i = 0;i < this.blockLength; i++) {
      tempView[i] = this.valueHexView[i];
    }
    this.valueHexView = tempView;
    if ((intBuffer[this.blockLength - 1] & 128) !== 0) {
      this.error = "End of input reached before message was fully decoded";
      return -1;
    }
    if (this.valueHexView[0] === 0)
      this.warnings.push("Needlessly long format of SID encoding");
    if (this.blockLength <= 8)
      this.valueDec = utilFromBase(this.valueHexView, 7);
    else {
      this.isHexOnly = true;
      this.warnings.push("Too big SID for decoding, hex only");
    }
    return inputOffset + this.blockLength;
  }
  set valueBigInt(value) {
    assertBigInt();
    let bits = BigInt(value).toString(2);
    while (bits.length % 7) {
      bits = "0" + bits;
    }
    const bytes = new Uint8Array(bits.length / 7);
    for (let i = 0;i < bytes.length; i++) {
      bytes[i] = parseInt(bits.slice(i * 7, i * 7 + 7), 2) + (i + 1 < bytes.length ? 128 : 0);
    }
    this.fromBER(bytes.buffer, 0, bytes.length);
  }
  toBER(sizeOnly) {
    if (this.isHexOnly) {
      if (sizeOnly)
        return new ArrayBuffer(this.valueHexView.byteLength);
      const curView = this.valueHexView;
      const retView2 = new Uint8Array(this.blockLength);
      for (let i = 0;i < this.blockLength - 1; i++)
        retView2[i] = curView[i] | 128;
      retView2[this.blockLength - 1] = curView[this.blockLength - 1];
      return retView2.buffer;
    }
    const encodedBuf = utilToBase(this.valueDec, 7);
    if (encodedBuf.byteLength === 0) {
      this.error = "Error during encoding SID value";
      return EMPTY_BUFFER;
    }
    const retView = new Uint8Array(encodedBuf.byteLength);
    if (!sizeOnly) {
      const encodedView = new Uint8Array(encodedBuf);
      const len = encodedBuf.byteLength - 1;
      for (let i = 0;i < len; i++)
        retView[i] = encodedView[i] | 128;
      retView[len] = encodedView[len];
    }
    return retView;
  }
  toString() {
    let result = "";
    if (this.isHexOnly)
      result = Convert.ToHex(this.valueHexView);
    else {
      if (this.isFirstSid) {
        let sidValue = this.valueDec;
        if (this.valueDec <= 39)
          result = "0.";
        else {
          if (this.valueDec <= 79) {
            result = "1.";
            sidValue -= 40;
          } else {
            result = "2.";
            sidValue -= 80;
          }
        }
        result += sidValue.toString();
      } else
        result = this.valueDec.toString();
    }
    return result;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      valueDec: this.valueDec,
      isFirstSid: this.isFirstSid
    };
  }
}
LocalSidValueBlock.NAME = "sidBlock";

class LocalObjectIdentifierValueBlock extends ValueBlock {
  constructor({ value = EMPTY_STRING, ...parameters } = {}) {
    super(parameters);
    this.value = [];
    if (value) {
      this.fromString(value);
    }
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    let resultOffset = inputOffset;
    while (inputLength > 0) {
      const sidBlock = new LocalSidValueBlock;
      resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);
      if (resultOffset === -1) {
        this.blockLength = 0;
        this.error = sidBlock.error;
        return resultOffset;
      }
      if (this.value.length === 0)
        sidBlock.isFirstSid = true;
      this.blockLength += sidBlock.blockLength;
      inputLength -= sidBlock.blockLength;
      this.value.push(sidBlock);
    }
    return resultOffset;
  }
  toBER(sizeOnly) {
    const retBuffers = [];
    for (let i = 0;i < this.value.length; i++) {
      const valueBuf = this.value[i].toBER(sizeOnly);
      if (valueBuf.byteLength === 0) {
        this.error = this.value[i].error;
        return EMPTY_BUFFER;
      }
      retBuffers.push(valueBuf);
    }
    return concat(retBuffers);
  }
  fromString(string) {
    this.value = [];
    let pos1 = 0;
    let pos2 = 0;
    let sid = "";
    let flag = false;
    do {
      pos2 = string.indexOf(".", pos1);
      if (pos2 === -1)
        sid = string.substring(pos1);
      else
        sid = string.substring(pos1, pos2);
      pos1 = pos2 + 1;
      if (flag) {
        const sidBlock = this.value[0];
        let plus = 0;
        switch (sidBlock.valueDec) {
          case 0:
            break;
          case 1:
            plus = 40;
            break;
          case 2:
            plus = 80;
            break;
          default:
            this.value = [];
            return;
        }
        const parsedSID = parseInt(sid, 10);
        if (isNaN(parsedSID))
          return;
        sidBlock.valueDec = parsedSID + plus;
        flag = false;
      } else {
        const sidBlock = new LocalSidValueBlock;
        if (sid > Number.MAX_SAFE_INTEGER) {
          assertBigInt();
          const sidValue = BigInt(sid);
          sidBlock.valueBigInt = sidValue;
        } else {
          sidBlock.valueDec = parseInt(sid, 10);
          if (isNaN(sidBlock.valueDec))
            return;
        }
        if (!this.value.length) {
          sidBlock.isFirstSid = true;
          flag = true;
        }
        this.value.push(sidBlock);
      }
    } while (pos2 !== -1);
  }
  toString() {
    let result = "";
    let isHexOnly = false;
    for (let i = 0;i < this.value.length; i++) {
      isHexOnly = this.value[i].isHexOnly;
      let sidStr = this.value[i].toString();
      if (i !== 0)
        result = `${result}.`;
      if (isHexOnly) {
        sidStr = `{${sidStr}}`;
        if (this.value[i].isFirstSid)
          result = `2.{${sidStr} - 80}`;
        else
          result += sidStr;
      } else
        result += sidStr;
    }
    return result;
  }
  toJSON() {
    const object = {
      ...super.toJSON(),
      value: this.toString(),
      sidArray: []
    };
    for (let i = 0;i < this.value.length; i++) {
      object.sidArray.push(this.value[i].toJSON());
    }
    return object;
  }
}
LocalObjectIdentifierValueBlock.NAME = "ObjectIdentifierValueBlock";
var _a$m;

class ObjectIdentifier extends BaseBlock {
  getValue() {
    return this.valueBlock.toString();
  }
  setValue(value) {
    this.valueBlock.fromString(value);
  }
  constructor(parameters = {}) {
    super(parameters, LocalObjectIdentifierValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 6;
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${this.valueBlock.toString() || "empty"}`;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      value: this.getValue()
    };
  }
}
_a$m = ObjectIdentifier;
(() => {
  typeStore.ObjectIdentifier = _a$m;
})();
ObjectIdentifier.NAME = "OBJECT IDENTIFIER";

class LocalRelativeSidValueBlock extends HexBlock(LocalBaseBlock) {
  constructor({ valueDec = 0, ...parameters } = {}) {
    super(parameters);
    this.valueDec = valueDec;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    if (inputLength === 0)
      return inputOffset;
    const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, inputView, inputOffset, inputLength))
      return -1;
    const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
    this.valueHexView = new Uint8Array(inputLength);
    for (let i = 0;i < inputLength; i++) {
      this.valueHexView[i] = intBuffer[i] & 127;
      this.blockLength++;
      if ((intBuffer[i] & 128) === 0)
        break;
    }
    const tempView = new Uint8Array(this.blockLength);
    for (let i = 0;i < this.blockLength; i++)
      tempView[i] = this.valueHexView[i];
    this.valueHexView = tempView;
    if ((intBuffer[this.blockLength - 1] & 128) !== 0) {
      this.error = "End of input reached before message was fully decoded";
      return -1;
    }
    if (this.valueHexView[0] === 0)
      this.warnings.push("Needlessly long format of SID encoding");
    if (this.blockLength <= 8)
      this.valueDec = utilFromBase(this.valueHexView, 7);
    else {
      this.isHexOnly = true;
      this.warnings.push("Too big SID for decoding, hex only");
    }
    return inputOffset + this.blockLength;
  }
  toBER(sizeOnly) {
    if (this.isHexOnly) {
      if (sizeOnly)
        return new ArrayBuffer(this.valueHexView.byteLength);
      const curView = this.valueHexView;
      const retView2 = new Uint8Array(this.blockLength);
      for (let i = 0;i < this.blockLength - 1; i++)
        retView2[i] = curView[i] | 128;
      retView2[this.blockLength - 1] = curView[this.blockLength - 1];
      return retView2.buffer;
    }
    const encodedBuf = utilToBase(this.valueDec, 7);
    if (encodedBuf.byteLength === 0) {
      this.error = "Error during encoding SID value";
      return EMPTY_BUFFER;
    }
    const retView = new Uint8Array(encodedBuf.byteLength);
    if (!sizeOnly) {
      const encodedView = new Uint8Array(encodedBuf);
      const len = encodedBuf.byteLength - 1;
      for (let i = 0;i < len; i++)
        retView[i] = encodedView[i] | 128;
      retView[len] = encodedView[len];
    }
    return retView.buffer;
  }
  toString() {
    let result = "";
    if (this.isHexOnly)
      result = Convert.ToHex(this.valueHexView);
    else {
      result = this.valueDec.toString();
    }
    return result;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      valueDec: this.valueDec
    };
  }
}
LocalRelativeSidValueBlock.NAME = "relativeSidBlock";

class LocalRelativeObjectIdentifierValueBlock extends ValueBlock {
  constructor({ value = EMPTY_STRING, ...parameters } = {}) {
    super(parameters);
    this.value = [];
    if (value) {
      this.fromString(value);
    }
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    let resultOffset = inputOffset;
    while (inputLength > 0) {
      const sidBlock = new LocalRelativeSidValueBlock;
      resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);
      if (resultOffset === -1) {
        this.blockLength = 0;
        this.error = sidBlock.error;
        return resultOffset;
      }
      this.blockLength += sidBlock.blockLength;
      inputLength -= sidBlock.blockLength;
      this.value.push(sidBlock);
    }
    return resultOffset;
  }
  toBER(sizeOnly, _writer) {
    const retBuffers = [];
    for (let i = 0;i < this.value.length; i++) {
      const valueBuf = this.value[i].toBER(sizeOnly);
      if (valueBuf.byteLength === 0) {
        this.error = this.value[i].error;
        return EMPTY_BUFFER;
      }
      retBuffers.push(valueBuf);
    }
    return concat(retBuffers);
  }
  fromString(string) {
    this.value = [];
    let pos1 = 0;
    let pos2 = 0;
    let sid = "";
    do {
      pos2 = string.indexOf(".", pos1);
      if (pos2 === -1)
        sid = string.substring(pos1);
      else
        sid = string.substring(pos1, pos2);
      pos1 = pos2 + 1;
      const sidBlock = new LocalRelativeSidValueBlock;
      sidBlock.valueDec = parseInt(sid, 10);
      if (isNaN(sidBlock.valueDec))
        return true;
      this.value.push(sidBlock);
    } while (pos2 !== -1);
    return true;
  }
  toString() {
    let result = "";
    let isHexOnly = false;
    for (let i = 0;i < this.value.length; i++) {
      isHexOnly = this.value[i].isHexOnly;
      let sidStr = this.value[i].toString();
      if (i !== 0)
        result = `${result}.`;
      if (isHexOnly) {
        sidStr = `{${sidStr}}`;
        result += sidStr;
      } else
        result += sidStr;
    }
    return result;
  }
  toJSON() {
    const object = {
      ...super.toJSON(),
      value: this.toString(),
      sidArray: []
    };
    for (let i = 0;i < this.value.length; i++)
      object.sidArray.push(this.value[i].toJSON());
    return object;
  }
}
LocalRelativeObjectIdentifierValueBlock.NAME = "RelativeObjectIdentifierValueBlock";
var _a$l;

class RelativeObjectIdentifier extends BaseBlock {
  getValue() {
    return this.valueBlock.toString();
  }
  setValue(value) {
    this.valueBlock.fromString(value);
  }
  constructor(parameters = {}) {
    super(parameters, LocalRelativeObjectIdentifierValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 13;
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${this.valueBlock.toString() || "empty"}`;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      value: this.getValue()
    };
  }
}
_a$l = RelativeObjectIdentifier;
(() => {
  typeStore.RelativeObjectIdentifier = _a$l;
})();
RelativeObjectIdentifier.NAME = "RelativeObjectIdentifier";
var _a$k;

class Sequence extends Constructed {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 16;
  }
}
_a$k = Sequence;
(() => {
  typeStore.Sequence = _a$k;
})();
Sequence.NAME = "SEQUENCE";
var _a$j;

class Set2 extends Constructed {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 17;
  }
}
_a$j = Set2;
(() => {
  typeStore.Set = _a$j;
})();
Set2.NAME = "SET";

class LocalStringValueBlock extends HexBlock(ValueBlock) {
  constructor({ ...parameters } = {}) {
    super(parameters);
    this.isHexOnly = true;
    this.value = EMPTY_STRING;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      value: this.value
    };
  }
}
LocalStringValueBlock.NAME = "StringValueBlock";

class LocalSimpleStringValueBlock extends LocalStringValueBlock {
}
LocalSimpleStringValueBlock.NAME = "SimpleStringValueBlock";

class LocalSimpleStringBlock extends BaseStringBlock {
  constructor({ ...parameters } = {}) {
    super(parameters, LocalSimpleStringValueBlock);
  }
  fromBuffer(inputBuffer) {
    this.valueBlock.value = String.fromCharCode.apply(null, BufferSourceConverter.toUint8Array(inputBuffer));
  }
  fromString(inputString) {
    const strLen = inputString.length;
    const view = this.valueBlock.valueHexView = new Uint8Array(strLen);
    for (let i = 0;i < strLen; i++)
      view[i] = inputString.charCodeAt(i);
    this.valueBlock.value = inputString;
  }
}
LocalSimpleStringBlock.NAME = "SIMPLE STRING";

class LocalUtf8StringValueBlock extends LocalSimpleStringBlock {
  fromBuffer(inputBuffer) {
    this.valueBlock.valueHexView = BufferSourceConverter.toUint8Array(inputBuffer);
    try {
      this.valueBlock.value = Convert.ToUtf8String(inputBuffer);
    } catch (ex) {
      this.warnings.push(`Error during "decodeURIComponent": ${ex}, using raw string`);
      this.valueBlock.value = Convert.ToBinary(inputBuffer);
    }
  }
  fromString(inputString) {
    this.valueBlock.valueHexView = new Uint8Array(Convert.FromUtf8String(inputString));
    this.valueBlock.value = inputString;
  }
}
LocalUtf8StringValueBlock.NAME = "Utf8StringValueBlock";
var _a$i;

class Utf8String extends LocalUtf8StringValueBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 12;
  }
}
_a$i = Utf8String;
(() => {
  typeStore.Utf8String = _a$i;
})();
Utf8String.NAME = "UTF8String";

class LocalBmpStringValueBlock extends LocalSimpleStringBlock {
  fromBuffer(inputBuffer) {
    this.valueBlock.value = Convert.ToUtf16String(inputBuffer);
    this.valueBlock.valueHexView = BufferSourceConverter.toUint8Array(inputBuffer);
  }
  fromString(inputString) {
    this.valueBlock.value = inputString;
    this.valueBlock.valueHexView = new Uint8Array(Convert.FromUtf16String(inputString));
  }
}
LocalBmpStringValueBlock.NAME = "BmpStringValueBlock";
var _a$h;

class BmpString extends LocalBmpStringValueBlock {
  constructor({ ...parameters } = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 30;
  }
}
_a$h = BmpString;
(() => {
  typeStore.BmpString = _a$h;
})();
BmpString.NAME = "BMPString";

class LocalUniversalStringValueBlock extends LocalSimpleStringBlock {
  fromBuffer(inputBuffer) {
    const copyBuffer = ArrayBuffer.isView(inputBuffer) ? inputBuffer.slice().buffer : inputBuffer.slice(0);
    const valueView = new Uint8Array(copyBuffer);
    for (let i = 0;i < valueView.length; i += 4) {
      valueView[i] = valueView[i + 3];
      valueView[i + 1] = valueView[i + 2];
      valueView[i + 2] = 0;
      valueView[i + 3] = 0;
    }
    this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(copyBuffer));
  }
  fromString(inputString) {
    const strLength = inputString.length;
    const valueHexView = this.valueBlock.valueHexView = new Uint8Array(strLength * 4);
    for (let i = 0;i < strLength; i++) {
      const codeBuf = utilToBase(inputString.charCodeAt(i), 8);
      const codeView = new Uint8Array(codeBuf);
      if (codeView.length > 4)
        continue;
      const dif = 4 - codeView.length;
      for (let j = codeView.length - 1;j >= 0; j--)
        valueHexView[i * 4 + j + dif] = codeView[j];
    }
    this.valueBlock.value = inputString;
  }
}
LocalUniversalStringValueBlock.NAME = "UniversalStringValueBlock";
var _a$g;

class UniversalString extends LocalUniversalStringValueBlock {
  constructor({ ...parameters } = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 28;
  }
}
_a$g = UniversalString;
(() => {
  typeStore.UniversalString = _a$g;
})();
UniversalString.NAME = "UniversalString";
var _a$f;

class NumericString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 18;
  }
}
_a$f = NumericString;
(() => {
  typeStore.NumericString = _a$f;
})();
NumericString.NAME = "NumericString";
var _a$e;

class PrintableString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 19;
  }
}
_a$e = PrintableString;
(() => {
  typeStore.PrintableString = _a$e;
})();
PrintableString.NAME = "PrintableString";
var _a$d;

class TeletexString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 20;
  }
}
_a$d = TeletexString;
(() => {
  typeStore.TeletexString = _a$d;
})();
TeletexString.NAME = "TeletexString";
var _a$c;

class VideotexString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 21;
  }
}
_a$c = VideotexString;
(() => {
  typeStore.VideotexString = _a$c;
})();
VideotexString.NAME = "VideotexString";
var _a$b;

class IA5String extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 22;
  }
}
_a$b = IA5String;
(() => {
  typeStore.IA5String = _a$b;
})();
IA5String.NAME = "IA5String";
var _a$a;

class GraphicString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 25;
  }
}
_a$a = GraphicString;
(() => {
  typeStore.GraphicString = _a$a;
})();
GraphicString.NAME = "GraphicString";
var _a$9;

class VisibleString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 26;
  }
}
_a$9 = VisibleString;
(() => {
  typeStore.VisibleString = _a$9;
})();
VisibleString.NAME = "VisibleString";
var _a$8;

class GeneralString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 27;
  }
}
_a$8 = GeneralString;
(() => {
  typeStore.GeneralString = _a$8;
})();
GeneralString.NAME = "GeneralString";
var _a$7;

class CharacterString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 29;
  }
}
_a$7 = CharacterString;
(() => {
  typeStore.CharacterString = _a$7;
})();
CharacterString.NAME = "CharacterString";
var _a$6;

class UTCTime extends VisibleString {
  constructor({ value, valueDate, ...parameters } = {}) {
    super(parameters);
    this.year = 0;
    this.month = 0;
    this.day = 0;
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    if (value) {
      this.fromString(value);
      this.valueBlock.valueHexView = new Uint8Array(value.length);
      for (let i = 0;i < value.length; i++)
        this.valueBlock.valueHexView[i] = value.charCodeAt(i);
    }
    if (valueDate) {
      this.fromDate(valueDate);
      this.valueBlock.valueHexView = new Uint8Array(this.toBuffer());
    }
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 23;
  }
  fromBuffer(inputBuffer) {
    this.fromString(String.fromCharCode.apply(null, BufferSourceConverter.toUint8Array(inputBuffer)));
  }
  toBuffer() {
    const str = this.toString();
    const buffer = new ArrayBuffer(str.length);
    const view = new Uint8Array(buffer);
    for (let i = 0;i < str.length; i++)
      view[i] = str.charCodeAt(i);
    return buffer;
  }
  fromDate(inputDate) {
    this.year = inputDate.getUTCFullYear();
    this.month = inputDate.getUTCMonth() + 1;
    this.day = inputDate.getUTCDate();
    this.hour = inputDate.getUTCHours();
    this.minute = inputDate.getUTCMinutes();
    this.second = inputDate.getUTCSeconds();
  }
  toDate() {
    return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second));
  }
  fromString(inputString) {
    const parser = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/ig;
    const parserArray = parser.exec(inputString);
    if (parserArray === null) {
      this.error = "Wrong input string for conversion";
      return;
    }
    const year = parseInt(parserArray[1], 10);
    if (year >= 50)
      this.year = 1900 + year;
    else
      this.year = 2000 + year;
    this.month = parseInt(parserArray[2], 10);
    this.day = parseInt(parserArray[3], 10);
    this.hour = parseInt(parserArray[4], 10);
    this.minute = parseInt(parserArray[5], 10);
    this.second = parseInt(parserArray[6], 10);
  }
  toString(encoding = "iso") {
    if (encoding === "iso") {
      const outputArray = new Array(7);
      outputArray[0] = padNumber(this.year < 2000 ? this.year - 1900 : this.year - 2000, 2);
      outputArray[1] = padNumber(this.month, 2);
      outputArray[2] = padNumber(this.day, 2);
      outputArray[3] = padNumber(this.hour, 2);
      outputArray[4] = padNumber(this.minute, 2);
      outputArray[5] = padNumber(this.second, 2);
      outputArray[6] = "Z";
      return outputArray.join("");
    }
    return super.toString(encoding);
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${this.toDate().toISOString()}`;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second
    };
  }
}
_a$6 = UTCTime;
(() => {
  typeStore.UTCTime = _a$6;
})();
UTCTime.NAME = "UTCTime";
var _a$5;

class GeneralizedTime extends UTCTime {
  constructor(parameters = {}) {
    var _b;
    super(parameters);
    (_b = this.millisecond) !== null && _b !== undefined || (this.millisecond = 0);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 24;
  }
  fromDate(inputDate) {
    super.fromDate(inputDate);
    this.millisecond = inputDate.getUTCMilliseconds();
  }
  toDate() {
    const utcDate = Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond);
    return new Date(utcDate);
  }
  fromString(inputString) {
    let isUTC = false;
    let timeString = "";
    let dateTimeString = "";
    let fractionPart = 0;
    let parser;
    let hourDifference = 0;
    let minuteDifference = 0;
    if (inputString[inputString.length - 1] === "Z") {
      timeString = inputString.substring(0, inputString.length - 1);
      isUTC = true;
    } else {
      const number = new Number(inputString[inputString.length - 1]);
      if (isNaN(number.valueOf()))
        throw new Error("Wrong input string for conversion");
      timeString = inputString;
    }
    if (isUTC) {
      if (timeString.indexOf("+") !== -1)
        throw new Error("Wrong input string for conversion");
      if (timeString.indexOf("-") !== -1)
        throw new Error("Wrong input string for conversion");
    } else {
      let multiplier = 1;
      let differencePosition = timeString.indexOf("+");
      let differenceString = "";
      if (differencePosition === -1) {
        differencePosition = timeString.indexOf("-");
        multiplier = -1;
      }
      if (differencePosition !== -1) {
        differenceString = timeString.substring(differencePosition + 1);
        timeString = timeString.substring(0, differencePosition);
        if (differenceString.length !== 2 && differenceString.length !== 4)
          throw new Error("Wrong input string for conversion");
        let number = parseInt(differenceString.substring(0, 2), 10);
        if (isNaN(number.valueOf()))
          throw new Error("Wrong input string for conversion");
        hourDifference = multiplier * number;
        if (differenceString.length === 4) {
          number = parseInt(differenceString.substring(2, 4), 10);
          if (isNaN(number.valueOf()))
            throw new Error("Wrong input string for conversion");
          minuteDifference = multiplier * number;
        }
      }
    }
    let fractionPointPosition = timeString.indexOf(".");
    if (fractionPointPosition === -1)
      fractionPointPosition = timeString.indexOf(",");
    if (fractionPointPosition !== -1) {
      const fractionPartCheck = new Number(`0${timeString.substring(fractionPointPosition)}`);
      if (isNaN(fractionPartCheck.valueOf()))
        throw new Error("Wrong input string for conversion");
      fractionPart = fractionPartCheck.valueOf();
      dateTimeString = timeString.substring(0, fractionPointPosition);
    } else
      dateTimeString = timeString;
    switch (true) {
      case dateTimeString.length === 8:
        parser = /(\d{4})(\d{2})(\d{2})/ig;
        if (fractionPointPosition !== -1)
          throw new Error("Wrong input string for conversion");
        break;
      case dateTimeString.length === 10:
        parser = /(\d{4})(\d{2})(\d{2})(\d{2})/ig;
        if (fractionPointPosition !== -1) {
          let fractionResult = 60 * fractionPart;
          this.minute = Math.floor(fractionResult);
          fractionResult = 60 * (fractionResult - this.minute);
          this.second = Math.floor(fractionResult);
          fractionResult = 1000 * (fractionResult - this.second);
          this.millisecond = Math.floor(fractionResult);
        }
        break;
      case dateTimeString.length === 12:
        parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/ig;
        if (fractionPointPosition !== -1) {
          let fractionResult = 60 * fractionPart;
          this.second = Math.floor(fractionResult);
          fractionResult = 1000 * (fractionResult - this.second);
          this.millisecond = Math.floor(fractionResult);
        }
        break;
      case dateTimeString.length === 14:
        parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/ig;
        if (fractionPointPosition !== -1) {
          const fractionResult = 1000 * fractionPart;
          this.millisecond = Math.floor(fractionResult);
        }
        break;
      default:
        throw new Error("Wrong input string for conversion");
    }
    const parserArray = parser.exec(dateTimeString);
    if (parserArray === null)
      throw new Error("Wrong input string for conversion");
    for (let j = 1;j < parserArray.length; j++) {
      switch (j) {
        case 1:
          this.year = parseInt(parserArray[j], 10);
          break;
        case 2:
          this.month = parseInt(parserArray[j], 10);
          break;
        case 3:
          this.day = parseInt(parserArray[j], 10);
          break;
        case 4:
          this.hour = parseInt(parserArray[j], 10) + hourDifference;
          break;
        case 5:
          this.minute = parseInt(parserArray[j], 10) + minuteDifference;
          break;
        case 6:
          this.second = parseInt(parserArray[j], 10);
          break;
        default:
          throw new Error("Wrong input string for conversion");
      }
    }
    if (isUTC === false) {
      const tempDate = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
      this.year = tempDate.getUTCFullYear();
      this.month = tempDate.getUTCMonth();
      this.day = tempDate.getUTCDay();
      this.hour = tempDate.getUTCHours();
      this.minute = tempDate.getUTCMinutes();
      this.second = tempDate.getUTCSeconds();
      this.millisecond = tempDate.getUTCMilliseconds();
    }
  }
  toString(encoding = "iso") {
    if (encoding === "iso") {
      const outputArray = [];
      outputArray.push(padNumber(this.year, 4));
      outputArray.push(padNumber(this.month, 2));
      outputArray.push(padNumber(this.day, 2));
      outputArray.push(padNumber(this.hour, 2));
      outputArray.push(padNumber(this.minute, 2));
      outputArray.push(padNumber(this.second, 2));
      if (this.millisecond !== 0) {
        outputArray.push(".");
        outputArray.push(padNumber(this.millisecond, 3));
      }
      outputArray.push("Z");
      return outputArray.join("");
    }
    return super.toString(encoding);
  }
  toJSON() {
    return {
      ...super.toJSON(),
      millisecond: this.millisecond
    };
  }
}
_a$5 = GeneralizedTime;
(() => {
  typeStore.GeneralizedTime = _a$5;
})();
GeneralizedTime.NAME = "GeneralizedTime";
var _a$4;

class DATE extends Utf8String {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 31;
  }
}
_a$4 = DATE;
(() => {
  typeStore.DATE = _a$4;
})();
DATE.NAME = "DATE";
var _a$3;

class TimeOfDay extends Utf8String {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 32;
  }
}
_a$3 = TimeOfDay;
(() => {
  typeStore.TimeOfDay = _a$3;
})();
TimeOfDay.NAME = "TimeOfDay";
var _a$2;

class DateTime extends Utf8String {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 33;
  }
}
_a$2 = DateTime;
(() => {
  typeStore.DateTime = _a$2;
})();
DateTime.NAME = "DateTime";
var _a$1;

class Duration extends Utf8String {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 34;
  }
}
_a$1 = Duration;
(() => {
  typeStore.Duration = _a$1;
})();
Duration.NAME = "Duration";
var _a;

class TIME extends Utf8String {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 14;
  }
}
_a = TIME;
(() => {
  typeStore.TIME = _a;
})();
TIME.NAME = "TIME";

class Any {
  constructor({ name = EMPTY_STRING, optional = false } = {}) {
    this.name = name;
    this.optional = optional;
  }
}

class Choice extends Any {
  constructor({ value = [], ...parameters } = {}) {
    super(parameters);
    this.value = value;
  }
}

class Repeated extends Any {
  constructor({ value = new Any, local = false, ...parameters } = {}) {
    super(parameters);
    this.value = value;
    this.local = local;
  }
}

class RawData {
  get data() {
    return this.dataView.slice().buffer;
  }
  set data(value) {
    this.dataView = BufferSourceConverter.toUint8Array(value);
  }
  constructor({ data = EMPTY_VIEW } = {}) {
    this.dataView = BufferSourceConverter.toUint8Array(data);
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const endLength = inputOffset + inputLength;
    this.dataView = BufferSourceConverter.toUint8Array(inputBuffer).subarray(inputOffset, endLength);
    return endLength;
  }
  toBER(_sizeOnly) {
    return this.dataView.slice().buffer;
  }
}
function compareSchema(root, inputData, inputSchema) {
  if (inputSchema instanceof Choice) {
    for (const element of inputSchema.value) {
      const result = compareSchema(root, inputData, element);
      if (result.verified) {
        return {
          verified: true,
          result: root
        };
      }
    }
    {
      const _result = {
        verified: false,
        result: { error: "Wrong values for Choice type" }
      };
      if (inputSchema.hasOwnProperty(NAME))
        _result.name = inputSchema.name;
      return _result;
    }
  }
  if (inputSchema instanceof Any) {
    if (inputSchema.hasOwnProperty(NAME))
      root[inputSchema.name] = inputData;
    return {
      verified: true,
      result: root
    };
  }
  if (root instanceof Object === false) {
    return {
      verified: false,
      result: { error: "Wrong root object" }
    };
  }
  if (inputData instanceof Object === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 data" }
    };
  }
  if (inputSchema instanceof Object === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  if (ID_BLOCK in inputSchema === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  if (FROM_BER in inputSchema.idBlock === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  if (TO_BER in inputSchema.idBlock === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  const encodedId = inputSchema.idBlock.toBER(false);
  if (encodedId.byteLength === 0) {
    return {
      verified: false,
      result: { error: "Error encoding idBlock for ASN.1 schema" }
    };
  }
  const decodedOffset = inputSchema.idBlock.fromBER(encodedId, 0, encodedId.byteLength);
  if (decodedOffset === -1) {
    return {
      verified: false,
      result: { error: "Error decoding idBlock for ASN.1 schema" }
    };
  }
  if (inputSchema.idBlock.hasOwnProperty(TAG_CLASS) === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  if (inputSchema.idBlock.tagClass !== inputData.idBlock.tagClass) {
    return {
      verified: false,
      result: root
    };
  }
  if (inputSchema.idBlock.hasOwnProperty(TAG_NUMBER) === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  if (inputSchema.idBlock.tagNumber !== inputData.idBlock.tagNumber) {
    return {
      verified: false,
      result: root
    };
  }
  if (inputSchema.idBlock.hasOwnProperty(IS_CONSTRUCTED) === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  if (inputSchema.idBlock.isConstructed !== inputData.idBlock.isConstructed) {
    return {
      verified: false,
      result: root
    };
  }
  if (!(IS_HEX_ONLY in inputSchema.idBlock)) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  if (inputSchema.idBlock.isHexOnly !== inputData.idBlock.isHexOnly) {
    return {
      verified: false,
      result: root
    };
  }
  if (inputSchema.idBlock.isHexOnly) {
    if (VALUE_HEX_VIEW in inputSchema.idBlock === false) {
      return {
        verified: false,
        result: { error: "Wrong ASN.1 schema" }
      };
    }
    const schemaView = inputSchema.idBlock.valueHexView;
    const asn1View = inputData.idBlock.valueHexView;
    if (schemaView.length !== asn1View.length) {
      return {
        verified: false,
        result: root
      };
    }
    for (let i = 0;i < schemaView.length; i++) {
      if (schemaView[i] !== asn1View[1]) {
        return {
          verified: false,
          result: root
        };
      }
    }
  }
  if (inputSchema.name) {
    inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
    if (inputSchema.name)
      root[inputSchema.name] = inputData;
  }
  if (inputSchema instanceof typeStore.Constructed) {
    let admission = 0;
    let result = {
      verified: false,
      result: { error: "Unknown error" }
    };
    let maxLength = inputSchema.valueBlock.value.length;
    if (maxLength > 0) {
      if (inputSchema.valueBlock.value[0] instanceof Repeated) {
        maxLength = inputData.valueBlock.value.length;
      }
    }
    if (maxLength === 0) {
      return {
        verified: true,
        result: root
      };
    }
    if (inputData.valueBlock.value.length === 0 && inputSchema.valueBlock.value.length !== 0) {
      let _optional = true;
      for (let i = 0;i < inputSchema.valueBlock.value.length; i++)
        _optional = _optional && (inputSchema.valueBlock.value[i].optional || false);
      if (_optional) {
        return {
          verified: true,
          result: root
        };
      }
      if (inputSchema.name) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
        if (inputSchema.name)
          delete root[inputSchema.name];
      }
      root.error = "Inconsistent object length";
      return {
        verified: false,
        result: root
      };
    }
    for (let i = 0;i < maxLength; i++) {
      if (i - admission >= inputData.valueBlock.value.length) {
        if (inputSchema.valueBlock.value[i].optional === false) {
          const _result = {
            verified: false,
            result: root
          };
          root.error = "Inconsistent length between ASN.1 data and schema";
          if (inputSchema.name) {
            inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
            if (inputSchema.name) {
              delete root[inputSchema.name];
              _result.name = inputSchema.name;
            }
          }
          return _result;
        }
      } else {
        if (inputSchema.valueBlock.value[0] instanceof Repeated) {
          result = compareSchema(root, inputData.valueBlock.value[i], inputSchema.valueBlock.value[0].value);
          if (result.verified === false) {
            if (inputSchema.valueBlock.value[0].optional)
              admission++;
            else {
              if (inputSchema.name) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                if (inputSchema.name)
                  delete root[inputSchema.name];
              }
              return result;
            }
          }
          if (NAME in inputSchema.valueBlock.value[0] && inputSchema.valueBlock.value[0].name.length > 0) {
            let arrayRoot = {};
            if (LOCAL in inputSchema.valueBlock.value[0] && inputSchema.valueBlock.value[0].local)
              arrayRoot = inputData;
            else
              arrayRoot = root;
            if (typeof arrayRoot[inputSchema.valueBlock.value[0].name] === "undefined")
              arrayRoot[inputSchema.valueBlock.value[0].name] = [];
            arrayRoot[inputSchema.valueBlock.value[0].name].push(inputData.valueBlock.value[i]);
          }
        } else {
          result = compareSchema(root, inputData.valueBlock.value[i - admission], inputSchema.valueBlock.value[i]);
          if (result.verified === false) {
            if (inputSchema.valueBlock.value[i].optional)
              admission++;
            else {
              if (inputSchema.name) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                if (inputSchema.name)
                  delete root[inputSchema.name];
              }
              return result;
            }
          }
        }
      }
    }
    if (result.verified === false) {
      const _result = {
        verified: false,
        result: root
      };
      if (inputSchema.name) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
        if (inputSchema.name) {
          delete root[inputSchema.name];
          _result.name = inputSchema.name;
        }
      }
      return _result;
    }
    return {
      verified: true,
      result: root
    };
  }
  if (inputSchema.primitiveSchema && VALUE_HEX_VIEW in inputData.valueBlock) {
    const asn1 = localFromBER(inputData.valueBlock.valueHexView);
    if (asn1.offset === -1) {
      const _result = {
        verified: false,
        result: asn1.result
      };
      if (inputSchema.name) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
        if (inputSchema.name) {
          delete root[inputSchema.name];
          _result.name = inputSchema.name;
        }
      }
      return _result;
    }
    return compareSchema(root, asn1.result, inputSchema.primitiveSchema);
  }
  return {
    verified: true,
    result: root
  };
}
function verifySchema(inputBuffer, inputSchema) {
  if (inputSchema instanceof Object === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema type" }
    };
  }
  const asn1 = localFromBER(BufferSourceConverter.toUint8Array(inputBuffer));
  if (asn1.offset === -1) {
    return {
      verified: false,
      result: asn1.result
    };
  }
  return compareSchema(asn1.result, asn1.result, inputSchema);
}

// node_modules/@peculiar/utils/build/esm/bytes/buffer-source.js
var ARRAY_BUFFER_TAG = "[object ArrayBuffer]";
var SHARED_ARRAY_BUFFER_TAG = "[object SharedArrayBuffer]";
function tagOf(value) {
  return Object.prototype.toString.call(value);
}
function isArrayBufferViewLike(value) {
  if (ArrayBuffer.isView(value)) {
    return true;
  }
  if (!value || typeof value !== "object") {
    return false;
  }
  const view = value;
  return typeof view.byteOffset === "number" && typeof view.byteLength === "number" && isArrayBufferLike(view.buffer);
}
function isArrayBuffer(value) {
  return tagOf(value) === ARRAY_BUFFER_TAG;
}
function isSharedArrayBuffer(value) {
  return typeof SharedArrayBuffer !== "undefined" && tagOf(value) === SHARED_ARRAY_BUFFER_TAG;
}
function isArrayBufferLike(value) {
  return isArrayBuffer(value) || isSharedArrayBuffer(value);
}
function isArrayBufferView(value) {
  return isArrayBufferViewLike(value);
}
function isBufferSource(value) {
  return isArrayBufferLike(value) || isArrayBufferView(value);
}
function assertBufferSource(value) {
  if (!isBufferSource(value)) {
    throw new TypeError("Expected ArrayBuffer, SharedArrayBuffer, or ArrayBufferView");
  }
}
function toUint8Array(data) {
  assertBufferSource(data);
  if (isArrayBufferLike(data)) {
    return new Uint8Array(data);
  }
  return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
}
function toArrayBuffer(data) {
  assertBufferSource(data);
  if (isArrayBuffer(data)) {
    return data;
  }
  const buffer = new ArrayBuffer(data.byteLength);
  new Uint8Array(buffer).set(toUint8Array(data));
  return buffer;
}
// node_modules/@peculiar/utils/build/esm/bytes/equal.js
function equal(a, b, options = {}) {
  const left = toUint8Array(a);
  const right = toUint8Array(b);
  if (!options.constantTime && left.byteLength !== right.byteLength) {
    return false;
  }
  const length = Math.max(left.byteLength, right.byteLength);
  let diff = left.byteLength ^ right.byteLength;
  for (let i = 0;i < length; i++) {
    diff |= (left[i] ?? 0) ^ (right[i] ?? 0);
  }
  return diff === 0;
}
// node_modules/@peculiar/asn1-schema/build/es2015/enums.js
var AsnTypeTypes;
(function(AsnTypeTypes2) {
  AsnTypeTypes2[AsnTypeTypes2["Sequence"] = 0] = "Sequence";
  AsnTypeTypes2[AsnTypeTypes2["Set"] = 1] = "Set";
  AsnTypeTypes2[AsnTypeTypes2["Choice"] = 2] = "Choice";
})(AsnTypeTypes || (AsnTypeTypes = {}));
var AsnPropTypes;
(function(AsnPropTypes2) {
  AsnPropTypes2[AsnPropTypes2["Any"] = 1] = "Any";
  AsnPropTypes2[AsnPropTypes2["Boolean"] = 2] = "Boolean";
  AsnPropTypes2[AsnPropTypes2["OctetString"] = 3] = "OctetString";
  AsnPropTypes2[AsnPropTypes2["BitString"] = 4] = "BitString";
  AsnPropTypes2[AsnPropTypes2["Integer"] = 5] = "Integer";
  AsnPropTypes2[AsnPropTypes2["Enumerated"] = 6] = "Enumerated";
  AsnPropTypes2[AsnPropTypes2["ObjectIdentifier"] = 7] = "ObjectIdentifier";
  AsnPropTypes2[AsnPropTypes2["Utf8String"] = 8] = "Utf8String";
  AsnPropTypes2[AsnPropTypes2["BmpString"] = 9] = "BmpString";
  AsnPropTypes2[AsnPropTypes2["UniversalString"] = 10] = "UniversalString";
  AsnPropTypes2[AsnPropTypes2["NumericString"] = 11] = "NumericString";
  AsnPropTypes2[AsnPropTypes2["PrintableString"] = 12] = "PrintableString";
  AsnPropTypes2[AsnPropTypes2["TeletexString"] = 13] = "TeletexString";
  AsnPropTypes2[AsnPropTypes2["VideotexString"] = 14] = "VideotexString";
  AsnPropTypes2[AsnPropTypes2["IA5String"] = 15] = "IA5String";
  AsnPropTypes2[AsnPropTypes2["GraphicString"] = 16] = "GraphicString";
  AsnPropTypes2[AsnPropTypes2["VisibleString"] = 17] = "VisibleString";
  AsnPropTypes2[AsnPropTypes2["GeneralString"] = 18] = "GeneralString";
  AsnPropTypes2[AsnPropTypes2["CharacterString"] = 19] = "CharacterString";
  AsnPropTypes2[AsnPropTypes2["UTCTime"] = 20] = "UTCTime";
  AsnPropTypes2[AsnPropTypes2["GeneralizedTime"] = 21] = "GeneralizedTime";
  AsnPropTypes2[AsnPropTypes2["DATE"] = 22] = "DATE";
  AsnPropTypes2[AsnPropTypes2["TimeOfDay"] = 23] = "TimeOfDay";
  AsnPropTypes2[AsnPropTypes2["DateTime"] = 24] = "DateTime";
  AsnPropTypes2[AsnPropTypes2["Duration"] = 25] = "Duration";
  AsnPropTypes2[AsnPropTypes2["TIME"] = 26] = "TIME";
  AsnPropTypes2[AsnPropTypes2["Null"] = 27] = "Null";
})(AsnPropTypes || (AsnPropTypes = {}));

// node_modules/@peculiar/asn1-schema/build/es2015/types/bit_string.js
class BitString2 {
  unusedBits = 0;
  value = new ArrayBuffer(0);
  constructor(params, unusedBits = 0) {
    if (params) {
      if (typeof params === "number") {
        this.fromNumber(params);
      } else if (isBufferSource(params)) {
        this.unusedBits = unusedBits;
        this.value = toArrayBuffer(params);
      } else {
        throw TypeError("Unsupported type of 'params' argument for BitString");
      }
    }
  }
  fromASN(asn) {
    if (!(asn instanceof BitString)) {
      throw new TypeError("Argument 'asn' is not instance of ASN.1 BitString");
    }
    this.unusedBits = asn.valueBlock.unusedBits;
    this.value = toArrayBuffer(asn.valueBlock.valueHex);
    return this;
  }
  toASN() {
    return new BitString({
      unusedBits: this.unusedBits,
      valueHex: this.value
    });
  }
  toSchema(name) {
    return new BitString({ name });
  }
  toNumber() {
    let res = "";
    const uintArray = new Uint8Array(this.value);
    for (const octet of uintArray) {
      res += octet.toString(2).padStart(8, "0");
    }
    res = res.split("").reverse().join("");
    if (this.unusedBits) {
      res = res.slice(this.unusedBits).padStart(this.unusedBits, "0");
    }
    return parseInt(res, 2);
  }
  fromNumber(value) {
    let bits = value.toString(2);
    const octetSize = bits.length + 7 >> 3;
    this.unusedBits = (octetSize << 3) - bits.length;
    const octets = new Uint8Array(octetSize);
    bits = bits.padStart(octetSize << 3, "0").split("").reverse().join("");
    let index = 0;
    while (index < octetSize) {
      octets[index] = parseInt(bits.slice(index << 3, (index << 3) + 8), 2);
      index++;
    }
    this.value = octets.buffer;
  }
}
// node_modules/@peculiar/asn1-schema/build/es2015/types/octet_string.js
class OctetString2 {
  buffer;
  get byteLength() {
    return this.buffer.byteLength;
  }
  get byteOffset() {
    return 0;
  }
  constructor(param) {
    if (typeof param === "number") {
      this.buffer = new ArrayBuffer(param);
    } else {
      if (isBufferSource(param)) {
        this.buffer = toArrayBuffer(param);
      } else if (Array.isArray(param)) {
        this.buffer = new Uint8Array(param).buffer;
      } else {
        this.buffer = new ArrayBuffer(0);
      }
    }
  }
  fromASN(asn) {
    if (!(asn instanceof OctetString)) {
      throw new TypeError("Argument 'asn' is not instance of ASN.1 OctetString");
    }
    this.buffer = toArrayBuffer(asn.valueBlock.valueHex);
    return this;
  }
  toASN() {
    return new OctetString({ valueHex: this.buffer });
  }
  toSchema(name) {
    return new OctetString({ name });
  }
}
// node_modules/@peculiar/asn1-schema/build/es2015/converters.js
var AsnAnyConverter = {
  fromASN: (value) => value instanceof Null ? null : toArrayBuffer(value.valueBeforeDecodeView),
  toASN: (value) => {
    if (value === null) {
      return new Null;
    }
    const schema = fromBER(value);
    if (schema.result.error) {
      throw new Error(schema.result.error);
    }
    return schema.result;
  }
};
var AsnIntegerConverter = {
  fromASN: (value) => value.valueBlock.valueHexView.byteLength >= 4 ? value.valueBlock.toString() : value.valueBlock.valueDec,
  toASN: (value) => new Integer({ value: +value })
};
var AsnEnumeratedConverter = {
  fromASN: (value) => value.valueBlock.valueDec,
  toASN: (value) => new Enumerated({ value })
};
var AsnIntegerArrayBufferConverter = {
  fromASN: (value) => toArrayBuffer(value.valueBlock.valueHexView),
  toASN: (value) => new Integer({ valueHex: value })
};
var AsnBitStringConverter = {
  fromASN: (value) => toArrayBuffer(value.valueBlock.valueHexView),
  toASN: (value) => new BitString({ valueHex: value })
};
var AsnObjectIdentifierConverter = {
  fromASN: (value) => value.valueBlock.toString(),
  toASN: (value) => new ObjectIdentifier({ value })
};
var AsnBooleanConverter = {
  fromASN: (value) => value.valueBlock.value,
  toASN: (value) => new Boolean2({ value })
};
var AsnOctetStringConverter = {
  fromASN: (value) => toArrayBuffer(value.valueBlock.valueHexView),
  toASN: (value) => new OctetString({ valueHex: value })
};
var AsnConstructedOctetStringConverter = {
  fromASN: (value) => new OctetString2(value.getValue()),
  toASN: (value) => value.toASN()
};
function createStringConverter(Asn1Type) {
  return {
    fromASN: (value) => value.valueBlock.value,
    toASN: (value) => new Asn1Type({ value })
  };
}
var AsnUtf8StringConverter = createStringConverter(Utf8String);
var AsnBmpStringConverter = createStringConverter(BmpString);
var AsnUniversalStringConverter = createStringConverter(UniversalString);
var AsnNumericStringConverter = createStringConverter(NumericString);
var AsnPrintableStringConverter = createStringConverter(PrintableString);
var AsnTeletexStringConverter = createStringConverter(TeletexString);
var AsnVideotexStringConverter = createStringConverter(VideotexString);
var AsnIA5StringConverter = createStringConverter(IA5String);
var AsnGraphicStringConverter = createStringConverter(GraphicString);
var AsnVisibleStringConverter = createStringConverter(VisibleString);
var AsnGeneralStringConverter = createStringConverter(GeneralString);
var AsnCharacterStringConverter = createStringConverter(CharacterString);
var AsnUTCTimeConverter = {
  fromASN: (value) => value.toDate(),
  toASN: (value) => new UTCTime({ valueDate: value })
};
var AsnGeneralizedTimeConverter = {
  fromASN: (value) => value.toDate(),
  toASN: (value) => new GeneralizedTime({ valueDate: value })
};
var AsnNullConverter = {
  fromASN: () => null,
  toASN: () => {
    return new Null;
  }
};
function defaultConverter(type) {
  switch (type) {
    case AsnPropTypes.Any:
      return AsnAnyConverter;
    case AsnPropTypes.BitString:
      return AsnBitStringConverter;
    case AsnPropTypes.BmpString:
      return AsnBmpStringConverter;
    case AsnPropTypes.Boolean:
      return AsnBooleanConverter;
    case AsnPropTypes.CharacterString:
      return AsnCharacterStringConverter;
    case AsnPropTypes.Enumerated:
      return AsnEnumeratedConverter;
    case AsnPropTypes.GeneralString:
      return AsnGeneralStringConverter;
    case AsnPropTypes.GeneralizedTime:
      return AsnGeneralizedTimeConverter;
    case AsnPropTypes.GraphicString:
      return AsnGraphicStringConverter;
    case AsnPropTypes.IA5String:
      return AsnIA5StringConverter;
    case AsnPropTypes.Integer:
      return AsnIntegerConverter;
    case AsnPropTypes.Null:
      return AsnNullConverter;
    case AsnPropTypes.NumericString:
      return AsnNumericStringConverter;
    case AsnPropTypes.ObjectIdentifier:
      return AsnObjectIdentifierConverter;
    case AsnPropTypes.OctetString:
      return AsnOctetStringConverter;
    case AsnPropTypes.PrintableString:
      return AsnPrintableStringConverter;
    case AsnPropTypes.TeletexString:
      return AsnTeletexStringConverter;
    case AsnPropTypes.UTCTime:
      return AsnUTCTimeConverter;
    case AsnPropTypes.UniversalString:
      return AsnUniversalStringConverter;
    case AsnPropTypes.Utf8String:
      return AsnUtf8StringConverter;
    case AsnPropTypes.VideotexString:
      return AsnVideotexStringConverter;
    case AsnPropTypes.VisibleString:
      return AsnVisibleStringConverter;
    default:
      return null;
  }
}
// node_modules/@peculiar/asn1-schema/build/es2015/helper.js
function isConvertible(target) {
  if (typeof target === "function" && target.prototype) {
    if (target.prototype.toASN && target.prototype.fromASN) {
      return true;
    } else {
      return isConvertible(target.prototype);
    }
  } else {
    return !!(target && typeof target === "object" && ("toASN" in target) && ("fromASN" in target));
  }
}
function isTypeOfArray(target) {
  if (target) {
    const proto = Object.getPrototypeOf(target);
    if (proto?.prototype?.constructor === Array) {
      return true;
    }
    return isTypeOfArray(proto);
  }
  return false;
}
function isArrayEqual(bytes1, bytes2) {
  if (!(bytes1 && bytes2)) {
    return false;
  }
  if (bytes1.byteLength !== bytes2.byteLength) {
    return false;
  }
  const b1 = new Uint8Array(bytes1);
  const b2 = new Uint8Array(bytes2);
  for (let i = 0;i < bytes1.byteLength; i++) {
    if (b1[i] !== b2[i]) {
      return false;
    }
  }
  return true;
}

// node_modules/@peculiar/asn1-schema/build/es2015/schema.js
class AsnSchemaStorage {
  items = new WeakMap;
  has(target) {
    return this.items.has(target);
  }
  get(target, checkSchema = false) {
    const schema = this.items.get(target);
    if (!schema) {
      throw new Error(`Cannot get schema for '${target.prototype.constructor.name}' target`);
    }
    if (checkSchema && !schema.schema) {
      throw new Error(`Schema '${target.prototype.constructor.name}' doesn't contain ASN.1 schema. Call 'AsnSchemaStorage.cache'.`);
    }
    return schema;
  }
  cache(target) {
    const schema = this.get(target);
    if (!schema.schema) {
      schema.schema = this.create(target, true);
    }
  }
  createDefault(target) {
    const schema = {
      type: AsnTypeTypes.Sequence,
      items: {}
    };
    const parentSchema = this.findParentSchema(target);
    if (parentSchema) {
      Object.assign(schema, parentSchema);
      schema.items = Object.assign({}, schema.items, parentSchema.items);
    }
    return schema;
  }
  create(target, useNames) {
    const schema = this.items.get(target) || this.createDefault(target);
    const asn1Value = [];
    for (const key in schema.items) {
      const item = schema.items[key];
      const name = useNames ? key : "";
      let asn1Item;
      if (typeof item.type === "number") {
        const Asn1TypeName = AsnPropTypes[item.type];
        const Asn1Type = exports_index_es[Asn1TypeName];
        if (!Asn1Type) {
          throw new Error(`Cannot get ASN1 class by name '${Asn1TypeName}'`);
        }
        asn1Item = new Asn1Type({ name });
      } else if (isConvertible(item.type)) {
        const instance = new item.type;
        asn1Item = instance.toSchema(name);
      } else if (item.optional) {
        const itemSchema = this.get(item.type);
        if (itemSchema.type === AsnTypeTypes.Choice) {
          asn1Item = new Any({ name });
        } else {
          asn1Item = this.create(item.type, false);
          asn1Item.name = name;
        }
      } else {
        asn1Item = new Any({ name });
      }
      const optional = !!item.optional || item.defaultValue !== undefined;
      if (item.repeated) {
        asn1Item.name = "";
        const Container = item.repeated === "set" ? Set2 : Sequence;
        asn1Item = new Container({
          name: "",
          value: [new Repeated({
            name,
            value: asn1Item
          })]
        });
      }
      if (item.context !== null && item.context !== undefined) {
        if (item.implicit) {
          if (typeof item.type === "number" || isConvertible(item.type)) {
            const Container = item.repeated ? Constructed : Primitive;
            asn1Value.push(new Container({
              name,
              optional,
              idBlock: {
                tagClass: 3,
                tagNumber: item.context
              }
            }));
          } else {
            this.cache(item.type);
            const isRepeated = !!item.repeated;
            let value = !isRepeated ? this.get(item.type, true).schema : asn1Item;
            value = "valueBlock" in value ? value.valueBlock.value : value.value;
            asn1Value.push(new Constructed({
              name: !isRepeated ? name : "",
              optional,
              idBlock: {
                tagClass: 3,
                tagNumber: item.context
              },
              value
            }));
          }
        } else {
          asn1Value.push(new Constructed({
            optional,
            idBlock: {
              tagClass: 3,
              tagNumber: item.context
            },
            value: [asn1Item]
          }));
        }
      } else {
        asn1Item.optional = optional;
        asn1Value.push(asn1Item);
      }
    }
    switch (schema.type) {
      case AsnTypeTypes.Sequence:
        return new Sequence({
          value: asn1Value,
          name: ""
        });
      case AsnTypeTypes.Set:
        return new Set2({
          value: asn1Value,
          name: ""
        });
      case AsnTypeTypes.Choice:
        return new Choice({
          value: asn1Value,
          name: ""
        });
      default:
        throw new Error("Unsupported ASN1 type in use");
    }
  }
  set(target, schema) {
    this.items.set(target, schema);
    return this;
  }
  findParentSchema(target) {
    const parent = Object.getPrototypeOf(target);
    if (parent) {
      const schema = this.items.get(parent);
      return schema || this.findParentSchema(parent);
    }
    return null;
  }
}

// node_modules/@peculiar/asn1-schema/build/es2015/storage.js
var schemaStorage = new AsnSchemaStorage;

// node_modules/@peculiar/asn1-schema/build/es2015/decorators.js
var AsnType = (options) => (target) => {
  let schema;
  if (!schemaStorage.has(target)) {
    schema = schemaStorage.createDefault(target);
    schemaStorage.set(target, schema);
  } else {
    schema = schemaStorage.get(target);
  }
  Object.assign(schema, options);
};
var AsnProp = (options) => (target, propertyKey) => {
  let schema;
  if (!schemaStorage.has(target.constructor)) {
    schema = schemaStorage.createDefault(target.constructor);
    schemaStorage.set(target.constructor, schema);
  } else {
    schema = schemaStorage.get(target.constructor);
  }
  const copyOptions = Object.assign({}, options);
  if (typeof copyOptions.type === "number" && !copyOptions.converter) {
    const defaultConverter2 = defaultConverter(options.type);
    if (!defaultConverter2) {
      throw new Error(`Cannot get default converter for property '${propertyKey}' of ${target.constructor.name}`);
    }
    copyOptions.converter = defaultConverter2;
  }
  copyOptions.raw = options.raw;
  schema.items[propertyKey] = copyOptions;
};
// node_modules/@peculiar/asn1-schema/build/es2015/errors/schema_validation.js
class AsnSchemaValidationError extends Error {
  schemas = [];
}
// node_modules/@peculiar/asn1-schema/build/es2015/parser.js
class AsnParser {
  static parse(data, target, options) {
    const asn1Parsed = fromBER(toArrayBuffer(data), options?.berOptions);
    if (asn1Parsed.result.error) {
      throw new Error(asn1Parsed.result.error);
    }
    const res = this.fromASN(asn1Parsed.result, target, options);
    return res;
  }
  static fromASN(asn1Schema, target, options) {
    try {
      if (isConvertible(target)) {
        const value = new target;
        return value.fromASN(asn1Schema);
      }
      const schema = schemaStorage.get(target);
      schemaStorage.cache(target);
      let targetSchema = schema.schema;
      const choiceResult = this.handleChoiceTypes(asn1Schema, schema, target, targetSchema, options);
      if (choiceResult?.result) {
        return choiceResult.result;
      }
      if (choiceResult?.targetSchema) {
        targetSchema = choiceResult.targetSchema;
      }
      const sequenceResult = this.handleSequenceTypes(asn1Schema, schema, target, targetSchema);
      const res = new target;
      if (isTypeOfArray(target)) {
        return this.handleArrayTypes(asn1Schema, schema, target, options);
      }
      this.processSchemaItems(schema, sequenceResult, res, options);
      return res;
    } catch (error) {
      if (error instanceof AsnSchemaValidationError) {
        error.schemas.push(target.name);
      }
      throw error;
    }
  }
  static handleChoiceTypes(asn1Schema, schema, target, targetSchema, options) {
    if (asn1Schema.constructor === Constructed && schema.type === AsnTypeTypes.Choice && asn1Schema.idBlock.tagClass === 3) {
      for (const key in schema.items) {
        const schemaItem = schema.items[key];
        if (schemaItem.context === asn1Schema.idBlock.tagNumber && schemaItem.implicit) {
          if (typeof schemaItem.type === "function" && schemaStorage.has(schemaItem.type)) {
            const fieldSchema = schemaStorage.get(schemaItem.type);
            if (fieldSchema && fieldSchema.type === AsnTypeTypes.Sequence) {
              const newSeq = new Sequence;
              if ("value" in asn1Schema.valueBlock && Array.isArray(asn1Schema.valueBlock.value) && "value" in newSeq.valueBlock) {
                newSeq.valueBlock.value = asn1Schema.valueBlock.value;
                const fieldValue = this.fromASN(newSeq, schemaItem.type, options);
                const res = new target;
                res[key] = fieldValue;
                return { result: res };
              }
            }
          }
        }
      }
    } else if (asn1Schema.constructor === Constructed && schema.type !== AsnTypeTypes.Choice) {
      const newTargetSchema = new Constructed({
        idBlock: {
          tagClass: 3,
          tagNumber: asn1Schema.idBlock.tagNumber
        },
        value: schema.schema.valueBlock.value
      });
      for (const key in schema.items) {
        delete asn1Schema[key];
      }
      return { targetSchema: newTargetSchema };
    }
    return null;
  }
  static handleSequenceTypes(asn1Schema, schema, target, targetSchema) {
    if (schema.type === AsnTypeTypes.Sequence) {
      const asn1ComparedSchema = compareSchema({}, asn1Schema, targetSchema);
      if (!asn1ComparedSchema.verified) {
        throw new AsnSchemaValidationError(`Data does not match to ${target.name} ASN1 schema.${asn1ComparedSchema.result.error ? ` ${asn1ComparedSchema.result.error}` : ""}`);
      }
      return asn1ComparedSchema;
    } else {
      const asn1ComparedSchema = compareSchema({}, asn1Schema, targetSchema);
      if (!asn1ComparedSchema.verified) {
        throw new AsnSchemaValidationError(`Data does not match to ${target.name} ASN1 schema.${asn1ComparedSchema.result.error ? ` ${asn1ComparedSchema.result.error}` : ""}`);
      }
      return asn1ComparedSchema;
    }
  }
  static processRepeatedField(asn1Elements, asn1Index, schemaItem) {
    let elementsToProcess = asn1Elements.slice(asn1Index);
    if (elementsToProcess.length === 1 && elementsToProcess[0].constructor.name === "Sequence") {
      const seq = elementsToProcess[0];
      if (seq.valueBlock && seq.valueBlock.value && Array.isArray(seq.valueBlock.value)) {
        elementsToProcess = seq.valueBlock.value;
      }
    }
    if (typeof schemaItem.type === "number") {
      const converter = defaultConverter(schemaItem.type);
      if (!converter)
        throw new Error(`No converter for ASN.1 type ${schemaItem.type}`);
      return elementsToProcess.filter((el) => el && el.valueBlock).map((el) => {
        try {
          return converter.fromASN(el);
        } catch {
          return;
        }
      }).filter((v) => v !== undefined);
    } else {
      return elementsToProcess.filter((el) => el && el.valueBlock).map((el) => {
        try {
          return this.fromASN(el, schemaItem.type);
        } catch {
          return;
        }
      }).filter((v) => v !== undefined);
    }
  }
  static processPrimitiveField(asn1Element, schemaItem) {
    const converter = defaultConverter(schemaItem.type);
    if (!converter)
      throw new Error(`No converter for ASN.1 type ${schemaItem.type}`);
    return converter.fromASN(asn1Element);
  }
  static isOptionalChoiceField(schemaItem) {
    return schemaItem.optional && typeof schemaItem.type === "function" && schemaStorage.has(schemaItem.type) && schemaStorage.get(schemaItem.type).type === AsnTypeTypes.Choice;
  }
  static processOptionalChoiceField(asn1Element, schemaItem) {
    try {
      const value = this.fromASN(asn1Element, schemaItem.type);
      return {
        processed: true,
        value
      };
    } catch (err) {
      if (err instanceof AsnSchemaValidationError && /Wrong values for Choice type/.test(err.message)) {
        return { processed: false };
      }
      throw err;
    }
  }
  static handleArrayTypes(asn1Schema, schema, target, options) {
    if (!(("value" in asn1Schema.valueBlock) && Array.isArray(asn1Schema.valueBlock.value))) {
      throw new Error("Cannot get items from the ASN.1 parsed value. ASN.1 object is not constructed.");
    }
    const itemType = schema.itemType;
    if (typeof itemType === "number") {
      const converter = defaultConverter(itemType);
      if (!converter) {
        throw new Error(`Cannot get default converter for array item of ${target.name} ASN1 schema`);
      }
      return target.from(asn1Schema.valueBlock.value, (element) => converter.fromASN(element));
    } else {
      return target.from(asn1Schema.valueBlock.value, (element) => this.fromASN(element, itemType, options));
    }
  }
  static processSchemaItems(schema, asn1ComparedSchema, res, options) {
    for (const key in schema.items) {
      const asn1SchemaValue = asn1ComparedSchema.result[key];
      if (!asn1SchemaValue) {
        continue;
      }
      const schemaItem = schema.items[key];
      const schemaItemType = schemaItem.type;
      let parsedValue;
      if (typeof schemaItemType === "number" || isConvertible(schemaItemType)) {
        parsedValue = this.processPrimitiveSchemaItem(asn1SchemaValue, schemaItem, schemaItemType, options);
      } else {
        parsedValue = this.processComplexSchemaItem(asn1SchemaValue, schemaItem, schemaItemType, options);
      }
      if (parsedValue && typeof parsedValue === "object" && "value" in parsedValue && "raw" in parsedValue) {
        res[key] = parsedValue.value;
        res[`${key}Raw`] = parsedValue.raw;
      } else {
        res[key] = parsedValue;
      }
    }
  }
  static processPrimitiveSchemaItem(asn1SchemaValue, schemaItem, schemaItemType, options) {
    const converter = schemaItem.converter ?? (isConvertible(schemaItemType) ? new schemaItemType : null);
    if (!converter) {
      throw new Error("Converter is empty");
    }
    if (schemaItem.repeated) {
      return this.processRepeatedPrimitiveItem(asn1SchemaValue, schemaItem, converter, options);
    } else {
      return this.processSinglePrimitiveItem(asn1SchemaValue, schemaItem, schemaItemType, converter, options);
    }
  }
  static processRepeatedPrimitiveItem(asn1SchemaValue, schemaItem, converter, options) {
    if (schemaItem.implicit) {
      const Container = schemaItem.repeated === "sequence" ? Sequence : Set2;
      const newItem = new Container;
      newItem.valueBlock = asn1SchemaValue.valueBlock;
      const newItemAsn = fromBER(newItem.toBER(false), options?.berOptions);
      if (newItemAsn.offset === -1) {
        throw new Error(`Cannot parse the child item. ${newItemAsn.result.error}`);
      }
      if (!(("value" in newItemAsn.result.valueBlock) && Array.isArray(newItemAsn.result.valueBlock.value))) {
        throw new Error("Cannot get items from the ASN.1 parsed value. ASN.1 object is not constructed.");
      }
      const value = newItemAsn.result.valueBlock.value;
      return Array.from(value, (element) => converter.fromASN(element));
    } else {
      return Array.from(asn1SchemaValue, (element) => converter.fromASN(element));
    }
  }
  static processSinglePrimitiveItem(asn1SchemaValue, schemaItem, schemaItemType, converter, options) {
    let value = asn1SchemaValue;
    if (schemaItem.implicit) {
      let newItem;
      if (isConvertible(schemaItemType)) {
        newItem = new schemaItemType().toSchema("");
      } else {
        const Asn1TypeName = AsnPropTypes[schemaItemType];
        const Asn1Type = exports_index_es[Asn1TypeName];
        if (!Asn1Type) {
          throw new Error(`Cannot get '${Asn1TypeName}' class from asn1js module`);
        }
        newItem = new Asn1Type;
      }
      newItem.valueBlock = value.valueBlock;
      value = fromBER(newItem.toBER(false), options?.berOptions).result;
    }
    return converter.fromASN(value);
  }
  static processComplexSchemaItem(asn1SchemaValue, schemaItem, schemaItemType, options) {
    if (schemaItem.repeated) {
      if (!Array.isArray(asn1SchemaValue)) {
        throw new Error("Cannot get list of items from the ASN.1 parsed value. ASN.1 value should be iterable.");
      }
      return Array.from(asn1SchemaValue, (element) => this.fromASN(element, schemaItemType, options));
    } else {
      const valueToProcess = this.handleImplicitTagging(asn1SchemaValue, schemaItem, schemaItemType);
      if (this.isOptionalChoiceField(schemaItem)) {
        try {
          return this.fromASN(valueToProcess, schemaItemType, options);
        } catch (err) {
          if (err instanceof AsnSchemaValidationError && /Wrong values for Choice type/.test(err.message)) {
            return;
          }
          throw err;
        }
      } else {
        const parsedValue = this.fromASN(valueToProcess, schemaItemType, options);
        if (schemaItem.raw) {
          return {
            value: parsedValue,
            raw: asn1SchemaValue.valueBeforeDecodeView
          };
        }
        return parsedValue;
      }
    }
  }
  static handleImplicitTagging(asn1SchemaValue, schemaItem, schemaItemType) {
    if (schemaItem.implicit && typeof schemaItem.context === "number") {
      const schema = schemaStorage.get(schemaItemType);
      if (schema.type === AsnTypeTypes.Sequence) {
        const newSeq = new Sequence;
        if ("value" in asn1SchemaValue.valueBlock && Array.isArray(asn1SchemaValue.valueBlock.value) && "value" in newSeq.valueBlock) {
          newSeq.valueBlock.value = asn1SchemaValue.valueBlock.value;
          return newSeq;
        }
      } else if (schema.type === AsnTypeTypes.Set) {
        const newSet = new Set2;
        if ("value" in asn1SchemaValue.valueBlock && Array.isArray(asn1SchemaValue.valueBlock.value) && "value" in newSet.valueBlock) {
          newSet.valueBlock.value = asn1SchemaValue.valueBlock.value;
          return newSet;
        }
      }
    }
    return asn1SchemaValue;
  }
}
// node_modules/@peculiar/asn1-schema/build/es2015/serializer.js
class AsnSerializer {
  static serialize(obj) {
    if (obj instanceof BaseBlock) {
      return obj.toBER(false);
    }
    return this.toASN(obj).toBER(false);
  }
  static toASN(obj) {
    if (obj && typeof obj === "object" && isConvertible(obj)) {
      return obj.toASN();
    }
    if (!(obj && typeof obj === "object")) {
      throw new TypeError("Parameter 1 should be type of Object.");
    }
    const target = obj.constructor;
    const schema = schemaStorage.get(target);
    schemaStorage.cache(target);
    let asn1Value = [];
    if (schema.itemType) {
      if (!Array.isArray(obj)) {
        throw new TypeError("Parameter 1 should be type of Array.");
      }
      if (typeof schema.itemType === "number") {
        const converter = defaultConverter(schema.itemType);
        if (!converter) {
          throw new Error(`Cannot get default converter for array item of ${target.name} ASN1 schema`);
        }
        asn1Value = obj.map((o) => converter.toASN(o));
      } else {
        asn1Value = obj.map((o) => this.toAsnItem({ type: schema.itemType }, "[]", target, o));
      }
    } else {
      for (const key in schema.items) {
        const schemaItem = schema.items[key];
        const objProp = obj[key];
        if (objProp === undefined || schemaItem.defaultValue === objProp || typeof schemaItem.defaultValue === "object" && typeof objProp === "object" && isArrayEqual(this.serialize(schemaItem.defaultValue), this.serialize(objProp))) {
          continue;
        }
        const asn1Item = AsnSerializer.toAsnItem(schemaItem, key, target, objProp);
        if (typeof schemaItem.context === "number") {
          if (schemaItem.implicit) {
            if (!schemaItem.repeated && (typeof schemaItem.type === "number" || isConvertible(schemaItem.type))) {
              const value = {};
              value.valueHex = asn1Item instanceof Null ? toArrayBuffer(asn1Item.valueBeforeDecodeView) : asn1Item.valueBlock.toBER();
              asn1Value.push(new Primitive({
                optional: schemaItem.optional,
                idBlock: {
                  tagClass: 3,
                  tagNumber: schemaItem.context
                },
                ...value
              }));
            } else {
              asn1Value.push(new Constructed({
                optional: schemaItem.optional,
                idBlock: {
                  tagClass: 3,
                  tagNumber: schemaItem.context
                },
                value: asn1Item.valueBlock.value
              }));
            }
          } else {
            asn1Value.push(new Constructed({
              optional: schemaItem.optional,
              idBlock: {
                tagClass: 3,
                tagNumber: schemaItem.context
              },
              value: [asn1Item]
            }));
          }
        } else if (schemaItem.repeated) {
          asn1Value = asn1Value.concat(asn1Item);
        } else {
          asn1Value.push(asn1Item);
        }
      }
    }
    let asnSchema;
    switch (schema.type) {
      case AsnTypeTypes.Sequence:
        asnSchema = new Sequence({ value: asn1Value });
        break;
      case AsnTypeTypes.Set:
        asnSchema = new Set2({ value: asn1Value });
        break;
      case AsnTypeTypes.Choice:
        if (!asn1Value[0]) {
          throw new Error(`Schema '${target.name}' has wrong data. Choice cannot be empty.`);
        }
        asnSchema = asn1Value[0];
        break;
    }
    return asnSchema;
  }
  static toAsnItem(schemaItem, key, target, objProp) {
    let asn1Item;
    if (typeof schemaItem.type === "number") {
      const converter = schemaItem.converter;
      if (!converter) {
        throw new Error(`Property '${key}' doesn't have converter for type ${AsnPropTypes[schemaItem.type]} in schema '${target.name}'`);
      }
      if (schemaItem.repeated) {
        if (!Array.isArray(objProp)) {
          throw new TypeError("Parameter 'objProp' should be type of Array.");
        }
        const items = Array.from(objProp, (element) => converter.toASN(element));
        const Container = schemaItem.repeated === "sequence" ? Sequence : Set2;
        asn1Item = new Container({ value: items });
      } else {
        asn1Item = converter.toASN(objProp);
      }
    } else {
      if (schemaItem.repeated) {
        if (!Array.isArray(objProp)) {
          throw new TypeError("Parameter 'objProp' should be type of Array.");
        }
        const items = Array.from(objProp, (element) => this.toASN(element));
        const Container = schemaItem.repeated === "sequence" ? Sequence : Set2;
        asn1Item = new Container({ value: items });
      } else {
        asn1Item = this.toASN(objProp);
      }
    }
    return asn1Item;
  }
}
// node_modules/@peculiar/asn1-schema/build/es2015/objects.js
class AsnArray extends Array {
  constructor(items = []) {
    if (typeof items === "number") {
      super(items);
    } else {
      super();
      for (const item of items) {
        this.push(item);
      }
    }
  }
}
// node_modules/@peculiar/asn1-schema/build/es2015/convert.js
class AsnConvert {
  static serialize(obj) {
    return AsnSerializer.serialize(obj);
  }
  static parse(data, target, options) {
    return AsnParser.parse(data, target, options);
  }
  static toString(data, options) {
    const buf = isBufferSource(data) ? toArrayBuffer(data) : AsnConvert.serialize(data);
    const asn = fromBER(buf, options?.berOptions);
    if (asn.offset === -1) {
      throw new Error(`Cannot decode ASN.1 data. ${asn.result.error}`);
    }
    return asn.result.toString();
  }
}
// node_modules/tslib/modules/index.js
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension
} = import_tslib.default;
// node_modules/@peculiar/utils/build/esm/encoding/hex.js
var exports_hex = {};
__export(exports_hex, {
  parse: () => parse,
  normalize: () => normalize2,
  is: () => is,
  hex: () => hex,
  formats: () => formats,
  format: () => format,
  encode: () => encode2,
  decode: () => decode
});
var HEX_CHARACTER_REGEX = /^[0-9a-f]$/i;
var COMMON_SEPARATORS = [" ", "\t", `
`, "\r", ":", "-", "."];
function resolveSeparators(options) {
  if (options.separators === "none") {
    return [];
  }
  if (!options.separators || options.separators === "common") {
    return COMMON_SEPARATORS;
  }
  return options.separators;
}
function validateSeparator(separator) {
  if (!separator) {
    throw new TypeError("Hex separators must be non-empty strings");
  }
}
function matchSeparator(text, index, separators) {
  for (const separator of separators) {
    if (text.startsWith(separator, index)) {
      return separator;
    }
  }
  return;
}
function detectCase(text) {
  const hasUpper = /[A-F]/.test(text);
  const hasLower = /[a-f]/.test(text);
  return hasUpper && !hasLower ? "upper" : "lower";
}
function detectLineSeparator(text) {
  const match = /\r\n|\n/.exec(text);
  if (!match) {
    return;
  }
  return match[0] === `\r
` ? `\r
` : `
`;
}
function compactForDetection(text) {
  return text.replace(/[^0-9a-f]/gi, "");
}
function detectGroup(text) {
  const segments = text.match(/[0-9A-Fa-f]+|[^0-9A-Fa-f]+/g) ?? [];
  if (segments.length < 3) {
    return;
  }
  const hexSegments = segments.filter((_, index) => index % 2 === 0);
  const separators = segments.filter((_, index) => index % 2 === 1);
  const separator = separators[0];
  if (!separator || separators.some((item) => item !== separator)) {
    return;
  }
  if (hexSegments.some((segment) => segment.length === 0 || segment.length % 2 !== 0)) {
    return;
  }
  const firstLength = hexSegments[0]?.length ?? 0;
  if (!firstLength) {
    return;
  }
  if (hexSegments.slice(0, -1).some((segment) => segment.length !== firstLength)) {
    return;
  }
  if ((hexSegments[hexSegments.length - 1]?.length ?? 0) > firstLength) {
    return;
  }
  return {
    size: firstLength / 2,
    separator
  };
}
function detectFormat(text) {
  const trimmed = text.trim();
  const prefix = /^0x/i.test(trimmed) ? "0x" : "";
  const body2 = prefix ? trimmed.slice(2) : trimmed;
  const lineSeparator = detectLineSeparator(body2);
  const lines = body2.split(/\r\n|\n/).filter((line) => line.length > 0);
  const sampleLine = lines[0]?.trim() ?? "";
  const group = detectGroup(sampleLine);
  const format = {
    case: detectCase(trimmed),
    prefix
  };
  if (group) {
    format.group = group;
  }
  if (lineSeparator && lines.length > 1) {
    const firstLineBytes = compactForDetection(lines[0] ?? "").length / 2;
    if (firstLineBytes > 0 && lines.slice(0, -1).every((line) => compactForDetection(line).length / 2 === firstLineBytes)) {
      format.line = {
        bytesPerLine: firstLineBytes,
        separator: lineSeparator
      };
    }
  }
  return format;
}
function normalizeText(text, options) {
  const allowPrefix = options.allowPrefix ?? true;
  const separators = [...resolveSeparators(options)].sort((left, right) => right.length - left.length);
  for (const separator of separators) {
    validateSeparator(separator);
  }
  let working = text.trim();
  if (/^0x/i.test(working)) {
    if (!allowPrefix) {
      throw new TypeError("Hexadecimal text must not include a 0x prefix");
    }
    working = working.slice(2);
  }
  let normalized = "";
  let lastTokenWasSeparator = false;
  for (let index = 0;index < working.length; ) {
    const character = working[index] ?? "";
    if (HEX_CHARACTER_REGEX.test(character)) {
      normalized += character;
      lastTokenWasSeparator = false;
      index += 1;
      continue;
    }
    const separator = matchSeparator(working, index, separators);
    if (!separator) {
      throw new TypeError("Input is not valid hexadecimal text");
    }
    if (options.strict && (lastTokenWasSeparator || normalized.length === 0)) {
      throw new TypeError("Hexadecimal text contains misplaced separators");
    }
    lastTokenWasSeparator = true;
    index += separator.length;
  }
  if (options.strict && lastTokenWasSeparator && normalized.length > 0) {
    throw new TypeError("Hexadecimal text must not end with a separator");
  }
  if (normalized.length % 2 !== 0) {
    if (!options.allowOddLength) {
      throw new TypeError("Hexadecimal text must contain an even number of characters");
    }
    normalized = `0${normalized}`;
  }
  return normalized.toLowerCase();
}
function groupPairs(pairs, group) {
  if (!group) {
    return pairs.join("");
  }
  if (!Number.isInteger(group.size) || group.size < 1) {
    throw new RangeError("Hex group size must be a positive integer");
  }
  const chunks = [];
  for (let index = 0;index < pairs.length; index += group.size) {
    chunks.push(pairs.slice(index, index + group.size).join(""));
  }
  return chunks.join(group.separator);
}
function normalize2(text, options = {}) {
  return normalizeText(text, options);
}
function is(text, options = {}) {
  if (typeof text !== "string") {
    return false;
  }
  try {
    normalize2(text, options);
    return true;
  } catch {
    return false;
  }
}
function encode2(data, options = {}) {
  const bytes = toUint8Array(data);
  const casing = options.case ?? "lower";
  const pairs = Array.from(bytes, (byte) => {
    const text = byte.toString(16).padStart(2, "0");
    return casing === "upper" ? text.toUpperCase() : text;
  });
  let body2 = "";
  if (options.line) {
    const bytesPerLine = options.line.bytesPerLine;
    if (!Number.isInteger(bytesPerLine) || bytesPerLine < 1) {
      throw new RangeError("Hex bytesPerLine must be a positive integer");
    }
    const separator = options.line.separator ?? `
`;
    const lines = [];
    for (let index = 0;index < pairs.length; index += bytesPerLine) {
      lines.push(groupPairs(pairs.slice(index, index + bytesPerLine), options.group));
    }
    body2 = lines.join(separator);
  } else {
    body2 = groupPairs(pairs, options.group);
  }
  return `${options.prefix ?? ""}${body2}`;
}
function decode(text, options = {}) {
  const normalized = normalize2(text, options);
  const result = new Uint8Array(normalized.length / 2);
  for (let i = 0;i < normalized.length; i += 2) {
    result[i / 2] = Number.parseInt(normalized.slice(i, i + 2), 16);
  }
  return result;
}
function parse(text, options = {}) {
  const normalized = normalize2(text, options);
  return {
    bytes: decode(normalized),
    format: detectFormat(text),
    normalized
  };
}
function format(data, value) {
  return encode2(data, value);
}
var formats = {
  compact: Object.freeze({}),
  upper: Object.freeze({ case: "upper" }),
  colon: Object.freeze({ group: { size: 1, separator: ":" } }),
  colonUpper: Object.freeze({ case: "upper", group: { size: 1, separator: ":" } }),
  groupsOf4: Object.freeze({ group: { size: 4, separator: " " } }),
  prefixed: Object.freeze({ prefix: "0x" })
};
var hex = { encode: encode2, decode, format, formats, is, normalize: normalize2, parse };
// node_modules/@peculiar/asn1-x509/build/es2015/ip_converter.js
class IpConverter {
  static isIPv4(ip) {
    return /^(\d{1,3}\.){3}\d{1,3}$/.test(ip);
  }
  static parseIPv4(ip) {
    const parts = ip.split(".");
    if (parts.length !== 4) {
      throw new Error("Invalid IPv4 address");
    }
    return parts.map((part) => {
      const num = parseInt(part, 10);
      if (isNaN(num) || num < 0 || num > 255) {
        throw new Error("Invalid IPv4 address part");
      }
      return num;
    });
  }
  static parseIPv6(ip) {
    const expandedIP = this.expandIPv6(ip);
    const parts = expandedIP.split(":");
    if (parts.length !== 8) {
      throw new Error("Invalid IPv6 address");
    }
    return parts.reduce((bytes, part) => {
      const num = parseInt(part, 16);
      if (isNaN(num) || num < 0 || num > 65535) {
        throw new Error("Invalid IPv6 address part");
      }
      bytes.push(num >> 8 & 255);
      bytes.push(num & 255);
      return bytes;
    }, []);
  }
  static expandIPv6(ip) {
    if (!ip.includes("::")) {
      return ip;
    }
    const parts = ip.split("::");
    if (parts.length > 2) {
      throw new Error("Invalid IPv6 address");
    }
    const left = parts[0] ? parts[0].split(":") : [];
    const right = parts[1] ? parts[1].split(":") : [];
    const missing = 8 - (left.length + right.length);
    if (missing < 0) {
      throw new Error("Invalid IPv6 address");
    }
    return [...left, ...Array(missing).fill("0"), ...right].join(":");
  }
  static formatIPv6(bytes) {
    const parts = [];
    for (let i = 0;i < 16; i += 2) {
      parts.push((bytes[i] << 8 | bytes[i + 1]).toString(16));
    }
    return this.compressIPv6(parts.join(":"));
  }
  static compressIPv6(ip) {
    const parts = ip.split(":");
    let longestZeroStart = -1;
    let longestZeroLength = 0;
    let currentZeroStart = -1;
    let currentZeroLength = 0;
    for (let i = 0;i < parts.length; i++) {
      if (parts[i] === "0") {
        if (currentZeroStart === -1) {
          currentZeroStart = i;
        }
        currentZeroLength++;
      } else {
        if (currentZeroLength > longestZeroLength) {
          longestZeroStart = currentZeroStart;
          longestZeroLength = currentZeroLength;
        }
        currentZeroStart = -1;
        currentZeroLength = 0;
      }
    }
    if (currentZeroLength > longestZeroLength) {
      longestZeroStart = currentZeroStart;
      longestZeroLength = currentZeroLength;
    }
    if (longestZeroLength > 1) {
      const before = parts.slice(0, longestZeroStart).join(":");
      const after = parts.slice(longestZeroStart + longestZeroLength).join(":");
      return `${before}::${after}`;
    }
    return ip;
  }
  static parseCIDR(text) {
    const [addr, prefixStr] = text.split("/");
    const prefix = parseInt(prefixStr, 10);
    if (this.isIPv4(addr)) {
      if (prefix < 0 || prefix > 32) {
        throw new Error("Invalid IPv4 prefix length");
      }
      return [this.parseIPv4(addr), prefix];
    } else {
      if (prefix < 0 || prefix > 128) {
        throw new Error("Invalid IPv6 prefix length");
      }
      return [this.parseIPv6(addr), prefix];
    }
  }
  static decodeIP(value) {
    if (value.length === 64 && parseInt(value, 16) === 0) {
      return "::/0";
    }
    if (value.length !== 16) {
      return value;
    }
    const mask = parseInt(value.slice(8), 16).toString(2).split("").reduce((a, k) => a + +k, 0);
    let ip = value.slice(0, 8).replace(/(.{2})/g, (match) => `${parseInt(match, 16)}.`);
    ip = ip.slice(0, -1);
    return `${ip}/${mask}`;
  }
  static toString(buf) {
    const uint8 = new Uint8Array(buf);
    if (uint8.length === 4) {
      return Array.from(uint8).join(".");
    }
    if (uint8.length === 16) {
      return this.formatIPv6(uint8);
    }
    if (uint8.length === 8 || uint8.length === 32) {
      const half = uint8.length / 2;
      const addrBytes = uint8.slice(0, half);
      const maskBytes = uint8.slice(half);
      const isAllZeros = uint8.every((byte) => byte === 0);
      if (isAllZeros) {
        return uint8.length === 8 ? "0.0.0.0/0" : "::/0";
      }
      const prefixLen = maskBytes.reduce((a, b) => a + (b.toString(2).match(/1/g) || []).length, 0);
      if (uint8.length === 8) {
        const addrStr = Array.from(addrBytes).join(".");
        return `${addrStr}/${prefixLen}`;
      } else {
        const addrStr = this.formatIPv6(addrBytes);
        return `${addrStr}/${prefixLen}`;
      }
    }
    return this.decodeIP(exports_hex.encode(buf));
  }
  static fromString(text) {
    if (text.includes("/")) {
      const [addr, prefix] = this.parseCIDR(text);
      const maskBytes = new Uint8Array(addr.length);
      let bitsLeft = prefix;
      for (let i = 0;i < maskBytes.length; i++) {
        if (bitsLeft >= 8) {
          maskBytes[i] = 255;
          bitsLeft -= 8;
        } else if (bitsLeft > 0) {
          maskBytes[i] = 255 << 8 - bitsLeft;
          bitsLeft = 0;
        }
      }
      const out = new Uint8Array(addr.length * 2);
      out.set(addr, 0);
      out.set(maskBytes, addr.length);
      return out.buffer;
    }
    const bytes = this.isIPv4(text) ? this.parseIPv4(text) : this.parseIPv6(text);
    return new Uint8Array(bytes).buffer;
  }
}

// node_modules/@peculiar/asn1-x509/build/es2015/name.js
var RelativeDistinguishedName_1;
var RDNSequence_1;
var Name_1;
var DirectoryString = class DirectoryString2 {
  teletexString;
  printableString;
  universalString;
  utf8String;
  bmpString;
  constructor(params = {}) {
    Object.assign(this, params);
  }
  toString() {
    return this.bmpString || this.printableString || this.teletexString || this.universalString || this.utf8String || "";
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.TeletexString })
], DirectoryString.prototype, "teletexString", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.PrintableString })
], DirectoryString.prototype, "printableString", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.UniversalString })
], DirectoryString.prototype, "universalString", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Utf8String })
], DirectoryString.prototype, "utf8String", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BmpString })
], DirectoryString.prototype, "bmpString", undefined);
DirectoryString = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], DirectoryString);
var AttributeValue = class AttributeValue2 extends DirectoryString {
  ia5String;
  anyValue;
  constructor(params = {}) {
    super(params);
    Object.assign(this, params);
  }
  toString() {
    return this.ia5String || (this.anyValue ? exports_hex.encode(this.anyValue) : super.toString());
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.IA5String })
], AttributeValue.prototype, "ia5String", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Any })
], AttributeValue.prototype, "anyValue", undefined);
AttributeValue = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], AttributeValue);
class AttributeTypeAndValue {
  type = "";
  value = new AttributeValue;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], AttributeTypeAndValue.prototype, "type", undefined);
__decorate([
  AsnProp({ type: AttributeValue })
], AttributeTypeAndValue.prototype, "value", undefined);
var RelativeDistinguishedName = RelativeDistinguishedName_1 = class RelativeDistinguishedName2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, RelativeDistinguishedName_1.prototype);
  }
};
RelativeDistinguishedName = RelativeDistinguishedName_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: AttributeTypeAndValue
  })
], RelativeDistinguishedName);
var RDNSequence = RDNSequence_1 = class RDNSequence2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, RDNSequence_1.prototype);
  }
};
RDNSequence = RDNSequence_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: RelativeDistinguishedName
  })
], RDNSequence);
var Name = Name_1 = class Name2 extends RDNSequence {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, Name_1.prototype);
  }
};
Name = Name_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], Name);

// node_modules/@peculiar/asn1-x509/build/es2015/general_name.js
var AsnIpConverter = {
  fromASN: (value) => IpConverter.toString(AsnOctetStringConverter.fromASN(value)),
  toASN: (value) => AsnOctetStringConverter.toASN(IpConverter.fromString(value))
};

class OtherName {
  typeId = "";
  value = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], OtherName.prototype, "typeId", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    context: 0
  })
], OtherName.prototype, "value", undefined);

class EDIPartyName {
  nameAssigner;
  partyName = new DirectoryString;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: DirectoryString,
    optional: true,
    context: 0,
    implicit: true
  })
], EDIPartyName.prototype, "nameAssigner", undefined);
__decorate([
  AsnProp({
    type: DirectoryString,
    context: 1,
    implicit: true
  })
], EDIPartyName.prototype, "partyName", undefined);
var GeneralName = class GeneralName2 {
  otherName;
  rfc822Name;
  dNSName;
  x400Address;
  directoryName;
  ediPartyName;
  uniformResourceIdentifier;
  iPAddress;
  registeredID;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: OtherName,
    context: 0,
    implicit: true
  })
], GeneralName.prototype, "otherName", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.IA5String,
    context: 1,
    implicit: true
  })
], GeneralName.prototype, "rfc822Name", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.IA5String,
    context: 2,
    implicit: true
  })
], GeneralName.prototype, "dNSName", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    context: 3,
    implicit: true
  })
], GeneralName.prototype, "x400Address", undefined);
__decorate([
  AsnProp({
    type: Name,
    context: 4,
    implicit: false
  })
], GeneralName.prototype, "directoryName", undefined);
__decorate([
  AsnProp({
    type: EDIPartyName,
    context: 5
  })
], GeneralName.prototype, "ediPartyName", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.IA5String,
    context: 6,
    implicit: true
  })
], GeneralName.prototype, "uniformResourceIdentifier", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.OctetString,
    context: 7,
    implicit: true,
    converter: AsnIpConverter
  })
], GeneralName.prototype, "iPAddress", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier,
    context: 8,
    implicit: true
  })
], GeneralName.prototype, "registeredID", undefined);
GeneralName = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], GeneralName);

// node_modules/@peculiar/asn1-x509/build/es2015/object_identifiers.js
var id_pkix = "1.3.6.1.5.5.7";
var id_pe = `${id_pkix}.1`;
var id_qt = `${id_pkix}.2`;
var id_kp = `${id_pkix}.3`;
var id_ad = `${id_pkix}.48`;
var id_qt_csp = `${id_qt}.1`;
var id_qt_unotice = `${id_qt}.2`;
var id_ad_ocsp = `${id_ad}.1`;
var id_ad_caIssuers = `${id_ad}.2`;
var id_ad_timeStamping = `${id_ad}.3`;
var id_ad_caRepository = `${id_ad}.5`;
var id_ce = "2.5.29";

// node_modules/@peculiar/asn1-x509/build/es2015/extensions/authority_information_access.js
var AuthorityInfoAccessSyntax_1;
var id_pe_authorityInfoAccess = `${id_pe}.1`;

class AccessDescription {
  accessMethod = "";
  accessLocation = new GeneralName;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], AccessDescription.prototype, "accessMethod", undefined);
__decorate([
  AsnProp({ type: GeneralName })
], AccessDescription.prototype, "accessLocation", undefined);
var AuthorityInfoAccessSyntax = AuthorityInfoAccessSyntax_1 = class AuthorityInfoAccessSyntax2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, AuthorityInfoAccessSyntax_1.prototype);
  }
};
AuthorityInfoAccessSyntax = AuthorityInfoAccessSyntax_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: AccessDescription
  })
], AuthorityInfoAccessSyntax);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/authority_key_identifier.js
var id_ce_authorityKeyIdentifier = `${id_ce}.35`;

class KeyIdentifier extends OctetString2 {
}

class AuthorityKeyIdentifier {
  keyIdentifier;
  authorityCertIssuer;
  authorityCertSerialNumber;
  constructor(params = {}) {
    if (params) {
      Object.assign(this, params);
    }
  }
}
__decorate([
  AsnProp({
    type: KeyIdentifier,
    context: 0,
    optional: true,
    implicit: true
  })
], AuthorityKeyIdentifier.prototype, "keyIdentifier", undefined);
__decorate([
  AsnProp({
    type: GeneralName,
    context: 1,
    optional: true,
    implicit: true,
    repeated: "sequence"
  })
], AuthorityKeyIdentifier.prototype, "authorityCertIssuer", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 2,
    optional: true,
    implicit: true,
    converter: AsnIntegerArrayBufferConverter
  })
], AuthorityKeyIdentifier.prototype, "authorityCertSerialNumber", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/basic_constraints.js
var id_ce_basicConstraints = `${id_ce}.19`;

class BasicConstraints {
  cA = false;
  pathLenConstraint;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AsnPropTypes.Boolean,
    defaultValue: false
  })
], BasicConstraints.prototype, "cA", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    optional: true
  })
], BasicConstraints.prototype, "pathLenConstraint", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/general_names.js
var GeneralNames_1;
var GeneralNames = GeneralNames_1 = class GeneralNames2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, GeneralNames_1.prototype);
  }
};
GeneralNames = GeneralNames_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: GeneralName
  })
], GeneralNames);

// node_modules/@peculiar/asn1-x509/build/es2015/extensions/certificate_issuer.js
var CertificateIssuer_1;
var id_ce_certificateIssuer = `${id_ce}.29`;
var CertificateIssuer = CertificateIssuer_1 = class CertificateIssuer2 extends GeneralNames {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, CertificateIssuer_1.prototype);
  }
};
CertificateIssuer = CertificateIssuer_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], CertificateIssuer);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/certificate_policies.js
var CertificatePolicies_1;
var id_ce_certificatePolicies = `${id_ce}.32`;
var id_ce_certificatePolicies_anyPolicy = `${id_ce_certificatePolicies}.0`;
var DisplayText = class DisplayText2 {
  ia5String;
  visibleString;
  bmpString;
  utf8String;
  constructor(params = {}) {
    Object.assign(this, params);
  }
  toString() {
    return this.ia5String || this.visibleString || this.bmpString || this.utf8String || "";
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.IA5String })
], DisplayText.prototype, "ia5String", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.VisibleString })
], DisplayText.prototype, "visibleString", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BmpString })
], DisplayText.prototype, "bmpString", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Utf8String })
], DisplayText.prototype, "utf8String", undefined);
DisplayText = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], DisplayText);
class NoticeReference {
  organization = new DisplayText;
  noticeNumbers = [];
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: DisplayText })
], NoticeReference.prototype, "organization", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    repeated: "sequence"
  })
], NoticeReference.prototype, "noticeNumbers", undefined);

class UserNotice {
  noticeRef;
  explicitText;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: NoticeReference,
    optional: true
  })
], UserNotice.prototype, "noticeRef", undefined);
__decorate([
  AsnProp({
    type: DisplayText,
    optional: true
  })
], UserNotice.prototype, "explicitText", undefined);
var Qualifier = class Qualifier2 {
  cPSuri;
  userNotice;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.IA5String })
], Qualifier.prototype, "cPSuri", undefined);
__decorate([
  AsnProp({ type: UserNotice })
], Qualifier.prototype, "userNotice", undefined);
Qualifier = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], Qualifier);
class PolicyQualifierInfo {
  policyQualifierId = "";
  qualifier = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], PolicyQualifierInfo.prototype, "policyQualifierId", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Any })
], PolicyQualifierInfo.prototype, "qualifier", undefined);

class PolicyInformation {
  policyIdentifier = "";
  policyQualifiers;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], PolicyInformation.prototype, "policyIdentifier", undefined);
__decorate([
  AsnProp({
    type: PolicyQualifierInfo,
    repeated: "sequence",
    optional: true
  })
], PolicyInformation.prototype, "policyQualifiers", undefined);
var CertificatePolicies = CertificatePolicies_1 = class CertificatePolicies2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, CertificatePolicies_1.prototype);
  }
};
CertificatePolicies = CertificatePolicies_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: PolicyInformation
  })
], CertificatePolicies);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/crl_number.js
var id_ce_cRLNumber = `${id_ce}.20`;
var CRLNumber = class CRLNumber2 {
  value;
  constructor(value = 0) {
    this.value = value;
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], CRLNumber.prototype, "value", undefined);
CRLNumber = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], CRLNumber);

// node_modules/@peculiar/asn1-x509/build/es2015/extensions/crl_delta_indicator.js
var id_ce_deltaCRLIndicator = `${id_ce}.27`;
var BaseCRLNumber = class BaseCRLNumber2 extends CRLNumber {
};
BaseCRLNumber = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], BaseCRLNumber);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/crl_distribution_points.js
var CRLDistributionPoints_1;
var id_ce_cRLDistributionPoints = `${id_ce}.31`;
var ReasonFlags;
(function(ReasonFlags2) {
  ReasonFlags2[ReasonFlags2["unused"] = 1] = "unused";
  ReasonFlags2[ReasonFlags2["keyCompromise"] = 2] = "keyCompromise";
  ReasonFlags2[ReasonFlags2["cACompromise"] = 4] = "cACompromise";
  ReasonFlags2[ReasonFlags2["affiliationChanged"] = 8] = "affiliationChanged";
  ReasonFlags2[ReasonFlags2["superseded"] = 16] = "superseded";
  ReasonFlags2[ReasonFlags2["cessationOfOperation"] = 32] = "cessationOfOperation";
  ReasonFlags2[ReasonFlags2["certificateHold"] = 64] = "certificateHold";
  ReasonFlags2[ReasonFlags2["privilegeWithdrawn"] = 128] = "privilegeWithdrawn";
  ReasonFlags2[ReasonFlags2["aACompromise"] = 256] = "aACompromise";
})(ReasonFlags || (ReasonFlags = {}));

class Reason extends BitString2 {
  toJSON() {
    const res = [];
    const flags = this.toNumber();
    if (flags & ReasonFlags.aACompromise) {
      res.push("aACompromise");
    }
    if (flags & ReasonFlags.affiliationChanged) {
      res.push("affiliationChanged");
    }
    if (flags & ReasonFlags.cACompromise) {
      res.push("cACompromise");
    }
    if (flags & ReasonFlags.certificateHold) {
      res.push("certificateHold");
    }
    if (flags & ReasonFlags.cessationOfOperation) {
      res.push("cessationOfOperation");
    }
    if (flags & ReasonFlags.keyCompromise) {
      res.push("keyCompromise");
    }
    if (flags & ReasonFlags.privilegeWithdrawn) {
      res.push("privilegeWithdrawn");
    }
    if (flags & ReasonFlags.superseded) {
      res.push("superseded");
    }
    if (flags & ReasonFlags.unused) {
      res.push("unused");
    }
    return res;
  }
  toString() {
    return `[${this.toJSON().join(", ")}]`;
  }
}
var DistributionPointName = class DistributionPointName2 {
  fullName;
  nameRelativeToCRLIssuer;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: GeneralName,
    context: 0,
    repeated: "sequence",
    implicit: true
  })
], DistributionPointName.prototype, "fullName", undefined);
__decorate([
  AsnProp({
    type: RelativeDistinguishedName,
    context: 1,
    implicit: true
  })
], DistributionPointName.prototype, "nameRelativeToCRLIssuer", undefined);
DistributionPointName = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], DistributionPointName);
class DistributionPoint {
  distributionPoint;
  reasons;
  cRLIssuer;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: DistributionPointName,
    context: 0,
    optional: true
  })
], DistributionPoint.prototype, "distributionPoint", undefined);
__decorate([
  AsnProp({
    type: Reason,
    context: 1,
    optional: true,
    implicit: true
  })
], DistributionPoint.prototype, "reasons", undefined);
__decorate([
  AsnProp({
    type: GeneralName,
    context: 2,
    optional: true,
    repeated: "sequence",
    implicit: true
  })
], DistributionPoint.prototype, "cRLIssuer", undefined);
var CRLDistributionPoints = CRLDistributionPoints_1 = class CRLDistributionPoints2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, CRLDistributionPoints_1.prototype);
  }
};
CRLDistributionPoints = CRLDistributionPoints_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: DistributionPoint
  })
], CRLDistributionPoints);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/crl_freshest.js
var FreshestCRL_1;
var id_ce_freshestCRL = `${id_ce}.46`;
var FreshestCRL = FreshestCRL_1 = class FreshestCRL2 extends CRLDistributionPoints {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, FreshestCRL_1.prototype);
  }
};
FreshestCRL = FreshestCRL_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: DistributionPoint
  })
], FreshestCRL);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/crl_issuing_distribution_point.js
var id_ce_issuingDistributionPoint = `${id_ce}.28`;

class IssuingDistributionPoint {
  static ONLY = false;
  distributionPoint;
  onlyContainsUserCerts = IssuingDistributionPoint.ONLY;
  onlyContainsCACerts = IssuingDistributionPoint.ONLY;
  onlySomeReasons;
  indirectCRL = IssuingDistributionPoint.ONLY;
  onlyContainsAttributeCerts = IssuingDistributionPoint.ONLY;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: DistributionPointName,
    context: 0,
    optional: true
  })
], IssuingDistributionPoint.prototype, "distributionPoint", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Boolean,
    context: 1,
    defaultValue: IssuingDistributionPoint.ONLY,
    implicit: true
  })
], IssuingDistributionPoint.prototype, "onlyContainsUserCerts", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Boolean,
    context: 2,
    defaultValue: IssuingDistributionPoint.ONLY,
    implicit: true
  })
], IssuingDistributionPoint.prototype, "onlyContainsCACerts", undefined);
__decorate([
  AsnProp({
    type: Reason,
    context: 3,
    optional: true,
    implicit: true
  })
], IssuingDistributionPoint.prototype, "onlySomeReasons", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Boolean,
    context: 4,
    defaultValue: IssuingDistributionPoint.ONLY,
    implicit: true
  })
], IssuingDistributionPoint.prototype, "indirectCRL", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Boolean,
    context: 5,
    defaultValue: IssuingDistributionPoint.ONLY,
    implicit: true
  })
], IssuingDistributionPoint.prototype, "onlyContainsAttributeCerts", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/crl_reason.js
var id_ce_cRLReasons = `${id_ce}.21`;
var CRLReasons;
(function(CRLReasons2) {
  CRLReasons2[CRLReasons2["unspecified"] = 0] = "unspecified";
  CRLReasons2[CRLReasons2["keyCompromise"] = 1] = "keyCompromise";
  CRLReasons2[CRLReasons2["cACompromise"] = 2] = "cACompromise";
  CRLReasons2[CRLReasons2["affiliationChanged"] = 3] = "affiliationChanged";
  CRLReasons2[CRLReasons2["superseded"] = 4] = "superseded";
  CRLReasons2[CRLReasons2["cessationOfOperation"] = 5] = "cessationOfOperation";
  CRLReasons2[CRLReasons2["certificateHold"] = 6] = "certificateHold";
  CRLReasons2[CRLReasons2["removeFromCRL"] = 8] = "removeFromCRL";
  CRLReasons2[CRLReasons2["privilegeWithdrawn"] = 9] = "privilegeWithdrawn";
  CRLReasons2[CRLReasons2["aACompromise"] = 10] = "aACompromise";
})(CRLReasons || (CRLReasons = {}));
var CRLReason = class CRLReason2 {
  reason = CRLReasons.unspecified;
  constructor(reason = CRLReasons.unspecified) {
    this.reason = reason;
  }
  toJSON() {
    return CRLReasons[this.reason];
  }
  toString() {
    return this.toJSON();
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.Enumerated })
], CRLReason.prototype, "reason", undefined);
CRLReason = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], CRLReason);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/extended_key_usage.js
var ExtendedKeyUsage_1;
var id_ce_extKeyUsage = `${id_ce}.37`;
var ExtendedKeyUsage = ExtendedKeyUsage_1 = class ExtendedKeyUsage2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, ExtendedKeyUsage_1.prototype);
  }
};
ExtendedKeyUsage = ExtendedKeyUsage_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: AsnPropTypes.ObjectIdentifier
  })
], ExtendedKeyUsage);
var anyExtendedKeyUsage = `${id_ce_extKeyUsage}.0`;
var id_kp_serverAuth = `${id_kp}.1`;
var id_kp_clientAuth = `${id_kp}.2`;
var id_kp_codeSigning = `${id_kp}.3`;
var id_kp_emailProtection = `${id_kp}.4`;
var id_kp_timeStamping = `${id_kp}.8`;
var id_kp_OCSPSigning = `${id_kp}.9`;
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/inhibit_any_policy.js
var id_ce_inhibitAnyPolicy = `${id_ce}.54`;
var InhibitAnyPolicy = class InhibitAnyPolicy2 {
  value;
  constructor(value = new ArrayBuffer(0)) {
    this.value = value;
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], InhibitAnyPolicy.prototype, "value", undefined);
InhibitAnyPolicy = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], InhibitAnyPolicy);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/invalidity_date.js
var id_ce_invalidityDate = `${id_ce}.24`;
var InvalidityDate = class InvalidityDate2 {
  value = new Date;
  constructor(value) {
    if (value) {
      this.value = value;
    }
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.GeneralizedTime })
], InvalidityDate.prototype, "value", undefined);
InvalidityDate = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], InvalidityDate);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/issuer_alternative_name.js
var IssueAlternativeName_1;
var id_ce_issuerAltName = `${id_ce}.18`;
var IssueAlternativeName = IssueAlternativeName_1 = class IssueAlternativeName2 extends GeneralNames {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, IssueAlternativeName_1.prototype);
  }
};
IssueAlternativeName = IssueAlternativeName_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], IssueAlternativeName);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/key_usage.js
var id_ce_keyUsage = `${id_ce}.15`;
var KeyUsageFlags;
(function(KeyUsageFlags2) {
  KeyUsageFlags2[KeyUsageFlags2["digitalSignature"] = 1] = "digitalSignature";
  KeyUsageFlags2[KeyUsageFlags2["nonRepudiation"] = 2] = "nonRepudiation";
  KeyUsageFlags2[KeyUsageFlags2["keyEncipherment"] = 4] = "keyEncipherment";
  KeyUsageFlags2[KeyUsageFlags2["dataEncipherment"] = 8] = "dataEncipherment";
  KeyUsageFlags2[KeyUsageFlags2["keyAgreement"] = 16] = "keyAgreement";
  KeyUsageFlags2[KeyUsageFlags2["keyCertSign"] = 32] = "keyCertSign";
  KeyUsageFlags2[KeyUsageFlags2["cRLSign"] = 64] = "cRLSign";
  KeyUsageFlags2[KeyUsageFlags2["encipherOnly"] = 128] = "encipherOnly";
  KeyUsageFlags2[KeyUsageFlags2["decipherOnly"] = 256] = "decipherOnly";
})(KeyUsageFlags || (KeyUsageFlags = {}));

class KeyUsage extends BitString2 {
  toJSON() {
    const flag = this.toNumber();
    const res = [];
    if (flag & KeyUsageFlags.cRLSign) {
      res.push("crlSign");
    }
    if (flag & KeyUsageFlags.dataEncipherment) {
      res.push("dataEncipherment");
    }
    if (flag & KeyUsageFlags.decipherOnly) {
      res.push("decipherOnly");
    }
    if (flag & KeyUsageFlags.digitalSignature) {
      res.push("digitalSignature");
    }
    if (flag & KeyUsageFlags.encipherOnly) {
      res.push("encipherOnly");
    }
    if (flag & KeyUsageFlags.keyAgreement) {
      res.push("keyAgreement");
    }
    if (flag & KeyUsageFlags.keyCertSign) {
      res.push("keyCertSign");
    }
    if (flag & KeyUsageFlags.keyEncipherment) {
      res.push("keyEncipherment");
    }
    if (flag & KeyUsageFlags.nonRepudiation) {
      res.push("nonRepudiation");
    }
    return res;
  }
  toString() {
    return `[${this.toJSON().join(", ")}]`;
  }
}
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/name_constraints.js
var GeneralSubtrees_1;
var id_ce_nameConstraints = `${id_ce}.30`;

class GeneralSubtree {
  base = new GeneralName;
  minimum = 0;
  maximum;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: GeneralName })
], GeneralSubtree.prototype, "base", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 0,
    defaultValue: 0,
    implicit: true
  })
], GeneralSubtree.prototype, "minimum", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 1,
    optional: true,
    implicit: true
  })
], GeneralSubtree.prototype, "maximum", undefined);
var GeneralSubtrees = GeneralSubtrees_1 = class GeneralSubtrees2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, GeneralSubtrees_1.prototype);
  }
};
GeneralSubtrees = GeneralSubtrees_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: GeneralSubtree
  })
], GeneralSubtrees);
class NameConstraints {
  permittedSubtrees;
  excludedSubtrees;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: GeneralSubtrees,
    context: 0,
    optional: true,
    implicit: true
  })
], NameConstraints.prototype, "permittedSubtrees", undefined);
__decorate([
  AsnProp({
    type: GeneralSubtrees,
    context: 1,
    optional: true,
    implicit: true
  })
], NameConstraints.prototype, "excludedSubtrees", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/policy_constraints.js
var id_ce_policyConstraints = `${id_ce}.36`;

class PolicyConstraints {
  requireExplicitPolicy;
  inhibitPolicyMapping;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 0,
    implicit: true,
    optional: true,
    converter: AsnIntegerArrayBufferConverter
  })
], PolicyConstraints.prototype, "requireExplicitPolicy", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 1,
    implicit: true,
    optional: true,
    converter: AsnIntegerArrayBufferConverter
  })
], PolicyConstraints.prototype, "inhibitPolicyMapping", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/policy_mappings.js
var PolicyMappings_1;
var id_ce_policyMappings = `${id_ce}.33`;

class PolicyMapping {
  issuerDomainPolicy = "";
  subjectDomainPolicy = "";
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], PolicyMapping.prototype, "issuerDomainPolicy", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], PolicyMapping.prototype, "subjectDomainPolicy", undefined);
var PolicyMappings = PolicyMappings_1 = class PolicyMappings2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, PolicyMappings_1.prototype);
  }
};
PolicyMappings = PolicyMappings_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: PolicyMapping
  })
], PolicyMappings);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/subject_alternative_name.js
var SubjectAlternativeName_1;
var id_ce_subjectAltName = `${id_ce}.17`;
var SubjectAlternativeName = SubjectAlternativeName_1 = class SubjectAlternativeName2 extends GeneralNames {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, SubjectAlternativeName_1.prototype);
  }
};
SubjectAlternativeName = SubjectAlternativeName_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], SubjectAlternativeName);
// node_modules/@peculiar/asn1-x509/build/es2015/attribute.js
class Attribute {
  type = "";
  values = [];
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], Attribute.prototype, "type", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    repeated: "set"
  })
], Attribute.prototype, "values", undefined);

// node_modules/@peculiar/asn1-x509/build/es2015/extensions/subject_directory_attributes.js
var SubjectDirectoryAttributes_1;
var id_ce_subjectDirectoryAttributes = `${id_ce}.9`;
var SubjectDirectoryAttributes = SubjectDirectoryAttributes_1 = class SubjectDirectoryAttributes2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, SubjectDirectoryAttributes_1.prototype);
  }
};
SubjectDirectoryAttributes = SubjectDirectoryAttributes_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: Attribute
  })
], SubjectDirectoryAttributes);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/subject_key_identifier.js
var id_ce_subjectKeyIdentifier = `${id_ce}.14`;

class SubjectKeyIdentifier extends KeyIdentifier {
}
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/private_key_usage_period.js
var id_ce_privateKeyUsagePeriod = `${id_ce}.16`;

class PrivateKeyUsagePeriod {
  notBefore;
  notAfter;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AsnPropTypes.GeneralizedTime,
    context: 0,
    implicit: true,
    optional: true
  })
], PrivateKeyUsagePeriod.prototype, "notBefore", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.GeneralizedTime,
    context: 1,
    implicit: true,
    optional: true
  })
], PrivateKeyUsagePeriod.prototype, "notAfter", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/entrust_version_info.js
var EntrustInfoFlags;
(function(EntrustInfoFlags2) {
  EntrustInfoFlags2[EntrustInfoFlags2["keyUpdateAllowed"] = 1] = "keyUpdateAllowed";
  EntrustInfoFlags2[EntrustInfoFlags2["newExtensions"] = 2] = "newExtensions";
  EntrustInfoFlags2[EntrustInfoFlags2["pKIXCertificate"] = 4] = "pKIXCertificate";
})(EntrustInfoFlags || (EntrustInfoFlags = {}));

class EntrustInfo extends BitString2 {
  toJSON() {
    const res = [];
    const flags = this.toNumber();
    if (flags & EntrustInfoFlags.pKIXCertificate) {
      res.push("pKIXCertificate");
    }
    if (flags & EntrustInfoFlags.newExtensions) {
      res.push("newExtensions");
    }
    if (flags & EntrustInfoFlags.keyUpdateAllowed) {
      res.push("keyUpdateAllowed");
    }
    return res;
  }
  toString() {
    return `[${this.toJSON().join(", ")}]`;
  }
}

class EntrustVersionInfo {
  entrustVers = "";
  entrustInfoFlags = new EntrustInfo;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.GeneralString })
], EntrustVersionInfo.prototype, "entrustVers", undefined);
__decorate([
  AsnProp({ type: EntrustInfo })
], EntrustVersionInfo.prototype, "entrustInfoFlags", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/subject_info_access.js
var SubjectInfoAccessSyntax_1;
var id_pe_subjectInfoAccess = `${id_pe}.11`;
var SubjectInfoAccessSyntax = SubjectInfoAccessSyntax_1 = class SubjectInfoAccessSyntax2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, SubjectInfoAccessSyntax_1.prototype);
  }
};
SubjectInfoAccessSyntax = SubjectInfoAccessSyntax_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: AccessDescription
  })
], SubjectInfoAccessSyntax);
// node_modules/@peculiar/asn1-x509/build/es2015/algorithm_identifier.js
class AlgorithmIdentifier {
  algorithm = "";
  parameters;
  constructor(params = {}) {
    Object.assign(this, params);
  }
  isEqual(data) {
    return data instanceof AlgorithmIdentifier && data.algorithm == this.algorithm && (data.parameters && this.parameters && equal(data.parameters, this.parameters) || data.parameters === this.parameters);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], AlgorithmIdentifier.prototype, "algorithm", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    optional: true
  })
], AlgorithmIdentifier.prototype, "parameters", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/subject_public_key_info.js
class SubjectPublicKeyInfo {
  algorithm = new AlgorithmIdentifier;
  subjectPublicKey = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], SubjectPublicKeyInfo.prototype, "algorithm", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BitString })
], SubjectPublicKeyInfo.prototype, "subjectPublicKey", undefined);

// node_modules/@peculiar/asn1-x509/build/es2015/time.js
var Time = class Time2 {
  utcTime;
  generalTime;
  constructor(time) {
    if (time) {
      if (typeof time === "string" || typeof time === "number" || time instanceof Date) {
        const date = new Date(time);
        date.setMilliseconds(0);
        if (date.getUTCFullYear() > 2049) {
          this.generalTime = date;
        } else {
          this.utcTime = date;
        }
      } else {
        Object.assign(this, time);
      }
    }
  }
  getTime() {
    const time = this.utcTime || this.generalTime;
    if (!time) {
      throw new Error("Cannot get time from CHOICE object");
    }
    return time;
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.UTCTime })
], Time.prototype, "utcTime", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.GeneralizedTime })
], Time.prototype, "generalTime", undefined);
Time = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], Time);

// node_modules/@peculiar/asn1-x509/build/es2015/validity.js
class Validity {
  notBefore = new Time(new Date);
  notAfter = new Time(new Date);
  constructor(params) {
    if (params) {
      this.notBefore = new Time(params.notBefore);
      this.notAfter = new Time(params.notAfter);
    }
  }
}
__decorate([
  AsnProp({ type: Time })
], Validity.prototype, "notBefore", undefined);
__decorate([
  AsnProp({ type: Time })
], Validity.prototype, "notAfter", undefined);

// node_modules/@peculiar/asn1-x509/build/es2015/extension.js
var Extensions_1;

class Extension {
  static CRITICAL = false;
  extnID = "";
  critical = Extension.CRITICAL;
  extnValue = new OctetString2;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], Extension.prototype, "extnID", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Boolean,
    defaultValue: Extension.CRITICAL
  })
], Extension.prototype, "critical", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], Extension.prototype, "extnValue", undefined);
var Extensions = Extensions_1 = class Extensions2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, Extensions_1.prototype);
  }
};
Extensions = Extensions_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: Extension
  })
], Extensions);

// node_modules/@peculiar/asn1-x509/build/es2015/types.js
var Version;
(function(Version2) {
  Version2[Version2["v1"] = 0] = "v1";
  Version2[Version2["v2"] = 1] = "v2";
  Version2[Version2["v3"] = 2] = "v3";
})(Version || (Version = {}));

// node_modules/@peculiar/asn1-x509/build/es2015/tbs_certificate.js
class TBSCertificate {
  version = Version.v1;
  serialNumber = new ArrayBuffer(0);
  signature = new AlgorithmIdentifier;
  issuer = new Name;
  validity = new Validity;
  subject = new Name;
  subjectPublicKeyInfo = new SubjectPublicKeyInfo;
  issuerUniqueID;
  subjectUniqueID;
  extensions;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 0,
    defaultValue: Version.v1
  })
], TBSCertificate.prototype, "version", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], TBSCertificate.prototype, "serialNumber", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], TBSCertificate.prototype, "signature", undefined);
__decorate([
  AsnProp({ type: Name })
], TBSCertificate.prototype, "issuer", undefined);
__decorate([
  AsnProp({ type: Validity })
], TBSCertificate.prototype, "validity", undefined);
__decorate([
  AsnProp({ type: Name })
], TBSCertificate.prototype, "subject", undefined);
__decorate([
  AsnProp({ type: SubjectPublicKeyInfo })
], TBSCertificate.prototype, "subjectPublicKeyInfo", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString,
    context: 1,
    implicit: true,
    optional: true
  })
], TBSCertificate.prototype, "issuerUniqueID", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString,
    context: 2,
    implicit: true,
    optional: true
  })
], TBSCertificate.prototype, "subjectUniqueID", undefined);
__decorate([
  AsnProp({
    type: Extensions,
    context: 3,
    optional: true
  })
], TBSCertificate.prototype, "extensions", undefined);

// node_modules/@peculiar/asn1-x509/build/es2015/certificate.js
class Certificate {
  tbsCertificate = new TBSCertificate;
  tbsCertificateRaw;
  signatureAlgorithm = new AlgorithmIdentifier;
  signatureValue = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: TBSCertificate,
    raw: true
  })
], Certificate.prototype, "tbsCertificate", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], Certificate.prototype, "signatureAlgorithm", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BitString })
], Certificate.prototype, "signatureValue", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/tbs_cert_list.js
class RevokedCertificate {
  userCertificate = new ArrayBuffer(0);
  revocationDate = new Time;
  crlEntryExtensions;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RevokedCertificate.prototype, "userCertificate", undefined);
__decorate([
  AsnProp({ type: Time })
], RevokedCertificate.prototype, "revocationDate", undefined);
__decorate([
  AsnProp({
    type: Extension,
    optional: true,
    repeated: "sequence"
  })
], RevokedCertificate.prototype, "crlEntryExtensions", undefined);

class TBSCertList {
  version;
  signature = new AlgorithmIdentifier;
  issuer = new Name;
  thisUpdate = new Time;
  nextUpdate;
  revokedCertificates;
  crlExtensions;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    optional: true
  })
], TBSCertList.prototype, "version", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], TBSCertList.prototype, "signature", undefined);
__decorate([
  AsnProp({ type: Name })
], TBSCertList.prototype, "issuer", undefined);
__decorate([
  AsnProp({ type: Time })
], TBSCertList.prototype, "thisUpdate", undefined);
__decorate([
  AsnProp({
    type: Time,
    optional: true
  })
], TBSCertList.prototype, "nextUpdate", undefined);
__decorate([
  AsnProp({
    type: RevokedCertificate,
    repeated: "sequence",
    optional: true
  })
], TBSCertList.prototype, "revokedCertificates", undefined);
__decorate([
  AsnProp({
    type: Extension,
    optional: true,
    context: 0,
    repeated: "sequence"
  })
], TBSCertList.prototype, "crlExtensions", undefined);

// node_modules/@peculiar/asn1-x509/build/es2015/certificate_list.js
class CertificateList {
  tbsCertList = new TBSCertList;
  tbsCertListRaw;
  signatureAlgorithm = new AlgorithmIdentifier;
  signature = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: TBSCertList,
    raw: true
  })
], CertificateList.prototype, "tbsCertList", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], CertificateList.prototype, "signatureAlgorithm", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BitString })
], CertificateList.prototype, "signature", undefined);
// node_modules/@simplewebauthn/server/esm/helpers/getCertificateInfo.js
var issuerSubjectIDKey = {
  "2.5.4.6": "C",
  "2.5.4.10": "O",
  "2.5.4.11": "OU",
  "2.5.4.3": "CN"
};
function getCertificateInfo(leafCertBuffer) {
  const x509 = AsnParser.parse(leafCertBuffer, Certificate);
  const parsedCert = x509.tbsCertificate;
  const issuer = { combined: "" };
  parsedCert.issuer.forEach(([iss]) => {
    const key = issuerSubjectIDKey[iss.type];
    if (key) {
      issuer[key] = iss.value.toString();
    }
  });
  issuer.combined = issuerSubjectToString(issuer);
  const subject = { combined: "" };
  parsedCert.subject.forEach(([iss]) => {
    const key = issuerSubjectIDKey[iss.type];
    if (key) {
      subject[key] = iss.value.toString();
    }
  });
  subject.combined = issuerSubjectToString(subject);
  let basicConstraintsCA = false;
  if (parsedCert.extensions) {
    for (const ext of parsedCert.extensions) {
      if (ext.extnID === id_ce_basicConstraints) {
        const basicConstraints = AsnParser.parse(ext.extnValue, BasicConstraints);
        basicConstraintsCA = basicConstraints.cA;
      }
    }
  }
  return {
    issuer,
    subject,
    version: parsedCert.version,
    basicConstraintsCA,
    notBefore: parsedCert.validity.notBefore.getTime(),
    notAfter: parsedCert.validity.notAfter.getTime(),
    parsedCertificate: x509
  };
}
function issuerSubjectToString(input) {
  const parts = [];
  if (input.C) {
    parts.push(input.C);
  }
  if (input.O) {
    parts.push(input.O);
  }
  if (input.OU) {
    parts.push(input.OU);
  }
  if (input.CN) {
    parts.push(input.CN);
  }
  return parts.join(" : ");
}
// node_modules/@peculiar/x509/build/x509.es.js
var import_reflect_metadata = __toESM(require_Reflect(), 1);

// node_modules/@peculiar/asn1-cms/build/es2015/issuer_and_serial_number.js
class IssuerAndSerialNumber {
  issuer = new Name;
  serialNumber = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: Name })
], IssuerAndSerialNumber.prototype, "issuer", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], IssuerAndSerialNumber.prototype, "serialNumber", undefined);

// node_modules/@peculiar/asn1-cms/build/es2015/signer_identifier.js
var SignerIdentifier = class SignerIdentifier2 {
  subjectKeyIdentifier;
  issuerAndSerialNumber;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: SubjectKeyIdentifier,
    context: 0,
    implicit: true
  })
], SignerIdentifier.prototype, "subjectKeyIdentifier", undefined);
__decorate([
  AsnProp({ type: IssuerAndSerialNumber })
], SignerIdentifier.prototype, "issuerAndSerialNumber", undefined);
SignerIdentifier = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], SignerIdentifier);

// node_modules/@peculiar/asn1-cms/build/es2015/types.js
var CMSVersion;
(function(CMSVersion2) {
  CMSVersion2[CMSVersion2["v0"] = 0] = "v0";
  CMSVersion2[CMSVersion2["v1"] = 1] = "v1";
  CMSVersion2[CMSVersion2["v2"] = 2] = "v2";
  CMSVersion2[CMSVersion2["v3"] = 3] = "v3";
  CMSVersion2[CMSVersion2["v4"] = 4] = "v4";
  CMSVersion2[CMSVersion2["v5"] = 5] = "v5";
})(CMSVersion || (CMSVersion = {}));
var DigestAlgorithmIdentifier = class DigestAlgorithmIdentifier2 extends AlgorithmIdentifier {
};
DigestAlgorithmIdentifier = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], DigestAlgorithmIdentifier);
var SignatureAlgorithmIdentifier = class SignatureAlgorithmIdentifier2 extends AlgorithmIdentifier {
};
SignatureAlgorithmIdentifier = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], SignatureAlgorithmIdentifier);
var KeyEncryptionAlgorithmIdentifier = class KeyEncryptionAlgorithmIdentifier2 extends AlgorithmIdentifier {
};
KeyEncryptionAlgorithmIdentifier = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], KeyEncryptionAlgorithmIdentifier);
var ContentEncryptionAlgorithmIdentifier = class ContentEncryptionAlgorithmIdentifier2 extends AlgorithmIdentifier {
};
ContentEncryptionAlgorithmIdentifier = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], ContentEncryptionAlgorithmIdentifier);
var MessageAuthenticationCodeAlgorithm = class MessageAuthenticationCodeAlgorithm2 extends AlgorithmIdentifier {
};
MessageAuthenticationCodeAlgorithm = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], MessageAuthenticationCodeAlgorithm);
var KeyDerivationAlgorithmIdentifier = class KeyDerivationAlgorithmIdentifier2 extends AlgorithmIdentifier {
};
KeyDerivationAlgorithmIdentifier = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], KeyDerivationAlgorithmIdentifier);

// node_modules/@peculiar/asn1-cms/build/es2015/attribute.js
class Attribute2 {
  attrType = "";
  attrValues = [];
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], Attribute2.prototype, "attrType", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    repeated: "set"
  })
], Attribute2.prototype, "attrValues", undefined);

// node_modules/@peculiar/asn1-cms/build/es2015/signer_info.js
var SignerInfos_1;

class SignerInfo {
  version = CMSVersion.v0;
  sid = new SignerIdentifier;
  digestAlgorithm = new DigestAlgorithmIdentifier;
  signedAttrs;
  signedAttrsRaw;
  signatureAlgorithm = new SignatureAlgorithmIdentifier;
  signature = new OctetString2;
  unsignedAttrs;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], SignerInfo.prototype, "version", undefined);
__decorate([
  AsnProp({ type: SignerIdentifier })
], SignerInfo.prototype, "sid", undefined);
__decorate([
  AsnProp({ type: DigestAlgorithmIdentifier })
], SignerInfo.prototype, "digestAlgorithm", undefined);
__decorate([
  AsnProp({
    type: Attribute2,
    repeated: "set",
    context: 0,
    implicit: true,
    optional: true,
    raw: true
  })
], SignerInfo.prototype, "signedAttrs", undefined);
__decorate([
  AsnProp({ type: SignatureAlgorithmIdentifier })
], SignerInfo.prototype, "signatureAlgorithm", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], SignerInfo.prototype, "signature", undefined);
__decorate([
  AsnProp({
    type: Attribute2,
    repeated: "set",
    context: 1,
    implicit: true,
    optional: true
  })
], SignerInfo.prototype, "unsignedAttrs", undefined);
var SignerInfos = SignerInfos_1 = class SignerInfos2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, SignerInfos_1.prototype);
  }
};
SignerInfos = SignerInfos_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: SignerInfo
  })
], SignerInfos);

// node_modules/@peculiar/asn1-cms/build/es2015/attributes/counter_signature.js
var CounterSignature = class CounterSignature2 extends SignerInfo {
};
CounterSignature = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], CounterSignature);
// node_modules/@peculiar/asn1-cms/build/es2015/attributes/signing_time.js
var SigningTime = class SigningTime2 extends Time {
};
SigningTime = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], SigningTime);
// node_modules/@peculiar/asn1-x509-attr/build/es2015/aa_clear_attrs.js
class ACClearAttrs {
  acIssuer = new GeneralName;
  acSerial = 0;
  attrs = [];
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: GeneralName })
], ACClearAttrs.prototype, "acIssuer", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], ACClearAttrs.prototype, "acSerial", undefined);
__decorate([
  AsnProp({
    type: Attribute,
    repeated: "sequence"
  })
], ACClearAttrs.prototype, "attrs", undefined);
// node_modules/@peculiar/asn1-x509-attr/build/es2015/attr_spec.js
var AttrSpec_1;
var AttrSpec = AttrSpec_1 = class AttrSpec2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, AttrSpec_1.prototype);
  }
};
AttrSpec = AttrSpec_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: AsnPropTypes.ObjectIdentifier
  })
], AttrSpec);

// node_modules/@peculiar/asn1-x509-attr/build/es2015/aa_controls.js
class AAControls {
  pathLenConstraint;
  permittedAttrs;
  excludedAttrs;
  permitUnSpecified = true;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    optional: true
  })
], AAControls.prototype, "pathLenConstraint", undefined);
__decorate([
  AsnProp({
    type: AttrSpec,
    implicit: true,
    context: 0,
    optional: true
  })
], AAControls.prototype, "permittedAttrs", undefined);
__decorate([
  AsnProp({
    type: AttrSpec,
    implicit: true,
    context: 1,
    optional: true
  })
], AAControls.prototype, "excludedAttrs", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Boolean,
    defaultValue: true
  })
], AAControls.prototype, "permitUnSpecified", undefined);
// node_modules/@peculiar/asn1-x509-attr/build/es2015/issuer_serial.js
class IssuerSerial {
  issuer = new GeneralNames;
  serial = new ArrayBuffer(0);
  issuerUID = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: GeneralNames })
], IssuerSerial.prototype, "issuer", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], IssuerSerial.prototype, "serial", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString,
    optional: true
  })
], IssuerSerial.prototype, "issuerUID", undefined);

// node_modules/@peculiar/asn1-x509-attr/build/es2015/object_digest_info.js
var DigestedObjectType;
(function(DigestedObjectType2) {
  DigestedObjectType2[DigestedObjectType2["publicKey"] = 0] = "publicKey";
  DigestedObjectType2[DigestedObjectType2["publicKeyCert"] = 1] = "publicKeyCert";
  DigestedObjectType2[DigestedObjectType2["otherObjectTypes"] = 2] = "otherObjectTypes";
})(DigestedObjectType || (DigestedObjectType = {}));

class ObjectDigestInfo {
  digestedObjectType = DigestedObjectType.publicKey;
  otherObjectTypeID;
  digestAlgorithm = new AlgorithmIdentifier;
  objectDigest = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Enumerated })
], ObjectDigestInfo.prototype, "digestedObjectType", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier,
    optional: true
  })
], ObjectDigestInfo.prototype, "otherObjectTypeID", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], ObjectDigestInfo.prototype, "digestAlgorithm", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BitString })
], ObjectDigestInfo.prototype, "objectDigest", undefined);

// node_modules/@peculiar/asn1-x509-attr/build/es2015/v2_form.js
class V2Form {
  issuerName;
  baseCertificateID;
  objectDigestInfo;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: GeneralNames,
    optional: true
  })
], V2Form.prototype, "issuerName", undefined);
__decorate([
  AsnProp({
    type: IssuerSerial,
    context: 0,
    implicit: true,
    optional: true
  })
], V2Form.prototype, "baseCertificateID", undefined);
__decorate([
  AsnProp({
    type: ObjectDigestInfo,
    context: 1,
    implicit: true,
    optional: true
  })
], V2Form.prototype, "objectDigestInfo", undefined);

// node_modules/@peculiar/asn1-x509-attr/build/es2015/attr_cert_issuer.js
var AttCertIssuer = class AttCertIssuer2 {
  v1Form;
  v2Form;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: GeneralName,
    repeated: "sequence"
  })
], AttCertIssuer.prototype, "v1Form", undefined);
__decorate([
  AsnProp({
    type: V2Form,
    context: 0,
    implicit: true
  })
], AttCertIssuer.prototype, "v2Form", undefined);
AttCertIssuer = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], AttCertIssuer);
// node_modules/@peculiar/asn1-x509-attr/build/es2015/attr_cert_validity_period.js
class AttCertValidityPeriod {
  notBeforeTime = new Date;
  notAfterTime = new Date;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.GeneralizedTime })
], AttCertValidityPeriod.prototype, "notBeforeTime", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.GeneralizedTime })
], AttCertValidityPeriod.prototype, "notAfterTime", undefined);
// node_modules/@peculiar/asn1-x509-attr/build/es2015/holder.js
class Holder {
  baseCertificateID;
  entityName;
  objectDigestInfo;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: IssuerSerial,
    implicit: true,
    context: 0,
    optional: true
  })
], Holder.prototype, "baseCertificateID", undefined);
__decorate([
  AsnProp({
    type: GeneralNames,
    implicit: true,
    context: 1,
    optional: true
  })
], Holder.prototype, "entityName", undefined);
__decorate([
  AsnProp({
    type: ObjectDigestInfo,
    implicit: true,
    context: 2,
    optional: true
  })
], Holder.prototype, "objectDigestInfo", undefined);

// node_modules/@peculiar/asn1-x509-attr/build/es2015/attribute_certificate_info.js
var AttCertVersion;
(function(AttCertVersion2) {
  AttCertVersion2[AttCertVersion2["v2"] = 1] = "v2";
})(AttCertVersion || (AttCertVersion = {}));

class AttributeCertificateInfo {
  version = AttCertVersion.v2;
  holder = new Holder;
  issuer = new AttCertIssuer;
  signature = new AlgorithmIdentifier;
  serialNumber = new ArrayBuffer(0);
  attrCertValidityPeriod = new AttCertValidityPeriod;
  attributes = [];
  issuerUniqueID;
  extensions;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], AttributeCertificateInfo.prototype, "version", undefined);
__decorate([
  AsnProp({ type: Holder })
], AttributeCertificateInfo.prototype, "holder", undefined);
__decorate([
  AsnProp({ type: AttCertIssuer })
], AttributeCertificateInfo.prototype, "issuer", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], AttributeCertificateInfo.prototype, "signature", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], AttributeCertificateInfo.prototype, "serialNumber", undefined);
__decorate([
  AsnProp({ type: AttCertValidityPeriod })
], AttributeCertificateInfo.prototype, "attrCertValidityPeriod", undefined);
__decorate([
  AsnProp({
    type: Attribute,
    repeated: "sequence"
  })
], AttributeCertificateInfo.prototype, "attributes", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString,
    optional: true
  })
], AttributeCertificateInfo.prototype, "issuerUniqueID", undefined);
__decorate([
  AsnProp({
    type: Extensions,
    optional: true
  })
], AttributeCertificateInfo.prototype, "extensions", undefined);

// node_modules/@peculiar/asn1-x509-attr/build/es2015/attribute_certificate.js
class AttributeCertificate {
  acinfo = new AttributeCertificateInfo;
  signatureAlgorithm = new AlgorithmIdentifier;
  signatureValue = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AttributeCertificateInfo })
], AttributeCertificate.prototype, "acinfo", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], AttributeCertificate.prototype, "signatureAlgorithm", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BitString })
], AttributeCertificate.prototype, "signatureValue", undefined);
// node_modules/@peculiar/asn1-x509-attr/build/es2015/class_list.js
var ClassListFlags;
(function(ClassListFlags2) {
  ClassListFlags2[ClassListFlags2["unmarked"] = 1] = "unmarked";
  ClassListFlags2[ClassListFlags2["unclassified"] = 2] = "unclassified";
  ClassListFlags2[ClassListFlags2["restricted"] = 4] = "restricted";
  ClassListFlags2[ClassListFlags2["confidential"] = 8] = "confidential";
  ClassListFlags2[ClassListFlags2["secret"] = 16] = "secret";
  ClassListFlags2[ClassListFlags2["topSecret"] = 32] = "topSecret";
})(ClassListFlags || (ClassListFlags = {}));

class ClassList extends BitString2 {
}
// node_modules/@peculiar/asn1-x509-attr/build/es2015/security_category.js
class SecurityCategory {
  type = "";
  value = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier,
    implicit: true,
    context: 0
  })
], SecurityCategory.prototype, "type", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    implicit: true,
    context: 1
  })
], SecurityCategory.prototype, "value", undefined);

// node_modules/@peculiar/asn1-x509-attr/build/es2015/clearance.js
class Clearance {
  policyId = "";
  classList = new ClassList(ClassListFlags.unclassified);
  securityCategories;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], Clearance.prototype, "policyId", undefined);
__decorate([
  AsnProp({
    type: ClassList,
    defaultValue: new ClassList(ClassListFlags.unclassified)
  })
], Clearance.prototype, "classList", undefined);
__decorate([
  AsnProp({
    type: SecurityCategory,
    repeated: "set"
  })
], Clearance.prototype, "securityCategories", undefined);
// node_modules/@peculiar/asn1-x509-attr/build/es2015/ietf_attr_syntax.js
class IetfAttrSyntaxValueChoices {
  cotets;
  oid;
  string;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: OctetString2 })
], IetfAttrSyntaxValueChoices.prototype, "cotets", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], IetfAttrSyntaxValueChoices.prototype, "oid", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Utf8String })
], IetfAttrSyntaxValueChoices.prototype, "string", undefined);

class IetfAttrSyntax {
  policyAuthority;
  values = [];
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: GeneralNames,
    implicit: true,
    context: 0,
    optional: true
  })
], IetfAttrSyntax.prototype, "policyAuthority", undefined);
__decorate([
  AsnProp({
    type: IetfAttrSyntaxValueChoices,
    repeated: "sequence"
  })
], IetfAttrSyntax.prototype, "values", undefined);
// node_modules/@peculiar/asn1-x509-attr/build/es2015/object_identifiers.js
var id_pe_ac_auditIdentity = `${id_pe}.4`;
var id_pe_aaControls = `${id_pe}.6`;
var id_pe_ac_proxying = `${id_pe}.10`;
var id_ce_targetInformation = `${id_ce}.55`;
var id_aca = `${id_pkix}.10`;
var id_aca_authenticationInfo = `${id_aca}.1`;
var id_aca_accessIdentity = `${id_aca}.2`;
var id_aca_chargingIdentity = `${id_aca}.3`;
var id_aca_group = `${id_aca}.4`;
var id_aca_encAttrs = `${id_aca}.6`;
var id_at = "2.5.4";
var id_at_role = `${id_at}.72`;
// node_modules/@peculiar/asn1-x509-attr/build/es2015/target.js
var Targets_1;

class TargetCert {
  targetCertificate = new IssuerSerial;
  targetName;
  certDigestInfo;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: IssuerSerial })
], TargetCert.prototype, "targetCertificate", undefined);
__decorate([
  AsnProp({
    type: GeneralName,
    optional: true
  })
], TargetCert.prototype, "targetName", undefined);
__decorate([
  AsnProp({
    type: ObjectDigestInfo,
    optional: true
  })
], TargetCert.prototype, "certDigestInfo", undefined);
var Target = class Target2 {
  targetName;
  targetGroup;
  targetCert;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: GeneralName,
    context: 0,
    implicit: true
  })
], Target.prototype, "targetName", undefined);
__decorate([
  AsnProp({
    type: GeneralName,
    context: 1,
    implicit: true
  })
], Target.prototype, "targetGroup", undefined);
__decorate([
  AsnProp({
    type: TargetCert,
    context: 2,
    implicit: true
  })
], Target.prototype, "targetCert", undefined);
Target = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], Target);
var Targets = Targets_1 = class Targets2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, Targets_1.prototype);
  }
};
Targets = Targets_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: Target
  })
], Targets);

// node_modules/@peculiar/asn1-x509-attr/build/es2015/proxy_info.js
var ProxyInfo_1;
var ProxyInfo = ProxyInfo_1 = class ProxyInfo2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, ProxyInfo_1.prototype);
  }
};
ProxyInfo = ProxyInfo_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: Targets
  })
], ProxyInfo);
// node_modules/@peculiar/asn1-x509-attr/build/es2015/role_syntax.js
class RoleSyntax {
  roleAuthority;
  roleName;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: GeneralNames,
    implicit: true,
    context: 0,
    optional: true
  })
], RoleSyntax.prototype, "roleAuthority", undefined);
__decorate([
  AsnProp({
    type: GeneralName,
    implicit: true,
    context: 1
  })
], RoleSyntax.prototype, "roleName", undefined);
// node_modules/@peculiar/asn1-x509-attr/build/es2015/svce_auth_info.js
class SvceAuthInfo {
  service = new GeneralName;
  ident = new GeneralName;
  authInfo;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: GeneralName })
], SvceAuthInfo.prototype, "service", undefined);
__decorate([
  AsnProp({ type: GeneralName })
], SvceAuthInfo.prototype, "ident", undefined);
__decorate([
  AsnProp({
    type: OctetString2,
    optional: true
  })
], SvceAuthInfo.prototype, "authInfo", undefined);
// node_modules/@peculiar/asn1-cms/build/es2015/certificate_choices.js
var CertificateSet_1;

class OtherCertificateFormat {
  otherCertFormat = "";
  otherCert = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], OtherCertificateFormat.prototype, "otherCertFormat", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Any })
], OtherCertificateFormat.prototype, "otherCert", undefined);
var CertificateChoices = class CertificateChoices2 {
  certificate;
  v2AttrCert;
  other;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({ type: Certificate })
], CertificateChoices.prototype, "certificate", undefined);
__decorate([
  AsnProp({
    type: AttributeCertificate,
    context: 2,
    implicit: true
  })
], CertificateChoices.prototype, "v2AttrCert", undefined);
__decorate([
  AsnProp({
    type: OtherCertificateFormat,
    context: 3,
    implicit: true
  })
], CertificateChoices.prototype, "other", undefined);
CertificateChoices = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], CertificateChoices);
var CertificateSet = CertificateSet_1 = class CertificateSet2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, CertificateSet_1.prototype);
  }
};
CertificateSet = CertificateSet_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: CertificateChoices
  })
], CertificateSet);
// node_modules/@peculiar/asn1-cms/build/es2015/content_info.js
class ContentInfo {
  contentType = "";
  content = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], ContentInfo.prototype, "contentType", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    context: 0
  })
], ContentInfo.prototype, "content", undefined);
// node_modules/@peculiar/asn1-cms/build/es2015/encapsulated_content_info.js
var EncapsulatedContent = class EncapsulatedContent2 {
  single;
  any;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({ type: OctetString2 })
], EncapsulatedContent.prototype, "single", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Any })
], EncapsulatedContent.prototype, "any", undefined);
EncapsulatedContent = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], EncapsulatedContent);
class EncapsulatedContentInfo {
  eContentType = "";
  eContent;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], EncapsulatedContentInfo.prototype, "eContentType", undefined);
__decorate([
  AsnProp({
    type: EncapsulatedContent,
    context: 0,
    optional: true
  })
], EncapsulatedContentInfo.prototype, "eContent", undefined);
// node_modules/@peculiar/asn1-cms/build/es2015/encrypted_content_info.js
var EncryptedContent = class EncryptedContent2 {
  value;
  constructedValue;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: OctetString2,
    context: 0,
    implicit: true,
    optional: true
  })
], EncryptedContent.prototype, "value", undefined);
__decorate([
  AsnProp({
    type: OctetString2,
    converter: AsnConstructedOctetStringConverter,
    context: 0,
    implicit: true,
    optional: true,
    repeated: "sequence"
  })
], EncryptedContent.prototype, "constructedValue", undefined);
EncryptedContent = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], EncryptedContent);
class EncryptedContentInfo {
  contentType = "";
  contentEncryptionAlgorithm = new ContentEncryptionAlgorithmIdentifier;
  encryptedContent;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], EncryptedContentInfo.prototype, "contentType", undefined);
__decorate([
  AsnProp({ type: ContentEncryptionAlgorithmIdentifier })
], EncryptedContentInfo.prototype, "contentEncryptionAlgorithm", undefined);
__decorate([
  AsnProp({
    type: EncryptedContent,
    optional: true
  })
], EncryptedContentInfo.prototype, "encryptedContent", undefined);
// node_modules/@peculiar/asn1-cms/build/es2015/other_key_attribute.js
class OtherKeyAttribute {
  keyAttrId = "";
  keyAttr;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], OtherKeyAttribute.prototype, "keyAttrId", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    optional: true
  })
], OtherKeyAttribute.prototype, "keyAttr", undefined);

// node_modules/@peculiar/asn1-cms/build/es2015/key_agree_recipient_info.js
var RecipientEncryptedKeys_1;

class RecipientKeyIdentifier {
  subjectKeyIdentifier = new SubjectKeyIdentifier;
  date;
  other;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: SubjectKeyIdentifier })
], RecipientKeyIdentifier.prototype, "subjectKeyIdentifier", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.GeneralizedTime,
    optional: true
  })
], RecipientKeyIdentifier.prototype, "date", undefined);
__decorate([
  AsnProp({
    type: OtherKeyAttribute,
    optional: true
  })
], RecipientKeyIdentifier.prototype, "other", undefined);
var KeyAgreeRecipientIdentifier = class KeyAgreeRecipientIdentifier2 {
  rKeyId;
  issuerAndSerialNumber;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: RecipientKeyIdentifier,
    context: 0,
    implicit: true,
    optional: true
  })
], KeyAgreeRecipientIdentifier.prototype, "rKeyId", undefined);
__decorate([
  AsnProp({
    type: IssuerAndSerialNumber,
    optional: true
  })
], KeyAgreeRecipientIdentifier.prototype, "issuerAndSerialNumber", undefined);
KeyAgreeRecipientIdentifier = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], KeyAgreeRecipientIdentifier);
class RecipientEncryptedKey {
  rid = new KeyAgreeRecipientIdentifier;
  encryptedKey = new OctetString2;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: KeyAgreeRecipientIdentifier })
], RecipientEncryptedKey.prototype, "rid", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], RecipientEncryptedKey.prototype, "encryptedKey", undefined);
var RecipientEncryptedKeys = RecipientEncryptedKeys_1 = class RecipientEncryptedKeys2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, RecipientEncryptedKeys_1.prototype);
  }
};
RecipientEncryptedKeys = RecipientEncryptedKeys_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: RecipientEncryptedKey
  })
], RecipientEncryptedKeys);
class OriginatorPublicKey {
  algorithm = new AlgorithmIdentifier;
  publicKey = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], OriginatorPublicKey.prototype, "algorithm", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BitString })
], OriginatorPublicKey.prototype, "publicKey", undefined);
var OriginatorIdentifierOrKey = class OriginatorIdentifierOrKey2 {
  subjectKeyIdentifier;
  originatorKey;
  issuerAndSerialNumber;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: SubjectKeyIdentifier,
    context: 0,
    implicit: true,
    optional: true
  })
], OriginatorIdentifierOrKey.prototype, "subjectKeyIdentifier", undefined);
__decorate([
  AsnProp({
    type: OriginatorPublicKey,
    context: 1,
    implicit: true,
    optional: true
  })
], OriginatorIdentifierOrKey.prototype, "originatorKey", undefined);
__decorate([
  AsnProp({
    type: IssuerAndSerialNumber,
    optional: true
  })
], OriginatorIdentifierOrKey.prototype, "issuerAndSerialNumber", undefined);
OriginatorIdentifierOrKey = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], OriginatorIdentifierOrKey);
class KeyAgreeRecipientInfo {
  version = CMSVersion.v3;
  originator = new OriginatorIdentifierOrKey;
  ukm;
  keyEncryptionAlgorithm = new KeyEncryptionAlgorithmIdentifier;
  recipientEncryptedKeys = new RecipientEncryptedKeys;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], KeyAgreeRecipientInfo.prototype, "version", undefined);
__decorate([
  AsnProp({
    type: OriginatorIdentifierOrKey,
    context: 0
  })
], KeyAgreeRecipientInfo.prototype, "originator", undefined);
__decorate([
  AsnProp({
    type: OctetString2,
    context: 1,
    optional: true
  })
], KeyAgreeRecipientInfo.prototype, "ukm", undefined);
__decorate([
  AsnProp({ type: KeyEncryptionAlgorithmIdentifier })
], KeyAgreeRecipientInfo.prototype, "keyEncryptionAlgorithm", undefined);
__decorate([
  AsnProp({ type: RecipientEncryptedKeys })
], KeyAgreeRecipientInfo.prototype, "recipientEncryptedKeys", undefined);

// node_modules/@peculiar/asn1-cms/build/es2015/key_trans_recipient_info.js
var RecipientIdentifier = class RecipientIdentifier2 {
  subjectKeyIdentifier;
  issuerAndSerialNumber;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: SubjectKeyIdentifier,
    context: 0,
    implicit: true
  })
], RecipientIdentifier.prototype, "subjectKeyIdentifier", undefined);
__decorate([
  AsnProp({ type: IssuerAndSerialNumber })
], RecipientIdentifier.prototype, "issuerAndSerialNumber", undefined);
RecipientIdentifier = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], RecipientIdentifier);
class KeyTransRecipientInfo {
  version = CMSVersion.v0;
  rid = new RecipientIdentifier;
  keyEncryptionAlgorithm = new KeyEncryptionAlgorithmIdentifier;
  encryptedKey = new OctetString2;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], KeyTransRecipientInfo.prototype, "version", undefined);
__decorate([
  AsnProp({ type: RecipientIdentifier })
], KeyTransRecipientInfo.prototype, "rid", undefined);
__decorate([
  AsnProp({ type: KeyEncryptionAlgorithmIdentifier })
], KeyTransRecipientInfo.prototype, "keyEncryptionAlgorithm", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], KeyTransRecipientInfo.prototype, "encryptedKey", undefined);

// node_modules/@peculiar/asn1-cms/build/es2015/kek_recipient_info.js
class KEKIdentifier {
  keyIdentifier = new OctetString2;
  date;
  other;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: OctetString2 })
], KEKIdentifier.prototype, "keyIdentifier", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.GeneralizedTime,
    optional: true
  })
], KEKIdentifier.prototype, "date", undefined);
__decorate([
  AsnProp({
    type: OtherKeyAttribute,
    optional: true
  })
], KEKIdentifier.prototype, "other", undefined);

class KEKRecipientInfo {
  version = CMSVersion.v4;
  kekid = new KEKIdentifier;
  keyEncryptionAlgorithm = new KeyEncryptionAlgorithmIdentifier;
  encryptedKey = new OctetString2;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], KEKRecipientInfo.prototype, "version", undefined);
__decorate([
  AsnProp({ type: KEKIdentifier })
], KEKRecipientInfo.prototype, "kekid", undefined);
__decorate([
  AsnProp({ type: KeyEncryptionAlgorithmIdentifier })
], KEKRecipientInfo.prototype, "keyEncryptionAlgorithm", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], KEKRecipientInfo.prototype, "encryptedKey", undefined);

// node_modules/@peculiar/asn1-cms/build/es2015/password_recipient_info.js
class PasswordRecipientInfo {
  version = CMSVersion.v0;
  keyDerivationAlgorithm;
  keyEncryptionAlgorithm = new KeyEncryptionAlgorithmIdentifier;
  encryptedKey = new OctetString2;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], PasswordRecipientInfo.prototype, "version", undefined);
__decorate([
  AsnProp({
    type: KeyDerivationAlgorithmIdentifier,
    context: 0,
    optional: true
  })
], PasswordRecipientInfo.prototype, "keyDerivationAlgorithm", undefined);
__decorate([
  AsnProp({ type: KeyEncryptionAlgorithmIdentifier })
], PasswordRecipientInfo.prototype, "keyEncryptionAlgorithm", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], PasswordRecipientInfo.prototype, "encryptedKey", undefined);

// node_modules/@peculiar/asn1-cms/build/es2015/recipient_info.js
class OtherRecipientInfo {
  oriType = "";
  oriValue = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], OtherRecipientInfo.prototype, "oriType", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Any })
], OtherRecipientInfo.prototype, "oriValue", undefined);
var RecipientInfo = class RecipientInfo2 {
  ktri;
  kari;
  kekri;
  pwri;
  ori;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: KeyTransRecipientInfo,
    optional: true
  })
], RecipientInfo.prototype, "ktri", undefined);
__decorate([
  AsnProp({
    type: KeyAgreeRecipientInfo,
    context: 1,
    implicit: true,
    optional: true
  })
], RecipientInfo.prototype, "kari", undefined);
__decorate([
  AsnProp({
    type: KEKRecipientInfo,
    context: 2,
    implicit: true,
    optional: true
  })
], RecipientInfo.prototype, "kekri", undefined);
__decorate([
  AsnProp({
    type: PasswordRecipientInfo,
    context: 3,
    implicit: true,
    optional: true
  })
], RecipientInfo.prototype, "pwri", undefined);
__decorate([
  AsnProp({
    type: OtherRecipientInfo,
    context: 4,
    implicit: true,
    optional: true
  })
], RecipientInfo.prototype, "ori", undefined);
RecipientInfo = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], RecipientInfo);

// node_modules/@peculiar/asn1-cms/build/es2015/recipient_infos.js
var RecipientInfos_1;
var RecipientInfos = RecipientInfos_1 = class RecipientInfos2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, RecipientInfos_1.prototype);
  }
};
RecipientInfos = RecipientInfos_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: RecipientInfo
  })
], RecipientInfos);

// node_modules/@peculiar/asn1-cms/build/es2015/revocation_info_choice.js
var RevocationInfoChoices_1;
var id_ri = `${id_pkix}.16`;
var id_ri_ocsp_response = `${id_ri}.2`;
var id_ri_scvp = `${id_ri}.4`;

class OtherRevocationInfoFormat {
  otherRevInfoFormat = "";
  otherRevInfo = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], OtherRevocationInfoFormat.prototype, "otherRevInfoFormat", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Any })
], OtherRevocationInfoFormat.prototype, "otherRevInfo", undefined);
var RevocationInfoChoice = class RevocationInfoChoice2 {
  other = new OtherRevocationInfoFormat;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: OtherRevocationInfoFormat,
    context: 1,
    implicit: true
  })
], RevocationInfoChoice.prototype, "other", undefined);
RevocationInfoChoice = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], RevocationInfoChoice);
var RevocationInfoChoices = RevocationInfoChoices_1 = class RevocationInfoChoices2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, RevocationInfoChoices_1.prototype);
  }
};
RevocationInfoChoices = RevocationInfoChoices_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: RevocationInfoChoice
  })
], RevocationInfoChoices);

// node_modules/@peculiar/asn1-cms/build/es2015/originator_info.js
class OriginatorInfo {
  certs;
  crls;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: CertificateSet,
    context: 0,
    implicit: true,
    optional: true
  })
], OriginatorInfo.prototype, "certs", undefined);
__decorate([
  AsnProp({
    type: RevocationInfoChoices,
    context: 1,
    implicit: true,
    optional: true
  })
], OriginatorInfo.prototype, "crls", undefined);

// node_modules/@peculiar/asn1-cms/build/es2015/enveloped_data.js
var UnprotectedAttributes_1;
var UnprotectedAttributes = UnprotectedAttributes_1 = class UnprotectedAttributes2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, UnprotectedAttributes_1.prototype);
  }
};
UnprotectedAttributes = UnprotectedAttributes_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: Attribute2
  })
], UnprotectedAttributes);
class EnvelopedData {
  version = CMSVersion.v0;
  originatorInfo;
  recipientInfos = new RecipientInfos;
  encryptedContentInfo = new EncryptedContentInfo;
  unprotectedAttrs;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], EnvelopedData.prototype, "version", undefined);
__decorate([
  AsnProp({
    type: OriginatorInfo,
    context: 0,
    implicit: true,
    optional: true
  })
], EnvelopedData.prototype, "originatorInfo", undefined);
__decorate([
  AsnProp({ type: RecipientInfos })
], EnvelopedData.prototype, "recipientInfos", undefined);
__decorate([
  AsnProp({ type: EncryptedContentInfo })
], EnvelopedData.prototype, "encryptedContentInfo", undefined);
__decorate([
  AsnProp({
    type: UnprotectedAttributes,
    context: 1,
    implicit: true,
    optional: true
  })
], EnvelopedData.prototype, "unprotectedAttrs", undefined);
// node_modules/@peculiar/asn1-cms/build/es2015/object_identifiers.js
var id_data = "1.2.840.113549.1.7.1";
var id_signedData = "1.2.840.113549.1.7.2";
// node_modules/@peculiar/asn1-cms/build/es2015/signed_data.js
var DigestAlgorithmIdentifiers_1;
var DigestAlgorithmIdentifiers = DigestAlgorithmIdentifiers_1 = class DigestAlgorithmIdentifiers2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, DigestAlgorithmIdentifiers_1.prototype);
  }
};
DigestAlgorithmIdentifiers = DigestAlgorithmIdentifiers_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: DigestAlgorithmIdentifier
  })
], DigestAlgorithmIdentifiers);
class SignedData {
  version = CMSVersion.v0;
  digestAlgorithms = new DigestAlgorithmIdentifiers;
  encapContentInfo = new EncapsulatedContentInfo;
  certificates;
  crls;
  signerInfos = new SignerInfos;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], SignedData.prototype, "version", undefined);
__decorate([
  AsnProp({ type: DigestAlgorithmIdentifiers })
], SignedData.prototype, "digestAlgorithms", undefined);
__decorate([
  AsnProp({ type: EncapsulatedContentInfo })
], SignedData.prototype, "encapContentInfo", undefined);
__decorate([
  AsnProp({
    type: CertificateSet,
    context: 0,
    implicit: true,
    optional: true
  })
], SignedData.prototype, "certificates", undefined);
__decorate([
  AsnProp({
    type: RevocationInfoChoices,
    context: 1,
    implicit: true,
    optional: true
  })
], SignedData.prototype, "crls", undefined);
__decorate([
  AsnProp({ type: SignerInfos })
], SignedData.prototype, "signerInfos", undefined);
// node_modules/@peculiar/asn1-ecc/build/es2015/object_identifiers.js
var id_ecPublicKey = "1.2.840.10045.2.1";
var id_ecdsaWithSHA1 = "1.2.840.10045.4.1";
var id_ecdsaWithSHA224 = "1.2.840.10045.4.3.1";
var id_ecdsaWithSHA256 = "1.2.840.10045.4.3.2";
var id_ecdsaWithSHA384 = "1.2.840.10045.4.3.3";
var id_ecdsaWithSHA512 = "1.2.840.10045.4.3.4";
var id_secp256r1 = "1.2.840.10045.3.1.7";
var id_secp384r1 = "1.3.132.0.34";
var id_secp521r1 = "1.3.132.0.35";

// node_modules/@peculiar/asn1-ecc/build/es2015/algorithms.js
function create(algorithm) {
  return new AlgorithmIdentifier({ algorithm });
}
var ecdsaWithSHA1 = create(id_ecdsaWithSHA1);
var ecdsaWithSHA224 = create(id_ecdsaWithSHA224);
var ecdsaWithSHA256 = create(id_ecdsaWithSHA256);
var ecdsaWithSHA384 = create(id_ecdsaWithSHA384);
var ecdsaWithSHA512 = create(id_ecdsaWithSHA512);
// node_modules/@peculiar/asn1-ecc/build/es2015/rfc3279.js
var FieldID = class FieldID2 {
  fieldType;
  parameters;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], FieldID.prototype, "fieldType", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Any })
], FieldID.prototype, "parameters", undefined);
FieldID = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], FieldID);
class ECPoint extends OctetString2 {
}
var Curve = class Curve2 {
  a;
  b;
  seed;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.OctetString })
], Curve.prototype, "a", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.OctetString })
], Curve.prototype, "b", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString,
    optional: true
  })
], Curve.prototype, "seed", undefined);
Curve = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], Curve);
var ECPVer;
(function(ECPVer2) {
  ECPVer2[ECPVer2["ecpVer1"] = 1] = "ecpVer1";
})(ECPVer || (ECPVer = {}));
var SpecifiedECDomain = class SpecifiedECDomain2 {
  version = ECPVer.ecpVer1;
  fieldID;
  curve;
  base;
  order;
  cofactor;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], SpecifiedECDomain.prototype, "version", undefined);
__decorate([
  AsnProp({ type: FieldID })
], SpecifiedECDomain.prototype, "fieldID", undefined);
__decorate([
  AsnProp({ type: Curve })
], SpecifiedECDomain.prototype, "curve", undefined);
__decorate([
  AsnProp({ type: ECPoint })
], SpecifiedECDomain.prototype, "base", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], SpecifiedECDomain.prototype, "order", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    optional: true
  })
], SpecifiedECDomain.prototype, "cofactor", undefined);
SpecifiedECDomain = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], SpecifiedECDomain);

// node_modules/@peculiar/asn1-ecc/build/es2015/ec_parameters.js
var ECParameters = class ECParameters2 {
  namedCurve;
  implicitCurve;
  specifiedCurve;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], ECParameters.prototype, "namedCurve", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Null })
], ECParameters.prototype, "implicitCurve", undefined);
__decorate([
  AsnProp({ type: SpecifiedECDomain })
], ECParameters.prototype, "specifiedCurve", undefined);
ECParameters = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], ECParameters);
// node_modules/@peculiar/asn1-ecc/build/es2015/ec_private_key.js
class ECPrivateKey {
  version = 1;
  privateKey = new OctetString2;
  parameters;
  publicKey;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], ECPrivateKey.prototype, "version", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], ECPrivateKey.prototype, "privateKey", undefined);
__decorate([
  AsnProp({
    type: ECParameters,
    context: 0,
    optional: true
  })
], ECPrivateKey.prototype, "parameters", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString,
    context: 1,
    optional: true
  })
], ECPrivateKey.prototype, "publicKey", undefined);
// node_modules/@peculiar/asn1-ecc/build/es2015/ec_signature_value.js
class ECDSASigValue {
  r = new ArrayBuffer(0);
  s = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], ECDSASigValue.prototype, "r", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], ECDSASigValue.prototype, "s", undefined);
// node_modules/@peculiar/asn1-rsa/build/es2015/object_identifiers.js
var id_pkcs_1 = "1.2.840.113549.1.1";
var id_rsaEncryption = `${id_pkcs_1}.1`;
var id_RSAES_OAEP = `${id_pkcs_1}.7`;
var id_pSpecified = `${id_pkcs_1}.9`;
var id_RSASSA_PSS = `${id_pkcs_1}.10`;
var id_md2WithRSAEncryption = `${id_pkcs_1}.2`;
var id_md5WithRSAEncryption = `${id_pkcs_1}.4`;
var id_sha1WithRSAEncryption = `${id_pkcs_1}.5`;
var id_sha224WithRSAEncryption = `${id_pkcs_1}.14`;
var id_sha256WithRSAEncryption = `${id_pkcs_1}.11`;
var id_sha384WithRSAEncryption = `${id_pkcs_1}.12`;
var id_sha512WithRSAEncryption = `${id_pkcs_1}.13`;
var id_sha512_224WithRSAEncryption = `${id_pkcs_1}.15`;
var id_sha512_256WithRSAEncryption = `${id_pkcs_1}.16`;
var id_sha1 = "1.3.14.3.2.26";
var id_sha224 = "2.16.840.1.101.3.4.2.4";
var id_sha256 = "2.16.840.1.101.3.4.2.1";
var id_sha384 = "2.16.840.1.101.3.4.2.2";
var id_sha512 = "2.16.840.1.101.3.4.2.3";
var id_sha512_224 = "2.16.840.1.101.3.4.2.5";
var id_sha512_256 = "2.16.840.1.101.3.4.2.6";
var id_md2 = "1.2.840.113549.2.2";
var id_md5 = "1.2.840.113549.2.5";
var id_mgf1 = `${id_pkcs_1}.8`;

// node_modules/@peculiar/asn1-rsa/build/es2015/algorithms.js
function create2(algorithm) {
  return new AlgorithmIdentifier({
    algorithm,
    parameters: null
  });
}
var md2 = create2(id_md2);
var md4 = create2(id_md5);
var sha1 = create2(id_sha1);
var sha224 = create2(id_sha224);
var sha256 = create2(id_sha256);
var sha384 = create2(id_sha384);
var sha512 = create2(id_sha512);
var sha512_224 = create2(id_sha512_224);
var sha512_256 = create2(id_sha512_256);
var mgf1SHA1 = new AlgorithmIdentifier({
  algorithm: id_mgf1,
  parameters: AsnConvert.serialize(sha1)
});
var pSpecifiedEmpty = new AlgorithmIdentifier({
  algorithm: id_pSpecified,
  parameters: AsnConvert.serialize(AsnOctetStringConverter.toASN(new Uint8Array([
    218,
    57,
    163,
    238,
    94,
    107,
    75,
    13,
    50,
    85,
    191,
    239,
    149,
    96,
    24,
    144,
    175,
    216,
    7,
    9
  ]).buffer))
});
var rsaEncryption = create2(id_rsaEncryption);
var md2WithRSAEncryption = create2(id_md2WithRSAEncryption);
var md5WithRSAEncryption = create2(id_md5WithRSAEncryption);
var sha1WithRSAEncryption = create2(id_sha1WithRSAEncryption);
var sha224WithRSAEncryption = create2(id_sha512_224WithRSAEncryption);
var sha256WithRSAEncryption = create2(id_sha512_256WithRSAEncryption);
var sha384WithRSAEncryption = create2(id_sha384WithRSAEncryption);
var sha512WithRSAEncryption = create2(id_sha512WithRSAEncryption);
var sha512_224WithRSAEncryption = create2(id_sha512_224WithRSAEncryption);
var sha512_256WithRSAEncryption = create2(id_sha512_256WithRSAEncryption);

// node_modules/@peculiar/asn1-rsa/build/es2015/parameters/rsaes_oaep.js
class RsaEsOaepParams {
  hashAlgorithm = new AlgorithmIdentifier(sha1);
  maskGenAlgorithm = new AlgorithmIdentifier({
    algorithm: id_mgf1,
    parameters: AsnConvert.serialize(sha1)
  });
  pSourceAlgorithm = new AlgorithmIdentifier(pSpecifiedEmpty);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AlgorithmIdentifier,
    context: 0,
    defaultValue: sha1
  })
], RsaEsOaepParams.prototype, "hashAlgorithm", undefined);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier,
    context: 1,
    defaultValue: mgf1SHA1
  })
], RsaEsOaepParams.prototype, "maskGenAlgorithm", undefined);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier,
    context: 2,
    defaultValue: pSpecifiedEmpty
  })
], RsaEsOaepParams.prototype, "pSourceAlgorithm", undefined);
var RSAES_OAEP = new AlgorithmIdentifier({
  algorithm: id_RSAES_OAEP,
  parameters: AsnConvert.serialize(new RsaEsOaepParams)
});
// node_modules/@peculiar/asn1-rsa/build/es2015/parameters/rsassa_pss.js
class RsaSaPssParams {
  hashAlgorithm = new AlgorithmIdentifier(sha1);
  maskGenAlgorithm = new AlgorithmIdentifier({
    algorithm: id_mgf1,
    parameters: AsnConvert.serialize(sha1)
  });
  saltLength = 20;
  trailerField = 1;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AlgorithmIdentifier,
    context: 0,
    defaultValue: sha1
  })
], RsaSaPssParams.prototype, "hashAlgorithm", undefined);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier,
    context: 1,
    defaultValue: mgf1SHA1
  })
], RsaSaPssParams.prototype, "maskGenAlgorithm", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 2,
    defaultValue: 20
  })
], RsaSaPssParams.prototype, "saltLength", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 3,
    defaultValue: 1
  })
], RsaSaPssParams.prototype, "trailerField", undefined);
var RSASSA_PSS = new AlgorithmIdentifier({
  algorithm: id_RSASSA_PSS,
  parameters: AsnConvert.serialize(new RsaSaPssParams)
});
// node_modules/@peculiar/asn1-rsa/build/es2015/parameters/rsassa_pkcs1_v1_5.js
class DigestInfo {
  digestAlgorithm = new AlgorithmIdentifier;
  digest = new OctetString2;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], DigestInfo.prototype, "digestAlgorithm", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], DigestInfo.prototype, "digest", undefined);
// node_modules/@peculiar/asn1-rsa/build/es2015/other_prime_info.js
var OtherPrimeInfos_1;

class OtherPrimeInfo {
  prime = new ArrayBuffer(0);
  exponent = new ArrayBuffer(0);
  coefficient = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], OtherPrimeInfo.prototype, "prime", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], OtherPrimeInfo.prototype, "exponent", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], OtherPrimeInfo.prototype, "coefficient", undefined);
var OtherPrimeInfos = OtherPrimeInfos_1 = class OtherPrimeInfos2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, OtherPrimeInfos_1.prototype);
  }
};
OtherPrimeInfos = OtherPrimeInfos_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: OtherPrimeInfo
  })
], OtherPrimeInfos);
// node_modules/@peculiar/asn1-rsa/build/es2015/rsa_private_key.js
class RSAPrivateKey {
  version = 0;
  modulus = new ArrayBuffer(0);
  publicExponent = new ArrayBuffer(0);
  privateExponent = new ArrayBuffer(0);
  prime1 = new ArrayBuffer(0);
  prime2 = new ArrayBuffer(0);
  exponent1 = new ArrayBuffer(0);
  exponent2 = new ArrayBuffer(0);
  coefficient = new ArrayBuffer(0);
  otherPrimeInfos;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], RSAPrivateKey.prototype, "version", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "modulus", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "publicExponent", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "privateExponent", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "prime1", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "prime2", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "exponent1", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "exponent2", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "coefficient", undefined);
__decorate([
  AsnProp({
    type: OtherPrimeInfos,
    optional: true
  })
], RSAPrivateKey.prototype, "otherPrimeInfos", undefined);
// node_modules/@peculiar/asn1-rsa/build/es2015/rsa_public_key.js
class RSAPublicKey {
  modulus = new ArrayBuffer(0);
  publicExponent = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPublicKey.prototype, "modulus", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPublicKey.prototype, "publicExponent", undefined);
// node_modules/tsyringe/dist/esm5/types/lifecycle.js
var Lifecycle;
(function(Lifecycle2) {
  Lifecycle2[Lifecycle2["Transient"] = 0] = "Transient";
  Lifecycle2[Lifecycle2["Singleton"] = 1] = "Singleton";
  Lifecycle2[Lifecycle2["ResolutionScoped"] = 2] = "ResolutionScoped";
  Lifecycle2[Lifecycle2["ContainerScoped"] = 3] = "ContainerScoped";
})(Lifecycle || (Lifecycle = {}));
var lifecycle_default = Lifecycle;
// node_modules/tsyringe/node_modules/tslib/modules/index.js
var import_tslib88 = __toESM(require_tslib2(), 1);
var {
  __extends: __extends2,
  __assign: __assign2,
  __rest: __rest2,
  __decorate: __decorate2,
  __param: __param2,
  __metadata: __metadata2,
  __awaiter: __awaiter2,
  __generator: __generator2,
  __exportStar: __exportStar2,
  __createBinding: __createBinding2,
  __values: __values2,
  __read: __read2,
  __spread: __spread2,
  __spreadArrays: __spreadArrays2,
  __await: __await2,
  __asyncGenerator: __asyncGenerator2,
  __asyncDelegator: __asyncDelegator2,
  __asyncValues: __asyncValues2,
  __makeTemplateObject: __makeTemplateObject2,
  __importStar: __importStar2,
  __importDefault: __importDefault2,
  __classPrivateFieldGet: __classPrivateFieldGet2,
  __classPrivateFieldSet: __classPrivateFieldSet2
} = import_tslib88.default;

// node_modules/tsyringe/dist/esm5/reflection-helpers.js
var INJECTION_TOKEN_METADATA_KEY = "injectionTokens";
function getParamInfo(target2) {
  var params = Reflect.getMetadata("design:paramtypes", target2) || [];
  var injectionTokens = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target2) || {};
  Object.keys(injectionTokens).forEach(function(key) {
    params[+key] = injectionTokens[key];
  });
  return params;
}

// node_modules/tsyringe/dist/esm5/providers/class-provider.js
function isClassProvider(provider) {
  return !!provider.useClass;
}
// node_modules/tsyringe/dist/esm5/providers/factory-provider.js
function isFactoryProvider(provider) {
  return !!provider.useFactory;
}
// node_modules/tsyringe/dist/esm5/lazy-helpers.js
var DelayedConstructor = function() {
  function DelayedConstructor2(wrap) {
    this.wrap = wrap;
    this.reflectMethods = [
      "get",
      "getPrototypeOf",
      "setPrototypeOf",
      "getOwnPropertyDescriptor",
      "defineProperty",
      "has",
      "set",
      "deleteProperty",
      "apply",
      "construct",
      "ownKeys"
    ];
  }
  DelayedConstructor2.prototype.createProxy = function(createObject) {
    var _this = this;
    var target2 = {};
    var init = false;
    var value;
    var delayedObject = function() {
      if (!init) {
        value = createObject(_this.wrap());
        init = true;
      }
      return value;
    };
    return new Proxy(target2, this.createHandler(delayedObject));
  };
  DelayedConstructor2.prototype.createHandler = function(delayedObject) {
    var handler = {};
    var install = function(name2) {
      handler[name2] = function() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        args[0] = delayedObject();
        var method = Reflect[name2];
        return method.apply(undefined, __spread2(args));
      };
    };
    this.reflectMethods.forEach(install);
    return handler;
  };
  return DelayedConstructor2;
}();

// node_modules/tsyringe/dist/esm5/providers/injection-token.js
function isNormalToken(token) {
  return typeof token === "string" || typeof token === "symbol";
}
function isTokenDescriptor(descriptor) {
  return typeof descriptor === "object" && "token" in descriptor && "multiple" in descriptor;
}
function isTransformDescriptor(descriptor) {
  return typeof descriptor === "object" && "token" in descriptor && "transform" in descriptor;
}
function isConstructorToken(token) {
  return typeof token === "function" || token instanceof DelayedConstructor;
}
// node_modules/tsyringe/dist/esm5/providers/token-provider.js
function isTokenProvider(provider) {
  return !!provider.useToken;
}
// node_modules/tsyringe/dist/esm5/providers/value-provider.js
function isValueProvider(provider) {
  return provider.useValue != null;
}
// node_modules/tsyringe/dist/esm5/providers/provider.js
function isProvider(provider) {
  return isClassProvider(provider) || isValueProvider(provider) || isTokenProvider(provider) || isFactoryProvider(provider);
}

// node_modules/tsyringe/dist/esm5/registry-base.js
var RegistryBase = function() {
  function RegistryBase2() {
    this._registryMap = new Map;
  }
  RegistryBase2.prototype.entries = function() {
    return this._registryMap.entries();
  };
  RegistryBase2.prototype.getAll = function(key) {
    this.ensure(key);
    return this._registryMap.get(key);
  };
  RegistryBase2.prototype.get = function(key) {
    this.ensure(key);
    var value = this._registryMap.get(key);
    return value[value.length - 1] || null;
  };
  RegistryBase2.prototype.set = function(key, value) {
    this.ensure(key);
    this._registryMap.get(key).push(value);
  };
  RegistryBase2.prototype.setAll = function(key, value) {
    this._registryMap.set(key, value);
  };
  RegistryBase2.prototype.has = function(key) {
    this.ensure(key);
    return this._registryMap.get(key).length > 0;
  };
  RegistryBase2.prototype.clear = function() {
    this._registryMap.clear();
  };
  RegistryBase2.prototype.ensure = function(key) {
    if (!this._registryMap.has(key)) {
      this._registryMap.set(key, []);
    }
  };
  return RegistryBase2;
}();
var registry_base_default = RegistryBase;

// node_modules/tsyringe/dist/esm5/registry.js
var Registry = function(_super) {
  __extends2(Registry2, _super);
  function Registry2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return Registry2;
}(registry_base_default);
var registry_default = Registry;

// node_modules/tsyringe/dist/esm5/resolution-context.js
var ResolutionContext = function() {
  function ResolutionContext2() {
    this.scopedResolutions = new Map;
  }
  return ResolutionContext2;
}();
var resolution_context_default = ResolutionContext;

// node_modules/tsyringe/dist/esm5/error-helpers.js
function formatDependency(params, idx) {
  if (params === null) {
    return "at position #" + idx;
  }
  var argName = params.split(",")[idx].trim();
  return '"' + argName + '" at position #' + idx;
}
function composeErrorMessage(msg, e, indent) {
  if (indent === undefined) {
    indent = "    ";
  }
  return __spread2([msg], e.message.split(`
`).map(function(l) {
    return indent + l;
  })).join(`
`);
}
function formatErrorCtor(ctor, paramIdx, error) {
  var _a2 = __read2(ctor.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), _b = _a2[1], params = _b === undefined ? null : _b;
  var dep = formatDependency(params, paramIdx);
  return composeErrorMessage("Cannot inject the dependency " + dep + ' of "' + ctor.name + '" constructor. Reason:', error);
}

// node_modules/tsyringe/dist/esm5/types/disposable.js
function isDisposable(value) {
  if (typeof value.dispose !== "function")
    return false;
  var disposeFun = value.dispose;
  if (disposeFun.length > 0) {
    return false;
  }
  return true;
}

// node_modules/tsyringe/dist/esm5/interceptors.js
var PreResolutionInterceptors = function(_super) {
  __extends2(PreResolutionInterceptors2, _super);
  function PreResolutionInterceptors2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return PreResolutionInterceptors2;
}(registry_base_default);
var PostResolutionInterceptors = function(_super) {
  __extends2(PostResolutionInterceptors2, _super);
  function PostResolutionInterceptors2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return PostResolutionInterceptors2;
}(registry_base_default);
var Interceptors = function() {
  function Interceptors2() {
    this.preResolution = new PreResolutionInterceptors;
    this.postResolution = new PostResolutionInterceptors;
  }
  return Interceptors2;
}();
var interceptors_default = Interceptors;

// node_modules/tsyringe/dist/esm5/dependency-container.js
var typeInfo = new Map;
var InternalDependencyContainer = function() {
  function InternalDependencyContainer2(parent) {
    this.parent = parent;
    this._registry = new registry_default;
    this.interceptors = new interceptors_default;
    this.disposed = false;
    this.disposables = new Set;
  }
  InternalDependencyContainer2.prototype.register = function(token, providerOrConstructor, options) {
    if (options === undefined) {
      options = { lifecycle: lifecycle_default.Transient };
    }
    this.ensureNotDisposed();
    var provider;
    if (!isProvider(providerOrConstructor)) {
      provider = { useClass: providerOrConstructor };
    } else {
      provider = providerOrConstructor;
    }
    if (isTokenProvider(provider)) {
      var path = [token];
      var tokenProvider = provider;
      while (tokenProvider != null) {
        var currentToken = tokenProvider.useToken;
        if (path.includes(currentToken)) {
          throw new Error("Token registration cycle detected! " + __spread2(path, [currentToken]).join(" -> "));
        }
        path.push(currentToken);
        var registration = this._registry.get(currentToken);
        if (registration && isTokenProvider(registration.provider)) {
          tokenProvider = registration.provider;
        } else {
          tokenProvider = null;
        }
      }
    }
    if (options.lifecycle === lifecycle_default.Singleton || options.lifecycle == lifecycle_default.ContainerScoped || options.lifecycle == lifecycle_default.ResolutionScoped) {
      if (isValueProvider(provider) || isFactoryProvider(provider)) {
        throw new Error('Cannot use lifecycle "' + lifecycle_default[options.lifecycle] + '" with ValueProviders or FactoryProviders');
      }
    }
    this._registry.set(token, { provider, options });
    return this;
  };
  InternalDependencyContainer2.prototype.registerType = function(from, to) {
    this.ensureNotDisposed();
    if (isNormalToken(to)) {
      return this.register(from, {
        useToken: to
      });
    }
    return this.register(from, {
      useClass: to
    });
  };
  InternalDependencyContainer2.prototype.registerInstance = function(token, instance) {
    this.ensureNotDisposed();
    return this.register(token, {
      useValue: instance
    });
  };
  InternalDependencyContainer2.prototype.registerSingleton = function(from, to) {
    this.ensureNotDisposed();
    if (isNormalToken(from)) {
      if (isNormalToken(to)) {
        return this.register(from, {
          useToken: to
        }, { lifecycle: lifecycle_default.Singleton });
      } else if (to) {
        return this.register(from, {
          useClass: to
        }, { lifecycle: lifecycle_default.Singleton });
      }
      throw new Error('Cannot register a type name as a singleton without a "to" token');
    }
    var useClass = from;
    if (to && !isNormalToken(to)) {
      useClass = to;
    }
    return this.register(from, {
      useClass
    }, { lifecycle: lifecycle_default.Singleton });
  };
  InternalDependencyContainer2.prototype.resolve = function(token, context, isOptional) {
    if (context === undefined) {
      context = new resolution_context_default;
    }
    if (isOptional === undefined) {
      isOptional = false;
    }
    this.ensureNotDisposed();
    var registration = this.getRegistration(token);
    if (!registration && isNormalToken(token)) {
      if (isOptional) {
        return;
      }
      throw new Error('Attempted to resolve unregistered dependency token: "' + token.toString() + '"');
    }
    this.executePreResolutionInterceptor(token, "Single");
    if (registration) {
      var result = this.resolveRegistration(registration, context);
      this.executePostResolutionInterceptor(token, result, "Single");
      return result;
    }
    if (isConstructorToken(token)) {
      var result = this.construct(token, context);
      this.executePostResolutionInterceptor(token, result, "Single");
      return result;
    }
    throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
  };
  InternalDependencyContainer2.prototype.executePreResolutionInterceptor = function(token, resolutionType) {
    var e_1, _a2;
    if (this.interceptors.preResolution.has(token)) {
      var remainingInterceptors = [];
      try {
        for (var _b = __values2(this.interceptors.preResolution.getAll(token)), _c = _b.next();!_c.done; _c = _b.next()) {
          var interceptor = _c.value;
          if (interceptor.options.frequency != "Once") {
            remainingInterceptors.push(interceptor);
          }
          interceptor.callback(token, resolutionType);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return))
            _a2.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      this.interceptors.preResolution.setAll(token, remainingInterceptors);
    }
  };
  InternalDependencyContainer2.prototype.executePostResolutionInterceptor = function(token, result, resolutionType) {
    var e_2, _a2;
    if (this.interceptors.postResolution.has(token)) {
      var remainingInterceptors = [];
      try {
        for (var _b = __values2(this.interceptors.postResolution.getAll(token)), _c = _b.next();!_c.done; _c = _b.next()) {
          var interceptor = _c.value;
          if (interceptor.options.frequency != "Once") {
            remainingInterceptors.push(interceptor);
          }
          interceptor.callback(token, result, resolutionType);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return))
            _a2.call(_b);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      this.interceptors.postResolution.setAll(token, remainingInterceptors);
    }
  };
  InternalDependencyContainer2.prototype.resolveRegistration = function(registration, context) {
    this.ensureNotDisposed();
    if (registration.options.lifecycle === lifecycle_default.ResolutionScoped && context.scopedResolutions.has(registration)) {
      return context.scopedResolutions.get(registration);
    }
    var isSingleton = registration.options.lifecycle === lifecycle_default.Singleton;
    var isContainerScoped = registration.options.lifecycle === lifecycle_default.ContainerScoped;
    var returnInstance = isSingleton || isContainerScoped;
    var resolved;
    if (isValueProvider(registration.provider)) {
      resolved = registration.provider.useValue;
    } else if (isTokenProvider(registration.provider)) {
      resolved = returnInstance ? registration.instance || (registration.instance = this.resolve(registration.provider.useToken, context)) : this.resolve(registration.provider.useToken, context);
    } else if (isClassProvider(registration.provider)) {
      resolved = returnInstance ? registration.instance || (registration.instance = this.construct(registration.provider.useClass, context)) : this.construct(registration.provider.useClass, context);
    } else if (isFactoryProvider(registration.provider)) {
      resolved = registration.provider.useFactory(this);
    } else {
      resolved = this.construct(registration.provider, context);
    }
    if (registration.options.lifecycle === lifecycle_default.ResolutionScoped) {
      context.scopedResolutions.set(registration, resolved);
    }
    return resolved;
  };
  InternalDependencyContainer2.prototype.resolveAll = function(token, context, isOptional) {
    var _this = this;
    if (context === undefined) {
      context = new resolution_context_default;
    }
    if (isOptional === undefined) {
      isOptional = false;
    }
    this.ensureNotDisposed();
    var registrations = this.getAllRegistrations(token);
    if (!registrations && isNormalToken(token)) {
      if (isOptional) {
        return [];
      }
      throw new Error('Attempted to resolve unregistered dependency token: "' + token.toString() + '"');
    }
    this.executePreResolutionInterceptor(token, "All");
    if (registrations) {
      var result_1 = registrations.map(function(item) {
        return _this.resolveRegistration(item, context);
      });
      this.executePostResolutionInterceptor(token, result_1, "All");
      return result_1;
    }
    var result = [this.construct(token, context)];
    this.executePostResolutionInterceptor(token, result, "All");
    return result;
  };
  InternalDependencyContainer2.prototype.isRegistered = function(token, recursive) {
    if (recursive === undefined) {
      recursive = false;
    }
    this.ensureNotDisposed();
    return this._registry.has(token) || recursive && (this.parent || false) && this.parent.isRegistered(token, true);
  };
  InternalDependencyContainer2.prototype.reset = function() {
    this.ensureNotDisposed();
    this._registry.clear();
    this.interceptors.preResolution.clear();
    this.interceptors.postResolution.clear();
  };
  InternalDependencyContainer2.prototype.clearInstances = function() {
    var e_3, _a2;
    this.ensureNotDisposed();
    try {
      for (var _b = __values2(this._registry.entries()), _c = _b.next();!_c.done; _c = _b.next()) {
        var _d = __read2(_c.value, 2), token = _d[0], registrations = _d[1];
        this._registry.setAll(token, registrations.filter(function(registration) {
          return !isValueProvider(registration.provider);
        }).map(function(registration) {
          registration.instance = undefined;
          return registration;
        }));
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
  };
  InternalDependencyContainer2.prototype.createChildContainer = function() {
    var e_4, _a2;
    this.ensureNotDisposed();
    var childContainer = new InternalDependencyContainer2(this);
    try {
      for (var _b = __values2(this._registry.entries()), _c = _b.next();!_c.done; _c = _b.next()) {
        var _d = __read2(_c.value, 2), token = _d[0], registrations = _d[1];
        if (registrations.some(function(_a3) {
          var options = _a3.options;
          return options.lifecycle === lifecycle_default.ContainerScoped;
        })) {
          childContainer._registry.setAll(token, registrations.map(function(registration) {
            if (registration.options.lifecycle === lifecycle_default.ContainerScoped) {
              return {
                provider: registration.provider,
                options: registration.options
              };
            }
            return registration;
          }));
        }
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
    return childContainer;
  };
  InternalDependencyContainer2.prototype.beforeResolution = function(token, callback, options) {
    if (options === undefined) {
      options = { frequency: "Always" };
    }
    this.interceptors.preResolution.set(token, {
      callback,
      options
    });
  };
  InternalDependencyContainer2.prototype.afterResolution = function(token, callback, options) {
    if (options === undefined) {
      options = { frequency: "Always" };
    }
    this.interceptors.postResolution.set(token, {
      callback,
      options
    });
  };
  InternalDependencyContainer2.prototype.dispose = function() {
    return __awaiter2(this, undefined, undefined, function() {
      var promises;
      return __generator2(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            this.disposed = true;
            promises = [];
            this.disposables.forEach(function(disposable) {
              var maybePromise = disposable.dispose();
              if (maybePromise) {
                promises.push(maybePromise);
              }
            });
            return [4, Promise.all(promises)];
          case 1:
            _a2.sent();
            return [2];
        }
      });
    });
  };
  InternalDependencyContainer2.prototype.getRegistration = function(token) {
    if (this.isRegistered(token)) {
      return this._registry.get(token);
    }
    if (this.parent) {
      return this.parent.getRegistration(token);
    }
    return null;
  };
  InternalDependencyContainer2.prototype.getAllRegistrations = function(token) {
    if (this.isRegistered(token)) {
      return this._registry.getAll(token);
    }
    if (this.parent) {
      return this.parent.getAllRegistrations(token);
    }
    return null;
  };
  InternalDependencyContainer2.prototype.construct = function(ctor, context) {
    var _this = this;
    if (ctor instanceof DelayedConstructor) {
      return ctor.createProxy(function(target2) {
        return _this.resolve(target2, context);
      });
    }
    var instance = function() {
      var paramInfo = typeInfo.get(ctor);
      if (!paramInfo || paramInfo.length === 0) {
        if (ctor.length === 0) {
          return new ctor;
        } else {
          throw new Error('TypeInfo not known for "' + ctor.name + '"');
        }
      }
      var params = paramInfo.map(_this.resolveParams(context, ctor));
      return new (ctor.bind.apply(ctor, __spread2([undefined], params)));
    }();
    if (isDisposable(instance)) {
      this.disposables.add(instance);
    }
    return instance;
  };
  InternalDependencyContainer2.prototype.resolveParams = function(context, ctor) {
    var _this = this;
    return function(param, idx) {
      var _a2, _b, _c;
      try {
        if (isTokenDescriptor(param)) {
          if (isTransformDescriptor(param)) {
            return param.multiple ? (_a2 = _this.resolve(param.transform)).transform.apply(_a2, __spread2([_this.resolveAll(param.token, new resolution_context_default, param.isOptional)], param.transformArgs)) : (_b = _this.resolve(param.transform)).transform.apply(_b, __spread2([_this.resolve(param.token, context, param.isOptional)], param.transformArgs));
          } else {
            return param.multiple ? _this.resolveAll(param.token, new resolution_context_default, param.isOptional) : _this.resolve(param.token, context, param.isOptional);
          }
        } else if (isTransformDescriptor(param)) {
          return (_c = _this.resolve(param.transform, context)).transform.apply(_c, __spread2([_this.resolve(param.token, context)], param.transformArgs));
        }
        return _this.resolve(param, context);
      } catch (e) {
        throw new Error(formatErrorCtor(ctor, idx, e));
      }
    };
  };
  InternalDependencyContainer2.prototype.ensureNotDisposed = function() {
    if (this.disposed) {
      throw new Error("This container has been disposed, you cannot interact with a disposed container");
    }
  };
  return InternalDependencyContainer2;
}();
var instance = new InternalDependencyContainer;
// node_modules/tsyringe/dist/esm5/decorators/injectable.js
function injectable(options) {
  return function(target2) {
    typeInfo.set(target2, getParamInfo(target2));
    if (options && options.token) {
      if (!Array.isArray(options.token)) {
        instance.register(options.token, target2);
      } else {
        options.token.forEach(function(token) {
          instance.register(token, target2);
        });
      }
    }
  };
}
var injectable_default = injectable;
// node_modules/tsyringe/dist/esm5/index.js
if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
  throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
}

// node_modules/@peculiar/asn1-pfx/build/es2015/attribute.js
var PKCS12AttrSet_1;

class PKCS12Attribute {
  attrId = "";
  attrValues = [];
  constructor(params = {}) {
    Object.assign(params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], PKCS12Attribute.prototype, "attrId", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    repeated: "set"
  })
], PKCS12Attribute.prototype, "attrValues", undefined);
var PKCS12AttrSet = PKCS12AttrSet_1 = class PKCS12AttrSet2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, PKCS12AttrSet_1.prototype);
  }
};
PKCS12AttrSet = PKCS12AttrSet_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: PKCS12Attribute
  })
], PKCS12AttrSet);
// node_modules/@peculiar/asn1-pfx/build/es2015/authenticated_safe.js
var AuthenticatedSafe_1;
var AuthenticatedSafe = AuthenticatedSafe_1 = class AuthenticatedSafe2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, AuthenticatedSafe_1.prototype);
  }
};
AuthenticatedSafe = AuthenticatedSafe_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: ContentInfo
  })
], AuthenticatedSafe);
// node_modules/@peculiar/asn1-pfx/build/es2015/object_identifiers.js
var id_rsadsi = "1.2.840.113549";
var id_pkcs = `${id_rsadsi}.1`;
var id_pkcs_12 = `${id_pkcs}.12`;
var id_pkcs_12PbeIds = `${id_pkcs_12}.1`;
var id_pbeWithSHAAnd128BitRC4 = `${id_pkcs_12PbeIds}.1`;
var id_pbeWithSHAAnd40BitRC4 = `${id_pkcs_12PbeIds}.2`;
var id_pbeWithSHAAnd3_KeyTripleDES_CBC = `${id_pkcs_12PbeIds}.3`;
var id_pbeWithSHAAnd2_KeyTripleDES_CBC = `${id_pkcs_12PbeIds}.4`;
var id_pbeWithSHAAnd128BitRC2_CBC = `${id_pkcs_12PbeIds}.5`;
var id_pbewithSHAAnd40BitRC2_CBC = `${id_pkcs_12PbeIds}.6`;
var id_bagtypes = `${id_pkcs_12}.10.1`;

// node_modules/@peculiar/asn1-pfx/build/es2015/bags/types.js
var id_keyBag = `${id_bagtypes}.1`;
var id_pkcs8ShroudedKeyBag = `${id_bagtypes}.2`;
var id_certBag = `${id_bagtypes}.3`;
var id_CRLBag = `${id_bagtypes}.4`;
var id_SecretBag = `${id_bagtypes}.5`;
var id_SafeContents = `${id_bagtypes}.6`;
var id_pkcs_9 = "1.2.840.113549.1.9";

// node_modules/@peculiar/asn1-pfx/build/es2015/bags/cert_bag.js
class CertBag {
  certId = "";
  certValue = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], CertBag.prototype, "certId", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    context: 0
  })
], CertBag.prototype, "certValue", undefined);
var id_certTypes = `${id_pkcs_9}.22`;
var id_x509Certificate = `${id_certTypes}.1`;
var id_sdsiCertificate = `${id_certTypes}.2`;
// node_modules/@peculiar/asn1-pfx/build/es2015/bags/crl_bag.js
class CRLBag {
  crlId = "";
  crltValue = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], CRLBag.prototype, "crlId", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    context: 0
  })
], CRLBag.prototype, "crltValue", undefined);
var id_crlTypes = `${id_pkcs_9}.23`;
var id_x509CRL = `${id_crlTypes}.1`;
// node_modules/@peculiar/asn1-pkcs8/build/es2015/encrypted_private_key_info.js
class EncryptedData extends OctetString2 {
}

class EncryptedPrivateKeyInfo {
  encryptionAlgorithm = new AlgorithmIdentifier;
  encryptedData = new EncryptedData;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], EncryptedPrivateKeyInfo.prototype, "encryptionAlgorithm", undefined);
__decorate([
  AsnProp({ type: EncryptedData })
], EncryptedPrivateKeyInfo.prototype, "encryptedData", undefined);
// node_modules/@peculiar/asn1-pkcs8/build/es2015/private_key_info.js
var Attributes_1;
var Version2;
(function(Version3) {
  Version3[Version3["v1"] = 0] = "v1";
})(Version2 || (Version2 = {}));

class PrivateKey extends OctetString2 {
}
var Attributes = Attributes_1 = class Attributes2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, Attributes_1.prototype);
  }
};
Attributes = Attributes_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: Attribute
  })
], Attributes);
class PrivateKeyInfo {
  version = Version2.v1;
  privateKeyAlgorithm = new AlgorithmIdentifier;
  privateKey = new PrivateKey;
  attributes;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], PrivateKeyInfo.prototype, "version", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], PrivateKeyInfo.prototype, "privateKeyAlgorithm", undefined);
__decorate([
  AsnProp({ type: PrivateKey })
], PrivateKeyInfo.prototype, "privateKey", undefined);
__decorate([
  AsnProp({
    type: Attributes,
    implicit: true,
    context: 0,
    optional: true
  })
], PrivateKeyInfo.prototype, "attributes", undefined);
// node_modules/@peculiar/asn1-pfx/build/es2015/bags/key_bag.js
var KeyBag = class KeyBag2 extends PrivateKeyInfo {
};
KeyBag = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], KeyBag);
// node_modules/@peculiar/asn1-pfx/build/es2015/bags/pkcs8_shrouded_key_bag.js
var PKCS8ShroudedKeyBag = class PKCS8ShroudedKeyBag2 extends EncryptedPrivateKeyInfo {
};
PKCS8ShroudedKeyBag = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], PKCS8ShroudedKeyBag);
// node_modules/@peculiar/asn1-pfx/build/es2015/bags/secret_bag.js
class SecretBag {
  secretTypeId = "";
  secretValue = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], SecretBag.prototype, "secretTypeId", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    context: 0
  })
], SecretBag.prototype, "secretValue", undefined);
// node_modules/@peculiar/asn1-pfx/build/es2015/mac_data.js
class MacData {
  mac = new DigestInfo;
  macSalt = new OctetString2;
  iterations = 1;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: DigestInfo })
], MacData.prototype, "mac", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], MacData.prototype, "macSalt", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    defaultValue: 1
  })
], MacData.prototype, "iterations", undefined);
// node_modules/@peculiar/asn1-pfx/build/es2015/pfx.js
class PFX {
  version = 3;
  authSafe = new ContentInfo;
  macData = new MacData;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], PFX.prototype, "version", undefined);
__decorate([
  AsnProp({ type: ContentInfo })
], PFX.prototype, "authSafe", undefined);
__decorate([
  AsnProp({
    type: MacData,
    optional: true
  })
], PFX.prototype, "macData", undefined);
// node_modules/@peculiar/asn1-pfx/build/es2015/safe_bag.js
var SafeContents_1;

class SafeBag {
  bagId = "";
  bagValue = new ArrayBuffer(0);
  bagAttributes;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], SafeBag.prototype, "bagId", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    context: 0
  })
], SafeBag.prototype, "bagValue", undefined);
__decorate([
  AsnProp({
    type: PKCS12Attribute,
    repeated: "set",
    optional: true
  })
], SafeBag.prototype, "bagAttributes", undefined);
var SafeContents = SafeContents_1 = class SafeContents2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, SafeContents_1.prototype);
  }
};
SafeContents = SafeContents_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: SafeBag
  })
], SafeContents);
// node_modules/@peculiar/asn1-pkcs9/build/es2015/index.js
var ExtensionRequest_1;
var ExtendedCertificateAttributes_1;
var SMIMECapabilities_1;
var id_pkcs9 = "1.2.840.113549.1.9";
var id_pkcs9_mo = `${id_pkcs9}.0`;
var id_pkcs9_oc = `${id_pkcs9}.24`;
var id_pkcs9_at = `${id_pkcs9}.25`;
var id_pkcs9_sx = `${id_pkcs9}.26`;
var id_pkcs9_mr = `${id_pkcs9}.27`;
var id_pkcs9_oc_pkcsEntity = `${id_pkcs9_oc}.1`;
var id_pkcs9_oc_naturalPerson = `${id_pkcs9_oc}.2`;
var id_pkcs9_at_emailAddress = `${id_pkcs9}.1`;
var id_pkcs9_at_unstructuredName = `${id_pkcs9}.2`;
var id_pkcs9_at_contentType = `${id_pkcs9}.3`;
var id_pkcs9_at_messageDigest = `${id_pkcs9}.4`;
var id_pkcs9_at_signingTime = `${id_pkcs9}.5`;
var id_pkcs9_at_counterSignature = `${id_pkcs9}.6`;
var id_pkcs9_at_challengePassword = `${id_pkcs9}.7`;
var id_pkcs9_at_unstructuredAddress = `${id_pkcs9}.8`;
var id_pkcs9_at_extendedCertificateAttributes = `${id_pkcs9}.9`;
var id_pkcs9_at_signingDescription = `${id_pkcs9}.13`;
var id_pkcs9_at_extensionRequest = `${id_pkcs9}.14`;
var id_pkcs9_at_smimeCapabilities = `${id_pkcs9}.15`;
var id_pkcs9_at_friendlyName = `${id_pkcs9}.20`;
var id_pkcs9_at_localKeyId = `${id_pkcs9}.21`;
var id_pkcs9_at_pkcs15Token = `${id_pkcs9_at}.1`;
var id_pkcs9_at_encryptedPrivateKeyInfo = `${id_pkcs9_at}.2`;
var id_pkcs9_at_randomNonce = `${id_pkcs9_at}.3`;
var id_pkcs9_at_sequenceNumber = `${id_pkcs9_at}.4`;
var id_pkcs9_at_pkcs7PDU = `${id_pkcs9_at}.5`;
var id_ietf_at = "1.3.6.1.5.5.7.9";
var id_pkcs9_at_dateOfBirth = `${id_ietf_at}.1`;
var id_pkcs9_at_placeOfBirth = `${id_ietf_at}.2`;
var id_pkcs9_at_gender = `${id_ietf_at}.3`;
var id_pkcs9_at_countryOfCitizenship = `${id_ietf_at}.4`;
var id_pkcs9_at_countryOfResidence = `${id_ietf_at}.5`;
var id_pkcs9_sx_pkcs9String = `${id_pkcs9_sx}.1`;
var id_pkcs9_sx_signingTime = `${id_pkcs9_sx}.2`;
var id_pkcs9_mr_caseIgnoreMatch = `${id_pkcs9_mr}.1`;
var id_pkcs9_mr_signingTimeMatch = `${id_pkcs9_mr}.2`;
var id_smime = `${id_pkcs9}.16`;
var id_certTypes2 = `${id_pkcs9}.22`;
var crlTypes = `${id_pkcs9}.23`;
var id_at_pseudonym = `${id_at}.65`;
var PKCS9String = class PKCS9String2 extends DirectoryString {
  ia5String;
  constructor(params = {}) {
    super(params);
  }
  toString() {
    const o = {};
    o.toString();
    return this.ia5String || super.toString();
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.IA5String })
], PKCS9String.prototype, "ia5String", undefined);
PKCS9String = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], PKCS9String);
var Pkcs7PDU = class Pkcs7PDU2 extends ContentInfo {
};
Pkcs7PDU = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], Pkcs7PDU);
var UserPKCS12 = class UserPKCS122 extends PFX {
};
UserPKCS12 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], UserPKCS12);
var EncryptedPrivateKeyInfo2 = class EncryptedPrivateKeyInfo3 extends EncryptedPrivateKeyInfo {
};
EncryptedPrivateKeyInfo2 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], EncryptedPrivateKeyInfo2);
var EmailAddress = class EmailAddress2 {
  value;
  constructor(value = "") {
    this.value = value;
  }
  toString() {
    return this.value;
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.IA5String })
], EmailAddress.prototype, "value", undefined);
EmailAddress = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], EmailAddress);
var UnstructuredName = class UnstructuredName2 extends PKCS9String {
};
UnstructuredName = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], UnstructuredName);
var UnstructuredAddress = class UnstructuredAddress2 extends DirectoryString {
};
UnstructuredAddress = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], UnstructuredAddress);
var DateOfBirth = class DateOfBirth2 {
  value;
  constructor(value = new Date) {
    this.value = value;
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.GeneralizedTime })
], DateOfBirth.prototype, "value", undefined);
DateOfBirth = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], DateOfBirth);
var PlaceOfBirth = class PlaceOfBirth2 extends DirectoryString {
};
PlaceOfBirth = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], PlaceOfBirth);
var Gender = class Gender2 {
  value;
  constructor(value = "M") {
    this.value = value;
  }
  toString() {
    return this.value;
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.PrintableString })
], Gender.prototype, "value", undefined);
Gender = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], Gender);
var CountryOfCitizenship = class CountryOfCitizenship2 {
  value;
  constructor(value = "") {
    this.value = value;
  }
  toString() {
    return this.value;
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.PrintableString })
], CountryOfCitizenship.prototype, "value", undefined);
CountryOfCitizenship = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], CountryOfCitizenship);
var CountryOfResidence = class CountryOfResidence2 extends CountryOfCitizenship {
};
CountryOfResidence = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], CountryOfResidence);
var Pseudonym = class Pseudonym2 extends DirectoryString {
};
Pseudonym = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], Pseudonym);
var ContentType = class ContentType2 {
  value;
  constructor(value = "") {
    this.value = value;
  }
  toString() {
    return this.value;
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], ContentType.prototype, "value", undefined);
ContentType = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], ContentType);
var SigningTime3 = class SigningTime4 extends Time {
};
SigningTime3 = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], SigningTime3);
var SequenceNumber = class SequenceNumber2 {
  value;
  constructor(value = 0) {
    this.value = value;
  }
  toString() {
    return this.value.toString();
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], SequenceNumber.prototype, "value", undefined);
SequenceNumber = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], SequenceNumber);
var CounterSignature3 = class CounterSignature4 extends SignerInfo {
};
CounterSignature3 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], CounterSignature3);
var ChallengePassword = class ChallengePassword2 extends DirectoryString {
};
ChallengePassword = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], ChallengePassword);
var ExtensionRequest = ExtensionRequest_1 = class ExtensionRequest2 extends Extensions {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, ExtensionRequest_1.prototype);
  }
};
ExtensionRequest = ExtensionRequest_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], ExtensionRequest);
var ExtendedCertificateAttributes = ExtendedCertificateAttributes_1 = class ExtendedCertificateAttributes2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, ExtendedCertificateAttributes_1.prototype);
  }
};
ExtendedCertificateAttributes = ExtendedCertificateAttributes_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: Attribute2
  })
], ExtendedCertificateAttributes);
var FriendlyName = class FriendlyName2 {
  value;
  constructor(value = "") {
    this.value = value;
  }
  toString() {
    return this.value;
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.BmpString })
], FriendlyName.prototype, "value", undefined);
FriendlyName = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], FriendlyName);
var SMIMECapability = class SMIMECapability2 extends AlgorithmIdentifier {
};
SMIMECapability = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], SMIMECapability);
var SMIMECapabilities = SMIMECapabilities_1 = class SMIMECapabilities2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, SMIMECapabilities_1.prototype);
  }
};
SMIMECapabilities = SMIMECapabilities_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: SMIMECapability
  })
], SMIMECapabilities);

// node_modules/@peculiar/asn1-csr/build/es2015/attributes.js
var Attributes_12;
var Attributes3 = Attributes_12 = class Attributes4 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, Attributes_12.prototype);
  }
};
Attributes3 = Attributes_12 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: Attribute
  })
], Attributes3);
// node_modules/@peculiar/asn1-csr/build/es2015/certification_request_info.js
class CertificationRequestInfo {
  version = 0;
  subject = new Name;
  subjectPKInfo = new SubjectPublicKeyInfo;
  attributes = new Attributes3;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], CertificationRequestInfo.prototype, "version", undefined);
__decorate([
  AsnProp({ type: Name })
], CertificationRequestInfo.prototype, "subject", undefined);
__decorate([
  AsnProp({ type: SubjectPublicKeyInfo })
], CertificationRequestInfo.prototype, "subjectPKInfo", undefined);
__decorate([
  AsnProp({
    type: Attributes3,
    implicit: true,
    context: 0,
    optional: true
  })
], CertificationRequestInfo.prototype, "attributes", undefined);

// node_modules/@peculiar/asn1-csr/build/es2015/certification_request.js
class CertificationRequest {
  certificationRequestInfo = new CertificationRequestInfo;
  certificationRequestInfoRaw;
  signatureAlgorithm = new AlgorithmIdentifier;
  signature = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: CertificationRequestInfo,
    raw: true
  })
], CertificationRequest.prototype, "certificationRequestInfo", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], CertificationRequest.prototype, "signatureAlgorithm", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BitString })
], CertificationRequest.prototype, "signature", undefined);
// node_modules/@peculiar/x509/build/x509.es.js
/*!
 * MIT License
 * 
 * Copyright (c) Peculiar Ventures. All rights reserved.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
var diAlgorithm = "crypto.algorithm";

class AlgorithmProvider {
  getAlgorithms() {
    return instance.resolveAll(diAlgorithm);
  }
  toAsnAlgorithm(alg) {
    ({ ...alg });
    for (const algorithm of this.getAlgorithms()) {
      const res = algorithm.toAsnAlgorithm(alg);
      if (res) {
        return res;
      }
    }
    if (/^[0-9.]+$/.test(alg.name)) {
      const res = new AlgorithmIdentifier({ algorithm: alg.name });
      if ("parameters" in alg) {
        const unknown = alg;
        res.parameters = unknown.parameters;
      }
      return res;
    }
    throw new Error("Cannot convert WebCrypto algorithm to ASN.1 algorithm");
  }
  toWebAlgorithm(alg) {
    for (const algorithm of this.getAlgorithms()) {
      const res = algorithm.toWebAlgorithm(alg);
      if (res) {
        return res;
      }
    }
    const unknown = {
      name: alg.algorithm,
      parameters: alg.parameters
    };
    return unknown;
  }
}
var diAlgorithmProvider = "crypto.algorithmProvider";
instance.registerSingleton(diAlgorithmProvider, AlgorithmProvider);
var EcAlgorithm_1;
var idVersionOne = "1.3.36.3.3.2.8.1.1";
var idBrainpoolP160r1 = `${idVersionOne}.1`;
var idBrainpoolP160t1 = `${idVersionOne}.2`;
var idBrainpoolP192r1 = `${idVersionOne}.3`;
var idBrainpoolP192t1 = `${idVersionOne}.4`;
var idBrainpoolP224r1 = `${idVersionOne}.5`;
var idBrainpoolP224t1 = `${idVersionOne}.6`;
var idBrainpoolP256r1 = `${idVersionOne}.7`;
var idBrainpoolP256t1 = `${idVersionOne}.8`;
var idBrainpoolP320r1 = `${idVersionOne}.9`;
var idBrainpoolP320t1 = `${idVersionOne}.10`;
var idBrainpoolP384r1 = `${idVersionOne}.11`;
var idBrainpoolP384t1 = `${idVersionOne}.12`;
var idBrainpoolP512r1 = `${idVersionOne}.13`;
var idBrainpoolP512t1 = `${idVersionOne}.14`;
var brainpoolP160r1 = "brainpoolP160r1";
var brainpoolP160t1 = "brainpoolP160t1";
var brainpoolP192r1 = "brainpoolP192r1";
var brainpoolP192t1 = "brainpoolP192t1";
var brainpoolP224r1 = "brainpoolP224r1";
var brainpoolP224t1 = "brainpoolP224t1";
var brainpoolP256r1 = "brainpoolP256r1";
var brainpoolP256t1 = "brainpoolP256t1";
var brainpoolP320r1 = "brainpoolP320r1";
var brainpoolP320t1 = "brainpoolP320t1";
var brainpoolP384r1 = "brainpoolP384r1";
var brainpoolP384t1 = "brainpoolP384t1";
var brainpoolP512r1 = "brainpoolP512r1";
var brainpoolP512t1 = "brainpoolP512t1";
var ECDSA = "ECDSA";
var EcAlgorithm = EcAlgorithm_1 = class EcAlgorithm2 {
  toAsnAlgorithm(alg) {
    switch (alg.name.toLowerCase()) {
      case ECDSA.toLowerCase():
        if ("hash" in alg) {
          const hash = typeof alg.hash === "string" ? alg.hash : alg.hash.name;
          switch (hash.toLowerCase()) {
            case "sha-1":
              return ecdsaWithSHA1;
            case "sha-256":
              return ecdsaWithSHA256;
            case "sha-384":
              return ecdsaWithSHA384;
            case "sha-512":
              return ecdsaWithSHA512;
          }
        } else if ("namedCurve" in alg) {
          let parameters2 = "";
          switch (alg.namedCurve) {
            case "P-256":
              parameters2 = id_secp256r1;
              break;
            case "K-256":
              parameters2 = EcAlgorithm_1.SECP256K1;
              break;
            case "P-384":
              parameters2 = id_secp384r1;
              break;
            case "P-521":
              parameters2 = id_secp521r1;
              break;
            case brainpoolP160r1:
              parameters2 = idBrainpoolP160r1;
              break;
            case brainpoolP160t1:
              parameters2 = idBrainpoolP160t1;
              break;
            case brainpoolP192r1:
              parameters2 = idBrainpoolP192r1;
              break;
            case brainpoolP192t1:
              parameters2 = idBrainpoolP192t1;
              break;
            case brainpoolP224r1:
              parameters2 = idBrainpoolP224r1;
              break;
            case brainpoolP224t1:
              parameters2 = idBrainpoolP224t1;
              break;
            case brainpoolP256r1:
              parameters2 = idBrainpoolP256r1;
              break;
            case brainpoolP256t1:
              parameters2 = idBrainpoolP256t1;
              break;
            case brainpoolP320r1:
              parameters2 = idBrainpoolP320r1;
              break;
            case brainpoolP320t1:
              parameters2 = idBrainpoolP320t1;
              break;
            case brainpoolP384r1:
              parameters2 = idBrainpoolP384r1;
              break;
            case brainpoolP384t1:
              parameters2 = idBrainpoolP384t1;
              break;
            case brainpoolP512r1:
              parameters2 = idBrainpoolP512r1;
              break;
            case brainpoolP512t1:
              parameters2 = idBrainpoolP512t1;
              break;
          }
          if (parameters2) {
            return new AlgorithmIdentifier({
              algorithm: id_ecPublicKey,
              parameters: AsnConvert.serialize(new ECParameters({ namedCurve: parameters2 }))
            });
          }
        }
    }
    return null;
  }
  toWebAlgorithm(alg) {
    switch (alg.algorithm) {
      case id_ecdsaWithSHA1:
        return {
          name: ECDSA,
          hash: { name: "SHA-1" }
        };
      case id_ecdsaWithSHA256:
        return {
          name: ECDSA,
          hash: { name: "SHA-256" }
        };
      case id_ecdsaWithSHA384:
        return {
          name: ECDSA,
          hash: { name: "SHA-384" }
        };
      case id_ecdsaWithSHA512:
        return {
          name: ECDSA,
          hash: { name: "SHA-512" }
        };
      case id_ecPublicKey: {
        if (!alg.parameters) {
          throw new TypeError("Cannot get required parameters from EC algorithm");
        }
        const parameters2 = AsnConvert.parse(alg.parameters, ECParameters);
        switch (parameters2.namedCurve) {
          case id_secp256r1:
            return {
              name: ECDSA,
              namedCurve: "P-256"
            };
          case EcAlgorithm_1.SECP256K1:
            return {
              name: ECDSA,
              namedCurve: "K-256"
            };
          case id_secp384r1:
            return {
              name: ECDSA,
              namedCurve: "P-384"
            };
          case id_secp521r1:
            return {
              name: ECDSA,
              namedCurve: "P-521"
            };
          case idBrainpoolP160r1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP160r1
            };
          case idBrainpoolP160t1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP160t1
            };
          case idBrainpoolP192r1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP192r1
            };
          case idBrainpoolP192t1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP192t1
            };
          case idBrainpoolP224r1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP224r1
            };
          case idBrainpoolP224t1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP224t1
            };
          case idBrainpoolP256r1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP256r1
            };
          case idBrainpoolP256t1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP256t1
            };
          case idBrainpoolP320r1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP320r1
            };
          case idBrainpoolP320t1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP320t1
            };
          case idBrainpoolP384r1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP384r1
            };
          case idBrainpoolP384t1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP384t1
            };
          case idBrainpoolP512r1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP512r1
            };
          case idBrainpoolP512t1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP512t1
            };
        }
      }
    }
    return null;
  }
};
EcAlgorithm.SECP256K1 = "1.3.132.0.10";
EcAlgorithm = EcAlgorithm_1 = __decorate([
  injectable_default()
], EcAlgorithm);
instance.registerSingleton(diAlgorithm, EcAlgorithm);
var NAME2 = Symbol("name");
var VALUE = Symbol("value");

class TextObject {
  constructor(name2, items = {}, value = "") {
    this[NAME2] = name2;
    this[VALUE] = value;
    for (const key in items) {
      this[key] = items[key];
    }
  }
}
TextObject.NAME = NAME2;
TextObject.VALUE = VALUE;

class DefaultAlgorithmSerializer {
  static toTextObject(alg) {
    const obj = new TextObject("Algorithm Identifier", {}, OidSerializer.toString(alg.algorithm));
    if (alg.parameters) {
      switch (alg.algorithm) {
        case id_ecPublicKey: {
          const ecAlg = new EcAlgorithm().toWebAlgorithm(alg);
          if (ecAlg && "namedCurve" in ecAlg) {
            obj["Named Curve"] = ecAlg.namedCurve;
          } else {
            obj["Parameters"] = alg.parameters;
          }
          break;
        }
        default:
          obj["Parameters"] = alg.parameters;
      }
    }
    return obj;
  }
}

class OidSerializer {
  static toString(oid) {
    const name2 = this.items[oid];
    if (name2) {
      return name2;
    }
    return oid;
  }
}
OidSerializer.items = {
  [id_sha1]: "sha1",
  [id_sha224]: "sha224",
  [id_sha256]: "sha256",
  [id_sha384]: "sha384",
  [id_sha512]: "sha512",
  [id_rsaEncryption]: "rsaEncryption",
  [id_sha1WithRSAEncryption]: "sha1WithRSAEncryption",
  [id_sha224WithRSAEncryption]: "sha224WithRSAEncryption",
  [id_sha256WithRSAEncryption]: "sha256WithRSAEncryption",
  [id_sha384WithRSAEncryption]: "sha384WithRSAEncryption",
  [id_sha512WithRSAEncryption]: "sha512WithRSAEncryption",
  [id_ecPublicKey]: "ecPublicKey",
  [id_ecdsaWithSHA1]: "ecdsaWithSHA1",
  [id_ecdsaWithSHA224]: "ecdsaWithSHA224",
  [id_ecdsaWithSHA256]: "ecdsaWithSHA256",
  [id_ecdsaWithSHA384]: "ecdsaWithSHA384",
  [id_ecdsaWithSHA512]: "ecdsaWithSHA512",
  [id_kp_serverAuth]: "TLS WWW server authentication",
  [id_kp_clientAuth]: "TLS WWW client authentication",
  [id_kp_codeSigning]: "Code Signing",
  [id_kp_emailProtection]: "E-mail Protection",
  [id_kp_timeStamping]: "Time Stamping",
  [id_kp_OCSPSigning]: "OCSP Signing",
  [id_signedData]: "Signed Data"
};

class TextConverter {
  static serialize(obj) {
    return this.serializeObj(obj).join(`
`);
  }
  static pad(deep = 0) {
    return "".padStart(2 * deep, " ");
  }
  static serializeObj(obj, deep = 0) {
    const res = [];
    let pad = this.pad(deep++);
    let value = "";
    const objValue = obj[TextObject.VALUE];
    if (objValue) {
      value = ` ${objValue}`;
    }
    res.push(`${pad}${obj[TextObject.NAME]}:${value}`);
    pad = this.pad(deep);
    for (const key in obj) {
      if (typeof key === "symbol") {
        continue;
      }
      const value2 = obj[key];
      const keyValue = key ? `${key}: ` : "";
      if (typeof value2 === "string" || typeof value2 === "number" || typeof value2 === "boolean") {
        res.push(`${pad}${keyValue}${value2}`);
      } else if (value2 instanceof Date) {
        res.push(`${pad}${keyValue}${value2.toUTCString()}`);
      } else if (Array.isArray(value2)) {
        for (const obj2 of value2) {
          obj2[TextObject.NAME] = key;
          res.push(...this.serializeObj(obj2, deep));
        }
      } else if (value2 instanceof TextObject) {
        value2[TextObject.NAME] = key;
        res.push(...this.serializeObj(value2, deep));
      } else if (BufferSourceConverter.isBufferSource(value2)) {
        if (key) {
          res.push(`${pad}${keyValue}`);
          res.push(...this.serializeBufferSource(value2, deep + 1));
        } else {
          res.push(...this.serializeBufferSource(value2, deep));
        }
      } else if ("toTextObject" in value2) {
        const obj2 = value2.toTextObject();
        obj2[TextObject.NAME] = key;
        res.push(...this.serializeObj(obj2, deep));
      } else {
        throw new TypeError("Cannot serialize data in text format. Unsupported type.");
      }
    }
    return res;
  }
  static serializeBufferSource(buffer, deep = 0) {
    const pad = this.pad(deep);
    const view = BufferSourceConverter.toUint8Array(buffer);
    const res = [];
    for (let i = 0;i < view.length; ) {
      const row = [];
      for (let j = 0;j < 16 && i < view.length; j++) {
        if (j === 8) {
          row.push("");
        }
        const hex2 = view[i++].toString(16).padStart(2, "0");
        row.push(hex2);
      }
      res.push(`${pad}${row.join(" ")}`);
    }
    return res;
  }
  static serializeAlgorithm(alg) {
    return this.algorithmSerializer.toTextObject(alg);
  }
}
TextConverter.oidSerializer = OidSerializer;
TextConverter.algorithmSerializer = DefaultAlgorithmSerializer;
var _AsnData_rawData;

class AsnData {
  get rawData() {
    if (!__classPrivateFieldGet(this, _AsnData_rawData, "f")) {
      __classPrivateFieldSet(this, _AsnData_rawData, AsnConvert.serialize(this.asn), "f");
    }
    return __classPrivateFieldGet(this, _AsnData_rawData, "f");
  }
  constructor(...args) {
    _AsnData_rawData.set(this, undefined);
    if (BufferSourceConverter.isBufferSource(args[0])) {
      this.asn = AsnConvert.parse(args[0], args[1]);
      __classPrivateFieldSet(this, _AsnData_rawData, BufferSourceConverter.toArrayBuffer(args[0]), "f");
      this.onInit(this.asn);
    } else {
      this.asn = args[0];
      this.onInit(this.asn);
    }
  }
  equal(data) {
    if (data instanceof AsnData) {
      return isEqual(data.rawData, this.rawData);
    }
    return false;
  }
  toString(format2 = "text") {
    switch (format2) {
      case "asn":
        return AsnConvert.toString(this.rawData);
      case "text":
        return TextConverter.serialize(this.toTextObject());
      case "hex":
        return Convert.ToHex(this.rawData);
      case "base64":
        return Convert.ToBase64(this.rawData);
      case "base64url":
        return Convert.ToBase64Url(this.rawData);
      default:
        throw TypeError("Argument 'format' is unsupported value");
    }
  }
  getTextName() {
    const constructor = this.constructor;
    return constructor.NAME;
  }
  toTextObject() {
    const obj = this.toTextObjectEmpty();
    obj[""] = this.rawData;
    return obj;
  }
  toTextObjectEmpty(value) {
    return new TextObject(this.getTextName(), {}, value);
  }
}
_AsnData_rawData = new WeakMap;
AsnData.NAME = "ASN";

class Extension2 extends AsnData {
  constructor(...args) {
    let raw;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      raw = BufferSourceConverter.toArrayBuffer(args[0]);
    } else {
      raw = AsnConvert.serialize(new Extension({
        extnID: args[0],
        critical: args[1],
        extnValue: new OctetString2(BufferSourceConverter.toArrayBuffer(args[2]))
      }));
    }
    super(raw, Extension);
  }
  onInit(asn) {
    this.type = asn.extnID;
    this.critical = asn.critical;
    this.value = asn.extnValue.buffer;
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    obj[""] = this.value;
    return obj;
  }
  toTextObjectWithoutValue() {
    const obj = this.toTextObjectEmpty(this.critical ? "critical" : undefined);
    if (obj[TextObject.NAME] === Extension2.NAME) {
      obj[TextObject.NAME] = OidSerializer.toString(this.type);
    }
    return obj;
  }
}
var _a2;

class CryptoProvider {
  static isCryptoKeyPair(data) {
    return data && data.privateKey && data.publicKey;
  }
  static isCryptoKey(data) {
    return data && data.usages && data.type && data.algorithm && data.extractable !== undefined;
  }
  constructor() {
    this.items = new Map;
    this[_a2] = "CryptoProvider";
    if (typeof self !== "undefined" && typeof crypto !== "undefined") {
      this.set(CryptoProvider.DEFAULT, crypto);
    } else if (typeof global !== "undefined" && global.crypto && global.crypto.subtle) {
      this.set(CryptoProvider.DEFAULT, global.crypto);
    }
  }
  clear() {
    this.items.clear();
  }
  delete(key) {
    return this.items.delete(key);
  }
  forEach(callbackfn, thisArg) {
    return this.items.forEach(callbackfn, thisArg);
  }
  has(key) {
    return this.items.has(key);
  }
  get size() {
    return this.items.size;
  }
  entries() {
    return this.items.entries();
  }
  keys() {
    return this.items.keys();
  }
  values() {
    return this.items.values();
  }
  [Symbol.iterator]() {
    return this.items[Symbol.iterator]();
  }
  get(key = CryptoProvider.DEFAULT) {
    const crypto2 = this.items.get(key.toLowerCase());
    if (!crypto2) {
      throw new Error(`Cannot get Crypto by name '${key}'`);
    }
    return crypto2;
  }
  set(key, value) {
    if (typeof key === "string") {
      if (!value) {
        throw new TypeError("Argument 'value' is required");
      }
      this.items.set(key.toLowerCase(), value);
    } else {
      this.items.set(CryptoProvider.DEFAULT, key);
    }
    return this;
  }
}
_a2 = Symbol.toStringTag;
CryptoProvider.DEFAULT = "default";
var cryptoProvider = new CryptoProvider;
var OID_REGEX = /^[0-2](?:\.[1-9][0-9]*)+$/;
function isOID(id2) {
  return new RegExp(OID_REGEX).test(id2);
}

class NameIdentifier {
  constructor(names = {}) {
    this.items = {};
    for (const id2 in names) {
      this.register(id2, names[id2]);
    }
  }
  get(idOrName) {
    return this.items[idOrName] || null;
  }
  findId(idOrName) {
    if (!isOID(idOrName)) {
      return this.get(idOrName);
    }
    return idOrName;
  }
  register(id2, name2) {
    this.items[id2] = name2;
    this.items[name2] = id2;
  }
}
var names = new NameIdentifier;
names.register("CN", "2.5.4.3");
names.register("L", "2.5.4.7");
names.register("ST", "2.5.4.8");
names.register("O", "2.5.4.10");
names.register("OU", "2.5.4.11");
names.register("C", "2.5.4.6");
names.register("DC", "0.9.2342.19200300.100.1.25");
names.register("E", "1.2.840.113549.1.9.1");
names.register("G", "2.5.4.42");
names.register("I", "2.5.4.43");
names.register("SN", "2.5.4.4");
names.register("T", "2.5.4.12");
function replaceUnknownCharacter(text, char) {
  return `\\${Convert.ToHex(Convert.FromUtf8String(char)).toUpperCase()}`;
}
function escape2(data) {
  return data.replace(/([,+"\\<>;])/g, "\\$1").replace(/^([ #])/, "\\$1").replace(/([ ]$)/, "\\$1").replace(/([\r\n\t])/, replaceUnknownCharacter);
}

class Name3 {
  static isASCII(text) {
    for (let i = 0;i < text.length; i++) {
      const code = text.charCodeAt(i);
      if (code > 255) {
        return false;
      }
    }
    return true;
  }
  static isPrintableString(text) {
    return /^[A-Za-z0-9 '()+,-./:=?]*$/g.test(text);
  }
  constructor(data, extraNames = {}) {
    this.extraNames = new NameIdentifier;
    this.asn = new Name;
    for (const key in extraNames) {
      if (Object.prototype.hasOwnProperty.call(extraNames, key)) {
        const value = extraNames[key];
        this.extraNames.register(key, value);
      }
    }
    if (typeof data === "string") {
      this.asn = this.fromString(data);
    } else if (data instanceof Name) {
      this.asn = data;
    } else if (BufferSourceConverter.isBufferSource(data)) {
      this.asn = AsnConvert.parse(data, Name);
    } else {
      this.asn = this.fromJSON(data);
    }
  }
  getField(idOrName) {
    const id2 = this.extraNames.findId(idOrName) || names.findId(idOrName);
    const res = [];
    for (const name2 of this.asn) {
      for (const rdn of name2) {
        if (rdn.type === id2) {
          res.push(rdn.value.toString());
        }
      }
    }
    return res;
  }
  getName(idOrName) {
    return this.extraNames.get(idOrName) || names.get(idOrName);
  }
  toString() {
    return this.asn.map((rdn) => rdn.map((o) => {
      const type = this.getName(o.type) || o.type;
      const value = o.value.anyValue ? `#${Convert.ToHex(o.value.anyValue)}` : escape2(o.value.toString());
      return `${type}=${value}`;
    }).join("+")).join(", ");
  }
  toJSON() {
    var _a3;
    const json2 = [];
    for (const rdn of this.asn) {
      const jsonItem = {};
      for (const attr of rdn) {
        const type = this.getName(attr.type) || attr.type;
        (_a3 = jsonItem[type]) !== null && _a3 !== undefined || (jsonItem[type] = []);
        jsonItem[type].push(attr.value.anyValue ? `#${Convert.ToHex(attr.value.anyValue)}` : attr.value.toString());
      }
      json2.push(jsonItem);
    }
    return json2;
  }
  fromString(data) {
    const asn = new Name;
    const regex = /(\d\.[\d.]*\d|[A-Za-z]+)=((?:"")|(?:".*?[^\\]")|(?:[^,+"\\](?=[,+]|$))|(?:[^,+].*?(?:[^\\][,+]))|(?:))([,+])?/g;
    let matches = null;
    let level = ",";
    while (matches = regex.exec(`${data},`)) {
      let [, type, value] = matches;
      const lastChar = value[value.length - 1];
      if (lastChar === "," || lastChar === "+") {
        value = value.slice(0, value.length - 1);
        matches[3] = lastChar;
      }
      const next = matches[3];
      type = this.getTypeOid(type);
      const attr = this.createAttribute(type, value);
      if (level === "+") {
        asn[asn.length - 1].push(attr);
      } else {
        asn.push(new RelativeDistinguishedName([attr]));
      }
      level = next;
    }
    return asn;
  }
  fromJSON(data) {
    const asn = new Name;
    for (const item of data) {
      const asnRdn = new RelativeDistinguishedName;
      for (const type in item) {
        const typeId = this.getTypeOid(type);
        const values = item[type];
        for (const value of values) {
          const asnAttr = this.createAttribute(typeId, value);
          asnRdn.push(asnAttr);
        }
      }
      asn.push(asnRdn);
    }
    return asn;
  }
  getTypeOid(type) {
    if (!/[\d.]+/.test(type)) {
      type = this.getName(type) || "";
    }
    if (!type) {
      throw new Error(`Cannot get OID for name type '${type}'`);
    }
    return type;
  }
  createAttribute(type, value) {
    const attr = new AttributeTypeAndValue({ type });
    if (typeof value === "object") {
      for (const key in value) {
        switch (key) {
          case "ia5String":
            attr.value.ia5String = value[key];
            break;
          case "utf8String":
            attr.value.utf8String = value[key];
            break;
          case "universalString":
            attr.value.universalString = value[key];
            break;
          case "bmpString":
            attr.value.bmpString = value[key];
            break;
          case "printableString":
            attr.value.printableString = value[key];
            break;
        }
      }
    } else if (value[0] === "#") {
      attr.value.anyValue = Convert.FromHex(value.slice(1));
    } else {
      const processedValue = this.processStringValue(value);
      if (type === this.getName("E") || type === this.getName("DC")) {
        attr.value.ia5String = processedValue;
      } else {
        if (Name3.isPrintableString(processedValue)) {
          attr.value.printableString = processedValue;
        } else {
          attr.value.utf8String = processedValue;
        }
      }
    }
    return attr;
  }
  processStringValue(value) {
    const quotedMatches = /"(.*?[^\\])?"/.exec(value);
    if (quotedMatches) {
      value = quotedMatches[1];
    }
    return value.replace(/\\0a/ig, `
`).replace(/\\0d/ig, "\r").replace(/\\0g/ig, "\t").replace(/\\(.)/g, "$1");
  }
  toArrayBuffer() {
    return AsnConvert.serialize(this.asn);
  }
  async getThumbprint(...args) {
    var _a3;
    let crypto2;
    let algorithm = "SHA-1";
    if (args.length >= 1 && !((_a3 = args[0]) === null || _a3 === undefined ? undefined : _a3.subtle)) {
      algorithm = args[0] || algorithm;
      crypto2 = args[1] || cryptoProvider.get();
    } else {
      crypto2 = args[0] || cryptoProvider.get();
    }
    return await crypto2.subtle.digest(algorithm, this.toArrayBuffer());
  }
}
var ERR_GN_CONSTRUCTOR = "Cannot initialize GeneralName from ASN.1 data.";
var ERR_GN_STRING_FORMAT = `${ERR_GN_CONSTRUCTOR} Unsupported string format in use.`;
var ERR_GUID = `${ERR_GN_CONSTRUCTOR} Value doesn't match to GUID regular expression.`;
var GUID_REGEX = /^([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})$/i;
var id_GUID = "1.3.6.1.4.1.311.25.1";
var id_UPN = "1.3.6.1.4.1.311.20.2.3";
var DNS = "dns";
var DN = "dn";
var EMAIL = "email";
var IP = "ip";
var URL2 = "url";
var GUID = "guid";
var UPN = "upn";
var REGISTERED_ID = "id";

class GeneralName3 extends AsnData {
  constructor(...args) {
    let name2;
    if (args.length === 2) {
      switch (args[0]) {
        case DN: {
          const derName = new Name3(args[1]).toArrayBuffer();
          const asnName = AsnConvert.parse(derName, Name);
          name2 = new GeneralName({ directoryName: asnName });
          break;
        }
        case DNS:
          name2 = new GeneralName({ dNSName: args[1] });
          break;
        case EMAIL:
          name2 = new GeneralName({ rfc822Name: args[1] });
          break;
        case GUID: {
          const matches = new RegExp(GUID_REGEX, "i").exec(args[1]);
          if (!matches) {
            throw new Error("Cannot parse GUID value. Value doesn't match to regular expression");
          }
          const hex2 = matches.slice(1).map((o, i) => {
            if (i < 3) {
              return Convert.ToHex(new Uint8Array(Convert.FromHex(o)).reverse());
            }
            return o;
          }).join("");
          name2 = new GeneralName({
            otherName: new OtherName({
              typeId: id_GUID,
              value: AsnConvert.serialize(new OctetString2(Convert.FromHex(hex2)))
            })
          });
          break;
        }
        case IP:
          name2 = new GeneralName({ iPAddress: args[1] });
          break;
        case REGISTERED_ID:
          name2 = new GeneralName({ registeredID: args[1] });
          break;
        case UPN: {
          name2 = new GeneralName({
            otherName: new OtherName({
              typeId: id_UPN,
              value: AsnConvert.serialize(AsnUtf8StringConverter.toASN(args[1]))
            })
          });
          break;
        }
        case URL2:
          name2 = new GeneralName({ uniformResourceIdentifier: args[1] });
          break;
        default:
          throw new Error("Cannot create GeneralName. Unsupported type of the name");
      }
    } else if (BufferSourceConverter.isBufferSource(args[0])) {
      name2 = AsnConvert.parse(args[0], GeneralName);
    } else {
      name2 = args[0];
    }
    super(name2);
  }
  onInit(asn) {
    if (asn.dNSName != null) {
      this.type = DNS;
      this.value = asn.dNSName;
    } else if (asn.rfc822Name != null) {
      this.type = EMAIL;
      this.value = asn.rfc822Name;
    } else if (asn.iPAddress != null) {
      this.type = IP;
      this.value = asn.iPAddress;
    } else if (asn.uniformResourceIdentifier != null) {
      this.type = URL2;
      this.value = asn.uniformResourceIdentifier;
    } else if (asn.registeredID != null) {
      this.type = REGISTERED_ID;
      this.value = asn.registeredID;
    } else if (asn.directoryName != null) {
      this.type = DN;
      this.value = new Name3(asn.directoryName).toString();
    } else if (asn.otherName != null) {
      if (asn.otherName.typeId === id_GUID) {
        this.type = GUID;
        const guid = AsnConvert.parse(asn.otherName.value, OctetString2);
        const matches = new RegExp(GUID_REGEX, "i").exec(Convert.ToHex(guid));
        if (!matches) {
          throw new Error(ERR_GUID);
        }
        this.value = matches.slice(1).map((o, i) => {
          if (i < 3) {
            return Convert.ToHex(new Uint8Array(Convert.FromHex(o)).reverse());
          }
          return o;
        }).join("-");
      } else if (asn.otherName.typeId === id_UPN) {
        this.type = UPN;
        this.value = AsnConvert.parse(asn.otherName.value, DirectoryString).toString();
      } else {
        throw new Error(ERR_GN_STRING_FORMAT);
      }
    } else {
      throw new Error(ERR_GN_STRING_FORMAT);
    }
  }
  toJSON() {
    return {
      type: this.type,
      value: this.value
    };
  }
  toTextObject() {
    let type;
    switch (this.type) {
      case DN:
      case DNS:
      case GUID:
      case IP:
      case REGISTERED_ID:
      case UPN:
      case URL2:
        type = this.type.toUpperCase();
        break;
      case EMAIL:
        type = "Email";
        break;
      default:
        throw new Error("Unsupported GeneralName type");
    }
    let value = this.value;
    if (this.type === REGISTERED_ID) {
      value = OidSerializer.toString(value);
    }
    return new TextObject(type, undefined, value);
  }
}

class GeneralNames3 extends AsnData {
  constructor(params) {
    let names2;
    if (params instanceof GeneralNames) {
      names2 = params;
    } else if (Array.isArray(params)) {
      const items = [];
      for (const name2 of params) {
        if (name2 instanceof GeneralName) {
          items.push(name2);
        } else {
          const asnName = AsnConvert.parse(new GeneralName3(name2.type, name2.value).rawData, GeneralName);
          items.push(asnName);
        }
      }
      names2 = new GeneralNames(items);
    } else if (BufferSourceConverter.isBufferSource(params)) {
      names2 = AsnConvert.parse(params, GeneralNames);
    } else {
      throw new Error("Cannot initialize GeneralNames. Incorrect incoming arguments");
    }
    super(names2);
  }
  onInit(asn) {
    const items = [];
    for (const asnName of asn) {
      let name2 = null;
      try {
        name2 = new GeneralName3(asnName);
      } catch {
        continue;
      }
      items.push(name2);
    }
    this.items = items;
  }
  toJSON() {
    return this.items.map((o) => o.toJSON());
  }
  toTextObject() {
    const res = super.toTextObjectEmpty();
    for (const name2 of this.items) {
      const nameObj = name2.toTextObject();
      let field = res[nameObj[TextObject.NAME]];
      if (!Array.isArray(field)) {
        field = [];
        res[nameObj[TextObject.NAME]] = field;
      }
      field.push(nameObj);
    }
    return res;
  }
}
GeneralNames3.NAME = "GeneralNames";
var rPaddingTag = "-{5}";
var rEolChars = "\\n";
var rNameTag = `[^${rEolChars}]+`;
var rBeginTag = `${rPaddingTag}BEGIN (${rNameTag}(?=${rPaddingTag}))${rPaddingTag}`;
var rEndTag = `${rPaddingTag}END \\1${rPaddingTag}`;
var rEolGroup = "\\n";
var rHeaderKey = `[^:${rEolChars}]+`;
var rHeaderValue = `(?:[^${rEolChars}]+${rEolGroup}(?: +[^${rEolChars}]+${rEolGroup})*)`;
var rBase64Chars = "[a-zA-Z0-9=+/]+";
var rBase64 = `(?:${rBase64Chars}${rEolGroup})+`;
var rPem = `${rBeginTag}${rEolGroup}(?:((?:${rHeaderKey}: ${rHeaderValue})+))?${rEolGroup}?(${rBase64})${rEndTag}`;

class PemConverter {
  static isPem(data) {
    return typeof data === "string" && new RegExp(rPem, "g").test(data.replace(/\r/g, ""));
  }
  static decodeWithHeaders(pem) {
    pem = pem.replace(/\r/g, "");
    const pattern = new RegExp(rPem, "g");
    const res = [];
    let matches = null;
    while (matches = pattern.exec(pem)) {
      const base643 = matches[3].replace(new RegExp(`[${rEolChars}]+`, "g"), "");
      const pemStruct = {
        type: matches[1],
        headers: [],
        rawData: Convert.FromBase64(base643)
      };
      const headersString = matches[2];
      if (headersString) {
        const headers = headersString.split(new RegExp(rEolGroup, "g"));
        let lastHeader = null;
        for (const header of headers) {
          const [key, value] = header.split(/:(.*)/);
          if (value === undefined) {
            if (!lastHeader) {
              throw new Error("Cannot parse PEM string. Incorrect header value");
            }
            lastHeader.value += key.trim();
          } else {
            if (lastHeader) {
              pemStruct.headers.push(lastHeader);
            }
            lastHeader = {
              key,
              value: value.trim()
            };
          }
        }
        if (lastHeader) {
          pemStruct.headers.push(lastHeader);
        }
      }
      res.push(pemStruct);
    }
    return res;
  }
  static decode(pem) {
    const blocks = this.decodeWithHeaders(pem);
    return blocks.map((o) => o.rawData);
  }
  static decodeFirst(pem) {
    const items = this.decode(pem);
    if (!items.length) {
      throw new RangeError("PEM string doesn't contain any objects");
    }
    return items[0];
  }
  static encode(rawData, tag) {
    if (Array.isArray(rawData)) {
      const raws = new Array;
      if (tag) {
        rawData.forEach((element) => {
          if (!BufferSourceConverter.isBufferSource(element)) {
            throw new TypeError("Cannot encode array of BufferSource in PEM format. Not all items of the array are BufferSource");
          }
          raws.push(this.encodeStruct({
            type: tag,
            rawData: BufferSourceConverter.toArrayBuffer(element)
          }));
        });
      } else {
        rawData.forEach((element) => {
          if (!("type" in element)) {
            throw new TypeError("Cannot encode array of PemStruct in PEM format. Not all items of the array are PemStrut");
          }
          raws.push(this.encodeStruct(element));
        });
      }
      return raws.join(`
`);
    } else {
      if (!tag) {
        throw new Error("Required argument 'tag' is missed");
      }
      return this.encodeStruct({
        type: tag,
        rawData: BufferSourceConverter.toArrayBuffer(rawData)
      });
    }
  }
  static encodeStruct(pem) {
    var _a3;
    const upperCaseType = pem.type.toLocaleUpperCase();
    const res = [];
    res.push(`-----BEGIN ${upperCaseType}-----`);
    if ((_a3 = pem.headers) === null || _a3 === undefined ? undefined : _a3.length) {
      for (const header of pem.headers) {
        res.push(`${header.key}: ${header.value}`);
      }
      res.push("");
    }
    const base643 = Convert.ToBase64(pem.rawData);
    let sliced;
    let offset = 0;
    const rows = Array();
    while (offset < base643.length) {
      if (base643.length - offset < 64) {
        sliced = base643.substring(offset);
      } else {
        sliced = base643.substring(offset, offset + 64);
        offset += 64;
      }
      if (sliced.length !== 0) {
        rows.push(sliced);
        if (sliced.length < 64) {
          break;
        }
      } else {
        break;
      }
    }
    res.push(...rows);
    res.push(`-----END ${upperCaseType}-----`);
    return res.join(`
`);
  }
}
PemConverter.CertificateTag = "CERTIFICATE";
PemConverter.CrlTag = "CRL";
PemConverter.CertificateRequestTag = "CERTIFICATE REQUEST";
PemConverter.PublicKeyTag = "PUBLIC KEY";
PemConverter.PrivateKeyTag = "PRIVATE KEY";

class PemData extends AsnData {
  static isAsnEncoded(data) {
    return BufferSourceConverter.isBufferSource(data) || typeof data === "string";
  }
  static toArrayBuffer(raw) {
    if (typeof raw === "string") {
      if (PemConverter.isPem(raw)) {
        return PemConverter.decode(raw)[0];
      } else if (Convert.isHex(raw)) {
        return Convert.FromHex(raw);
      } else if (Convert.isBase64(raw)) {
        return Convert.FromBase64(raw);
      } else if (Convert.isBase64Url(raw)) {
        return Convert.FromBase64Url(raw);
      } else {
        throw new TypeError("Unsupported format of 'raw' argument. Must be one of DER, PEM, HEX, Base64, or Base4Url");
      }
    } else {
      const buffer = BufferSourceConverter.toUint8Array(raw);
      if (buffer.length > 0 && buffer[0] === 48) {
        return BufferSourceConverter.toArrayBuffer(raw);
      }
      const stringRaw = Convert.ToBinary(raw);
      if (PemConverter.isPem(stringRaw)) {
        return PemConverter.decode(stringRaw)[0];
      } else if (Convert.isHex(stringRaw)) {
        return Convert.FromHex(stringRaw);
      } else if (Convert.isBase64(stringRaw)) {
        return Convert.FromBase64(stringRaw);
      } else if (Convert.isBase64Url(stringRaw)) {
        return Convert.FromBase64Url(stringRaw);
      }
      throw new TypeError("Unsupported format of 'raw' argument. Must be one of DER, PEM, HEX, Base64, or Base4Url");
    }
  }
  constructor(...args) {
    if (PemData.isAsnEncoded(args[0])) {
      super(PemData.toArrayBuffer(args[0]), args[1]);
    } else {
      super(args[0]);
    }
  }
  toString(format2 = "pem") {
    switch (format2) {
      case "pem":
        return PemConverter.encode(this.rawData, this.tag);
      default:
        return super.toString(format2);
    }
  }
}

class PublicKey extends PemData {
  static async create(data, crypto2 = cryptoProvider.get()) {
    if (data instanceof PublicKey) {
      return data;
    } else if (CryptoProvider.isCryptoKey(data)) {
      if (data.type !== "public") {
        throw new TypeError("Public key is required");
      }
      const spki = await crypto2.subtle.exportKey("spki", data);
      return new PublicKey(spki);
    } else if (data.publicKey) {
      return data.publicKey;
    } else if (BufferSourceConverter.isBufferSource(data)) {
      return new PublicKey(data);
    } else {
      throw new TypeError("Unsupported PublicKeyType");
    }
  }
  constructor(param) {
    if (PemData.isAsnEncoded(param)) {
      super(param, SubjectPublicKeyInfo);
    } else {
      super(param);
    }
    this.tag = PemConverter.PublicKeyTag;
  }
  async export(...args) {
    let crypto2;
    let keyUsages = ["verify"];
    let algorithm = {
      hash: "SHA-256",
      ...this.algorithm
    };
    if (args.length > 1) {
      algorithm = args[0] || algorithm;
      keyUsages = args[1] || keyUsages;
      crypto2 = args[2] || cryptoProvider.get();
    } else {
      crypto2 = args[0] || cryptoProvider.get();
    }
    let raw = this.rawData;
    const asnSpki = AsnConvert.parse(this.rawData, SubjectPublicKeyInfo);
    if (asnSpki.algorithm.algorithm === id_RSASSA_PSS) {
      raw = convertSpkiToRsaPkcs1(asnSpki, raw);
    }
    return crypto2.subtle.importKey("spki", raw, algorithm, true, keyUsages);
  }
  onInit(asn) {
    const algProv = instance.resolve(diAlgorithmProvider);
    const algorithm = this.algorithm = algProv.toWebAlgorithm(asn.algorithm);
    switch (asn.algorithm.algorithm) {
      case id_rsaEncryption: {
        const rsaPublicKey = AsnConvert.parse(asn.subjectPublicKey, RSAPublicKey);
        const modulus = BufferSourceConverter.toUint8Array(rsaPublicKey.modulus);
        algorithm.publicExponent = BufferSourceConverter.toUint8Array(rsaPublicKey.publicExponent);
        algorithm.modulusLength = (!modulus[0] ? modulus.slice(1) : modulus).byteLength << 3;
        break;
      }
    }
  }
  async getThumbprint(...args) {
    var _a3;
    let crypto2;
    let algorithm = "SHA-1";
    if (args.length >= 1 && !((_a3 = args[0]) === null || _a3 === undefined ? undefined : _a3.subtle)) {
      algorithm = args[0] || algorithm;
      crypto2 = args[1] || cryptoProvider.get();
    } else {
      crypto2 = args[0] || cryptoProvider.get();
    }
    return await crypto2.subtle.digest(algorithm, this.rawData);
  }
  async getKeyIdentifier(...args) {
    let crypto2;
    let algorithm = "SHA-1";
    if (args.length === 1) {
      if (typeof args[0] === "string") {
        algorithm = args[0];
        crypto2 = cryptoProvider.get();
      } else {
        crypto2 = args[0];
      }
    } else if (args.length === 2) {
      algorithm = args[0];
      crypto2 = args[1];
    } else {
      crypto2 = cryptoProvider.get();
    }
    const asn = AsnConvert.parse(this.rawData, SubjectPublicKeyInfo);
    return await crypto2.subtle.digest(algorithm, asn.subjectPublicKey);
  }
  toTextObject() {
    const obj = this.toTextObjectEmpty();
    const asn = AsnConvert.parse(this.rawData, SubjectPublicKeyInfo);
    obj["Algorithm"] = TextConverter.serializeAlgorithm(asn.algorithm);
    switch (asn.algorithm.algorithm) {
      case id_ecPublicKey:
        obj["EC Point"] = asn.subjectPublicKey;
        break;
      case id_rsaEncryption:
      default:
        obj["Raw Data"] = asn.subjectPublicKey;
    }
    return obj;
  }
}
function convertSpkiToRsaPkcs1(asnSpki, raw) {
  asnSpki.algorithm = new AlgorithmIdentifier({
    algorithm: id_rsaEncryption,
    parameters: null
  });
  raw = AsnConvert.serialize(asnSpki);
  return raw;
}

class AuthorityKeyIdentifierExtension extends Extension2 {
  static async create(param, critical = false, crypto2 = cryptoProvider.get()) {
    if ("name" in param && "serialNumber" in param) {
      return new AuthorityKeyIdentifierExtension(param, critical);
    }
    const key = await PublicKey.create(param, crypto2);
    const id2 = await key.getKeyIdentifier(crypto2);
    return new AuthorityKeyIdentifierExtension(Convert.ToHex(id2), critical);
  }
  constructor(...args) {
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0]);
    } else if (typeof args[0] === "string") {
      const value = new AuthorityKeyIdentifier({ keyIdentifier: new KeyIdentifier(Convert.FromHex(args[0])) });
      super(id_ce_authorityKeyIdentifier, args[1], AsnConvert.serialize(value));
    } else {
      const certId = args[0];
      const certIdName = certId.name instanceof GeneralNames3 ? AsnConvert.parse(certId.name.rawData, GeneralNames) : certId.name;
      const value = new AuthorityKeyIdentifier({
        authorityCertIssuer: certIdName,
        authorityCertSerialNumber: Convert.FromHex(certId.serialNumber)
      });
      super(id_ce_authorityKeyIdentifier, args[1], AsnConvert.serialize(value));
    }
  }
  onInit(asn) {
    super.onInit(asn);
    const aki = AsnConvert.parse(asn.extnValue, AuthorityKeyIdentifier);
    if (aki.keyIdentifier) {
      this.keyId = Convert.ToHex(aki.keyIdentifier);
    }
    if (aki.authorityCertIssuer || aki.authorityCertSerialNumber) {
      this.certId = {
        name: aki.authorityCertIssuer || [],
        serialNumber: aki.authorityCertSerialNumber ? Convert.ToHex(aki.authorityCertSerialNumber) : ""
      };
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    const asn = AsnConvert.parse(this.value, AuthorityKeyIdentifier);
    if (asn.authorityCertIssuer) {
      obj["Authority Issuer"] = new GeneralNames3(asn.authorityCertIssuer).toTextObject();
    }
    if (asn.authorityCertSerialNumber) {
      obj["Authority Serial Number"] = asn.authorityCertSerialNumber;
    }
    if (asn.keyIdentifier) {
      obj[""] = asn.keyIdentifier;
    }
    return obj;
  }
}
AuthorityKeyIdentifierExtension.NAME = "Authority Key Identifier";

class BasicConstraintsExtension extends Extension2 {
  constructor(...args) {
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0]);
      const value = AsnConvert.parse(this.value, BasicConstraints);
      this.ca = value.cA;
      this.pathLength = value.pathLenConstraint;
    } else {
      const value = new BasicConstraints({
        cA: args[0],
        pathLenConstraint: args[1]
      });
      super(id_ce_basicConstraints, args[2], AsnConvert.serialize(value));
      this.ca = args[0];
      this.pathLength = args[1];
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    if (this.ca) {
      obj["CA"] = this.ca;
    }
    if (this.pathLength !== undefined) {
      obj["Path Length"] = this.pathLength;
    }
    return obj;
  }
}
BasicConstraintsExtension.NAME = "Basic Constraints";
var ExtendedKeyUsage3;
(function(ExtendedKeyUsage4) {
  ExtendedKeyUsage4["serverAuth"] = "1.3.6.1.5.5.7.3.1";
  ExtendedKeyUsage4["clientAuth"] = "1.3.6.1.5.5.7.3.2";
  ExtendedKeyUsage4["codeSigning"] = "1.3.6.1.5.5.7.3.3";
  ExtendedKeyUsage4["emailProtection"] = "1.3.6.1.5.5.7.3.4";
  ExtendedKeyUsage4["timeStamping"] = "1.3.6.1.5.5.7.3.8";
  ExtendedKeyUsage4["ocspSigning"] = "1.3.6.1.5.5.7.3.9";
})(ExtendedKeyUsage3 || (ExtendedKeyUsage3 = {}));

class ExtendedKeyUsageExtension extends Extension2 {
  constructor(...args) {
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0]);
      const value = AsnConvert.parse(this.value, ExtendedKeyUsage);
      this.usages = value.map((o) => o);
    } else {
      const value = new ExtendedKeyUsage(args[0]);
      super(id_ce_extKeyUsage, args[1], AsnConvert.serialize(value));
      this.usages = args[0];
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    obj[""] = this.usages.map((o) => OidSerializer.toString(o)).join(", ");
    return obj;
  }
}
ExtendedKeyUsageExtension.NAME = "Extended Key Usages";
var KeyUsageFlags2;
(function(KeyUsageFlags3) {
  KeyUsageFlags3[KeyUsageFlags3["digitalSignature"] = 1] = "digitalSignature";
  KeyUsageFlags3[KeyUsageFlags3["nonRepudiation"] = 2] = "nonRepudiation";
  KeyUsageFlags3[KeyUsageFlags3["keyEncipherment"] = 4] = "keyEncipherment";
  KeyUsageFlags3[KeyUsageFlags3["dataEncipherment"] = 8] = "dataEncipherment";
  KeyUsageFlags3[KeyUsageFlags3["keyAgreement"] = 16] = "keyAgreement";
  KeyUsageFlags3[KeyUsageFlags3["keyCertSign"] = 32] = "keyCertSign";
  KeyUsageFlags3[KeyUsageFlags3["cRLSign"] = 64] = "cRLSign";
  KeyUsageFlags3[KeyUsageFlags3["encipherOnly"] = 128] = "encipherOnly";
  KeyUsageFlags3[KeyUsageFlags3["decipherOnly"] = 256] = "decipherOnly";
})(KeyUsageFlags2 || (KeyUsageFlags2 = {}));

class KeyUsagesExtension extends Extension2 {
  constructor(...args) {
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0]);
      const value = AsnConvert.parse(this.value, KeyUsage);
      this.usages = value.toNumber();
    } else {
      const value = new KeyUsage(args[0]);
      super(id_ce_keyUsage, args[1], AsnConvert.serialize(value));
      this.usages = args[0];
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    const asn = AsnConvert.parse(this.value, KeyUsage);
    obj[""] = asn.toJSON().join(", ");
    return obj;
  }
}
KeyUsagesExtension.NAME = "Key Usages";

class SubjectKeyIdentifierExtension extends Extension2 {
  static async create(publicKey, critical = false, crypto2 = cryptoProvider.get()) {
    const key = await PublicKey.create(publicKey, crypto2);
    const id2 = await key.getKeyIdentifier(crypto2);
    return new SubjectKeyIdentifierExtension(Convert.ToHex(id2), critical);
  }
  constructor(...args) {
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0]);
      const value = AsnConvert.parse(this.value, SubjectKeyIdentifier);
      this.keyId = Convert.ToHex(value);
    } else {
      const identifier = typeof args[0] === "string" ? Convert.FromHex(args[0]) : args[0];
      const value = new SubjectKeyIdentifier(identifier);
      super(id_ce_subjectKeyIdentifier, args[1], AsnConvert.serialize(value));
      this.keyId = Convert.ToHex(identifier);
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    const asn = AsnConvert.parse(this.value, SubjectKeyIdentifier);
    obj[""] = asn;
    return obj;
  }
}
SubjectKeyIdentifierExtension.NAME = "Subject Key Identifier";

class SubjectAlternativeNameExtension extends Extension2 {
  constructor(...args) {
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0]);
    } else {
      super(id_ce_subjectAltName, args[1], new GeneralNames3(args[0] || []).rawData);
    }
  }
  onInit(asn) {
    super.onInit(asn);
    const value = AsnConvert.parse(asn.extnValue, SubjectAlternativeName);
    this.names = new GeneralNames3(value);
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    const namesObj = this.names.toTextObject();
    for (const key in namesObj) {
      obj[key] = namesObj[key];
    }
    return obj;
  }
}
SubjectAlternativeNameExtension.NAME = "Subject Alternative Name";

class ExtensionFactory {
  static register(id2, type) {
    this.items.set(id2, type);
  }
  static create(data) {
    const extension2 = new Extension2(data);
    const Type = this.items.get(extension2.type);
    if (Type) {
      return new Type(data);
    }
    return extension2;
  }
}
ExtensionFactory.items = new Map;

class CertificatePolicyExtension extends Extension2 {
  constructor(...args) {
    var _a3;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0]);
      const asnPolicies = AsnConvert.parse(this.value, CertificatePolicies);
      this.policies = asnPolicies.map((o) => o.policyIdentifier);
    } else {
      const policies = args[0];
      const critical = (_a3 = args[1]) !== null && _a3 !== undefined ? _a3 : false;
      const value = new CertificatePolicies(policies.map((o) => new PolicyInformation({ policyIdentifier: o })));
      super(id_ce_certificatePolicies, critical, AsnConvert.serialize(value));
      this.policies = policies;
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    obj["Policy"] = this.policies.map((o) => new TextObject("", {}, OidSerializer.toString(o)));
    return obj;
  }
}
CertificatePolicyExtension.NAME = "Certificate Policies";
ExtensionFactory.register(id_ce_certificatePolicies, CertificatePolicyExtension);

class CRLDistributionPointsExtension extends Extension2 {
  constructor(...args) {
    var _a3;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0]);
    } else if (Array.isArray(args[0]) && typeof args[0][0] === "string") {
      const urls = args[0];
      const dps = urls.map((url) => {
        return new DistributionPoint({
          distributionPoint: new DistributionPointName({ fullName: [new GeneralName({ uniformResourceIdentifier: url })] })
        });
      });
      const value = new CRLDistributionPoints(dps);
      super(id_ce_cRLDistributionPoints, args[1], AsnConvert.serialize(value));
    } else {
      const value = new CRLDistributionPoints(args[0]);
      super(id_ce_cRLDistributionPoints, args[1], AsnConvert.serialize(value));
    }
    (_a3 = this.distributionPoints) !== null && _a3 !== undefined || (this.distributionPoints = []);
  }
  onInit(asn) {
    super.onInit(asn);
    const crlExt = AsnConvert.parse(asn.extnValue, CRLDistributionPoints);
    this.distributionPoints = crlExt;
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    obj["Distribution Point"] = this.distributionPoints.map((dp) => {
      var _a3;
      const dpObj = {};
      if (dp.distributionPoint) {
        dpObj[""] = (_a3 = dp.distributionPoint.fullName) === null || _a3 === undefined ? undefined : _a3.map((name2) => new GeneralName3(name2).toString()).join(", ");
      }
      if (dp.reasons) {
        dpObj["Reasons"] = dp.reasons.toString();
      }
      if (dp.cRLIssuer) {
        dpObj["CRL Issuer"] = dp.cRLIssuer.map((issuer) => issuer.toString()).join(", ");
      }
      return dpObj;
    });
    return obj;
  }
}
CRLDistributionPointsExtension.NAME = "CRL Distribution Points";

class AuthorityInfoAccessExtension extends Extension2 {
  constructor(...args) {
    var _a3, _b, _c, _d;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0]);
    } else if (args[0] instanceof AuthorityInfoAccessSyntax) {
      const value = new AuthorityInfoAccessSyntax(args[0]);
      super(id_pe_authorityInfoAccess, args[1], AsnConvert.serialize(value));
    } else {
      const params = args[0];
      const value = new AuthorityInfoAccessSyntax;
      addAccessDescriptions(value, params, id_ad_ocsp, "ocsp");
      addAccessDescriptions(value, params, id_ad_caIssuers, "caIssuers");
      addAccessDescriptions(value, params, id_ad_timeStamping, "timeStamping");
      addAccessDescriptions(value, params, id_ad_caRepository, "caRepository");
      super(id_pe_authorityInfoAccess, args[1], AsnConvert.serialize(value));
    }
    (_a3 = this.ocsp) !== null && _a3 !== undefined || (this.ocsp = []);
    (_b = this.caIssuers) !== null && _b !== undefined || (this.caIssuers = []);
    (_c = this.timeStamping) !== null && _c !== undefined || (this.timeStamping = []);
    (_d = this.caRepository) !== null && _d !== undefined || (this.caRepository = []);
  }
  onInit(asn) {
    super.onInit(asn);
    this.ocsp = [];
    this.caIssuers = [];
    this.timeStamping = [];
    this.caRepository = [];
    const aia = AsnConvert.parse(asn.extnValue, AuthorityInfoAccessSyntax);
    aia.forEach((accessDescription) => {
      switch (accessDescription.accessMethod) {
        case id_ad_ocsp:
          this.ocsp.push(new GeneralName3(accessDescription.accessLocation));
          break;
        case id_ad_caIssuers:
          this.caIssuers.push(new GeneralName3(accessDescription.accessLocation));
          break;
        case id_ad_timeStamping:
          this.timeStamping.push(new GeneralName3(accessDescription.accessLocation));
          break;
        case id_ad_caRepository:
          this.caRepository.push(new GeneralName3(accessDescription.accessLocation));
          break;
      }
    });
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    if (this.ocsp.length) {
      addUrlsToObject(obj, "OCSP", this.ocsp);
    }
    if (this.caIssuers.length) {
      addUrlsToObject(obj, "CA Issuers", this.caIssuers);
    }
    if (this.timeStamping.length) {
      addUrlsToObject(obj, "Time Stamping", this.timeStamping);
    }
    if (this.caRepository.length) {
      addUrlsToObject(obj, "CA Repository", this.caRepository);
    }
    return obj;
  }
}
AuthorityInfoAccessExtension.NAME = "Authority Info Access";
function addUrlsToObject(obj, key, urls) {
  if (urls.length === 1) {
    obj[key] = urls[0].toTextObject();
  } else {
    const names2 = new TextObject("");
    urls.forEach((name2, index) => {
      const nameObj = name2.toTextObject();
      const indexedKey = `${nameObj[TextObject.NAME]} ${index + 1}`;
      let field = names2[indexedKey];
      if (!Array.isArray(field)) {
        field = [];
        names2[indexedKey] = field;
      }
      field.push(nameObj);
    });
    obj[key] = names2;
  }
}
function addAccessDescriptions(value, params, method, key) {
  const items = params[key];
  if (items) {
    const array = Array.isArray(items) ? items : [items];
    array.forEach((url) => {
      if (typeof url === "string") {
        url = new GeneralName3("url", url);
      }
      value.push(new AccessDescription({
        accessMethod: method,
        accessLocation: AsnConvert.parse(url.rawData, GeneralName)
      }));
    });
  }
}

class IssuerAlternativeNameExtension extends Extension2 {
  constructor(...args) {
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0]);
    } else {
      super(id_ce_issuerAltName, args[1], new GeneralNames3(args[0] || []).rawData);
    }
  }
  onInit(asn) {
    super.onInit(asn);
    const value = AsnConvert.parse(asn.extnValue, GeneralNames);
    this.names = new GeneralNames3(value);
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    const namesObj = this.names.toTextObject();
    for (const key in namesObj) {
      obj[key] = namesObj[key];
    }
    return obj;
  }
}
IssuerAlternativeNameExtension.NAME = "Issuer Alternative Name";

class Attribute3 extends AsnData {
  constructor(...args) {
    let raw;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      raw = BufferSourceConverter.toArrayBuffer(args[0]);
    } else {
      const type = args[0];
      const values = Array.isArray(args[1]) ? args[1].map((o) => BufferSourceConverter.toArrayBuffer(o)) : [];
      raw = AsnConvert.serialize(new Attribute({
        type,
        values
      }));
    }
    super(raw, Attribute);
  }
  onInit(asn) {
    this.type = asn.type;
    this.values = asn.values;
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    obj["Value"] = this.values.map((o) => new TextObject("", { "": o }));
    return obj;
  }
  toTextObjectWithoutValue() {
    const obj = this.toTextObjectEmpty();
    if (obj[TextObject.NAME] === Attribute3.NAME) {
      obj[TextObject.NAME] = OidSerializer.toString(this.type);
    }
    return obj;
  }
}
Attribute3.NAME = "Attribute";

class ChallengePasswordAttribute extends Attribute3 {
  constructor(...args) {
    var _a3;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0]);
    } else {
      const value = new ChallengePassword({ printableString: args[0] });
      super(id_pkcs9_at_challengePassword, [AsnConvert.serialize(value)]);
    }
    (_a3 = this.password) !== null && _a3 !== undefined || (this.password = "");
  }
  onInit(asn) {
    super.onInit(asn);
    if (this.values[0]) {
      const value = AsnConvert.parse(this.values[0], ChallengePassword);
      this.password = value.toString();
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    obj[TextObject.VALUE] = this.password;
    return obj;
  }
}
ChallengePasswordAttribute.NAME = "Challenge Password";

class ExtensionsAttribute extends Attribute3 {
  constructor(...args) {
    var _a3;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0]);
    } else {
      const extensions2 = args[0];
      const value = new Extensions;
      for (const extension2 of extensions2) {
        value.push(AsnConvert.parse(extension2.rawData, Extension));
      }
      super(id_pkcs9_at_extensionRequest, [AsnConvert.serialize(value)]);
    }
    (_a3 = this.items) !== null && _a3 !== undefined || (this.items = []);
  }
  onInit(asn) {
    super.onInit(asn);
    if (this.values[0]) {
      const value = AsnConvert.parse(this.values[0], Extensions);
      this.items = value.map((o) => ExtensionFactory.create(AsnConvert.serialize(o)));
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    const extensions2 = this.items.map((o) => o.toTextObject());
    for (const extension2 of extensions2) {
      obj[extension2[TextObject.NAME]] = extension2;
    }
    return obj;
  }
}
ExtensionsAttribute.NAME = "Extensions";

class AttributeFactory {
  static register(id2, type) {
    this.items.set(id2, type);
  }
  static create(data) {
    const attribute4 = new Attribute3(data);
    const Type = this.items.get(attribute4.type);
    if (Type) {
      return new Type(data);
    }
    return attribute4;
  }
}
AttributeFactory.items = new Map;
var diAsnSignatureFormatter = "crypto.signatureFormatter";

class AsnDefaultSignatureFormatter {
  toAsnSignature(algorithm, signature) {
    return BufferSourceConverter.toArrayBuffer(signature);
  }
  toWebSignature(algorithm, signature) {
    return BufferSourceConverter.toArrayBuffer(signature);
  }
}
var RsaAlgorithm_1;
var RsaAlgorithm = RsaAlgorithm_1 = class RsaAlgorithm2 {
  static createPssParams(hash, saltLength) {
    const hashAlgorithm = RsaAlgorithm_1.getHashAlgorithm(hash);
    if (!hashAlgorithm) {
      return null;
    }
    return new RsaSaPssParams({
      hashAlgorithm,
      maskGenAlgorithm: new AlgorithmIdentifier({
        algorithm: id_mgf1,
        parameters: AsnConvert.serialize(hashAlgorithm)
      }),
      saltLength
    });
  }
  static getHashAlgorithm(alg) {
    const algProv = instance.resolve(diAlgorithmProvider);
    if (typeof alg === "string") {
      return algProv.toAsnAlgorithm({ name: alg });
    }
    if (typeof alg === "object" && alg && "name" in alg) {
      return algProv.toAsnAlgorithm(alg);
    }
    return null;
  }
  toAsnAlgorithm(alg) {
    switch (alg.name.toLowerCase()) {
      case "rsassa-pkcs1-v1_5":
        if ("hash" in alg) {
          let hash;
          if (typeof alg.hash === "string") {
            hash = alg.hash;
          } else if (alg.hash && typeof alg.hash === "object" && "name" in alg.hash && typeof alg.hash.name === "string") {
            hash = alg.hash.name.toUpperCase();
          } else {
            throw new Error("Cannot get hash algorithm name");
          }
          switch (hash.toLowerCase()) {
            case "sha-1":
              return new AlgorithmIdentifier({
                algorithm: id_sha1WithRSAEncryption,
                parameters: null
              });
            case "sha-256":
              return new AlgorithmIdentifier({
                algorithm: id_sha256WithRSAEncryption,
                parameters: null
              });
            case "sha-384":
              return new AlgorithmIdentifier({
                algorithm: id_sha384WithRSAEncryption,
                parameters: null
              });
            case "sha-512":
              return new AlgorithmIdentifier({
                algorithm: id_sha512WithRSAEncryption,
                parameters: null
              });
          }
        } else {
          return new AlgorithmIdentifier({
            algorithm: id_rsaEncryption,
            parameters: null
          });
        }
        break;
      case "rsa-pss":
        if ("hash" in alg) {
          if (!(("saltLength" in alg) && typeof alg.saltLength === "number")) {
            throw new Error("Cannot get 'saltLength' from 'alg' argument");
          }
          const pssParams = RsaAlgorithm_1.createPssParams(alg.hash, alg.saltLength);
          if (!pssParams) {
            throw new Error("Cannot create PSS parameters");
          }
          return new AlgorithmIdentifier({
            algorithm: id_RSASSA_PSS,
            parameters: AsnConvert.serialize(pssParams)
          });
        } else {
          return new AlgorithmIdentifier({
            algorithm: id_RSASSA_PSS,
            parameters: null
          });
        }
    }
    return null;
  }
  toWebAlgorithm(alg) {
    switch (alg.algorithm) {
      case id_rsaEncryption:
        return { name: "RSASSA-PKCS1-v1_5" };
      case id_sha1WithRSAEncryption:
        return {
          name: "RSASSA-PKCS1-v1_5",
          hash: { name: "SHA-1" }
        };
      case id_sha256WithRSAEncryption:
        return {
          name: "RSASSA-PKCS1-v1_5",
          hash: { name: "SHA-256" }
        };
      case id_sha384WithRSAEncryption:
        return {
          name: "RSASSA-PKCS1-v1_5",
          hash: { name: "SHA-384" }
        };
      case id_sha512WithRSAEncryption:
        return {
          name: "RSASSA-PKCS1-v1_5",
          hash: { name: "SHA-512" }
        };
      case id_RSASSA_PSS:
        if (alg.parameters) {
          const pssParams = AsnConvert.parse(alg.parameters, RsaSaPssParams);
          const algProv = instance.resolve(diAlgorithmProvider);
          const hashAlg = algProv.toWebAlgorithm(pssParams.hashAlgorithm);
          return {
            name: "RSA-PSS",
            hash: hashAlg,
            saltLength: pssParams.saltLength
          };
        } else {
          return { name: "RSA-PSS" };
        }
    }
    return null;
  }
};
RsaAlgorithm = RsaAlgorithm_1 = __decorate([
  injectable_default()
], RsaAlgorithm);
instance.registerSingleton(diAlgorithm, RsaAlgorithm);
var ShaAlgorithm = class ShaAlgorithm2 {
  toAsnAlgorithm(alg) {
    switch (alg.name.toLowerCase()) {
      case "sha-1":
        return new AlgorithmIdentifier({ algorithm: id_sha1 });
      case "sha-256":
        return new AlgorithmIdentifier({ algorithm: id_sha256 });
      case "sha-384":
        return new AlgorithmIdentifier({ algorithm: id_sha384 });
      case "sha-512":
        return new AlgorithmIdentifier({ algorithm: id_sha512 });
    }
    return null;
  }
  toWebAlgorithm(alg) {
    switch (alg.algorithm) {
      case id_sha1:
        return { name: "SHA-1" };
      case id_sha256:
        return { name: "SHA-256" };
      case id_sha384:
        return { name: "SHA-384" };
      case id_sha512:
        return { name: "SHA-512" };
    }
    return null;
  }
};
ShaAlgorithm = __decorate([
  injectable_default()
], ShaAlgorithm);
instance.registerSingleton(diAlgorithm, ShaAlgorithm);

class AsnEcSignatureFormatter {
  addPadding(pointSize, data) {
    const bytes = BufferSourceConverter.toUint8Array(data);
    const res = new Uint8Array(pointSize);
    res.set(bytes, pointSize - bytes.length);
    return res.buffer;
  }
  removePadding(data, positive = false) {
    let bytes = BufferSourceConverter.toUint8Array(data);
    for (let i = 0;i < bytes.length; i++) {
      if (!bytes[i]) {
        continue;
      }
      bytes = bytes.slice(i);
      break;
    }
    if (positive && bytes[0] > 127) {
      const result = new Uint8Array(bytes.length + 1);
      result.set(bytes, 1);
      return result.buffer;
    }
    return bytes.buffer;
  }
  toAsnSignature(algorithm, signature) {
    if (algorithm.name === "ECDSA") {
      const namedCurve = algorithm.namedCurve;
      const pointSize = AsnEcSignatureFormatter.namedCurveSize.get(namedCurve) || AsnEcSignatureFormatter.defaultNamedCurveSize;
      const ecSignature = new ECDSASigValue;
      const uint8Signature = BufferSourceConverter.toUint8Array(signature);
      ecSignature.r = this.removePadding(uint8Signature.slice(0, pointSize), true);
      ecSignature.s = this.removePadding(uint8Signature.slice(pointSize, pointSize + pointSize), true);
      return AsnConvert.serialize(ecSignature);
    }
    return null;
  }
  toWebSignature(algorithm, signature) {
    if (algorithm.name === "ECDSA") {
      const ecSigValue = AsnConvert.parse(signature, ECDSASigValue);
      const namedCurve = algorithm.namedCurve;
      const pointSize = AsnEcSignatureFormatter.namedCurveSize.get(namedCurve) || AsnEcSignatureFormatter.defaultNamedCurveSize;
      const r = this.addPadding(pointSize, this.removePadding(ecSigValue.r));
      const s = this.addPadding(pointSize, this.removePadding(ecSigValue.s));
      return combine(r, s);
    }
    return null;
  }
}
AsnEcSignatureFormatter.namedCurveSize = new Map;
AsnEcSignatureFormatter.defaultNamedCurveSize = 32;
var idX25519 = "1.3.101.110";
var idX448 = "1.3.101.111";
var idEd25519 = "1.3.101.112";
var idEd448 = "1.3.101.113";
var EdAlgorithm = class EdAlgorithm2 {
  toAsnAlgorithm(alg) {
    let algorithm = null;
    switch (alg.name.toLowerCase()) {
      case "ed25519":
        algorithm = idEd25519;
        break;
      case "x25519":
        algorithm = idX25519;
        break;
      case "eddsa":
        switch (alg.namedCurve.toLowerCase()) {
          case "ed25519":
            algorithm = idEd25519;
            break;
          case "ed448":
            algorithm = idEd448;
            break;
        }
        break;
      case "ecdh-es":
        switch (alg.namedCurve.toLowerCase()) {
          case "x25519":
            algorithm = idX25519;
            break;
          case "x448":
            algorithm = idX448;
            break;
        }
    }
    if (algorithm) {
      return new AlgorithmIdentifier({ algorithm });
    }
    return null;
  }
  toWebAlgorithm(alg) {
    switch (alg.algorithm) {
      case idEd25519:
        return { name: "Ed25519" };
      case idEd448:
        return {
          name: "EdDSA",
          namedCurve: "Ed448"
        };
      case idX25519:
        return { name: "X25519" };
      case idX448:
        return {
          name: "ECDH-ES",
          namedCurve: "X448"
        };
    }
    return null;
  }
};
EdAlgorithm = __decorate([
  injectable_default()
], EdAlgorithm);
instance.registerSingleton(diAlgorithm, EdAlgorithm);
var _Pkcs10CertificateRequest_tbs;
var _Pkcs10CertificateRequest_subjectName;
var _Pkcs10CertificateRequest_subject;
var _Pkcs10CertificateRequest_signatureAlgorithm;
var _Pkcs10CertificateRequest_signature;
var _Pkcs10CertificateRequest_publicKey;
var _Pkcs10CertificateRequest_attributes;
var _Pkcs10CertificateRequest_extensions;

class Pkcs10CertificateRequest extends PemData {
  get subjectName() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_subjectName, "f")) {
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_subjectName, new Name3(this.asn.certificationRequestInfo.subject), "f");
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_subjectName, "f");
  }
  get subject() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_subject, "f")) {
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_subject, this.subjectName.toString(), "f");
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_subject, "f");
  }
  get signatureAlgorithm() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_signatureAlgorithm, "f")) {
      const algProv = instance.resolve(diAlgorithmProvider);
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_signatureAlgorithm, algProv.toWebAlgorithm(this.asn.signatureAlgorithm), "f");
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_signatureAlgorithm, "f");
  }
  get signature() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_signature, "f")) {
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_signature, this.asn.signature, "f");
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_signature, "f");
  }
  get publicKey() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_publicKey, "f")) {
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_publicKey, new PublicKey(this.asn.certificationRequestInfo.subjectPKInfo), "f");
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_publicKey, "f");
  }
  get attributes() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_attributes, "f")) {
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_attributes, this.asn.certificationRequestInfo.attributes.map((o) => AttributeFactory.create(AsnConvert.serialize(o))), "f");
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_attributes, "f");
  }
  get extensions() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_extensions, "f")) {
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_extensions, [], "f");
      const extensions2 = this.getAttribute(id_pkcs9_at_extensionRequest);
      if (extensions2 instanceof ExtensionsAttribute) {
        __classPrivateFieldSet(this, _Pkcs10CertificateRequest_extensions, extensions2.items, "f");
      }
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_extensions, "f");
  }
  get tbs() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_tbs, "f")) {
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_tbs, this.asn.certificationRequestInfoRaw || AsnConvert.serialize(this.asn.certificationRequestInfo), "f");
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_tbs, "f");
  }
  constructor(param) {
    const args = PemData.isAsnEncoded(param) ? [param, CertificationRequest] : [param];
    super(args[0], args[1]);
    _Pkcs10CertificateRequest_tbs.set(this, undefined);
    _Pkcs10CertificateRequest_subjectName.set(this, undefined);
    _Pkcs10CertificateRequest_subject.set(this, undefined);
    _Pkcs10CertificateRequest_signatureAlgorithm.set(this, undefined);
    _Pkcs10CertificateRequest_signature.set(this, undefined);
    _Pkcs10CertificateRequest_publicKey.set(this, undefined);
    _Pkcs10CertificateRequest_attributes.set(this, undefined);
    _Pkcs10CertificateRequest_extensions.set(this, undefined);
    this.tag = PemConverter.CertificateRequestTag;
  }
  onInit(_asn) {}
  getAttribute(type) {
    for (const attr of this.attributes) {
      if (attr.type === type) {
        return attr;
      }
    }
    return null;
  }
  getAttributes(type) {
    return this.attributes.filter((o) => o.type === type);
  }
  getExtension(type) {
    for (const ext of this.extensions) {
      if (ext.type === type) {
        return ext;
      }
    }
    return null;
  }
  getExtensions(type) {
    return this.extensions.filter((o) => o.type === type);
  }
  async verify(crypto2 = cryptoProvider.get()) {
    const algorithm = {
      ...this.publicKey.algorithm,
      ...this.signatureAlgorithm
    };
    const publicKey = await this.publicKey.export(algorithm, ["verify"], crypto2);
    const signatureFormatters = instance.resolveAll(diAsnSignatureFormatter).reverse();
    let signature = null;
    for (const signatureFormatter of signatureFormatters) {
      signature = signatureFormatter.toWebSignature(algorithm, this.signature);
      if (signature) {
        break;
      }
    }
    if (!signature) {
      throw Error("Cannot convert WebCrypto signature value to ASN.1 format");
    }
    const ok = await crypto2.subtle.verify(this.signatureAlgorithm, publicKey, signature, this.tbs);
    return ok;
  }
  toTextObject() {
    const obj = this.toTextObjectEmpty();
    const req = AsnConvert.parse(this.rawData, CertificationRequest);
    const tbs = req.certificationRequestInfo;
    const data = new TextObject("", {
      Version: `${Version[tbs.version]} (${tbs.version})`,
      Subject: this.subject,
      "Subject Public Key Info": this.publicKey
    });
    if (this.attributes.length) {
      const attrs = new TextObject("");
      for (const ext of this.attributes) {
        const attrObj = ext.toTextObject();
        attrs[attrObj[TextObject.NAME]] = attrObj;
      }
      data["Attributes"] = attrs;
    }
    obj["Data"] = data;
    obj["Signature"] = new TextObject("", {
      Algorithm: TextConverter.serializeAlgorithm(req.signatureAlgorithm),
      "": req.signature
    });
    return obj;
  }
}
_Pkcs10CertificateRequest_tbs = new WeakMap, _Pkcs10CertificateRequest_subjectName = new WeakMap, _Pkcs10CertificateRequest_subject = new WeakMap, _Pkcs10CertificateRequest_signatureAlgorithm = new WeakMap, _Pkcs10CertificateRequest_signature = new WeakMap, _Pkcs10CertificateRequest_publicKey = new WeakMap, _Pkcs10CertificateRequest_attributes = new WeakMap, _Pkcs10CertificateRequest_extensions = new WeakMap;
Pkcs10CertificateRequest.NAME = "PKCS#10 Certificate Request";
var _X509Certificate_tbs;
var _X509Certificate_serialNumber;
var _X509Certificate_subjectName;
var _X509Certificate_subject;
var _X509Certificate_issuerName;
var _X509Certificate_issuer;
var _X509Certificate_notBefore;
var _X509Certificate_notAfter;
var _X509Certificate_signatureAlgorithm;
var _X509Certificate_signature;
var _X509Certificate_extensions;
var _X509Certificate_publicKey;

class X509Certificate extends PemData {
  get publicKey() {
    if (!__classPrivateFieldGet(this, _X509Certificate_publicKey, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_publicKey, new PublicKey(this.asn.tbsCertificate.subjectPublicKeyInfo), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_publicKey, "f");
  }
  get serialNumber() {
    if (!__classPrivateFieldGet(this, _X509Certificate_serialNumber, "f")) {
      const tbs = this.asn.tbsCertificate;
      let serialNumberBytes = new Uint8Array(tbs.serialNumber);
      if (serialNumberBytes.length > 1 && serialNumberBytes[0] === 0 && serialNumberBytes[1] > 127) {
        serialNumberBytes = serialNumberBytes.slice(1);
      }
      __classPrivateFieldSet(this, _X509Certificate_serialNumber, Convert.ToHex(serialNumberBytes), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_serialNumber, "f");
  }
  get subjectName() {
    if (!__classPrivateFieldGet(this, _X509Certificate_subjectName, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_subjectName, new Name3(this.asn.tbsCertificate.subject), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_subjectName, "f");
  }
  get subject() {
    if (!__classPrivateFieldGet(this, _X509Certificate_subject, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_subject, this.subjectName.toString(), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_subject, "f");
  }
  get issuerName() {
    if (!__classPrivateFieldGet(this, _X509Certificate_issuerName, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_issuerName, new Name3(this.asn.tbsCertificate.issuer), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_issuerName, "f");
  }
  get issuer() {
    if (!__classPrivateFieldGet(this, _X509Certificate_issuer, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_issuer, this.issuerName.toString(), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_issuer, "f");
  }
  get notBefore() {
    if (!__classPrivateFieldGet(this, _X509Certificate_notBefore, "f")) {
      const notBefore = this.asn.tbsCertificate.validity.notBefore.utcTime || this.asn.tbsCertificate.validity.notBefore.generalTime;
      if (!notBefore) {
        throw new Error("Cannot get 'notBefore' value");
      }
      __classPrivateFieldSet(this, _X509Certificate_notBefore, notBefore, "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_notBefore, "f");
  }
  get notAfter() {
    if (!__classPrivateFieldGet(this, _X509Certificate_notAfter, "f")) {
      const notAfter = this.asn.tbsCertificate.validity.notAfter.utcTime || this.asn.tbsCertificate.validity.notAfter.generalTime;
      if (!notAfter) {
        throw new Error("Cannot get 'notAfter' value");
      }
      __classPrivateFieldSet(this, _X509Certificate_notAfter, notAfter, "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_notAfter, "f");
  }
  get signatureAlgorithm() {
    if (!__classPrivateFieldGet(this, _X509Certificate_signatureAlgorithm, "f")) {
      const algProv = instance.resolve(diAlgorithmProvider);
      __classPrivateFieldSet(this, _X509Certificate_signatureAlgorithm, algProv.toWebAlgorithm(this.asn.signatureAlgorithm), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_signatureAlgorithm, "f");
  }
  get signature() {
    if (!__classPrivateFieldGet(this, _X509Certificate_signature, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_signature, this.asn.signatureValue, "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_signature, "f");
  }
  get extensions() {
    if (!__classPrivateFieldGet(this, _X509Certificate_extensions, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_extensions, [], "f");
      if (this.asn.tbsCertificate.extensions) {
        __classPrivateFieldSet(this, _X509Certificate_extensions, this.asn.tbsCertificate.extensions.map((o) => ExtensionFactory.create(AsnConvert.serialize(o))), "f");
      }
    }
    return __classPrivateFieldGet(this, _X509Certificate_extensions, "f");
  }
  get tbs() {
    if (!__classPrivateFieldGet(this, _X509Certificate_tbs, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_tbs, this.asn.tbsCertificateRaw || AsnConvert.serialize(this.asn.tbsCertificate), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_tbs, "f");
  }
  constructor(param) {
    const args = PemData.isAsnEncoded(param) ? [param, Certificate] : [param];
    super(args[0], args[1]);
    _X509Certificate_tbs.set(this, undefined);
    _X509Certificate_serialNumber.set(this, undefined);
    _X509Certificate_subjectName.set(this, undefined);
    _X509Certificate_subject.set(this, undefined);
    _X509Certificate_issuerName.set(this, undefined);
    _X509Certificate_issuer.set(this, undefined);
    _X509Certificate_notBefore.set(this, undefined);
    _X509Certificate_notAfter.set(this, undefined);
    _X509Certificate_signatureAlgorithm.set(this, undefined);
    _X509Certificate_signature.set(this, undefined);
    _X509Certificate_extensions.set(this, undefined);
    _X509Certificate_publicKey.set(this, undefined);
    this.tag = PemConverter.CertificateTag;
  }
  onInit(_asn) {}
  getExtension(type) {
    for (const ext of this.extensions) {
      if (typeof type === "string") {
        if (ext.type === type) {
          return ext;
        }
      } else {
        if (ext instanceof type) {
          return ext;
        }
      }
    }
    return null;
  }
  getExtensions(type) {
    return this.extensions.filter((o) => {
      if (typeof type === "string") {
        return o.type === type;
      } else {
        return o instanceof type;
      }
    });
  }
  async verify(params = {}, crypto2 = cryptoProvider.get()) {
    let keyAlgorithm;
    let publicKey;
    const paramsKey = params.publicKey;
    try {
      if (!paramsKey) {
        keyAlgorithm = {
          ...this.publicKey.algorithm,
          ...this.signatureAlgorithm
        };
        publicKey = await this.publicKey.export(keyAlgorithm, ["verify"], crypto2);
      } else if ("publicKey" in paramsKey) {
        keyAlgorithm = {
          ...paramsKey.publicKey.algorithm,
          ...this.signatureAlgorithm
        };
        publicKey = await paramsKey.publicKey.export(keyAlgorithm, ["verify"], crypto2);
      } else if (paramsKey instanceof PublicKey) {
        keyAlgorithm = {
          ...paramsKey.algorithm,
          ...this.signatureAlgorithm
        };
        publicKey = await paramsKey.export(keyAlgorithm, ["verify"], crypto2);
      } else if (BufferSourceConverter.isBufferSource(paramsKey)) {
        const key = new PublicKey(paramsKey);
        keyAlgorithm = {
          ...key.algorithm,
          ...this.signatureAlgorithm
        };
        publicKey = await key.export(keyAlgorithm, ["verify"], crypto2);
      } else {
        keyAlgorithm = {
          ...paramsKey.algorithm,
          ...this.signatureAlgorithm
        };
        publicKey = paramsKey;
      }
    } catch {
      return false;
    }
    const signatureFormatters = instance.resolveAll(diAsnSignatureFormatter).reverse();
    let signature = null;
    for (const signatureFormatter of signatureFormatters) {
      signature = signatureFormatter.toWebSignature(keyAlgorithm, this.signature);
      if (signature) {
        break;
      }
    }
    if (!signature) {
      throw Error("Cannot convert ASN.1 signature value to WebCrypto format");
    }
    const ok = await crypto2.subtle.verify(this.signatureAlgorithm, publicKey, signature, this.tbs);
    if (params.signatureOnly) {
      return ok;
    } else {
      const date = params.date || new Date;
      const time2 = date.getTime();
      return ok && this.notBefore.getTime() < time2 && time2 < this.notAfter.getTime();
    }
  }
  async getThumbprint(...args) {
    let crypto2;
    let algorithm = "SHA-1";
    if (args[0]) {
      if (!args[0].subtle) {
        algorithm = args[0] || algorithm;
        crypto2 = args[1];
      } else {
        crypto2 = args[0];
      }
    }
    crypto2 !== null && crypto2 !== undefined || (crypto2 = cryptoProvider.get());
    return await crypto2.subtle.digest(algorithm, this.rawData);
  }
  async isSelfSigned(crypto2 = cryptoProvider.get()) {
    return this.subject === this.issuer && await this.verify({ signatureOnly: true }, crypto2);
  }
  toTextObject() {
    const obj = this.toTextObjectEmpty();
    const cert = AsnConvert.parse(this.rawData, Certificate);
    const tbs = cert.tbsCertificate;
    const data = new TextObject("", {
      Version: `${Version[tbs.version]} (${tbs.version})`,
      "Serial Number": tbs.serialNumber,
      "Signature Algorithm": TextConverter.serializeAlgorithm(tbs.signature),
      Issuer: this.issuer,
      Validity: new TextObject("", {
        "Not Before": tbs.validity.notBefore.getTime(),
        "Not After": tbs.validity.notAfter.getTime()
      }),
      Subject: this.subject,
      "Subject Public Key Info": this.publicKey
    });
    if (tbs.issuerUniqueID) {
      data["Issuer Unique ID"] = tbs.issuerUniqueID;
    }
    if (tbs.subjectUniqueID) {
      data["Subject Unique ID"] = tbs.subjectUniqueID;
    }
    if (this.extensions.length) {
      const extensions2 = new TextObject("");
      for (const ext of this.extensions) {
        const extObj = ext.toTextObject();
        extensions2[extObj[TextObject.NAME]] = extObj;
      }
      data["Extensions"] = extensions2;
    }
    obj["Data"] = data;
    obj["Signature"] = new TextObject("", {
      Algorithm: TextConverter.serializeAlgorithm(cert.signatureAlgorithm),
      "": cert.signatureValue
    });
    return obj;
  }
}
_X509Certificate_tbs = new WeakMap, _X509Certificate_serialNumber = new WeakMap, _X509Certificate_subjectName = new WeakMap, _X509Certificate_subject = new WeakMap, _X509Certificate_issuerName = new WeakMap, _X509Certificate_issuer = new WeakMap, _X509Certificate_notBefore = new WeakMap, _X509Certificate_notAfter = new WeakMap, _X509Certificate_signatureAlgorithm = new WeakMap, _X509Certificate_signature = new WeakMap, _X509Certificate_extensions = new WeakMap, _X509Certificate_publicKey = new WeakMap;
X509Certificate.NAME = "Certificate";

class X509Certificates extends Array {
  constructor(param) {
    super();
    if (PemData.isAsnEncoded(param)) {
      this.import(param);
    } else if (param instanceof X509Certificate) {
      this.push(param);
    } else if (Array.isArray(param)) {
      for (const item of param) {
        this.push(item);
      }
    }
  }
  export(format2) {
    const signedData = new SignedData;
    signedData.version = 1;
    signedData.encapContentInfo.eContentType = id_data;
    signedData.encapContentInfo.eContent = new EncapsulatedContent({ single: new OctetString2 });
    signedData.certificates = new CertificateSet(this.map((o) => new CertificateChoices({ certificate: AsnConvert.parse(o.rawData, Certificate) })));
    const cms = new ContentInfo({
      contentType: id_signedData,
      content: AsnConvert.serialize(signedData)
    });
    const raw = AsnConvert.serialize(cms);
    if (format2 === "raw") {
      return raw;
    }
    return this.toString(format2);
  }
  import(data) {
    const raw = PemData.toArrayBuffer(data);
    const cms = AsnConvert.parse(raw, ContentInfo);
    if (cms.contentType !== id_signedData) {
      throw new TypeError("Cannot parse CMS package. Incoming data is not a SignedData object.");
    }
    const signedData = AsnConvert.parse(cms.content, SignedData);
    this.clear();
    for (const item of signedData.certificates || []) {
      if (item.certificate) {
        this.push(new X509Certificate(item.certificate));
      }
    }
  }
  clear() {
    while (this.pop()) {}
  }
  toString(format2 = "pem") {
    const raw = this.export("raw");
    switch (format2) {
      case "pem":
        return PemConverter.encode(raw, "CMS");
      case "pem-chain":
        return this.map((o) => o.toString("pem")).join(`
`);
      case "asn":
        return AsnConvert.toString(raw);
      case "hex":
        return Convert.ToHex(raw);
      case "base64":
        return Convert.ToBase64(raw);
      case "base64url":
        return Convert.ToBase64Url(raw);
      case "text":
        return TextConverter.serialize(this.toTextObject());
      default:
        throw TypeError("Argument 'format' is unsupported value");
    }
  }
  toTextObject() {
    const contentInfo = AsnConvert.parse(this.export("raw"), ContentInfo);
    const signedData = AsnConvert.parse(contentInfo.content, SignedData);
    const obj = new TextObject("X509Certificates", {
      "Content Type": OidSerializer.toString(contentInfo.contentType),
      Content: new TextObject("", {
        Version: `${CMSVersion[signedData.version]} (${signedData.version})`,
        Certificates: new TextObject("", { Certificate: this.map((o) => o.toTextObject()) })
      })
    });
    return obj;
  }
}

class X509ChainBuilder {
  constructor(params = {}) {
    this.certificates = [];
    if (params.certificates) {
      this.certificates = params.certificates;
    }
  }
  async build(cert, crypto2 = cryptoProvider.get()) {
    const chain = new X509Certificates(cert);
    let current = cert;
    while (current = await this.findIssuer(current, crypto2)) {
      const thumbprint = await current.getThumbprint(crypto2);
      for (const item of chain) {
        const thumbprint2 = await item.getThumbprint(crypto2);
        if (isEqual(thumbprint, thumbprint2)) {
          throw new Error("Cannot build a certificate chain. Circular dependency.");
        }
      }
      chain.push(current);
    }
    return chain;
  }
  async findIssuer(cert, crypto2 = cryptoProvider.get()) {
    if (!await cert.isSelfSigned(crypto2)) {
      const akiExt = cert.getExtension(id_ce_authorityKeyIdentifier);
      for (const item of this.certificates) {
        if (item.subject !== cert.issuer) {
          continue;
        }
        if (akiExt) {
          if (akiExt.keyId) {
            const skiExt = item.getExtension(id_ce_subjectKeyIdentifier);
            if (skiExt && skiExt.keyId !== akiExt.keyId) {
              continue;
            }
          } else if (akiExt.certId) {
            const sanExt = item.getExtension(id_ce_subjectAltName);
            if (sanExt && !(akiExt.certId.serialNumber === item.serialNumber && isEqual(AsnConvert.serialize(akiExt.certId.name), AsnConvert.serialize(sanExt)))) {
              continue;
            }
          }
        }
        try {
          const algorithm = {
            ...item.publicKey.algorithm,
            ...cert.signatureAlgorithm
          };
          const publicKey = await item.publicKey.export(algorithm, ["verify"], crypto2);
          const ok = await cert.verify({
            publicKey,
            signatureOnly: true
          }, crypto2);
          if (!ok) {
            continue;
          }
        } catch {
          continue;
        }
        return item;
      }
    }
    return null;
  }
}
function generateCertificateSerialNumber(input, crypto2 = cryptoProvider.get()) {
  const inputView = BufferSourceConverter.toUint8Array(Convert.FromHex(input || ""));
  let serialNumber = inputView && inputView.length && inputView.some((o) => o > 0) ? new Uint8Array(inputView) : undefined;
  if (!serialNumber) {
    serialNumber = crypto2.getRandomValues(new Uint8Array(16));
  }
  let firstNonZero = 0;
  while (firstNonZero < serialNumber.length - 1 && serialNumber[firstNonZero] === 0) {
    firstNonZero++;
  }
  serialNumber = serialNumber.slice(firstNonZero);
  if (serialNumber[0] > 127) {
    const newSerialNumber = new Uint8Array(serialNumber.length + 1);
    newSerialNumber[0] = 0;
    newSerialNumber.set(serialNumber, 1);
    serialNumber = newSerialNumber;
  }
  return serialNumber.buffer;
}
var _X509CrlEntry_serialNumber;
var _X509CrlEntry_revocationDate;
var _X509CrlEntry_reason;
var _X509CrlEntry_invalidity;
var _X509CrlEntry_extensions;
var X509CrlReason;
(function(X509CrlReason2) {
  X509CrlReason2[X509CrlReason2["unspecified"] = 0] = "unspecified";
  X509CrlReason2[X509CrlReason2["keyCompromise"] = 1] = "keyCompromise";
  X509CrlReason2[X509CrlReason2["cACompromise"] = 2] = "cACompromise";
  X509CrlReason2[X509CrlReason2["affiliationChanged"] = 3] = "affiliationChanged";
  X509CrlReason2[X509CrlReason2["superseded"] = 4] = "superseded";
  X509CrlReason2[X509CrlReason2["cessationOfOperation"] = 5] = "cessationOfOperation";
  X509CrlReason2[X509CrlReason2["certificateHold"] = 6] = "certificateHold";
  X509CrlReason2[X509CrlReason2["removeFromCRL"] = 8] = "removeFromCRL";
  X509CrlReason2[X509CrlReason2["privilegeWithdrawn"] = 9] = "privilegeWithdrawn";
  X509CrlReason2[X509CrlReason2["aACompromise"] = 10] = "aACompromise";
})(X509CrlReason || (X509CrlReason = {}));

class X509CrlEntry extends AsnData {
  get serialNumber() {
    if (!__classPrivateFieldGet(this, _X509CrlEntry_serialNumber, "f")) {
      __classPrivateFieldSet(this, _X509CrlEntry_serialNumber, Convert.ToHex(this.asn.userCertificate), "f");
    }
    return __classPrivateFieldGet(this, _X509CrlEntry_serialNumber, "f");
  }
  get revocationDate() {
    if (!__classPrivateFieldGet(this, _X509CrlEntry_revocationDate, "f")) {
      __classPrivateFieldSet(this, _X509CrlEntry_revocationDate, this.asn.revocationDate.getTime(), "f");
    }
    return __classPrivateFieldGet(this, _X509CrlEntry_revocationDate, "f");
  }
  get reason() {
    if (__classPrivateFieldGet(this, _X509CrlEntry_reason, "f") === undefined) {
      this.extensions;
    }
    return __classPrivateFieldGet(this, _X509CrlEntry_reason, "f");
  }
  get invalidity() {
    if (__classPrivateFieldGet(this, _X509CrlEntry_invalidity, "f") === undefined) {
      this.extensions;
    }
    return __classPrivateFieldGet(this, _X509CrlEntry_invalidity, "f");
  }
  get extensions() {
    if (!__classPrivateFieldGet(this, _X509CrlEntry_extensions, "f")) {
      __classPrivateFieldSet(this, _X509CrlEntry_extensions, [], "f");
      if (this.asn.crlEntryExtensions) {
        __classPrivateFieldSet(this, _X509CrlEntry_extensions, this.asn.crlEntryExtensions.map((o) => {
          const extension2 = ExtensionFactory.create(AsnConvert.serialize(o));
          switch (extension2.type) {
            case id_ce_cRLReasons:
              if (__classPrivateFieldGet(this, _X509CrlEntry_reason, "f") === undefined) {
                __classPrivateFieldSet(this, _X509CrlEntry_reason, AsnConvert.parse(extension2.value, CRLReason).reason, "f");
              }
              break;
            case id_ce_invalidityDate:
              if (__classPrivateFieldGet(this, _X509CrlEntry_invalidity, "f") === undefined) {
                __classPrivateFieldSet(this, _X509CrlEntry_invalidity, AsnConvert.parse(extension2.value, InvalidityDate).value, "f");
              }
              break;
          }
          return extension2;
        }), "f");
      }
    }
    return __classPrivateFieldGet(this, _X509CrlEntry_extensions, "f");
  }
  constructor(...args) {
    let raw;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      raw = BufferSourceConverter.toArrayBuffer(args[0]);
    } else if (typeof args[0] === "string") {
      raw = AsnConvert.serialize(new RevokedCertificate({
        userCertificate: generateCertificateSerialNumber(args[0]),
        revocationDate: new Time(args[1]),
        crlEntryExtensions: args[2]
      }));
    } else if (args[0] instanceof RevokedCertificate) {
      raw = args[0];
    }
    if (!raw) {
      throw new TypeError("Cannot create X509CrlEntry instance. Wrong constructor arguments.");
    }
    super(raw, RevokedCertificate);
    _X509CrlEntry_serialNumber.set(this, undefined);
    _X509CrlEntry_revocationDate.set(this, undefined);
    _X509CrlEntry_reason.set(this, undefined);
    _X509CrlEntry_invalidity.set(this, undefined);
    _X509CrlEntry_extensions.set(this, undefined);
  }
  onInit(_asn) {}
}
_X509CrlEntry_serialNumber = new WeakMap, _X509CrlEntry_revocationDate = new WeakMap, _X509CrlEntry_reason = new WeakMap, _X509CrlEntry_invalidity = new WeakMap, _X509CrlEntry_extensions = new WeakMap;
var _X509Crl_tbs;
var _X509Crl_signatureAlgorithm;
var _X509Crl_issuerName;
var _X509Crl_thisUpdate;
var _X509Crl_nextUpdate;
var _X509Crl_entries;
var _X509Crl_extensions;

class X509Crl extends PemData {
  get version() {
    return this.asn.tbsCertList.version;
  }
  get signatureAlgorithm() {
    if (!__classPrivateFieldGet(this, _X509Crl_signatureAlgorithm, "f")) {
      const algProv = instance.resolve(diAlgorithmProvider);
      __classPrivateFieldSet(this, _X509Crl_signatureAlgorithm, algProv.toWebAlgorithm(this.asn.signatureAlgorithm), "f");
    }
    return __classPrivateFieldGet(this, _X509Crl_signatureAlgorithm, "f");
  }
  get signature() {
    return this.asn.signature;
  }
  get issuer() {
    return this.issuerName.toString();
  }
  get issuerName() {
    if (!__classPrivateFieldGet(this, _X509Crl_issuerName, "f")) {
      __classPrivateFieldSet(this, _X509Crl_issuerName, new Name3(this.asn.tbsCertList.issuer), "f");
    }
    return __classPrivateFieldGet(this, _X509Crl_issuerName, "f");
  }
  get thisUpdate() {
    if (!__classPrivateFieldGet(this, _X509Crl_thisUpdate, "f")) {
      const thisUpdate = this.asn.tbsCertList.thisUpdate.getTime();
      if (!thisUpdate) {
        throw new Error("Cannot get 'thisUpdate' value");
      }
      __classPrivateFieldSet(this, _X509Crl_thisUpdate, thisUpdate, "f");
    }
    return __classPrivateFieldGet(this, _X509Crl_thisUpdate, "f");
  }
  get nextUpdate() {
    var _a3;
    if (__classPrivateFieldGet(this, _X509Crl_nextUpdate, "f") === undefined) {
      __classPrivateFieldSet(this, _X509Crl_nextUpdate, ((_a3 = this.asn.tbsCertList.nextUpdate) === null || _a3 === undefined ? undefined : _a3.getTime()) || undefined, "f");
    }
    return __classPrivateFieldGet(this, _X509Crl_nextUpdate, "f");
  }
  get entries() {
    var _a3;
    if (!__classPrivateFieldGet(this, _X509Crl_entries, "f")) {
      __classPrivateFieldSet(this, _X509Crl_entries, ((_a3 = this.asn.tbsCertList.revokedCertificates) === null || _a3 === undefined ? undefined : _a3.map((o) => new X509CrlEntry(o))) || [], "f");
    }
    return __classPrivateFieldGet(this, _X509Crl_entries, "f");
  }
  get extensions() {
    if (!__classPrivateFieldGet(this, _X509Crl_extensions, "f")) {
      __classPrivateFieldSet(this, _X509Crl_extensions, [], "f");
      if (this.asn.tbsCertList.crlExtensions) {
        __classPrivateFieldSet(this, _X509Crl_extensions, this.asn.tbsCertList.crlExtensions.map((o) => ExtensionFactory.create(AsnConvert.serialize(o))), "f");
      }
    }
    return __classPrivateFieldGet(this, _X509Crl_extensions, "f");
  }
  get tbs() {
    if (!__classPrivateFieldGet(this, _X509Crl_tbs, "f")) {
      __classPrivateFieldSet(this, _X509Crl_tbs, this.asn.tbsCertListRaw || AsnConvert.serialize(this.asn.tbsCertList), "f");
    }
    return __classPrivateFieldGet(this, _X509Crl_tbs, "f");
  }
  get tbsCertListSignatureAlgorithm() {
    return this.asn.tbsCertList.signature;
  }
  get certListSignatureAlgorithm() {
    return this.asn.signatureAlgorithm;
  }
  constructor(param) {
    super(param, PemData.isAsnEncoded(param) ? CertificateList : undefined);
    this.tag = PemConverter.CrlTag;
    _X509Crl_tbs.set(this, undefined);
    _X509Crl_signatureAlgorithm.set(this, undefined);
    _X509Crl_issuerName.set(this, undefined);
    _X509Crl_thisUpdate.set(this, undefined);
    _X509Crl_nextUpdate.set(this, undefined);
    _X509Crl_entries.set(this, undefined);
    _X509Crl_extensions.set(this, undefined);
  }
  onInit(_asn) {}
  getExtension(type) {
    for (const ext of this.extensions) {
      if (typeof type === "string") {
        if (ext.type === type) {
          return ext;
        }
      } else {
        if (ext instanceof type) {
          return ext;
        }
      }
    }
    return null;
  }
  getExtensions(type) {
    return this.extensions.filter((o) => {
      if (typeof type === "string") {
        return o.type === type;
      } else {
        return o instanceof type;
      }
    });
  }
  async verify(params, crypto2 = cryptoProvider.get()) {
    if (!this.certListSignatureAlgorithm.isEqual(this.tbsCertListSignatureAlgorithm)) {
      throw new Error("algorithm identifier in the sequence tbsCertList and CertificateList mismatch");
    }
    let keyAlgorithm;
    let publicKey;
    const paramsKey = params.publicKey;
    try {
      if (paramsKey instanceof X509Certificate) {
        keyAlgorithm = {
          ...paramsKey.publicKey.algorithm,
          ...paramsKey.signatureAlgorithm
        };
        publicKey = await paramsKey.publicKey.export(keyAlgorithm, ["verify"]);
      } else if (paramsKey instanceof PublicKey) {
        keyAlgorithm = {
          ...paramsKey.algorithm,
          ...this.signatureAlgorithm
        };
        publicKey = await paramsKey.export(keyAlgorithm, ["verify"]);
      } else {
        keyAlgorithm = {
          ...paramsKey.algorithm,
          ...this.signatureAlgorithm
        };
        publicKey = paramsKey;
      }
    } catch {
      return false;
    }
    const signatureFormatters = instance.resolveAll(diAsnSignatureFormatter).reverse();
    let signature = null;
    for (const signatureFormatter of signatureFormatters) {
      signature = signatureFormatter.toWebSignature(keyAlgorithm, this.signature);
      if (signature) {
        break;
      }
    }
    if (!signature) {
      throw Error("Cannot convert ASN.1 signature value to WebCrypto format");
    }
    return await crypto2.subtle.verify(this.signatureAlgorithm, publicKey, signature, this.tbs);
  }
  async getThumbprint(...args) {
    let crypto2;
    let algorithm = "SHA-1";
    if (args[0]) {
      if (!args[0].subtle) {
        algorithm = args[0] || algorithm;
        crypto2 = args[1];
      } else {
        crypto2 = args[0];
      }
    }
    crypto2 !== null && crypto2 !== undefined || (crypto2 = cryptoProvider.get());
    return await crypto2.subtle.digest(algorithm, this.rawData);
  }
  findRevoked(certOrSerialNumber) {
    const serialNumber = typeof certOrSerialNumber === "string" ? certOrSerialNumber : certOrSerialNumber.serialNumber;
    const serialBuffer = generateCertificateSerialNumber(serialNumber);
    for (const revoked of this.asn.tbsCertList.revokedCertificates || []) {
      if (BufferSourceConverter.isEqual(revoked.userCertificate, serialBuffer)) {
        return new X509CrlEntry(AsnConvert.serialize(revoked));
      }
    }
    return null;
  }
}
_X509Crl_tbs = new WeakMap, _X509Crl_signatureAlgorithm = new WeakMap, _X509Crl_issuerName = new WeakMap, _X509Crl_thisUpdate = new WeakMap, _X509Crl_nextUpdate = new WeakMap, _X509Crl_entries = new WeakMap, _X509Crl_extensions = new WeakMap;
ExtensionFactory.register(id_ce_basicConstraints, BasicConstraintsExtension);
ExtensionFactory.register(id_ce_extKeyUsage, ExtendedKeyUsageExtension);
ExtensionFactory.register(id_ce_keyUsage, KeyUsagesExtension);
ExtensionFactory.register(id_ce_subjectKeyIdentifier, SubjectKeyIdentifierExtension);
ExtensionFactory.register(id_ce_authorityKeyIdentifier, AuthorityKeyIdentifierExtension);
ExtensionFactory.register(id_ce_subjectAltName, SubjectAlternativeNameExtension);
ExtensionFactory.register(id_ce_cRLDistributionPoints, CRLDistributionPointsExtension);
ExtensionFactory.register(id_pe_authorityInfoAccess, AuthorityInfoAccessExtension);
ExtensionFactory.register(id_ce_issuerAltName, IssuerAlternativeNameExtension);
AttributeFactory.register(id_pkcs9_at_challengePassword, ChallengePasswordAttribute);
AttributeFactory.register(id_pkcs9_at_extensionRequest, ExtensionsAttribute);
instance.registerSingleton(diAsnSignatureFormatter, AsnDefaultSignatureFormatter);
instance.registerSingleton(diAsnSignatureFormatter, AsnEcSignatureFormatter);
AsnEcSignatureFormatter.namedCurveSize.set("P-256", 32);
AsnEcSignatureFormatter.namedCurveSize.set("K-256", 32);
AsnEcSignatureFormatter.namedCurveSize.set("P-384", 48);
AsnEcSignatureFormatter.namedCurveSize.set("P-521", 66);

// node_modules/@simplewebauthn/server/esm/helpers/fetch.js
function fetch(url) {
  return _fetchInternals.stubThis(url);
}
var _fetchInternals = {
  stubThis: (url) => globalThis.fetch(url)
};

// node_modules/@simplewebauthn/server/esm/helpers/isCertRevoked.js
var cacheRevokedCerts = {};
async function isCertRevoked(cert) {
  const { extensions: extensions2 } = cert;
  if (!extensions2) {
    return false;
  }
  let extAuthorityKeyID;
  let extSubjectKeyID;
  let extCRLDistributionPoints;
  extensions2.forEach((ext) => {
    if (ext instanceof AuthorityKeyIdentifierExtension) {
      extAuthorityKeyID = ext;
    } else if (ext instanceof SubjectKeyIdentifierExtension) {
      extSubjectKeyID = ext;
    } else if (ext instanceof CRLDistributionPointsExtension) {
      extCRLDistributionPoints = ext;
    }
  });
  let keyIdentifier = undefined;
  if (extAuthorityKeyID && extAuthorityKeyID.keyId) {
    keyIdentifier = extAuthorityKeyID.keyId;
  } else if (extSubjectKeyID) {
    keyIdentifier = extSubjectKeyID.keyId;
  }
  if (keyIdentifier) {
    const cached = cacheRevokedCerts[keyIdentifier];
    if (cached) {
      const now2 = new Date;
      if (!cached.nextUpdate || cached.nextUpdate > now2) {
        return cached.revokedCerts.indexOf(cert.serialNumber) >= 0;
      }
    }
  }
  const crlURL = extCRLDistributionPoints?.distributionPoints?.[0].distributionPoint?.fullName?.[0].uniformResourceIdentifier;
  if (!crlURL) {
    return false;
  }
  let certListBytes;
  try {
    const respCRL = await fetch(crlURL);
    certListBytes = await respCRL.arrayBuffer();
  } catch (_err) {
    return false;
  }
  let data;
  try {
    data = new X509Crl(certListBytes);
  } catch (_err) {
    return false;
  }
  const newCached = {
    revokedCerts: [],
    nextUpdate: undefined
  };
  if (data.nextUpdate) {
    newCached.nextUpdate = data.nextUpdate;
  }
  const revokedCerts = data.entries;
  if (revokedCerts) {
    for (const cert2 of revokedCerts) {
      const revokedHex = cert2.serialNumber;
      newCached.revokedCerts.push(revokedHex);
    }
    if (keyIdentifier) {
      cacheRevokedCerts[keyIdentifier] = newCached;
    }
    return newCached.revokedCerts.indexOf(cert.serialNumber) >= 0;
  }
  return false;
}
// node_modules/@simplewebauthn/server/esm/helpers/decodeAuthenticatorExtensions.js
function decodeAuthenticatorExtensions(extensionData) {
  let toCBOR;
  try {
    toCBOR = exports_isoCBOR.decodeFirst(extensionData);
  } catch (err) {
    const _err = err;
    throw new Error(`Error decoding authenticator extensions: ${_err.message}`);
  }
  return convertMapToObjectDeep(toCBOR);
}
function convertMapToObjectDeep(input) {
  const mapped = {};
  for (const [key, value] of input) {
    if (value instanceof Map) {
      mapped[key] = convertMapToObjectDeep(value);
    } else {
      mapped[key] = value;
    }
  }
  return mapped;
}

// node_modules/@simplewebauthn/server/esm/helpers/parseAuthenticatorData.js
function parseAuthenticatorData(authData) {
  if (authData.byteLength < 37) {
    throw new Error(`Authenticator data was ${authData.byteLength} bytes, expected at least 37 bytes`);
  }
  let pointer = 0;
  const dataView = exports_isoUint8Array.toDataView(authData);
  const rpIdHash = authData.slice(pointer, pointer += 32);
  const flagsBuf = authData.slice(pointer, pointer += 1);
  const flagsInt = flagsBuf[0];
  const flags = {
    up: !!(flagsInt & 1 << 0),
    uv: !!(flagsInt & 1 << 2),
    be: !!(flagsInt & 1 << 3),
    bs: !!(flagsInt & 1 << 4),
    at: !!(flagsInt & 1 << 6),
    ed: !!(flagsInt & 1 << 7),
    flagsInt
  };
  const counterBuf = authData.slice(pointer, pointer + 4);
  const counter = dataView.getUint32(pointer, false);
  pointer += 4;
  let aaguid = undefined;
  let credentialID = undefined;
  let credentialPublicKey = undefined;
  if (flags.at) {
    aaguid = authData.slice(pointer, pointer += 16);
    const credIDLen = dataView.getUint16(pointer);
    pointer += 2;
    credentialID = authData.slice(pointer, pointer += credIDLen);
    const badEdDSACBOR = exports_isoUint8Array.fromHex("a301634f4b500327206745643235353139");
    const bytesAtCurrentPosition = authData.slice(pointer, pointer + badEdDSACBOR.byteLength);
    let foundBadCBOR = false;
    if (exports_isoUint8Array.areEqual(badEdDSACBOR, bytesAtCurrentPosition)) {
      foundBadCBOR = true;
      authData[pointer] = 164;
    }
    const firstDecoded = exports_isoCBOR.decodeFirst(authData.slice(pointer));
    const firstEncoded = Uint8Array.from(exports_isoCBOR.encode(firstDecoded));
    if (foundBadCBOR) {
      authData[pointer] = 163;
    }
    credentialPublicKey = firstEncoded;
    pointer += firstEncoded.byteLength;
  }
  let extensionsData = undefined;
  let extensionsDataBuffer = undefined;
  if (flags.ed) {
    const firstDecoded = exports_isoCBOR.decodeFirst(authData.slice(pointer));
    extensionsDataBuffer = Uint8Array.from(exports_isoCBOR.encode(firstDecoded));
    extensionsData = decodeAuthenticatorExtensions(extensionsDataBuffer);
    pointer += extensionsDataBuffer.byteLength;
  }
  if (authData.byteLength > pointer) {
    throw new Error("Leftover bytes detected while parsing authenticator data");
  }
  return _parseAuthenticatorDataInternals.stubThis({
    rpIdHash,
    flagsBuf,
    flags,
    counter,
    counterBuf,
    aaguid,
    credentialID,
    credentialPublicKey,
    extensionsData,
    extensionsDataBuffer
  });
}
var _parseAuthenticatorDataInternals = {
  stubThis: (value) => value
};
// node_modules/@simplewebauthn/server/esm/helpers/toHash.js
function toHash(data, algorithm = -7) {
  if (typeof data === "string") {
    data = exports_isoUint8Array.fromUTF8String(data);
  }
  const digest2 = exports_isoCrypto.digest(data, algorithm);
  return digest2;
}
// node_modules/@simplewebauthn/server/esm/helpers/validateCertificatePath.js
async function validateCertificatePath(x5cCertsPEM, trustAnchorsPEM = []) {
  if (trustAnchorsPEM.length === 0) {
    return true;
  }
  const x5cCertsParsed = x5cCertsPEM.map((certPEM) => new X509Certificate(certPEM));
  for (let i = 0;i < x5cCertsParsed.length; i++) {
    const cert = x5cCertsParsed[i];
    const certPEM = x5cCertsPEM[i];
    try {
      await assertCertNotRevoked(cert);
    } catch (_err) {
      throw new Error(`Found revoked certificate in x5c:
${certPEM}`);
    }
    try {
      assertCertIsWithinValidTimeWindow(cert.notBefore, cert.notAfter);
    } catch (_err) {
      throw new Error(`Found certificate out of validity period in x5c:
${certPEM}`);
    }
  }
  const trustAnchorsParsed = trustAnchorsPEM.map((certPEM) => {
    try {
      return new X509Certificate(certPEM);
    } catch (err) {
      const _err = err;
      throw new Error(`Could not parse trust anchor certificate:
${certPEM}`, { cause: _err });
    }
  });
  const validTrustAnchors = [];
  for (let i = 0;i < trustAnchorsParsed.length; i++) {
    const cert = trustAnchorsParsed[i];
    try {
      await assertCertNotRevoked(cert);
    } catch (_err) {
      continue;
    }
    try {
      assertCertIsWithinValidTimeWindow(cert.notBefore, cert.notAfter);
    } catch (_err) {
      continue;
    }
    validTrustAnchors.push(cert);
  }
  if (validTrustAnchors.length === 0) {
    throw new Error("No specified trust anchor was valid for verifying x5c");
  }
  let invalidCertificateChain = true;
  for (const anchor of validTrustAnchors) {
    try {
      const x5cWithTrustAnchor = x5cCertsParsed.concat([anchor]);
      const numUniqueCerts = new Set(x5cWithTrustAnchor.map((cert) => cert.toString("pem"))).size;
      if (numUniqueCerts !== x5cWithTrustAnchor.length) {
        throw new Error("Invalid certificate path: found duplicate certificates");
      }
      const x5cLeafCert = x5cCertsParsed[0];
      let x5cIntermediates = [];
      if (x5cCertsParsed.length > 1) {
        x5cIntermediates = x5cCertsParsed.slice(1);
      }
      const chainBuilder = new X509ChainBuilder({ certificates: [...x5cIntermediates, anchor] });
      const chain = await chainBuilder.build(x5cLeafCert);
      if (chain.length < numUniqueCerts) {
        continue;
      }
      if (chain[chain.length - 1].subject !== anchor.subject) {
        continue;
      }
      invalidCertificateChain = false;
      break;
    } catch (err) {
      throw new Error("Unexpected error while validating certificate path", { cause: err });
    }
  }
  if (invalidCertificateChain) {
    throw new InvalidCertificatePath;
  }
  return true;
}
async function assertCertNotRevoked(certificate2) {
  const subjectCertRevoked = await isCertRevoked(certificate2);
  if (subjectCertRevoked) {
    throw new Error("Found revoked certificate in certificate path");
  }
}
function assertCertIsWithinValidTimeWindow(certNotBefore, certNotAfter) {
  const now2 = new Date(Date.now());
  if (certNotBefore > now2 || certNotAfter < now2) {
    throw new Error("Certificate is not yet valid or expired");
  }
}

class InvalidCertificatePath extends Error {
  constructor() {
    const message = "x5c could not be chained to any specified trust anchor";
    super(message);
    this.name = "InvalidX5CChain";
  }
}
// node_modules/@simplewebauthn/server/esm/helpers/mapX509SignatureAlgToCOSEAlg.js
function mapX509SignatureAlgToCOSEAlg(signatureAlgorithm) {
  let alg;
  if (signatureAlgorithm === "1.2.840.10045.4.3.2") {
    alg = COSEALG.ES256;
  } else if (signatureAlgorithm === "1.2.840.10045.4.3.3") {
    alg = COSEALG.ES384;
  } else if (signatureAlgorithm === "1.2.840.10045.4.3.4") {
    alg = COSEALG.ES512;
  } else if (signatureAlgorithm === "1.2.840.113549.1.1.11") {
    alg = COSEALG.RS256;
  } else if (signatureAlgorithm === "1.2.840.113549.1.1.12") {
    alg = COSEALG.RS384;
  } else if (signatureAlgorithm === "1.2.840.113549.1.1.13") {
    alg = COSEALG.RS512;
  } else if (signatureAlgorithm === "1.2.840.113549.1.1.5") {
    alg = COSEALG.RS1;
  } else {
    throw new Error(`Unable to map X.509 signature algorithm ${signatureAlgorithm} to a COSE algorithm`);
  }
  return alg;
}

// node_modules/@simplewebauthn/server/esm/helpers/convertX509PublicKeyToCOSE.js
function convertX509PublicKeyToCOSE(x509Certificate) {
  let cosePublicKey = new Map;
  const x509 = AsnParser.parse(x509Certificate, Certificate);
  const { tbsCertificate } = x509;
  const { subjectPublicKeyInfo, signature: _tbsSignature } = tbsCertificate;
  const signatureAlgorithm = _tbsSignature.algorithm;
  const publicKeyAlgorithmID = subjectPublicKeyInfo.algorithm.algorithm;
  if (publicKeyAlgorithmID === id_ecPublicKey) {
    if (!subjectPublicKeyInfo.algorithm.parameters) {
      throw new Error("Certificate public key was missing parameters (EC2)");
    }
    const ecParameters = AsnParser.parse(new Uint8Array(subjectPublicKeyInfo.algorithm.parameters), ECParameters);
    let crv = -999;
    const { namedCurve } = ecParameters;
    if (namedCurve === id_secp256r1) {
      crv = COSECRV.P256;
    } else if (namedCurve === id_secp384r1) {
      crv = COSECRV.P384;
    } else {
      throw new Error(`Certificate public key contained unexpected namedCurve ${namedCurve} (EC2)`);
    }
    const subjectPublicKey = new Uint8Array(subjectPublicKeyInfo.subjectPublicKey);
    let x;
    let y;
    if (subjectPublicKey[0] === 4) {
      let pointer = 1;
      const halfLength = (subjectPublicKey.length - 1) / 2;
      x = subjectPublicKey.slice(pointer, pointer += halfLength);
      y = subjectPublicKey.slice(pointer);
    } else {
      throw new Error('TODO: Figure out how to handle public keys in "compressed form"');
    }
    const coseEC2PubKey = new Map;
    coseEC2PubKey.set(COSEKEYS.kty, COSEKTY.EC2);
    coseEC2PubKey.set(COSEKEYS.alg, mapX509SignatureAlgToCOSEAlg(signatureAlgorithm));
    coseEC2PubKey.set(COSEKEYS.crv, crv);
    coseEC2PubKey.set(COSEKEYS.x, x);
    coseEC2PubKey.set(COSEKEYS.y, y);
    cosePublicKey = coseEC2PubKey;
  } else if (publicKeyAlgorithmID === id_rsaEncryption) {
    const rsaPublicKey = AsnParser.parse(subjectPublicKeyInfo.subjectPublicKey, RSAPublicKey);
    const coseRSAPubKey = new Map;
    coseRSAPubKey.set(COSEKEYS.kty, COSEKTY.RSA);
    coseRSAPubKey.set(COSEKEYS.alg, mapX509SignatureAlgToCOSEAlg(signatureAlgorithm));
    coseRSAPubKey.set(COSEKEYS.n, new Uint8Array(rsaPublicKey.modulus));
    coseRSAPubKey.set(COSEKEYS.e, new Uint8Array(rsaPublicKey.publicExponent));
    cosePublicKey = coseRSAPubKey;
  } else {
    throw new Error(`Certificate public key contained unexpected algorithm ID ${publicKeyAlgorithmID}`);
  }
  return cosePublicKey;
}

// node_modules/@simplewebauthn/server/esm/helpers/verifySignature.js
function verifySignature(opts) {
  const { signature, data, credentialPublicKey, x509Certificate, hashAlgorithm } = opts;
  if (!x509Certificate && !credentialPublicKey) {
    throw new Error('Must declare either "leafCert" or "credentialPublicKey"');
  }
  if (x509Certificate && credentialPublicKey) {
    throw new Error('Must not declare both "leafCert" and "credentialPublicKey"');
  }
  let cosePublicKey = new Map;
  if (credentialPublicKey) {
    cosePublicKey = decodeCredentialPublicKey(credentialPublicKey);
  } else if (x509Certificate) {
    cosePublicKey = convertX509PublicKeyToCOSE(x509Certificate);
  }
  return _verifySignatureInternals.stubThis(exports_isoCrypto.verify({
    cosePublicKey,
    signature,
    data,
    shaHashOverride: hashAlgorithm
  }));
}
var _verifySignatureInternals = {
  stubThis: (value) => value
};
// node_modules/@simplewebauthn/server/esm/metadata/parseJWT.js
function parseJWT(jwt) {
  const parts = jwt.split(".");
  return [
    JSON.parse(exports_isoBase64URL.toUTF8String(parts[0])),
    JSON.parse(exports_isoBase64URL.toUTF8String(parts[1])),
    parts[2]
  ];
}

// node_modules/@simplewebauthn/server/esm/metadata/verifyJWT.js
function verifyJWT(jwt, leafCert) {
  const [header, payload, signature] = jwt.split(".");
  const certCOSE = convertX509PublicKeyToCOSE(leafCert);
  const data = exports_isoUint8Array.fromUTF8String(`${header}.${payload}`);
  const signatureBytes = exports_isoBase64URL.toBuffer(signature);
  if (isCOSEPublicKeyEC2(certCOSE)) {
    return verifyEC2({
      data,
      signature: signatureBytes,
      cosePublicKey: certCOSE,
      shaHashOverride: COSEALG.ES256
    });
  } else if (isCOSEPublicKeyRSA(certCOSE)) {
    return verifyRSA({
      data,
      signature: signatureBytes,
      cosePublicKey: certCOSE
    });
  }
  const kty = certCOSE.get(COSEKEYS.kty);
  throw new Error(`JWT verification with public key of kty ${kty} is not supported by this method`);
}

// node_modules/@simplewebauthn/server/esm/helpers/convertPEMToBytes.js
function convertPEMToBytes(pem) {
  const certBase64 = pem.replace("-----BEGIN CERTIFICATE-----", "").replace("-----END CERTIFICATE-----", "").replace(/[\n ]/g, "");
  return exports_isoBase64URL.toBuffer(certBase64, "base64");
}

// node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/android-safetynet.js
var GlobalSign_Root_CA = `-----BEGIN CERTIFICATE-----
MIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkG
A1UEBhMCQkUxGTAXBgNVBAoTEEdsb2JhbFNpZ24gbnYtc2ExEDAOBgNVBAsTB1Jv
b3QgQ0ExGzAZBgNVBAMTEkdsb2JhbFNpZ24gUm9vdCBDQTAeFw05ODA5MDExMjAw
MDBaFw0yODAxMjgxMjAwMDBaMFcxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9i
YWxTaWduIG52LXNhMRAwDgYDVQQLEwdSb290IENBMRswGQYDVQQDExJHbG9iYWxT
aWduIFJvb3QgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDaDuaZ
jc6j40+Kfvvxi4Mla+pIH/EqsLmVEQS98GPR4mdmzxzdzxtIK+6NiY6arymAZavp
xy0Sy6scTHAHoT0KMM0VjU/43dSMUBUc71DuxC73/OlS8pF94G3VNTCOXkNz8kHp
1Wrjsok6Vjk4bwY8iGlbKk3Fp1S4bInMm/k8yuX9ifUSPJJ4ltbcdG6TRGHRjcdG
snUOhugZitVtbNV4FpWi6cgKOOvyJBNPc1STE4U6G7weNLWLBYy5d4ux2x8gkasJ
U26Qzns3dLlwR5EiUWMWea6xrkEmCMgZK9FGqkjWZCrXgzT/LCrBbBlDSgeF59N8
9iFo7+ryUp9/k5DPAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8E
BTADAQH/MB0GA1UdDgQWBBRge2YaRQ2XyolQL30EzTSo//z9SzANBgkqhkiG9w0B
AQUFAAOCAQEA1nPnfE920I2/7LqivjTFKDK1fPxsnCwrvQmeU79rXqoRSLblCKOz
yj1hTdNGCbM+w6DjY1Ub8rrvrTnhQ7k4o+YviiY776BQVvnGCv04zcQLcFGUl5gE
38NflNUVyRRBnMRddWQVDf9VMOyGj/8N7yy5Y0b2qvzfvGn9LhJIZJrglfCm7ymP
AbEVtQwdpf5pLGkkeB6zpxxxYu7KyJesF12KwvhHhm4qxFYxldBniYUr+WymXUad
DKqC5JlR3XC321Y9YeRq4VzW9v493kHMB65jUr9TU/Qr6cf9tveCX4XSQRjbgbME
HMUfpIBvFSDJ3gyICh3WZlXi/EjJKSZp4A==
-----END CERTIFICATE-----
`;

// node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/android-key.js
var Google_Hardware_Attestation_Root_1 = `-----BEGIN CERTIFICATE-----
MIIFYDCCA0igAwIBAgIJAOj6GWMU0voYMA0GCSqGSIb3DQEBCwUAMBsxGTAXBgNV
BAUTEGY5MjAwOWU4NTNiNmIwNDUwHhcNMTYwNTI2MTYyODUyWhcNMjYwNTI0MTYy
ODUyWjAbMRkwFwYDVQQFExBmOTIwMDllODUzYjZiMDQ1MIICIjANBgkqhkiG9w0B
AQEFAAOCAg8AMIICCgKCAgEAr7bHgiuxpwHsK7Qui8xUFmOr75gvMsd/dTEDDJdS
Sxtf6An7xyqpRR90PL2abxM1dEqlXnf2tqw1Ne4Xwl5jlRfdnJLmN0pTy/4lj4/7
tv0Sk3iiKkypnEUtR6WfMgH0QZfKHM1+di+y9TFRtv6y//0rb+T+W8a9nsNL/ggj
nar86461qO0rOs2cXjp3kOG1FEJ5MVmFmBGtnrKpa73XpXyTqRxB/M0n1n/W9nGq
C4FSYa04T6N5RIZGBN2z2MT5IKGbFlbC8UrW0DxW7AYImQQcHtGl/m00QLVWutHQ
oVJYnFPlXTcHYvASLu+RhhsbDmxMgJJ0mcDpvsC4PjvB+TxywElgS70vE0XmLD+O
JtvsBslHZvPBKCOdT0MS+tgSOIfga+z1Z1g7+DVagf7quvmag8jfPioyKvxnK/Eg
sTUVi2ghzq8wm27ud/mIM7AY2qEORR8Go3TVB4HzWQgpZrt3i5MIlCaY504LzSRi
igHCzAPlHws+W0rB5N+er5/2pJKnfBSDiCiFAVtCLOZ7gLiMm0jhO2B6tUXHI/+M
RPjy02i59lINMRRev56GKtcd9qO/0kUJWdZTdA2XoS82ixPvZtXQpUpuL12ab+9E
aDK8Z4RHJYYfCT3Q5vNAXaiWQ+8PTWm2QgBR/bkwSWc+NpUFgNPN9PvQi8WEg5Um
AGMCAwEAAaOBpjCBozAdBgNVHQ4EFgQUNmHhAHyIBQlRi0RsR/8aTMnqTxIwHwYD
VR0jBBgwFoAUNmHhAHyIBQlRi0RsR/8aTMnqTxIwDwYDVR0TAQH/BAUwAwEB/zAO
BgNVHQ8BAf8EBAMCAYYwQAYDVR0fBDkwNzA1oDOgMYYvaHR0cHM6Ly9hbmRyb2lk
Lmdvb2dsZWFwaXMuY29tL2F0dGVzdGF0aW9uL2NybC8wDQYJKoZIhvcNAQELBQAD
ggIBACDIw41L3KlXG0aMiS//cqrG+EShHUGo8HNsw30W1kJtjn6UBwRM6jnmiwfB
Pb8VA91chb2vssAtX2zbTvqBJ9+LBPGCdw/E53Rbf86qhxKaiAHOjpvAy5Y3m00m
qC0w/Zwvju1twb4vhLaJ5NkUJYsUS7rmJKHHBnETLi8GFqiEsqTWpG/6ibYCv7rY
DBJDcR9W62BW9jfIoBQcxUCUJouMPH25lLNcDc1ssqvC2v7iUgI9LeoM1sNovqPm
QUiG9rHli1vXxzCyaMTjwftkJLkf6724DFhuKug2jITV0QkXvaJWF4nUaHOTNA4u
JU9WDvZLI1j83A+/xnAJUucIv/zGJ1AMH2boHqF8CY16LpsYgBt6tKxxWH00XcyD
CdW2KlBCeqbQPcsFmWyWugxdcekhYsAWyoSf818NUsZdBWBaR/OukXrNLfkQ79Iy
ZohZbvabO/X+MVT3rriAoKc8oE2Uws6DF+60PV7/WIPjNvXySdqspImSN78mflxD
qwLqRBYkA3I75qppLGG9rp7UCdRjxMl8ZDBld+7yvHVgt1cVzJx9xnyGCC23Uaic
MDSXYrB4I4WHXPGjxhZuCuPBLTdOLU8YRvMYdEvYebWHMpvwGCF6bAx3JBpIeOQ1
wDB5y0USicV3YgYGmi+NZfhA4URSh77Yd6uuJOJENRaNVTzk
-----END CERTIFICATE-----
`;
var Google_Hardware_Attestation_Root_2 = `-----BEGIN CERTIFICATE-----
MIIFHDCCAwSgAwIBAgIJANUP8luj8tazMA0GCSqGSIb3DQEBCwUAMBsxGTAXBgNV
BAUTEGY5MjAwOWU4NTNiNmIwNDUwHhcNMTkxMTIyMjAzNzU4WhcNMzQxMTE4MjAz
NzU4WjAbMRkwFwYDVQQFExBmOTIwMDllODUzYjZiMDQ1MIICIjANBgkqhkiG9w0B
AQEFAAOCAg8AMIICCgKCAgEAr7bHgiuxpwHsK7Qui8xUFmOr75gvMsd/dTEDDJdS
Sxtf6An7xyqpRR90PL2abxM1dEqlXnf2tqw1Ne4Xwl5jlRfdnJLmN0pTy/4lj4/7
tv0Sk3iiKkypnEUtR6WfMgH0QZfKHM1+di+y9TFRtv6y//0rb+T+W8a9nsNL/ggj
nar86461qO0rOs2cXjp3kOG1FEJ5MVmFmBGtnrKpa73XpXyTqRxB/M0n1n/W9nGq
C4FSYa04T6N5RIZGBN2z2MT5IKGbFlbC8UrW0DxW7AYImQQcHtGl/m00QLVWutHQ
oVJYnFPlXTcHYvASLu+RhhsbDmxMgJJ0mcDpvsC4PjvB+TxywElgS70vE0XmLD+O
JtvsBslHZvPBKCOdT0MS+tgSOIfga+z1Z1g7+DVagf7quvmag8jfPioyKvxnK/Eg
sTUVi2ghzq8wm27ud/mIM7AY2qEORR8Go3TVB4HzWQgpZrt3i5MIlCaY504LzSRi
igHCzAPlHws+W0rB5N+er5/2pJKnfBSDiCiFAVtCLOZ7gLiMm0jhO2B6tUXHI/+M
RPjy02i59lINMRRev56GKtcd9qO/0kUJWdZTdA2XoS82ixPvZtXQpUpuL12ab+9E
aDK8Z4RHJYYfCT3Q5vNAXaiWQ+8PTWm2QgBR/bkwSWc+NpUFgNPN9PvQi8WEg5Um
AGMCAwEAAaNjMGEwHQYDVR0OBBYEFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMB8GA1Ud
IwQYMBaAFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMA8GA1UdEwEB/wQFMAMBAf8wDgYD
VR0PAQH/BAQDAgIEMA0GCSqGSIb3DQEBCwUAA4ICAQBOMaBc8oumXb2voc7XCWnu
XKhBBK3e2KMGz39t7lA3XXRe2ZLLAkLM5y3J7tURkf5a1SutfdOyXAmeE6SRo83U
h6WszodmMkxK5GM4JGrnt4pBisu5igXEydaW7qq2CdC6DOGjG+mEkN8/TA6p3cno
L/sPyz6evdjLlSeJ8rFBH6xWyIZCbrcpYEJzXaUOEaxxXxgYz5/cTiVKN2M1G2ok
QBUIYSY6bjEL4aUN5cfo7ogP3UvliEo3Eo0YgwuzR2v0KR6C1cZqZJSTnghIC/vA
D32KdNQ+c3N+vl2OTsUVMC1GiWkngNx1OO1+kXW+YTnnTUOtOIswUP/Vqd5SYgAI
mMAfY8U9/iIgkQj6T2W6FsScy94IN9fFhE1UtzmLoBIuUFsVXJMTz+Jucth+IqoW
Fua9v1R93/k98p41pjtFX+H8DslVgfP097vju4KDlqN64xV1grw3ZLl4CiOe/A91
oeLm2UHOq6wn3esB4r2EIQKb6jTVGu5sYCcdWpXr0AUVqcABPdgL+H7qJguBw09o
jm6xNIrw2OocrDKsudk/okr/AwqEyPKw9WnMlQgLIKw1rODG2NvU9oR3GVGdMkUB
ZutL8VuFkERQGt6vQ2OCw0sV47VMkuYbacK/xyZFiRcrPJPb41zgbQj9XAEyLKCH
ex0SdDrx+tWUDqG8At2JHA==
-----END CERTIFICATE-----
`;
var Google_Hardware_Attestation_Root_3 = `
-----BEGIN CERTIFICATE-----
MIIFHDCCAwSgAwIBAgIJAMNrfES5rhgxMA0GCSqGSIb3DQEBCwUAMBsxGTAXBgNV
BAUTEGY5MjAwOWU4NTNiNmIwNDUwHhcNMjExMTE3MjMxMDQyWhcNMzYxMTEzMjMx
MDQyWjAbMRkwFwYDVQQFExBmOTIwMDllODUzYjZiMDQ1MIICIjANBgkqhkiG9w0B
AQEFAAOCAg8AMIICCgKCAgEAr7bHgiuxpwHsK7Qui8xUFmOr75gvMsd/dTEDDJdS
Sxtf6An7xyqpRR90PL2abxM1dEqlXnf2tqw1Ne4Xwl5jlRfdnJLmN0pTy/4lj4/7
tv0Sk3iiKkypnEUtR6WfMgH0QZfKHM1+di+y9TFRtv6y//0rb+T+W8a9nsNL/ggj
nar86461qO0rOs2cXjp3kOG1FEJ5MVmFmBGtnrKpa73XpXyTqRxB/M0n1n/W9nGq
C4FSYa04T6N5RIZGBN2z2MT5IKGbFlbC8UrW0DxW7AYImQQcHtGl/m00QLVWutHQ
oVJYnFPlXTcHYvASLu+RhhsbDmxMgJJ0mcDpvsC4PjvB+TxywElgS70vE0XmLD+O
JtvsBslHZvPBKCOdT0MS+tgSOIfga+z1Z1g7+DVagf7quvmag8jfPioyKvxnK/Eg
sTUVi2ghzq8wm27ud/mIM7AY2qEORR8Go3TVB4HzWQgpZrt3i5MIlCaY504LzSRi
igHCzAPlHws+W0rB5N+er5/2pJKnfBSDiCiFAVtCLOZ7gLiMm0jhO2B6tUXHI/+M
RPjy02i59lINMRRev56GKtcd9qO/0kUJWdZTdA2XoS82ixPvZtXQpUpuL12ab+9E
aDK8Z4RHJYYfCT3Q5vNAXaiWQ+8PTWm2QgBR/bkwSWc+NpUFgNPN9PvQi8WEg5Um
AGMCAwEAAaNjMGEwHQYDVR0OBBYEFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMB8GA1Ud
IwQYMBaAFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMA8GA1UdEwEB/wQFMAMBAf8wDgYD
VR0PAQH/BAQDAgIEMA0GCSqGSIb3DQEBCwUAA4ICAQBTNNZe5cuf8oiq+jV0itTG
zWVhSTjOBEk2FQvh11J3o3lna0o7rd8RFHnN00q4hi6TapFhh4qaw/iG6Xg+xOan
63niLWIC5GOPFgPeYXM9+nBb3zZzC8ABypYuCusWCmt6Tn3+Pjbz3MTVhRGXuT/T
QH4KGFY4PhvzAyXwdjTOCXID+aHud4RLcSySr0Fq/L+R8TWalvM1wJJPhyRjqRCJ
erGtfBagiALzvhnmY7U1qFcS0NCnKjoO7oFedKdWlZz0YAfu3aGCJd4KHT0MsGiL
Zez9WP81xYSrKMNEsDK+zK5fVzw6jA7cxmpXcARTnmAuGUeI7VVDhDzKeVOctf3a
0qQLwC+d0+xrETZ4r2fRGNw2YEs2W8Qj6oDcfPvq9JySe7pJ6wcHnl5EZ0lwc4xH
7Y4Dx9RA1JlfooLMw3tOdJZH0enxPXaydfAD3YifeZpFaUzicHeLzVJLt9dvGB0b
HQLE4+EqKFgOZv2EoP686DQqbVS1u+9k0p2xbMA105TBIk7npraa8VM0fnrRKi7w
lZKwdH+aNAyhbXRW9xsnODJ+g8eF452zvbiKKngEKirK5LGieoXBX7tZ9D1GNBH2
Ob3bKOwwIWdEFle/YF/h6zWgdeoaNGDqVBrLr2+0DtWoiB1aDEjLWl9FmyIUyUm7
mD/vFDkzF+wm7cyWpQpCVQ==
-----END CERTIFICATE-----
`;
var Google_Hardware_Attestation_Root_4 = `
-----BEGIN CERTIFICATE-----
MIIFHDCCAwSgAwIBAgIJAPHBcqaZ6vUdMA0GCSqGSIb3DQEBCwUAMBsxGTAXBgNV
BAUTEGY5MjAwOWU4NTNiNmIwNDUwHhcNMjIwMzIwMTgwNzQ4WhcNNDIwMzE1MTgw
NzQ4WjAbMRkwFwYDVQQFExBmOTIwMDllODUzYjZiMDQ1MIICIjANBgkqhkiG9w0B
AQEFAAOCAg8AMIICCgKCAgEAr7bHgiuxpwHsK7Qui8xUFmOr75gvMsd/dTEDDJdS
Sxtf6An7xyqpRR90PL2abxM1dEqlXnf2tqw1Ne4Xwl5jlRfdnJLmN0pTy/4lj4/7
tv0Sk3iiKkypnEUtR6WfMgH0QZfKHM1+di+y9TFRtv6y//0rb+T+W8a9nsNL/ggj
nar86461qO0rOs2cXjp3kOG1FEJ5MVmFmBGtnrKpa73XpXyTqRxB/M0n1n/W9nGq
C4FSYa04T6N5RIZGBN2z2MT5IKGbFlbC8UrW0DxW7AYImQQcHtGl/m00QLVWutHQ
oVJYnFPlXTcHYvASLu+RhhsbDmxMgJJ0mcDpvsC4PjvB+TxywElgS70vE0XmLD+O
JtvsBslHZvPBKCOdT0MS+tgSOIfga+z1Z1g7+DVagf7quvmag8jfPioyKvxnK/Eg
sTUVi2ghzq8wm27ud/mIM7AY2qEORR8Go3TVB4HzWQgpZrt3i5MIlCaY504LzSRi
igHCzAPlHws+W0rB5N+er5/2pJKnfBSDiCiFAVtCLOZ7gLiMm0jhO2B6tUXHI/+M
RPjy02i59lINMRRev56GKtcd9qO/0kUJWdZTdA2XoS82ixPvZtXQpUpuL12ab+9E
aDK8Z4RHJYYfCT3Q5vNAXaiWQ+8PTWm2QgBR/bkwSWc+NpUFgNPN9PvQi8WEg5Um
AGMCAwEAAaNjMGEwHQYDVR0OBBYEFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMB8GA1Ud
IwQYMBaAFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMA8GA1UdEwEB/wQFMAMBAf8wDgYD
VR0PAQH/BAQDAgIEMA0GCSqGSIb3DQEBCwUAA4ICAQB8cMqTllHc8U+qCrOlg3H7
174lmaCsbo/bJ0C17JEgMLb4kvrqsXZs01U3mB/qABg/1t5Pd5AORHARs1hhqGIC
W/nKMav574f9rZN4PC2ZlufGXb7sIdJpGiO9ctRhiLuYuly10JccUZGEHpHSYM2G
tkgYbZba6lsCPYAAP83cyDV+1aOkTf1RCp/lM0PKvmxYN10RYsK631jrleGdcdkx
oSK//mSQbgcWnmAEZrzHoF1/0gso1HZgIn0YLzVhLSA/iXCX4QT2h3J5z3znluKG
1nv8NQdxei2DIIhASWfu804CA96cQKTTlaae2fweqXjdN1/v2nqOhngNyz1361mF
mr4XmaKH/ItTwOe72NI9ZcwS1lVaCvsIkTDCEXdm9rCNPAY10iTunIHFXRh+7KPz
lHGewCq/8TOohBRn0/NNfh7uRslOSZ/xKbN9tMBtw37Z8d2vvnXq/YWdsm1+JLVw
n6yYD/yacNJBlwpddla8eaVMjsF6nBnIgQOf9zKSe06nSTqvgwUHosgOECZJZ1Eu
zbH4yswbt02tKtKEFhx+v+OTge/06V+jGsqTWLsfrOCNLuA8H++z+pUENmpqnnHo
vaI47gC+TNpkgYGkkBT6B/m/U01BuOBBTzhIlMEZq9qkDWuM2cA5kW5V3FJUcfHn
w1IdYIg2Wxg7yHcQZemFQg==
-----END CERTIFICATE-----
`;

// node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/apple.js
var Apple_WebAuthn_Root_CA = `-----BEGIN CERTIFICATE-----
MIICEjCCAZmgAwIBAgIQaB0BbHo84wIlpQGUKEdXcTAKBggqhkjOPQQDAzBLMR8w
HQYDVQQDDBZBcHBsZSBXZWJBdXRobiBSb290IENBMRMwEQYDVQQKDApBcHBsZSBJ
bmMuMRMwEQYDVQQIDApDYWxpZm9ybmlhMB4XDTIwMDMxODE4MjEzMloXDTQ1MDMx
NTAwMDAwMFowSzEfMB0GA1UEAwwWQXBwbGUgV2ViQXV0aG4gUm9vdCBDQTETMBEG
A1UECgwKQXBwbGUgSW5jLjETMBEGA1UECAwKQ2FsaWZvcm5pYTB2MBAGByqGSM49
AgEGBSuBBAAiA2IABCJCQ2pTVhzjl4Wo6IhHtMSAzO2cv+H9DQKev3//fG59G11k
xu9eI0/7o6V5uShBpe1u6l6mS19S1FEh6yGljnZAJ+2GNP1mi/YK2kSXIuTHjxA/
pcoRf7XkOtO4o1qlcaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUJtdk
2cV4wlpn0afeaxLQG2PxxtcwDgYDVR0PAQH/BAQDAgEGMAoGCCqGSM49BAMDA2cA
MGQCMFrZ+9DsJ1PW9hfNdBywZDsWDbWFp28it1d/5w2RPkRX3Bbn/UbDTNLx7Jr3
jAGGiQIwHFj+dJZYUJR786osByBelJYsVZd2GbHQu209b5RCmGQ21gpSAk9QZW4B
1bWeT0vT
-----END CERTIFICATE-----
`;

// node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/mds.js
var GlobalSign_Root_CA_R3 = `-----BEGIN CERTIFICATE-----
MIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4G
A1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjMxEzARBgNVBAoTCkdsb2JhbFNp
Z24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDkwMzE4MTAwMDAwWhcNMjkwMzE4
MTAwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEG
A1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjCCASIwDQYJKoZI
hvcNAQEBBQADggEPADCCAQoCggEBAMwldpB5BngiFvXAg7aEyiie/QV2EcWtiHL8
RgJDx7KKnQRfJMsuS+FggkbhUqsMgUdwbN1k0ev1LKMPgj0MK66X17YUhhB5uzsT
gHeMCOFJ0mpiLx9e+pZo34knlTifBtc+ycsmWQ1z3rDI6SYOgxXG71uL0gRgykmm
KPZpO/bLyCiR5Z2KYVc3rHQU3HTgOu5yLy6c+9C7v/U9AOEGM+iCK65TpjoWc4zd
QQ4gOsC0p6Hpsk+QLjJg6VfLuQSSaGjlOCZgdbKfd/+RFO+uIEn8rUAVSNECMWEZ
XriX7613t2Saer9fwRPvm2L7DWzgVGkWqQPabumDk3F2xmmFghcCAwEAAaNCMEAw
DgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFI/wS3+o
LkUkrk1Q+mOai97i3Ru8MA0GCSqGSIb3DQEBCwUAA4IBAQBLQNvAUKr+yAzv95ZU
RUm7lgAJQayzE4aGKAczymvmdLm6AC2upArT9fHxD4q/c2dKg8dEe3jgr25sbwMp
jjM5RcOO5LlXbKr8EpbsU8Yt5CRsuZRj+9xTaGdWPoO4zzUhw8lo/s7awlOqzJCK
6fBdRoyV3XpYKBovHd7NADdBj+1EbddTKJd+82cEHhXXipa0095MJ6RMG3NzdvQX
mcIfeg7jLQitChws/zyrVQ4PkX4268NXSb7hLi18YIvDQVETI53O9zJrlAGomecs
Mx86OyXShkDOOyyGeMlhLxS67ttVb9+E7gUJTb0o2HLO02JQZR7rkpeDMdmztcpH
WD9f
-----END CERTIFICATE-----
 `;

// node_modules/@simplewebauthn/server/esm/services/settingsService.js
class BaseSettingsService {
  constructor() {
    Object.defineProperty(this, "pemCertificates", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: undefined
    });
    this.pemCertificates = new Map;
  }
  setRootCertificates(opts) {
    const { identifier, certificates } = opts;
    const newCertificates = [];
    for (const cert of certificates) {
      if (cert instanceof Uint8Array) {
        newCertificates.push(convertCertBufferToPEM(cert));
      } else {
        newCertificates.push(cert);
      }
    }
    this.pemCertificates.set(identifier, newCertificates);
  }
  getRootCertificates(opts) {
    const { identifier } = opts;
    return this.pemCertificates.get(identifier) ?? [];
  }
}
var SettingsService = new BaseSettingsService;
SettingsService.setRootCertificates({
  identifier: "android-key",
  certificates: [
    Google_Hardware_Attestation_Root_1,
    Google_Hardware_Attestation_Root_2,
    Google_Hardware_Attestation_Root_3,
    Google_Hardware_Attestation_Root_4
  ]
});
SettingsService.setRootCertificates({
  identifier: "android-safetynet",
  certificates: [GlobalSign_Root_CA]
});
SettingsService.setRootCertificates({
  identifier: "apple",
  certificates: [Apple_WebAuthn_Root_CA]
});
SettingsService.setRootCertificates({
  identifier: "mds",
  certificates: [GlobalSign_Root_CA_R3]
});

// node_modules/@simplewebauthn/server/esm/metadata/verifyMDSBlob.js
async function verifyMDSBlob(blob) {
  const parsedJWT = parseJWT(blob);
  const header = parsedJWT[0];
  const payload = parsedJWT[1];
  const headerCertsPEM = header.x5c.map(convertCertBufferToPEM);
  try {
    const rootCerts = SettingsService.getRootCertificates({
      identifier: "mds"
    });
    await validateCertificatePath(headerCertsPEM, rootCerts);
  } catch (error) {
    const _error = error;
    throw new Error("BLOB certificate path could not be validated", { cause: _error });
  }
  const leafCert = headerCertsPEM[0];
  const verified = await verifyJWT(blob, convertPEMToBytes(leafCert));
  if (!verified) {
    throw new Error("BLOB signature could not be verified");
  }
  const statements = [];
  for (const entry of payload.entries) {
    if (entry.aaguid && entry.metadataStatement) {
      statements.push(entry.metadataStatement);
    }
  }
  const [year, month, day] = payload.nextUpdate.split("-");
  const parsedNextUpdate = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
  return {
    statements,
    parsedNextUpdate,
    payload
  };
}
// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verifyOKP.js
async function verifyOKP(opts) {
  const { cosePublicKey, signature, data } = opts;
  const WebCrypto = await getWebCrypto();
  const alg = cosePublicKey.get(COSEKEYS.alg);
  const crv = cosePublicKey.get(COSEKEYS.crv);
  const x = cosePublicKey.get(COSEKEYS.x);
  if (!alg) {
    throw new Error("Public key was missing alg (OKP)");
  }
  if (!isCOSEAlg(alg)) {
    throw new Error(`Public key had invalid alg ${alg} (OKP)`);
  }
  if (!crv) {
    throw new Error("Public key was missing crv (OKP)");
  }
  if (!x) {
    throw new Error("Public key was missing x (OKP)");
  }
  let _crv;
  if (crv === COSECRV.ED25519) {
    _crv = "Ed25519";
  } else {
    throw new Error(`Unexpected COSE crv value of ${crv} (OKP)`);
  }
  const keyData = {
    kty: "OKP",
    crv: _crv,
    alg: "EdDSA",
    x: exports_isoBase64URL.fromBuffer(x),
    ext: false
  };
  const keyAlgorithm = {
    name: _crv,
    namedCurve: _crv
  };
  const key = await importKey({
    keyData,
    algorithm: keyAlgorithm
  });
  const verifyAlgorithm = {
    name: _crv
  };
  return WebCrypto.subtle.verify(verifyAlgorithm, key, signature, data);
}

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/unwrapEC2Signature.js
function unwrapEC2Signature(signature, crv) {
  const parsedSignature = AsnParser.parse(signature, ECDSASigValue);
  const rBytes = new Uint8Array(parsedSignature.r);
  const sBytes = new Uint8Array(parsedSignature.s);
  const componentLength = getSignatureComponentLength(crv);
  const rNormalizedBytes = toNormalizedBytes(rBytes, componentLength);
  const sNormalizedBytes = toNormalizedBytes(sBytes, componentLength);
  const finalSignature = exports_isoUint8Array.concat([
    rNormalizedBytes,
    sNormalizedBytes
  ]);
  return finalSignature;
}
function getSignatureComponentLength(crv) {
  switch (crv) {
    case COSECRV.P256:
      return 32;
    case COSECRV.P384:
      return 48;
    case COSECRV.P521:
      return 66;
    default:
      throw new Error(`Unexpected COSE crv value of ${crv} (EC2)`);
  }
}
function toNormalizedBytes(bytes, componentLength) {
  let normalizedBytes;
  if (bytes.length < componentLength) {
    normalizedBytes = new Uint8Array(componentLength);
    normalizedBytes.set(bytes, componentLength - bytes.length);
  } else if (bytes.length === componentLength) {
    normalizedBytes = bytes;
  } else if (bytes.length === componentLength + 1 && bytes[0] === 0 && (bytes[1] & 128) === 128) {
    normalizedBytes = bytes.subarray(1);
  } else {
    throw new Error(`Invalid signature component length ${bytes.length}, expected ${componentLength}`);
  }
  return normalizedBytes;
}

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verify.js
function verify(opts) {
  const { cosePublicKey, signature, data, shaHashOverride } = opts;
  if (isCOSEPublicKeyEC2(cosePublicKey)) {
    const crv = cosePublicKey.get(COSEKEYS.crv);
    if (!isCOSECrv(crv)) {
      throw new Error(`unknown COSE curve ${crv}`);
    }
    const unwrappedSignature = unwrapEC2Signature(signature, crv);
    return verifyEC2({
      cosePublicKey,
      signature: unwrappedSignature,
      data,
      shaHashOverride
    });
  } else if (isCOSEPublicKeyRSA(cosePublicKey)) {
    return verifyRSA({ cosePublicKey, signature, data, shaHashOverride });
  } else if (isCOSEPublicKeyOKP(cosePublicKey)) {
    return verifyOKP({ cosePublicKey, signature, data });
  }
  const kty = cosePublicKey.get(COSEKEYS.kty);
  throw new Error(`Signature verification with public key of kty ${kty} is not supported by this method`);
}
// node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js
var exports_isoUint8Array = {};
__export(exports_isoUint8Array, {
  toUTF8String: () => toUTF8String2,
  toHex: () => toHex,
  toDataView: () => toDataView,
  fromUTF8String: () => fromUTF8String2,
  fromHex: () => fromHex,
  fromASCIIString: () => fromASCIIString,
  concat: () => concat3,
  areEqual: () => areEqual
});
function areEqual(array1, array2) {
  if (array1.length != array2.length) {
    return false;
  }
  return array1.every((val, i) => val === array2[i]);
}
function toHex(array) {
  const hexParts = Array.from(array, (i) => i.toString(16).padStart(2, "0"));
  return hexParts.join("");
}
function fromHex(hex2) {
  if (!hex2) {
    return Uint8Array.from([]);
  }
  const isValid = hex2.length !== 0 && hex2.length % 2 === 0 && !/[^a-fA-F0-9]/u.test(hex2);
  if (!isValid) {
    throw new Error("Invalid hex string");
  }
  const byteStrings = hex2.match(/.{1,2}/g) ?? [];
  return Uint8Array.from(byteStrings.map((byte) => parseInt(byte, 16)));
}
function concat3(arrays) {
  let pointer = 0;
  const totalLength = arrays.reduce((prev, curr) => prev + curr.length, 0);
  const toReturn = new Uint8Array(totalLength);
  arrays.forEach((arr) => {
    toReturn.set(arr, pointer);
    pointer += arr.length;
  });
  return toReturn;
}
function toUTF8String2(array) {
  const decoder = new globalThis.TextDecoder("utf-8");
  return decoder.decode(array);
}
function fromUTF8String2(utf8String) {
  const encoder = new globalThis.TextEncoder;
  return encoder.encode(utf8String);
}
function fromASCIIString(value) {
  return Uint8Array.from(value.split("").map((x) => x.charCodeAt(0)));
}
function toDataView(array) {
  return new DataView(array.buffer, array.byteOffset, array.length);
}
// node_modules/@simplewebauthn/server/esm/helpers/generateChallenge.js
async function generateChallenge2() {
  const challenge = new Uint8Array(32);
  await exports_isoCrypto.getRandomValues(challenge);
  return _generateChallengeInternals.stubThis(challenge);
}
var _generateChallengeInternals = {
  stubThis: (value) => value
};

// node_modules/@simplewebauthn/server/esm/registration/generateRegistrationOptions.js
var supportedCOSEAlgorithmIdentifiers = [
  -8,
  -7,
  -36,
  -37,
  -38,
  -39,
  -257,
  -258,
  -259,
  -65535
];
var defaultAuthenticatorSelection = {
  residentKey: "preferred",
  userVerification: "preferred"
};
var defaultSupportedAlgorithmIDs = [-8, -7, -257];
async function generateRegistrationOptions(options) {
  const { rpName, rpID, userName, userID, challenge = await generateChallenge2(), userDisplayName = "", timeout = 60000, attestationType = "none", excludeCredentials = [], authenticatorSelection = defaultAuthenticatorSelection, extensions: extensions2, supportedAlgorithmIDs = defaultSupportedAlgorithmIDs, preferredAuthenticatorType } = options;
  const pubKeyCredParams = supportedAlgorithmIDs.map((id2) => ({
    alg: id2,
    type: "public-key"
  }));
  if (authenticatorSelection.residentKey === undefined) {
    if (authenticatorSelection.requireResidentKey) {
      authenticatorSelection.residentKey = "required";
    }
  } else {
    authenticatorSelection.requireResidentKey = authenticatorSelection.residentKey === "required";
  }
  let _challenge = challenge;
  if (typeof _challenge === "string") {
    _challenge = exports_isoUint8Array.fromUTF8String(_challenge);
  }
  if (typeof userID === "string") {
    throw new Error(`String values for \`userID\` are no longer supported. See https://simplewebauthn.dev/docs/advanced/server/custom-user-ids`);
  }
  let _userID = userID;
  if (!_userID) {
    _userID = await generateUserID();
  }
  const hints = [];
  if (preferredAuthenticatorType) {
    if (preferredAuthenticatorType === "securityKey") {
      hints.push("security-key");
      authenticatorSelection.authenticatorAttachment = "cross-platform";
    } else if (preferredAuthenticatorType === "localDevice") {
      hints.push("client-device");
      authenticatorSelection.authenticatorAttachment = "platform";
    } else if (preferredAuthenticatorType === "remoteDevice") {
      hints.push("hybrid");
      authenticatorSelection.authenticatorAttachment = "cross-platform";
    }
  }
  return {
    challenge: exports_isoBase64URL.fromBuffer(_challenge),
    rp: {
      name: rpName,
      id: rpID
    },
    user: {
      id: exports_isoBase64URL.fromBuffer(_userID),
      name: userName,
      displayName: userDisplayName
    },
    pubKeyCredParams,
    timeout,
    attestation: attestationType,
    excludeCredentials: excludeCredentials.map((cred) => {
      if (!exports_isoBase64URL.isBase64URL(cred.id)) {
        throw new Error(`excludeCredential id "${cred.id}" is not a valid base64url string`);
      }
      return {
        ...cred,
        id: exports_isoBase64URL.trimPadding(cred.id),
        type: "public-key"
      };
    }),
    authenticatorSelection,
    extensions: {
      ...extensions2,
      credProps: true
    },
    hints
  };
}
// node_modules/@simplewebauthn/server/esm/helpers/parseBackupFlags.js
function parseBackupFlags({ be, bs }) {
  const credentialBackedUp = bs;
  let credentialDeviceType = "singleDevice";
  if (be) {
    credentialDeviceType = "multiDevice";
  }
  if (credentialDeviceType === "singleDevice" && credentialBackedUp) {
    throw new InvalidBackupFlags("Single-device credential indicated that it was backed up, which should be impossible.");
  }
  return { credentialDeviceType, credentialBackedUp };
}

class InvalidBackupFlags extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidBackupFlags";
  }
}

// node_modules/@simplewebauthn/server/esm/helpers/matchExpectedRPID.js
async function matchExpectedRPID(rpIDHash, expectedRPIDs) {
  try {
    const matchedRPID = await Promise.any(expectedRPIDs.map((expected) => {
      return new Promise((resolve2, reject) => {
        toHash(exports_isoUint8Array.fromASCIIString(expected)).then((expectedRPIDHash) => {
          if (exports_isoUint8Array.areEqual(rpIDHash, expectedRPIDHash)) {
            resolve2(expected);
          } else {
            reject();
          }
        });
      });
    }));
    return matchedRPID;
  } catch (err) {
    const _err = err;
    if (_err.name === "AggregateError") {
      throw new UnexpectedRPIDHash;
    }
    throw err;
  }
}

class UnexpectedRPIDHash extends Error {
  constructor() {
    const message = "Unexpected RP ID hash";
    super(message);
    this.name = "UnexpectedRPIDHash";
  }
}

// node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationFIDOU2F.js
async function verifyAttestationFIDOU2F(options) {
  const { attStmt, clientDataHash, rpIdHash, credentialID, credentialPublicKey, aaguid, rootCertificates } = options;
  const reservedByte = Uint8Array.from([0]);
  const publicKey = convertCOSEtoPKCS(credentialPublicKey);
  const signatureBase = exports_isoUint8Array.concat([
    reservedByte,
    rpIdHash,
    clientDataHash,
    credentialID,
    publicKey
  ]);
  const sig = attStmt.get("sig");
  const x5c = attStmt.get("x5c");
  if (!x5c) {
    throw new Error("No attestation certificate provided in attestation statement (FIDOU2F)");
  }
  if (!sig) {
    throw new Error("No attestation signature provided in attestation statement (FIDOU2F)");
  }
  const aaguidToHex = Number.parseInt(exports_isoUint8Array.toHex(aaguid), 16);
  if (aaguidToHex !== 0) {
    throw new Error(`AAGUID "${aaguidToHex}" was not expected value`);
  }
  try {
    await validateCertificatePath(x5c.map(convertCertBufferToPEM), rootCertificates);
  } catch (err) {
    const _err = err;
    throw new Error(`${_err.message} (FIDOU2F)`);
  }
  return verifySignature({
    signature: sig,
    data: signatureBase,
    x509Certificate: x5c[0],
    hashAlgorithm: COSEALG.ES256
  });
}

// node_modules/@simplewebauthn/server/esm/helpers/validateExtFIDOGenCEAAGUID.js
var id_fido_gen_ce_aaguid = "1.3.6.1.4.1.45724.1.1.4";
function validateExtFIDOGenCEAAGUID(certExtensions, aaguid) {
  if (!certExtensions) {
    return true;
  }
  const extFIDOGenCEAAGUID = certExtensions.find((ext) => ext.extnID === id_fido_gen_ce_aaguid);
  if (!extFIDOGenCEAAGUID) {
    return true;
  }
  const parsedExtFIDOGenCEAAGUID = AsnParser.parse(extFIDOGenCEAAGUID.extnValue, OctetString2);
  const extValue = new Uint8Array(parsedExtFIDOGenCEAAGUID.buffer);
  const aaguidAndExtAreEqual = exports_isoUint8Array.areEqual(aaguid, extValue);
  if (!aaguidAndExtAreEqual) {
    const _debugExtHex = exports_isoUint8Array.toHex(extValue);
    const _debugAAGUIDHex = exports_isoUint8Array.toHex(aaguid);
    throw new Error(`Certificate extension id-fido-gen-ce-aaguid (${id_fido_gen_ce_aaguid}) value of "${_debugExtHex}" was present but not equal to attestation statement AAGUID value of "${_debugAAGUIDHex}"`);
  }
  return true;
}

// node_modules/@simplewebauthn/server/esm/helpers/logging.js
function getLogger(_name) {
  return (_message, ..._rest) => {};
}

// node_modules/@simplewebauthn/server/esm/services/metadataService.js
var NonRefreshingMDS = {
  url: "",
  no: 0,
  nextUpdate: new Date(0)
};
var defaultURLMDS = "https://mds.fidoalliance.org/";
var SERVICE_STATE;
(function(SERVICE_STATE2) {
  SERVICE_STATE2[SERVICE_STATE2["DISABLED"] = 0] = "DISABLED";
  SERVICE_STATE2[SERVICE_STATE2["REFRESHING"] = 1] = "REFRESHING";
  SERVICE_STATE2[SERVICE_STATE2["READY"] = 2] = "READY";
})(SERVICE_STATE || (SERVICE_STATE = {}));
var log = getLogger("MetadataService");

class BaseMetadataService {
  constructor() {
    Object.defineProperty(this, "mdsCache", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "statementCache", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "state", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: SERVICE_STATE.DISABLED
    });
    Object.defineProperty(this, "verificationMode", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "strict"
    });
  }
  async initialize(opts = {}) {
    this.statementCache = {};
    const { mdsServers = [defaultURLMDS], statements, verificationMode } = opts;
    this.setState(SERVICE_STATE.REFRESHING);
    if (statements?.length) {
      let statementsAdded = 0;
      statements.forEach((statement) => {
        if (statement.aaguid) {
          this.statementCache[statement.aaguid] = {
            entry: {
              metadataStatement: statement,
              statusReports: [],
              timeOfLastStatusChange: "1970-01-01"
            },
            url: NonRefreshingMDS.url
          };
          statementsAdded += 1;
        }
      });
      log(`Cached ${statementsAdded} local statements`);
    }
    if (mdsServers?.length) {
      const currentCacheCount = Object.keys(this.statementCache).length;
      let numServers = mdsServers.length;
      for (const url of mdsServers) {
        try {
          const cachedMDS = {
            url,
            no: 0,
            nextUpdate: new Date(0)
          };
          const blob = await this.downloadBlob(cachedMDS);
          await this.verifyBlob(blob, cachedMDS);
        } catch (err) {
          log(`Could not download BLOB from ${url}:`, err);
          numServers -= 1;
        }
      }
      const newCacheCount = Object.keys(this.statementCache).length;
      const cacheDiff = newCacheCount - currentCacheCount;
      log(`Cached ${cacheDiff} statements from ${numServers} metadata server(s)`);
    }
    if (verificationMode) {
      this.verificationMode = verificationMode;
    }
    this.setState(SERVICE_STATE.READY);
  }
  async getStatement(aaguid) {
    if (this.state === SERVICE_STATE.DISABLED) {
      return;
    }
    if (!aaguid) {
      return;
    }
    if (aaguid instanceof Uint8Array) {
      aaguid = convertAAGUIDToString(aaguid);
    }
    await this.pauseUntilReady();
    const cachedStatement = this.statementCache[aaguid];
    if (!cachedStatement) {
      if (this.verificationMode === "strict") {
        throw new Error(`No metadata statement found for aaguid "${aaguid}"`);
      }
      return;
    }
    if (cachedStatement.url) {
      const mds = this.mdsCache[cachedStatement.url];
      const now2 = new Date;
      if (now2 > mds.nextUpdate) {
        try {
          this.setState(SERVICE_STATE.REFRESHING);
          const blob = await this.downloadBlob(mds);
          await this.verifyBlob(blob, mds);
        } finally {
          this.setState(SERVICE_STATE.READY);
        }
      }
    }
    const { entry } = cachedStatement;
    for (const report of entry.statusReports) {
      const { status } = report;
      if (status === "USER_VERIFICATION_BYPASS" || status === "ATTESTATION_KEY_COMPROMISE" || status === "USER_KEY_REMOTE_COMPROMISE" || status === "USER_KEY_PHYSICAL_COMPROMISE") {
        throw new Error(`Detected compromised aaguid "${aaguid}"`);
      }
    }
    return entry.metadataStatement;
  }
  async downloadBlob(cachedMDS) {
    const { url } = cachedMDS;
    const resp = await fetch(url);
    const data = await resp.text();
    return data;
  }
  async verifyBlob(blob, cachedMDS) {
    const { url, no } = cachedMDS;
    const { payload, parsedNextUpdate } = await verifyMDSBlob(blob);
    if (payload.no <= no) {
      throw new Error(`Latest BLOB no. ${payload.no} is not greater than previous no. ${no}`);
    }
    for (const entry of payload.entries) {
      if (entry.aaguid) {
        this.statementCache[entry.aaguid] = { entry, url };
      }
    }
    if (url) {
      this.mdsCache[url] = {
        ...cachedMDS,
        no: payload.no,
        nextUpdate: parsedNextUpdate
      };
    } else {
      if (parsedNextUpdate < new Date) {
        log(`\u26A0\uFE0F This MDS blob (serial: ${payload.no}) contains stale data as of ${parsedNextUpdate.toISOString()}. Please consider re-initializing MetadataService with a newer MDS blob.`);
      }
    }
  }
  pauseUntilReady() {
    if (this.state === SERVICE_STATE.READY) {
      return new Promise((resolve2) => {
        resolve2();
      });
    }
    const readyPromise = new Promise((resolve2, reject) => {
      const totalTimeoutMS = 70000;
      const intervalMS = 100;
      let iterations = totalTimeoutMS / intervalMS;
      const intervalID = globalThis.setInterval(() => {
        if (iterations < 1) {
          clearInterval(intervalID);
          reject(`State did not become ready in ${totalTimeoutMS / 1000} seconds`);
        } else if (this.state === SERVICE_STATE.READY) {
          clearInterval(intervalID);
          resolve2();
        }
        iterations -= 1;
      }, intervalMS);
    });
    return readyPromise;
  }
  setState(newState) {
    this.state = newState;
    if (newState === SERVICE_STATE.DISABLED) {
      log("MetadataService is DISABLED");
    } else if (newState === SERVICE_STATE.REFRESHING) {
      log("MetadataService is REFRESHING");
    } else if (newState === SERVICE_STATE.READY) {
      log("MetadataService is READY");
    }
  }
}
var MetadataService = new BaseMetadataService;

// node_modules/@simplewebauthn/server/esm/metadata/verifyAttestationWithMetadata.js
async function verifyAttestationWithMetadata({ statement, credentialPublicKey, x5c, attestationStatementAlg }) {
  const { authenticationAlgorithms, authenticatorGetInfo, attestationRootCertificates } = statement;
  const keypairCOSEAlgs = new Set;
  authenticationAlgorithms.forEach((algSign) => {
    const algSignCOSEINFO = algSignToCOSEInfoMap[algSign];
    if (algSignCOSEINFO) {
      keypairCOSEAlgs.add(algSignCOSEINFO);
    }
  });
  const decodedPublicKey = decodeCredentialPublicKey(credentialPublicKey);
  const kty = decodedPublicKey.get(COSEKEYS.kty);
  const alg = decodedPublicKey.get(COSEKEYS.alg);
  if (!kty) {
    throw new Error("Credential public key was missing kty");
  }
  if (!alg) {
    throw new Error("Credential public key was missing alg");
  }
  if (!kty) {
    throw new Error("Credential public key was missing kty");
  }
  const publicKeyCOSEInfo = { kty, alg };
  if (isCOSEPublicKeyEC2(decodedPublicKey)) {
    const crv = decodedPublicKey.get(COSEKEYS.crv);
    publicKeyCOSEInfo.crv = crv;
  }
  let foundMatch = false;
  for (const keypairAlg of keypairCOSEAlgs) {
    if (keypairAlg.alg === publicKeyCOSEInfo.alg && keypairAlg.kty === publicKeyCOSEInfo.kty) {
      if ((keypairAlg.kty === COSEKTY.EC2 || keypairAlg.kty === COSEKTY.OKP) && keypairAlg.crv === publicKeyCOSEInfo.crv) {
        foundMatch = true;
      } else {
        foundMatch = true;
      }
    }
    if (foundMatch) {
      break;
    }
  }
  if (!foundMatch) {
    const debugMDSAlgs = authenticationAlgorithms.map((algSign) => `'${algSign}' (COSE info: ${stringifyCOSEInfo(algSignToCOSEInfoMap[algSign])})`);
    const strMDSAlgs = JSON.stringify(debugMDSAlgs, null, 2).replace(/"/g, "");
    const strPubKeyAlg = stringifyCOSEInfo(publicKeyCOSEInfo);
    throw new Error(`Public key parameters ${strPubKeyAlg} did not match any of the following metadata algorithms:
${strMDSAlgs}`);
  }
  if (attestationStatementAlg !== undefined && authenticatorGetInfo?.algorithms !== undefined) {
    const getInfoAlgs = authenticatorGetInfo.algorithms.map((_alg) => _alg.alg);
    if (getInfoAlgs.indexOf(attestationStatementAlg) < 0) {
      throw new Error(`Attestation statement alg ${attestationStatementAlg} did not match one of ${getInfoAlgs}`);
    }
  }
  const authenticatorCerts = x5c.map(convertCertBufferToPEM);
  const statementRootCerts = attestationRootCertificates.map(convertCertBufferToPEM);
  let authenticatorIsSelfReferencing = false;
  if (authenticatorCerts.length === 1 && statementRootCerts.indexOf(authenticatorCerts[0]) >= 0) {
    authenticatorIsSelfReferencing = true;
  }
  if (!authenticatorIsSelfReferencing) {
    try {
      await validateCertificatePath(authenticatorCerts, statementRootCerts);
    } catch (err) {
      const _err = err;
      throw new Error(`Could not validate certificate path with any metadata root certificates: ${_err.message}`);
    }
  }
  return true;
}
var algSignToCOSEInfoMap = {
  secp256r1_ecdsa_sha256_raw: { kty: 2, alg: -7, crv: 1 },
  secp256r1_ecdsa_sha256_der: { kty: 2, alg: -7, crv: 1 },
  rsassa_pss_sha256_raw: { kty: 3, alg: -37 },
  rsassa_pss_sha256_der: { kty: 3, alg: -37 },
  secp256k1_ecdsa_sha256_raw: { kty: 2, alg: -47, crv: 8 },
  secp256k1_ecdsa_sha256_der: { kty: 2, alg: -47, crv: 8 },
  rsassa_pss_sha384_raw: { kty: 3, alg: -38 },
  rsassa_pkcsv15_sha256_raw: { kty: 3, alg: -257 },
  rsassa_pkcsv15_sha384_raw: { kty: 3, alg: -258 },
  rsassa_pkcsv15_sha512_raw: { kty: 3, alg: -259 },
  rsassa_pkcsv15_sha1_raw: { kty: 3, alg: -65535 },
  secp384r1_ecdsa_sha384_raw: { kty: 2, alg: -35, crv: 2 },
  secp512r1_ecdsa_sha256_raw: { kty: 2, alg: -36, crv: 3 },
  ed25519_eddsa_sha512_raw: { kty: 1, alg: -8, crv: 6 }
};
function stringifyCOSEInfo(info) {
  const { kty, alg, crv } = info;
  let toReturn = "";
  if (kty !== COSEKTY.RSA) {
    toReturn = `{ kty: ${kty}, alg: ${alg}, crv: ${crv} }`;
  } else {
    toReturn = `{ kty: ${kty}, alg: ${alg} }`;
  }
  return toReturn;
}

// node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationPacked.js
async function verifyAttestationPacked(options) {
  const { attStmt, clientDataHash, authData, credentialPublicKey, aaguid, rootCertificates } = options;
  const sig = attStmt.get("sig");
  const x5c = attStmt.get("x5c");
  const alg = attStmt.get("alg");
  if (!sig) {
    throw new Error("No attestation signature provided in attestation statement (Packed)");
  }
  if (!alg) {
    throw new Error("Attestation statement did not contain alg (Packed)");
  }
  if (!isCOSEAlg(alg)) {
    throw new Error(`Attestation statement contained invalid alg ${alg} (Packed)`);
  }
  const signatureBase = exports_isoUint8Array.concat([authData, clientDataHash]);
  let verified = false;
  if (x5c) {
    const { subject, basicConstraintsCA, version, notBefore, notAfter, parsedCertificate } = getCertificateInfo(x5c[0]);
    const { OU, CN, O, C } = subject;
    if (OU !== "Authenticator Attestation") {
      throw new Error('Certificate OU was not "Authenticator Attestation" (Packed|Full)');
    }
    if (!CN) {
      throw new Error("Certificate CN was empty (Packed|Full)");
    }
    if (!O) {
      throw new Error("Certificate O was empty (Packed|Full)");
    }
    if (!C || C.length !== 2) {
      throw new Error("Certificate C was not two-character ISO 3166 code (Packed|Full)");
    }
    if (basicConstraintsCA) {
      throw new Error("Certificate basic constraints CA was not `false` (Packed|Full)");
    }
    if (version !== 2) {
      throw new Error("Certificate version was not `3` (ASN.1 value of 2) (Packed|Full)");
    }
    let now2 = new Date;
    if (notBefore > now2) {
      throw new Error(`Certificate not good before "${notBefore.toString()}" (Packed|Full)`);
    }
    now2 = new Date;
    if (notAfter < now2) {
      throw new Error(`Certificate not good after "${notAfter.toString()}" (Packed|Full)`);
    }
    try {
      await validateExtFIDOGenCEAAGUID(parsedCertificate.tbsCertificate.extensions, aaguid);
    } catch (err) {
      const _err = err;
      throw new Error(`${_err.message} (Packed|Full)`);
    }
    const statement = await MetadataService.getStatement(aaguid);
    if (statement) {
      if (statement.attestationTypes.indexOf("basic_full") < 0) {
        throw new Error("Metadata does not indicate support for full attestations (Packed|Full)");
      }
      try {
        await verifyAttestationWithMetadata({
          statement,
          credentialPublicKey,
          x5c,
          attestationStatementAlg: alg
        });
      } catch (err) {
        const _err = err;
        throw new Error(`${_err.message} (Packed|Full)`);
      }
    } else {
      try {
        await validateCertificatePath(x5c.map(convertCertBufferToPEM), rootCertificates);
      } catch (err) {
        const _err = err;
        throw new Error(`${_err.message} (Packed|Full)`);
      }
    }
    verified = await verifySignature({
      signature: sig,
      data: signatureBase,
      x509Certificate: x5c[0],
      hashAlgorithm: alg
    });
  } else {
    verified = await verifySignature({
      signature: sig,
      data: signatureBase,
      credentialPublicKey,
      hashAlgorithm: alg
    });
  }
  return verified;
}

// node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationAndroidSafetyNet.js
async function verifyAttestationAndroidSafetyNet(options) {
  const { attStmt, clientDataHash, authData, aaguid, rootCertificates, verifyTimestampMS = true, credentialPublicKey, attestationSafetyNetEnforceCTSCheck } = options;
  const alg = attStmt.get("alg");
  const response = attStmt.get("response");
  const ver = attStmt.get("ver");
  if (!ver) {
    throw new Error("No ver value in attestation (SafetyNet)");
  }
  if (!response) {
    throw new Error("No response was included in attStmt by authenticator (SafetyNet)");
  }
  const jwt = exports_isoUint8Array.toUTF8String(response);
  const jwtParts = jwt.split(".");
  const HEADER = JSON.parse(exports_isoBase64URL.toUTF8String(jwtParts[0]));
  const PAYLOAD = JSON.parse(exports_isoBase64URL.toUTF8String(jwtParts[1]));
  const SIGNATURE = jwtParts[2];
  const { nonce, ctsProfileMatch, timestampMs } = PAYLOAD;
  if (verifyTimestampMS) {
    let now2 = Date.now();
    if (timestampMs > Date.now()) {
      throw new Error(`Payload timestamp "${timestampMs}" was later than "${now2}" (SafetyNet)`);
    }
    const timestampPlusDelay = timestampMs + 60 * 1000;
    now2 = Date.now();
    if (timestampPlusDelay < now2) {
      throw new Error(`Payload timestamp "${timestampPlusDelay}" has expired (SafetyNet)`);
    }
  }
  const nonceBase = exports_isoUint8Array.concat([authData, clientDataHash]);
  const nonceBuffer = await toHash(nonceBase);
  const expectedNonce = exports_isoBase64URL.fromBuffer(nonceBuffer, "base64");
  if (nonce !== expectedNonce) {
    throw new Error("Could not verify payload nonce (SafetyNet)");
  }
  if (attestationSafetyNetEnforceCTSCheck && !ctsProfileMatch) {
    throw new Error("Could not verify device integrity (SafetyNet)");
  }
  const leafCertBuffer = exports_isoBase64URL.toBuffer(HEADER.x5c[0], "base64");
  const leafCertInfo = getCertificateInfo(leafCertBuffer);
  const { subject } = leafCertInfo;
  if (subject.CN !== "attest.android.com") {
    throw new Error('Certificate common name was not "attest.android.com" (SafetyNet)');
  }
  const statement = await MetadataService.getStatement(aaguid);
  if (statement) {
    try {
      await verifyAttestationWithMetadata({
        statement,
        credentialPublicKey,
        x5c: HEADER.x5c,
        attestationStatementAlg: alg
      });
    } catch (err) {
      const _err = err;
      throw new Error(`${_err.message} (SafetyNet)`);
    }
  } else {
    try {
      await validateCertificatePath(HEADER.x5c.map(convertCertBufferToPEM), rootCertificates);
    } catch (err) {
      const _err = err;
      throw new Error(`${_err.message} (SafetyNet)`);
    }
  }
  const signatureBaseBuffer = exports_isoUint8Array.fromUTF8String(`${jwtParts[0]}.${jwtParts[1]}`);
  const signatureBuffer = exports_isoBase64URL.toBuffer(SIGNATURE);
  const verified = await verifySignature({
    signature: signatureBuffer,
    data: signatureBaseBuffer,
    x509Certificate: leafCertBuffer,
    hashAlgorithm: alg
  });
  return verified;
}

// node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/constants.js
var TPM_ST = {
  196: "TPM_ST_RSP_COMMAND",
  32768: "TPM_ST_NULL",
  32769: "TPM_ST_NO_SESSIONS",
  32770: "TPM_ST_SESSIONS",
  32788: "TPM_ST_ATTEST_NV",
  32789: "TPM_ST_ATTEST_COMMAND_AUDIT",
  32790: "TPM_ST_ATTEST_SESSION_AUDIT",
  32791: "TPM_ST_ATTEST_CERTIFY",
  32792: "TPM_ST_ATTEST_QUOTE",
  32793: "TPM_ST_ATTEST_TIME",
  32794: "TPM_ST_ATTEST_CREATION",
  32801: "TPM_ST_CREATION",
  32802: "TPM_ST_VERIFIED",
  32803: "TPM_ST_AUTH_SECRET",
  32804: "TPM_ST_HASHCHECK",
  32805: "TPM_ST_AUTH_SIGNED",
  32809: "TPM_ST_FU_MANIFEST"
};
var TPM_ALG = {
  0: "TPM_ALG_ERROR",
  1: "TPM_ALG_RSA",
  4: "TPM_ALG_SHA",
  4: "TPM_ALG_SHA1",
  5: "TPM_ALG_HMAC",
  6: "TPM_ALG_AES",
  7: "TPM_ALG_MGF1",
  8: "TPM_ALG_KEYEDHASH",
  10: "TPM_ALG_XOR",
  11: "TPM_ALG_SHA256",
  12: "TPM_ALG_SHA384",
  13: "TPM_ALG_SHA512",
  16: "TPM_ALG_NULL",
  18: "TPM_ALG_SM3_256",
  19: "TPM_ALG_SM4",
  20: "TPM_ALG_RSASSA",
  21: "TPM_ALG_RSAES",
  22: "TPM_ALG_RSAPSS",
  23: "TPM_ALG_OAEP",
  24: "TPM_ALG_ECDSA",
  25: "TPM_ALG_ECDH",
  26: "TPM_ALG_ECDAA",
  27: "TPM_ALG_SM2",
  28: "TPM_ALG_ECSCHNORR",
  29: "TPM_ALG_ECMQV",
  32: "TPM_ALG_KDF1_SP800_56A",
  33: "TPM_ALG_KDF2",
  34: "TPM_ALG_KDF1_SP800_108",
  35: "TPM_ALG_ECC",
  37: "TPM_ALG_SYMCIPHER",
  38: "TPM_ALG_CAMELLIA",
  64: "TPM_ALG_CTR",
  65: "TPM_ALG_OFB",
  66: "TPM_ALG_CBC",
  67: "TPM_ALG_CFB",
  68: "TPM_ALG_ECB"
};
var TPM_ECC_CURVE = {
  0: "TPM_ECC_NONE",
  1: "TPM_ECC_NIST_P192",
  2: "TPM_ECC_NIST_P224",
  3: "TPM_ECC_NIST_P256",
  4: "TPM_ECC_NIST_P384",
  5: "TPM_ECC_NIST_P521",
  16: "TPM_ECC_BN_P256",
  17: "TPM_ECC_BN_P638",
  32: "TPM_ECC_SM2_P256"
};
var TPM_MANUFACTURERS = {
  "id:414D4400": { name: "AMD", id: "AMD" },
  "id:414E5400": { name: "Ant Group", id: "ANT" },
  "id:41544D4C": { name: "Atmel", id: "ATML" },
  "id:4252434D": { name: "Broadcom", id: "BRCM" },
  "id:4353434F": { name: "Cisco", id: "CSCO" },
  "id:464C5953": { name: "Flyslice Technologies", id: "FLYS" },
  "id:524F4343": { name: "Fuzhou Rockchip", id: "ROCC" },
  "id:474F4F47": { name: "Google", id: "GOOG" },
  "id:48504900": { name: "HPI", id: "HPI" },
  "id:48504500": { name: "HPE", id: "HPE" },
  "id:48495349": { name: "Huawei", id: "HISI" },
  "id:49424d00": { name: "IBM", id: "IBM" },
  "id:49424D00": { name: "IBM", id: "IBM" },
  "id:49465800": { name: "Infineon", id: "IFX" },
  "id:494E5443": { name: "Intel", id: "INTC" },
  "id:4C454E00": { name: "Lenovo", id: "LEN" },
  "id:4D534654": { name: "Microsoft", id: "MSFT" },
  "id:4E534D20": { name: "National Semiconductor", id: "NSM" },
  "id:4E545A00": { name: "Nationz", id: "NTZ" },
  "id:4E534700": { name: "NSING", id: "NSG" },
  "id:4E544300": { name: "Nuvoton Technology", id: "NTC" },
  "id:51434F4D": { name: "Qualcomm", id: "QCOM" },
  "id:534D534E": { name: "Samsung", id: "SMSN" },
  "id:53454345": { name: "SecEdge", id: "SECE" },
  "id:534E5300": { name: "Sinosun", id: "SNS" },
  "id:534D5343": { name: "SMSC", id: "SMSC" },
  "id:53544D20": { name: "STMicroelectronics", id: "STM" },
  "id:54584E00": { name: "Texas Instruments", id: "TXN" },
  "id:57454300": { name: "Winbond", id: "WEC" },
  "id:5345414C": { name: "Wisekey", id: "SEAL" },
  "id:FFFFF1D0": { name: "FIDO Alliance", id: "FIDO" }
};
var TPM_ECC_CURVE_COSE_CRV_MAP = {
  TPM_ECC_NIST_P256: 1,
  TPM_ECC_NIST_P384: 2,
  TPM_ECC_NIST_P521: 3,
  TPM_ECC_BN_P256: 1,
  TPM_ECC_SM2_P256: 1
};

// node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/parseCertInfo.js
function parseCertInfo(certInfo) {
  let pointer = 0;
  const dataView = exports_isoUint8Array.toDataView(certInfo);
  const magic = dataView.getUint32(pointer);
  pointer += 4;
  const typeBuffer = dataView.getUint16(pointer);
  pointer += 2;
  const type = TPM_ST[typeBuffer];
  const qualifiedSignerLength = dataView.getUint16(pointer);
  pointer += 2;
  const qualifiedSigner = certInfo.slice(pointer, pointer += qualifiedSignerLength);
  const extraDataLength = dataView.getUint16(pointer);
  pointer += 2;
  const extraData = certInfo.slice(pointer, pointer += extraDataLength);
  const clock = certInfo.slice(pointer, pointer += 8);
  const resetCount = dataView.getUint32(pointer);
  pointer += 4;
  const restartCount = dataView.getUint32(pointer);
  pointer += 4;
  const safe = !!certInfo.slice(pointer, pointer += 1);
  const clockInfo = { clock, resetCount, restartCount, safe };
  const firmwareVersion = certInfo.slice(pointer, pointer += 8);
  const attestedNameLength = dataView.getUint16(pointer);
  pointer += 2;
  const attestedName = certInfo.slice(pointer, pointer += attestedNameLength);
  const attestedNameDataView = exports_isoUint8Array.toDataView(attestedName);
  const qualifiedNameLength = dataView.getUint16(pointer);
  pointer += 2;
  const qualifiedName = certInfo.slice(pointer, pointer += qualifiedNameLength);
  const attested = {
    nameAlg: TPM_ALG[attestedNameDataView.getUint16(0)],
    nameAlgBuffer: attestedName.slice(0, 2),
    name: attestedName,
    qualifiedName
  };
  return {
    magic,
    type,
    qualifiedSigner,
    extraData,
    clockInfo,
    firmwareVersion,
    attested
  };
}

// node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/parsePubArea.js
function parsePubArea(pubArea) {
  let pointer = 0;
  const dataView = exports_isoUint8Array.toDataView(pubArea);
  const type = TPM_ALG[dataView.getUint16(pointer)];
  pointer += 2;
  const nameAlg = TPM_ALG[dataView.getUint16(pointer)];
  pointer += 2;
  const objectAttributesInt = dataView.getUint32(pointer);
  pointer += 4;
  const objectAttributes = {
    fixedTPM: !!(objectAttributesInt & 1),
    stClear: !!(objectAttributesInt & 2),
    fixedParent: !!(objectAttributesInt & 8),
    sensitiveDataOrigin: !!(objectAttributesInt & 16),
    userWithAuth: !!(objectAttributesInt & 32),
    adminWithPolicy: !!(objectAttributesInt & 64),
    noDA: !!(objectAttributesInt & 512),
    encryptedDuplication: !!(objectAttributesInt & 1024),
    restricted: !!(objectAttributesInt & 32768),
    decrypt: !!(objectAttributesInt & 65536),
    signOrEncrypt: !!(objectAttributesInt & 131072)
  };
  const authPolicyLength = dataView.getUint16(pointer);
  pointer += 2;
  const authPolicy = pubArea.slice(pointer, pointer += authPolicyLength);
  const parameters2 = {};
  let unique = Uint8Array.from([]);
  if (type === "TPM_ALG_RSA") {
    const symmetric = TPM_ALG[dataView.getUint16(pointer)];
    pointer += 2;
    const scheme = TPM_ALG[dataView.getUint16(pointer)];
    pointer += 2;
    const keyBits = dataView.getUint16(pointer);
    pointer += 2;
    const exponent = dataView.getUint32(pointer);
    pointer += 4;
    parameters2.rsa = { symmetric, scheme, keyBits, exponent };
    const uniqueLength = dataView.getUint16(pointer);
    pointer += 2;
    unique = pubArea.slice(pointer, pointer += uniqueLength);
  } else if (type === "TPM_ALG_ECC") {
    const symmetric = TPM_ALG[dataView.getUint16(pointer)];
    pointer += 2;
    const scheme = TPM_ALG[dataView.getUint16(pointer)];
    pointer += 2;
    const curveID = TPM_ECC_CURVE[dataView.getUint16(pointer)];
    pointer += 2;
    const kdf = TPM_ALG[dataView.getUint16(pointer)];
    pointer += 2;
    parameters2.ecc = { symmetric, scheme, curveID, kdf };
    const uniqueXLength = dataView.getUint16(pointer);
    pointer += 2;
    const uniqueX = pubArea.slice(pointer, pointer += uniqueXLength);
    const uniqueYLength = dataView.getUint16(pointer);
    pointer += 2;
    const uniqueY = pubArea.slice(pointer, pointer += uniqueYLength);
    unique = exports_isoUint8Array.concat([uniqueX, uniqueY]);
  } else {
    throw new Error(`Unexpected type "${type}" (TPM)`);
  }
  return {
    type,
    nameAlg,
    objectAttributes,
    authPolicy,
    parameters: parameters2,
    unique
  };
}

// node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/verifyAttestationTPM.js
async function verifyAttestationTPM(options) {
  const { aaguid, attStmt, authData, credentialPublicKey, clientDataHash, rootCertificates } = options;
  const ver = attStmt.get("ver");
  const sig = attStmt.get("sig");
  const alg = attStmt.get("alg");
  const x5c = attStmt.get("x5c");
  const pubArea = attStmt.get("pubArea");
  const certInfo = attStmt.get("certInfo");
  if (ver !== "2.0") {
    throw new Error(`Unexpected ver "${ver}", expected "2.0" (TPM)`);
  }
  if (!sig) {
    throw new Error("No attestation signature provided in attestation statement (TPM)");
  }
  if (!alg) {
    throw new Error(`Attestation statement did not contain alg (TPM)`);
  }
  if (!isCOSEAlg(alg)) {
    throw new Error(`Attestation statement contained invalid alg ${alg} (TPM)`);
  }
  if (!x5c) {
    throw new Error("No attestation certificate provided in attestation statement (TPM)");
  }
  if (!pubArea) {
    throw new Error("Attestation statement did not contain pubArea (TPM)");
  }
  if (!certInfo) {
    throw new Error("Attestation statement did not contain certInfo (TPM)");
  }
  const parsedPubArea = parsePubArea(pubArea);
  const { unique, type: pubType, parameters: parameters2 } = parsedPubArea;
  const cosePublicKey = decodeCredentialPublicKey(credentialPublicKey);
  if (pubType === "TPM_ALG_RSA") {
    if (!isCOSEPublicKeyRSA(cosePublicKey)) {
      throw new Error(`Credential public key with kty ${cosePublicKey.get(COSEKEYS.kty)} did not match ${pubType}`);
    }
    const n = cosePublicKey.get(COSEKEYS.n);
    const e = cosePublicKey.get(COSEKEYS.e);
    if (!n) {
      throw new Error("COSE public key missing n (TPM|RSA)");
    }
    if (!e) {
      throw new Error("COSE public key missing e (TPM|RSA)");
    }
    if (!exports_isoUint8Array.areEqual(unique, n)) {
      throw new Error("PubArea unique is not same as credentialPublicKey (TPM|RSA)");
    }
    if (!parameters2.rsa) {
      throw new Error(`Parsed pubArea type is RSA, but missing parameters.rsa (TPM|RSA)`);
    }
    const eBuffer = e;
    const pubAreaExponent = parameters2.rsa.exponent || 65537;
    const eSum = eBuffer[0] + (eBuffer[1] << 8) + (eBuffer[2] << 16);
    if (pubAreaExponent !== eSum) {
      throw new Error(`Unexpected public key exp ${eSum}, expected ${pubAreaExponent} (TPM|RSA)`);
    }
  } else if (pubType === "TPM_ALG_ECC") {
    if (!isCOSEPublicKeyEC2(cosePublicKey)) {
      throw new Error(`Credential public key with kty ${cosePublicKey.get(COSEKEYS.kty)} did not match ${pubType}`);
    }
    const crv = cosePublicKey.get(COSEKEYS.crv);
    const x = cosePublicKey.get(COSEKEYS.x);
    const y = cosePublicKey.get(COSEKEYS.y);
    if (!crv) {
      throw new Error("COSE public key missing crv (TPM|ECC)");
    }
    if (!x) {
      throw new Error("COSE public key missing x (TPM|ECC)");
    }
    if (!y) {
      throw new Error("COSE public key missing y (TPM|ECC)");
    }
    if (!exports_isoUint8Array.areEqual(unique, exports_isoUint8Array.concat([x, y]))) {
      throw new Error("PubArea unique is not same as public key x and y (TPM|ECC)");
    }
    if (!parameters2.ecc) {
      throw new Error(`Parsed pubArea type is ECC, but missing parameters.ecc (TPM|ECC)`);
    }
    const pubAreaCurveID = parameters2.ecc.curveID;
    const pubAreaCurveIDMapToCOSECRV = TPM_ECC_CURVE_COSE_CRV_MAP[pubAreaCurveID];
    if (pubAreaCurveIDMapToCOSECRV !== crv) {
      throw new Error(`Public area key curve ID "${pubAreaCurveID}" mapped to "${pubAreaCurveIDMapToCOSECRV}" which did not match public key crv of "${crv}" (TPM|ECC)`);
    }
  } else {
    throw new Error(`Unsupported pubArea.type "${pubType}"`);
  }
  const parsedCertInfo = parseCertInfo(certInfo);
  const { magic, type: certType, attested, extraData } = parsedCertInfo;
  if (magic !== 4283712327) {
    throw new Error(`Unexpected magic value "${magic}", expected "0xff544347" (TPM)`);
  }
  if (certType !== "TPM_ST_ATTEST_CERTIFY") {
    throw new Error(`Unexpected type "${certType}", expected "TPM_ST_ATTEST_CERTIFY" (TPM)`);
  }
  const pubAreaHash = await toHash(pubArea, attestedNameAlgToCOSEAlg(attested.nameAlg));
  const attestedName = exports_isoUint8Array.concat([
    attested.nameAlgBuffer,
    pubAreaHash
  ]);
  if (!exports_isoUint8Array.areEqual(attested.name, attestedName)) {
    throw new Error(`Attested name comparison failed (TPM)`);
  }
  const attToBeSigned = exports_isoUint8Array.concat([authData, clientDataHash]);
  const attToBeSignedHash = await toHash(attToBeSigned, alg);
  if (!exports_isoUint8Array.areEqual(extraData, attToBeSignedHash)) {
    throw new Error("CertInfo extra data did not equal hashed attestation (TPM)");
  }
  if (x5c.length < 1) {
    throw new Error("No certificates present in x5c array (TPM)");
  }
  const leafCertInfo = getCertificateInfo(x5c[0]);
  const { basicConstraintsCA, version, subject, notAfter, notBefore } = leafCertInfo;
  if (basicConstraintsCA) {
    throw new Error("Certificate basic constraints CA was not `false` (TPM)");
  }
  if (version !== 2) {
    throw new Error("Certificate version was not `3` (ASN.1 value of 2) (TPM)");
  }
  if (subject.combined.length > 0) {
    throw new Error("Certificate subject was not empty (TPM)");
  }
  let now2 = new Date;
  if (notBefore > now2) {
    throw new Error(`Certificate not good before "${notBefore.toString()}" (TPM)`);
  }
  now2 = new Date;
  if (notAfter < now2) {
    throw new Error(`Certificate not good after "${notAfter.toString()}" (TPM)`);
  }
  const parsedCert = AsnParser.parse(x5c[0], Certificate);
  if (!parsedCert.tbsCertificate.extensions) {
    throw new Error("Certificate was missing extensions (TPM)");
  }
  let subjectAltNamePresent;
  let extKeyUsage;
  parsedCert.tbsCertificate.extensions.forEach((ext) => {
    if (ext.extnID === id_ce_subjectAltName) {
      subjectAltNamePresent = AsnParser.parse(ext.extnValue, SubjectAlternativeName);
    } else if (ext.extnID === id_ce_extKeyUsage) {
      extKeyUsage = AsnParser.parse(ext.extnValue, ExtendedKeyUsage);
    }
  });
  if (!subjectAltNamePresent) {
    throw new Error("Certificate did not contain subjectAltName extension (TPM)");
  }
  if (!subjectAltNamePresent[0].directoryName?.[0].length) {
    throw new Error("Certificate subjectAltName extension directoryName was empty (TPM)");
  }
  const { tcgAtTpmManufacturer, tcgAtTpmModel, tcgAtTpmVersion } = getTcgAtTpmValues(subjectAltNamePresent[0].directoryName);
  if (!tcgAtTpmManufacturer || !tcgAtTpmModel || !tcgAtTpmVersion) {
    throw new Error("Certificate contained incomplete subjectAltName data (TPM)");
  }
  if (!extKeyUsage) {
    throw new Error("Certificate did not contain ExtendedKeyUsage extension (TPM)");
  }
  if (!TPM_MANUFACTURERS[tcgAtTpmManufacturer]) {
    throw new Error(`Could not match TPM manufacturer "${tcgAtTpmManufacturer}" (TPM)`);
  }
  if (extKeyUsage[0] !== "2.23.133.8.3") {
    throw new Error(`Unexpected extKeyUsage "${extKeyUsage[0]}", expected "2.23.133.8.3" (TPM)`);
  }
  try {
    await validateExtFIDOGenCEAAGUID(parsedCert.tbsCertificate.extensions, aaguid);
  } catch (err) {
    const _err = err;
    throw new Error(`${_err.message} (TPM)`);
  }
  const statement = await MetadataService.getStatement(aaguid);
  if (statement) {
    try {
      await verifyAttestationWithMetadata({
        statement,
        credentialPublicKey,
        x5c,
        attestationStatementAlg: alg
      });
    } catch (err) {
      const _err = err;
      throw new Error(`${_err.message} (TPM)`);
    }
  } else {
    try {
      await validateCertificatePath(x5c.map(convertCertBufferToPEM), rootCertificates);
    } catch (err) {
      const _err = err;
      throw new Error(`${_err.message} (TPM)`);
    }
  }
  return verifySignature({
    signature: sig,
    data: certInfo,
    x509Certificate: x5c[0],
    hashAlgorithm: alg
  });
}
function getTcgAtTpmValues(root) {
  const oidManufacturer = "2.23.133.2.1";
  const oidModel = "2.23.133.2.2";
  const oidVersion = "2.23.133.2.3";
  let tcgAtTpmManufacturer;
  let tcgAtTpmModel;
  let tcgAtTpmVersion;
  root.forEach((relName) => {
    relName.forEach((attr) => {
      if (attr.type === oidManufacturer) {
        tcgAtTpmManufacturer = attr.value.toString();
      } else if (attr.type === oidModel) {
        tcgAtTpmModel = attr.value.toString();
      } else if (attr.type === oidVersion) {
        tcgAtTpmVersion = attr.value.toString();
      }
    });
  });
  return {
    tcgAtTpmManufacturer,
    tcgAtTpmModel,
    tcgAtTpmVersion
  };
}
function attestedNameAlgToCOSEAlg(alg) {
  if (alg === "TPM_ALG_SHA256") {
    return COSEALG.ES256;
  } else if (alg === "TPM_ALG_SHA384") {
    return COSEALG.ES384;
  } else if (alg === "TPM_ALG_SHA512") {
    return COSEALG.ES512;
  }
  throw new Error(`Unexpected TPM attested name alg ${alg}`);
}

// node_modules/@peculiar/asn1-android/build/es2015/key_description.js
var IntegerSet_1;
var id_ce_keyDescription = "1.3.6.1.4.1.11129.2.1.17";
var VerifiedBootState;
(function(VerifiedBootState2) {
  VerifiedBootState2[VerifiedBootState2["verified"] = 0] = "verified";
  VerifiedBootState2[VerifiedBootState2["selfSigned"] = 1] = "selfSigned";
  VerifiedBootState2[VerifiedBootState2["unverified"] = 2] = "unverified";
  VerifiedBootState2[VerifiedBootState2["failed"] = 3] = "failed";
})(VerifiedBootState || (VerifiedBootState = {}));

class RootOfTrust {
  verifiedBootKey = new OctetString2;
  deviceLocked = false;
  verifiedBootState = VerifiedBootState.verified;
  verifiedBootHash;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: OctetString2 })
], RootOfTrust.prototype, "verifiedBootKey", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Boolean })
], RootOfTrust.prototype, "deviceLocked", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Enumerated })
], RootOfTrust.prototype, "verifiedBootState", undefined);
__decorate([
  AsnProp({
    type: OctetString2,
    optional: true
  })
], RootOfTrust.prototype, "verifiedBootHash", undefined);
var IntegerSet = IntegerSet_1 = class IntegerSet2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, IntegerSet_1.prototype);
  }
};
IntegerSet = IntegerSet_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: AsnPropTypes.Integer
  })
], IntegerSet);
class AuthorizationList {
  purpose;
  algorithm;
  keySize;
  digest;
  padding;
  ecCurve;
  rsaPublicExponent;
  mgfDigest;
  rollbackResistance;
  earlyBootOnly;
  activeDateTime;
  originationExpireDateTime;
  usageExpireDateTime;
  usageCountLimit;
  noAuthRequired;
  userAuthType;
  authTimeout;
  allowWhileOnBody;
  trustedUserPresenceRequired;
  trustedConfirmationRequired;
  unlockedDeviceRequired;
  allApplications;
  applicationId;
  creationDateTime;
  origin;
  rollbackResistant;
  rootOfTrust;
  osVersion;
  osPatchLevel;
  attestationApplicationId;
  attestationIdBrand;
  attestationIdDevice;
  attestationIdProduct;
  attestationIdSerial;
  attestationIdImei;
  attestationIdMeid;
  attestationIdManufacturer;
  attestationIdModel;
  vendorPatchLevel;
  bootPatchLevel;
  deviceUniqueAttestation;
  attestationIdSecondImei;
  moduleHash;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    context: 1,
    type: IntegerSet,
    optional: true
  })
], AuthorizationList.prototype, "purpose", undefined);
__decorate([
  AsnProp({
    context: 2,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "algorithm", undefined);
__decorate([
  AsnProp({
    context: 3,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "keySize", undefined);
__decorate([
  AsnProp({
    context: 5,
    type: IntegerSet,
    optional: true
  })
], AuthorizationList.prototype, "digest", undefined);
__decorate([
  AsnProp({
    context: 6,
    type: IntegerSet,
    optional: true
  })
], AuthorizationList.prototype, "padding", undefined);
__decorate([
  AsnProp({
    context: 10,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "ecCurve", undefined);
__decorate([
  AsnProp({
    context: 200,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "rsaPublicExponent", undefined);
__decorate([
  AsnProp({
    context: 203,
    type: IntegerSet,
    optional: true
  })
], AuthorizationList.prototype, "mgfDigest", undefined);
__decorate([
  AsnProp({
    context: 303,
    type: AsnPropTypes.Null,
    optional: true
  })
], AuthorizationList.prototype, "rollbackResistance", undefined);
__decorate([
  AsnProp({
    context: 305,
    type: AsnPropTypes.Null,
    optional: true
  })
], AuthorizationList.prototype, "earlyBootOnly", undefined);
__decorate([
  AsnProp({
    context: 400,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "activeDateTime", undefined);
__decorate([
  AsnProp({
    context: 401,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "originationExpireDateTime", undefined);
__decorate([
  AsnProp({
    context: 402,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "usageExpireDateTime", undefined);
__decorate([
  AsnProp({
    context: 405,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "usageCountLimit", undefined);
__decorate([
  AsnProp({
    context: 503,
    type: AsnPropTypes.Null,
    optional: true
  })
], AuthorizationList.prototype, "noAuthRequired", undefined);
__decorate([
  AsnProp({
    context: 504,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "userAuthType", undefined);
__decorate([
  AsnProp({
    context: 505,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "authTimeout", undefined);
__decorate([
  AsnProp({
    context: 506,
    type: AsnPropTypes.Null,
    optional: true
  })
], AuthorizationList.prototype, "allowWhileOnBody", undefined);
__decorate([
  AsnProp({
    context: 507,
    type: AsnPropTypes.Null,
    optional: true
  })
], AuthorizationList.prototype, "trustedUserPresenceRequired", undefined);
__decorate([
  AsnProp({
    context: 508,
    type: AsnPropTypes.Null,
    optional: true
  })
], AuthorizationList.prototype, "trustedConfirmationRequired", undefined);
__decorate([
  AsnProp({
    context: 509,
    type: AsnPropTypes.Null,
    optional: true
  })
], AuthorizationList.prototype, "unlockedDeviceRequired", undefined);
__decorate([
  AsnProp({
    context: 600,
    type: AsnPropTypes.Null,
    optional: true
  })
], AuthorizationList.prototype, "allApplications", undefined);
__decorate([
  AsnProp({
    context: 601,
    type: OctetString2,
    optional: true
  })
], AuthorizationList.prototype, "applicationId", undefined);
__decorate([
  AsnProp({
    context: 701,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "creationDateTime", undefined);
__decorate([
  AsnProp({
    context: 702,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "origin", undefined);
__decorate([
  AsnProp({
    context: 703,
    type: AsnPropTypes.Null,
    optional: true
  })
], AuthorizationList.prototype, "rollbackResistant", undefined);
__decorate([
  AsnProp({
    context: 704,
    type: RootOfTrust,
    optional: true
  })
], AuthorizationList.prototype, "rootOfTrust", undefined);
__decorate([
  AsnProp({
    context: 705,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "osVersion", undefined);
__decorate([
  AsnProp({
    context: 706,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "osPatchLevel", undefined);
__decorate([
  AsnProp({
    context: 709,
    type: OctetString2,
    optional: true
  })
], AuthorizationList.prototype, "attestationApplicationId", undefined);
__decorate([
  AsnProp({
    context: 710,
    type: OctetString2,
    optional: true
  })
], AuthorizationList.prototype, "attestationIdBrand", undefined);
__decorate([
  AsnProp({
    context: 711,
    type: OctetString2,
    optional: true
  })
], AuthorizationList.prototype, "attestationIdDevice", undefined);
__decorate([
  AsnProp({
    context: 712,
    type: OctetString2,
    optional: true
  })
], AuthorizationList.prototype, "attestationIdProduct", undefined);
__decorate([
  AsnProp({
    context: 713,
    type: OctetString2,
    optional: true
  })
], AuthorizationList.prototype, "attestationIdSerial", undefined);
__decorate([
  AsnProp({
    context: 714,
    type: OctetString2,
    optional: true
  })
], AuthorizationList.prototype, "attestationIdImei", undefined);
__decorate([
  AsnProp({
    context: 715,
    type: OctetString2,
    optional: true
  })
], AuthorizationList.prototype, "attestationIdMeid", undefined);
__decorate([
  AsnProp({
    context: 716,
    type: OctetString2,
    optional: true
  })
], AuthorizationList.prototype, "attestationIdManufacturer", undefined);
__decorate([
  AsnProp({
    context: 717,
    type: OctetString2,
    optional: true
  })
], AuthorizationList.prototype, "attestationIdModel", undefined);
__decorate([
  AsnProp({
    context: 718,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "vendorPatchLevel", undefined);
__decorate([
  AsnProp({
    context: 719,
    type: AsnPropTypes.Integer,
    optional: true
  })
], AuthorizationList.prototype, "bootPatchLevel", undefined);
__decorate([
  AsnProp({
    context: 720,
    type: AsnPropTypes.Null,
    optional: true
  })
], AuthorizationList.prototype, "deviceUniqueAttestation", undefined);
__decorate([
  AsnProp({
    context: 723,
    type: OctetString2,
    optional: true
  })
], AuthorizationList.prototype, "attestationIdSecondImei", undefined);
__decorate([
  AsnProp({
    context: 724,
    type: OctetString2,
    optional: true
  })
], AuthorizationList.prototype, "moduleHash", undefined);
var SecurityLevel;
(function(SecurityLevel2) {
  SecurityLevel2[SecurityLevel2["software"] = 0] = "software";
  SecurityLevel2[SecurityLevel2["trustedEnvironment"] = 1] = "trustedEnvironment";
  SecurityLevel2[SecurityLevel2["strongBox"] = 2] = "strongBox";
})(SecurityLevel || (SecurityLevel = {}));
var Version3;
(function(Version4) {
  Version4[Version4["KM2"] = 1] = "KM2";
  Version4[Version4["KM3"] = 2] = "KM3";
  Version4[Version4["KM4"] = 3] = "KM4";
  Version4[Version4["KM4_1"] = 4] = "KM4_1";
  Version4[Version4["keyMint1"] = 100] = "keyMint1";
  Version4[Version4["keyMint2"] = 200] = "keyMint2";
  Version4[Version4["keyMint3"] = 300] = "keyMint3";
  Version4[Version4["keyMint4"] = 400] = "keyMint4";
})(Version3 || (Version3 = {}));

class KeyDescription {
  attestationVersion = Version3.KM4;
  attestationSecurityLevel = SecurityLevel.software;
  keymasterVersion = 0;
  keymasterSecurityLevel = SecurityLevel.software;
  attestationChallenge = new OctetString2;
  uniqueId = new OctetString2;
  softwareEnforced = new AuthorizationList;
  teeEnforced = new AuthorizationList;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], KeyDescription.prototype, "attestationVersion", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Enumerated })
], KeyDescription.prototype, "attestationSecurityLevel", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], KeyDescription.prototype, "keymasterVersion", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Enumerated })
], KeyDescription.prototype, "keymasterSecurityLevel", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], KeyDescription.prototype, "attestationChallenge", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], KeyDescription.prototype, "uniqueId", undefined);
__decorate([
  AsnProp({ type: AuthorizationList })
], KeyDescription.prototype, "softwareEnforced", undefined);
__decorate([
  AsnProp({ type: AuthorizationList })
], KeyDescription.prototype, "teeEnforced", undefined);

class KeyMintKeyDescription {
  attestationVersion = Version3.keyMint4;
  attestationSecurityLevel = SecurityLevel.software;
  keyMintVersion = 0;
  keyMintSecurityLevel = SecurityLevel.software;
  attestationChallenge = new OctetString2;
  uniqueId = new OctetString2;
  softwareEnforced = new AuthorizationList;
  hardwareEnforced = new AuthorizationList;
  constructor(params = {}) {
    Object.assign(this, params);
  }
  toLegacyKeyDescription() {
    return new KeyDescription({
      attestationVersion: this.attestationVersion,
      attestationSecurityLevel: this.attestationSecurityLevel,
      keymasterVersion: this.keyMintVersion,
      keymasterSecurityLevel: this.keyMintSecurityLevel,
      attestationChallenge: this.attestationChallenge,
      uniqueId: this.uniqueId,
      softwareEnforced: this.softwareEnforced,
      teeEnforced: this.hardwareEnforced
    });
  }
  static fromLegacyKeyDescription(keyDesc) {
    return new KeyMintKeyDescription({
      attestationVersion: keyDesc.attestationVersion,
      attestationSecurityLevel: keyDesc.attestationSecurityLevel,
      keyMintVersion: keyDesc.keymasterVersion,
      keyMintSecurityLevel: keyDesc.keymasterSecurityLevel,
      attestationChallenge: keyDesc.attestationChallenge,
      uniqueId: keyDesc.uniqueId,
      softwareEnforced: keyDesc.softwareEnforced,
      hardwareEnforced: keyDesc.teeEnforced
    });
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], KeyMintKeyDescription.prototype, "attestationVersion", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Enumerated })
], KeyMintKeyDescription.prototype, "attestationSecurityLevel", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], KeyMintKeyDescription.prototype, "keyMintVersion", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Enumerated })
], KeyMintKeyDescription.prototype, "keyMintSecurityLevel", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], KeyMintKeyDescription.prototype, "attestationChallenge", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], KeyMintKeyDescription.prototype, "uniqueId", undefined);
__decorate([
  AsnProp({ type: AuthorizationList })
], KeyMintKeyDescription.prototype, "softwareEnforced", undefined);
__decorate([
  AsnProp({ type: AuthorizationList })
], KeyMintKeyDescription.prototype, "hardwareEnforced", undefined);
// node_modules/@peculiar/asn1-android/build/es2015/nonstandard.js
var NonStandardAuthorizationList_1;
var NonStandardAuthorization = class NonStandardAuthorization2 extends AuthorizationList {
};
NonStandardAuthorization = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], NonStandardAuthorization);
var NonStandardAuthorizationList = NonStandardAuthorizationList_1 = class NonStandardAuthorizationList2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, NonStandardAuthorizationList_1.prototype);
  }
  findProperty(key) {
    const prop = this.find((o) => o[key] !== undefined);
    if (prop) {
      return prop[key];
    }
    return;
  }
};
NonStandardAuthorizationList = NonStandardAuthorizationList_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: NonStandardAuthorization
  })
], NonStandardAuthorizationList);
class NonStandardKeyDescription {
  attestationVersion = Version3.KM4;
  attestationSecurityLevel = SecurityLevel.software;
  keymasterVersion = 0;
  keymasterSecurityLevel = SecurityLevel.software;
  attestationChallenge = new OctetString2;
  uniqueId = new OctetString2;
  softwareEnforced = new NonStandardAuthorizationList;
  teeEnforced = new NonStandardAuthorizationList;
  get keyMintVersion() {
    return this.keymasterVersion;
  }
  set keyMintVersion(value) {
    this.keymasterVersion = value;
  }
  get keyMintSecurityLevel() {
    return this.keymasterSecurityLevel;
  }
  set keyMintSecurityLevel(value) {
    this.keymasterSecurityLevel = value;
  }
  get hardwareEnforced() {
    return this.teeEnforced;
  }
  set hardwareEnforced(value) {
    this.teeEnforced = value;
  }
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], NonStandardKeyDescription.prototype, "attestationVersion", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Enumerated })
], NonStandardKeyDescription.prototype, "attestationSecurityLevel", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], NonStandardKeyDescription.prototype, "keymasterVersion", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Enumerated })
], NonStandardKeyDescription.prototype, "keymasterSecurityLevel", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], NonStandardKeyDescription.prototype, "attestationChallenge", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], NonStandardKeyDescription.prototype, "uniqueId", undefined);
__decorate([
  AsnProp({ type: NonStandardAuthorizationList })
], NonStandardKeyDescription.prototype, "softwareEnforced", undefined);
__decorate([
  AsnProp({ type: NonStandardAuthorizationList })
], NonStandardKeyDescription.prototype, "teeEnforced", undefined);
var NonStandardKeyMintKeyDescription = class NonStandardKeyMintKeyDescription2 extends NonStandardKeyDescription {
  constructor(params = {}) {
    if ("keymasterVersion" in params && !("keyMintVersion" in params)) {
      params.keyMintVersion = params.keymasterVersion;
    }
    if ("keymasterSecurityLevel" in params && !("keyMintSecurityLevel" in params)) {
      params.keyMintSecurityLevel = params.keymasterSecurityLevel;
    }
    if ("teeEnforced" in params && !("hardwareEnforced" in params)) {
      params.hardwareEnforced = params.teeEnforced;
    }
    super(params);
  }
};
NonStandardKeyMintKeyDescription = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], NonStandardKeyMintKeyDescription);
// node_modules/@peculiar/asn1-android/build/es2015/attestation.js
class AttestationPackageInfo {
  packageName;
  version;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.OctetString })
], AttestationPackageInfo.prototype, "packageName", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], AttestationPackageInfo.prototype, "version", undefined);

class AttestationApplicationId {
  packageInfos;
  signatureDigests;
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AttestationPackageInfo,
    repeated: "set"
  })
], AttestationApplicationId.prototype, "packageInfos", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.OctetString,
    repeated: "set"
  })
], AttestationApplicationId.prototype, "signatureDigests", undefined);
// node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationAndroidKey.js
async function verifyAttestationAndroidKey(options) {
  const { authData, clientDataHash, attStmt, credentialPublicKey, aaguid, rootCertificates } = options;
  const x5c = attStmt.get("x5c");
  const sig = attStmt.get("sig");
  const alg = attStmt.get("alg");
  if (!x5c) {
    throw new Error("No attestation certificate provided in attestation statement (Android Key)");
  }
  if (!sig) {
    throw new Error("No attestation signature provided in attestation statement (Android Key)");
  }
  if (!alg) {
    throw new Error(`Attestation statement did not contain alg (Android Key)`);
  }
  if (!isCOSEAlg(alg)) {
    throw new Error(`Attestation statement contained invalid alg ${alg} (Android Key)`);
  }
  const parsedCert = AsnParser.parse(x5c[0], Certificate);
  const parsedCertPubKey = new Uint8Array(parsedCert.tbsCertificate.subjectPublicKeyInfo.subjectPublicKey);
  const credPubKeyPKCS = convertCOSEtoPKCS(credentialPublicKey);
  if (!exports_isoUint8Array.areEqual(credPubKeyPKCS, parsedCertPubKey)) {
    throw new Error("Credential public key does not equal leaf cert public key (Android Key)");
  }
  const extKeyStore = parsedCert.tbsCertificate.extensions?.find((ext) => ext.extnID === id_ce_keyDescription);
  if (!extKeyStore) {
    throw new Error("Certificate did not contain extKeyStore (Android Key)");
  }
  const parsedExtKeyStore = AsnParser.parse(extKeyStore.extnValue, KeyDescription);
  const { attestationChallenge, teeEnforced, softwareEnforced } = parsedExtKeyStore;
  if (!exports_isoUint8Array.areEqual(new Uint8Array(attestationChallenge.buffer), clientDataHash)) {
    throw new Error("Attestation challenge was not equal to client data hash (Android Key)");
  }
  if (teeEnforced.allApplications !== undefined) {
    throw new Error('teeEnforced contained "allApplications [600]" tag (Android Key)');
  }
  if (softwareEnforced.allApplications !== undefined) {
    throw new Error('teeEnforced contained "allApplications [600]" tag (Android Key)');
  }
  const statement = await MetadataService.getStatement(aaguid);
  if (statement) {
    try {
      await verifyAttestationWithMetadata({
        statement,
        credentialPublicKey,
        x5c,
        attestationStatementAlg: alg
      });
    } catch (err) {
      const _err = err;
      throw new Error(`${_err.message} (Android Key)`, { cause: _err });
    }
  } else {
    const x5cNoRootPEM = x5c.slice(0, -1).map(convertCertBufferToPEM);
    const x5cRootPEM = x5c.slice(-1).map(convertCertBufferToPEM);
    try {
      await validateCertificatePath(x5cNoRootPEM, x5cRootPEM);
    } catch (err) {
      const _err = err;
      throw new Error(`${_err.message} (Android Key)`, { cause: _err });
    }
    if (rootCertificates.length > 0 && rootCertificates.indexOf(x5cRootPEM[0]) < 0) {
      throw new Error("x5c root certificate was not a known root certificate (Android Key)");
    }
  }
  const signatureBase = exports_isoUint8Array.concat([authData, clientDataHash]);
  return verifySignature({
    signature: sig,
    data: signatureBase,
    x509Certificate: x5c[0],
    hashAlgorithm: alg
  });
}

// node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationApple.js
async function verifyAttestationApple(options) {
  const { attStmt, authData, clientDataHash, credentialPublicKey, rootCertificates } = options;
  const x5c = attStmt.get("x5c");
  if (!x5c) {
    throw new Error("No attestation certificate provided in attestation statement (Apple)");
  }
  try {
    await validateCertificatePath(x5c.map(convertCertBufferToPEM), rootCertificates);
  } catch (err) {
    const _err = err;
    throw new Error(`${_err.message} (Apple)`);
  }
  const parsedCredCert = AsnParser.parse(x5c[0], Certificate);
  const { extensions: extensions2, subjectPublicKeyInfo } = parsedCredCert.tbsCertificate;
  if (!extensions2) {
    throw new Error("credCert missing extensions (Apple)");
  }
  const extCertNonce = extensions2.find((ext) => ext.extnID === "1.2.840.113635.100.8.2");
  if (!extCertNonce) {
    throw new Error('credCert missing "1.2.840.113635.100.8.2" extension (Apple)');
  }
  const nonceToHash = exports_isoUint8Array.concat([authData, clientDataHash]);
  const nonce = await toHash(nonceToHash);
  const extNonce = new Uint8Array(extCertNonce.extnValue.buffer).slice(6);
  if (!exports_isoUint8Array.areEqual(nonce, extNonce)) {
    throw new Error(`credCert nonce was not expected value (Apple)`);
  }
  const credPubKeyPKCS = convertCOSEtoPKCS(credentialPublicKey);
  const credCertSubjectPublicKey = new Uint8Array(subjectPublicKeyInfo.subjectPublicKey);
  if (!exports_isoUint8Array.areEqual(credPubKeyPKCS, credCertSubjectPublicKey)) {
    throw new Error("Credential public key does not equal credCert public key (Apple)");
  }
  return true;
}

// node_modules/@simplewebauthn/server/esm/registration/verifyRegistrationResponse.js
async function verifyRegistrationResponse(options) {
  const { response, expectedChallenge, expectedOrigin, expectedRPID, expectedType, requireUserPresence = true, requireUserVerification = true, supportedAlgorithmIDs = supportedCOSEAlgorithmIdentifiers, attestationSafetyNetEnforceCTSCheck = true } = options;
  const { id: id2, rawId, type: credentialType, response: attestationResponse } = response;
  if (!id2) {
    throw new Error("Missing credential ID");
  }
  if (id2 !== rawId) {
    throw new Error("Credential ID was not base64url-encoded");
  }
  if (credentialType !== "public-key") {
    throw new Error(`Unexpected credential type ${credentialType}, expected "public-key"`);
  }
  const clientDataJSON = decodeClientDataJSON(attestationResponse.clientDataJSON);
  const { type, origin, challenge, tokenBinding } = clientDataJSON;
  if (Array.isArray(expectedType)) {
    if (!expectedType.includes(type)) {
      const joinedExpectedType = expectedType.join(", ");
      throw new Error(`Unexpected registration response type "${type}", expected one of: ${joinedExpectedType}`);
    }
  } else if (expectedType) {
    if (type !== expectedType) {
      throw new Error(`Unexpected registration response type "${type}", expected "${expectedType}"`);
    }
  } else if (type !== "webauthn.create") {
    throw new Error(`Unexpected registration response type: ${type}`);
  }
  if (typeof expectedChallenge === "function") {
    if (!await expectedChallenge(challenge)) {
      throw new Error(`Custom challenge verifier returned false for registration response challenge "${challenge}"`);
    }
  } else if (challenge !== expectedChallenge) {
    throw new Error(`Unexpected registration response challenge "${challenge}", expected "${expectedChallenge}"`);
  }
  if (Array.isArray(expectedOrigin)) {
    if (!expectedOrigin.includes(origin)) {
      throw new Error(`Unexpected registration response origin "${origin}", expected one of: ${expectedOrigin.join(", ")}`);
    }
  } else {
    if (origin !== expectedOrigin) {
      throw new Error(`Unexpected registration response origin "${origin}", expected "${expectedOrigin}"`);
    }
  }
  if (tokenBinding) {
    if (typeof tokenBinding !== "object") {
      throw new Error(`Unexpected value for TokenBinding "${tokenBinding}"`);
    }
    if (["present", "supported", "not-supported"].indexOf(tokenBinding.status) < 0) {
      throw new Error(`Unexpected tokenBinding.status value of "${tokenBinding.status}"`);
    }
  }
  const attestationObject = exports_isoBase64URL.toBuffer(attestationResponse.attestationObject);
  const decodedAttestationObject = decodeAttestationObject(attestationObject);
  const fmt = decodedAttestationObject.get("fmt");
  const authData = decodedAttestationObject.get("authData");
  const attStmt = decodedAttestationObject.get("attStmt");
  const parsedAuthData = parseAuthenticatorData(authData);
  const { aaguid, rpIdHash, flags, credentialID, counter, credentialPublicKey, extensionsData } = parsedAuthData;
  let matchedRPID;
  if (expectedRPID) {
    let expectedRPIDs = [];
    if (typeof expectedRPID === "string") {
      expectedRPIDs = [expectedRPID];
    } else {
      expectedRPIDs = expectedRPID;
    }
    matchedRPID = await matchExpectedRPID(rpIdHash, expectedRPIDs);
  }
  if (requireUserPresence && !flags.up) {
    throw new Error("User presence was required, but user was not present");
  }
  if (requireUserVerification && !flags.uv) {
    throw new Error("User verification was required, but user could not be verified");
  }
  if (!credentialID) {
    throw new Error("No credential ID was provided by authenticator");
  }
  if (!credentialPublicKey) {
    throw new Error("No public key was provided by authenticator");
  }
  if (!aaguid) {
    throw new Error("No AAGUID was present during registration");
  }
  const decodedPublicKey = decodeCredentialPublicKey(credentialPublicKey);
  const alg = decodedPublicKey.get(COSEKEYS.alg);
  if (typeof alg !== "number") {
    throw new Error("Credential public key was missing numeric alg");
  }
  if (!supportedAlgorithmIDs.includes(alg)) {
    const supported = supportedAlgorithmIDs.join(", ");
    throw new Error(`Unexpected public key alg "${alg}", expected one of "${supported}"`);
  }
  const clientDataHash = await toHash(exports_isoBase64URL.toBuffer(attestationResponse.clientDataJSON));
  const rootCertificates = SettingsService.getRootCertificates({
    identifier: fmt
  });
  const verifierOpts = {
    aaguid,
    attStmt,
    authData,
    clientDataHash,
    credentialID,
    credentialPublicKey,
    rootCertificates,
    rpIdHash,
    attestationSafetyNetEnforceCTSCheck
  };
  let verified = false;
  if (fmt === "fido-u2f") {
    verified = await verifyAttestationFIDOU2F(verifierOpts);
  } else if (fmt === "packed") {
    verified = await verifyAttestationPacked(verifierOpts);
  } else if (fmt === "android-safetynet") {
    verified = await verifyAttestationAndroidSafetyNet(verifierOpts);
  } else if (fmt === "android-key") {
    verified = await verifyAttestationAndroidKey(verifierOpts);
  } else if (fmt === "tpm") {
    verified = await verifyAttestationTPM(verifierOpts);
  } else if (fmt === "apple") {
    verified = await verifyAttestationApple(verifierOpts);
  } else if (fmt === "none") {
    if (attStmt.size > 0) {
      throw new Error("None attestation had unexpected attestation statement");
    }
    verified = true;
  } else {
    throw new Error(`Unsupported Attestation Format: ${fmt}`);
  }
  if (!verified) {
    return { verified: false };
  }
  const { credentialDeviceType, credentialBackedUp } = parseBackupFlags(flags);
  return {
    verified: true,
    registrationInfo: {
      fmt,
      aaguid: convertAAGUIDToString(aaguid),
      credentialType,
      credential: {
        id: exports_isoBase64URL.fromBuffer(credentialID),
        publicKey: credentialPublicKey,
        counter,
        transports: response.response.transports
      },
      attestationObject,
      userVerified: flags.uv,
      credentialDeviceType,
      credentialBackedUp,
      origin: clientDataJSON.origin,
      rpID: matchedRPID,
      authenticatorExtensionResults: extensionsData
    }
  };
}
// node_modules/@simplewebauthn/server/esm/authentication/generateAuthenticationOptions.js
async function generateAuthenticationOptions(options) {
  const { allowCredentials, challenge = await generateChallenge2(), timeout = 60000, userVerification = "preferred", extensions: extensions2, rpID } = options;
  let _challenge = challenge;
  if (typeof _challenge === "string") {
    _challenge = exports_isoUint8Array.fromUTF8String(_challenge);
  }
  return {
    rpId: rpID,
    challenge: exports_isoBase64URL.fromBuffer(_challenge),
    allowCredentials: allowCredentials?.map((cred) => {
      if (!exports_isoBase64URL.isBase64URL(cred.id)) {
        throw new Error(`allowCredential id "${cred.id}" is not a valid base64url string`);
      }
      return {
        ...cred,
        id: exports_isoBase64URL.trimPadding(cred.id),
        type: "public-key"
      };
    }),
    timeout,
    userVerification,
    extensions: extensions2
  };
}
// node_modules/@simplewebauthn/server/esm/authentication/verifyAuthenticationResponse.js
async function verifyAuthenticationResponse(options) {
  const { response, expectedChallenge, expectedOrigin, expectedRPID, expectedType, credential, requireUserVerification = true, advancedFIDOConfig } = options;
  const { id: id2, rawId, type: credentialType, response: assertionResponse } = response;
  if (!id2) {
    throw new Error("Missing credential ID");
  }
  if (id2 !== rawId) {
    throw new Error("Credential ID was not base64url-encoded");
  }
  if (credentialType !== "public-key") {
    throw new Error(`Unexpected credential type ${credentialType}, expected "public-key"`);
  }
  if (!response) {
    throw new Error("Credential missing response");
  }
  if (typeof assertionResponse?.clientDataJSON !== "string") {
    throw new Error("Credential response clientDataJSON was not a string");
  }
  const clientDataJSON = decodeClientDataJSON(assertionResponse.clientDataJSON);
  const { type, origin, challenge, tokenBinding } = clientDataJSON;
  if (Array.isArray(expectedType)) {
    if (!expectedType.includes(type)) {
      const joinedExpectedType = expectedType.join(", ");
      throw new Error(`Unexpected authentication response type "${type}", expected one of: ${joinedExpectedType}`);
    }
  } else if (expectedType) {
    if (type !== expectedType) {
      throw new Error(`Unexpected authentication response type "${type}", expected "${expectedType}"`);
    }
  } else if (type !== "webauthn.get") {
    throw new Error(`Unexpected authentication response type: ${type}`);
  }
  if (typeof expectedChallenge === "function") {
    if (!await expectedChallenge(challenge)) {
      throw new Error(`Custom challenge verifier returned false for registration response challenge "${challenge}"`);
    }
  } else if (challenge !== expectedChallenge) {
    throw new Error(`Unexpected authentication response challenge "${challenge}", expected "${expectedChallenge}"`);
  }
  if (Array.isArray(expectedOrigin)) {
    if (!expectedOrigin.includes(origin)) {
      const joinedExpectedOrigin = expectedOrigin.join(", ");
      throw new Error(`Unexpected authentication response origin "${origin}", expected one of: ${joinedExpectedOrigin}`);
    }
  } else {
    if (origin !== expectedOrigin) {
      throw new Error(`Unexpected authentication response origin "${origin}", expected "${expectedOrigin}"`);
    }
  }
  if (!exports_isoBase64URL.isBase64URL(assertionResponse.authenticatorData)) {
    throw new Error("Credential response authenticatorData was not a base64url string");
  }
  if (!exports_isoBase64URL.isBase64URL(assertionResponse.signature)) {
    throw new Error("Credential response signature was not a base64url string");
  }
  if (assertionResponse.userHandle && typeof assertionResponse.userHandle !== "string") {
    throw new Error("Credential response userHandle was not a string");
  }
  if (tokenBinding) {
    if (typeof tokenBinding !== "object") {
      throw new Error("ClientDataJSON tokenBinding was not an object");
    }
    if (["present", "supported", "notSupported"].indexOf(tokenBinding.status) < 0) {
      throw new Error(`Unexpected tokenBinding status ${tokenBinding.status}`);
    }
  }
  const authDataBuffer = exports_isoBase64URL.toBuffer(assertionResponse.authenticatorData);
  const parsedAuthData = parseAuthenticatorData(authDataBuffer);
  const { rpIdHash, flags, counter, extensionsData } = parsedAuthData;
  let expectedRPIDs = [];
  if (typeof expectedRPID === "string") {
    expectedRPIDs = [expectedRPID];
  } else {
    expectedRPIDs = expectedRPID;
  }
  const matchedRPID = await matchExpectedRPID(rpIdHash, expectedRPIDs);
  if (advancedFIDOConfig !== undefined) {
    const { userVerification: fidoUserVerification } = advancedFIDOConfig;
    if (fidoUserVerification === "required") {
      if (!flags.uv) {
        throw new Error("User verification required, but user could not be verified");
      }
    } else if (fidoUserVerification === "preferred" || fidoUserVerification === "discouraged") {}
  } else {
    if (!flags.up) {
      throw new Error("User not present during authentication");
    }
    if (requireUserVerification && !flags.uv) {
      throw new Error("User verification required, but user could not be verified");
    }
  }
  const clientDataHash = await toHash(exports_isoBase64URL.toBuffer(assertionResponse.clientDataJSON));
  const signatureBase = exports_isoUint8Array.concat([authDataBuffer, clientDataHash]);
  const signature = exports_isoBase64URL.toBuffer(assertionResponse.signature);
  if ((counter > 0 || credential.counter > 0) && counter <= credential.counter) {
    throw new Error(`Response counter value ${counter} was lower than expected ${credential.counter}`);
  }
  const { credentialDeviceType, credentialBackedUp } = parseBackupFlags(flags);
  const toReturn = {
    verified: await verifySignature({
      signature,
      data: signatureBase,
      credentialPublicKey: credential.publicKey
    }),
    authenticationInfo: {
      newCounter: counter,
      credentialID: credential.id,
      userVerified: flags.uv,
      credentialDeviceType,
      credentialBackedUp,
      authenticatorExtensionResults: extensionsData,
      origin: clientDataJSON.origin,
      rpID: matchedRPID
    }
  };
  return toReturn;
}
// src/server/passkey-auth.ts
var SESSION_COOKIE = "workflow_manager_session";
var CHALLENGE_TTL_MS = 5 * 60 * 1000;
var SETUP_TTL_MS = 15 * 60 * 1000;
var SESSION_TTL_MS = 12 * 60 * 60 * 1000;
function randomToken(bytes = 32) {
  return Buffer.from(crypto.getRandomValues(new Uint8Array(bytes))).toString("base64url");
}
function sha2562(value) {
  return new Bun.CryptoHasher("sha256").update(value).digest("hex");
}
function cleanLabel(value, label, max = 80) {
  if (typeof value !== "string" || !value.trim()) {
    throw new AppError(`${label}\uC744(\uB97C) \uC785\uB825\uD574 \uC8FC\uC138\uC694.`);
  }
  const cleaned = value.trim();
  if (cleaned.length > max) {
    throw new AppError(`${label}\uC774(\uAC00) \uB108\uBB34 \uAE41\uB2C8\uB2E4.`);
  }
  return cleaned;
}
function parseCookie(request, name2) {
  const cookie = request.headers.get("cookie");
  if (!cookie)
    return null;
  for (const part of cookie.split(";")) {
    const separator = part.indexOf("=");
    if (separator < 0)
      continue;
    if (part.slice(0, separator).trim() === name2) {
      return part.slice(separator + 1).trim();
    }
  }
  return null;
}
function publicPasskey(credential) {
  return {
    id: credential.id,
    name: credential.name,
    deviceType: credential.deviceType,
    backedUp: credential.backedUp,
    transports: credential.transports,
    createdAt: credential.createdAt,
    lastUsedAt: credential.lastUsedAt
  };
}
function transportList(value) {
  const allowed = new Set([
    "ble",
    "cable",
    "hybrid",
    "internal",
    "nfc",
    "smart-card",
    "usb"
  ]);
  return value.filter((item) => allowed.has(item));
}
function validatePasskeyConfig(config) {
  let origin;
  try {
    origin = new URL(config.expectedOrigin);
  } catch {
    throw new Error("WORKFLOW_MANAGER_ORIGIN\uC740 \uC62C\uBC14\uB978 URL\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.");
  }
  if (origin.origin !== config.expectedOrigin || origin.username || origin.password) {
    throw new Error("WORKFLOW_MANAGER_ORIGIN\uC740 \uACBD\uB85C\uAC00 \uC5C6\uB294 \uC815\uD655\uD55C origin\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.");
  }
  if (origin.protocol !== "https:" && origin.hostname !== "localhost") {
    throw new Error("\uD328\uC2A4\uD0A4 origin\uC740 HTTPS\uC5EC\uC57C \uD558\uBA70, HTTP\uB294 localhost\uC5D0\uC11C\uB9CC \uD5C8\uC6A9\uB429\uB2C8\uB2E4.");
  }
  if (!config.rpID || config.rpID.includes("://") || config.rpID.includes(":") || origin.hostname !== config.rpID && !origin.hostname.endsWith(`.${config.rpID}`)) {
    throw new Error("WORKFLOW_MANAGER_RP_ID\uB294 origin \uD638\uC2A4\uD2B8\uC640 \uAC19\uAC70\uB098 \uADF8 \uC0C1\uC704 \uB3C4\uBA54\uC778\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.");
  }
  return {
    ...config,
    expectedOrigin: origin.origin,
    secureCookie: origin.protocol === "https:"
  };
}

class PasskeyAuth {
  config;
  db;
  registrations = new Map;
  authentications = new Map;
  setupTokenValue;
  setupTokenHash;
  setupExpiresAt = 0;
  constructor(db, config, options = {}) {
    this.db = db;
    this.config = validatePasskeyConfig(config);
    if (!db.hasAuthUser()) {
      this.setupTokenValue = options.setupToken ?? randomToken();
      this.setupTokenHash = sha2562(this.setupTokenValue);
      this.setupExpiresAt = (options.now ?? Date.now()) + SETUP_TTL_MS;
    } else {
      this.setupTokenValue = null;
      this.setupTokenHash = null;
    }
    this.db.deleteExpiredAuthSessions();
  }
  get setupToken() {
    return this.setupTokenValue;
  }
  get setupTokenExpiresAt() {
    return this.setupTokenValue ? new Date(this.setupExpiresAt).toISOString() : null;
  }
  purgeChallenges() {
    const timestamp2 = Date.now();
    for (const [flowId, flow] of this.registrations) {
      if (flow.expiresAt <= timestamp2)
        this.registrations.delete(flowId);
    }
    for (const [flowId, flow] of this.authentications) {
      if (flow.expiresAt <= timestamp2)
        this.authentications.delete(flowId);
    }
  }
  async verifyRegistration(response, challenge) {
    try {
      return await verifyRegistrationResponse({
        response,
        expectedChallenge: challenge,
        expectedOrigin: this.config.expectedOrigin,
        expectedRPID: this.config.rpID,
        requireUserVerification: true
      });
    } catch {
      throw new AppError("\uD328\uC2A4\uD0A4 \uC751\uB2F5\uC744 \uD655\uC778\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB4F1\uB85D\uC744 \uB2E4\uC2DC \uC2DC\uC791\uD574 \uC8FC\uC138\uC694.", 400, "verification_failed");
    }
  }
  async verifyAuthentication(response, challenge, credential) {
    try {
      return await verifyAuthenticationResponse({
        response,
        expectedChallenge: challenge,
        expectedOrigin: this.config.expectedOrigin,
        expectedRPID: this.config.rpID,
        credential: {
          id: credential.id,
          publicKey: credential.publicKey,
          counter: credential.counter,
          transports: transportList(credential.transports)
        },
        requireUserVerification: true
      });
    } catch {
      throw new AppError("\uD328\uC2A4\uD0A4 \uC751\uB2F5\uC744 \uD655\uC778\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB85C\uADF8\uC778\uC744 \uB2E4\uC2DC \uC2DC\uC791\uD574 \uC8FC\uC138\uC694.", 401, "verification_failed");
    }
  }
  assertSetupToken(token) {
    if (this.db.hasAuthUser()) {
      throw new AppError("\uAD00\uB9AC\uC790 \uC124\uC815\uC774 \uC774\uBBF8 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", 409, "setup_complete");
    }
    if (typeof token !== "string" || !this.setupTokenHash || Date.now() >= this.setupExpiresAt || sha2562(token) !== this.setupTokenHash) {
      throw new AppError("\uCD5C\uCD08 \uC124\uC815 \uD1A0\uD070\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uAC70\uB098 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC11C\uBC84\uB97C \uB2E4\uC2DC \uC2DC\uC791\uD574 \uC8FC\uC138\uC694.", 403, "invalid_setup_token");
    }
  }
  registrationFlow(flowId) {
    this.purgeChallenges();
    if (typeof flowId !== "string") {
      throw new AppError("\uB4F1\uB85D \uD750\uB984 ID\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.");
    }
    const flow = this.registrations.get(flowId);
    this.registrations.delete(flowId);
    if (!flow) {
      throw new AppError("\uD328\uC2A4\uD0A4 \uB4F1\uB85D \uC694\uCCAD\uC774 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.", 400, "challenge_expired");
    }
    return flow;
  }
  authenticationFlow(flowId) {
    this.purgeChallenges();
    if (typeof flowId !== "string") {
      throw new AppError("\uB85C\uADF8\uC778 \uD750\uB984 ID\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.");
    }
    const flow = this.authentications.get(flowId);
    this.authentications.delete(flowId);
    if (!flow) {
      throw new AppError("\uB85C\uADF8\uC778 \uC694\uCCAD\uC774 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.", 400, "challenge_expired");
    }
    return flow;
  }
  assertTrustedOrigin(request) {
    const origin = request.headers.get("origin");
    if (origin !== this.config.expectedOrigin) {
      throw new AppError("\uD5C8\uC6A9\uB41C \uC11C\uBE44\uC2A4 \uC8FC\uC18C\uC5D0\uC11C \uBCF4\uB0B8 \uC694\uCCAD\uC774 \uC544\uB2D9\uB2C8\uB2E4.", 403, "origin_forbidden");
    }
  }
  sessionFromRequest(request) {
    const token = parseCookie(request, SESSION_COOKIE);
    if (!token)
      return null;
    const session = this.db.getAuthSession(sha2562(token));
    if (!session)
      return null;
    const user = this.db.getAuthUserById(session.userId);
    return user ? { session, user } : null;
  }
  requireSession(request) {
    const context = this.sessionFromRequest(request);
    if (!context) {
      throw new AppError("\uD328\uC2A4\uD0A4\uB85C \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694.", 401, "unauthorized");
    }
    return context;
  }
  assertCsrf(request, context) {
    this.assertTrustedOrigin(request);
    if (request.headers.get("x-csrf-token") !== context.session.csrfToken) {
      throw new AppError("\uC694\uCCAD \uBCF4\uC548 \uD1A0\uD070\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694.", 403, "csrf_forbidden");
    }
  }
  status(request) {
    const context = this.sessionFromRequest(request);
    return {
      configured: this.db.hasAuthUser(),
      authenticated: Boolean(context),
      user: context ? { id: context.user.id, displayName: context.user.displayName } : null,
      csrfToken: context?.session.csrfToken ?? null
    };
  }
  async beginSetup(input) {
    this.assertSetupToken(input.setupToken);
    const displayName = cleanLabel(input.displayName, "\uAD00\uB9AC\uC790 \uC774\uB984");
    const passkeyName = cleanLabel(input.passkeyName ?? "\uCCAB \uBC88\uC9F8 \uD328\uC2A4\uD0A4", "\uD328\uC2A4\uD0A4 \uC774\uB984");
    const userID = crypto.getRandomValues(new Uint8Array(32));
    const options = await generateRegistrationOptions({
      rpName: this.config.rpName,
      rpID: this.config.rpID,
      userName: "admin",
      userDisplayName: displayName,
      userID,
      attestationType: "none",
      timeout: 60000,
      authenticatorSelection: {
        residentKey: "required",
        userVerification: "required"
      }
    });
    const flowId = randomToken(24);
    this.registrations.set(flowId, {
      challenge: options.challenge,
      expiresAt: Date.now() + CHALLENGE_TTL_MS,
      displayName,
      passkeyName,
      webauthnUserId: options.user.id,
      userId: null,
      setup: true
    });
    return { flowId, options };
  }
  async finishSetup(input) {
    this.assertSetupToken(input.setupToken);
    const flow = this.registrationFlow(input.flowId);
    if (!flow.setup) {
      throw new AppError("\uC62C\uBC14\uB978 \uCD5C\uCD08 \uB4F1\uB85D \uC694\uCCAD\uC774 \uC544\uB2D9\uB2C8\uB2E4.");
    }
    const verification = await this.verifyRegistration(input.response, flow.challenge);
    if (!verification.verified) {
      throw new AppError("\uD328\uC2A4\uD0A4\uB97C \uD655\uC778\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.", 400, "verification_failed");
    }
    const info = verification.registrationInfo;
    const response = input.response;
    const result = this.db.createAuthUserWithPasskey({
      username: "admin",
      displayName: flow.displayName,
      webauthnUserId: flow.webauthnUserId
    }, {
      id: info.credential.id,
      publicKey: info.credential.publicKey,
      counter: info.credential.counter,
      deviceType: info.credentialDeviceType,
      backedUp: info.credentialBackedUp,
      transports: info.credential.transports ?? transportList(response.response.transports ?? []),
      name: flow.passkeyName
    });
    this.setupTokenValue = null;
    this.setupTokenHash = null;
    return {
      user: {
        id: result.user.id,
        displayName: result.user.displayName
      },
      session: this.issueSession(result.user.id)
    };
  }
  async beginLogin() {
    if (!this.db.hasAuthUser()) {
      throw new AppError("\uBA3C\uC800 \uAD00\uB9AC\uC790 \uD328\uC2A4\uD0A4\uB97C \uB4F1\uB85D\uD574 \uC8FC\uC138\uC694.", 409, "setup_required");
    }
    const options = await generateAuthenticationOptions({
      rpID: this.config.rpID,
      timeout: 60000,
      userVerification: "required"
    });
    const flowId = randomToken(24);
    this.authentications.set(flowId, {
      challenge: options.challenge,
      expiresAt: Date.now() + CHALLENGE_TTL_MS
    });
    return { flowId, options };
  }
  async finishLogin(input) {
    const flow = this.authenticationFlow(input.flowId);
    const response = input.response;
    const credential = this.db.getPasskey(response?.id);
    if (!credential) {
      throw new AppError("\uB4F1\uB85D\uB418\uC9C0 \uC54A\uC740 \uD328\uC2A4\uD0A4\uC785\uB2C8\uB2E4.", 401, "unknown_passkey");
    }
    const user = this.db.getAuthUserById(credential.userId);
    if (!user) {
      throw new AppError("\uAD00\uB9AC\uC790\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", 401, "unauthorized");
    }
    if (response.response.userHandle && response.response.userHandle !== user.webauthnUserId) {
      throw new AppError("\uD328\uC2A4\uD0A4 \uC0AC\uC6A9\uC790 \uC815\uBCF4\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", 401, "verification_failed");
    }
    const verification = await this.verifyAuthentication(response, flow.challenge, credential);
    if (!verification.verified) {
      throw new AppError("\uD328\uC2A4\uD0A4\uB97C \uD655\uC778\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.", 401, "verification_failed");
    }
    this.db.updatePasskeyUsage(credential.id, {
      counter: verification.authenticationInfo.newCounter,
      deviceType: verification.authenticationInfo.credentialDeviceType,
      backedUp: verification.authenticationInfo.credentialBackedUp
    });
    return {
      user: { id: user.id, displayName: user.displayName },
      session: this.issueSession(user.id)
    };
  }
  async beginAddPasskey(context, input) {
    const passkeyName = cleanLabel(input.passkeyName, "\uD328\uC2A4\uD0A4 \uC774\uB984");
    const credentials = this.db.listPasskeys(context.user.id);
    const options = await generateRegistrationOptions({
      rpName: this.config.rpName,
      rpID: this.config.rpID,
      userName: context.user.username,
      userDisplayName: context.user.displayName,
      userID: Buffer.from(context.user.webauthnUserId, "base64url"),
      attestationType: "none",
      timeout: 60000,
      excludeCredentials: credentials.map((credential) => ({
        id: credential.id,
        transports: transportList(credential.transports)
      })),
      authenticatorSelection: {
        residentKey: "required",
        userVerification: "required"
      }
    });
    const flowId = randomToken(24);
    this.registrations.set(flowId, {
      challenge: options.challenge,
      expiresAt: Date.now() + CHALLENGE_TTL_MS,
      displayName: context.user.displayName,
      passkeyName,
      webauthnUserId: context.user.webauthnUserId,
      userId: context.user.id,
      setup: false
    });
    return { flowId, options };
  }
  async finishAddPasskey(context, input) {
    const flow = this.registrationFlow(input.flowId);
    if (flow.setup || flow.userId !== context.user.id) {
      throw new AppError("\uC62C\uBC14\uB978 \uD328\uC2A4\uD0A4 \uB4F1\uB85D \uC694\uCCAD\uC774 \uC544\uB2D9\uB2C8\uB2E4.");
    }
    const verification = await this.verifyRegistration(input.response, flow.challenge);
    if (!verification.verified) {
      throw new AppError("\uD328\uC2A4\uD0A4\uB97C \uD655\uC778\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.", 400, "verification_failed");
    }
    const info = verification.registrationInfo;
    const response = input.response;
    const passkey = this.db.addPasskey(context.user.id, {
      id: info.credential.id,
      publicKey: info.credential.publicKey,
      counter: info.credential.counter,
      deviceType: info.credentialDeviceType,
      backedUp: info.credentialBackedUp,
      transports: info.credential.transports ?? transportList(response.response.transports ?? []),
      name: flow.passkeyName
    });
    return { passkey: publicPasskey(passkey) };
  }
  listPasskeys(context) {
    return {
      passkeys: this.db.listPasskeys(context.user.id).map(publicPasskey)
    };
  }
  deletePasskey(context, credentialId) {
    this.db.deletePasskey(context.user.id, credentialId);
  }
  issueSession(userId) {
    this.db.deleteExpiredAuthSessions();
    const token = randomToken();
    const csrfToken = randomToken();
    const createdAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + SESSION_TTL_MS).toISOString();
    this.db.createAuthSession({
      tokenHash: sha2562(token),
      userId,
      csrfToken,
      createdAt,
      expiresAt
    });
    const secure = this.config.secureCookie ? "; Secure" : "";
    return {
      token,
      csrfToken,
      expiresAt,
      cookie: `${SESSION_COOKIE}=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${Math.floor(SESSION_TTL_MS / 1000)}${secure}`
    };
  }
  logout(request) {
    const token = parseCookie(request, SESSION_COOKIE);
    if (token)
      this.db.deleteAuthSession(sha2562(token));
    const secure = this.config.secureCookie ? "; Secure" : "";
    return `${SESSION_COOKIE}=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0${secure}`;
  }
}

// src/index.ts
var defaultDataDirectory = join2(process.cwd(), "data");
var defaultEnvironment = {
  WORKFLOW_MANAGER_NAME: "FlowManager",
  WORKFLOW_MANAGER_TAGLINE: "Self-hosted workflow manager",
  WORKFLOW_MANAGER_TITLE: "\uC11C\uBC84\uC758 \uBC18\uBCF5 \uC791\uC5C5\uC744 \uD55C \uD750\uB984\uC73C\uB85C.",
  WORKFLOW_MANAGER_DESCRIPTION: "\uD504\uB85C\uC81D\uD2B8\uBCC4 \uC178 \uC6CC\uD06C\uD50C\uB85C\uC6B0\uB97C \uAD6C\uC131\uD558\uACE0 \uC2E4\uD589 \uC0C1\uD0DC\uC640 \uB85C\uADF8\uB97C \uD55C\uACF3\uC5D0\uC11C \uCD94\uC801\uD558\uC138\uC694.",
  WORKFLOW_MANAGER_ACCESS_MODE: "private",
  WORKFLOW_MANAGER_DATA_DIR: defaultDataDirectory
};
var environmentFilePath = resolve2(Bun.env.WORKFLOW_MANAGER_CONFIG_FILE ?? join2(process.cwd(), ".env"));
var configuredEnvironment = readEnvironmentFile(environmentFilePath);
var environmentValue = (key) => configuredEnvironment[key] ?? Bun.env[key];
var port = Number(environmentValue("PORT") ?? 3000);
var hostname = environmentValue("HOST") ?? "0.0.0.0";
var accessMode = parseAccessMode(environmentValue("WORKFLOW_MANAGER_ACCESS_MODE"));
var dataDirectory = resolve2(environmentValue("WORKFLOW_MANAGER_DATA_DIR") ?? defaultEnvironment.WORKFLOW_MANAGER_DATA_DIR);
var publicDirectory = resolve2(environmentValue("WORKFLOW_MANAGER_PUBLIC_DIR") ?? join2(import.meta.dir, "web"));
var databasePath = resolve2(environmentValue("WORKFLOW_MANAGER_DB") ?? join2(dataDirectory, "workflow-manager.sqlite"));
var environmentSettings = new EnvironmentSettings({
  filePath: environmentFilePath,
  currentValues: {
    WORKFLOW_MANAGER_NAME: environmentValue("WORKFLOW_MANAGER_NAME") ?? defaultEnvironment.WORKFLOW_MANAGER_NAME,
    WORKFLOW_MANAGER_TAGLINE: environmentValue("WORKFLOW_MANAGER_TAGLINE") ?? defaultEnvironment.WORKFLOW_MANAGER_TAGLINE,
    WORKFLOW_MANAGER_TITLE: environmentValue("WORKFLOW_MANAGER_TITLE") ?? defaultEnvironment.WORKFLOW_MANAGER_TITLE,
    WORKFLOW_MANAGER_DESCRIPTION: environmentValue("WORKFLOW_MANAGER_DESCRIPTION") ?? defaultEnvironment.WORKFLOW_MANAGER_DESCRIPTION,
    WORKFLOW_MANAGER_ACCESS_MODE: accessMode,
    WORKFLOW_MANAGER_DATA_DIR: dataDirectory
  },
  defaultValues: defaultEnvironment
});
var db = new AppDatabase(databasePath);
var interruptedCount = db.recoverInterruptedRuns();
var runner = new WorkflowRunner(db);
var configuredPasskeyOrigin = environmentValue("WORKFLOW_MANAGER_ORIGIN");
var passkeyOrigin = configuredPasskeyOrigin ?? `http://localhost:${port}`;
var passkeyAuth = new PasskeyAuth(db, {
  rpID: environmentValue("WORKFLOW_MANAGER_RP_ID") ?? "localhost",
  rpName: environmentValue("WORKFLOW_MANAGER_RP_NAME") ?? environmentSettings.applicationSettings().name,
  expectedOrigin: passkeyOrigin
});
var app = createApp({
  db,
  runner,
  environmentSettings,
  auth: passkeyAuth,
  publicDirectory
});
var server = Bun.serve({
  port,
  hostname,
  fetch(request, server2) {
    const clientAddress = server2.requestIP(request)?.address;
    if (!isAllowedClientAddress(clientAddress, accessMode)) {
      return Response.json({
        error: {
          code: "network_forbidden",
          message: "\uC774 \uC11C\uBE44\uC2A4\uB294 \uB0B4\uBD80 \uB124\uD2B8\uC6CC\uD06C\uC5D0\uC11C\uB9CC \uC811\uADFC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
        }
      }, { status: 403 });
    }
    return app(request);
  },
  error(error) {
    console.error(error);
    return Response.json({ error: { code: "internal_error", message: "\uC11C\uBC84 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4." } }, { status: 500 });
  }
});
console.log("Workflow Manager:");
console.log(`  Local: http://localhost:${server.port}/`);
for (const url of privateNetworkUrls(server.port)) {
  console.log(`  Network: ${url}`);
}
console.log(`Access mode: ${accessMode}`);
console.log(`Data: ${databasePath}`);
console.log(`Passkey origin: ${passkeyAuth.config.expectedOrigin}`);
if (!configuredPasskeyOrigin) {
  console.warn("WORKFLOW_MANAGER_ORIGIN\uC774 \uC124\uC815\uB418\uC9C0 \uC54A\uC544 \uD328\uC2A4\uD0A4 \uC548\uB0B4 \uC8FC\uC18C\uAC00 localhost\uB85C \uC124\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
}
if (passkeyAuth.setupToken) {
  const setupUrl = new URL(passkeyAuth.config.expectedOrigin);
  setupUrl.hash = `/setup?token=${passkeyAuth.setupToken}`;
  console.log("");
  console.log("First-time passkey setup (valid for 15 minutes):");
  console.log(`  ${setupUrl.toString()}`);
}
if (interruptedCount) {
  console.log(`Recovered ${interruptedCount} interrupted run(s).`);
}
