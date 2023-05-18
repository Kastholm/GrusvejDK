<template>
  <div class="pictures">
  <a href="#">
    <figure>
      <img src="https://source.unsplash.com/200x200/?trousers" alt="">
      <figcaption>
        <h4> Display:grid is vet!</h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </figcaption>
    </figure>
  </a>
  <a href="https://source.unsplash.com/200x200/?trousers">
    <figure>
      <img src="https://source.unsplash.com/200x200/?shirts" alt="">
      <figcaption>
        <h4>En object-fit:cover voor images ook!</h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua
      </figcaption>
    </figure>
  </a>
  <a href="#">
    <figure>
      <img src="https://source.unsplash.com/200x500/?boots" alt="">
      <figcaption>
        <h4>Je kan foto's makkelijk "croppen" naar elk formaat...</h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua
      </figcaption>
    </figure>
  </a>
  <a href="#">
    <figure>
      <img src="https://source.unsplash.com/200x500/?hats" alt="">
      <figcaption>
        <h4>...wat hun oorspronkelijke afmeting ook is, maakt niet uit!</h4>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </figcaption>
    </figure>
  </a>
  <a href="#">
    <figure>
      <img src="https://source.unsplash.com/200x500/?shoes" alt="">
      <figcaption>
        <h4>Dus de foto's kunnen overal vandaan komen..</h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua
      </figcaption>
    </figure>
  </a>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 16px;
  margin: 20px;
}

h3 {
  text-align: center;
  font-size: 1.65em;
  margin: 50px 30%;
  line-height: 1.2;
}

.pictures {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 3%;
}

.pictures img {
  object-fit: cover;
  width: 100%;
  height:auto;
  height: 200px;
  transition: transform 0.2s ease;
}

a {
  margin-bottom: 8px;
  text-decoration: none;
  color: black;
}

strong {
  font-weight: 700;
}

h4 {
  font-size: 24px;
  line-height: 1;
  text-align: left;
  font-weight: 700;
  margin-bottom: 10px;
}

figcaption {
  margin: 15px 0 30px 0;
  line-height: 1.3;
}


/* EN NU HIERONDER ALLE RESPPONSIVE DINGEN */

/* Bij maximaal 900px beeldschermbreedte, DOE DIT... */
@media (max-width: 900px) {
  .pictures {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

/* Bij maximaal 500px beeldschermbreedte, DOE DIT... */
@media (max-width: 500px) {
  .pictures {
    grid-template-columns: 1fr 1fr;
  }
  h3 {
    margin: 50px 10%;
  }
}

/* Enzovoort... */
@media (max-width: 400px) {
  .pictures {
    grid-template-columns: 1fr 1fr;
  }
}

/* Enzovoort... */
@media (max-width: 300px) {
  .pictures {
    grid-template-columns: 1fr;
  }
}
</style>