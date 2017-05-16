'use strict';
module.exports = function(sequelize, DataTypes) {
  var Data = sequelize.define('Data', {
    url: DataTypes.STRING,
    short_url: DataTypes.STRING,
    count: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    hooks: {
      beforeCreate: function(callback) {
        let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let length = 4;
        let result = '';
        for (let i = length; i > 0; i--) {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
        callback.short_url = result;
      }
    }
  });
  return Data;
};
