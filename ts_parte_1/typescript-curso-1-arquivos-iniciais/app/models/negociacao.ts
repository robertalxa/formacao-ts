export class Negociacao {
    constructor (
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    //#region Programcação defensiva, para garantir que depois de criado, o atributo data possa ser imutável
    //Trocado public _data por private _data
    get data():Date {
        const data = new Date(this._data.getTime());
        return data;
    }
    //Criando uma data nova, para garantir que caso haja alguma alteração em outro lugar no programa, nao altere diretamente a data da classe
    //#endregion

    /*
    Não é mais necessário por conta do public readonly, todo mundo tem acesso mas ninguém pode atribuir um valor a essa propriedade
    get data():Date {
        return this._data;
    }

    get quantidade():number {
        return this._quantidade;
    }

    get valor():number {
        return this._valor;
    }*/

    get volume():number {
        return this.quantidade * this.valor;
    }
}