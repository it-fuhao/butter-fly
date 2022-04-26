import fs from 'fs-extra';
import chalk from 'chalk';
import symbols from 'log-symbols';
import inquirer from 'inquirer';
import { componentNameValidateFn } from './validate.js';
import { templatePath, componentTargetPath } from './path.js';

// 输入内容
const promptList = [
  {
    type: 'input',
    message: '请输入组件名称（小写，以-分隔）:',
    name: 'componentName',
    validate: componentNameValidateFn, // 校验函数
  },
];
// 收集组件信息
const answer = await inquirer.prompt(promptList);
console.log(answer);

// console.log(symbols.success, chalk.green('开始创建..........,请稍候'));

/**
 * 创建组件工作区
 * @param {String} templatePath 模板路径
 * @param {String} targetpath 目标路径
 * @param {String} name 组件名称
 * @returns
 */
const createComponent = async (templatePath, targetpath, name) => {
  console.log(chalk.green('开始创建，请稍候...'));
  const targetComponentDir = `${targetpath}/${name}`;
  // 拷贝模板
  try {
    await fs.copy(templatePath, targetComponentDir);
  } catch (error) {
    console.log(symbols.error, chalk.red('拷贝文件失败', error));
    return;
  }
  // 改些模板，生成组件工作区文件
  await reWriteFile(targetComponentDir, name); // 生成文件
  console.log(symbols.success, chalk.green('组件工作区创建完毕！'));
};

/**
 * 重写组件工作区文件
 * @param {*} path 组件工作区文件路径
 * @param {*} name 组件名称
 */
const reWriteFile = async (path, name) => {
  const files = await fs.readdir(path);
  for (const file of files) {
    const fileName = `${path}/${file}`; // 模板文件路径
    if (fs.statSync(fileName).isFile()) {
      // 修改文件名后缀
      let newFileName = fileName;
      if (fileName.endsWith('.tpl')) {
        newFileName = fileName.replace(/.tpl/g, '');
        await fs.rename(fileName, newFileName);
      }
      console.log(`${newFileName} 创建成功`);
      const result = renderFileWithPrompt(newFileName);
      fs.writeFileSync(newFileName, result);
    } else {
      // 文件夹，递归
      await reWriteFile(fileName, name);
    }
  }
};

/**
 * 根据录入项和模板文件，渲染文件
 * @param {String} filePath 文件路径
 * @returns
 */
const renderFileWithPrompt = (filePath) => {
  // 根据录入项，渲染文件
  let content = fs.readFileSync(filePath).toString();
  promptList.forEach((prompt) => {
    const { name } = prompt;
    const val = answer[name];
    const reg = new RegExp(`{{ ${name} }}`, 'g');
    content = content.replace(reg, val);
  });
  return content;
};

// 构建
createComponent(templatePath, componentTargetPath, answer.componentName);
