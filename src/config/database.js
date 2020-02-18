module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123',
  database: 'metapp',
  define: {
    timestamps: true,
    underscored: true,
    underscoreAll: true,
  },
};
