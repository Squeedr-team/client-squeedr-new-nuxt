import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: 'musicapp',
    storage: typeof window !== 'undefined' && window.localStorage,
  }).plugin(store)
}
