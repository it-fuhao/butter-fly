import { withInstall } from '@butter-fly/utils'
// import { withInstall } from '../utils/lib/index'

import HelloWorld from './src/index.vue'

export const BFHelloWorld = withInstall(HelloWorld)
export default BFHelloWorld

export * from './src/index'
