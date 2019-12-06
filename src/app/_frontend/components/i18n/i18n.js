import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import { reactI18nextModule } from 'react-i18next';

i18n
    .use(reactI18nextModule)
    .use(XHR)
    .init({
        fallbackLng: __params.config['translation.fallback_language'],
        debug: false,
        backend: {
            loadPath: __params.config['translation.load_path'],
            crossDomain: true
        },
        interpolation: {
        },
        react: {
            wait:      true,
            bindI18n:  'languageChanged loaded',
            bindStore: 'added removed',
            nsMode:    'default'
        }
    })

export default i18n;
