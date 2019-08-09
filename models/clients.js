module.exports = function (sequelize, DataTypes) {
    var Clients = sequelize.define("clients", {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
  
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
  
      });
    return Clients;
  };