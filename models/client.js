module.exports = function (sequelize, DataTypes) {
    var Client = sequelize.define("client", {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
  
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
  
      });
    return Client;
  };