import { createApp } from 'vue'
import App from './App.vue'
// import { setupProdMockServer } from './mockProdServer';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).mount('#app')

// production mock server
// if (process.env.NODE_ENV === 'production') {
//   setupProdMockServer();
// }
