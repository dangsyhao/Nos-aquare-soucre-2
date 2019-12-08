
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/page-container/style.css';
import ProductQuodbitHiringContainer from './../containers/ProductQuodbitHiringContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <ProductQuodbitHiringContainer />,
        document.getElementById('root')
    )
});
