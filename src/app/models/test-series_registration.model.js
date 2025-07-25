import { connectTodb } from "../../utils/database";
import { DataTypes } from "sequelize";
export const testseries_registrationModel = () => {

    const connection = connectTodb();
    if (!connection) {
        return null;
    }

    const testseries_registrationmodel = connection.define('testseries_registration', {

        id: {
            type: DataTypes.BIGINT(20),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        learning_type: {
            type: DataTypes.ENUM('testseries', 'internship', 'training'),

        },
        mode_of_study: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        course_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false

        },
        level: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        currency_code: {
            type: DataTypes.STRING(56),
            allowNull: false,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        actual_amount: {
            type: DataTypes.FLOAT,

        },
        coupon_uses_id: {
            type: DataTypes.INTEGER,
        },
        registration_number: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dob: {
            type: DataTypes.DATE,

        },
        address: {
            type: DataTypes.STRING(1024),
            allowNull: false
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false
        },

        post_code: {
            type: DataTypes.STRING(6),
        },
        country: {
            type: DataTypes.STRING,
        },
        designation: {
            type: DataTypes.STRING(1024),
        },
        college_name: {
            type: DataTypes.STRING(1024),
        },
        gender: {
            type: DataTypes.STRING(20),
        },
        is_paid: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 0
        },
        is_doc_uploaded: {
            type: DataTypes.TINYINT(1),
            allowNull: false,
            defaultValue: 0
        },
        status: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 1
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,

        },
        updated_at: {
            type: DataTypes.DATE
        }

    }, {
        timestamps: false
    })

    connection.sync();
    return testseries_registrationmodel;

}