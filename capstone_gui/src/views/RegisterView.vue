<template>
    <div class="reg">
        <div class="container d-flex align-items-center justify-content-center">
            <div class="card">
                <div class="row">
                    <div class="col m-3">
                        <h1 class="display-3"> Register </h1>
                        <form class="form-inline" id="form" action="/action_page.php" @submit.prevent="register">
                            <div class="form-group">
                                <label class="m-2" for="firstName">FIRST NAME</label>
                                <input type="name" class="form-control" id="firstName" placeholder="Your Name"
                                    v-model="payload.firstName">
                            </div>
                            <br>
                            <div class="form-group">
                                <label class="m-2" for="lastName"> SURNAME</label>
                                <input type="surname" class="form-control" id="lastName" placeholder="Your Surname"
                                    v-model="payload.lastName">
                            </div>
                            <br>
                            <div class="form-group">
                                <label class="m-2" for="userAge">AGE</label>
                                <input type="number" class="form-control" id="userAge" placeholder="Age"
                                    v-model="payload.userAge">
                            </div>
                            <br>
                            <div class="form-group">
                                <label class="m-2" for="gender">GENDER</label>
                                <input type="text" class="form-control" id="gender" placeholder="Gender"
                                    v-model="payload.gender">
                            </div>
                            <br>
                            <div class="form-group">
                                <label class="m-2" for="userRole">USER ROLE</label>
                                <input type="role" class="form-control" id="userRole" placeholder="eg. Admin"
                                    v-model="payload.userRole">
                            </div>
                            <br>
                            <div class="form-group">
                                <label class="m-2" for="email">Email Address:</label>
                                <input type="email" class="form-control" id="emailAdd" placeholder="name@domain.com"
                                    v-model="payload.emailAdd">
                            </div>
                            <br>
                            <div class="form-group">
                                <label class="m-2" for="userPass">Password:</label>
                                <input type="password" class="form-control" id="userPass" placeholder="Create a Password"
                                    v-model="payload.userPass">
                            </div>
                            <br>
                            <div class="form-group">
                                <label class="m-2" for="userProfile">User Profile</label>
                                <input type="picture" class="form-control" id="userProfile" placeholder="url"
                                    v-model="payload.userProfile">
                            </div>
                            <div class="checkbox m-4">
                                <label> <input type="checkbox"> Remember me</label>
                            </div>
                            <button type="submit" class="btn">Register</button>
                        </form>
                    </div>
                    <div class="col vid">
                        <iframe src="https://player.vimeo.com/video/862371323?h=1f6b738b90" width="640" height="564"
                            frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        <!--video  -->
        <!-- <div class="col vid">
            <video autoplay loop muted playsinline>
                <source src="https://player.vimeo.com/video/862371323?h=1f6b738b90" type="video/mp4">
            </video>
        </div> -->
    </div>
</template>
<script>

export default {
    data() {
        return {
            payload: {
                firstName: "",
                lastName: "",
                userAge: "",
                gender: "",
                userRole: "",
                emailAdd: "",
                userPass: "",
                userProfile: "https://i.postimg.cc/sgdwyGg9/wallpaper-flork.jpg",
            }
        };
    },

    methods: {
        register() {
            this.$store.dispatch('addUser', this.payload)
        }
    }
}
</script>

<style scoped>
.container {
    min-height: 100vh;
    /* background-color: #E4C2A2; */
    padding-top: 30px;
}

.btn {
    background-color: #92700f;
    color: #ffffff;
    border-radius: 0.7rem;
    width: 9rem;
    margin: 1rem;
}

.btn:hover {
    background-color: #ffffff;
    color: #92700f;
    border: 1px solid #92700f;
    /* box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7); */
    /* transition: 0.2s;
    transform: scale(1.05); */
}

.card {
    color: #92700f;
    /* height: 600px; */
    width: 90rem;
    border: 2px solid #92700f;
    /* padding-left: 25px; */
}

.form-group {
    width: 30rem;
}

form {
    align-items: center;
}

#form {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    /* align-items: center; */
}

input {
    width: 100%;
    border: 1px solid #92700f;
}

.img-fluid {
    height: 100%;
}

.col {
    text-align: center
}

.row {
    display: flex;
}

.vid {
    border: 2px solid red;
    width: max-content;
    /* height: 100vh; */
    /* background: fixed; */
}
</style>