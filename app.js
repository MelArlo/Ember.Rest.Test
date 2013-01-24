/**************************
* Application
**************************/
App = Em.Application.create();

/**************************
* Models
**************************/
App.User = Em.Object.extend({
    user_id: null,
    full_name: null,
    email: null,
    password: null
});


/**************************
* Views
**************************/
App.SearchTextField = Em.TextField.extend({
    insertNewline: function(){
        App.usersController.loadUsers();
    }
});

/**************************
* Controllers
**************************/
App.usersController = Em.ArrayController.create({
    content: [],
    username: '',
    loadUsers: function() {
        var me = this;
        var url = 'http://www.gocella.com/api/users/?token=654ub56v47yc45658HCVhv56c54gv5GVCh5hH456h4hc546h45HCh5&method=GetUsers&type=listonly&callback=?';
        // push username to recent user array
		$.getJSON(url,function(data){
		    me.set('content', []);
		    $(data).each(function(index,value){
			    var t = App.User.create({
			        user_id: value.user_id,
			        full_name: value.full_name,
			        email: value.email,
			        password: value.password,
					status: value.status
			    });
			    me.pushObject(t);
		    })
		});
    }
});
