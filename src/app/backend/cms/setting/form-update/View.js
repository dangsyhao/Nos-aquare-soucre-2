import React, {Component} from 'react';
import LibraryForm from 'library-form';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import ListFieldView from './list_field/View';

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
                            <label className="control-label">Footer background</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('footer_background')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Footer Menu</label>
                            <ListFieldView
                                data={this.props.form.get('fields').get('footer_menu')}
                                action={this.props.action}
                            />
                        </div>

                        <div className="form-group">
                            <label className="control-label">Default banner background</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('default_banner_background')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Default banner text color</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('default_banner_text_color')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">User banner background</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('user_banner_background')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">User banner color</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('user_banner_color')}
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
                                <a className="btn btn-primary" onClick={ e => this.props.action.submit(this.props.form, e)}>Submit</a>
                            </div>
                        </div>
                    </div>
                </form>
            </BlockUi>
        )
    }
}

export default View;
