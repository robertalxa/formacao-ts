export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        //return [...this.negociacoes]; //Spread operator para copiar os valores da lista original nessa lista criada com [] e impossibilitar mudanças na lista original
        return this.negociacoes;
    }
}
/*const negociacoes = new Negociacoes();
negociacoes.adiciona(new Negociacao(new Date(), 10, 10));
negociacoes.lista().forEach(n => { console.log(n.volume); });*/ 
