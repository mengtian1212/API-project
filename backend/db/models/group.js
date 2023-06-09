'use strict';
const {
  Model, Validator
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Group.belongsTo(models.User, { foreignKey: 'organizerId', as: 'Organizer' });

      Group.hasMany(models.GroupImage, { foreignKey: 'groupId' });

      Group.hasMany(models.Venue, { foreignKey: 'groupId' });

      Group.hasMany(models.Event, { foreignKey: 'groupId' }); //

      Group.hasMany(models.Membership, { foreignKey: 'groupId' }); //

      Group.belongsToMany(models.Venue, {
        through: 'Event',
        foreignKey: 'groupId',
        otherKey: 'venueId', as: 'events'
      });

      Group.belongsToMany(models.User, {
        through: 'Membership',
        foreignKey: 'groupId',
        otherKey: 'userId'
      });

    }
  }
  Group.init({
    organizerId: {
      // allowNull: false,
      type: DataTypes.INTEGER,
      // references: { model: 'Users', key: 'id' }
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(60),
      validate: {
        notNull: { msg: "Name must be 60 characters or less" },
        len: { args: [1, 60], msg: "Name must be 60 characters or less" }
      }
    },
    about: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notNull: { msg: "About must be 30 characters or more" },
        len: { args: [30, 100000], msg: "About must be 30 characters or more" }
      }
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "Type must be 'Online' or 'In person'" },
        isIn: { args: [['Online', 'In person']], msg: "Type must be 'Online' or 'In person'." }
      }
    },
    private: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        // notNull: { msg: "Private must be a boolean" },
        // notEmpty: { msg: "Private must be a boolean" },
        isBoolean(value) {
          if (typeof (value) !== 'boolean') {
            throw new Error("Private must be a boolean11");
          }
        }
      }
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "City is required" },
        notEmpty: { msg: "City is required" }
      }
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING(2),
      validate: {
        notNull: { msg: "State is required" },
        notEmpty: { msg: "State is required" }
      }
    }
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};
