export abstract class View<T> { //Utilizando generics <T> para quando houver o import da classe view, seja a passado o tipo T para que possa ser utilizado nas outras funções
    protected elemento: HTMLElement; //protected só deixa a classe e quem a herda utilizar o atributo

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    protected abstract template(model: T): string;

    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}