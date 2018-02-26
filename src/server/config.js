const REACT_APP_ENV = process.env.REACT_APP_ENV.trim().toLowerCase()

if (REACT_APP_ENV == 'dev')  {
    module.exports = {
        'env':                              'dev',
        'appTitle':                         'Not A Square CMS',
        'static.url':                       '/public/static',
        'static.dir':                       __dirname + '/../static',
        'api.endpoint':                     'http://192.168.0.106:8230',
        'translation.fallback_language':    'dev',
        'translation.load_path':            '/locales/{{lng}}/{{ns}}.json'
    }
} else if (REACT_APP_ENV == 'test') {
    module.exports = {
        'env':                              'test',
        'appTitle':                         'Not A Square CMS',
        'static.url':                       '/public/static',
        'static.dir':                       __dirname + '/../static',
        'api.endpoint':                     process.env.CMS_API_URL,
        'translation.fallback_language':    'en',
        'translation.load_path':            process.env.CMS_API_URL + '/text_block/load?lang={{lng}}'
    }
}
