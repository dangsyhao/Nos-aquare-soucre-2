// button menu
<Nav className="drop-language c-mega-menu c-pull-right c-mega-menu-dark c-mega-menu-dark-mobile c-fonts-uppercase c-fonts-bold" style={{marginTop: '40px'}}>
  <NavDropdown id="dropdown-language" className="c-btn-square" title={_this.props.pageContainer.get('titleLang')[_this.props.pageContainer.get('currentLang')]} style={{backgroundColor: 'initial', borderColor: 'none', borderWidth: '0px'}}>
    <MenuItem key="en" onSelect={e=>_this.props.action.changeLang('en')}>
      <img src="/public/static/english.png" height="9" width='18' alt="en" className="c-desktop-logo" style={{ float: 'left', marginTop:'8px'}}/>
    <span style={{marginLeft: '2px', color: 'rgba(47, 45, 39, 1)', fontWeight: '600', fontFamily: 'Source Sans Pro', fontSize: '14px', textTransform: 'uppercase'}}> ENGLISH </span>
    </MenuItem>
    <MenuItem key="de" onSelect={e=>_this.props.action.changeLang('de')}>
      <img src="/public/static/germany.png" height="9" width='18' alt="de" className="c-desktop-logo" style={{ float: 'left', marginTop:'8px'}}/>
      <span style={{marginLeft: '2px', color: 'rgba(47, 45, 39, 1)', fontWeight: '600', fontFamily: 'Source Sans Pro', fontSize: '14px', textTransform: 'uppercase'}}> GERMANY </span>
    </MenuItem>
  </NavDropdown>
</Nav>


// change language
if (__params.query.language) {
  localStorage.setItem('currentLang', __params.query.language)
}
else {
  if (localStorage.getItem('currentLang') == null) {
    localStorage.setItem('currentLang', 'de')
  }
}

// show trans
&nbsp;
 <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popDataText}>
   <i className="fa fa-language" style={{cursor: 'pointer', fontSize:'14px'}}></i>
 </OverlayTrigger>
