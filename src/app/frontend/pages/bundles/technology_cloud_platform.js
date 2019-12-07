
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/page-container/style.css';
import TechnologyCloudPlatformContainer from './../containers/TechnologyCloudPlatformContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <TechnologyCloudPlatformContainer />,
        document.getElementById('root')
    )
});
