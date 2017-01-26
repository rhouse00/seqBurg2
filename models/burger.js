module.exports = function(sequelize, DataTypes){
	var burger = sequelize.define("burger", {
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0
		}
	},{
		classMethods: {
			associate: function(models){
				burger.belongsTo(models.customer, {
					onDelete: "CASCADE",
					foreignKey:{
						allowNull: false
					}
				});
			}
		}
},{
		timestamps: false
	});
	return burger;
};
