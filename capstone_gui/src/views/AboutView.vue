<template>
  <div class="about">
    <h1 class="display-1 p-1 glow me">About Us</h1>
    <img class="img-fluid" src="https://i.ibb.co/VJzzZrn/IMG-2502.jpg" style="width: 65rem;">
    <div class="container">
      <div class="row mx-auto m-5">
        <div class="col glow">
          <h2>All of our Jewellery is made with a Stainless Steel base and a 14k or 18k gold plating, making them
            <u>completely</u> WATER and TARNISH Proof.
          </h2>
        </div>
      </div>
    </div>
    <!-- 4 info cards -->
    <div class="container">
      <!-- card1 -->
      <div class="card mb-3 mx-auto" style="width: 60rem;">
        <div class="row g-0">
          <div class="col-md-5">
            <img src="https://i.ibb.co/JHV7q2B/AIMG-2507.jpg" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-7 mx-auto d-flex">
            <div class="card-body">
              <h5 class="card-title">DURABLE:</h5>
              <p class="card-text">
                Stainless steel is resistant to rust. It ranks 6 on the MOH (Mineral Hardness), while other metals such as
                silver ranks at 2.5. That means stainless steel is harder and can last longer than other metals such as
                silver and brass.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- card2 -->
      <div class="card mb-3 mx-auto" style="width: 60rem;">
        <div class="row g-0">
          <div class="col-md-8 d-flex">
            <div class="card-body">
              <h5 class="card-title">DOESN'T TARNISH:</h5>
              <p class="card-text">
                Stainless steel doesn't tarnish because of an invisible layer of chromium that prevents oxidation from
                occurring. If you're tired of high-maintenance jewelry, stick with stainless steel as it is resistant to
                rust, discoloration and oxidization.</p>
            </div>
          </div>
          <div class="col-md-4">
            <img src="https://i.ibb.co/6cQTCSG/ALJ10.jpg" class="img-fluid rounded-start" alt="...">
          </div>
        </div>
      </div>
      <!-- card3 -->
      <div class="card mb-3 mx-auto" style="width: 60rem;">
        <div class="row g-0">
          <div class="col-md-5">
            <img src="https://i.ibb.co/mRFyz3X/AIMG-2508.jpg" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-7 mx-auto d-flex">
            <div class="card-body">
              <h5 class="card-title">ENVIRONMENTAL FRIENDLY:</h5>
              <p class="card-text">
                Stainless Steel is 100% recyclable and is therefore a green product. Stainless Steel manufacturing saves
                non-renewable resources such as gold and silver. Compared to other options, stainless steel produces less
                waste during the manufacturing process.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- card4 -->
      <div class="card mb-3 mx-auto" style="width: 60rem;">
        <div class="row g-0">
          <div class="col-md-8 d-flex">
            <div class="card-body">
              <h5 class="card-title">HYPOALLERGENIC:</h5>
              <p class="card-text">
                Stainless Steel is also Hypoallergenic, allowing almost everyone to be able to wear our jewelry without
                irritation or infection.</p>
            </div>
          </div>
          <div class="col-md-4">
            <img src="https://i.ibb.co/9bx8NZT/ALJ11.jpg" class="img-fluid rounded-start" alt="...">
          </div>
        </div>
      </div>
    </div>
    <!-- accordian -->
    <div class="container m-5 text-center">
      <h1 class="display-3 p-5 glow">Our core values</h1>
      <div class="accordion accordion-flush mx-auto" id="accordionFlushExample" style="width: 40rem;">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being
              filled with some actual content.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
              happening here in terms of content, but just filling up the space to make it look, at least at first glance,
              a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glow {
  color: #92700f;
  text-align: center;
  /* animation: glow 1s ease-in-out infinite alternate; */
}

.me {
  text-shadow: 1px 2px 3px #777c7b;
  white-space: nowrap;
  overflow: initial;
  width: 100%;
  animation: typing 1.4s steps(20), cursor 0.4s step-end infinite alternate;
}

@keyframes cursor {
  80% {
    border-color: transparent;
  }
}

@keyframes typing {
  from {
    width: 0rem;
  }
}

.centered {
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  width: 100%;
  height: auto;
}

.card {
  border: none;
  color: #92700f;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-text {
  font-size: 1.2rem;
}

.card-title {
  font-size: 2.2rem;
  text-shadow: 1px 2px 3px #785c0d;
}

/* @media screen and (max-width:992px) {
img {
    width:100%;
    height: auto;
}
.container {
    max-width:100%;
    width: 100%;
}
.col-md-8{
    width:100%;
    float:left;
    margin:0;
}
.col-md-8{
    width:100%;
    float:left;
    margin:0;
}
} */</style>