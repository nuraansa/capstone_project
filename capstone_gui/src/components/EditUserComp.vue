<template>
  <div>
    <button type="button" class="btn2 m-3" @click="editUserModal(user.userID)" data-bs-toggle="modal"
      :data-bs-target="'#exampleModal' + user.userID">
      Edit
    </button>
    <!-- Modal -->
    <div class="container">
      <div class="modal fade" :id="'exampleModal' + user.userID" tabindex="-1"
        :aria-labelledby="'exampleModalLabel' + user.userID" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content" style="background-color: #F7D0AB; color: #92700f;">
            <div class="modal-header text-center">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit User
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
              <div class="modal-body">
                <p class="title m-1">First Name</p>
                <input type="text" id="title" v-model="editUsers.firstName" />
                <p class="title m-1">Last Name</p>
                <input type="text" v-model="editUsers.lastName" id="lastName" />
                <p class="title m-1">Age</p>
                <input type="text" id="age" v-model="editUsers.userAge" />
                <p class="title m-1">Gender</p>
                <input type="text" v-model="editUsers.gender" id="gender" />
                <p class="title m-1">Email Address</p>
                <input type="text" id="email" v-model="editUsers.emailAdd" />
                <p class="title m-1">Password</p>
                <input type="text" id="userPass" v-model="editUsers.userPass" />
                <p class="title m-1">Profile Image</p>
                <input type="text" v-model="editUsers.userProfile" id="imageLink" />
                <p class="title m-1">User Role</p>
                <input type="text" v-model="editUsers.userRole" id="userRole" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn1" data-bs-dismiss="modal">
                  Close
                </button>
                <button @click.prevent="updateUser(userID)" type="submit" class="btn1" id="addUser">
                  Save changes
                </button>
                <button type="reset" class="btn1">Clear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: ["user"],
  data() {
    return {
      editUsers: {
        ...this.user,
      },
      editUserID: null,
      editUser: {
        userID: "",
        firstName: "",
        lastName: "",
        userAge: "",
        gender: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        userProfile: "",
      },
    };
  },
  methods: {
    editUserModal(userID) {
      this.editUserID = userID;
      this.editUser = {
        ...this.$store.state.users.find((user) => user.userID === userID),
      };
    },
    updateUser(userID) {
      this.$store.dispatch("editUser", {
        userID: userID,
        ...this.editUsers
      })
    }
  },
};
</script>
  
<style scoped>
.btn1 {
  background-color: #f7f7f7;
  padding: 0.3rem;
  border-radius: 10px;
  width: 9rem;
  border: none;
}

.btn1:hover {
  background-color: #f7f7f788;
}

.btn2 {
  background-color: #92700f;
  color: white;
  width: 4rem;
  padding: 0.3rem;
  border-radius: 10px;
  border: 1px solid #92700f;
}

.btn2:hover {
  color: #92700f;
  background-color: #ffffff;
}

input {
  width: 100%;
}
</style>