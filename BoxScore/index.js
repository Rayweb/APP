//var app = new Backbone.Marionette.Application();

//app.addRegions({
//	playersAwayRegion : '#playersAway',
//	playersHomeRegion : '#playersHome'
//});

SatisticsLayout = Backbone.Marionette.Layout.extend({
  template: "#statistics-layout",

  regions: {
    playersAwayRegion : '#playersAway',
	playersHomeRegion : '#playersHome'
  }
});

statisticsLayout = new SatisticsLayout({el:'#statistics'});
statisticsLayout.render();

var PlayerModel = Backbone.Model.extend({
	defaults : {
		number : 1,
		name : '',
		position : '',
		minutesPlayed: 0,
		fieldGoalsAttempted  : 0,
		fieldGoalsMade:0,
		threePointShootsAttempted:0,
		threePointShootsMade:0,
		freeThrowsAttempted:0,
		freeThrowsMade:0,
		offensiveRebounds:0,
		defensiveRebounds:0,
		totalRebounts:0,
		assists:0,
		turnOvers:0,
		steals:0,
		blocks:0,
		fouls:0,
		points:0
	}
});

var TeamCollection = Backbone.Collection.extend({
	model : PlayerModel,
});

var PlayerStatisticsView = Backbone.Marionette.ItemView.extend({
  template: "#player-statistics",
  tagName : 'tr',
  onRender : function(){
  	var modelBinder = new Backbone.ModelBinder();
  	modelBinder.bind(this.model,this.el);
  }

});
var TeamStatisticsView = Backbone.Marionette.CompositeView.extend({
	itemView: PlayerStatisticsView,
	template : '#team-statistics',
	itemViewContainer : '#playersContainer'
});

var arrayofAwayPlayers = [
	{number :1,name: "Scott",position:"G"},
	{number :2,name: "Rob",position:"F"},
	{number :3,name: "John",position:"C"},
	{number :4,name: "Dave",position:"SF"}
];

var arrayofHomePlayers = [
	{number :1,name: "Iris",position:"G"},
	{number :2,name: "Jeremy",position:"F"},
	{number :3,name: "Larry",position:"C"},
	{number :4,name: "Dan",position:"SF"}
];

var playersAwayCollection = new TeamCollection();
playersAwayCollection.reset(arrayofAwayPlayers);

var playersHomeCollection = new TeamCollection();
playersHomeCollection.reset(arrayofHomePlayers);

var awayStatisticsView = new TeamStatisticsView({collection: playersAwayCollection});
var homeStatisticsView = new TeamStatisticsView({collection: playersHomeCollection});

statisticsLayout.playersAwayRegion.show(awayStatisticsView);
statisticsLayout.playersHomeRegion.show(homeStatisticsView);



