import React, {Component} from 'react';
import LibraryForm from 'library-form';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

class View extends LibraryForm.Form.View {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BlockUi tag="div" blocking={this.props.form.get('isBlocked')}>
                <form className="login-form well" onSubmit={e => e.preventDefault()} style={{backgroundColor:'#fff'}}>
                    <div>
                        <div className="form-group">
                            <label className="control-label">Username</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('username')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Password</label>
                            <LibraryForm.Common.Password.View
                                data={this.props.form.get('fields').get('password')}
                                action={this.props.action}
                            />
                        </div>
                    </div>
                    <div>
                        {
                            this.props.form.get('messages').map(function(message, i) {
                                switch (message.type) {
                                    case 'error':
                                        return (<div className="alert alert-danger" role="alert">{message.message}</div>)
                                    }
                                    return (<div className="alert alert-info" role="alert">{message.message}</div>)
                            })
                        }
                    </div>
                    <div className="form-group">
                        <a href="javascript:;" className="btn btn-xs btn-primary" onClick={ e => this.props.action.submit(this.props.form, e, this.props)}>
                            <b>Login</b>
                        </a>
                    </div>
                </form>
            </BlockUi>
        )
    }
}

export default View;
