const mysql = require("mysql");
const config = require("../common/config");
console.log(config.database);
const pool = mysql.createPool(config.database);
exports.query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        console.log("数据库连接失败");
        resolve({
          status: 500,
        });
      } else {
        console.log("数据库连接成功");
        connection.query(sql, (err, results) => {
          if (err) {
            reject(err);
            resolve({
                status:400
            })
          }else{
              connection.release();
              resolve({
                  status:200,
                  results
              })
          }
        });
      }
    });
  });
};
