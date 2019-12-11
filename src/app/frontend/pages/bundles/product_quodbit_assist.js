
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/page-container/style.css';
import ProductQuodbitAssistContainer from './../containers/ProductQuodbitAssistContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <ProductQuodbitAssistContainer />,
        document.getElementById('root')
    )
});
