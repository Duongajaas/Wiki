// Dịch vụ này dùng để xử lý CORS cho vercel serve
import { createProxyMiddleware } from 'http-proxy-middleware'
export default (req, res) => {
  let target = ''
  if (req.url.startsWith('/bing')) { 
    target = 'https://cn.bing.com'
  }
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/bing/': '/'
    }
  })(req, res)
}