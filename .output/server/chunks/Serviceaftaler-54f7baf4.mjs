import { useSSRContext, ref, resolveComponent, withCtx, createVNode, createTextVNode, unref } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const _sfc_main$1 = {
  __name: "GrusvejForm",
  __ssrInlineRender: true,
  props: {
    selectedService: String
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const schema = yup.object({
      email: yup.string().email(),
      phone: yup.string().required(),
      name: yup.string().required(),
      service: yup.string().required()
    });
    const selectedOption = ref(props.selectedService);
    async function onSubmit(values) {
      console.log(values);
      const formData = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        grusvej: selectedOption.value,
        text: values.text
      };
      try {
        const response = await fetch("https://grusvejmail.webtify.dk/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          notificationMessage.value = "E-mail sendt!";
          isNotificationVisible.value = true;
        } else {
          notificationMessage.value = "Fejl ved afsendelse af e-mail.";
          isNotificationVisible.value = true;
        }
      } catch (error) {
        console.error("There was an error sending the e-mail:", error);
      }
    }
    function closeForm() {
      emit("close");
    }
    const isNotificationVisible = ref(false);
    const notificationMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Form), {
        "validation-schema": unref(schema),
        onSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="bg-gray-300 bg-opacity-60 grid py-20 lg:py-[120px] fixed right-0 left-0 top-0 bottom-0 z-50"${_scopeId}><div class="container m-auto"${_scopeId}><div class=""${_scopeId}><div class="w-full m-auto lg:w-1/2 xl:w-5/12 px-4"${_scopeId}><div class="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg"${_scopeId}><button class="absolute bg-red-400 px-2 rounded-full top-3 right-3 text-2xl"${_scopeId}> X </button><div class="mb-6"${_scopeId}><p class="mb-8 text-lg"${_scopeId}> V\xE6lg din grusvejs l\xF8sning her, <br${_scopeId}> s\xE5 vender vi tilbage til dig hurtigst muligt. </p>`);
            _push2(ssrRenderComponent(unref(Field), {
              modelValue: selectedOption.value,
              "onUpdate:modelValue": ($event) => selectedOption.value = $event,
              name: "service",
              as: "select",
              class: "w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option value="" disabled${_scopeId2}>V\xE6lg en mulighed</option><option value="Basis "${_scopeId2}>Basis</option><option value="Medium"${_scopeId2}>Medium</option><option value="Super"${_scopeId2}>Super</option>`);
                } else {
                  return [
                    createVNode("option", {
                      value: "",
                      disabled: ""
                    }, "V\xE6lg en mulighed"),
                    createVNode("option", { value: "Basis " }, "Basis"),
                    createVNode("option", { value: "Medium" }, "Medium"),
                    createVNode("option", { value: "Super" }, "Super")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "grusvej" }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              class: "w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary",
              placeholder: "Dit Navn",
              name: "name",
              type: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "name" }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              class: "w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary",
              placeholder: "Din Email",
              name: "email",
              type: "email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "email" }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "phone",
              type: "tel",
              placeholder: "Dit tlf nr.",
              class: "w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              as: "textarea",
              name: "text",
              placeholder: "Din Besked",
              modelValue: _ctx.text,
              "onUpdate:modelValue": ($event) => _ctx.text = $event,
              class: "w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary",
              rows: "4"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><button class="w-full text-gray-700 bg-primary rounded border border-primary p-3 transition hover:bg-opacity-90"${_scopeId}> Send </button></div><div${_scopeId}></div></div></div></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "bg-gray-300 bg-opacity-60 grid py-20 lg:py-[120px] fixed right-0 left-0 top-0 bottom-0 z-50" }, [
                createVNode("div", { class: "container m-auto" }, [
                  createVNode("div", { class: "" }, [
                    createVNode("div", { class: "w-full m-auto lg:w-1/2 xl:w-5/12 px-4" }, [
                      createVNode("div", { class: "bg-white relative rounded-lg p-8 sm:p-12 shadow-lg" }, [
                        createVNode("button", {
                          onClick: closeForm,
                          class: "absolute bg-red-400 px-2 rounded-full top-3 right-3 text-2xl"
                        }, " X "),
                        createVNode("div", { class: "mb-6" }, [
                          createVNode("p", { class: "mb-8 text-lg" }, [
                            createTextVNode(" V\xE6lg din grusvejs l\xF8sning her, "),
                            createVNode("br"),
                            createTextVNode(" s\xE5 vender vi tilbage til dig hurtigst muligt. ")
                          ]),
                          createVNode(unref(Field), {
                            modelValue: selectedOption.value,
                            "onUpdate:modelValue": ($event) => selectedOption.value = $event,
                            name: "service",
                            as: "select",
                            class: "w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                          }, {
                            default: withCtx(() => [
                              createVNode("option", {
                                value: "",
                                disabled: ""
                              }, "V\xE6lg en mulighed"),
                              createVNode("option", { value: "Basis " }, "Basis"),
                              createVNode("option", { value: "Medium" }, "Medium"),
                              createVNode("option", { value: "Super" }, "Super")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(ErrorMessage), { name: "grusvej" })
                        ]),
                        createVNode("div", { class: "mb-6" }, [
                          createVNode(unref(Field), {
                            class: "w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary",
                            placeholder: "Dit Navn",
                            name: "name",
                            type: "name"
                          }),
                          createVNode(unref(ErrorMessage), { name: "name" })
                        ]),
                        createVNode("div", { class: "mb-6" }, [
                          createVNode(unref(Field), {
                            class: "w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary",
                            placeholder: "Din Email",
                            name: "email",
                            type: "email"
                          }),
                          createVNode(unref(ErrorMessage), { name: "email" })
                        ]),
                        createVNode("div", { class: "mb-6" }, [
                          createVNode(unref(Field), {
                            name: "phone",
                            type: "tel",
                            placeholder: "Dit tlf nr.",
                            class: "w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                          })
                        ]),
                        createVNode("div", { class: "mb-6" }, [
                          createVNode(unref(Field), {
                            as: "textarea",
                            name: "text",
                            placeholder: "Din Besked",
                            modelValue: _ctx.text,
                            "onUpdate:modelValue": ($event) => _ctx.text = $event,
                            class: "w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary",
                            rows: "4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", null, [
                          createVNode("button", { class: "w-full text-gray-700 bg-primary rounded border border-primary p-3 transition hover:bg-opacity-90" }, " Send ")
                        ]),
                        createVNode("div")
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (isNotificationVisible.value) {
        _push(`<div class="notification-modal grid"><p>${ssrInterpolate(notificationMessage.value)}</p><button class="bg-SubColor2 p-2 text-lg rounded-lg mt-4 m-auto text-gray-100"> Luk Formen </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GrusvejForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$1;
const _sfc_main = {
  __name: "Serviceaftaler",
  __ssrInlineRender: true,
  setup(__props) {
    const isFormVisible = ref(false);
    const selectedOption = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_center = resolveComponent("center");
      const _component_GrusvejForm = __nuxt_component_0$1;
      _push(`<!--[--><section class="overflow-hidden bg-white"><div class="pt-8 pb-7">`);
      _push(ssrRenderComponent(_component_center, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8"${_scopeId}><div class="sm:max-w-full"${_scopeId}><h1 class="relative sm:Header fontfam-NO-W sm:text-7xl text-5xl mb-10 text-center max-w-full pb-6 pt-10"${_scopeId}> \xC5rlig service <br${_scopeId}> - slip for at \xE6rgre dig over din grusvej </h1></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto max-w-full px-4 sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "sm:max-w-full" }, [
                  createVNode("h1", { class: "relative sm:Header fontfam-NO-W sm:text-7xl text-5xl mb-10 text-center max-w-full pb-6 pt-10" }, [
                    createTextVNode(" \xC5rlig service "),
                    createVNode("br"),
                    createTextVNode(" - slip for at \xE6rgre dig over din grusvej ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="bg-white pt-12 dark:bg-gray-800 -translate-y-16 sm:text-start text-center"><div class="relative container px-6 py-8 mx-auto"><div class="grid gap-6 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 -translate-y-8"><div class="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"><p class="text-lg font-medium text-gray-800 dark:text-gray-100"> Basis </p><h4 class="mt-2 text-4xl font-semibold text-center sm:text-start text-gray-800 dark:text-gray-100"> 39.- <span class="text-base font-normal text-gray-600 dark:text-gray-400">/ pr.meter</span></h4><p class="mt-4 text-gray-500 dark:text-gray-300 text-base"> Grusvejens l\xE6ngde er 100-300 meter. <br>(max. 3 meter bred)<br> Arealer ud over 300 meter \u2013 20% rabat. </p><div class="mt-8 space-y-8"><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#137733]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="sm:mx-4 text-gray-700 dark:text-gray-300">1 \xE5rlig afretning med Grader/komprimering</span></div><div class="flex items-center sm:pb-11"></div></div><button class="sm:translate-y-[96px] w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#137733] rounded-md hover:bg-[#f9b039] focus:outline-none focus:bg-blue-600"> V\xE6lg </button></div><div class="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"><p class="text-lg font-medium text-gray-800 dark:text-gray-100"> Medium </p><h4 class="mt-2 text-4xl font-semibold text-center sm:text-start text-gray-800 dark:text-gray-100"> 69.- <span class="text-base font-normal text-gray-600 dark:text-gray-400">/ pr.meter</span></h4><p class="mt-4 text-gray-500 dark:text-gray-300 text-base"> Grusvejens l\xE6ngde er 100-300 meter. <br>(max. 3 meter bred) <br> Arealer ud over 300 meter \u2013 20% rabat. <br></p><div class="mt-8 space-y-8"><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#137733]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="sm:mx-4 text-gray-700 dark:text-gray-300">2 \xE5rlige afretninger med grader/komprimering</span></div><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#137733]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="mx-4 text-gray-700 dark:text-gray-300">1x lag Dustex (slip for st\xF8vgener)</span></div></div><button class="sm:translate-y-28 w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#137733] rounded-md hover:bg-[#f9b039] focus:outline-none focus:[#137733]"> V\xE6lg </button></div><div class="px-6 py-4 transition-colors duration-200 transform bg-gray-700 rounded-lg dark:bg-gray-600"><p class="text-lg font-medium text-gray-100">Super</p><h4 class="mt-2 text-4xl font-semibold text-center sm:text-start text-gray-100"> 99.- <span class="text-base font-normal text-gray-400">/ pr.meter</span></h4><p class="mt-4 text-gray-300 text-base"> Grusvejens l\xE6ngde er 100-300 meter. <br>(max. 3 meter bred)<br> Arealer ud over 300 meter \u2013 20% rabat. </p><div class="mt-8 space-y-8"><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#137733]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-300 sm:mx-4">2 \xE5rlige afretninger med grader/komprimering &amp; profiludl\xE6gger</span></div><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#137733]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="mx-4 text-gray-300">Pasning af vejens nedsivning areal/gr\xF8ft</span></div><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#137733]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="mx-4 text-gray-300">Tilf\xF8rsel af det n\xF8dvendige vejgrus</span></div><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#137733]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="mx-4 text-gray-300">2x lag Dustex (slip for st\xF8vgener)</span></div></div><button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#137733] rounded-md hover:bg-[#f9b039] focus:outline-none focus:bg-[#137733]"> V\xE6lg </button></div></div></div></section>`);
      if (unref(isFormVisible)) {
        _push(ssrRenderComponent(_component_GrusvejForm, {
          selectedService: unref(selectedOption),
          onClose: ($event) => isFormVisible.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col items-center -translate-y-20 text-center"><h2 class="Header uppercase pt-12">Har du sp\xF8rgsm\xE5l?</h2><a href="/kontakt" class="text-white font-bold text-sm md:text-xl"><div class="h-14 w-fit rounded p-2 px-4 bg-[#2a8447] translate-y-2 transition-transform md:duration-200 md:hover:scale-110 text-center border shadow-2xl"><button class="translate-y-1 sm:translate-y-2 text-base block"> Kontakt Grusvej.dk </button></div></a></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Serviceaftaler.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Serviceaftaler-54f7baf4.mjs.map
