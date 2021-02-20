import { createApp } from "vue";
import App from "./App.vue";
import "./scss/input.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrashAlt);
library.add(faPen);

// Vue.component("font-awesome-icon", FontAwesomeIcon);

// Vue.config.productionTip = false;

// new Vue({
//   el: "#app",
//   render: h => h(App)
// });
createApp(App)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
