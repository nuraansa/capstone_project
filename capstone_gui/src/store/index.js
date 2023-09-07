import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import router from "@/router";
import authenticateuser from "@/services/authenticateuser";

const dataUrl = "https://lily-jewels.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: false,
    token: null,
    msg: null,
    regStatus: null,
    logStatus: null,
    userData: null,
    userRole: null,
    eorror: null,
    cart: null,
  },
  getters: {
    cartTotalPrice(state) {
      return state.cart.reduce((total, product) => total + product.price, 0);
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    addProduct(state, product) {
      state.product = product;
    },
    dltProduct(state, product) {
      state.product = product;
    },
    editProduct(state, product) {
      state.product = product;
    },
    setFeatProducts(state, products) {
      state.products = products;
    },
    dltUser(state, user) {
      state.user = user;
    },
    editUser(state, user) {
      state.user = user;
    },
    setCart(state, value) {
      state.cart = value;
    },
    addProductToCart(state, product) {
      state.cart.push(product);
    },
    decrementProductQuantity(state, productId) {
      const product = state.products.find(
        (product) => product.id === productId
      );
      if (product) {
        product.quantity--;
      }
    },
    removeFromCart(state, cartID) {
      state.cart = state.cart.filter((cartItem) => cartItem.cartID !== cartID);
    },
    clearCart(state) {
      state.cart = [];
    },
    setRegStatus(state, status) {
      state.regStatus = status;
    },
    setLogStatus(state, status) {
      state.logStatus = status;
    },
    setToken(state, token) {
      state.token = token;
      cookies.set("userToken", token, {
        expires: 1,
        path: "/",
        secure: true,
        sameSite: "None",
      });
    },
    setUserData(state, userData) {
      state.userData = userData;
      if (userData && userData.userRole) {
        state.userRole = userData.userRole;
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log(userData, userData.userRole);
      } else {
        state.userData = null;
        state.userRole = null;
        localStorage.removeItem("userData");
      }
    },
    setmessage(state, message) {
      state.message = message;
    },
    setError(state, error) {
      state.err = error;
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${dataUrl}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "Oops! An error has occured");
      }
    },

    async fetchUser(context, userID) {
      try {
        const { data } = await axios.get(`${dataUrl}user/${userID}`);
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "Oops! An error has occured");
      }
    },

    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${dataUrl}items`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "Oops! An error has occured");
      }
    },
    async fetchProduct(context, prodID) {
      try {
        const { data } = await axios.get(`${dataUrl}item/${prodID}`);
        context.commit("setProduct", data.result);
      } catch (e) {
        context.commit("setMsg", "Oops! An error occured");
      }
    },
    // Product CRUD
    async submitProduct(context, payload) {
      try {
        const response = await axios.post(`${dataUrl}items`, payload);
        if (response) {
          context.commit("addProduct", response.data);
          location.reload();
          console.log(response.data);
        } else {
          context.commit("setMsg", "Oops! An error has occured");
        }
      } catch (e) {
        context.commit("setMsg", "Oops! An error has occured");
      }
    },
    async deleteProduct(context, prodID) {
      try {
        const response = await axios.delete(`${dataUrl}item/${prodID}`);
        if (response) {
          location.reload();
          context.commit("dltProduct", response);
        } else {
          context.commit("setMsg", "Oops! An error has occured");
        }
      } catch (e) {
        context.commit("setMsg", "Oops! An error has occured");
      }
    },
    async editProduct(context, payload) {
      try {
        const response = await axios.patch(
          `${dataUrl}item/${payload.prodID}`,
          payload
        );
        if (response) {
          context.commit("editProduct", response);
          location.reload();
        } else {
          context.commit("setMsg", "Oops! An error has occured");
        }
      } catch (e) {
        context.commit("setMsg", "Oops! An error has occured");
      }
    },
    async fetchFeatProducts(context) {
      try {
        const { data } = await axios.get(`${dataUrl}featured`);
        context.commit("setFeatProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "Oops! An error has occured");
      }
    },
    // User CRUD
    async submitUser(context, payload) {
      try {
        const response = await axios.post(`${dataUrl}user`, payload);
        if (response) {
          context.commit("setUser", response.data);
          location.reload();
          console.log(response.data);
        } else {
          context.commit("setMsg", "Oops! An error has occured");
        }
      } catch (e) {
        context.commit("setMsg", "Oops! An error has occured");
      }
    },
    async deleteUser(context, userID) {
      try {
        const response = await axios.delete(`${dataUrl}user/${userID}`);
        if (response) {
          location.reload();
          context.commit("dltUser", response);
        } else {
          context.commit("setMsg", "Oops! An error has occured");
        }
      } catch (e) {
        context.commit("setMsg", "Oops! An error has occured");
      }
    },
    async editUser(context, payload) {
      try {
        const data = await axios.patch(
          `${dataUrl}user/${payload.userID}`,
          payload
        );
        if (data) {
          context.commit("setMsg", data);
          location.reload();
        } else {
          context.commit("setMsg", "Oops! An error has occured");
        }
      } catch (e) {
        context.commit("setMsg", "Oops! An error has occured");
      }
    },

    // Refister & Login
    async register(context, payload) {
      console.log("Reached");
      try {
        const res = await axios.post(
          `https://lily-jewels.onrender.com/users`,
          payload
        );
        console.log("Res: ", res.data.status);
        const { message, err, token } = res.data;
        if (message === "Opps! An error occured") {
          context.commit("setError", message);
          context.commit("setRegStatus", "Not registered");
          return { success: false, error: message };
        } else if (token) {
          ``;
          context.commit("setToken", token);
          context.commit("setRegStatus", "Registered successfully");
          return { success: true, token };
        } else if (err) {
          console.error(err);
        }
      } catch (e) {
        context.commit("setError", e);
        console.log(e);
        context.commit("setRegStatus", "Not registered");
        throw e;
      }
    },

    //login
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${dataUrl}user`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { result, msg });
          cookies.set("LilyUser", { msg, token, result });
          authenticateuser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 4000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit("setmessage", "An error has occured");
      }
    },
    //register
    async addUser(context, payload) {
      try {
        const { msg } = (await axios.post(`${dataUrl}register`, payload)).data;
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "login" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit("setmessage", "An error has occured");
      }
    },
    // cart crud

    //show cart
    async getCart(context, id) {
      const res = await axios.get(
        `https://lily-jewels.onrender.com/user/${id}/carts`
      );
      context.commit("setCart", res.data);
      console.log(id);
    },

    //add to cart

    async addToCart({ commit }, { userID, prodID }) {
      try {
        const response = await axios.post(
          `https://lily-jewels.onrender.com/user/${userID}/cart`,
          {
            userID,
            prodID,
          }
        );

        if (response.status === 200) {
          commit("addProductToCart", response.data);
        } else {
        }
      } catch (error) {
        console.error(error);
      }
    },

    //clear from cart
    async removeFromCart({ commit }, { userID, cartID }) {
      try {
        await axios.delete(
          `https://lily-jewels.onrender.com/user/${userID}/cart/${cartID}`
        );
        commit("removeFromCart", cartID);
      } catch (error) {
        console.error(error);
      }
    },
    // checkout
    clearCart({ commit }) {
      commit("clearCart");
    },
  },
  modules: {},
});
