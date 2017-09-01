popup;// register modal component
Vue.component('modal', {
  template: '#modal-template',
});

// start app
new Vue({
  el: '#popup',
  data: {
    showModal: false,
  },
});
