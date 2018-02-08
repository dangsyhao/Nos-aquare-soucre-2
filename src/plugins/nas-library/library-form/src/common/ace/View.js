import React, {Component} from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/python';
import 'brace/theme/textmate';

class View extends Component {
    changeValue(value) {
        this.props.action.changeValue(
            this.props.data.get('id'),
            value
        );
    }
    render() {
        return (
            <div className={this.props.data.get('error') != '' ? "has-error" : ''}>
                <AceEditor
                  mode="python"
                  theme="textmate"
                  width="100%"
                  name={this.props.data.get('id')}
                  onLoad={this.onLoad}
                  onChange={value => this.changeValue(value)}
                  value={this.props.data.get('value')}
                  fontSize={14}
                  showPrintMargin={true}
                  showGutter={true}
                  highlightActiveLine={true}
                  editorProps={{$blockScrolling: true}}
                  setOptions={{
                  enableBasicAutocompletion: false,
                  enableLiveAutocompletion: false,
                  enableSnippets: false,
                  showLineNumbers: true,
                  tabSize: 2,
                  }}/>
                <span className="help-block" style={{ color: 'red'}}>{this.props.data.get('error')}</span>
            </div>
        )
    }
}

export default View;
