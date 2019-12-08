
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/page-container/style.css';
import AboutUsTheTeamContainer from './../containers/AboutUsTheTeamContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <AboutUsTheTeamContainer />,
        document.getElementById('root')
    )
});
