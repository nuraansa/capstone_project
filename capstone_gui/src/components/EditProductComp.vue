<template>
    <div>
      <button
        type="button"
        class="btn2 mb-3"
        @click="editModal(product.prodID)"
        data-bs-toggle="modal"
        :data-bs-target="'#dexampleModal' + product.prodID"
      >
        Edit
      </button>
      <!-- Modal -->
      <div class="container">
        <div
          class="modal fade"
          :id="'dexampleModal' + product.prodID"
          tabindex="-1"
          :aria-labelledby="'aexampleModalLabel' + product.prodID"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content bg-dark-subtle">
              <div class="modal-header text-center">
                <h1 class="modal-title fs-5" id="aexampleModalLabel">
                  Edit Product
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form>
  
                <div class="modal-body">
                  <p class="title">Product Name</p>
                  <input type="text" id="title" v-model="editProduct.prodName" />
                  <p class="title">Category</p>
                  <input type="text" v-model="editProduct.category" id="category" />
                  <p class="title">Details</p>
                  <input type="text" id="details" v-model="editProduct.details" />
                  <p class="title">Content</p>
                  <input
                  type="text"
                  v-model="editProduct.content"
                  id="description"
                  />
                  <p class="title">Price</p>
                  <input type="text" id="amount" v-model="editProduct.amount" />
                  <p class="title">Quantity</p>
                  <input type="text" v-model="editProduct.quantity" id="quantity" />
                  <p class="title">Image Link</p>
                  <input type="text" v-model="editProduct.prodUrl" id="imageLink" />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn1" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button @click="updateProduct(product.prodID)" type="submit" class="btn1" id="addProduct">
                    Save changes
                  </button>
                  <button  type="reset" class="btn1" id="addProduct">
                    Clear
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
    props: ["product"],
    data() {
      return {
        editProduct: {
          ...this.product,
        },
        editProductID: null,
        editProd: {
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
      editModal(prodID) {
        this.editProductID = prodID
        this.editProduct = {
          ...this.$store.state.products.find(
            (product) => product.prodID === prodID
          )
        }
      },
      updateProduct(prodID) {
        this.$store.dispatch("editProduct", { 
          prodID: prodID,
          ...this.editProduct
        })
      }
    },
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
    background-color: #92700f;
    color: white;
    width: 4rem;
    padding: 0.3rem;
    border-radius: 10px;
    border: 1px solid #92700f;
  }
  
  .btn2:hover {
    background-color: #fffdfd;
    color: #92700f;
  }
  
  
  input {
    width: 100%;
  }
  </style>