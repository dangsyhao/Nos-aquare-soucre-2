
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import {Container} from 'flux/utils';
import createContainer from './../ViewContainer'
import 'frontend-components/container/style.css'
import { I18nextProvider } from 'react-i18next'
import i18n from 'frontend-components/i18n/i18n'
import Page404Container from './../Page404Container'

jQuery.ajax({
    type: 'GET',
    url: __params.config['api.endpoint'] + '/page_block/list',
    data: {
        'page_code':    window.location.pathname,
        '_sort_key':    'sort_order',
        '_sort_dir':    'asc',
    },
    dataType: 'json',
    success:  function(result) {
        console.log(result)
        if (result.status == 'ok') {
            ReactDOM.render(
                React.createElement(
                    I18nextProvider,
                    { 'i18n': i18n },
                    React.createElement(
                        createContainer(result.data.records)
                    )
                ),
                document.getElementById('root')
            )
        }
        else {
            ReactDOM.render(
                React.createElement(
                    I18nextProvider,
                    { 'i18n': i18n },
                    <Page404Container />
                ),
                document.getElementById('root')
            )
        }
    },
    error: function(xhr, status, error) {
    }
})
