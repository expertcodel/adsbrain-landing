import { connectTodb } from "../../utils/database";
import { DataTypes } from "sequelize";

export const course_categoryModel = () => {

    const connection = connectTodb();
    if (!connection) {
        return null;
    }

    const course_categorymodel = connection.define('course_categorie', {

        id: {
            type: DataTypes.BIGINT(20),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        language_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 169
        },
        name: {
            type: DataTypes.STRING
        },
        short_text: {
            type: DataTypes.STRING(120)
        },
        image: {
            type: DataTypes.STRING
        },
        slug: {
            type: DataTypes.STRING
        },
        serial_number: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 0
        },
        status: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }

    })

    connection.sync();
    return course_categorymodel
}