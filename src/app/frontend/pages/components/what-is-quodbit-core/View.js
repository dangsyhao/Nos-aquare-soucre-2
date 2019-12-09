import React, {Component} from 'react';

class View extends Component {
    componentWillMount() {
    }
    render() {
        var _this = this;
        var menuId = this.props.data.get('menuId')

        return (
                <div className="container">
                    <div className="sec_title text-center" style={{ marginBottom: 70 }}>
                        <h2 className="title mb-4">What is Quodbit Core?</h2>
                        <p className="text-muted">Code and Document Analysis and Indexing Engine</p>
                    </div>
                    <div className="row" style={{ minHeight: 500 }}>
                        <div className="col-lg-4 d-flex align-items-start">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a onClick={e => _this.props.action.setSelectedMenu('project_modularisation')} href="javascript:;" className={"nav-link" + (menuId == 'project_modularisation' ? ' active' : '')} style={{ padding: '10px 10px 0px 20px' }}>
                                        <h5>Project Modurarisation</h5>
                                        <p>Break your projects into small and managable modules</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={e => _this.props.action.setSelectedMenu('source_code_analysis')} href="javascript:;" className={"nav-link" + (menuId == 'source_code_analysis' ? ' active' : '')} style={{ padding: '10px 10px 0px 20px' }}>
                                        <h5>Source Code Analysis</h5>
                                        <p>Analyse your source code and changes history, detect key attributes</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={e => _this.props.action.setSelectedMenu('document_analysis')} href="javascript:;" className={"nav-link" + (menuId == 'document_analysis' ? ' active' : '')} style={{ padding: '10px 10px 0px 20px' }}>
                                        <h5>Document Indexing</h5>
                                        <p>Read, study and index your project document (text, images)</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content support_tab_content">
                                {
                                    menuId == 'project_modularisation' ?
                                    <div className="tab-pane fade show active" id="one" role="tabpanel" aria-labelledby="one-tab">
                                        <div className="section-title ml-lg-3">
                                            <h4 className="mb-4">Project Modularisation</h4>
                                            <p className="text-muted">Quodbit Core will break and organize the project into lots of smaller semantic modules such as List page, Form create page, Form edit page, etc</p>
                                            <p className="text-muted">Key functions:</p>
                                            <ul className="list-unstyled feature-list text-muted">
                                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Split and assign source code into Module</li>
                                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Analyse the relationship and dependencies between modules</li>
                                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Classify the module type like List page, Create page, Detail page, Chart, etc</li>
                                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Analyse module similarity and complexity</li>
                                            </ul>
                                            <br/>
                                            <p className="text-muted">This is processed fully automatically based on source code and repository changes history</p>
                                        </div>
                                    </div> : ''
                                }

                                {
                                    menuId == 'source_code_analysis' ?
                                    <div className="tab-pane fade show active" id="two" role="tabpanel" aria-labelledby="two-tab">
                                        <div className="section-title ml-lg-3">
                                            <h4 className="mb-4">Source Analysis</h4>
                                            <p className="text-muted">Scan the whole source code structure module-by-module, to perform analysis and extract key attributes of your source code repository</p>
                                            <p className="text-muted">Key analysis:</p>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <ul className="list-unstyled feature-list text-muted">
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Code to Vector</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Language Detection</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Framework Detection</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Design Pattern Detection</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Functions Detection</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <ul className="list-unstyled feature-list text-muted">
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Module Type Detection</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Technology Detection</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Complexity Estimation</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Code to UI Mapping</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Code Tagging</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <p className="text-muted">The analysis system works on various common language, thank to the transformation from source into <span className="text-primary">Universal Abstract Syntax Tree [1]</span>. Then this tree will act as low-level features to feed into the Neuron Network.</p>

                                            <notes>[1] <a href="https://doc.bblf.sh/" _target="blank">Babelfish - Universal Code Parser</a></notes>
                                        </div>
                                    </div> : ''
                                }
                                {
                                    menuId == 'document_analysis' ?
                                    <div className="tab-pane fade show active" id="three" role="tabpanel" aria-labelledby="three-tab">
                                        <div className="section-title ml-lg-3">
                                            <h4 className="mb-4">Document Indexing</h4>
                                            <p className="text-muted">Quodbit Core then analyse and read your document (jira, confluence, dropbox, etc), to index your project, then find the relationship between these document and code</p>
                                            <p className="text-muted">Key functions:</p>
                                            <ul className="list-unstyled feature-list text-muted">
                                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Keyword Analysis</li>
                                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Vectorization (word2vec, doc2vec, image2vec)</li>
                                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Record Linkages (link documents to modules)</li>
                                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Document Classification (use case diagram, class diagram, database diagram, etc)</li>
                                            </ul>
                                            <br/>

                                        </div>
                                    </div> : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default View;
