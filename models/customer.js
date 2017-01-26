module.exports = function(sequelize, DataTypes){
  var customer = sequelize.define("customer", {
    name: DataTypes.STRING,
  },{
    classMethods: {
      associate: function(models){
        customer.hasMany(models.burger);
      }
    }
  });
  return customer;
};
