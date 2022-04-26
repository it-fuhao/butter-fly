import fs from 'fs-extra';
import { componentTargetPath } from './path.js';

/**
 * 创建组件名校验函数
 * @param {String} val 组件名
 */
export const componentNameValidateFn = (val) => {
  const files = fs.readdirSync(componentTargetPath);
  if (!/^[a-z0-9\.-]*$/g.test(val)) {
    return '组件名格式有误（小写，以-分隔）';
  }
  if (files.includes(val)) {
    return '组件名已存在，请重新输入';
  }
  return true;
};
