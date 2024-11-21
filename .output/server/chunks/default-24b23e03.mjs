import { _ as __nuxt_component_0$1 } from './nuxt-link-15b2078b.mjs';
import { useSSRContext, ref, resolveComponent, mergeProps, withCtx, createVNode, withDirectives, vModelText, toDisplayString, openBlock, createBlock, createCommentVNode, resolveDynamicComponent, createTextVNode, unref, Transition, Fragment, renderList, defineComponent, h } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderVNode } from 'vue/server-renderer';
import { Disclosure, DisclosureButton, Menu, MenuButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'ufo';
import './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'defu';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'h3';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$2 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = ref({
      email: "",
      phone: "",
      name: ""
    });
    const isLoading = ref(false);
    const successMessage = ref("");
    const errorMessage = ref("");
    async function sendEmail() {
      isLoading.value = true;
      successMessage.value = "";
      errorMessage.value = "";
      try {
        console.log("eow");
        const response = await fetch(
          "/api/send",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData.value)
          }
        );
        console.log("test", response);
        console.log("eow2");
        const result = await response.json();
        console.log("Footer send data", result);
        if (response.ok && result.success) {
          successMessage.value = "Din besked blev sendt succesfuldt!";
          formData.value = { email: "", phone: "", name: "" };
        } else {
          throw new Error(result.error || "Failed to send email");
        }
      } catch (error) {
        errorMessage.value = `Fejl: ${error.message}`;
      } finally {
        isLoading.value = false;
      }
    }
    const navigation = {
      solutions: [
        { name: "Forside", href: "https://grusvej.dk/" },
        { name: "Grusveje", href: "https://grusvej.dk/grusveje" },
        { name: "Naturstier", href: "https://grusvej.dk/naturstier" },
        { name: "St\xF8vbek\xE6mpelse", href: "https://grusvej.dk/stoevbekaempelse" },
        { name: "Stabilisering af vejen", href: "https://grusvej.dk/stabiliseringafvejen" },
        { name: "Maskineriet", href: "https://grusvej.dk/maskineriet" },
        { name: "Serviceaftaler", href: "https://grusvej.dk/serviceaftale" }
      ],
      support: [
        { name: "Politik for databehandling", href: "#" },
        { name: "Vilk\xE5r", href: "#" },
        { name: "Salgs- & leveringsbetingelser", href: "#" }
      ],
      company: [
        { name: "Kontakt Grusvej.dk", href: "https://grusvej.dk/kontakt/" }
      ],
      legal: [
        { name: "Politik for databehandling", href: "#" },
        { name: "GDPR", href: "#" },
        { name: "Vilk\xE5r", href: "#" }
      ],
      social: [
        {
          name: "Facebook",
          href: "https://www.facebook.com/p/Grusvejdk-100063899478149/",
          icon: /* @__PURE__ */ defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                "clip-rule": "evenodd"
              })
            ])
          })
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Form = resolveComponent("Form");
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "bg-white text-center",
        "aria-labelledby": "footer-heading"
      }, _attrs))}><h2 id="footer-heading" class="sr-only">Footer</h2><div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-16 lg:px-8 lg:pt-16"><div class="xl:grid xl:grid-cols-3 xl:gap-0"><div class="grid grid-cols-2 gap-8 xl:col-span-2"><div class="md:grid md:grid-cols-1 md:gap-8"><div><h6 class="text-lg font-semibold leading-6 text-gray-900"> Oversigt </h6><ul role="list" class="mt-6 space-y-4 hover:scale-110 transition-all"><!--[-->`);
      ssrRenderList(navigation.solutions, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="text-base font-normal leading-6 text-gray-500 hover:text-[#2a8447]">${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="md:grid md:grid-cols-1 md:gap-8"><div><h6 class="text-lg font-semibold leading-6 text-gray-900"> Kontakt </h6><ul role="list" class="mt-6 space-y-4 hover:scale-110 transition-all"><!--[-->`);
      ssrRenderList(navigation.company, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="text-base leading-6 text-gray-600 hover:text-[#2a8447]">${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div></div><div class="mt-10 xl:mt-0"><h6 class="text-xl font-semibold leading-6 text-gray-900"> Skal vi kontakte dig? </h6><p class="mt-2 text-sm leading-6 text-gray-600"> Indtast email her - vi vender tilbage indenfor 24 timer alle hverdage. </p>`);
      _push(ssrRenderComponent(_component_Form, {
        "validation-schema": _ctx.schema,
        onSubmit: sendEmail,
        class: "mt-6 text-center m-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-2 place-content-center"${_scopeId}><input class="w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" placeholder="Din e-mail" name="email" type="email"${ssrRenderAttr("value", formData.value.email)}${_scopeId}><input name="phone" type="tel" placeholder="Dit telefon nr." class="w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"${ssrRenderAttr("value", formData.value.phone)}${_scopeId}><input class="w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" placeholder="Dit navn" name="name" type="text"${ssrRenderAttr("value", formData.value.name)}${_scopeId}><div class="mt-4 sm:mt-3 sm:flex-shrink-0 justify-center items-center flex"${_scopeId}><button type="submit" class="flex max-w-[90px] min-w-[90px] h-10 items-end justify-center rounded-md bg-[#2a8447] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#f9b039] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(isLoading.value ? "Sending..." : "Afsted")}</button></div>`);
            if (successMessage.value) {
              _push2(`<p class="text-base font-bold text-green-500 mt-2"${_scopeId}>${ssrInterpolate(successMessage.value)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (errorMessage.value) {
              _push2(`<p class="text-base font-bold text-red-500 mt-2"${_scopeId}>${ssrInterpolate(errorMessage.value)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid gap-2 place-content-center" }, [
                withDirectives(createVNode("input", {
                  class: "w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary",
                  placeholder: "Din e-mail",
                  name: "email",
                  type: "email",
                  "onUpdate:modelValue": ($event) => formData.value.email = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, formData.value.email]
                ]),
                withDirectives(createVNode("input", {
                  name: "phone",
                  type: "tel",
                  placeholder: "Dit telefon nr.",
                  class: "w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary",
                  "onUpdate:modelValue": ($event) => formData.value.phone = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, formData.value.phone]
                ]),
                withDirectives(createVNode("input", {
                  class: "w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary",
                  placeholder: "Dit navn",
                  name: "name",
                  type: "text",
                  "onUpdate:modelValue": ($event) => formData.value.name = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, formData.value.name]
                ]),
                createVNode("div", { class: "mt-4 sm:mt-3 sm:flex-shrink-0 justify-center items-center flex" }, [
                  createVNode("button", {
                    type: "submit",
                    class: "flex max-w-[90px] min-w-[90px] h-10 items-end justify-center rounded-md bg-[#2a8447] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#f9b039] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                    disabled: isLoading.value
                  }, toDisplayString(isLoading.value ? "Sending..." : "Afsted"), 9, ["disabled"])
                ]),
                successMessage.value ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-base font-bold text-green-500 mt-2"
                }, toDisplayString(successMessage.value), 1)) : createCommentVNode("", true),
                errorMessage.value ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: "text-base font-bold text-red-500 mt-2"
                }, toDisplayString(errorMessage.value), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24"><div class="flex space-x-6 md:order-2"><!--[-->`);
      ssrRenderList(navigation.social, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="text-gray-400 hover:text-gray-500"><span class="sr-only">${ssrInterpolate(item.name)}</span>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
          class: "h-6 w-6",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`</a>`);
      });
      _push(`<!--]--></div><p class="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0"> \xA9 2024 Grusvej.dk - alle rettigheder reserveret. </p><p class="mt-8 text-sm leading-5 text-gray-500 md:order-1 md:mt-0 border-b-2"> Design af `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.webtify.dk",
        class: "text-blue-600 font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Webtify.dk`);
          } else {
            return [
              createTextVNode(" Webtify.dk")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div></footer>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Nav",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = [
      { name: "Forside", href: "/", current: true },
      { name: "Grusveje", href: "/grusveje", current: false },
      { name: "Naturstier", href: "/naturstier", current: false },
      { name: "St\xF8vbek\xE6mpelse", href: "/stoevbekaempelse", current: false },
      { name: "Stabilisering af vejen", href: "/stabiliseringafvejen", current: false },
      { name: "Maskineriet", href: "/maskineriet", current: false },
      { name: "Serviceaftale", href: "/serviceaftale", current: false },
      { name: "Nyheder", href: "/nyheder", current: false },
      { name: "Kontakt", href: "/kontakt", current: false }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(unref(Disclosure), mergeProps({
        as: "header",
        class: "bg-white shadow mt-3"
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8"${_scopeId}><div class="relative flex h-16 justify-between"${_scopeId}><div class="relative z-10 flex px-2 lg:px-0"${_scopeId}><div class="flex flex-shrink-0 items-center mb-2"${_scopeId}><img src="https://i.ibb.co/0KdRF98/Grusvej-logo-150x71px-1.png" alt="Grusvej-logo-150x71px-1" border="0"${_scopeId}></div></div><div class="relative z-10 flex items-center lg:hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DisclosureButton), { class: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="sr-only"${_scopeId2}>Open menu</span>`);
                  if (!open) {
                    _push3(ssrRenderComponent(unref(Bars3Icon), {
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(unref(XMarkIcon), {
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    createVNode("span", { class: "sr-only" }, "Open menu"),
                    !open ? (openBlock(), createBlock(unref(Bars3Icon), {
                      key: 0,
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    })) : (openBlock(), createBlock(unref(XMarkIcon), {
                      key: 1,
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    }))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(Menu), {
              as: "div",
              class: "relative ml-4 flex-shrink-0"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(MenuButton), { class: "flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="sr-only"${_scopeId3}>Open user menu</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "sr-only" }, "Open user menu")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode(unref(MenuButton), { class: "flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "sr-only" }, "Open user menu")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(Transition, {
                      "enter-active-class": "transition ease-out duration-100",
                      "enter-from-class": "transform opacity-0 scale-95",
                      "enter-to-class": "transform opacity-100 scale-100",
                      "leave-active-class": "transition ease-in duration-75",
                      "leave-from-class": "transform opacity-100 scale-100",
                      "leave-to-class": "transform opacity-0 scale-95"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><nav class="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global"${_scopeId}><!--[-->`);
            ssrRenderList(navigation, (item) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: item.name,
                to: item.href,
                class: [
                  "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                  "inline-flex items-center rounded-md py-2 px-[4px] text-sm font-medium"
                ],
                "aria-current": item.current ? "page" : void 0
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></nav></div>`);
            _push2(ssrRenderComponent(unref(DisclosurePanel), {
              as: "nav",
              class: "lg:hidden",
              "aria-label": "Global"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-1 px-2 pb-3 pt-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(navigation, (item) => {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      key: item.name,
                      to: item.href,
                      class: [
                        "text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
                      ],
                      "aria-current": item.current ? "page" : void 0
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div><div class="border-t border-gray-200 pb-3 pt-4"${_scopeId2}><div class="flex items-center px-4"${_scopeId2}></div><div class="mt-3 space-y-1 px-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(_ctx.userNavigation, (item) => {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      key: item.name,
                      to: item.href,
                      class: "block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-1 px-2 pb-3 pt-2" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                        return createVNode(_component_NuxtLink, {
                          key: item.name,
                          to: item.href,
                          class: [
                            "text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
                          ],
                          "aria-current": item.current ? "page" : void 0
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["to", "aria-current"]);
                      }), 64))
                    ]),
                    createVNode("div", { class: "border-t border-gray-200 pb-3 pt-4" }, [
                      createVNode("div", { class: "flex items-center px-4" }),
                      createVNode("div", { class: "mt-3 space-y-1 px-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.userNavigation, (item) => {
                          return openBlock(), createBlock(_component_NuxtLink, {
                            key: item.name,
                            to: item.href,
                            class: "block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"]);
                        }), 128))
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8" }, [
                createVNode("div", { class: "relative flex h-16 justify-between" }, [
                  createVNode("div", { class: "relative z-10 flex px-2 lg:px-0" }, [
                    createVNode("div", { class: "flex flex-shrink-0 items-center mb-2" }, [
                      createVNode("img", {
                        src: "https://i.ibb.co/0KdRF98/Grusvej-logo-150x71px-1.png",
                        alt: "Grusvej-logo-150x71px-1",
                        border: "0"
                      })
                    ])
                  ]),
                  createVNode("div", { class: "relative z-10 flex items-center lg:hidden" }, [
                    createVNode(unref(DisclosureButton), { class: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "sr-only" }, "Open menu"),
                        !open ? (openBlock(), createBlock(unref(Bars3Icon), {
                          key: 0,
                          class: "block h-6 w-6",
                          "aria-hidden": "true"
                        })) : (openBlock(), createBlock(unref(XMarkIcon), {
                          key: 1,
                          class: "block h-6 w-6",
                          "aria-hidden": "true"
                        }))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createVNode(unref(Menu), {
                    as: "div",
                    class: "relative ml-4 flex-shrink-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode(unref(MenuButton), { class: "flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "sr-only" }, "Open user menu")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(Transition, {
                        "enter-active-class": "transition ease-out duration-100",
                        "enter-from-class": "transform opacity-0 scale-95",
                        "enter-to-class": "transform opacity-100 scale-100",
                        "leave-active-class": "transition ease-in duration-75",
                        "leave-from-class": "transform opacity-100 scale-100",
                        "leave-to-class": "transform opacity-0 scale-95"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("nav", {
                  class: "hidden lg:flex lg:space-x-8 lg:py-2",
                  "aria-label": "Global"
                }, [
                  (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                    return createVNode(_component_NuxtLink, {
                      key: item.name,
                      to: item.href,
                      class: [
                        "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                        "inline-flex items-center rounded-md py-2 px-[4px] text-sm font-medium"
                      ],
                      "aria-current": item.current ? "page" : void 0
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["to", "aria-current"]);
                  }), 64))
                ])
              ]),
              createVNode(unref(DisclosurePanel), {
                as: "nav",
                class: "lg:hidden",
                "aria-label": "Global"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-1 px-2 pb-3 pt-2" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                      return createVNode(_component_NuxtLink, {
                        key: item.name,
                        to: item.href,
                        class: [
                          "text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
                        ],
                        "aria-current": item.current ? "page" : void 0
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["to", "aria-current"]);
                    }), 64))
                  ]),
                  createVNode("div", { class: "border-t border-gray-200 pb-3 pt-4" }, [
                    createVNode("div", { class: "flex items-center px-4" }),
                    createVNode("div", { class: "mt-3 space-y-1 px-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.userNavigation, (item) => {
                        return openBlock(), createBlock(_component_NuxtLink, {
                          key: item.name,
                          to: item.href,
                          class: "block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 128))
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  head: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  }
  // other configurations...
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-24b23e03.mjs.map
