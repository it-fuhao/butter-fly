import { withInstall } from '@lerna1/utils'
// import { withInstall } from '../utils/lib/index'

import HelloWorld from './src/index.vue'

export const FhHelloWorld = withInstall(HelloWorld)
export default FhHelloWorld

export * from './src/index'
