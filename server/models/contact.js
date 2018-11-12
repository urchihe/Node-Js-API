'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    fullname: { 
      type:DataTypes.STRING
    },
    email: { 
      type:DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type:DataTypes.STRING,
      allowNull: false
    },
    mobile:{
      type:DataTypes.STRING,
      allowNull: false
    }, 
    address:{
      type:DataTypes.STRING,
      allowNull: false
    }, 
    star: {
      type:DataTypes.BOOLEAN
  }, 
});
  Contact.associate = (models) => {
   Contact.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Contact;
};