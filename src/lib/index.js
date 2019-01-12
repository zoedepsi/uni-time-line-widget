import TimeLine from './TimeLine.vue';
const timeline = {
  install: function (Vue) {
    Vue.component('TimeLine',TimeLine)
  }
};
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(timeline);
  }
  export default timeline;