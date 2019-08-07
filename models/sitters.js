module.exports = function (sequelize, DataTypes) {
  var Sitter = sequelize.define("sitter", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,


    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [10],
      }

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,

    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  
  return Sitter;
};

