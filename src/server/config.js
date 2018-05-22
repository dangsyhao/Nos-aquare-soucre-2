const REACT_APP_ENV = process.env.REACT_APP_ENV.trim().toLowerCase()

if (REACT_APP_ENV == 'dev')  {
    module.exports = {
        'env':                                       'dev',
        'appTitle':                                  'Not A Square',
        'static.url':                                '/public/static',
        'static.dir':                                __dirname + '/../static',
        'api.endpoint':                              'http://127.0.0.1:8230',
        'translation.fallback_language':             'dev',
        'translation.load_path':                     '/locales/{{lng}}/{{ns}}.json',
        'fai-api.upper':                             'https://fashion-ai-api-upper.notasquare.vn',
        //'fsai-api.landmark-detection':               'http://127.0.0.1:8001',
        //'fsai-api.category-classification':          'http://127.0.0.1:8002',
        //'fsai-api.pattern-recognition':              'http://127.0.0.1:8003',
        //'fsai-api.sleeve-length-classification':     'http://127.0.0.1:8004',
        //'fsai-api.landmark-detection':               'https://df-landmark-api.test.notasquare.vn',
        //'fsai-api.category-classification':          'https://df-category-api.test.notasquare.vn',
        //'fsai-api.pattern-recognition':              'https://df-pattern-api.test.notasquare.vn',
        //'fsai-api.sleeve-length-classification':     'https://df-sleeve-api.test.notasquare.vn',

    }
} else if (REACT_APP_ENV == 'prod') {
    module.exports = {
        'env':                                       'prod',
        'appTitle':                                  'Not A Square',
        'static.url':                                '/public/static',
        'static.dir':                                __dirname + '/../static',
        'api.endpoint':                              'https://cms-api.notasquare.vn',
        'translation.fallback_language':             'en',
        'translation.load_path':                     'https://cms-api.notasquare.vn/text_block/load?lang={{lng}}',
        'fai-api.upper':                             'https://fashion-ai-api-upper.notasquare.vn',
        //'fsai-api.landmark-detection':               'https://df-landmark-api.test.notasquare.vn',
        //'fsai-api.category-classification':          'https://df-category-api.test.notasquare.vn',
        //'fsai-api.pattern-recognition':              'https://df-pattern-api.test.notasquare.vn',
        //'fsai-api.sleeve-length-classification':     'https://df-sleeve-api.test.notasquare.vn',
    }
}
