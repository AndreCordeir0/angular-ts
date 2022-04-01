export class Jogador{
    public constructor(init?:Partial<Jogador>) {
        Object.assign(this, init);
    }

    public id:any |undefined;
    public carro:any |undefined;
    public nickname: String |undefined;
    public senha:String |undefined;
    public saldo:any|undefined;
}