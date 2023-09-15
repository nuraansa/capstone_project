<template>
  <div class="about" id="about">
    <div class="container">
      <img src="https://i.ibb.co/0KN5sNy/IMG-2502.jpg" alt="Blurred Image" class="img-fluid blurry-image"
        data-aos="zoom-in">
      <div class="text-overlay">
        <h1 class="display-1 p-1 glow me" data-aos="zoom-in-down">About Us</h1>
      </div>
    </div>
    <!-- <img class="img-fluid" src="https://i.ibb.co/0KN5sNy/IMG-2502.jpg" style="width: 70%;" data-aos="zoom-in"> -->
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
      <div class="card mb-3 mx-auto">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://i.ibb.co/JHV7q2B/AIMG-2507.jpg" class="img-fluid rounded-start" alt="..."
              data-aos="fade-up">
          </div>
          <div class="col-md-8 mx-auto d-flex">
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
      <div class="card mb-3 mx-auto">
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
            <img src="https://i.ibb.co/6cQTCSG/ALJ10.jpg" class="img-fluid rounded-start" alt="..." data-aos="fade-up">
          </div>
        </div>
      </div>
      <!-- card3 -->
      <div class="card mb-3 mx-auto">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://i.ibb.co/mRFyz3X/AIMG-2508.jpg" class="img-fluid rounded-start" alt="..."
              data-aos="fade-up">
          </div>
          <div class="col-md-8 mx-auto d-flex">
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
      <div class="card mb-3 mx-auto">
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
            <img src="https://i.ibb.co/9bx8NZT/ALJ11.jpg" class="img-fluid rounded-start" alt="..." data-aos="fade-up">
          </div>
        </div>
      </div>
    </div>
    <!-- accordian -->
    <div class="container text-center">
      <h1 class="display-3 p-5 glow" data-aos="fade-up">Our core values</h1>
      <div class="accordion accordion-flush mx-auto" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              LUXURY AND LEGACY
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">We only use quality materials and high-quality minimal packaging, and aspire to
              create
              a luxurious shopping experience through both our physical and online stores. We tell meaningful narratives
              around our collections and aim to design pieces that can be worn for a life time.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              INCLUSIVITY
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Local job creation is of the utmost importance to us and has been a driving force
              in our business since its inception. We speak up about things that are important to us in our community and
              welcoming all races, genders, religions.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              NATURE AND SUSTAINABILITY
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Lily Jewels has pledged to donate 5% of all profits from every collection launched
              to
              a local establishment or initiative that exists to create a better tomorrow for all.
            </div>
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
  margin: 2rem;
  font-size: 6.5rem;
  text-shadow: 5px 4px 2px #ffffff;
  white-space: nowrap;
  overflow: initial;
  width: 95%;
  animation: typing 1.4s steps(20), cursor 0.4s step-end infinite alternate;
}

.accordion-header {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

/* 
@keyframes cursor {
  50% {
    border-color: transparent;
  }
}

@keyframes typing {
  from {
    width: 0rem;
  }
} */
.centered {
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  max-width: 100%;
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
  font-size: 1.6rem;
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
} */

/* about */
.container {
  position: relative;
}

/* Blurred image */
.blurry-image {
  width: 100%;
  filter: blur(4px);
}

/* Text overlay */
.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* Semi-transparent background */
  color: white;
  padding: 20px;
  /* font-size: 28px; */
  text-align: center;
}

/* media query */
@media screen and (max-width: 1200px) {
  .me {
    font-size: 4.5rem;
  }

  .card-title {
    font-size: 1.8rem;
  }

  .card-text {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 1043px) {

  /* Change card layout to image on top and text on bottom */
  .card {
    display: flex;
    width: 100%;
  }

  .card-body {
    display: flex;
    flex-direction: column;
  }

  .card-title {
    font-size: 1.5rem;
    text-align: center;
  }

  .card-text {
    font-size: 1rem;
    text-align: center;
  }

  .card-img-top {
    width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 992px) {
  .me {
    font-size: 3.5rem;
  }

  .card-title {
    font-size: 1.6rem;
  }

  .card-text {
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0.5rem;
  }

  .me {
    font-size: 2.5rem;
  }

  .text-overlay {
    text-align: center;
  }

  .accordion-body {
    text-align: center;
  }
}
</style>