import ws from "@/api/workspace.js";
// initial state
const state = () => ({
  all: [],
  selected: null
});

// getters
const getters = {};

// actions
const actions = {
  getAllWorkspaces({ commit }) {
    ws.getWorkspaces().then(ws => commit("setWorkspaces", ws));
  },
  getWorkspaceById({ commit }, { id }) {
    ws.getWorkspaceById(id).then(ws => commit("setSelectedWorkspace", ws));
  }
};

// mutations
const mutations = {
  setWorkspaces(state, ws) {
    state.all = ws;
  },
  setSelectedWorkspace(state, ws) {
    state.selected = ws;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
