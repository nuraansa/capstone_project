<template>
    <div class="footer card-footer p-3">
        <div class="container-fluid text-center">
            <div class="row row-cols-2 row-cols-sm-3 d-flex so">
                <div class="col fcols">
                    <ul>
                        <li class="p-3"><router-link class="rl" to="/">Home</router-link></li>
                        <li class="p-3"><router-link class="rl" to="/about">About</router-link></li>
                    </ul>
                </div>
                <div class="col fcols">
                    <ul>
                        <li class="p-3"><router-link class="rl" to="/products">Products</router-link></li>
                        <li class="p-3"><router-link class="rl" to="/contact">Contact</router-link></li>

                    </ul>
                </div>
                <div class="col  fcols1 d-flex go">
                    <ul class="p-0">
                        <li class="p-3"><i class="bi bi-telephone social1 d-flex">+27 12 345 6789</i></li>
                        <li class="p-3"><i class="bi bi-envelope social1 d-flex">lilyjewels@gmail.com</i></li>
                    </ul>
                </div>

                <div class="container">
                        <li class="p-1">
                            <hr>
                            <h5 style="color: rgb(0, 0, 0);">Follow our Social Media</h5>
                            <i class="social bi bi-instagram"><a href="https://www.instagram.com/"></a></i>
                            <i class="social bi bi-tiktok"><a href="https://www.tiktok.com/login"></a></i>
                            <i class="social bi bi-facebook"><a href="https://m.facebook.com/login/?locale=en_GB"></a></i>
                            <p class="fcols1">&copy; 2023 Lily Jewels, All Rights Reserved. </p>
                        </li>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.footer {
    background-color: #F7D0AB;
}

.foot {
    position: relative;
    width: 100%;
    height: 6rem;
    bottom: 0;
}
li{
   list-style: none;
}
a {
    text-decoration: none;
    color: #000000;
    font-size: 21px;
}

.social {
    font-size: 30px;
    margin-right: 20px;
    color: #000000;
}

.social:hover {
    color: #f7f7f788;
    font-size: 35px;
    transition: 0.4s;
}

.social1 {
    font-size: 20px;
    /* margin-right: 20px; */
    color: #000000;
}

.social1:hover {
    color: #f7f7f788;
    font-size: 22px;
    transition: 0.4s;
}

.rl:hover {
    color: #f7f7f788;
    font-size: 22px;
    transition: 0.4s;
}

@media (max-width: 780px) {
    .so{
        margin: 1rem;
    }
}
@media (max-width: 808px) {
    .ul{
        display: flexbox;
    }
}
</style>