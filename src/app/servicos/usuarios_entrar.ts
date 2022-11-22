export class UsuEnt {
  id?:string;
  email?: string;
  nome?: string;
  senha?: string;
 


  constructor(id?: string, usuarios_entrar: UsuEnt = {}) {
    this.id = usuarios_entrar.id;
    this.email = usuarios_entrar.email;
    this.nome = usuarios_entrar.nome;
    this.senha =  usuarios_entrar.senha;
   
  }


}