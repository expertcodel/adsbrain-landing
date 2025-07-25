import { connectTodb } from "../../utils/database";
import { DataTypes } from "sequelize";

export const newsletterModel = () => {

    const connection = connectTodb();
    if (!connection) {
        return null;
    }

    const newslettermodel = connection.define('subscriber', {

        id: {
            type: DataTypes.BIGINT(20),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        domain: {
            type: DataTypes.STRING(100),
            defaultValue: 'draa.in'
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue:new Date()
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue:false
        }

    },{timestamps:false})

    connection.sync();
    return newslettermodel
}