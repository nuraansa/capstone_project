<template>
    <div class="product m-5">
      <h1 class="display-3 p-3 head">SHOP NOW</h1>
      <h4 class="p-4">Each Royal Luxury Car is the result of a perfect interplay: consummate technology sophisticated art of engineering and custom craftsmanship make every Royal Luxury Car unique in its class.</h4>
      <div class="container-fluid">
        <button class="btn">Sort By Name</button>
      </div>
      <div class="row products row-cols-1 row-cols-sm-2 row-cols-lg-3 mt-3 mx-sm-5 d-flex justify-content-center" v-if="products">
        <div class="col mt-5"  v-for="product in products" :key="product.prodID">
          <div class="card">
            <img :src="product.prodUrl" class="card-img-top"
              :alt="product.prodName">
            <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">{{ product.details }}</p>
              <div class="card-footer">
                R {{ product.amount }}
              </div>
              <div class="container">
                <router-link 
                :to="{
                    name: 'single',
                    params: { prodID: product.prodID }
                    }"
                 ><button class="btn mt-2">View Product</button></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="row">
        <spinner/>
      </div>
    </div>
    </template>
  
  <script>
    import spinner from "@/components/SpinnerComp.vue"
  export default {
    components: {
      spinner
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
  
    },
    mounted() {
      this.$store.dispatch("fetchProducts");
    },
    methods: {
    }
  };
  </script>
  
  <style scoped>
  .head {
    text-shadow: 3px 2px 3px rgb(118, 112, 112);
  }
  .card {
    border: none;
  }
  .card-img-top {
    height: 15rem;
    object-fit: contain;
  }
  
  .card-text {
    height: 50px;
    overflow: auto;
  }
  
  .btn {
    background-color: #000000;
    color: #ffffff;
    border-radius: 1rem;
    padding: 0.3rem;
    border: 0;
    width: 7rem;
  }
  
  .btn:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid black;
    /* box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7); */
    /* transition: 0.2s;
    transform: scale(1.05); */
  }
  
  ::-webkit-scrollbar {
    width: 1px;
    height: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #84a7a1;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }
  
  .card-footer {
    border-top: none;
    background-color: transparent;
  }
  
  </style>