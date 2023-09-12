<template>
    <div>
        <div class="container-fluid m-3">
            <div class="card mb-3 mx-auto" style="max-width: 80rem;">
                <div class="row g-0">
                    <div class="col-md-4" :user="user" :key="user.userID">
                        <img :src="user.userProfile" class="card-img-top" :alt="user.firstName" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body m-2">
                            <h2 class="display-3 card-title">User Information</h2>
                            <p class="card-text">Name: {{ user.firstName }} {{ user.lastName }}</p>
                            <p class="card-text">Age: {{ user.userAge }}</p>
                            <p class="card-text">Gender: {{ user.gender }}</p>
                            <p class="card-text">Role: {{ user.userRole }}</p>
                            <p class="card-text">Email Address: {{ user.emailAdd }}</p>
                            <p class="card-text">Password: {{ user.userPass }}</p>
                            <button @click.prevent="logout()">Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="row">
                <div class="col" :user="user" :key="user.userID">
                    <div class="card" style="width: 20rem">
                        <img :src="user.userProfile" class="card-img-top" :alt="user.firstName" />
                        <div class="card-body">
                            <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
                            <p class="card-text">
                                {{ user.userAge }} <br> {{ user.gender }} <br> {{ user.userRole }} <br> {{ user.emailAdd }}
                                <br> {{ user.userPass }}
                            </p>
                            <button @click.prevent="logout()">Logout</button>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
import router from "@/router";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
    computed: {
        user() {
            return this.$store.state.user || cookies.get("LilyUser").result;
        },
    },
    methods: {
        logout() {
            cookies.remove("LilyUser")
            router.push({ name: "login" });
        }
    }
};
</script>
<style scoped>
.card-text{
    display: flex;
    align-items: start;
    font-size: 1.2rem;
    flex-wrap: wrap !important;
}
h2 {
  color: #92700f;
}

button {
  background-color: #92700f;
  color: white;
  padding: 0.4rem;
  border-radius: 10px;
  width: 5rem;
  border: 1px solid #92700f;
}

button:hover {
  background-color: white;
  color: #92700f;
}
</style>