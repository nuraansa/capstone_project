<template>
    <section class="sinlgeView" id="singleView">
      <!-- new -->
      <div class="container d-flex justify-content-center">
        <div class="row" v-if="product">
          <div class="col">
            <div class="card mb-3" style="width: 80%;">
              <div class="row g-0" v-for="product in product" :key="product.prodID">
                <div class="col-md-5">
                  <div class="image">
                    <img :src="product.prodUrl" class="card-img-top img-fluid prodImg" :alt="product.prodName" />
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="card-body" style="font-size: 1.5rem;">
                    <h5 class="card-title display-3">{{ product.prodName }}</h5>
                    <div class="cardText">
                      <p class="card-text">{{ product.content }}</p>
                    </div> <hr>
                    <p class="amount text-center">
                      <span class="boldP display-5"> R{{ product.amount }} </span>
                    </p>
                    <div class="addCart">
                    <router-link to="/product"><button class="btn">
                        Back to Products
                      </button></router-link>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="row">
          <spinner/>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import spinner from "@/components/SpinnerComp.vue"
  export default {
    components: {
      spinner
    },
    props: ["prodID"],
    created() {
      this.$store.dispatch("fetchProduct", this.prodID)
    },
    computed: {
      product() {
        return this.$store.state.product
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    height: 100vh;
  }
  
  .card {
    background-color: #fff;
    border: none;
  }
  .image{
    width: 100%; 
    display: flex;
    justify-content: center;
  }
  .btn {
    background-color: #000000;
    color: #ffffff;
    border-radius: 1rem;
    padding: 0.7rem;
    border: 0.5px solid black;
    width: 10rem;
  }
  
  .btn:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid black;
  }
  </style>