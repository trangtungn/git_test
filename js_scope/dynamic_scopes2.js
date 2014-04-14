var user = {
    handle: "execute user.alertName({handle: @trangtungn})",
    alertName: function(should_alert) {
        if(should_alert) {
            console.log(this.handle);
//            alert(this.handle);
        }
    }
};

user.alertName.apply({handle: "apply user.alertName.apply({handle: @V.I.E})"}, [true]);
user.alertName.call({handle: "call user.alertName.call({handle: @V.I.E})"}, true);