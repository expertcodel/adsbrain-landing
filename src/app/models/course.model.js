import { connectTodb } from "../../utils/database";
import { DataTypes } from "sequelize";
export const courseModel = () => {

    const connection = connectTodb();
    if (!connection) {
        return null;
    }

    const coursemodel = connection.define('course', {

        id: {
            type: DataTypes.BIGINT(20),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        language_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 169
        },
        course_category_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
        },
        course_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sub_title: {
            type: DataTypes.STRING(455),
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mode_of_study: {
            type: DataTypes.STRING
        },
        video_url: {
            type: DataTypes.STRING
        },
        video_id: {
            type: DataTypes.STRING(56)
        },
        google_form_url: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.STRING,
        },
        profile_image: {
            type: DataTypes.STRING,
        },
        price_level_1: {
            type: DataTypes.STRING(56),
        },
        price_level_2: {
            type: DataTypes.STRING(56),
        },
        price_level_3: {
            type: DataTypes.STRING(56),
        },
        int_price_level_1: {
            type: DataTypes.STRING(56),
        },
        int_price_level_2: {
            type: DataTypes.STRING(56),
        },
        int_price_level_3: {
            type: DataTypes.STRING(56),
        },
        call_for_assistance: {
            type: DataTypes.STRING(256),
        },
        duration: {
            type: DataTypes.STRING(256),
        },
        level: {
            type: DataTypes.STRING(256),
        },
        course_outline: {
            type: DataTypes.TEXT('long'),
        },
        evaluation: {
            type: DataTypes.TEXT('long'),
        },
        career: {
            type: DataTypes.TEXT('long'),
        },
        case_studies: {
            type: DataTypes.TEXT('long'),
        },
        plan_1: {
            type: DataTypes.STRING(5000),
        },
        plan_2: {
            type: DataTypes.STRING(5000),
        },
        plan_3: {
            type: DataTypes.STRING(5000),
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

    }, { timestamps: false })

    connection.sync();
    return coursemodel;

}