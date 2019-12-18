import Store from './store'
const Dispatcher = require('flux').Dispatcher;
const AppDisPatCher = new Dispatcher();

AppDisPatCher.register(function (action) {
                            switch (action.actionType) {
                                case "ADD_NEW_STATUS":
                                    Store.changeStatus(action.text);
                                    Store.emitChange();
                                    break;
                                default:
                                //None
                            }
                        });

export default AppDisPatCher;
