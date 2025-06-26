create table usuario (
	id SERIAL PRIMARY KEY,
	nome text not null, 
	email text unique not null
);

select * from usuario;