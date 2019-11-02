
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/container/style.css';
import TechnologyWebTechnologiesContainer from './../containers/TechnologyWebTechnologiesContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <TechnologyWebTechnologiesContainer />,
        document.getElementById('root')
    )
});
