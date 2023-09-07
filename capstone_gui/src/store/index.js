import { createStore } from "vuex";
import axios from "axios";

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
  },
  getters: {},
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
      state.products = products
    },
    dltUser(state, user) {
      state.user = user;
    },
    editUser(state, user) {
      state.user = user
    }
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
        const { data } = await axios.get(`${dataUrl}items/${prodID}`) 
        context.commit("setProduct", data.result)
      } catch(e) {
        context.commit("setMsg", "Oops! An error occured")
      }
    },
    // Product CRUD
    async submitProduct(context, payload) {
      try {
        const response = await axios.post(`${dataUrl}items`, payload);
        if (response) {
          context.commit("addProduct", response.data);
          location.reload()
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
        if(response) {
          location.reload()
          context.commit('dltProduct', response)
        } else {
          context.commit("setMsg", "Oops! An error has occured");
        }
      } catch (e) {
        context.commit("setMsg", "Oops! An error has occured");
      }
    },
    async editProduct(context, payload) {
      try {
        const response = await axios.patch(`${dataUrl}item/${payload.prodID}`, payload);
        if(response) {
          context.commit('editProduct', response)
          location.reload()
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
          location.reload()
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
        if(response) {
          location.reload()
          context.commit('dltUser', response)
        } else {
          context.commit("setMsg", "Oops! An error has occured");
        }
      } catch (e) {
        context.commit("setMsg", "Oops! An error has occured");
      }
    },
    async editUser(context, payload) {
      try {
        const data = await axios.patch(`${dataUrl}user/${payload.userID}`, payload);
        if(data) {
          context.commit('setMsg', data)
          // location.reload()
        } else {
          context.commit("setMsg", "Oops! An error has occured");
        }
      } catch (e) {
        context.commit("setMsg", "Oops! An error has occured");
      }
    }, 
  },

  modules: {},
});