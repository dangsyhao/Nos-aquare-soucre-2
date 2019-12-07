
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/page-container/style.css';
import TechnologyMachineLearningContainer from './../containers/TechnologyMachineLearningContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <TechnologyMachineLearningContainer />,
        document.getElementById('root')
    )
});
