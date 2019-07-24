const IS_DEV = process.env.NODE_ENV !== 'production';
//运行环境（true:正式环境，false:测试环境）
export const RUN_DEV = true;
//Request url
//export const API_ROOT = IS_DEV ? 'http://apitn1.nulscan.io' : '/api/';
export const API_ROOT = IS_DEV ? 'http://152.136.226.117:18003/' : 'http://152.136.226.117:18003/';
//Request response time
export const API_TIME = IS_DEV ? '9000' : '8000';
