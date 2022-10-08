import { viteMockServe } from '../../dist/index'

import { defineConfig, loadEnv, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// mock插件，创建mock服务
const mockPlugin = (isPord, mockUrl) => {
  return viteMockServe({
    ignore: /^\_/,
    mockPath: 'mock',
    mockUrl: mockUrl,
    localEnabled: !isPord,
    prodEnabled: isPord,
    injectCode: `
      import { setupProdMockServer } from '../mock/_createProductionServer';

      setupProdMockServer();
      `,
  })
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isPord = env.NODE_ENV === 'production'
  const plugins:Plugin[] = []
  const { VITE_USE_MOCK, VITE_MOCK_URL } = env

  if (VITE_USE_MOCK && VITE_USE_MOCK.toLowerCase() === 'true') {
    plugins.push(mockPlugin(isPord, VITE_MOCK_URL))
  }

  return {
    plugins: [vue(), ...plugins],
  }
})
