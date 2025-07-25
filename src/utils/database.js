import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2'
export const connectTodb = () => {

    if (!global.instance) {

        try {


            const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
                host: 'localhost',
                dialect: 'mysql',
                dialectModule: mysql2,
                logging: false,
            });


            console.log("database connected successfully!");
            if (process.env.NODE_ENV === 'production') {
                global.instance = sequelize;
            }

            return sequelize

        } catch (error) {

            console.log(error);
            return false;
        }


    }
    else {

        return global.instance;

    }

}



