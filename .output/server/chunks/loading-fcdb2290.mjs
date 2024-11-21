import { p as publicAssetsURL } from './renderer.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _imports_0 = "" + publicAssetsURL("img/Grusvej-logo-stor.png.png");
const _imports_1 = "" + publicAssetsURL("video/Final-loading-_screen-Grusvej.dk.mp4");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading-screen" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="logo"><video${ssrRenderAttr("src", _imports_1)} autoplay loop muted class="video"></video></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/loading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const loading = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { loading as default };
//# sourceMappingURL=loading-fcdb2290.mjs.map
