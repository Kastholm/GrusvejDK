<template>
  <section class="lg:w-[35%] m-auto lg:my-40">
    <div id="mc_embed_signup">
      <form
        action="https://grusvej.us12.list-manage.com/subscribe/post?u=20978f5d4cff56cb21297d119&amp;id=f89923efdb&amp;f_id=00130ee9f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll" class="mt-10">
          <h2>Modtag informationsbrev</h2>
          <h3 class="font-semibold">
            Ingen spam, ren information til pleje og vedligehold af din
            grusvej/grusområde
          </h3>
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email <span class="asterisk">*</span></label>
            <input
              type="email"
              value=""
              name="EMAIL"
              class="required email"
              id="mce-EMAIL"
              required
            />
          </div>
          <div
            id="mergeRow-gdpr"
            class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
          >
            <div class="content__gdpr">
              <p>Vi skal have lov at kontakte dig:</p>
              <fieldset
                class="mc_fieldset gdprRequired mc-field-group"
                name="interestgroup_field"
              >
                <label class="checkbox subfield" for="gdpr_94874">
                  <div class="flex mt-3">
                    <p>Email:</p>
                    <input
                      type="checkbox"
                      id="gdpr_94874"
                      name="gdpr[94874]"
                      class="gdpr max-w-[80px]"
                      value="Y"
                    />
                  </div>
                </label>
              </fieldset>
            </div>
          </div>
          <div id="mce-responses" class="clear">
            <div
              class="response"
              id="mce-error-response"
              style="display: none"
            ></div>
            <div
              class="response"
              id="mce-success-response"
              style="display: none"
            ></div>
          </div>
          <div aria-hidden="true" style="position: absolute; left: -5000px">
            <input
              type="text"
              name="b_20978f5d4cff56cb21297d119_f89923efdb"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="clear">
            <input
              type="submit"
              value="Tilmeld"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button bg"
            />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
// Mailchimp script JS

onMounted(() => {
  // Load Mailchimp validation script
  const script = document.createElement("script");
  script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
  script.async = true;
  document.body.appendChild(script);

  // Your custom Mailchimp JS (paste your functions here)
  script.onload = () => {
    // --- Paste your custom JS functions here ---
    // Example:
    window.fnames = new Array();
    window.ftypes = new Array();
    window.fnames[0] = "EMAIL";
    window.ftypes[0] = "email";
    // ...all your other functions from your prompt...
    // (You can paste your full code block here, or import from a separate file)
  };
});
</script>

<style></style>
