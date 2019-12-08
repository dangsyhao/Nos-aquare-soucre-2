
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/page-container/style.css';
import ProductQuodbitTrainingContainer from './../containers/ProductQuodbitTrainingContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <ProductQuodbitTrainingContainer />,
        document.getElementById('root')
    )
});
