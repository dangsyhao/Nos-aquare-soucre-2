import React, {Component} from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

class View extends Component {
    componentDidMount() {
      this.props.action.load()
    }
    render() {
        var _this = this;
        return (
            <BlockUi tag="div" blocking={this.props.pageDetail.get('isLoading')}>
                <div className="card">
                    <div className="card-body">
                        Link: <a href={this.props.pageDetail.get('url')}>{this.props.pageDetail.get('title')}</a>
                    </div>
                </div>
            </BlockUi>
        )
    }
}

export default View;
