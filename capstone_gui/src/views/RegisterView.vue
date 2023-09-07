<template>
    <div class="all">
        <div class="container d-flex justify-content-center text-align-center align-items-center">
            <div class="card">
                <div class="row d-flex justify-content-center text-align-center align-items-center">
                    <div class="col">
                        <h1 class="display-3"> Register </h1>
                        <form class="form-inline" action="/action_page.php" @submit.prevent="register">
                            <div class="form-group">
                                <label for="email">First Name</label>
                                <input type="name" class="form-control" id="firstName" placeholder="Your Name"
                                    v-model="payload.firstName">
                            </div>
                            <br>
                            <div class="form-group">
                                <!-- <label for="email">Email address:</label> -->
                                <input type="number" class="form-control" id="userAge" placeholder="userAge"
                                    v-model="payload.userAge">
                            </div>
                            <br>
                            <div class="form-group">
                                <!-- <label for="email">Email address:</label> -->
                                <input type="text" class="form-control" id="gender" placeholder="gender"
                                    v-model="payload.gender">
                            </div>
                            <br>
                            <div class="form-group">
                                <!-- <label for="email">Email address:</label> -->
                                <input type="surname" class="form-control" id="lastName" placeholder="Surname"
                                    v-model="payload.lastName">
                            </div>
                            <br>
                            <div class="form-group">
                                <!-- <label for="email">Email address:</label> -->
                                <input type="role" class="form-control" id="userRole" placeholder="eg. Admin"
                                    v-model="payload.userRole">
                            </div>
                            <br>
                            <div class="form-group">
                                <!-- <label for="email">Email address:</label> -->
                                <input type="email" class="form-control" id="emailAdd" placeholder="@gmail.com"
                                    v-model="payload.emailAdd">
                            </div>
                            <br>
                            <div class="form-group">
                                <!-- <label for="pwd">Password:</label> -->
                                <input type="password" class="form-control" id="userPass" placeholder="Enter password"
                                    v-model="payload.userPass">
                            </div>
                            <br>
                            <div class="form-group">
                                <!-- <label for="pwd">Password:</label> -->
                                <input type="picture" class="form-control" id="userProfile" placeholder="url"
                                    v-model="payload.userProfile">
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox"> Remember me</label>
                            </div>
                            <button type="submit" class="btn btn-outline-dark">Register</button>
                        </form>
                    </div>
                    <div class="col">
                        <img class="login" src="https://i.ibb.co/mRFyz3X/AIMG-2508.jpg" alt="">
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
            payload:{
                firstName: "",
                lastName: "",
                userAge:  "",
                gender:"",
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
.all {
    background-color: #E4C2A2 !important;
}

.container {
    min-height: 100vh;
    /* background-color: #E4C2A2; */
    /* padding-top: 80px; */
}

.card {

    /* height: 600px; */
    width: 745px;
    border: solid rgb(0, 0, 0);
    padding-left: 25px;
}

.login {
    height: 500px;
}

.col {
    text-align: center
}</style>