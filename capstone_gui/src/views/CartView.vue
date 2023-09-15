<template>
    <div class="bodyCart">
        <h1 class="display-3 m-3 glow">Lily Cart <i class="bi bi-bag-heart" style="font-size: 2.4rem; "></i></h1>
        <div class="container d-flex justify-content-center align-items-center carty">
            <div class="row justify-content-center">
                <div class="col-4 p-0">
                    <img class="img-fluid" src="https://i.ibb.co/0JxYxft/lilyjewelss.webp" alt="">
                </div>
                <div class="col-8 p-0">
                    <div class="table">
                        <table class="cart-table text-center" v-if="cart.length > 0">
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <!-- <th>Product Image</th> -->
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in cart" :key="item.cartID">
                                    <td>{{ item.prodID }}</td>
                                    <!-- <td><img class="img-fluid" :src="product.prodUrl" :alt="product.prodName" loading="lazy" /></td> -->
                                    <td>{{ item.prodName }}</td>
                                    <td>R{{ item.price }}</td>
                                    <td>{{ item.quantity }}</td>
                                    <td>
                                        <button @click="remove(item.cartID)" class="remove-button btn1">Remove</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div v-else class="container empty-cart-container mt-5">
                            <h1 class="on
                            ">Oh no, Your cart is empty ☹️</h1> <br>
                            <h1 class="p-5" style="font-size: 1.5rem;"><router-link to="/products" class="sn p-3"
                                    style="text-decoration: none;">← Back to shopping
                                </router-link></h1>
                            <!-- <img class="img-fluid" id="emptyCart"
                                src="https://i.postimg.cc/NftSgm0G/empty-Shop-Cart-removebg-preview.png"> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="item-count-box">
            <strong>Products in Cart:</strong> {{ totalQuantity }}
        </div> -->
        <div class="container">
            <div class="row">
                <div class="col"></div>
                <div class="col">
                    <div class="total-box">
                        <strong>TOTAL:</strong> R{{ totalPrice }}
                    </div>
                    <div>
                        <button @click="clearCart" class="clear-cart-button m-1">Clear Cart</button>
                        <button @click="checkout" class="check-btn m-1">Checkout <i class="bi bi-bag-heart" style="font-size: 1rem; "></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sweet from 'sweetalert';
export default {
    props: ["cartID"],
    created() {
        const cartData = JSON.parse(localStorage.getItem("cart"));
        this.$store.commit("setCart", cartData);
    },
    computed: {
        cart() {
            return this.$store.state.cart;
        },
        totalPrice() {
            let total = 0;
            if (this.cart) {
                for (const item of this.cart) {
                    total += item.price;
                }
            }
            return total.toFixed(2);
        }
    },
    methods: {
        remove(cartID) {
            let cartData = JSON.parse(localStorage.getItem("cart")) || [];  // retrieve from local storage
            const numItem = cartData.findIndex(item => item.cartID === cartID); // search for item with cartID that matches provided cartID
            if (numItem !== -1) cartData.splice(numItem, 1); // item found will be deleted/removed
            localStorage.setItem("cart", JSON.stringify(cartData)); // updates cart
            JSON.parse(localStorage.getItem("cart"));
            this.$store.commit("setCart", cartData);  // latest update
        },
        clearCart() {
            localStorage.removeItem('cart'); 
            this.$store.commit('setCart', []); 
        },
        checkout() {
            sweet({
                title: 'Successfully Checked Out!',
                icon: 'success',
                showConfirmButton: true,
            });
        },
    },
};
</script>

<style scoped>
.carty {
    background-color: #F7D0AB;
}

table {
    width: 100%;
}

.on {
    color: #92700f;
}

.glow {
    /* font-size: 1.5rem; */
    color: #92700f;
    text-align: center;
    animation: glow 1s ease-in-out infinite alternate;
}

table,
th,
td {
    background-color: #F7D0AB;
    border: 2px solid #92700f;
    border-top: 0;
    border-left: 0;
    border-right: 0;
}

.table {
    display: flex;
    /* justify-content: center; */
}

th {
    color: #92700f;
    background-color: #F7D0AB;
    padding: 1.2rem;
    font-size: 1.2rem;
}

td {
    padding: 1.5rem;
    font-size: 1.2rem;
}
.total-box{
    font-size: 1.7rem;
}
.btn1 {
    background-color: #92700f;
    color: white;
    padding: 0.3rem;
    border-radius: 10px;
    width: 5rem;
    border: 1px solid #92700f;
}

.btn1:hover {
    background-color: white;
    color: #92700f;
}

.clear-cart-button {
    background-color: #92700f;
    color: white;
    font-size: 1.2rem !important;
    padding: 0.6rem;
    border-radius: 10px;
    width: 8rem;
    border: 1px solid #92700f;
}

.clear-cart-button:hover {
    background-color: white;
    color: #92700f;
}

.check-btn {
    background-color: #92700f;
    color: white;
    font-size: 1.2rem !important;
    padding: 0.6rem;
    border-radius: 10px;
    width: 8rem;
    border: 1px solid #92700f;
}

.check-btn:hover {
    background-color: white;
    color: #92700f;
}

img {
    height: fit-content;
    align-content: center;
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

/* .col {
 padding: 0;
} */
</style>