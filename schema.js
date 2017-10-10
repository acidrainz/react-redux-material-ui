var Schema = {
  role: {
    id: { type: 'increments', nullable: false, primary: true },
    authority: { type: 'varchar', maxlength: 255, nullable: false, unique: true },
  },
  users: {
    id: { type: 'increments', nullable: false, primary: true },
    password: { type: 'varchar', maxlength: 255, nullable: false },
    email: { type: 'varchar', maxlength: 255, nullable: false },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: false }
  },
  user_role: {
    user_id: { type: 'integer', nullable: false, maxlength: 11 , unsigned:true,references:'users.id'},
    role_id: { type: 'integer', nullable: false, maxlength: 11,  unsigned:true,references:'role.id' }
  },
  social_managers:{
    id: { type: 'increments', nullable: false, primary: true },
    user_id: { type: 'integer', nullable: false, maxlength: 255 , unsigned:true,references:'users.id'},
    social_id: { type: 'varchar', nullable: false, maxlength: 255},
    display_name: { type: 'varchar', nullable: false, maxlength: 255},
    provider:{type:'string',maxlength :255,nullable:false },
    access_token:{type:'string', maxlength :500,nullable:true },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: false }

  }
};
module.exports = Schema;