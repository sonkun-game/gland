export const state = () => ({
    theme: 'dark',
});


export const mutations = {
    setTheme(state, newValue) {
        state.theme = newValue;
    },
};

export const actions = {
    updateTheme({ commit }, newValue) {
        commit('setTheme', newValue);
    },
};