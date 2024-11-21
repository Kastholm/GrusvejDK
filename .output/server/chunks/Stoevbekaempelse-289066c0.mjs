import { ref, resolveComponent, withCtx, createVNode, toDisplayString, unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { PlayIcon, PauseIcon } from '@heroicons/vue/24/outline';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50" }, _attrs))}><div class="mx-auto max-w-7xl pt-24 sm:px-2 sm:pt-32 lg:px-4"><div class="mx-auto max-w-2xl px-4 lg:max-w-none"><div class="grid grid-cols-1 items-center gap-x-12 gap-y-10 lg:grid-cols-2"><img class="opacity-80 clippath1 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8" src="https://i.ibb.co/gtZq30x/Untitled-design.png" alt="Image Description"><img class="opacity-80 clippath2 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8" src="https://i.ibb.co/p1253nF/Untitled-design-1.png" alt="Image Description"><div class="w-full -translate-y-20"><h1 class="tracking-tight text-gray-900 mb-16 Header uppercase font-bold relative text-7xl"> Slip for st\xF8vgener med <span class="text-8xl text-[#199d43]">Dustex</span></h1><p class="mt-4 text-black relative text-xl -translate-y-10">St\xF8vbinding er vejen frem, hvis du vil undg\xE5 belastende st\xF8vgener fra grusvej eller grusareal. Det fine grusst\xF8v som sv\xE6ver i vinden, er b\xE5de generende og sundhedsskadeligt for mennesker og dyr. Til geng\xE6ld er l\xF8sningen p\xE5 problemet enkelt - Dustex.</p><a href="/serviceaftale" class="text-white font-bold text-sm md:text-xl"><div class="h-11 w-fit rounded p-2 bg-[#2a8447] transition-transform md:duration-200 md:hover:scale-110 text-center -translate-y-5 border shadow-2xl"><button class="translate-y-1 sm:translate-y-0 text-base block"> Dustex-serviceaftale hos Grusvej.dk </button></div></a></div><div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100 relative -translate-y-20"><img src="https://i.ibb.co/xq5tzdx/Dustex-traekanl-g.webp" alt="" class="object-cover object-center aspect-[3/2]"></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StoevUspHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Stoevbekaempelse",
  __ssrInlineRender: true,
  setup(__props) {
    let isPlaying = ref(false);
    ref(null);
    const stats = [
      {
        label: "Dustex holder st\xF8vpartiklerne bundet i op til 1 \xE5r efter behandling af din grusvej.",
        value: "Op til 1 \xE5rs holdbarhed"
      },
      {
        label: "Efter aftale ankommer vi p\xE5 adressen og udf\xF8rer arbejdet samme dag.",
        value: "Hurtig p\xE5f\xF8ring"
      },
      {
        label: "Kroppen tager skade af kontinuerlig ind\xE5nding af st\xF8vpartikler fra grusarealer. ",
        value: "Giver et bedre helbred"
      }
    ];
    const values = [
      {
        name: "Ufarligt",
        description: "Dustex er 100% naturprodukt udvundet af norske grantr\xE6er og er ufarligt for mennesker og dyr. Det er desuden 100% CO2-neutralt."
      },
      {
        name: "Allergivenligt",
        description: "Dustex giver ingen luftvejsgener da bindemidlet er s\xE5 st\xE6rkt at det ikke forekommer luftb\xE5rent."
      },
      {
        name: "Biologisk nedbrydeligt",
        description: "Dustex nedbrydes organisk fordi det stammer fra grantr\xE6er. Nedbrydningen er helt uskadelig for naturen."
      },
      {
        name: "Ingen rustp\xE5virkning af biler & maskiner",
        description: "Dustex er ikke korrosivt og skader derfor ikke metaller eller lignende materialer vi anvender i vores k\xF8ret\xF8jer."
      },
      {
        name: "Helbredsm\xE6ssige fordele",
        description: "Fordi Dustex effektivt binder st\xF8vet i grusveje/arealer undg\xE5r mennesker og dyr negative luftvejs p\xE5virkninger, der kan v\xE6re sundhedsskadelige p\xE5 sigt."
      },
      {
        name: "Lugtfrit naturprodukt",
        description: "Dustex er baseret p\xE5 naturens eget bindemiddel, lignin. Til forskel fra harpiks, er Dustex n\xE6sten lugtfri."
      }
    ];
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoevUspHero = __nuxt_component_0;
      const _component_center = resolveComponent("center");
      _push(`<!--[--><head><title>Slip for grusvejens st\xF8vgener med det naturvenlige Dustex</title><meta name="description" content="Sig farvel til st\xF8vskyer p\xE5 grusvejen og st\xF8vgener i hjemmet. Vores naturvenlige bindingsmiddel, Dustex, sikrer dig en st\xF8vfri grusvej i op til 2 \xE5r."></head><div class="bg-white"><main class="isolate"><div class="">`);
      _push(ssrRenderComponent(_component_StoevUspHero, null, null, _parent));
      _push(`</div><div class="relative isolate -z-10"><svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full mobile stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true"><defs><pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M.5 200V.5H200" fill="none"></path></pattern></defs><svg x="50%" y="-1" class="overflow-visible fill-gray-50"><path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0"></path></svg><rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"></rect></svg><div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true"><div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#f9b039] to-[#137733] opacity-40" style="${ssrRenderStyle({ "clip-path": "polygon(\r\n                63.1% 29.5%,\r\n                100% 17.1%,\r\n                76.6% 3%,\r\n                48.4% 0%,\r\n                44.6% 4.7%,\r\n                54.5% 25.3%,\r\n                59.8% 49%,\r\n                55.2% 57.8%,\r\n                44.4% 57.2%,\r\n                27.8% 47.9%,\r\n                35.1% 81.5%,\r\n                0% 97.7%,\r\n                39.2% 100%,\r\n                35.2% 81.4%,\r\n                97.2% 52.8%,\r\n                63.1% 29.5%\r\n              )" })}"></div></div><div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-0 lg:px-8 pt-14 sm:-translate-y-0 -translate-y-28"><div class="mx-auto max-w-2xl lg:mx-0 inline"><h2 class="font-bold tracking-tight text-gray-900 sm:text-7xl text-3xl Header text-center"><span class="sm:text-9xl text-7xl rounded uppercase"> Dustex </span>- <span> ET </span><span class="uppercase text-[#199d43]"> milj\xF8venligt </span> PRODUKT </h2><p class="mt-6 text-lg leading-8 font-semibold text-black text-center"> Du f\xE5r mange fordele ved at v\xE6lge Dustex til behandling af din grusvej eller grusarealer. </p></div><dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"><!--[-->`);
      ssrRenderList(values, (value) => {
        _push(`<div><dt class="font-semibold text-xl text-gray-900">${ssrInterpolate(value.name)}</dt><dd class="mt-1 text-gray-600">${ssrInterpolate(value.description)}</dd></div>`);
      });
      _push(`<!--]--></dl></div></div><div class="max-w-[100%] text-center sm:-translate-y-0 -translate-y-16"><h3 class="font-bold tracking-tight text-gray-900 sm:text-7xl text-3xl Header text-center max-w-[100%] uppercase"> Dustex er perfekt til at stabilisere veje </h3><p class="Text TextReadable max-w-[80%] m-auto"> Hvis behovet er at stabilisere en vej med d\xE5rlig b\xE6reevne, s\xE5 er Dustex ogs\xE5 ideel.<br> Dustex kan fr\xE6ses ned i vejens d\xE5rlige b\xE6relag. Ved at bruge en fr\xE6ser, der kan knuse sten, f\xE5r vi brugt den eksisterende asfalt og underlag og forvandlet dette til en st\xE6rk &quot;plade&quot;. <br> Dette er en meget ressourcebesparende metode og derfor en \xF8konomisk fordelagtig metode. P\xE5 veje med mindre trafik kan man beholde vejen som en &quot;dustex stabiliseret grusvej&quot;. Dette stabiliserede underlag er ogs\xE5 ideelt til at l\xE6gge asfalt ovenp\xE5 og asfaltering kan finde sted efter en h\xE6rdningsperiode p\xE5 4-8 uger eller efter nogle \xE5r. </p></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-16"><div class="flex flex-col items-center"><div class="mb-2 Header uppercase text-gray-900 text-5xl font-bold pb-6 sm:text-start text-center"> Behandles med Dustex </div><img class="rounded-lg sm:mb-0 mb-10" src="https://i.ibb.co/vdJZpHF/vej-i-proces.jpg" alt="Image 1"></div><div class="flex flex-col items-center"><div class="mb-2 Header uppercase text-gray-900 text-5xl font-bold pb-6 sm:text-start text-center"> H\xE5rdhed efter 14 dage </div><img class="rounded-lg" src="https://i.ibb.co/vd7FRhw/vej-efter-14-dage.jpg" alt="Image 2"></div></div><div class="mx-auto max-w-7xl px-6 sm:mt-0 lg:px-8 translate-y-10 sm:-translate-y-10"><div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none"><h2 class="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 ml-3 pb-3 pt-28 Header text-center sm:w-full w-[320px] sm:-translate-x-0 -translate-x-6"> SLIP FOR ST\xD8VGENER I AL SLAGS VIND &amp; VEJR </h2><div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row"><div class="lg:w-full lg:max-w-2xl lg:flex-auto"><p class="text-xl leading-8 text-gray-700 font-bold"> Et eksempel fra de danske grusveje: </p><div class="mt-10 max-w-xl text-xl leading-7 text-gray-700"><p class="text-[1.125rem]"> Grundejere i sommerhusomr\xE5der er nogle af dem som er mest plaget af st\xF8vgener. P\xE5 Tuse N\xE6s i Nordvestsj\xE6lland valgte man for \xE5r tilbage derfor at tage fat i problemet. <br><br>\u201DDet er nu tre \xE5r siden at Grusvej.dk renoverede vores f\xE6lles veje og gav dem den rigtige profil, s\xE5 vejene kan holde. N\xE5r vi kan m\xE6rke, at st\xF8vgenerne begynder at komme igen, ringer vi bare til Grusvej.dk. Intervallerne afh\xE6nger altid af, hvordan vejret har opf\xF8rt sig\u201D, fort\xE6lle kasserer i Fjordvang Grundejerforening, Kim Zengenberg, som er glad for samarbejdet med Grusvej.dk. </p><p class="mt-10 text-xl"> \u201DDet har givet en markant forbedring at f\xE5 lagt Dustex p\xE5 de tilh\xF8rende f\xE6lles veje. Vores biler er ikke konstant st\xF8vet til, og vi slipper for st\xF8vskyer drivende mellem og ind i husene.\u201D <br><br> Hvor lang tid der skal g\xE5 mellem st\xF8vbehandlingerne, afh\xE6nger af hvor l\xE6nge og hvor t\xF8rt vejret er. I perioder med ustadigt og fugtigt vejr er problemet med st\xF8v selvsagt ikke s\xE5 stort, mens sommerens lange t\xF8rkeperioder fremmer problemet med st\xF8v fra grusvejene. </p></div></div><div class="lg:flex lg:flex-auto lg:justify-center flex-rows-reverse sm:-translate-y-0 -translate-y-20"><dl class="w-64 space-y-8 xl:w-80 inline lg:block"><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="flex flex-col-reverse gap-y-4 border-4 border-[#f9b039] bg-[#f9b039] text-center rounded-lg p-1 font-semibold translate-y-20"><dt class="text-base leading-1 text-white -translate-y-2">${ssrInterpolate(stat.label)}</dt>`);
        _push(ssrRenderComponent(_component_center, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<dd class="text-4xl fontfam font-bold tracking-wide text-white"${_scopeId}>${ssrInterpolate(stat.value)}</dd>`);
            } else {
              return [
                createVNode("dd", { class: "text-4xl fontfam font-bold tracking-wide text-white" }, toDisplayString(stat.value), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></dl></div></div></div></div><div class="relative w-full rounded-md pt-"><div id="vimeo-player" class="mt-10 aspect-[6/5] h-72 w-full rounded-2xl sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 grid place-content-center overflow-hidden" style="${ssrRenderStyle({ "height": "515px" })}"><button class="absolute lg:left-1/2 md:left-[19em] left-[50%] lg:top-[16.5em] top-[20em] transform -translate-y-10 -translate-x-1/2 text-white bg-grey-200 bg-opacity-50 rounded-full p-2">`);
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
      _push(`</button></div></div></main></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Stoevbekaempelse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Stoevbekaempelse-289066c0.mjs.map
