const User = function (Sequelize, DataTypes) {
  return Sequelize.define(
    "User",
    {
      //id INT NOTNULL PRIMARYKEY AUTO_INCREMENT >> 테이블 정의
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      //userid VARCHAR(20) NOT NULL
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      //name VARCHAR(20) NOT NULL
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      //pw VARCHAR(20) NOT NULL
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );
};
module.exports = User;
