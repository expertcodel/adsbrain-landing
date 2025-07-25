import { connectTodb } from "../../utils/database";
import { DataTypes } from "sequelize";
export const blogModel = () => {

    const connection = connectTodb();
    if (!connection) {
        return null;
    }

    const blogmodel = connection.define('blog', {

        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        language_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        bcategory_id: {
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING,
        },
        slug: {
            type: DataTypes.STRING,
        },
        main_image: {
            type: DataTypes.STRING,
        },
        publish_date: {
            type: DataTypes.DATE
        },
        author: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.BLOB,
        },
        seo_title: {
            type: DataTypes.TEXT,
        },
        meta_keywords: {
            type: DataTypes.TEXT,
        },
        meta_description: {
            type: DataTypes.TEXT,
        },
        serial_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }

    })

    connection.sync();
    return blogmodel;

}