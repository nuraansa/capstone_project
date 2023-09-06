<template>
  <section class="sinlgeView" id="singleView">
    <!-- new -->
    <div class="container justify-content-center m-5 mx-auto">
      <div class="row" v-if="product">
        <div class="col">
          <div class="card mb-3">
            <div class="row g-0" style="align-items: center;" v-for="product in product" :key="product.prodID">
              <div class="col-md-6">
                <div class="image shadow-lg">
                  <img :src="product.prodUrl" class="card-img-top img-fluid prodImg" :alt="product.prodName" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="card-body" style="font-size: 1.5rem; color: #92700f;">
                  <h5 class="card-title display-4">{{ product.prodName }}</h5> <br><br>
                  <div class="cardText">
                    <p class="card-text">{{ product.prodDesc }}</p>
                  </div><br>
                  <hr> <br>
                  <p class="amount text-center">
                    <span class="boldP display-5"> R{{ product.price }} </span>
                  </p> <br>
                  <div class="addCart">
                    <router-link to="/products"><button class="btn m-1">
                        Add to Cart
                      </button></router-link>
                    <router-link to="/products"><button class="btn m-1">
                        Back to Products
                      </button></router-link> <br>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="row">
        <spinner />
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

.image {
  width: 100%;
  display: flex;
  justify-content: center;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 0.67);
  cursor: pointer;
}
.image:hover {
  transform: scale(1.05);
}

.btn {
  background-color: #92700f;
  color: #ffffff;
  border-radius: 1rem;
  padding: 0.7rem;
  border: 0.5px solid #92700f;
  width: 10rem;
}

.btn:hover {
  background-color: #ffffff;
  color: #92700f;
  border: 1px solid #92700f;
}
.card-title{
  text-shadow: 3px 2px 3px rgb(118, 112, 112);
}</style>