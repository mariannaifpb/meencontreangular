export class Lugares {
  id?:string;
  Estado?: string;
  cidade?: string;
  endereço?: string;
  nome?: string;
  produto?: string;

  constructor(id?: string, lugar: Lugares = {}) {
    this.id = lugar.id;
    this.Estado = lugar.Estado;
    this.cidade = lugar.cidade;
    this.endereço = lugar.endereço;
    this.nome = lugar.nome;
    this.produto = lugar.produto;
  }


}