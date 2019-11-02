const REACT_APP_ENV = process.env.REACT_APP_ENV.trim().toLowerCase()

if (REACT_APP_ENV == 'dev')  {
    module.exports = {
        'env':                                       'dev',
        'appTitle':                                  'Not A Square',
        'static.url':                                '/public/static',
        'static.dir':                                __dirname + '/../static',
        'api.endpoint':                              'http://127.0.0.1:8230',
        'theme-static.url':                          'https://s3.amazonaws.com/notasquare-themes/saasland-20191016',
    }
} else if (REACT_APP_ENV == 'prod') {
    module.exports = {
        'env':                                       'prod',
        'appTitle':                                  'Not A Square',
        'static.url':                                '/public/static',
        'static.dir':                                __dirname + '/../static',
        'api.endpoint':                              'https://cms-api.notasquare.vn',
        'theme-static.url':                          'https://s3.amazonaws.com/notasquare-themes/saasland-20191016',
    }
}
