
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/page-container/style.css';
import BlogContainer from './../containers/BlogContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <BlogContainer />,
        document.getElementById('root')
    )
});
