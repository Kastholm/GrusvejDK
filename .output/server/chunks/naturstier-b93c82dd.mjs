import { useSSRContext, ref, resolveComponent, withCtx, createVNode, openBlock, createBlock, mergeProps } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="mx-auto max-w-7xl pt-12 px-6 lg:px-8 -translate-y-36"><div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"><div class="lg:pr-4 -translate-y-20 sm:-translate-y-32 lg:order-none order-last"><div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"><img class="absolute inset-0 h-full w-full object-cover" src="https://i.ibb.co/MNmNDRC/Naturstier-grusvej.webp" alt=""><div class="absolute inset-0 mix-blend-multiply"></div><div class="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl" aria-hidden="true"><div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#fcf2ff] to-[#c9c1cc] opacity-40" style="${ssrRenderStyle({ "clip-path": "polygon(\r\n                    74.1% 44.1%,\r\n                    100% 61.6%,\r\n                    97.5% 26.9%,\r\n                    85.5% 0.1%,\r\n                    80.7% 2%,\r\n                    72.5% 32.5%,\r\n                    60.2% 62.4%,\r\n                    52.4% 68.1%,\r\n                    47.5% 58.3%,\r\n                    45.2% 34.5%,\r\n                    27.5% 76.7%,\r\n                    0.1% 64.9%,\r\n                    17.9% 100%,\r\n                    27.6% 76.8%,\r\n                    76.1% 97.7%,\r\n                    74.1% 44.1%\r\n                  )" })}"></div></div><figure class="relative isolate h-10 sm:h-full"><img src="https://i.ibb.co/w4wfqxs/Grusvej-logo-200x95px.png" alt="" class="sm:h-16 w-auto"><blockquote class="mt-6 text-xl font-semibold leading-8 text-white bg-[#646065] rounded-xl p-4 bg-opacity-60 text-center"><p class="tracking-wide text-4xl fontfam"> \u201CGrusvej ApS har 5 \xE5rs ekspertise i naturstier &amp; garanterer dig en solid natursti til b\xE5de fodg\xE6ngere &amp; bilister som holder i adskillige \xE5r.\u201D </p></blockquote></figure></div></div><div><div class="leading-7 text-gray-700 lg:max-w-lg -translate-y-36"><h1 class="sm:mt-2 mt-16 text-5xl font-bold tracking-wide text-gray-900 sm:text-6xl fontfam"> NATURSTIER </h1><div class="max-w-xl"><p class="mt-6 Text TextReadable text-gray-900"> Hos grusvej.dk har vi udviklet en metode til direkte stabilisering af overfladematerialer som man traditionelt ikke har kunne binde sammen. Derfor kan vi tilbyde anl\xE6g og vedligehold af naturstier med et minimum af CO2 udledning og plads til at biodiversiteten kan folde sig ud i fuldt flor. <br> <br> En natursti falder harmonisk og umiddelbart ind i sine omgivelser. B\xE6relaget til en natursti etableres direkte i muld og r\xE5jord, uden at vi skal tilf\xF8re materialer udefra. Intet forbrug af udvundne r\xE5stoffer og ingen milj\xF8belastende lastbilstransporter. P\xE5 toppen af b\xE6relaget udl\xE6gges 5-7 cm leret stabil, 0-18, s\xE5 er stien klar til drift. N\xE5r vejmaterialerne er bearbejdet og nedlagt korrekt, stabiliserer vi b\xE6relaget med lignin, der er et 100% biologisk materiale, med negativ CO2 v\xE6rdi. <br><br> Lignin arbejdes ind i de eksisterende jordtyper, vi komprimerer jordlagene og udl\xE6gger leret stabil 0-18. Herefter afrettes stiens profil, s\xE5 regnvand kan l\xF8be korrekt af og vi opn\xE5r en stabil og blivende stioverflade. <br><br> Lignin eller Dustex, som er navnet p\xE5 produktet der er udviklet af et restprodukt fra norske grantr\xE6er, har desuden den positive egenskab, at den binder sundhedsskadeligt vejst\xF8v p\xE5 en b\xE6redygtig m\xE5de. Ved at erstatte salt med Dustex i forbindelse med st\xF8vbinding, kan CO2-udslippet derfor reduceres med mere end 70%. </p><a href="/kontakt" class="text-white font-bold text-sm md:text-xl"><div class="h-11 w-fit rounded p-2 bg-[#2a8447] translate-y-4 transition-transform md:duration-200 md:hover:scale-110 text-center border shadow-2xl"><button class="translate-y-1 sm:translate-y-0 text-base block"> Kontakt Grusvej.dk </button></div></a></div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Naturstiinfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "naturstier",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    const tabs = [
      {
        id: 1,
        name: "Maskine 1",
        imgSrc: "https://images.pexels.com/photos/12495785/pexels-photo-12495785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eaque iste porro expedita pariatur? Consectetur accusamus doloribus soluta dicta! Labore suscipit quis facere aut dignissimos asperiores officia eaque excepturi magni saepe, dolores non eos ipsum",
        manchet: "manchet"
      },
      {
        id: 2,
        name: "Maskine 2",
        imgSrc: "https://images.pexels.com/photos/4372184/pexels-photo-4372184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eaque iste porro expedita pariatur? Consectetur accusamus doloribus soluta dicta! Labore suscipit quis facere aut dignissimos asperiores officia eaque excepturi magni saepe, dolores non eos ipsum",
        manchet: "manchet"
      },
      {
        id: 3,
        name: "Maskine 3",
        imgSrc: "https://images.pexels.com/photos/8938485/pexels-photo-8938485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eaque iste porro expedita pariatur? Consectetur accusamus doloribus soluta dicta! Labore suscipit quis facere aut dignissimos asperiores officia eaque excepturi magni saepe, dolores non eos ipsum",
        manchet: "manchet"
      },
      {
        id: 4,
        name: "Maskine 4",
        imgSrc: "https://images.pexels.com/photos/12932782/pexels-photo-12932782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eaque iste porro expedita pariatur? Consectetur accusamus doloribus soluta dicta! Labore suscipit quis facere aut dignissimos asperiores officia eaque excepturi magni saepe, dolores non eos ipsum",
        manchet: "manchet"
      },
      {
        id: 5,
        name: "Maskine 5",
        imgSrc: "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eaque iste porro expedita pariatur? Consectetur accusamus doloribus soluta dicta! Labore suscipit quis facere aut dignissimos asperiores officia eaque excepturi magni saepe, dolores non eos ipsum",
        manchet: "manchet"
      }
    ];
    ref(tabs[0]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Naturstiinfo = __nuxt_component_0;
      const _component_center = resolveComponent("center");
      _push(`<!--[--><head data-v-e513afef><title data-v-e513afef>Grusvej.dk - profesionelle naturstier i alt terr\xE6n</title><meta name="description" content="Vores tyske maskinpark er af skr\xE6ddersyet Stehr maskiner, bygget til etablering og vedligehold af naturstier. Vi anl\xE6gger naturstier i hele landet." data-v-e513afef></head><div class="bg-white" data-v-e513afef><main class="isolate" data-v-e513afef><img class="-z-10 opacity-80 clippath1 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8" src="https://i.ibb.co/gtZq30x/Untitled-design.png" alt="Image Description" data-v-e513afef><img class="-z-10 opacity-80 clippath2 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8" src="https://i.ibb.co/p1253nF/Untitled-design-1.png" alt="Image Description" data-v-e513afef><div class="relative isolate -z-10" data-v-e513afef><svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true" data-v-e513afef><defs data-v-e513afef><pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse" data-v-e513afef><path d="M.5 200V.5H200" fill="none" data-v-e513afef></path></pattern></defs><svg x="50%" y="-1" class="overflow-visible fill-gray-50" data-v-e513afef><path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" class="fill-SubColor2" data-v-e513afef></path></svg><rect stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" class="sm:max-w-[100%] sm:max-h-[100%] max-w-[390px]" data-v-e513afef></rect></svg><div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true" data-v-e513afef><div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#137733] to-[#f9b039] opacity-30" style="${ssrRenderStyle({ "clip-path": "polygon(\r\n                63.1% 29.5%,\r\n                100% 17.1%,\r\n                76.6% 3%,\r\n                48.4% 0%,\r\n                44.6% 4.7%,\r\n                54.5% 25.3%,\r\n                59.8% 49%,\r\n                55.2% 57.8%,\r\n                44.4% 57.2%,\r\n                27.8% 47.9%,\r\n                35.1% 81.5%,\r\n                0% 97.7%,\r\n                39.2% 100%,\r\n                35.2% 81.4%,\r\n                97.2% 52.8%,\r\n                63.1% 29.5%\r\n              )" })}" data-v-e513afef></div></div><div class="overflow-hidden" data-v-e513afef><div class="mx-auto max-w-7xl px-6 pb-20 pt-14 sm:pt-20 lg:px-8 lg:pt-0" data-v-e513afef><div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center" data-v-e513afef><div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl mb-72 translate-y-10" data-v-e513afef><h1 class="Header" data-v-e513afef> PROFESSIONEL ANL\xC6GGELSE AF NATURSTIER </h1><p class="Text TextReadable sm:max-w-md lg:max-w-none pt-20 -translate-y-10" data-v-e513afef> I fremtiden skal vi udlede meget mindre CO2 og derfor er vi n\xF8dt til at t\xE6nke nyt. I 2030 skal vi v\xE6re i m\xE5l med de klimam\xE5l verdenssamfundet har sat op. Hos Grusvej.dk har vi udviklet en unik metode til etablering og vedligehold af naturstier som med et minimalt CO2 forbrug giver en natursti med h\xF8j b\xE6reevne og langtidsholdbarhed. <br data-v-e513afef><br data-v-e513afef> Generelt anl\xE6gger vi i dag naturstier og sm\xE5veje gennem terr\xE6net, s\xE5 vi kan f\xE6rdes sikkert ude i de rekreative omr\xE5der, der i de fleste kommuner udl\xE6gges i forbindelse med den almindelige arealudnyttelse. Det v\xE6re sig i naturomr\xE5der, genoprettede grusgravsomr\xE5der, nyanlagte skovomr\xE5der. Omr\xE5der med mangfoldighed, biodiversitet og plads til udeaktiviteter, vandre- og cykelruter, shelterpladser med overnatningsmuligheder. <br data-v-e513afef><br data-v-e513afef> Det er typisk kommuner, store virksomheder og kapitalfonde der st\xE5r for gennemf\xF8relsen af disse naturprojekter, som viser at menneskelig aktivitet kan forenes med b\xE6redygtighed og biodiversitet. De store arealer der udl\xE6gges i disse \xE5r, er samtidigt med til at minimere CO2-udledningerne, da vores skove opsuger CO2. For at kunne f\xE6rdes i disse omr\xE5der, skal der etableres stier og mindre veje som kan b\xE6re f\xE6rdsel af mindre k\xF8ret\xF8jer. </p></div><div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 lg:-translate-y-32 -translate-y-0" data-v-e513afef><div class="ml-auto w-60 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80" data-v-e513afef><div class="relative -translate-y-20" data-v-e513afef><img src="https://i.ibb.co/PjXcGn6/Naturstier1-Grusvej.webp" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" data-v-e513afef><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" data-v-e513afef></div></div></div><div class="mr-auto w-60 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36 lg:-translate-y-0 -translate-y-20" data-v-e513afef><div class="relative -translate-y-20" data-v-e513afef><img src="https://i.ibb.co/gtrs2bF/Naturstier2-Grusvej.webp" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" data-v-e513afef><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" data-v-e513afef></div></div><div class="relative -translate-y-20" data-v-e513afef><img src="https://i.ibb.co/vZYpFRn/Naturstier3-Grusvej.webp" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" data-v-e513afef><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" data-v-e513afef></div></div></div></div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_Naturstiinfo, null, null, _parent));
      _push(ssrRenderComponent(_component_center, { class: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-4" data-v-e513afef${_scopeId}><svg class="absolute h-[40rem] w-[100%] mobile flex-none stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true" data-v-e513afef${_scopeId}><defs data-v-e513afef${_scopeId}><pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)" data-v-e513afef${_scopeId}><path d="M.5 200V.5H200" fill="none" data-v-e513afef${_scopeId}></path></pattern></defs><svg x="50%" y="50%" class="overflow-visible fill-gray-50" data-v-e513afef${_scopeId}><path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" class="fill-SubColor2" data-v-e513afef${_scopeId}></path></svg><rect stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" class="sm:max-w-[100%] sm:max-h-[100%] max-w-[390px]" data-v-e513afef${_scopeId}></rect></svg></div><div class="relative lg:-translate-y-44 -translate-y-32" data-v-e513afef${_scopeId}><h2 class="w-full text-7xl font-bold ml-auto Header" data-v-e513afef${_scopeId}>SPECIAL MASKINER SKABER KVALITET</h2><p class="mt-6 font-medium text-2xl sm:text-xl text-center leading-relaxed sm:max-w-[80%]" data-v-e513afef${_scopeId}>Vores stenknuser er en af de eneste i Danmark - en maskine der er unik for det perfekte resultat hver gang der skal l\xE6gges nye grusveje med grove baser af st\xF8rre sten og betonstumper. </p></div><div class="relative xl:mx-auto xl:max-w-7xl xl:px-8 -translate-y-28" data-v-e513afef${_scopeId}><img src="https://i.ibb.co/bLBhZ9t/Naturstier-grusvej.webp" alt="" class="max-h-[500px] w-full object-cover xl:rounded-3xl" data-v-e513afef${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-4" }, [
                (openBlock(), createBlock("svg", {
                  class: "absolute h-[40rem] w-[100%] mobile flex-none stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]",
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
                    "stroke-width": "0",
                    fill: "url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)",
                    class: "sm:max-w-[100%] sm:max-h-[100%] max-w-[390px]"
                  })
                ]))
              ]),
              createVNode("div", { class: "relative lg:-translate-y-44 -translate-y-32" }, [
                createVNode("h2", { class: "w-full text-7xl font-bold ml-auto Header" }, "SPECIAL MASKINER SKABER KVALITET"),
                createVNode("p", { class: "mt-6 font-medium text-2xl sm:text-xl text-center leading-relaxed sm:max-w-[80%]" }, "Vores stenknuser er en af de eneste i Danmark - en maskine der er unik for det perfekte resultat hver gang der skal l\xE6gges nye grusveje med grove baser af st\xF8rre sten og betonstumper. ")
              ]),
              createVNode("div", { class: "relative xl:mx-auto xl:max-w-7xl xl:px-8 -translate-y-28" }, [
                createVNode("img", {
                  src: "https://i.ibb.co/bLBhZ9t/Naturstier-grusvej.webp",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/naturstier.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const naturstier = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e513afef"]]);

export { naturstier as default };
//# sourceMappingURL=naturstier-b93c82dd.mjs.map