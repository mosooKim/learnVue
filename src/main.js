import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import i18nPlugin from './plugins/i18n'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// const app = createApp(App)
// app.use(router)
// app.use(VueSweetalert2)
// app.mount('#app')

const i18nStrings = {
    en: {
        hi: 'hello!',
        save: 'save'
    },
    ko: {
        hi: '안녕하세요!',
        save: '저장'
    }
}

createApp(App).use(router).mixin(mixins)
.use(i18nPlugin, i18nStrings)
.use(store)
.use(VueSweetalert2)
.directive('focus', {
    mounted(el){
        el.focus();
    }
})
.mount('#app')

window.Kakao.init("08b5579030d2f96492cdb0f0d745101a");
