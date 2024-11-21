import { _ as __nuxt_component_0 } from './Serviceaftaler-54f7baf4.mjs';
import { useSSRContext, ref, resolveComponent, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { PlayIcon, PauseIcon } from '@heroicons/vue/24/outline';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'vee-validate';
import 'yup';

const oldImg = "/img/nyGrusvej.png";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let isPlaying = ref(false);
    const arbejdssteps = [
      {
        name: "Vandafledning",
        description: "Det er i overvejende grad vand som \xF8del\xE6gger en grusvej. N\xE5r vand samler sig i uj\xE6vnheder i vejen, fjernes grus og materiale og st\xF8rre huller begynder at danne sig. ",
        date: "Bud 1",
        image: "https://i.ibb.co/z8TdFp5/trin-1.webp"
      },
      {
        name: "Nedsivnings arealet",
        description: "Dette forhindre dannelse af sm\xE5 vandhuller i vejens uj\xE6vnheder og den medf\xF8rte slid n\xE6vnt i bud 1.",
        date: "Bud 2",
        image: "https://i.ibb.co/sPvjqMm/IMG-0954.webp"
      },
      {
        name: "B\xE6relaget i grusvejen",
        description: "Vi er allerede i en tid, hvor regnvand og store lastbiler belaster vores grusveje. S\xE5 vi skal sikre os at b\xE6relaget i grusvejen har den n\xF8dvendige b\xE6reevne.",
        date: "Bud 3",
        image: "https://i.ibb.co/5hB952R/billedet-10.webp "
      },
      {
        name: "Vandafledning",
        description: "For at lede vandet v\xE6k fra veje i det rette tempo skal vejprofilen have et tv\xE6rfald p\xE5 25-40 promille.",
        date: "Bud 4",
        image: "https://i.ibb.co/W5sF0Z2/trin-3-vinkling.webp"
      },
      {
        name: "Vejens slidlag",
        description: "Den rette grus er vigtigt for vejens holdbarhed, at anvende den forkerte type grus kan resultere i, at vejens profil aftager langt hurtigere.",
        date: "Bud 5",
        image: "https://i.ibb.co/FHP6FTZ/trin-5-opt.webp"
      }
    ];
    let imgSrc = ref(oldImg);
    let activeButton = ref("new");
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_center = resolveComponent("center");
      const _component_Serviceaftaler = __nuxt_component_0;
      _push(`<!--[--><div data-v-275280fe><head data-v-275280fe><title data-v-275280fe> Etablering og vedligehold af grusveje og naturstier</title><meta name="description" content="Hos Grusvej.dk etablerer og vedligeholder vi grusveje og naturstier i hele Danmark for private og virksomheder. Vi garanterer en grusvej i tiptop stand." data-v-275280fe><meta name="keywords" content="Grusveje, Naturstier, Cement, etablering, vedligehold" data-v-275280fe></head></div><div class="bg-white font-sans" data-v-275280fe><main class="isolate" data-v-275280fe><div class="relative isolate -z-10 overflow-hidden bg-yellow-vivid-200 bg-gradient-to-b from-indigo-100/20" data-v-275280fe><div class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96" aria-hidden="true" data-v-275280fe></div><div class="mx-auto max-w-7xl px-6 pb-32 pt-12 sm:pb-40 lg:px-8" data-v-275280fe><div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none md:grid-cols-1 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8" data-v-275280fe><div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1 pt-5 sm:pt-6" data-v-275280fe><h1 class="fontfam mb-12 sm:text-7xl text-5xl" data-v-275280fe> Etablering - vedligehold og drift af grusveje </h1><p class="Text TextReadable text-gray-600 pt-2" data-v-275280fe> En grusvej er ikke bare en grusvej. Er grusvejen fra starten konstrueret korrekt og rigtigt vedligeholdt kan den holde i mange \xE5r. S\xE5 enkelt er det \u2013 og vi er specialister i grusveje med det rigtige udstyr og viden p\xE5 plads. </p><a href="/serviceaftale" class="text-white font-bold text-sm md:text-xl" data-v-275280fe><div class="respons-knap sm:h-11 h-11 w-fit rounded p-2 bg-[#2a8447] transition-transform md:duration-200 md:hover:scale-110 text-center translate-y-5 border shadow-2xl" data-v-275280fe><button class="text-base block" data-v-275280fe> F\xE5 en serviceaftale hos Grusvej.dk </button></div></a></div><div class="relative overflow-hidden" data-v-275280fe><div id="vimeo-player" class="mt-10 aspect-[6/5] h-72 w-full max-w-lg rounded-2xl sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 p-12 grid place-content-center" style="${ssrRenderStyle({ "height": "515px" })}" data-v-275280fe><button class="absolute lg:left-1/2 md:left-[19em] left-[50%] lg:top-[16.5em] top-[20em] transform -translate-x-1/2 -translate-y-1/2 text-white bg-grey-200 bg-opacity-50 rounded-full p-2" data-v-275280fe>`);
      if (!unref(isPlaying)) {
        _push(ssrRenderComponent(unref(PlayIcon), { class: "h-12 w-12" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isPlaying)) {
        _push(ssrRenderComponent(unref(PauseIcon), { class: "h-12 w-12" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></div></div></div><div class="mx-auto max-w-7xl px-6 lg:px-8 -translate-y-28" data-v-275280fe>`);
      _push(ssrRenderComponent(_component_center, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="mb-5 fontfam font-[600] font text-5xl sm:text-7xl cursor-vertical-text pt-10" data-v-275280fe${_scopeId}> NY GRUSVEJ ELLER VEDLIGEHOLD AF EKSISTERENDE? </h2><p class="font-semibold text-3xl pb-10" data-v-275280fe${_scopeId}><span class="text-[#137733]" data-v-275280fe${_scopeId}> Grusvej.dk </span> Giver dig 5 bud p\xE5 en st\xE6rk grusvej </p>`);
          } else {
            return [
              createVNode("h2", { class: "mb-5 fontfam font-[600] font text-5xl sm:text-7xl cursor-vertical-text pt-10" }, " NY GRUSVEJ ELLER VEDLIGEHOLD AF EKSISTERENDE? "),
              createVNode("p", { class: "font-semibold text-3xl pb-10" }, [
                createVNode("span", { class: "text-[#137733]" }, " Grusvej.dk "),
                createTextVNode(" Giver dig 5 bud p\xE5 en st\xE6rk grusvej ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-5" data-v-275280fe><!--[-->`);
      ssrRenderList(arbejdssteps, (item) => {
        _push(`<div data-v-275280fe><time${ssrRenderAttr("datetime", item.dateTime)} class="flex items-center text-base font-bold font-serif leading-6 text-[#137733]" data-v-275280fe><svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true" data-v-275280fe><circle cx="2" cy="2" r="2" fill="currentColor" data-v-275280fe></circle></svg> ${ssrInterpolate(item.date)} <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true" data-v-275280fe></div></time><p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900" data-v-275280fe>${ssrInterpolate(item.name)}</p><p class="mt-1 text-base leading-7 text-gray-600 min-h-[11em]" data-v-275280fe>${ssrInterpolate(item.description)}</p><img${ssrRenderAttr("src", item.image)} alt="Step Image" class="mt-4 rounded border shadow-1xl" data-v-275280fe></div>`);
      });
      _push(`<!--]--></div></div><div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" data-v-275280fe></div></div><div class="hoverRoadBody mx-auto relative mt-32 max-w-7xl sm:mt-40 sm:px-6 mb-20 lg:px-8 transition-all -translate-y-24 h-fit max-h-[51em] overflow-hidden" data-v-275280fe><div class="relative isolate overflow-hidden bg-[#137733a0] px-6 py-14 text-center shadow-2xl sm:rounded-3xl sm:px-16" data-v-275280fe><h2 class="mx-auto max-w-5xl text-5xl font-bold fontfam tracking-tight leading-[1] text-gray-900 sm:text-6xl uppercase" data-v-275280fe> Se hvad der g\xF8r vores grusvej speciel </h2><button class="${ssrRenderClass([{ active: unref(activeButton) === "new" }, "bg-white bg-opacity-30 px-8 py-5 mt-12 mx-4"])}" data-v-275280fe> Vores Grusvej </button><button class="${ssrRenderClass([{ active: unref(activeButton) === "old" }, "bg-white bg-opacity-30 px-8 py-5 mt-12 mx-4 mb-10 sm:mb-0"])}" data-v-275280fe> Standard Grusvej </button><img${ssrRenderAttr("src", unref(imgSrc))} class="hoverRoad w-[70em] m-auto sm:scale-100 scale-110" alt="" data-v-275280fe><div class="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true" data-v-275280fe><div class="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25" style="${ssrRenderStyle({ "clip-path": "polygon(\r\n                  73.6% 51.7%,\r\n                  91.7% 11.8%,\r\n                  100% 46.4%,\r\n                  97.4% 82.2%,\r\n                  92.5% 84.9%,\r\n                  75.7% 64%,\r\n                  55.3% 47.5%,\r\n                  46.5% 49.4%,\r\n                  45% 62.9%,\r\n                  50.3% 87.2%,\r\n                  21.3% 64.1%,\r\n                  0.1% 100%,\r\n                  5.4% 51.1%,\r\n                  21.4% 63.9%,\r\n                  58.9% 0.2%,\r\n                  73.6% 51.7%\r\n                )" })}" data-v-275280fe></div></div></div></div><div class="mt-32 overflow-hidden sm:mt-40 -translate-y-20" data-v-275280fe><div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8" data-v-275280fe><div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8" data-v-275280fe><div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8" data-v-275280fe><h2 class="tracking-tight font-[700] sm:text-[68px] leading-[40px] text-[40px] fontfam text-gray-900 sm:leading-[70px] uppercase text-center sm:text-start" data-v-275280fe> Stenknuseren retter op p\xE5 gamle og bulede grusveje </h2><p class="mt-6 Text Textreadable text-base leading-8 text-gray-600" data-v-275280fe> Tidligere brugte man gammelt byggeaffald, beton- og teglbrokker til at underst\xF8tte grusveje. Disse l\xF8st nedgravede fraktioner skader efter mange \xE5rs slid nu mere end de gavner. </p><p class="mt-6 Text Textreadable text-base leading-7 text-gray-600" data-v-275280fe> I stedet for at fjerne dem i en tung og dyr proces, nedknuser vi materialerne s\xE5 de virker som almindeligt stabilgrus. Det sparer tid, indk\xF8b af ny stabilunderlag, er milj\xF8rigtigt, hurtigt og effektivt. </p><a href="/kontakt" class="text-white font-bold text-sm md:text-xl" data-v-275280fe><div class="h-11 w-fit rounded p-2 bg-[#2a8447] translate-y-4 transition-transform md:duration-200 md:hover:scale-110 text-center border shadow-2xl" data-v-275280fe><button class="translate-y-1 sm:translate-y-0 text-base block" data-v-275280fe> Kontakt Grusvej.dk </button></div></a></div><div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents" data-v-275280fe><div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end" data-v-275280fe><img src="https://i.ibb.co/SsDXCKL/Findelt.jpg" alt="" class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover" data-v-275280fe></div><div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8" data-v-275280fe><div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto" data-v-275280fe><img src="https://i.ibb.co/WskRfTK/Maskiner-Grusvej.webp" alt="" class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" data-v-275280fe></div><div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none" data-v-275280fe><img src="https://i.ibb.co/Z6ykkYF/billedet-8.webp" alt="" class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" data-v-275280fe></div><div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none" data-v-275280fe><img src="https://i.ibb.co/x5SH8rk/Grusvej-grus.webp" alt="" class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" data-v-275280fe></div></div></div></div></div></div><div class="mx-auto mt-14 max-w-7xl px-6 lg:px-8" data-v-275280fe><div class="mx-auto lg:mx-0 max-w-full" data-v-275280fe><h2 class="text-3xl mt-5 font-bold tracking-tight Header leading-[1] text-gray-900 sm:text-6xl text-center uppercase" data-v-275280fe> +90.000 km grusvej er forkert lagt i danmark </h2><p class="mt-6 text-base leading-7 text-gray-600 max-w-[80%] text-center m-auto" data-v-275280fe> Marker, skovarealer, sommerhusomr\xE5der, naturarealer, stier og veje. Der er masser af grusveje i Danmark som tr\xE6nger til en k\xE6rlig h\xE5nd \u2013 og effektivt maskineri. </p></div><div class="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end text-center" data-v-275280fe><div class="bg-[#f9b039] flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start" data-v-275280fe><p class="flex-none text-3xl font-bold tracking-tight text-[#fcf2ff] min-w-[220px] sm:-translate-x-0 -translate-x-8" data-v-275280fe> Minimum vedligeholdelse </p><div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none" data-v-275280fe><p class="mt-2 text-base leading-7 text-[#fcf2ff] Text Textreadable" data-v-275280fe> En korrekt grusvej er en investering der r\xE6kker mange \xE5r frem. Med en Grusvej.dk serviceaftale n\xE6rmest evigt. </p></div></div><div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-2xl lg:flex-auto lg:flex-col lg:items-start lg:gap-y-80" style="${ssrRenderStyle({ "background-image": "url('https://i.ibb.co/0ZwLm1f/Stabilisering-grusvej-cropped.webp')", "background-size": "cover", "background-position": "center" })}" data-v-275280fe><p class="" data-v-275280fe></p><div class="" data-v-275280fe><br data-v-275280fe><br data-v-275280fe><br data-v-275280fe><br data-v-275280fe></div></div><div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-[#137733] p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28" data-v-275280fe><p class="flex-none text-3xl font-bold tracking-tight text-[#fcf2ff]" data-v-275280fe> Vores grusvej holder i +1 \xE5r uden dannelse af huller </p><div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none" data-v-275280fe><p class="mt-2 text-base leading-7 text-[#fcf2ff] max-w-[90%] m-auto" data-v-275280fe> Uden l\xF8bende vedligehold holder vores grusveje i mere end 1 \xE5r uden at vandet danner nye huller. Med \xE5rlig service forl\xE6nges dette faktum. </p></div></div></div></div></main></div><div class="mt-20" data-v-275280fe>`);
      _push(ssrRenderComponent(_component_Serviceaftaler, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-275280fe"]]);

export { index as default };
//# sourceMappingURL=index-dfb8c32e.mjs.map
