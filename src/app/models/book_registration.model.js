import { connectTodb } from "../../utils/database";
import { DataTypes } from "sequelize";
export const book_registrationModel = () => {

    const connection = connectTodb();
    if (!connection) {
        return null;
    }

    const book_registrationmodel = connection.define('book_registration', {

        id: {
            type: DataTypes.BIGINT(20),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
       
        book_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false

        },
       
        currency_code: {
            type: DataTypes.STRING(56),
            allowNull: false,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
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
       
        is_paid: {
            type: DataTypes.INTEGER(11),
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
    return book_registrationmodel;

}