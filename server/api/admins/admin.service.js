

const pool = require('../../config/database');

module.exports = {
    //data comes form the admin controller
    register: (data, callback) => {

        //inserting data to adminregistration table
        pool.query(`INSERT INTO adminregistration(admin_name,admin_email,admin_password)VALUES(?,?,?)`,
            [
                data.userName,
                data.email,
                data.password
            ],
            (err, result) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, result);
            }
        );
    },
    profile: (data, callback) => {

        //inserting data to adminprofile table
        pool.query(`INSERT INTO adminprofile(admin_id,first_name,last_name)VALUES(?,?,?)`,
            [
                data.adminId,
                data.firstName,
                data.lastName
            ],
            (err, result) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, result);
            }
        );
    },
    adminById: (id, callback) => {

        //getting data from adminregistration and adminprofile tables by joining them
        pool.query(`SELECT adminregistration.admin_id,admin_name,admin_email,first_name,last_name FROM adminregistration LEFT JOIN adminprofile ON adminregistration.admin_id = adminprofile.admin_id WHERE adminregistration.admin_id = ?`, [id], (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, result[0]);
        })
    },
    getadminByEmail: (email, callback) => {

        //getting the admin-info by using email
        pool.query(`SELECT * FROM adminregistration WHERE admin_email = ?`, [email], (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, result[0]);
        })
    }
}

