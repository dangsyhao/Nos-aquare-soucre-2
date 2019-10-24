
class Plugin {
    constructor() {
    }

    build(server) {
        server.serverinfo().registerPluginInfo({
            id:            'pear-annotation-server-ui',
            name:          'Annotation Server',
            group:         'application',
            description:   '',
            dependencies:  [],
            links:         []
        })

        server.webpack().addAlias('backend-page-container',             __dirname + '/container')
        server.webpack().addAlias('backend-app-services',               __dirname + '/services')

        // Dashboard
        server.webpack().addBundle('backend-dashboard-home',            __dirname + '/cms/dashboard/bundles/home.js')
        server.express().get('/backend',                                server.helper().serveBundlePage('backend-dashboard-home'))

        // Page
        server.webpack().addBundle('backend-page-list',                   __dirname + '/cms/page/bundles/list.js')
        server.webpack().addBundle('backend-page-create',                 __dirname + '/cms/page/bundles/create.js')
        server.webpack().addBundle('backend-page-update',                 __dirname + '/cms/page/bundles/update.js')
        server.webpack().addBundle('backend-page-view',                   __dirname + '/cms/page/bundles/view.js')
        server.express().get('/backend/page',                             server.helper().serveBundlePage('backend-page-list'))
        server.express().get('/backend/page/create',                      server.helper().serveBundlePage('backend-page-create'))
        server.express().get('/backend/page/update',                      server.helper().serveBundlePage('backend-page-update'))
        server.express().get('/backend/page/view',                        server.helper().serveBundlePage('backend-page-view'))

        // Page block
        server.webpack().addBundle('backend-page-block-create',                  __dirname + '/cms/page_block/bundles/create.js')
        server.webpack().addBundle('backend-page-block-update-banner',           __dirname + '/cms/page_block/bundles/update_banner.js')
        server.webpack().addBundle('backend-page-block-update-text',             __dirname + '/cms/page_block/bundles/update_text.js')
        server.webpack().addBundle('backend-page-block-update-text-column',      __dirname + '/cms/page_block/bundles/update_text_column.js')
        server.webpack().addBundle('backend-page-block-update-horizontal-step',  __dirname + '/cms/page_block/bundles/update_horizontal_step.js')
        server.webpack().addBundle('backend-page-block-update-member-listing',   __dirname + '/cms/page_block/bundles/update_member_listing.js')
        server.webpack().addBundle('backend-page-block-update-product-listing',  __dirname + '/cms/page_block/bundles/update_product_listing.js')
        server.webpack().addBundle('backend-page-block-update-testimonial',      __dirname + '/cms/page_block/bundles/update_testimonial.js')
        server.webpack().addBundle('backend-page-block-update-made-for-lisa',    __dirname + '/cms/page_block/bundles/update_made_for_lisa.js')
        server.webpack().addBundle('backend-page-block-update-your-micronutrient-need',           __dirname + '/cms/page_block/bundles/update_your_micronutrient_need.js')
        server.webpack().addBundle('backend-page-block-update-slider',           __dirname + '/cms/page_block/bundles/update_slider.js')
        server.webpack().addBundle('backend-page-block-update-ultimate-bundle',  __dirname + '/cms/page_block/bundles/update_ultimate_bundle.js')
        server.webpack().addBundle('backend-page-block-update-faq',              __dirname + '/cms/page_block/bundles/update_faq.js')
        server.webpack().addBundle('backend-page-block-update-nutrient-listing', __dirname + '/cms/page_block/bundles/update_nutrient_listing.js')
        server.webpack().addBundle('backend-page-block-update-page-listing',     __dirname + '/cms/page_block/bundles/update_page_listing.js')
        server.webpack().addBundle('backend-page-block-update-image-slider',     __dirname + '/cms/page_block/bundles/update_image_slider.js')
        server.webpack().addBundle('backend-page-block-update-text-image',       __dirname + '/cms/page_block/bundles/update_text_image.js')
        server.webpack().addBundle('backend-page-block-update-fashion-ai-cloth-detection',               __dirname + '/cms/page_block/bundles/update_fashion_ai_cloth_detection.js')
        server.webpack().addBundle('backend-page-block-update-fashion-ai-category-classification',       __dirname + '/cms/page_block/bundles/update_fashion_ai_category_classification.js')
        server.webpack().addBundle('backend-page-block-update-fashion-ai-sleeve-length-classification',  __dirname + '/cms/page_block/bundles/update_fashion_ai_sleeve_length_classification.js')
        server.webpack().addBundle('backend-page-block-update-fashion-ai-pattern-recognition',           __dirname + '/cms/page_block/bundles/update_fashion_ai_pattern_recognition.js')
        server.webpack().addBundle('backend-page-block-update-fashion-ai-upper',                         __dirname + '/cms/page_block/bundles/update_fashion_ai_upper.js')
        server.express().get('/backend/page_block/create',                       server.helper().serveBundlePage('backend-page-block-create'))
        server.express().get('/backend/page_block/update_banner',                server.helper().serveBundlePage('backend-page-block-update-banner'))
        server.express().get('/backend/page_block/update_text',                  server.helper().serveBundlePage('backend-page-block-update-text'))
        server.express().get('/backend/page_block/update_text_column',           server.helper().serveBundlePage('backend-page-block-update-text-column'))
        server.express().get('/backend/page_block/update_horizontal_step',       server.helper().serveBundlePage('backend-page-block-update-horizontal-step'))
        server.express().get('/backend/page_block/update_member_listing',        server.helper().serveBundlePage('backend-page-block-update-member-listing'))
        server.express().get('/backend/page_block/update_product_listing',       server.helper().serveBundlePage('backend-page-block-update-product-listing'))
        server.express().get('/backend/page_block/update_testimonial',           server.helper().serveBundlePage('backend-page-block-update-testimonial'))
        server.express().get('/backend/page_block/update_made_for_lisa',         server.helper().serveBundlePage('backend-page-block-update-made-for-lisa'))
        server.express().get('/backend/page_block/update_your_micronutrient_need',                server.helper().serveBundlePage('backend-page-block-update-your-micronutrient-need'))
        server.express().get('/backend/page_block/update_slider',                server.helper().serveBundlePage('backend-page-block-update-slider'))
        server.express().get('/backend/page_block/update_ultimate_bundle',       server.helper().serveBundlePage('backend-page-block-update-ultimate-bundle'))
        server.express().get('/backend/page_block/update_faq',                   server.helper().serveBundlePage('backend-page-block-update-faq'))
        server.express().get('/backend/page_block/update_nutrient_listing',      server.helper().serveBundlePage('backend-page-block-update-nutrient-listing'))
        server.express().get('/backend/page_block/update_page_listing',          server.helper().serveBundlePage('backend-page-block-update-page-listing'))
        server.express().get('/backend/page_block/update_image_slider',          server.helper().serveBundlePage('backend-page-block-update-image-slider'))
        server.express().get('/backend/page_block/update_text_image',            server.helper().serveBundlePage('backend-page-block-update-text-image'))
        server.express().get('/backend/page_block/update_fashion_ai_cloth_detection',                 server.helper().serveBundlePage('backend-page-block-update-fashion-ai-cloth-detection'))
        server.express().get('/backend/page_block/update_fashion_ai_category_classification',         server.helper().serveBundlePage('backend-page-block-update-fashion-ai-category-classification'))
        server.express().get('/backend/page_block/update_fashion_ai_sleeve_length_classification',    server.helper().serveBundlePage('backend-page-block-update-fashion-ai-sleeve-length-classification'))
        server.express().get('/backend/page_block/update_fashion_ai_pattern_recognition',             server.helper().serveBundlePage('backend-page-block-update-fashion-ai-pattern-recognition'))
        server.express().get('/backend/page_block/update_fashion_ai_upper',                           server.helper().serveBundlePage('backend-page-block-update-fashion-ai-upper'))


        // Text Block
        server.webpack().addBundle('backend-text_block-list',            __dirname + '/cms/text_block/bundles/list.js')
        server.webpack().addBundle('backend-text_block-create',          __dirname + '/cms/text_block/bundles/create.js')
        server.webpack().addBundle('backend-text_block-update',          __dirname + '/cms/text_block/bundles/update.js')
        server.express().get('/backend/text_block',                      server.helper().serveBundlePage('backend-text_block-list'))
        server.express().get('/backend/text_block/create',               server.helper().serveBundlePage('backend-text_block-create'))
        server.express().get('/backend/text_block/update',               server.helper().serveBundlePage('backend-text_block-update'))

        // Setting
        server.webpack().addBundle('backend-setting',                   __dirname + '/container/setting/bundles/update.js')
        server.express().get('/backend/setting',                        server.helper().serveBundlePage('backend-setting'))


        // User
        server.webpack().addBundle('backend-user',                      __dirname + '/cms/user/bundles/login.js')
        server.webpack().addBundle('backend-user-list',                 __dirname + '/cms/user/bundles/list.js')
        server.webpack().addBundle('backend-user-create',               __dirname + '/cms/user/bundles/create.js')
        server.webpack().addBundle('backend-user-update',               __dirname + '/cms/user/bundles/update.js')
        server.express().get('/backend/login',                          server.helper().serveBundlePage('backend-user'))
        server.express().get('/backend/user',                           server.helper().serveBundlePage('backend-user-list'))
        server.express().get('/backend/user/create',                    server.helper().serveBundlePage('backend-user-create'))
        server.express().get('/backend/user/update',                    server.helper().serveBundlePage('backend-user-update'))
    }
}

module.exports = Plugin;
