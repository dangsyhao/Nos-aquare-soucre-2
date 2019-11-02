import React, {Component} from 'react';
import LibraryForm from 'library-form';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import ListFieldView from './list_field/View';
import ImageFieldView from './image_field/View';

class View extends LibraryForm.Form.View {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BlockUi tag="div" blocking={this.props.form.get('isBlocked')}>
                <form className="form" onSubmit={e => e.preventDefault()}>
                    <div>
                        <h5>GENERAL</h5>
                        <div className="form-group">
                            <label className="control-label">Sort Order</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('sort_order')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Background</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('background')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Padding Top</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('paddingTop')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Padding Bottom</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('paddingBottom')}
                                action={this.props.action}
                            />
                        </div>

                        <h5>CLAYA ULTIMATE BUNDLE</h5>

                        <div className="form-group">
                            <label className="control-label">Title</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('title')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <ListFieldView
                                data={this.props.form.get('fields').get('list')}
                                action={this.props.action}
                            />
                        </div>
                        <h5>Images</h5>
                        <div className="form-group">
                            <ImageFieldView
                                data={this.props.form.get('fields').get('images')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Button Text</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('buttonText')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Button Link</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('buttonLink')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Ecwid Product ID</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('ecwidProductId')}
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