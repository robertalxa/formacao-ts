export abstract class View<T> { //Utilizando generics <T> para quando houver o import da classe view, seja a passado o tipo T para que possa ser utilizado nas outras funções
    protected elemento: HTMLElement; //protected só deixa a classe e quem a herda utilizar o atributo
    private escapar: boolean = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLElement;
        }else{
            throw Error('Seletor não existe no DOM verifique!')
        }
        if(escapar) this.escapar = escapar;
    }

    protected abstract template(model: T): string;

    update(model: T): void {
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}