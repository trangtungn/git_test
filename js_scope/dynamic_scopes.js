var user = {
    handle: "execute user.alertName({handle: @trangtungn})",
    alertName: function() {
        console.log(this.handle);
//        alert(this.handle);
    }
};

// execute function alertName() of user object
user.alertName();
// call method alertName
user.alertName.call();
// call method alertName by passing handle parameter
user.alertName.call({handle: "call user.alertName.call({handle: @V.I.E})"});