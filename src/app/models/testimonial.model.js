import { connectTodb } from "../../utils/database";
import { DataTypes } from "sequelize";

export const testimonialModel = () => {

    const connection = connectTodb();
    if (!connection) {
        return null;
    }

    const testimonialmodel = connection.define('testimonial', {

        id: {
            type: DataTypes.BIGINT(20),
            primaryKey: true,
            autoIncrement: true
        },
        language_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        image: {
            type: DataTypes.STRING
        },
        comment: {
            type: DataTypes.TEXT
        },
        name: {
            type: DataTypes.STRING(50)
        },
        rank: {
            type: DataTypes.STRING(50)
        },
        serial_number: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 0
        }

    })

    connection.sync();
    return testimonialmodel
}