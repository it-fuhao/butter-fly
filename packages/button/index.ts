import { withInstall } from '@butter-fly/utils'
// import { withInstall } from '../utils/lib/index'

import Button from './src/index.vue'

export const BFButton = withInstall(Button)

console.log(BFButton);
export default BFButton

// export * from './src/index'
