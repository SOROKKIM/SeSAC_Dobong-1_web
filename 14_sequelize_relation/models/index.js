"use strict";

const Sequelize = require("sequelize");
// const config = require(__dirname + "/../config/config.json")["development"];
const config = require(__dirname + "/../config/config.js")["development"];
//env 사용할때는 js 파일과 같이 사용
console.log("config >>> ", config);
const db = {};

// 1. Sequelize 클래스를 이용해서 sequelize 인스턴스 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 2. 모델 모듈을 불러오는 부분 , sequelize 모듈을 전달
const PlayerModel = require("./Player")(sequelize, Sequelize);
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const TeamModel = require("./Team")(sequelize, Sequelize);
const GameModel = require("./Game")(sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(sequelize, Sequelize);

// 3. 모델간의 관계 설정하기
//hasOne, hasMany, belongsto, belongsMany

// 3-1 . 1:1 관계 설정, Player:Profile = 1:1
// Player의 pk가 Profile의 fk가 된다.
// Profile의 Player에 속해 있다. (belongsTo)
PlayerModel.hasOne(ProfileModel, {
  // 두 모델을 연결하는 외래키 설정하는 부부
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "player_id",
});
ProfileModel.belongsTo(PlayerModel, {
  // 두 모델을 연결하는 외래키 설정하는 부부
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "player_id",
});

// 3-2 . 1:N 관계 설정, Team:Player = 1:N
// 한팀에 여러 플레이어가 "속해있음"
TeamModel.hasMany(PlayerModel, {
  sourceKey: "team_id",
  foreignKey: "teamid",
});
PlayerModel.belongsTo(TeamModel, {
  target: "team_id",
  foreignKey: "teamid",
});

// 3-3 . N:N 관계 설정, Game:Team = N:N
// 하나의 팀은 여러 경기를 할 수 있고,
// 하나의 경기에는 여러팀(2개의 팀)이 참여
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreignKey: "team_id",
});
GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: "game_id",
});

// 4. db객체에 모델 추가 반드시 해야함!
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;
db.Game = GameModel;
db.TeamGame = TeamGameModel;

module.exports = db;
