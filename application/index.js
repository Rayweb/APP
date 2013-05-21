
var PhoneView = Backbone.Marionette.ItemView.extend({
  template: "#phone-template",
  onRender : function(){
  	var modelBinder = new Backbone.ModelBinder();
  	modelBinder.bind(this.model,this.el);
  }
});

var PhonesView = Backbone.Marionette.CollectionView.extend({
	itemView : PhoneView
});

var Phone = Backbone.Model.extend({
	defaults:{
		phoneName : '',
		maker : ''
	}
});
var Phones = Backbone.Collection.extend({
	model : Phone
});

var region = new Backbone.Marionette.Region({
	el: "#application"
});

var secondRegion = new Backbone.Marionette.Region({
	el: "#secondRegion"
})

var thirdRegion = new Backbone.Marionette.Region({
	el: "#thirdRegion"
});


var xperia = new Phone({phoneName : 'Xperia', maker : 'Sony'});
var htc8x = new Phone({phoneName : 'htc8x', maker : 'HTC'});
var Lumia920 = new Phone({phoneName : 'Lumia920', maker : 'Nokia'});
var iPhone5 = new Phone({phoneName : 'Iphone5', maker : 'Apple'});
var Galaxys4 = new Phone({phoneName : 'Galaxys4', maker : 'Samsung'});
var Nexus4 = new Phone({phoneName : 'Nexus4', maker : 'Google'});


var phones = new Phones();
phones.add(xperia);
phones.add(htc8x);
phones.add(Lumia920);
phones.add(iPhone5);
phones.add(Galaxys4);
phones.add(Nexus4);


region.show(new PhoneView({model:xperia}));
secondRegion.show(new PhonesView({collection:phones}));
thirdRegion.show(new PhoneView({model:iPhone5}));