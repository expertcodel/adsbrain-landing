import { connectTodb } from "../../utils/database";
import { DataTypes } from "sequelize";
export const bookModel = () => {

    const connection = connectTodb();
    if (!connection) {
        return null;
    }

    const bookmodel = connection.define('book', {

        id: {
            type: DataTypes.BIGINT(20),
            primaryKey: true,
            autoIncrement: true
        },
        language_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 169
        },
        book_category_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
        },
        book_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
        },
        home_image: {
            type: DataTypes.STRING,
        },
        book_pdf: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.STRING(56),
        },
        int_price: {
            type: DataTypes.STRING(56),
        },
        publish_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        download_count: {
            type: DataTypes.INTEGER(11),
        },
        page_count: {
            type: DataTypes.INTEGER(11),
        },
        word_count: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING(455),
        },
        description: {
            type: DataTypes.TEXT,
        },
        status: {
            type: DataTypes.TINYINT,
        },
        featured: {
            type: DataTypes.TINYINT,
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
            type: DataTypes.BIGINT(20),

        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }

    })

    connection.sync();
    return bookmodel;

}