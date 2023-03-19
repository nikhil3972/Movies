export class AllMovieList{
    id! : number;
    img! : string;
    name! : string;
    description! : string;
    type! : string;
    release_date! : string;
    link! : string;

    constructor(id:number, img:string, name:string, description:string, type:string, release_date:string, link:string){
        this.id = id;
        this.img = img;
        this.name = name;
        this.description = description;
        this.type = type,
        this.release_date = release_date;
        this.link = link;
    }
}