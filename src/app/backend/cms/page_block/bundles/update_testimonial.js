
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateTestimonialContainer from './../UpdateTestimonialContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateTestimonialContainer />,
        document.getElementById('root')
    )
});
