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
	},	{
		timestamps: false
		}
	);
	return burger;
};
