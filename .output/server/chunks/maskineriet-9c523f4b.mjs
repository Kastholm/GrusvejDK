import { useSSRContext, ref, resolveComponent, withCtx, createVNode, openBlock, createBlock, createTextVNode } from 'vue';
import { ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  __name: "maskineriet",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    const tabs = [
      {
        id: 1,
        name: "Trykanl\xE6g",
        imgSrc: "https://i.ibb.co/xq5tzdx/Dustex-traekanl-g.webp",
        text: "Til h\xE5ndtering og udl\xE6gning af lignin (Dustex) har vi diverse station\xE6re trykanl\xE6g opbygget p\xE5 trailere med tankanl\xE6g og pumper.",
        manchet: "Styr p\xE5 st\xF8vet med Dustex"
      },
      {
        id: 2,
        name: "Stehr Grader sug35",
        imgSrc: "https://i.ibb.co/Yjy6RCK/grader-sug-35.webp",
        text: "STEHR bagmonteret grader fjerner overskudsjord, gammelt materiale og sten fra vejen. Et n\xF8dvendigt trin i processen for et solidt fundament til den nye grusvej. ",
        manchet: "Oprivning & sammentr\xE6kning af vejen"
      },
      {
        id: 3,
        name: "Stehr SBV 80 HC3",
        imgSrc: "https://i.ibb.co/G7V261w/trin-4.webp",
        text: "STEHR formonteret komprimeringsv\xE6rkt\xF8j stabilisere jordlaget i den rette vinkel, s\xE5 vejen ender med en profil der leder vandet v\xE6k. ",
        manchet: "Komprimering af vejen"
      },
      {
        id: 4,
        name: "Stehr Steinbrecher 240 ",
        imgSrc: "https://i.ibb.co/YpGTNQm/stehr-steinbrecher-240-1.webp",
        text: "Som en direkte forl\xE6ngelse af vores b\xE6redygtige tanker, kan stenbr\xE6kkeren knuse og neddele gamle veje, indbygningsegnet materialer fra nedrivning, bel\xE6gninger m.m i en arbejdsgang. Det g\xF8res med en Stehr Steinbrecher SSB 240 monteret p\xE5 en af vores traktorer.",
        manchet: "Stenknuser"
      },
      {
        id: 5,
        name: "Stehr SBF 24-6 ",
        imgSrc: "https://i.ibb.co/TKZdwZG/IMG-5704.webp ",
        text: "Til neddeling af kalk og cement benytter vi en Stehr SBF 24-6 st\xF8vfri stabilisator og en traditionel kalkstabilisator med fronttank.",
        manchet: "Kalk og cement"
      },
      {
        id: 6,
        name: "Stehr SBF 24",
        imgSrc: "https://i.ibb.co/9n1VG1Q/grusudlaegger.webp",
        text: " Til lignin (Dustex) stabilisering benytter vi en SBF 24 med frontmonteret tank med trykanl\xE6g som effektivt kan behandle store arealer.",
        manchet: "Profiludl\xE6gger"
      },
      {
        id: 7,
        name: "Gravemaskiner & Gummiged",
        imgSrc: "https://i.ibb.co/rf4GNJr/stor-gravemaskine.webp",
        text: "Hos os er valget ikke tilf\xE6ldigt, n\xE5r vi indleder et samarbejde med en leverand\xF8r. Leverand\xF8ren er n\xF8je valgt ud fra betragtninger om lang holdbarhed, serviceniveau og leverand\xF8rens stillingtagen til belastningen af vores milj\xF8 og totale \xF8konomi, b\xE5de den kontante og den gr\xF8nne.",
        manchet: "Flere typer der rangere fra 1 til 10 tons "
      }
    ];
    const currentTab = ref(tabs[0]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_center = resolveComponent("center");
      _push(`<!--[--><head data-v-075a9e1f><title data-v-075a9e1f>Grusvej.dk - Danmarks st\xF8rste maskinpark til grusveje</title><meta name="description" content="Grusvej.dk - en maskinpark af tysk kvalitet, Stehr maskiner skr\xE6ddersyet til etablering og vedligehold af grusveje og naturstier. Kontakt os og h\xF8r mere." data-v-075a9e1f></head><div class="bg-white" data-v-075a9e1f><main class="isolate" data-v-075a9e1f><img class="-z-10 opacity-80 clippath1 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8" src="https://i.ibb.co/gtZq30x/Untitled-design.png" alt="Image Description" data-v-075a9e1f><img class="-z-10 opacity-80 clippath2 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8" src="https://i.ibb.co/p1253nF/Untitled-design-1.png" alt="Image Description" data-v-075a9e1f><div class="relative isolate -z-10" data-v-075a9e1f><svg class="absolute inset-x-0 mobile top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true" data-v-075a9e1f><defs data-v-075a9e1f><pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse" data-v-075a9e1f><path d="M.5 200V.5H200" fill="none" data-v-075a9e1f></path></pattern></defs><svg x="50%" y="-1" class="overflow-visible fill-gray-50" data-v-075a9e1f><path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" class="fill-SubColor2" data-v-075a9e1f></path></svg><rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" class="mobile" data-v-075a9e1f></rect></svg><div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true" data-v-075a9e1f><div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#137733] to-[#f9b039] opacity-30" style="${ssrRenderStyle({ "clip-path": "polygon(\r\n                63.1% 29.5%,\r\n                100% 17.1%,\r\n                76.6% 3%,\r\n                48.4% 0%,\r\n                44.6% 4.7%,\r\n                54.5% 25.3%,\r\n                59.8% 49%,\r\n                55.2% 57.8%,\r\n                44.4% 57.2%,\r\n                27.8% 47.9%,\r\n                35.1% 81.5%,\r\n                0% 97.7%,\r\n                39.2% 100%,\r\n                35.2% 81.4%,\r\n                97.2% 52.8%,\r\n                63.1% 29.5%\r\n              )" })}" data-v-075a9e1f></div></div><div class="overflow-hidden" data-v-075a9e1f><div class="mx-auto max-w-7xl px-6 pb-32 pt-14 sm:pt-20 lg:px-8 lg:pt-0" data-v-075a9e1f><div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center" data-v-075a9e1f><div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl mb-72" data-v-075a9e1f><h1 class="Header" data-v-075a9e1f> SPECIALMASKINERI DER SIKRER DANMARKS BEDSTE GRUSVEJE </h1><p class="Text TextReadable sm:max-w-md lg:max-w-none pt-20 -translate-y-10" data-v-075a9e1f> STEHR er Tysk specialmaskineri af h\xF8jeste kvalitet. <br data-v-075a9e1f>Hurtigt og effektivt med en stor grad af genbrug i processen. Vi genbruger den gamle vejs eksisterende materialer til at skabe en ny og velanlagt k\xF8rebane, som holder i mange \xE5r med det rette vedligeholdelsesprogram. Det er omkostningsbevidst \u2013 b\xE5de for \xF8konomi og milj\xF8. </p><a href="/serviceaftale" class="text-white font-bold text-sm md:text-xl" data-v-075a9e1f><div class="h-11 w-fit rounded p-2 bg-[#2a8447] transition-transform md:duration-200 md:hover:scale-110 text-center translate-y-5 border shadow-2xl" data-v-075a9e1f><button class="translate-y-1 sm:translate-y-0 text-base block" data-v-075a9e1f> F\xE5 en serviceaftale hos Grusvej.dk </button></div></a></div><div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0" data-v-075a9e1f><div class="ml-auto w-60 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80" data-v-075a9e1f><div class="relative -translate-y-20" data-v-075a9e1f><img src="https://i.ibb.co/Qp58hws/Maskiner-stenknuser-Grusvej.webp" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" data-v-075a9e1f><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" data-v-075a9e1f></div></div></div><div class="mr-auto w-60 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36" data-v-075a9e1f><div class="relative -translate-y-20" data-v-075a9e1f><img src="https://i.ibb.co/v3LD7qK/Maskine-stabilisering-grusvej.webp" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" data-v-075a9e1f><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" data-v-075a9e1f></div></div><div class="relative -translate-y-20" data-v-075a9e1f><img src="https://i.ibb.co/0QpjWh4/Afvikling-grusvej.webp" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" data-v-075a9e1f><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" data-v-075a9e1f></div></div></div></div></div></div></div></div><div class="tabBody -mt-20 sm:-mt-36 mb-16 sm:max-w-[100%] max-w-[350px]" data-v-075a9e1f><div class="tabs" data-v-075a9e1f><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button class="${ssrRenderClass({ active: currentTab.value.id === tab.id })}" data-v-075a9e1f>${ssrInterpolate(tab.name)}</button>`);
      });
      _push(`<!--]--></div><div class="tab-content sm:ml-16" data-v-075a9e1f><div class="sm:px-2" data-v-075a9e1f><h2 class="font-bold sm:w-[100%] w-[300px]" data-v-075a9e1f>${ssrInterpolate(currentTab.value.name)}</h2><h3 class="sm:translate-y-4" data-v-075a9e1f>${ssrInterpolate(currentTab.value.manchet)}</h3><p class="sm:translate-y-10 sm:max-w-[80%]" data-v-075a9e1f>${ssrInterpolate(currentTab.value.text)}</p></div><div class="img-div mt-16 max-h-[500px] sm:max-w-[1000px] bg-cover" style="${ssrRenderStyle({ backgroundImage: "url(" + currentTab.value.imgSrc + ")" })}" data-v-075a9e1f></div></div></div>`);
      _push(ssrRenderComponent(_component_center, { class: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-4" data-v-075a9e1f${_scopeId}><svg class="absolute h-[40rem] w-[80rem] mobile flex-none stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true" data-v-075a9e1f${_scopeId}><defs data-v-075a9e1f${_scopeId}><pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)" data-v-075a9e1f${_scopeId}><path d="M.5 200V.5H200" fill="none" data-v-075a9e1f${_scopeId}></path></pattern></defs><svg x="50%" y="50%" class="overflow-visible fill-gray-50" data-v-075a9e1f${_scopeId}><path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" class="fill-SubColor2" data-v-075a9e1f${_scopeId}></path></svg><rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" class="mobile" data-v-075a9e1f${_scopeId}></rect></svg></div><div class="relative translate-y-7" data-v-075a9e1f${_scopeId}><h2 class="w-full text-7xl font-bold ml-auto Header" data-v-075a9e1f${_scopeId}>EN AF DE ENESTE I <span class="text-[#199d43]" data-v-075a9e1f${_scopeId}>DANMARK</span></h2><p class="mt-6 font-medium text-2xl sm:text-xl text-center leading-relaxed max-w-[80%]" data-v-075a9e1f${_scopeId}>Vores STEHR maskineri er unikke og nogle af de eneste i Danmark, hvor det f\xF8rst er i de senere \xE5r, at vi er blevet opm\xE6rksomme p\xE5 fordelene ved en god grusvej. </p><a href="/kontakt" class="text-white font-bold text-sm md:text-xl" data-v-075a9e1f${_scopeId}><div class="h-11 w-fit rounded mb-4 p-2 bg-[#2a8447] translate-y-4 transition-transform md:duration-200 md:hover:scale-110 text-center border shadow-2xl" data-v-075a9e1f${_scopeId}><button class="translate-y-1 sm:translate-y-0 text-base block" data-v-075a9e1f${_scopeId}> Kontakt Grusvej.dk </button></div></a></div><div class="relative xl:mx-auto xl:max-w-7xl xl:px-8 translate-y-12 mb-24" data-v-075a9e1f${_scopeId}><img src="https://i.ibb.co/NVpxQ3z/Stenknuser-f-rste-i-Danmark-v3-1.webp" alt="" class="max-h-[500px] w-full object-cover xl:rounded-3xl" data-v-075a9e1f${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-4" }, [
                (openBlock(), createBlock("svg", {
                  class: "absolute h-[40rem] w-[80rem] mobile flex-none stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]",
                  "aria-hidden": "true"
                }, [
                  createVNode("defs", null, [
                    createVNode("pattern", {
                      id: "e9033f3e-f665-41a6-84ef-756f6778e6fe",
                      width: "200",
                      height: "200",
                      x: "50%",
                      y: "50%",
                      patternUnits: "userSpaceOnUse",
                      patternTransform: "translate(-100 0)"
                    }, [
                      createVNode("path", {
                        d: "M.5 200V.5H200",
                        fill: "none"
                      })
                    ])
                  ]),
                  (openBlock(), createBlock("svg", {
                    x: "50%",
                    y: "50%",
                    class: "overflow-visible fill-gray-50"
                  }, [
                    createVNode("path", {
                      d: "M-300 0h201v201h-201Z M300 200h201v201h-201Z",
                      "stroke-width": "0",
                      class: "fill-SubColor2"
                    })
                  ])),
                  createVNode("rect", {
                    width: "100%",
                    height: "100%",
                    "stroke-width": "0",
                    fill: "url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)",
                    class: "mobile"
                  })
                ]))
              ]),
              createVNode("div", { class: "relative translate-y-7" }, [
                createVNode("h2", { class: "w-full text-7xl font-bold ml-auto Header" }, [
                  createTextVNode("EN AF DE ENESTE I "),
                  createVNode("span", { class: "text-[#199d43]" }, "DANMARK")
                ]),
                createVNode("p", { class: "mt-6 font-medium text-2xl sm:text-xl text-center leading-relaxed max-w-[80%]" }, "Vores STEHR maskineri er unikke og nogle af de eneste i Danmark, hvor det f\xF8rst er i de senere \xE5r, at vi er blevet opm\xE6rksomme p\xE5 fordelene ved en god grusvej. "),
                createVNode("a", {
                  href: "/kontakt",
                  class: "text-white font-bold text-sm md:text-xl"
                }, [
                  createVNode("div", { class: "h-11 w-fit rounded mb-4 p-2 bg-[#2a8447] translate-y-4 transition-transform md:duration-200 md:hover:scale-110 text-center border shadow-2xl" }, [
                    createVNode("button", { class: "translate-y-1 sm:translate-y-0 text-base block" }, " Kontakt Grusvej.dk ")
                  ])
                ])
              ]),
              createVNode("div", { class: "relative xl:mx-auto xl:max-w-7xl xl:px-8 translate-y-12 mb-24" }, [
                createVNode("img", {
                  src: "https://i.ibb.co/NVpxQ3z/Stenknuser-f-rste-i-Danmark-v3-1.webp",
                  alt: "",
                  class: "max-h-[500px] w-full object-cover xl:rounded-3xl"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/maskineriet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const maskineriet = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-075a9e1f"]]);

export { maskineriet as default };
//# sourceMappingURL=maskineriet-9c523f4b.mjs.map
