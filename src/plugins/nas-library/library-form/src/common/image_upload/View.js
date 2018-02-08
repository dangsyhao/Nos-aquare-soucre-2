import React, {Component} from 'react';
import {Modal, Button, Popover} from 'react-bootstrap';
import BlockUi from 'react-block-ui';
class View extends Component {
    componentDidMount() {
        var componentAction= this.props.action._actionHelpers[this.props.data.get('id')]
        componentAction.load()
    }
    changeValue(e) {
        this.props.action.changeValue(
            this.props.data.get('id'),
            e.target.files[0]
        );
    }
    render() {
        var _this= this
        var componentAction= this.props.action._actionHelpers[this.props.data.get('id')]
        return (
            <div className={this.props.data.get('error') != '' ? "has-error" : ''}>
                <div className="input-group">
                    <input type="text" value={this.props.data.get('value')} onChange={e=>this.changeValue(e)} className="form-control" placeholder="" />
                    <span className="input-group-btn">
                        <button className="btn btn-info" type="button" onClick={e=>componentAction.modal_show(true)}>Browse</button>
                    </span>
                </div>
                <Modal show={this.props.data.get('isShow')} bsSize="large" onHide={e=>componentAction.modal_show(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Photo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <BlockUi tag="div" blocking={this.props.data.get('isBlockPhoto')} className="portlet" key={"photo-view"} >
                            <div className="portlet-body">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <label>Upload image</label>
                                        <div className="row">
                                            <div className="col-md-8 col-sm-9 col-xs-8">
                                                <div className={this.props.data.get('error') != '' ? "has-error" : ''}>
                                                    <input
                                                        className={this.props.class ? this.props.class: "form-control"}
                                                        type="file"
                                                        id={this.props.data.get('id')}
                                                        onChange={e => componentAction.fileUpload(e)}
                                                        accept={this.props.accept}
                                                    />
                                                <span className="help-block" style={{ color: 'red'}}>{this.props.data.get('message')}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-3 col-xs-4">
                                                <button type="button" onClick={e=>componentAction.uploadFile(this.props.data.get('file'))} className="btn btn-primary">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <label>Search</label>
                                        <div className="row">
                                            <div className="col-md-8 col-sm-9 col-xs-8">
                                                <input placeholder="Name..." value={this.props.data.get('name')} onChange={e=>componentAction.onChangeSearch(e)} type="text" className="form-control c-square c-theme"/>
                                            </div>
                                            <div className="col-md-4 col-sm-3 col-xs-4">
                                                <button type="button" className="btn btn-primary" onClick={e=>componentAction.onSearch(this.props.data.get('name'))}>Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="portlet-body">
                                <div className="form-group">
                                    <label>Gallery</label>
                                    <div className="row" style={{height: '420px', overflowY: 'auto'}}>
                                        {
                                            (this.props.data.get('photos').length > 0) ? this.props.data.get('photos').map(function(p, index) {
                                                var imgS = {width: 'auto', height: '135px', display: 'block', cursor: 'pointer'};
                                                imgS.pointerEvents = 'auto';
                                                let ele = []
                                                ele.push(
                                                    <div className="col-md-3 col-sm-4 col-xs-6"
                                                            key={"bk-tbg-imgNO"+index}
                                                            style={{maxHeight: '200px', marginTop: '5px'}}
                                                        >
                                                        <div className="thumbnail thumbnail-gallery">
                                                            <div className="img-del btn btn-xs" onClick={e=> componentAction.onDeleteFile(p.id)}>
                                                                Delete
                                                            </div>
                                                            <img onClick={e=>componentAction.getUrlImage(p.url)} key={"bk-tbg-PNO"+index} alt='' src={p.url} style={imgS} className="img-responsive"/>
                                                            <div className="caption" onClick={e=>componentAction.getUrlImage(p.url)}>
                                                                <span title=''>{p.file_name}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                if ((index+1) % 4 == 0) {
                                                    ele.push(<div className="clearfix"></div>)
                                                }
                                                return ele
                                            }) : <div className="text-center">No photos</div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </BlockUi>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={e=>componentAction.modal_show(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default View;
