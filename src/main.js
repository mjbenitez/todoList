import { createApp } from "vue";
import App from "./App.vue";
import "./scss/input.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrashAlt, faPen);

createApp(App)
  .component("fas", FontAwesomeIcon)
  .mount("#app");
