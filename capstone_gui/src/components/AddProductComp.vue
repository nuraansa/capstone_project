<template>
    <div>
      <div class="d-flex justify-content-center mb-2">
        <button
          type="button"
          class="btn2 mb-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Product
        </button>
      </div>
      <!-- Modal -->
      <div class="container">
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content bg-dark-subtle">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form @submit.prevent="submitContentForm">
              <div class="modal-body">
                  <p class="title">Product Name</p>
                  <input type="text" v-model="postProduct.prodName" id="title" />
                  <p class="title">Category</p>
                  <input
                  type="text"
                  v-model="postProduct.category"
                  id="category"
                  />
                  <p class="title">Details</p>
                  <input type="text" v-model="postProduct.details" id="details" />
                  <p class="title">Content</p>
                  <input
                  type="text"
                  v-model="postProduct.content"
                  id="description"
                  />
                  <p class="title">Price</p>
                  <input type="text" v-model="postProduct.amount" id="amount" />
                  <p class="title">Quantity</p>
                  <input
                  type="text"
                  v-model="postProduct.quantity"
                  id="quantity"
                  />
                  <p class="title">Image Link</p>
                  <input
                  type="text"
                  v-model="postProduct.prodUrl"
                  id="imageLink"
                  />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn1" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button
                  type="submit"
                  class="btn1"
                  id="addProduct"
                  >
                  Save changes
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
          postProduct: {
            prodName: "",
            category: "",
            details: "",
            content: "",
            amount: "",
            quantity: "",
            prodUrl: "",
          },
        };
    },
    computed: {
    },
    methods: {
      async submitContentForm() {
        this.$store.dispatch('submitProduct', this.postProduct) 
      }
    }
  };
  </script>
  
  <style scoped>
  .btn1 {
    background-color: #f7f7f7;
    padding: 0.3rem;
    border-radius: 10px;
    width: 9rem;
    border: none;
  }
  
  .btn1:hover {
    background-color: #f7f7f788;
  }
  
  .btn2 {
    background-color: #000000;
    color: white;
    width: 9rem;
    padding: 0.3rem;
    border-radius: 10px;
    border: 1px solid black;
  }
  
  .btn2:hover {
    background-color: #fffdfd;
    color: black;
  }
  
  
  input {
    width: 100%;
  }
  </style>