// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { serialize} from 'cookie'
export default (req, res) => {

    const headerLanguage = req.headers['accept-language']

    if(headerLanguage) {
       let languageSplit =  headerLanguage.split(',')
       let countryLang = languageSplit[0].split('-')
       let language = countryLang[0]
        res.setHeader('Set-Cookie', serialize('language', language ? language : 'en', { path: '/', sameSite: 'lax' }));
    }

    res.end()
}
