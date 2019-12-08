
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/page-container/style.css';
import ProductQuodbitCoreContainer from './../containers/ProductQuodbitCoreContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <ProductQuodbitCoreContainer />,
        document.getElementById('root')
    )
});
