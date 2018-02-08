import React, {Component} from 'react';
import renderHTML from 'react-render-html';

class View extends Component {
    render() {
        var data = this.props.data
        var style = {}
        style.background = data.get('background')
        style.width = "100%"
        style.paddingTop = data.get('paddingTop')
        style.paddingBottom = data.get('paddingBottom')
        var mclass = "col-md-offset-" + data.get('offset') + " col-md-" + data.get('span')

        return (
          <div style={style}>
              <div className="container-fluid">
                  <div className="row">
                      <div className={mclass}>
                          <div className="row">
                              <h3 className="c-center c-font-35">{renderHTML(data.get('title'))}</h3>
                          </div>
                          <div className="row">
                          {
                              data.get('columns').map(function(column, i) {
                                  return (
                                      <div className={"col-md-" + column.span} style={{ textAlign: 'center', padding: '0 45px 45px' }}>
                                          <img src={column.icon} width="50"></img>
                                          <div style={{padding: '20px 0px 20px'}}><h3 className="c-font-bold c-font-20">{renderHTML(column.title)}</h3></div>
                                          <p style={{lineHeight: 1.5}}>{renderHTML(column.text)}</p>
                                      </div>
                                  )
                              })
                          }
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
    componentDidMount() {
        this.props.action.load(this.props.parameters)
    }

}

export default View;
