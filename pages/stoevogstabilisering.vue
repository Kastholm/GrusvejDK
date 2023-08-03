<template>
  <div class="bg-white">
    <main class="isolate">
      <!-- Hero section -->
      <div class="">
      <StoevUspHero />
       </div>
      <div class="relative isolate -z-10">
        <svg
          class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div
          class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#f9b039] to-[#137733] opacity-40"
            style="
              clip-path: polygon(
                63.1% 29.5%,
                100% 17.1%,
                76.6% 3%,
                48.4% 0%,
                44.6% 4.7%,
                54.5% 25.3%,
                59.8% 49%,
                55.2% 57.8%,
                44.4% 57.2%,
                27.8% 47.9%,
                35.1% 81.5%,
                0% 97.7%,
                39.2% 100%,
                35.2% 81.4%,
                97.2% 52.8%,
                63.1% 29.5%
              );
            "
          />
        </div>
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-0 lg:px-8 pt-14">
        <div class="mx-auto max-w-2xl lg:mx-0 inline">
          <h2
            class="font-bold tracking-tight text-gray-900 sm:text-7xl text-3xl Header text-center"
          >
            <span class="sm:text-9xl text-7xl rounded uppercase"> Dustex </span>- <span class=" uppercase text-[#199d43]"> miljøvenligt </span> PRODUKT
          </h2>
          <p class="mt-6 text-lg leading-8 font-semibold text-black text-center">
            Du får mange fordele ved at vælge Dustex til behandling af din grusvej eller grusarealer. 
          </p>
        </div>
        <dl
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <div v-for="value in values" :key="value.name" >
            <dt class="font-semibold text-xl text-gray-900 ">{{ value.name }}</dt>
            <dd class="mt-1 text-gray-600">{{ value.description }}</dd>
          </div>
        </dl>
      </div>
      </div>
      <div class="w-full pt-10">
        <h2 class="w-full pt-20 Header lg:m-auto text-7xl text-center uppercase text-gray-900">Stabilisering af vejen</h2>
        <p class="leading-8 text-lg text-center pt-5 text-gray-600 font-[5] w-[90%] m-auto tracking-wider">Når en grus- eller asfaltvej har en dårlig bærevne, kan Dustex med stor fordel også benyttes her, da det er en både effektiv og økonomisk ideel måde at opnå en stærk og blivende vejoverflade.

          Man kan iblande Dustex i gruset, eller endnu bedre, fræse Dustex ned i underlagets øverste lag. <br> <br> Ved at benytte en vejfræser knuses sten og asfalt til små fraktioner, så der sammen med Dustex, dannes en solid ny ”asfalt” der omdannes til en stærk ”plade” på vejens overflade.

          Denne metode er stærkt resursebesparende og økonomisk fordelagtig. På mindre befærdede veje kan man beholde vejen som den er uden at foretage sig yderligere, mens man på mere trafikerede vejstrækninger med fordel kan lægge et lag ny asfalt på toppen. Dette kan ske allerede 4 – 8 uger efter Dustex-behandlingen.
          <br><br>Beslutningen om at lægge asfalt kan faktisk vente endnu længere, da vejoverfladen med sin nygenerede Dustex-blanding sagtens kan holde nogle år.

          Dustex er et organisk træcellulose restprodukt der hverken skader miljø, mennesker eller dyr.</p>
      </div>

      <!--Stabilisering billeder-->
   <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-16">
    <!-- First grid item (Image 1 with text) -->
    <div class="flex flex-col items-center">
      <div class="mb-2 Header uppercase text-gray-900 text-4xl font-bold pb-4">Vejen behandles med Dustex</div>
      <img class="rounded-lg" src="https://i.ibb.co/vdJZpHF/vej-i-proces.jpg" alt="Image 1">
    </div>
    <!-- Second grid item (Image 2 with text) -->
    <div class="flex flex-col items-center">
      <div class="mb-2 Header uppercase text-gray-900 text-4xl font-bold pb-4">Hårdhed efter 14 dage</div>
      <img class="rounded-lg" src="https://i.ibb.co/vd7FRhw/vej-efter-14-dage.jpg" alt="Image 2">
    </div>
  </div> 
    
   
<!-- old Image section -->
      <div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <VideoPlayerDustex class="aspect-[5/2] w-full object-cover xl:rounded-3xl">
        </VideoPlayerDustex>
      </div>
      
      <!-- Content section -->
      <div class="mx-auto max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8 translate-y-10 sm:-translate-y-10 ">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2
            class="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 ml-3 pb-3 Header text-center"
          >
            SLIP FOR STØVGENER I ALT VIND & VEJR 
          </h2>
          <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p class="text-xl leading-8 text-gray-600">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
              <div class="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p class="mt-10">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
            <div class="lg:flex lg:flex-auto lg:justify-center flex-rows-reverse">
              <dl class="w-64 space-y-8 xl:w-80 inline lg:block">
                <div
                  v-for="stat in stats"
                  :key="stat.label"
                  class="flex flex-col-reverse gap-y-4 border-4 border-[#f9b039] text-center rounded-lg p-1 font-semibold "
                >
                  <dt class="text-base leading-1 text-black -translate-y-2">
                    {{ stat.label }}
                  </dt>
                  <center>
                  <dd
                    class="text-4xl fontfam font-semibold tracking-wide text-black"
                  >
                    {{ stat.value }}
                  </dd>
                  </center>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <!-- old Image section -->
     

      

      


      
    </main>
  </div>
</template>

<script setup>
import { defineComponent, h, ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Company", href: "#" },
];
const stats = [
  { label: "Dustex holder støvpartiklerne bundet i op til 1 år efter behandling af din grusvej.", value: "Op til 1 års holdbarhed" },
  { label: "Efter aftale ankommer vi på adressen og udfører arbejdet samme dag.", value: "Hurtig påføring" },
  { label: "Kroppen tager skade af kontinuerlig indånding af støvpartikler fra grusarealer. ", value: "Giver et bedre helbred" },
];
const values = [
  {
    name: "Ufarligt for dyr",
    description:
      "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.",
  },
  {
    name: "Allergivenligt",
    description:
      "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.",
  },
  {
    name: "Biologisk nedbrydeligt",
    description:
      "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.",
  },
  {
    name: "Ingen rustpåvirkning af biler & maskiner",
    description:
      "Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.",
  },
  {
    name: "Helbredsmæssige fordele",
    description:
      "Kontinuerlig indånding af støvpartikler kan skade både mennesker og dyr på længere sigt - hvis man ofte opholder sig tæt på grusarealer såsom en grusvej, er det en fordel at få behandlet for støvgener. ",
  },
  {
    name: "Lugtfrit naturprodukt",
    description:
      "Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.",
  },
];

const mobileMenuOpen = ref(false);
</script>

<style scoped>

</style>

