<template>
    <div>
        <table class="container">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in getCart" :key="product.prodID">
                    <td><img class="tableImg" :src="product.prodUrl" :alt="product.prodName" /></td>
                    <td>{{ product.prodName }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.quantity }}</td>
                    <td>
                        <button class="delete" @click="removeFromCart(product.cartID)">Delete</button>
                    </td>
                </tr>
            </tbody>
            <button class="checkout" @click="checkout">Checkout</button>
        </table>
    </div>
</template>
  
<script>
export default {
    Name: 'setCart',
    computed: {
        getCart() {
            return this.$store.state.cart
        },
        user() {
            console.log(this.$store.state.userData.userID)
            return this.$store.state.userData
        },
        cartTotalPrice() {
            return this.$store.getters.cartTotalPrice;
        },
    },

    mounted() {
        this.$store.dispatch('getCart', this.user.userID)
    },
    methods: {
        removeFromCart(cartID) {
            const userID = this.user.userID;

            this.$store.dispatch('removeFromCart', { userID, cartID })
                .then(() => {
                })
                .catch((error) => {
                    console.error('Error removing item from cart:', error);
                });
        },
    },
}
</script>
<style scoped>

.tableImg {
    width: 20%;
}

.container {
    margin-top: 50px;
}

table {
    width: 100%;
}

tbody {
    text-align: center;

}

thead {
    color: #b9b9b9;
    text-align: center;
    font-size: 25px;
}

th,
td,
tr {
    /* border: solid black; */
    border: 2px solid #000000;
    /* background: #CAAE95; */
}

td {
    color: #000000;
}



.checkout {
    margin: 30px 0 30px 0;

}

.delete,
.checkout {
    background-color: #f3e5d8;
    color: #000000;
    text-align: center;
    padding: 3px 3px 3px 3px;
}
</style>