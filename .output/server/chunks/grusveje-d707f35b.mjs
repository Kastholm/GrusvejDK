import { useSSRContext, ref, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50" }, _attrs))}><div class="mx-auto max-w-7xl pt-24 sm:px-2 sm:pt-32 lg:px-4"><div class="mx-auto max-w-2xl px-4 lg:max-w-none"><div class="grid grid-cols-1 items-center gap-x-12 gap-y-10 lg:grid-cols-2"><img class="opacity-80 clippath1 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8" src="https://i.ibb.co/gtZq30x/Untitled-design.png" alt="Image Description"><img class="opacity-80 clippath2 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8" src="https://i.ibb.co/p1253nF/Untitled-design-1.png" alt="Image Description"><div class="-translate-y-10 lg:-translate-y-20"><h1 class="tracking-tight text-gray-900 mb-16 Header respons-header-grusvej relative">Specialudstyr sikrer grusveje af h\xF8jeste kvalitet</h1><h2 class="text-7xl font-bold tracking-tight text-gray-900 mb-16 relative"></h2><p class="mt-4 text-black relative leading-8 text-xl -translate-y-10">Grusvej.dk er en af de eneste vejentrepren\xF8rer i Danmark, som r\xE5der over specialudstyr til opretning og stabilisering af grusveje. Det kraftige maskineri sikrer effektiv og korrekt behandling af vejen, s\xE5 profil og form holdes i mange \xE5r.</p><a href="/kontakt" class="text-white font-bold text-sm md:text-xl"><div class="h-11 w-fit rounded p-2 bg-[#2a8447] -translate-y-4 transition-transform md:duration-200 md:hover:scale-110 text-center border shadow-2xl"><button class="translate-y-1 sm:translate-y-0 text-base block"> Kontakt Grusvej.dk </button></div></a></div><div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100 relative -translate-y-10 lg:-translate-y-20"><img src="https://i.ibb.co/v4nM5DF/Stenknuser-Grusvej.webp" alt="" class="object-cover object-center aspect-[3/2]"></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GrusvejeUspHero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Grusvejinfo",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { value: "+4000 km anlagt" },
      { value: "+4000 km anlagt", label: "FOR PRIVATE OG VIRKSOMHEDER", value: "+250 Glade kunder" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-24 sm:py-18" }, _attrs))}><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"><div class="lg:pr-4 -translate-y-48 sm:-translate-y-36 lg:order-none order-last"><div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 translate-y-36"><img class="absolute inset-0 h-full w-full object-cover" src="https://i.ibb.co/m8DkmQZ/IMG-0953.webp" alt=""><div class="absolute inset-0 mix-blend-multiply"></div><div class="absolute left-1/2 top-1/2 -ml-16 transform-gpu" aria-hidden="true"><div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#fcf2ff] to-[#c9c1cc] opacity-40" style="${ssrRenderStyle({ "clip-path": "polygon(\r\n                    74.1% 44.1%,\r\n                    100% 61.6%,\r\n                    97.5% 26.9%,\r\n                    85.5% 0.1%,\r\n                    80.7% 2%,\r\n                    72.5% 32.5%,\r\n                    60.2% 62.4%,\r\n                    52.4% 68.1%,\r\n                    47.5% 58.3%,\r\n                    45.2% 34.5%,\r\n                    27.5% 76.7%,\r\n                    0.1% 64.9%,\r\n                    17.9% 100%,\r\n                    27.6% 76.8%,\r\n                    76.1% 97.7%,\r\n                    74.1% 44.1%\r\n                  )" })}"></div></div><figure class="relative isolate h-10 sm:h-full"><img src="https://i.ibb.co/w4wfqxs/Grusvej-logo-200x95px.png" alt="" class="sm:h-16 w-auto sm:-translate-y-0 -translate-y-10"><blockquote class="mt-6 text-xl font-semibold leading-8 text-white bg-[#646065] rounded-xl p-4 bg-opacity-60 text-center"><p class="tracking-wide text-4xl fontfam"> &quot;Vi h\xE5ndterer alle typer grusveje - uanset type &amp; st\xF8rrelse&quot; </p></blockquote></figure></div></div><div><div class="leading-7 text-gray-700 lg:max-w-lg -translate-y-4"><h1 class="mt-2 text-4xl font-bold tracking-wide text-gray-900 sm:text-[3.60rem] sm:leading-[1] fontfam"> GRUSVEJ.DK GIVER DIN GRUSVEJ DEN RETTE FORM \u2013 OG PLEJE </h1><div class="max-w-xl lg:order-none"><p class="mt-6 Text TextReadable"> En korrekt anlagt grusvej holder i mange \xE5r. Med den rette pleje i endnu flere. I Danmark er det regnvandet som udfordrer de fleste grusveje. I kombination med forkert funderede underlag resulterer det i \xE5rlige \xE6rgrelser med tilbagevendende huller og skred i vejprofilen. For ikke at tale om de omkostninger og slitage p\xE5 k\xF8ret\xF8jer en d\xE5rlig grusvej afstedkommer. <br><br> Grusvej.dk har gennem mange \xE5r etableret og vedligeholdt grusveje i Danmark. Vores specialmaskiner har lagt bund for mange hundrede kilometer grusveje gennem \xE5rene. Med serviceaftaler forl\xE6nger vi levetiden p\xE5 vejen, ligesom vi h\xF8jner gl\xE6den ved at have en god og st\xF8vfri grusvej at f\xE6rdes p\xE5. </p></div></div></div></div><div class="flex flex-col items-center"><div class="max-w-[600]"><h3 class="text-center m-0 font-bold text-4xl text-grey-900 uppercase Header w-full leading-[1] mt-20 mb-14">Garanti p\xE5 din grusvej</h3></div><p class="Text TextReadable text-grey-900 max-w-[1000px] text-center">N\xE5r b\xE6relaget har den tilstr\xE6kkelige b\xE6reevne, vejprofilen f\xE5r den rigtige facon og vandet kan afledes til rabat og nedsivningsarealet, s\xE5 kan du f\xE5 garanti p\xE5 din grusvej ved indg\xE5else af en serviceaftale. <br><br>Vores service aftaler indg\xE5s individuelt, og tilbydes i forbindelse med, at vi fremsender tilbuddet p\xE5 udbedring af din vej. <br><br> Her kan du se hvad en serviceaftale med grusvej.dk kan indeholde. </p><a href="/serviceaftale" class="text-white font-bold text-sm md:text-xl"><div class="h-11 w-fit rounded p-2 bg-[#2a8447] transition-transform md:duration-200 md:hover:scale-110 text-center translate-y-5 border shadow-2xl"><button class="translate-y-1 sm:translate-y-0 text-base block"> Se serviceaftaler </button></div></a><dl class="mt-10 grid grid-rows-2 border-t border-gray-900/10 sm:grid-rows-2 -translate-y-14 sm:order-none order-4 trans-0 mb-20"><!--[-->`);
      ssrRenderList(stats, (stat, statIdx) => {
        _push(`<div class="max-h-[280px]"><dt class="text-6xl font-semibold leading-8 Header text-gray-900 fontfam tracking-wider py-10 text-center">${ssrInterpolate(stat.label)}</dt><dd class="mt-3 text-7xl font-semibold leading-12 sm:leading-10 tracking-tight text-gray-900 fontfam text-center border-l-2 border-b-2 border-[#f9b039] p-3 rounded">${ssrInterpolate(stat.value)}</dd></div>`);
      });
      _push(`<!--]--></dl></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Grusvejinfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "grusveje",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref(null);
    ref(false);
    const tabs = [
      {
        id: 1,
        name: "Vandet",
        imgSrc: "https://i.ibb.co/RB1hM7S/bud-1.webp",
        text: "Det er i overvejende grad vand som \xF8del\xE6gger en grusvej. N\xE5r vand samler sig i uj\xE6vnheder i vejen, fjernes grus og materiale yderligere og st\xF8rre huller begynder at danne sig. ",
        text2: "Slid p\xE5 biler og d\xE6k er ogs\xE5 forbundet med vand, da vandet p\xE5 ubehandlet veje vender sm\xE5sten med den skarpe side op der resulterer i sv\xE6r slid af bla. d\xE6k p\xE5 k\xF8ret\xF8jer.",
        manchet: "Bud 1"
      },
      {
        id: 2,
        name: "Gr\xF8ften & nedsivnings arealet",
        imgSrc: "https://i.ibb.co/8bT1hnw/Frontal.webp",
        text: "For at vejen kan holde i flere \xE5r skal der altid v\xE6re afledning v\xE6k fra vejen. Dette forhindrer dannelse af sm\xE5 vandhuller i vejens uj\xE6vnheder og den medf\xF8rte slid n\xE6vnt i bud 1. ",
        manchet: "Bud 2"
      },
      {
        id: 3,
        name: "B\xE6relaget i grusvejen",
        imgSrc: "https://i.ibb.co/W5sF0Z2/trin-3-vinkling.webp",
        text: "Vi er allerede i en tid, hvor regnvand og store lastbiler belaster vores grusveje. Hvilket kun vil \xF8ges fremover, s\xE5 vi skal sikre os at b\xE6relaget i grusvejen har den n\xF8dvendige b\xE6reevne.",
        manchet: "Bud 3"
      },
      {
        id: 4,
        name: "Vejens profil",
        imgSrc: "https://i.ibb.co/sFTH7xS/grusvej-bredformat-1.webp",
        text: "For at lede vandet v\xE6k fra veje i det rette tempo skal vejprofilen have et tv\xE6rfald p\xE5 25-40 promille. ",
        text2: "Det rette tempo p\xE5 afledning af vandet er en vigtig faktor for, at vejen mister minimalt af grus og materiale over tid.",
        manchet: "Bud 4"
      },
      {
        id: 5,
        name: "Vejens slidlag",
        imgSrc: "https://i.ibb.co/fqv82CZ/bud-5.webp",
        text: "For at vejen opn\xE5r den bedst mulige holdbarhed skal slidlaget v\xE6re vejgrus. ",
        text2: "Det rette grus er vigtigt for vejens holdbarhed, at anvende den forkerte type grus kan resultere i, at vejens profil aftager langt hurtigere.",
        manchet: "Bud 5"
      }
    ];
    const currentTab = ref(tabs[0]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GrusvejeUspHero = __nuxt_component_0;
      const _component_Grusvejinfo = __nuxt_component_1;
      _push(`<!--[--><head data-v-031e6118><title data-v-031e6118>Professionel etablering og vedligehold af grusveje</title><meta name="description" content="Med vores imponerende maskinpark har vi siden 2018 etableret og vedligeholdt grusveje i hele Danmark. En grusvej der holder i flere \xE5r uden st\xF8vgener." data-v-031e6118></head><div class="bg-white" data-v-031e6118><main class="isolate" data-v-031e6118><div class="isolate -z-10" data-v-031e6118>`);
      _push(ssrRenderComponent(_component_GrusvejeUspHero, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Grusvejinfo, null, null, _parent));
      _push(`<div class="-translate-y-16" data-v-031e6118><h3 class="mt-2 text-5xl margin sm:w-[43%] font-bold tracking-wide text-gray-900 sm:text-6xl fontfam" data-v-031e6118>DE <span class="text-SubColor2 sm:text-8xl" data-v-031e6118>5</span> BUD <br data-v-031e6118> <span class="sm:text-5xl" data-v-031e6118>- P\xC5 EN PERFEKT GRUSVEJ</span></h3></div><div class="tabBody -translate-y-20" data-v-031e6118><div class="tabs" data-v-031e6118><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button class="${ssrRenderClass({ active: currentTab.value.id === tab.id })}" data-v-031e6118>${ssrInterpolate(tab.manchet)}</button>`);
      });
      _push(`<!--]--></div><div class="tab-content" data-v-031e6118><div class="px-2" data-v-031e6118><h2 class="font-bold -translate-y-4 sm:-translate-y-0" data-v-031e6118>${ssrInterpolate(currentTab.value.name)}</h2><h3 class="translate-x-1 translate-y-2 font-bold" data-v-031e6118>${ssrInterpolate(currentTab.value.manchet)}</h3><p class="translate-y-0 sm:translate-y-10" data-v-031e6118>${ssrInterpolate(currentTab.value.text)}</p><p class="translate-y-0 sm:translate-y-16" data-v-031e6118>${ssrInterpolate(currentTab.value.text2)}</p></div><div class="img-div bg-cover max-h-64 translate-y-4 sm:translate-y-0 sm:max-h-96" style="${ssrRenderStyle({ backgroundImage: "url(" + currentTab.value.imgSrc + ")" })}" data-v-031e6118></div></div></div></main></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/grusveje.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const grusveje = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-031e6118"]]);

export { grusveje as default };
//# sourceMappingURL=grusveje-d707f35b.mjs.map
