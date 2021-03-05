// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { serialize} from 'cookie'
export default (req, res) => {

  const country = req.headers['cf-ipcountry']
  res.setHeader('Set-Cookie', serialize('country', country ? country : 'us', { path: '/', sameSite: 'lax' }));
  res.end()
}
