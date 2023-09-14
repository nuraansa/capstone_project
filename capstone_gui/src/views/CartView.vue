<template>
    <div class="bodyCart">
        <h1 class="display-3 m-3 glow">Shopping Cart <i class="bi bi-bag-heart" style="font-size: 2.4rem; "></i></h1>
        <div class="container d-flex justify-content-center align-items-center">
            <div class="row justify-content-center">
                <div class="col-4 p-0">
                    <img class="img-fluid" src="https://i.ibb.co/0JxYxft/lilyjewelss.webp" alt="">
                </div>
                <div class="col-8 p-0">
                    <div class="table">
                        <table class="cart-table text-center" v-if="cart">
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <!-- <th>Product Image</th> -->
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th></th>
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
                        <div v-else class="empty-cart-container">
                            <img class="img-fluid" id="emptyCart"
                                src="https://i.postimg.cc/NftSgm0G/empty-Shop-Cart-removebg-preview.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="total-box">
            <strong>TOTAL:</strong> R{{ price }}
        </div>
        <!-- <div class="item-count-box">
            <strong>Products in Cart:</strong> {{ totalQuantity }}
        </div> -->
        <button @click="clearCart" class="clear-cart-button">Clear Cart</button>
    </div>
</template>

<script>

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
        getTotal() {
            return this.$store.state.cart;
        }
    },
    methods: {
        decimalSpace(price) {
            return this.price.toFixed(2);
        },
        remove(cartID) {
            let cartData = JSON.parse(localStorage.getItem("cart")) || [];  // retrieve from local storage
            const numItem = cartData.findIndex(item => item.cartID === cartID); // search for item with cartID that matches provided cartID
            if (numItem !== -1) cartData.splice(numItem, 1); // item found will be deleted/removed
            localStorage.setItem("cart", JSON.stringify(cartData)); // updates cart
            JSON.parse(localStorage.getItem("cart"));
            this.$store.commit("setCart", cartData);  // latest update
        },
        clearCart(cartData) {
            localStorage.removeItem('cart')
            location.reload()
            // localStorage.setItem("cart", JSON.stringify(cartData)); // updates cart
            // JSON.parse(localStorage.getItem("cart"));
            // this.$store.commit("setCart", cartData);  
        }
    },
};
</script>

<style scoped>
table {
    width: 100%;
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
    border: 2px solid #92700f;
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
/* .col {
 padding: 0;
} */
</style>