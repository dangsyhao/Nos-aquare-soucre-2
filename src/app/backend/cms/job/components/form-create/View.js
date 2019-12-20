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
                            <label className="control-label">Title<span className="required" aria-required="true">*</span></label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('title')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Fulltime Position?</label>
                            <LibraryForm.Common.Checkbox.View
                                data={this.props.form.get('fields').get('is_fulltime')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Parttime Position?</label>
                            <LibraryForm.Common.Checkbox.View
                                data={this.props.form.get('fields').get('is_parttime')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Hour Per Week</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('hour_per_week')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Location</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('location')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Experience Required</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('experience_required')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Max Salary</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('max_salary')}
                                action={this.props.action}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Job Summary</label>
                            <LibraryForm.Common.Textbox.View
                                data={this.props.form.get('fields').get('job_summary')}
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
