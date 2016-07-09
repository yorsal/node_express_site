// MySQL数据库联接配置
var Sequelize = require('sequelize');
var sequelize = new Sequelize('yorsal_jiayuan', 'root', '', {});
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });


module.exports = {
	Sequelize: Sequelize,

	sequelize: sequelize
};
