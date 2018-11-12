'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
      isUnique: function (value, next) {
      const self = this;
      User.find({where: {username: value}})
          .then(function (user) {
              // reject if a different user wants to use the same email
       if (user && self.id !== user.id) {
          return next('Username already in use!');
          }
          return next();
        })
        .catch(function (err) {
         return next(err);
          });
          }
        },
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
     unique: true,
     validate: {
      isUnique: function (value, next) {
      const self = this;
      User.find({where: {email: value}})
          .then(function (user) {
              // reject if a different user wants to use the same email
       if (user && self.id !== user.id) {
          return next('Email already in use!');
          }
          return next();
        })
        .catch(function (err) {
         return next(err);
          });
          }
        },
  },
    password: {
      type:DataTypes.STRING,
      allowNull: false
    },
});
  User.associate = (models) => {
    User.hasMany(models.Contact, {
      foreignKey: 'userId',
      as: 'contacts',
    });
  };
  return User;
};