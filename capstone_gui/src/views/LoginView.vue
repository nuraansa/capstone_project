<template>
  <div class="container-fluid text-center">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="card">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col">
           <h1 class="display-3 ">Login</h1>
            <form class="form-inline" action="/action_page.php" @submit.prevent="login">
              <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" name="email" v-model="payload.emailAdd" placeholder="" />
              </div>
              <br>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" v-model="payload.userPass" name="password" />
              </div>
              <div class="checkbox">
                <label><input type="checkbox">Remember me</label>
              </div>
              <button type="submit" class="btn">Log in</button>
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
      payload: {
        emailAdd: "",
        userPass: "",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.payload);
    },
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers");
  }
};
</script>
<style scoped>
.btn{
  background-color: #92700f;
  color: #ffffff;
}
.btn:hover{
  background-color: #ffffff;
  color: #92700f;
  border: 1px solid #92700f;
}
/* .container-fluid {
    background-color: #E4C2A2 !important;
} */
.container {
  height: 100vh;
}

.card {
  width: 950px;
  border: solid rgb(0, 0, 0);
  padding-left: 25px;
  color: #92700f;
}

.login {
  height: 500px;
}

.col {
  text-align: center
}
</style>