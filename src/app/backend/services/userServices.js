class UserServices {
    setCookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    checkCookie(cname) {
        var ck=this.getCookie(cname);
        if (ck != "") {
            return ck
        } else {
            return false
        }
    }

    deleteAllCookies() {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            var d = new Date();
            d.setTime(d.getTime() - 1);
            var expires = "expires=" + d.toGMTString();
            document.cookie = name + "=;" + expires + ";path=/";
        }
    }

    logIn(token, profile) {
        this.setCookie('__notasquare_cms_jwt', token, 15);
        this.setCookie('__notasquare_cms_profile', profile, 15);
    }

    logOut() {
        this.deleteAllCookies()
    }

    getToken() {
        return this.checkCookie('__notasquare_cms_jwt')
    }

    getProfile() {
        let profile = JSON.parse(this.checkCookie('__notasquare_cms_profile'));

        return profile
    }

    getId() {
        let profile = JSON.parse(this.checkCookie('__notasquare_cms_profile'));
        if(profile.id != undefined){
            return profile.id;
        }
        return null
    }

    getUserName() {
        let profile = JSON.parse(this.checkCookie('__notasquare_cms_profile'));
        if(profile.username != undefined){
            return profile.username;
        }
        return this.checkCookie('__notasquare_cms_name')
    }

    getEmail() {
        let profile = JSON.parse(this.checkCookie('__notasquare_cms_profile'));
        if(profile.email != undefined){
            return profile.email;
        }
        return this.checkCookie('__notasquare_cms_name')
    }

    isLoggedIn() {
        return this.checkCookie('__notasquare_cms_jwt')
    }
}

export default new UserServices();
