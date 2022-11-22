export class UsuCad {
  id?:string;
  email?: string;
  senha?: string;
  nome?: string;
  

  constructor(id?: string, usuarios_cadastrar: UsuCad = {}) {
    this.id = usuarios_cadastrar.id;
    this.email = usuarios_cadastrar.email;
    this.senha = usuarios_cadastrar.senha;
    this.nome = usuarios_cadastrar.nome;
    
  }


}