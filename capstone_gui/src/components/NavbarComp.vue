<template>
    <div>
        <div class="overlay glow mt-3">˖°.✧ Welcome to Lily Jewels ✧.°˖</div>
        <hr>
        <!-- nav -->
        <nav class="navbar navbar-expand-lg nav-underline" style="background-color: #ffffff;">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img id="logo" src="https://i.ibb.co/YbhMKWp/veclogo.png" alt="logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/products" class="nav-link">Products</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/contact" class="nav-link">Contact</router-link>
                        </li>
                    </ul>
                    <div class="nav">
                        <!-- dropdown -->
                        <li class="nav-item dropdown mx-auto">
                            <router-link to="/" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false" style="margin-right: 3rem;"><i class="bi bi-bag-heart"
                                    style="font-size: 2.4rem; "></i></router-link>
                            <ul class="dropdown-menu">
                                <li><router-link to="/" class="dropdown-item">Home</router-link></li>
                                <li><router-link to="/" class="dropdown-item">Home</router-link></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><router-link to="/" class="dropdown-item">Home</router-link></li>
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
    </div>
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
}

.nav-link:hover {
    color: #000000;
    font-size: 1.5rem;
}

.glow {
    font-size: 1.5rem;
    color: #92700f;
    text-align: center;
    animation: glow 1s ease-in-out infinite alternate;
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