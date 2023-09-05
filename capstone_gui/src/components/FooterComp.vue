<template>
    <div class="footer card-footer p-3"> <hr>
        <div class="container text-center">
           <div class="row">
                <div class="col"> <img src="https://i.ibb.co/YbhMKWp/veclogo.png" alt="" style="width: 7rem;">
            
                    <ul class="d-flex" style="align-items: center; flex-wrap: wrap;">
                        <li class="p-1 p-sm-3"><router-link class="rl" to="/">Home</router-link></li> |
                        <li class="p-1 p-sm-3"><router-link class="rl" to="/about">About</router-link></li> |
                        <li class="p-1 p-sm-3"><router-link class="rl" to="/products">Products</router-link></li> |
                        <li class="p-1 p-sm-3"><router-link class="rl" to="/contact">Contact</router-link></li> |
                        <li class="p-1 p-sm-3"><router-link class="rl" to="/tc">Terms & Conditions</router-link></li>
                        <!-- <li class="p-3"><i class="bi bi-telephone social1 d-flex">+27 12 345 6789</i></li>
                        <li class="p-3"><i class="bi bi-envelope social1 d-flex">lilyjewels@gmail.com</i></li> -->
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <hr>
                    <h5 class="p-3" style="color: rgb(0, 0, 0);">Follow our Social Media</h5>
                    <i class="social bi bi-instagram"><a href="https://www.instagram.com/"></a></i>
                    <i class="social bi bi-tiktok"><a href="https://www.tiktok.com/login"></a></i>
                    <i class="social bi bi-facebook"><a href="https://m.facebook.com/login/?locale=en_GB"></a></i>
                    <div class="p-sm-3">Lily Jewels &copy; 2023 | All Rights Reserved. </div>
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
    background-color: #ffffff;
}

.foot {
    position: relative;
    width: 100%;
    height: 6rem;
    bottom: 0;
}
ul{
    justify-content: center;
    align-items: center;
}
li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #000000;
    font-size: 1.2rem;
}

.social {
    font-size: 30px;
    margin-right: 20px;
    color: #000000;
}

.social:hover {
    color: #92700f;
    font-size: 35px;
    transition: 0.4s;
}

.social1 {
    font-size: 20px;
    /* margin-right: 20px; */
    color: #000000;
}

.social1:hover {
    color: #92700f;
    font-size: 22px;
    transition: 0.4s;
}

.rl:hover {
    color: #92700f;
    font-size: 22px;
    transition: 0.4s;
}

@media (max-width: 599px) {
    /* .so {
        margin: 1rem;
    } */
    /* a{
        font-size: 1rem;
    } */
    .tc{
        flex-wrap: wrap;
    }
}

@media (max-width: 808px) {
    .ul {
        display: flexbox;
    }
}
</style>