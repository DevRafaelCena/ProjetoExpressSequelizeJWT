module.exports = (sequelize, DataTypes) =>{
    const Usuario = sequelize.define("Usuario",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          nome: DataTypes.STRING,
          email: {
              type: DataTypes.STRING,
            },
          documento:DataTypes.STRING,
          cpf:DataTypes.STRING,
          status: DataTypes.Boolean,
          login: DataTypes.STRING,
          senha: DataTypes.STRING,
          tipo_usuario: DataTypes.INTEGER,
          status: DataTypes.STRING,
          created_at: DataTypes.STRING,
          updated_at: DataTypes.STRING //como tem comente um tipo pode ser codado sem declarar como obj {} igual acima
    },{
        tableName:'usuario',  //para tabelas que não tem o nome em plural
        timestamps:false    // obrigatorio nas tabelas que não contem dados de timestamps senão o sequelize  tenta achar na tabela
    });
    return Usuario

}
