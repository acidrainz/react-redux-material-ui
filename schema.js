var Schema = {
  role: {
    id: { type: 'increments', nullable: false, primary: true },
    authority: { type: 'varchar', maxlength: 255, nullable: false, unique: true },
  },
  user: {
    id: { type: 'increments', nullable: false, primary: true },
    password: { type: 'varchar', maxlength: 255, nullable: false },
    email: { type: 'varchar', maxlength: 255, nullable: false }
  },
  user_role: {
    user_id: { type: 'integer', nullable: false, maxlength: 11 , unsigned:true,references:'role.id'},
    role_id: { type: 'integer', nullable: false, maxlength: 11,  unsigned:true,references:'user.id' }
  }

};
module.exports = Schema;