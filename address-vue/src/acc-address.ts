import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

// export let mountParcel: any;
const appOptions = {
    render() {
        return h(App);
    },
};
const vueLifecycles = singleSpaVue({
    createApp,
    appOptions,
});


// export const bootstrap = [
//     (props: any) => {
//         mountParcel = props.mountParcel
//         return Promise.resolve()
//     }
// ];
// export const mount = [
//     vueLifecycles.mount
// ];
// export const unmount = [
//     vueLifecycles.unmount
// ];

export const { bootstrap, mount, unmount } = vueLifecycles;