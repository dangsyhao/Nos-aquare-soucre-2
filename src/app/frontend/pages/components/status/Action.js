import AppDisPatCher from './dispatcher';

class Action {
    addNewText (text) {
        AppDisPatCher.dispatch({
            actionType:'ADD_NEW_STATUS',
            text :text
        })
    }
}

var Action_obj = new Action();
export default Action_obj