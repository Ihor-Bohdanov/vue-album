import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

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
      const index = state.albums.findIndex(
        album => album.id === updatedAlbum.id
      );
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
        const response = await axios.get(
          `${process.env.VUE_APP_API_URL}${ALBUMS}`
        );
        commit("setAlbums", response.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async fetchAlbumData({ commit }, payload) {
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_API_URL}${ALBUMS}/${payload.id}`
        );
        commit("setAlbumData", response.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async fetchAlbumPhotos({ commit }, payload) {
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_API_URL}${ALBUMS}/${payload.id}${PHOTOS}`
        );
        commit("setAlbum", response.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async deleteAlbum({ commit }, payload) {
      try {
        await axios.delete(
          `${process.env.VUE_APP_API_URL}${ALBUMS}/${payload.id}`
        );
        commit("removeAlbum", payload);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async createAlbum({ commit }, payload) {
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_API_URL}${ALBUMS}`,
          {
            title: payload.title,
            userId: payload.userId
          }
        );
        commit("addAlbum", { ...response.data });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async editAlbum({ commit }, payload) {
      try {
        const response = await axios.put(
          `${process.env.VUE_APP_API_URL}${ALBUMS}/${payload.id}`,
          {
            title: payload.title,
            userId: payload.userId
          }
        );
        commit("updateAlbum", { ...response.data });
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
