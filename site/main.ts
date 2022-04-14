import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import './assets/style/base.css';

const app = createApp(App);
app.use(router);
app.use(mavonEditor);

router.isReady().then(() => {
  app.mount("#app");
});
