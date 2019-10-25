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
                        <div className="form-group">
                            <label className="control-label">Offset</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('offset')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Span</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('span')}
                                action={this.props.action}
                            />
                        </div>

                        <h5>MADE FOR LISA</h5>
                        <div className="form-group">
                            <label className="control-label">Center Image</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('center_image')}
                                action={this.props.action}
                            />
                        </div>

                        <div className="form-group">
                            <label className="control-label">Title #1</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('title1')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Text #1</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('text1')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Title #2</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('title2')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Text #2</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('text2')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Title #3</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('title3')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Text #3</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('text3')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Title #4</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('title4')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Text #4</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('text4')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Title #5</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('title5')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Text #5</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('text5')}
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
