const DataTypes = require('sequelize');
const { Model } = DataTypes;

// DB 연결되면 테이블 자동 생성됨.

module.exports = class User extends Model {
    static init(sequelize) {
        return super.init(
            {
                // id가 기본적으로 들어있다.
                email: {
                    type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
                    allowNull: false, // 필수
                    unique: true, // 고유한 값
                },
                nickname: {
                    type: DataTypes.STRING(30),
                    allowNull: false, // 필수
                },
                password: {
                    type: DataTypes.STRING(100),
                    allowNull: false, // 필수
                },
            },
            {
                modelName: 'User',
                tableName: 'users',
                charset: 'utf8',
                collate: 'utf8_general_ci', // 한글 저장
                sequelize,
            }
        );
    }
    // static associate(db) {

    // }
};
