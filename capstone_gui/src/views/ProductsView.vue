<template>
  <div id="products"></div>
  <div class="product m-3">
    <!-- <h1 class="display-3 p-3 head" style="color: #92700f;">Our Products</h1> -->
    <!-- search -->
    <div class="container mx-auto m-4">
      <div class="row d-flex">
        <div class="col d-flex" style="justify-content: flex-start; align-items: center;flex-wrap: wrap;">
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
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Category
            </button>
            <ul class="dropdown-menu">
              <li><button class="btn m-2" @click="filterByCategory(null)">All</button></li>
              <li><button class="btn m-2" @click="filterByCategory('Necklaces')">Necklaces</button></li>
              <li><button class="btn m-2" @click="filterByCategory('Earrings')">Earrings</button></li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search Products..." v-model="searchQuery" />
            <button class="btn" @click="searchProducts">Search</button>
          </div>
        </div>
      </div>
    </div>
    <hr>
  </div>
  <div class="row products row-cols-1 row-cols-sm-2 row-cols-lg-3 mt-3 mx-sm-5 d-flex justify-content-center"
    v-if="filteredProducts.length > 0">
    <div class="col mt-4" v-for="product in filteredProducts" :key="product.prodID">
      <div class="card" data-aos="zoom-in">
        <img :src="product.prodUrl" class="card-img-top" :alt="product.prodName">
        <div class="card-body">
          <h5 class="card-title">{{ product.prodName }}</h5>
          <p class="card-text">{{ product.prodDesc }}</p>
          <div class="card-footer">
            R {{ product.price }}
          </div>
          <hr>
          <div class="container d-flex gap-2" style="align-items: center; justify-content: center;">
            <router-link :to="{
              name: 'singleView',
              params: { prodID: product.prodID }
            }"><button class="btn">View</button></router-link>
            <button @click="addToCart(product)" class="btn btn-outline-primary"> Add 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- products -->
  <!-- <div class="row products row-cols-1 row-cols-sm-2 row-cols-lg-3 mt-3 mx-sm-5 d-flex justify-content-center"
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
            
            <router-link to="/cart" class="btn">Add to Cart</router-link>
          </div>
        </div>
      </div>
    </div>
  </div> -->
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
    filteredProducts() {
      return this.$store.state.filteredProducts;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts").then(() => {
      this.$store.commit("setFilteredProducts", this.products);
    });
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
    async searchProducts() {
      if (this.searchQuery.trim() === '') {
        // If the search query is empty, reset the filtered products
        this.$store.commit('setFilteredProducts', []);
      } else {
        // Filter products based on the searchQuery and update filteredProducts
        const filteredProducts = this.products.filter((product) =>
          product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
        this.$store.commit('setFilteredProducts', filteredProducts);
      }
    },
    filterByCategory(Category) {
      if (Category === null) {
        this.$store.commit('setFilteredProducts', this.products);
      } else {
        const filteredProducts = this.products.filter(product => product.category === Category);
        this.$store.commit('setFilteredProducts', filteredProducts);
      }
    },
    addToCart(product){
      this.$store.dispatch('addCart', product)
    }
  },
  data() {
    return {
      sortOrder: 'asc',
      searchQuery: '',
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
  width: 9rem;
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