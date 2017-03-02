//create model for stream results 
export class Streamresult {
    game: string;
    status: string;
    display_name: string;
    language: string;
    views: string;
    viewers: string;
    followers: string;
    logo: string;
    preview: string;
    url: string;
    partner: string;

    //pass in keys when a result is recieved
    constructor(obj?: any) {
        this.game = obj.game;
        this.status = obj.status;
        this.display_name = obj.display_name;
        this.language = obj.language;
        this.views = obj.views;
        this.viewers = obj.viewers;
        this.followers = obj.followers;
        this.logo = obj.logo;
        this.preview = obj.preview;
        this.url = obj.url;
        this.partner = obj.partner;
    }
}