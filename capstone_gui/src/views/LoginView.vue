<template>
  <div class="login text-center">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="card shadow-lg">
        <div class="row">
          <div class="col col-md-6">
            <h1 class="display-3 m-4">Login</h1>
            <form class="form" action="/action_page.php" @submit.prevent="login">
              <div class="form-group">
                <label for="email" class="m-3">Email Address:</label> <br>
                <input id="input" type="email" name="email" v-model="payload.emailAdd" placeholder="name@domain.com" />
              </div>
              <br>
              <div class="form-group">
                <label for="pwd" class="m-3">Password:</label> <br>
                <input id="input" type="password" v-model="payload.userPass" name="password"
                  placeholder="Enter Your Password" />
              </div> <br>
              <div class="checkbox">
                <label><input type="checkbox">Remember me</label>
              </div><br>
              <button type="submit" class="btn">Log in</button>
            </form>
          </div>
          <div class="col col-md-6">
            <img class="img-fluid d-flex align-items-center" src="https://i.ibb.co/mRFyz3X/AIMG-2508.jpg" alt="">
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
.btn {
  background-color: #92700f;
  color: #ffffff;
  width: 7rem;
}

.btn:hover {
  background-color: #ffffff;
  color: #92700f;
  border: 1px solid #92700f;
}

/* .container-fluid {
    background-color: #E4C2A2 !important;
} */
.container {
  height: 80vh;
}

.card {
  width: 950px;
  height: 30rem;
  border: 1.5px solid #92700f;
  /* padding-left: 45px; */
  color: #92700f;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
  background: radial-gradient(178.94% 106.41% at 26.42% 106.41%, #f5f4f1 0%, rgba(255, 255, 255, 0) 71.88%), #FFFFFF;
  box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01), 0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09), 0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 23px;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
}
img{
  border-radius:0px 23px 23px 0px;
  height: 30rem;
}
#input {
  border: 1px solid #92700f;
  border-radius: 0.3rem;
  height: 2.2rem;
  margin: 0.3 rem;
  margin-left: 0.4rem;
  /* width: 20rem; */
}
.form-group {
    width: 100%;
}

input {
    width: 100%;
}

.login {
  height: 750px;
}

.col {
  align-items: center;
  flex-wrap: wrap;
}
</style>