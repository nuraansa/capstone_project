<template>
  <section id="admin" class="adm">
    <div class="container-fluid">
      <h1 class="display-2 text-center mt-2">
        Admin Interface
        <hr>
      </h1>
      <div class="container-fluid">
        <h1 class="display-3 text-center mb-2 p-2">
        Products
      </h1> <addButton />
        <!-- <button class="btn2 float-start" @click="sortByPrice">Sort By Price</button>
        <button class="btn2 float-start" @click="sortByName">Sort By Name</button> -->
      </div>
      <table class="table table-responsive table-bordered border-black table-hover" v-if="products">
        <thead>
          <tr>
            <th scope="col">ID#</th>
            <th scope="col d-none d-sm-block">Image</th>
            <th scope="col">Title</th>
            <th scope="col d-none d-sm-block">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.prodID">
            <th>
              <div class="tableRows">{{ product.prodID }}</div>
            </th>
            <td>
              <div class="tableRows d-none d-sm-block">
                <img class="img-fluid" :src="product.prodUrl" :alt="product.prodName" loading="lazy" />
              </div>
            </td>
            <td>
              <div class="tableRows">{{ product.prodName }}</div>
            </td>
            <td>
              <div class="tableRows">{{ product.prodDesc }}</div>
            </td>
            <td>
              <div class="tableRows">{{ product.quantity }}</div>
            </td>
            <td>
              <div class="tableRows">R{{ product.price }}</div>
            </td>
            <td>
              <div class="tableRows">
                <editButton :product="product" />
                <button @click.prevent="deleteContent(product.prodID)" class="btn1" id="deleteBtn">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="row">
        <spinner />
      </div>
    </div>
    <section class="users" id="users">
      <div class="container-fluid">
        <h1 class="display-3 text-center mb-2 p-4">
          Users
        </h1>
        <div class="container-fluid">
          <!-- <button class="btn2 float-start" @click="sortUserByName">Sort By Name</button> -->
          <userAdd />
        </div>
        <table class="table table-responsive table-bordered border-black table-hover" v-if="users">
          <thead>
            <tr>
              <th scope="col">ID#</th>
              <th scope="col">Image</th>
              <th scope="col">User Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">User Role</th>
              <th scope="col">Email Adress</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.userID">
              <th>
                <div class="tableRows">{{ user.userID }}</div>
              </th>
              <td>
                <div class="tableRows">
                  <img class="img-fluid d-none d-sm-block" :src="user.userProfile" :alt="user.firstName" loading="lazy" />
                </div>
              </td>
              <td>
                <div class="tableRows">{{ user.firstName }} {{ user.lastName }}</div>
              </td>
              <td>
                <div class="tableRows">{{ user.gender }}</div>
              </td>
              <td>
                <div class="tableRows">{{ user.userAge }}</div>
              </td>
              <td>
                <div class="tableRows">{{ user.userRole }}</div>
              </td>
              <td>
                <div class="tableRows">{{ user.emailAdd }}</div>
              </td>
              <td>
                <div class="tableRows">
                  <!-- View User Btn -->
                  <!-- <router-link to="/user" class="btn1">View</router-link> -->
                  <!-- Edit User Btn -->
                  <editUser :user="user" />
                  <!-- Delete User Btn -->
                  <button @click.prevent="deleteUser(user.userID)" class="btn1" id="deleteBtn">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="row">
          <spinner />
        </div>
      </div>
    </section>
  </section>
</template>
  
<script>
import addButton from "@/components/AddProductComp.vue"
import editButton from "@/components/EditProductComp.vue"
import userAdd from "@/components/AddUserComp.vue"
import editUser from "@/components/EditUserComp.vue"
import spinner from "@/components/SpinnerComp.vue"
export default {
  components: {
    addButton, editButton, userAdd, editUser, spinner
  },
  data() {
    return {
      sortBy: null
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    product() {
      return this.$store.state.product;
    },
    users() {
      return this.$store.state.users;
    },
    user() {
      return this.$store.state.user;
    },
    productsSorted() {
      if (this.sortBy === "price") {
        return this.products.slice().sort((a, b) => a.price - b.price);
      } else if (this.sortBy === "name") {
        return this.products.slice().sort((a, b) => a.prodName.localeCompare(b.prodName));
      } else {
        // Default sorting
        return this.products;
      }
    },
    usersSorted() {
      // Compute sorted users based on sortBy
      if (this.sortBy === "userName") {
        return this.users.slice().sort((a, b) => a.firstName.localeCompare(b.firstName));
      } else {
        // Default sorting
        return this.users;
      }
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchProduct");
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchUser");
  },
  methods: {
    async deleteContent(prodID) {
      this.$store.dispatch('deleteProduct', prodID)
    },
    async deleteUser(userID) {
      this.$store.dispatch('deleteUser', userID)
    },
    sortByPrice() {
      this.sortBy = "price";
    },
    sortByName() {
      this.sortBy = "name";
    },
    sortUserByName() {
      this.sortBy = "userName";
    },
  }
};
</script>
  
<style scoped>
h1 {
  color: #92700f;
}

.btn1 {
  background-color: #92700f;
  color: white;
  padding: 0.3rem;
  border-radius: 10px;
  width: 4rem;
  border: 1px solid #92700f;
}

.btn1:hover {
  background-color: white;
  color: #92700f;
}

.btn2 {
  background-color: #92700f;
  color: white;
  width: 14rem;
  padding: 0.3rem;
  border-radius: 10px;
  border: 1px solid #92700f;
  margin: 1rem;
}

.btn2:hover {
  background-color: #fffdfd;
  color: #92700f;
}

img {
  width: 11rem;
}

.tableRows {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
}

tbody:hover {
  background-color: antiquewhite;
}

th {
  text-align: center;
}

td {
  height: 150px;
}

@media screen and (max-width: 808px) {}</style>