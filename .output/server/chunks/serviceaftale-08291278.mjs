import { _ as __nuxt_component_0 } from './Serviceaftaler-54f7baf4.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'vee-validate';
import 'yup';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Serviceaftaler = __nuxt_component_0;
  _push(`<!--[--><head><title> Fast serviceaftale - grusvej af kvalitet hele \xE5ret rundt. </title><meta name="description" content="Undg\xE5 besv\xE6ret med vedligehold af grusvejen eller naturstien, Grusvej.dk tilbyder en fast serviceaftale der garanterer en solid grusvej hele \xE5ret rundt. "></head><div class="">`);
  _push(ssrRenderComponent(_component_Serviceaftaler, { class: "relative" }, null, _parent));
  _push(`<img class="opacity-80 clippath1 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8" src="https://i.ibb.co/gtZq30x/Untitled-design.png" alt="Image Description"><img class="opacity-80 clippath2 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8" src="https://i.ibb.co/p1253nF/Untitled-design-1.png" alt="Image Description"></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/serviceaftale.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const serviceaftale = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { serviceaftale as default };
//# sourceMappingURL=serviceaftale-08291278.mjs.map
