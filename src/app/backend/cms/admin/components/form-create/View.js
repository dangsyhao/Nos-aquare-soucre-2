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
                <form className="form" onSubmit={e => e.preventDefault()}>
                    <div>
                        <div className="form-group">
                            <label className="control-label">Username<span className="required" aria-required="true">*</span></label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('username')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Fullname</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('name')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Password<span className="required" aria-required="true">*</span></label>
                            <LibraryForm.Common.Password.View
                                data={this.props.form.get('fields').get('password')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Retype password<span className="required" aria-required="true">*</span></label>
                            <LibraryForm.Common.Password.View
                                data={this.props.form.get('fields').get('repassword')}
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

                    <div className="form-actions">
                        <div className="row">
                            <div className="col-md-offset-3 col-md-9">
                                <a href="javascript:;" className="btn btn-primary" onClick={ e => this.props.action.submit(this.props.form, e)}>Submit</a>
                            </div>
                        </div>
                    </div>
                </form>
            </BlockUi>
        )
    }
}

export default View;
