module.exports = (sequelize, DataTypes) => {
	var Todo = sequelize.define('Todo', {
		id          : { type: DataTypes.BIGINT(12), allowNull: false, autoIncrement: true, Unsigned: true, primaryKey: true, field: 'id' },
		task_name    : { type: DataTypes.STRING, allowNull: false, field: 'task_name' },
		due_time    : { type: DataTypes.TIME, allowNull: false, field: 'due_date' },
		complete_status    : { type: DataTypes.BOOLEAN, allowNull: false, field: 'complete_status' },


	}, {
		timestamps: true,
		createdAt: 'created_dt',
		updatedAt: 'changed_dt',
		tableName: 'Todo'
	});
	return Todo;
};