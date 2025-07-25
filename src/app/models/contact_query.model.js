import { connectTodb } from "../../utils/database";
import { DataTypes } from "sequelize";

export const contact_queryModel = () => {

    const connection = connectTodb();
    if (!connection) {
        return null;
    }

    const contact_querymodel = connection.define('contact_querie', {

        id: {
            type: DataTypes.BIGINT(20),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        contact_number: {
            type: DataTypes.STRING(15)
        },
        address: {
            type: DataTypes.TEXT
        },
        details: {
            type: DataTypes.TEXT,
           
        },
        status: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }

    },{
        timestamps:false
    })

    connection.sync();
    return contact_querymodel
}