import { Streamresult } from '../models/result.model';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable()
export class StreamresultService {
    //http instance
    constructor(private http: Http) { }
    //limited to 25api calls
    Limit: string = '24';
    //search service query
    search(query: string) {
        //Set params
        let params: string = [`q=${query}`,`limit=${this.Limit}`].join('&');
        //Set queryUrl
        let queryUrl: string = `/api/search?${params}`;
        //Send get request
        return this.http.get(queryUrl).map((response: Response) => {
            return (<any>response.json()).streams.map(stream => {
                return new Streamresult({
                    game: stream.channel.game,
                    status: stream.channel.status,
                    display_name: stream.channel.display_name,
                    language: stream.channel.language,
                    views: stream.channel.views,
                    viewers: stream.channel.viewers,
                    followers: stream.channel.followers,
                    logo: stream.channel.logo,
                    preview: stream.preview.large,
                    url: stream.channel.url,
                    partner: stream.channel.partner
                });
            });
        }).catch(this.handleServerError);
    };
    private handleServerError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().message);
    }
}