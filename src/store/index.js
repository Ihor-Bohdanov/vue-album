import Vue from "vue";
import Vuex from "vuex";

//API
const ALBUMS = "/albums";
const PHOTOS = "/photos";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    albums: null,
    album: null,
    albumData: null
  },
  mutations: {
    setAlbums(state, albums) {
      state.albums = albums;
    },
    setAlbum(state, album) {
      state.album = album;
    },
    addAlbum(state, album) {
      state.albums.unshift(album);
    },
    updateAlbum(state, updatedAlbum) {
      const index = state.albums.findIndex(album => album.id === updatedAlbum.id);
      state.albums.splice(index, 0, updatedAlbum);
    },
    setAlbumData(state, albumData) {
      state.albumData = albumData;
    },
    removeAlbum(state, payload) {
      state.albums = state.albums.filter(album => album.id !== payload.id);
    }
  },
  actions: {
    async fetchAlbums({ commit }) {
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}${ALBUMS}`);
        const result = await response.json();
        commit("setAlbums", result);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    
    async fetchAlbumData({ commit }, payload) {
      return new Promise((resolve, reject) => {
        fetch(
          `${process.env.VUE_APP_API_URL}${ALBUMS}/${payload.id}`
        )
        .then(response => {
          if (!response.ok) throw Error(response.status)
          console.log('response', response);
          return response.json()
          // return response.json()
        })
        .then(result => {
          console.log('result', result)
          commit("setAlbumData", result)
          resolve()
        })
        .catch((error) => {
          console.error(error)
          reject()
          throw error
        });
      });
    },
    async fetchAlbumPhotos({ commit }, payload) {
      try {
        const response = await fetch(
          `${process.env.VUE_APP_API_URL}${ALBUMS}/${payload.id}${PHOTOS}`
        );
        const result = await response.json();
        commit("setAlbum", result);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async deleteAlbum({ commit }, payload) {
      try {
        await fetch(`${process.env.VUE_APP_API_URL}${ALBUMS}/${payload.id}`, {
          method: "DELETE"
        });
        commit("removeAlbum", payload);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async createAlbum({ commit }, payload) {
      try {
        const response = await fetch(
          `${process.env.VUE_APP_API_URL}${ALBUMS}`,
          {
            method: "POST",
            body: JSON.stringify({
              title: payload.title,
              userId: payload.userId
            })
          }
        );
        const result = await response.json();
        commit("addAlbum", { ...payload, id: result.id });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async editAlbum({ commit }, payload) {
      try {
        const response = await fetch(
          `${process.env.VUE_APP_API_URL}${ALBUMS}/${payload.id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              title: payload.title,
              userId: payload.userId
            })
          }
        );
        const result = await response.json();
        commit("updateAlbum", { ...payload, id: result.id });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    clearAlbum({ commit }) {
      commit("setAlbum", null);
    },
    clearAlbumData({ commit }) {
      commit("setAlbumData", null);
    }
  },
  modules: {}
});
