<template>
    <div class="glow m-3">˖°.✧ Welcome to Lily Jewels ✧.°˖</div>
    <!-- nav -->
    <nav class="navbar navbar-expand-lg nav-underline sticky-top" style="background-color: #F7D0AB;">
        <div class="container-fluid">
            <a class="navbar-brand" href="/"><img id="logo" src="https://i.ibb.co/YbhMKWp/veclogo.png" alt="logo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="router-link-active nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="router-link-active nav-link">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products" class="router-link-active nav-link">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="router-link-active nav-link">Contact</router-link>
                    </li>
                </ul>
                <div class="nav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="align-items: center;">
                        <li class="nav-item"><router-link to="/register"
                                class="router-link-active nav-link">Register</router-link>
                        </li>
                        <li class="nav-item"><router-link to="/login"
                                class="router-link-active nav-link">Login</router-link></li>
                    </ul>
                    <!-- dropdown -->
                    <li class="nav-item dropdown mx-auto">
                        <button class="nav-link dropdown-toggle router-link-active" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false"><i class="bi bi-bag-heart" style="font-size: 2.4rem; "></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><router-link to="/cart" class="dropdown-item"> My Cart 🛒</router-link></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><router-link to="/admin" class="dropdown-item" id="dd">Admin</router-link></li>
                            <li><router-link to="/user" class="dropdown-item" id="dd">Profile</router-link></li>
                        </ul>
                    </li>
                </div>
                <!-- search -->

                <!-- <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> -->
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
#logo {
    width: 4.5rem;
}


.nav-link {
    color: #92700f;
    font-size: 1.4rem;
    margin-right: 1rem;
}

.nav-link:hover {
    color: #000000;
    font-size: 1.5rem;
}

.dropdown button {
    width: 9rem;
}

/* .dropdown .bi-bag-heart {
    padding-left: 2rem;
} */

.dropdown-menu {
    margin-right: 15rem !important;
}

.dropdown-item {
    color: #92700f;
}

.glow {
    font-size: 1.5rem;
    color: #92700f;
    text-align: center;
    animation: glow 1s ease-in-out infinite alternate;
}

.router-link-active:hover {
    color: rgb(255, 255, 255);
}
#dd:hover{
    color: #000000;
}
/* 
@keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #b58912, 0 0 40px #92700f, 0 0 50px #92700f, 0 0 60px #92700f, 0 0 70px #92700f;
  }
  
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fdd158, 0 0 50px #e2ac1a, 0 0 60px #e2ac1a, 0 0 70px #e2ac1a, 0 0 80px #e2ac1a;
  }
} */
/* .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 6rem;
} */
</style>