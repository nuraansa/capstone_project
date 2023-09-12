<template>
  <div class="product m-3">
    <h1 class="display-3 p-3 head" style="color: #92700f;">Our Products</h1>
    <hr>
    <!-- search -->
    <div class="container mx-auto">
      <div class="row d-flex" style="align-items: center;">
        <div class="col">
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              SORT
            </button>
            <ul class="dropdown-menu">
              <li> <button class="btn m-2" @click="toggleSortOrder">Sort A-Z</button></li>
              <li> <button class="btn m-2" @click="toggleSortOrder">Sort by Price</button></li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search products..." v-model="searchQuery" />
            <button class="btn" @click="searchProducts">Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row products row-cols-1 row-cols-sm-2 row-cols-lg-3 mt-3 mx-sm-5 d-flex justify-content-center"
    v-if="products">
    <div class="col mt-5" v-for="product in products" :key="product.prodID">
      <div class="card">
        <img :src="product.prodUrl" class="card-img-top" :alt="product.prodName">
        <div class="card-body">
          <h5 class="card-title">{{ product.prodName }}</h5>
          <p class="card-text">{{ product.prodDesc }}</p>
          <div class="card-footer">
            R {{ product.price }}
          </div>
          <hr>
          <div class="container">
            <router-link :to="{
              name: 'singleView',
              params: { prodID: product.prodID }
            }"><button class="btn mt-2">View Product</button></router-link>
          </div> <br>
          <router-link to="/cart" class="btn">Add to Cart</router-link>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="row">
    <spinner />
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
    toggleSortOrder() {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      this.sortProducts();
    },
    sortProducts() {
      if (this.sortOrder === 'asc') {
        this.products.sort((a, b) => a.prodName.localeCompare(b.prodName));
      } else {
        this.products.sort((a, b) => b.prodName.localeCompare(a.prodName));
      }
    },
    sortProducts() {
      if (this.sortOrder === 'asc') {
        this.products.sort((a, b) => a.price - b.price);
      } else {
        this.products.sort((a, b) => b.price - a.price);
      }
    },
    searchProducts() {
      if (this.searchQuery.trim() === '') {
        // If the search query is empty, reset the filtered products
        this.filteredProducts = [];
      } else {
        // Filter products based on the searchQuery and update filteredProducts
        this.filteredProducts = this.products.filter((product) =>
          product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
  },
  data() {
    return {
      sortOrder: 'asc',
      searchQuery: '',
      filteredProducts: [],
    };
  },
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
  height: 19rem;
  object-fit: contain;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
  cursor: pointer;
}

.card-img-top:hover {
  transform: scale(1.05);
}

.card-text {
  overflow: auto;
  margin: 0;
}

.btn {
  background-color: #92700f;
  color: #ffffff;
  border-radius: 1rem;
  padding: 0.3rem;
  border: 0;
  width: 13rem;
}

.btn:hover {
  background-color: #ffffff;
  color: #92700f;
  border: 1px solid #92700f;
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
  background: #92700f;
}

.card-footer {
  border-top: none;
  background-color: transparent;
}
</style>