import { withInstall } from '../utils/vue/index'

import HelloWorld from './src/index.vue';

export const BFHelloWorld = withInstall(HelloWorld);
export default BFHelloWorld;

export * from './src/index';
