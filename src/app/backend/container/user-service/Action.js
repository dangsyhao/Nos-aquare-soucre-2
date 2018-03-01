import jQuery from 'jquery'

class Action {
    constructor(dispatcher, id='user-service-backend') {
        this.dispatcher = dispatcher;
        this.id = id;
    }
    setUser(user_info_backend) {
        localStorage.setItem('user_info_backend', JSON.stringify(user_info_backend))
        this.dispatcher.dispatch({
            id:            this.id,
            type:          this.id+ '/set-user',
            user_info_backend:     user_info_backend
        })
    }
    checkUser() {
        var user_info_backend= (JSON.parse(localStorage.getItem('user_info_backend')) ? JSON.parse(localStorage.getItem('user_info_backend')) : {})
        if(user_info_backend.username == undefined || user_info_backend.username == '') {
            location.href='/backend/login'
            return false;
        }
        return true;
    }
    getUser() {
        var user_info_backend= (JSON.parse(localStorage.getItem('user_info_backend')) ? JSON.parse(localStorage.getItem('user_info_backend')) : {})
        return user_info_backend
    }
    load() {
        var user_info_backend= (JSON.parse(localStorage.getItem('user_info_backend')) ? JSON.parse(localStorage.getItem('user_info_backend')) : {})
        this.dispatcher.dispatch({
            id:            this.id,
            type:          this.id+ '/set-user',
            user_info_backend:     user_info_backend
        })
    }
    logout() {
        localStorage.setItem('user_info_backend', JSON.stringify({
            'username':             '',
            'fullname':             '',
        }))
        this.dispatcher.dispatch({
            id:            this.id,
            type:          this.id+ '/logout',
            user_info_backend:     {}
        })
        location.href='/backend/login'
    }
    is_show() {
        this.dispatcher.dispatch({
            id:            this.id,
            type:          this.id+ '/is_show',
        })
    }
}

export default Action;
