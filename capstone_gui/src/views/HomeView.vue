<template>
  <div class="home">
    <!-- carousel -->
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src="https://i.ibb.co/74zSKCy/wall1a.png" class="d-block w-100" alt="#">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="https://i.ibb.co/YcX2rJy/wall2a.png" class="d-block w-100" alt="#">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="https://i.ibb.co/QbZrCbS/wall4a.png" class="d-block w-100" alt="#">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- featured -->
    <div class="container mx-auto">
      <h1 class="display-3 p-5 glow">Featured</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" id="featured">
          <div class="card h-100 shadow-lg">
            <img src="https://i.ibb.co/d7FfPR5/IMG-2505-A.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">Elevate your style with our jewelry collection, blending timeless
                beauty and sophistication.</p>
            </div>
          </div>
        </div>
        <div class="col" id="featured">
          <div class="card h-100 shadow-lg">
            <img src="https://i.ibb.co/0Ff15Pq/IMG-2503-A.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">Radiate luxury and elegance with our exquisite gold jewelry pieces, meticulously
                crafted to capture the essence of opulence..</p>
            </div>
          </div>
        </div>
        <div class="col" id="featured">
          <div class="card h-100 shadow-lg">
            <img src="https://i.ibb.co/VDQmDZr/IMG-2506-A.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">Transform your everyday look into a statement of glamour with our
                selection of gold jewelry that stands the test of time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- huggies -->
    <h1 class="display-3 p-5 glow">Let's Talk Huggies!</h1>
    <div class="card mb-3 mx-auto" style="max-width: 64rem; border: none;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="https://i.ibb.co/n3rdsg7/IMG-2504.jpg" class="img-fluid rounded-start" alt="..." id="featured">
        </div>
        <div class="col-md-8 d-flex" style="align-items: center;">
          <div class="card-body">
            <h1 class="card-title display-6 p-2 glow">WHAT ARE HUGGIES?</h1>
            <p class="card-text p-4">Small, metal hoops that 'hug' the ear, very close to the earlobe. Huggies are
              designed
              with two different back
              closures, lever or hinged back (latch) closings. Huggies will stay in place all day long because of the hoop
              earring fastening types, <br> ✨aaaamaazing right✨</p>
            <h3 class="card-title display-6 p-2 glow">Huggies vs Hoop🫧🪩</h3>
            <p class="p-4">
              Huggies earrings are smaller and fit snugly against the earlobe, while hoop earrings are larger and circle
              around
              the entire ear.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- shop -->
    <h1 class="display-6 p-5"><router-link to="/products" class="sn p-1" style="text-decoration: none;">SHOP NOW
        →</router-link></h1>
  </div>
</template>

<script>
</script>

<style scoped>
.carousel .img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 100%;
}

.glow {
  color: #92700f;
  text-align: center;
  animation: glow 1s ease-in-out infinite alternate;
}

#featured {
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
  cursor: pointer;
}

#featured:hover {
  transform: scale(1.05);
}

.sn {
  color: #92700f;
  text-align: center;
  box-shadow: inset 0 0 0 0 #d4a31b;
  padding: 0 .25rem;
  margin: 0 -.25rem;
  transition: color .4s ease-in-out, box-shadow .3s ease-in-out;
  border-radius: 7px;
  /* animation: glow 1s ease-in-out infinite alternate; */
}

.sn:hover {
  color: #ffffff;
  box-shadow: inset 300px 0 0 0 #92700f;
  ;
}

p {
  font-size: 1.2rem;
}
</style>
