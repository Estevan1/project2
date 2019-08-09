module.exports = function (sequelize, DataTypes) {
  var Sitter = sequelize.define("sitter", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,


    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,

    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },

    bio: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
  });
  
  return Sitter;
};


