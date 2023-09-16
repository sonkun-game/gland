export const state = () => ({
    theme: 'dark',
    menuKey: 11335577,
});


export const mutations = {
    setTheme(state, newValue) {
        state.theme = newValue;
    },
    setMenuKey(state, newValue) {
        state.menuKey = newValue;
    },
    increaseMenuKey(state) {
        state.menuKey++;
    }
};

export const actions = {
    updateTheme({ commit }, newValue) {
        commit('setTheme', newValue);
    },
    updateMenuKey({ commit }, newValue) {
        commit('setMenuKey', newValue);
    },
    updateIncreMenuKey({ commit }) {
        commit('increaseMenuKey');
    },
};