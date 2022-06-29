import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";


export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona():void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        //this.negociacoes.lista().pop(); //Isso não funciona em uma lista ReadOnly
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }

    criaNegociacao():Negociacao {
        return new Negociacao(
            this.inputData.valueAsDate,
            this.inputQuantidade.valueAsNumber,
            this.inputValor.valueAsNumber
        );
    }

    limparFormulario():void {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0.0';
        this.inputData.focus();
    }
}