import React, {Component} from 'react';

class View extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        this.props.action.load();
    }

    render() {
        const jobs_data = this.props.data.get('jobs_data');
        const jobs_data_render = jobs_data.map((job) =>
            <div className="col-12 mt-4 pt-2 col-md-6 col-lg-3" key={job.id}>
                <div className="job-content p-4 border rounded position-relative overflow-hidden">
                    <div className="head pb-3 border-bottom">
                        <ul className="list-unstyled mb-0">
                            <li className="list-inline-item text-success">
                                {job.is_fulltime === 1 ? ' Full time /':''}
                                {job.is_parttime === 1 ? ' Past time ' : ''}
                            </li>
                        </ul>
                        <h5 style={{ marginTop: 10 }}>{job.title}</h5>
                        <p className="mb-0 text-muted">{job.location}</p>
                    </div>
                    <ul className="job-facts pt-3 list-unstyled" style={{display: "grid"}}>
                        {job.experience_required &&
                            <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i>{job.experience_required} Experience</li>
                         }

                        {job.hour_per_week &&
                            <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i>{job.hour_per_week}-hour per week</li>
                        }
                        {job.job_summary &&
                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i>{job.job_summary}</li>
                        }
                        {job.max_salary &&
                        <li className="list-inline-item text-muted"><i className="mdi mdi-currency-usd text-success mr-1"></i> Up to ${job.max_salary}</li>
                        }

                    </ul>
                    <a className="btn btn-outline-primary btn-block" href="/page-job-detail">View</a>
                </div>
            </div>
        );

        return (
            <div className="container">
                <div className="text-center" style={{ marginBottom: 20 }}>
                    <h2 className="title mb-4">Job</h2>
                    <p className="text-muted">We are always in hiring-mode</p>
                </div>
                <div className="row">
                    {jobs_data_render}
                </div>
            </div>
        )
    }
}

export default View;
