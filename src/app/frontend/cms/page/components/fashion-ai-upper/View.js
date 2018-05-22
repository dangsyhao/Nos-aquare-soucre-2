import React, {Component} from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

class View extends Component {
    render() {
        var _this = this;
        var style = {}
        var data = this.props.data
        style.background = data.get('background')
        style.width = "100%"
        style.paddingTop = data.get('paddingTop')
        style.paddingBottom = data.get('paddingBottom')
        var mclass = "col-md-offset-" + data.get('offset') + " col-md-" + data.get('span')


        var _this = this;

        var shortNames = {
            'pattern-plaid':               'Plaid',
            'pattern-polka-dots':          'Polka Dots',
            'pattern-stripe':              'Stripe',
            'pattern-animal-print':        'Animal Print',
            'pattern-floral':              'Floral',
            'pattern-geometric':           'Geometric',
            'pattern-lattice':             'Lattice',
            'pattern-paisley':             'Paisley',
            'pattern-plain':               'Plain',

            'primary-color-black':         'Black',
            'primary-color-blue':          'Blue',
            'primary-color-brown':         'Brown',
            'primary-color-green':         'Green',
            'primary-color-grey':          'Grey',
            'primary-color-orange':        'Orange',
            'primary-color-red':           'Red',
            'primary-color-white':         'White',
            'primary-color-yellow':        'Yellow',

            'neckline-boat':               'Boat neck',
            'neckline-cowl':               'Cowl neck',
            'neckline-high-neck':          'High neck',
            'neckline-keyhole':            'Keyhole',
            'neckline-off-the-shoulder':   'Off-the-shoulder',
            'neckline-scoop':              'Scoop neck',
            'neckline-strapless':          'Strapless',
            'neckline-surplice':           'Surplice',
            'neckline-sweetheart':         'Sweetheart',
            'neckline-vneck':              'V-Neck',

            'sleeve-length-long':          'Long sleeve',
            'sleeve-length-normal':        'Normal sleeve',
            'sleeve-length-short':         'Short sleeve',
            'sleeve-length-sleeveless':    'Sleeveless',

            'material-denim':              'Denim',
            'material-lace':               'Lace',
            'material-leather':            'Leather',

            'gender-male':                 'Male',
            'gender-female':               'Female',

            'upper-type-blazer':           'Blazer',
            'upper-type-blouse':           'Blouse',
            'upper-type-cardigan':         'Cardigan',
            'upper-type-hoodie':           'Hoodie',
            'upper-type-jacket':           'Jacket',
            'upper-type-shirt':            'Shirt',
            'upper-type-sweater':          'Sweater',
            'upper-type-tank':             'Tank',
            'upper-type-tee':              'Tee',
        }

        var landmarks_x0 = 0
        var landmarks_y0 = 0
        var landmarks_x1 = 0
        var landmarks_y1 = 0
        var landmarks_x2 = 0
        var landmarks_y2 = 0
        var landmarks_x3 = 0
        var landmarks_y3 = 0
        var landmarks_x4 = 0
        var landmarks_y4 = 0
        var landmarks_x5 = 0
        var landmarks_y5 = 0
        var image_width = _this.props.data.get('image').get('width')
        var image_height = _this.props.data.get('image').get('height')
        var bbox_top = 0
        var bbox_left = 0
        var bbox_width = 0
        var bbox_height = 0
        if (image_width > 0) {
            var landmarks = _this.props.data.get('landmarks')
            landmarks_x0 = ((landmarks.get('x0')-5) * 100.0 / image_width) + "%"
            landmarks_y0 = ((landmarks.get('y0')-5) * 100.0 / image_height) + "%"
            landmarks_x1 = ((landmarks.get('x1')-5) * 100.0 / image_width) + "%"
            landmarks_y1 = ((landmarks.get('y1')-5) * 100.0 / image_height) + "%"
            landmarks_x2 = ((landmarks.get('x2')-5) * 100.0 / image_width) + "%"
            landmarks_y2 = ((landmarks.get('y2')-5) * 100.0 / image_height) + "%"
            landmarks_x3 = ((landmarks.get('x3')-5) * 100.0 / image_width) + "%"
            landmarks_y3 = ((landmarks.get('y3')-5) * 100.0 / image_height) + "%"
            landmarks_x4 = ((landmarks.get('x4')-5) * 100.0 / image_width) + "%"
            landmarks_y4 = ((landmarks.get('y4')-5) * 100.0 / image_height) + "%"
            landmarks_x5 = ((landmarks.get('x5')-5) * 100.0 / image_width) + "%"
            landmarks_y5 = ((landmarks.get('y5')-5) * 100.0 / image_height) + "%"

            var bounding_box = _this.props.data.get('bounding_box')
            bbox_top = (bounding_box.get('T') * 100.0 / image_height) + "%"
            bbox_left = (bounding_box.get('L') * 100.0 / image_width) + "%"
            bbox_width = ((bounding_box.get('R') - bounding_box.get('L')) * 100.0 / image_width) + "%"
            bbox_height = ((bounding_box.get('B') - bounding_box.get('T')) * 100.0 / image_height) + "%"
        }

        var attentionDiv = []
        var attentionDivs = []
        var attention = _this.props.data.get('attention').toJS()
        if (attention.length > 0) {
            var S = 0
            var ARR = []
            for (var i = 0; i < 7; i++) {
                for (var j = 0; j < 7; j++) {
                    ARR.push(attention[i][j])
                }
            }
            ARR.sort()
            S = ARR[32]

            for (var i = 0; i < 7; i++) {
                for (var j = 0; j < 7; j++) {
                    var T = (14.28 * i) + "%"
                    var L = (14.28 * j) + "%"
                    var O = attention[i][j]
                    if (O < S) {
                        O = 0
                    }
                    attentionDivs.push(
                        <div style={{ position: 'absolute', width: '14.28%', height: '14.28%', top: T, left: L, backgroundColor: 'white', opacity: O}}></div>
                    )
                }
            }
            attentionDiv = <div style={{ zIndex: 9999999, backgroundColor: 'black', opacity: 0.6, position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}}>
                <div style={{ position: 'absolute', top: bbox_top, left: bbox_left, width: bbox_width, height: bbox_height }}>
                    { attentionDivs }
                </div>
            </div>
        }

        return (
            <div style={style}>
                <BlockUi tag="div" className="container-fluid" blocking={this.props.data.get('isBlocking')}>
                    <div className={mclass}>
                        <div className="row" style={{ paddingTop: 50 }}>
                            <div className="col-md-12">
                                <h1 className="text-center c-font-25">TEST IMAGES</h1>
                                <br/>
                                <div className="text-center" style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto'}}>
                                    {
                                        _this.props.data.get('testImages').map(function(testImage, i) {
                                            return (
                                                <a onClick={e => _this.props.action.submitTestImage(testImage)} style={{ cursor: 'pointer'}}>
                                                    <img src={testImage.base64} style={{ height : 100}}/>
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                                <br/><br/><br/><br/>

                                <h1 className="text-center c-font-25">UPLOAD IMAGE</h1>
                                <p className="text-center">.jpg only</p>
                                <div className="text-center">
                                    <input
                                        type="file"
                                        onChange={e => _this.props.action.changeFile(e)}
                                        style={{ padding: 20, border: '1px solid #CCC', width: "50%", display: 'inline-block' }}
                                        />
                                </div>
                                <br/><br/><br/><br/>

                                <div>
                                    <p style={{ color: 'red' }} className="text-center">{ _this.props.data.get('error') }</p>
                                </div>

                                <div className="container">
                                    <div className="col-md-4">
                                        <div style={{ resize: 'auto' }}>
                                            <div style={{position: 'absolute', width: 10, height: 10, backgroundColor: 'red', left: landmarks_x0, top: landmarks_y0 }}></div>
                                            <div style={{position: 'absolute', width: 10, height: 10, backgroundColor: 'red', left: landmarks_x1, top: landmarks_y1 }}></div>
                                            <div style={{position: 'absolute', width: 10, height: 10, backgroundColor: 'red', left: landmarks_x2, top: landmarks_y2 }}></div>
                                            <div style={{position: 'absolute', width: 10, height: 10, backgroundColor: 'red', left: landmarks_x3, top: landmarks_y3 }}></div>
                                            <div style={{position: 'absolute', width: 10, height: 10, backgroundColor: 'red', left: landmarks_x4, top: landmarks_y4 }}></div>
                                            <div style={{position: 'absolute', width: 10, height: 10, backgroundColor: 'red', left: landmarks_x5, top: landmarks_y5 }}></div>

                                            <img src={ _this.props.data.get('imageBase64')} width="100%" />
                                            { attentionDiv }
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div>
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th width="20%">Attribute</th>
                                                        <th width="60%">Score</th>
                                                        <th width="20%"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.props.data.get('attributes').map(function(attribute) {
                                                            var score = parseFloat(attribute.pValue).toFixed(2)
                                                            if (score > 0.2) {
                                                                var attributeName = attribute.name
                                                                if (attributeName in shortNames) {
                                                                    attributeName = shortNames[attributeName]
                                                                }
                                                                return <tr>
                                                                    <td>{ attributeName }</td>
                                                                    <td><div style={{width: ((score*100)+"%"), height: 20, backgroundColor: (score > 0.5 ? 'red' : 'gray') }}></div></td>
                                                                    <td>
                                                                        <a onClick={e => _this.props.action.loadAttributeAttention(e, attribute.id )} className="btn btn-primary btn-xs">Attention</a>
                                                                    </td>
                                                                </tr>
                                                            }
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </BlockUi>
            </div>
        )
    }
    componentDidMount() {
        this.props.action.load(this.props.parameters)
    }
}

export default View;
