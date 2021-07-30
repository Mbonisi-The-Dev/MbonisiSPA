import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class People {
    name?: string | undefined;
    gender?: string | undefined;
    birthYear?: string | undefined;
    skinColor?: string | undefined;
    height?: string | undefined;
    homeworld?: string | undefined;
    mass?: string | undefined;
    hairColor?: string | undefined;
    eyeColor?: string | undefined;
    films?: string[] | undefined;
    species?: string[] | undefined;
    vehicles?: string[] | undefined;
    starships?: string[] | undefined;
    created?: Date;
    edited?: Date;
    url?: string | undefined;

    constructor(data?: IPeople) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.gender = _data["gender"];
            this.birthYear = _data["birthYear"];
            this.skinColor = _data["skinColor"];
            this.height = _data["height"];
            this.homeworld = _data["homeworld"];
            this.mass = _data["mass"];
            this.hairColor = _data["hairColor"];
            this.eyeColor = _data["eyeColor"];
            if (Array.isArray(_data["films"])) {
                this.films = [] as any;
                for (let item of _data["films"])
                    this.films!.push(item);
            }
            if (Array.isArray(_data["species"])) {
                this.species = [] as any;
                for (let item of _data["species"])
                    this.species!.push(item);
            }
            if (Array.isArray(_data["vehicles"])) {
                this.vehicles = [] as any;
                for (let item of _data["vehicles"])
                    this.vehicles!.push(item);
            }
            if (Array.isArray(_data["starships"])) {
                this.starships = [] as any;
                for (let item of _data["starships"])
                    this.starships!.push(item);
            }
            this.created = _data["created"] ? new Date(_data["created"].toString()) : <any>undefined;
            this.edited = _data["edited"] ? new Date(_data["edited"].toString()) : <any>undefined;
            this.url = _data["url"];
        }
    }

    static fromJS(data: any): People {
        data = typeof data === 'object' ? data : {};
        let result = new People();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["gender"] = this.gender;
        data["birthYear"] = this.birthYear;
        data["skinColor"] = this.skinColor;
        data["height"] = this.height;
        data["homeworld"] = this.homeworld;
        data["mass"] = this.mass;
        data["hairColor"] = this.hairColor;
        data["eyeColor"] = this.eyeColor;
        if (Array.isArray(this.films)) {
            data["films"] = [];
            for (let item of this.films)
                data["films"].push(item);
        }
        if (Array.isArray(this.species)) {
            data["species"] = [];
            for (let item of this.species)
                data["species"].push(item);
        }
        if (Array.isArray(this.vehicles)) {
            data["vehicles"] = [];
            for (let item of this.vehicles)
                data["vehicles"].push(item);
        }
        if (Array.isArray(this.starships)) {
            data["starships"] = [];
            for (let item of this.starships)
                data["starships"].push(item);
        }
        data["created"] = this.created ? this.created.toISOString() : <any>undefined;
        data["edited"] = this.edited ? this.edited.toISOString() : <any>undefined;
        data["url"] = this.url;
        return data; 
    }
}

export interface IPeople {
    name?: string | undefined;
    gender?: string | undefined;
    birthYear?: string | undefined;
    skinColor?: string | undefined;
    height?: string | undefined;
    homeworld?: string | undefined;
    mass?: string | undefined;
    hairColor?: string | undefined;
    eyeColor?: string | undefined;
    films?: string[] | undefined;
    species?: string[] | undefined;
    vehicles?: string[] | undefined;
    starships?: string[] | undefined;
    created?: Date;
    edited?: Date;
    url?: string | undefined;
}
export class Chuck{
    category?: string | undefined;
    
    constructor(data?: IChuck) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.category = _data["category"];
        }
    }

    static fromJS(data: any): Chuck {
        data = typeof data === 'object' ? data : {};
        let result = new Chuck();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["category"] = this.category;
        return data; 
    }
}

export interface IChuck {
    category?: string | undefined;
}

export class Joke {
    categories?: string[] | undefined;
    id?: string | undefined;
    url?: string | undefined;
    value?: string | undefined;

    constructor(data?: IJoke) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["categories"])) {
                this.categories = [] as any;
                for (let item of _data["categories"])
                    this.categories!.push(item);
            }
            this.id = _data["id"];
            this.url = _data["url"];
            this.value = _data["value"];
        }
    }

    static fromJS(data: any): Joke {
        data = typeof data === 'object' ? data : {};
        let result = new Joke();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.categories)) {
            data["categories"] = [];
            for (let item of this.categories)
                data["categories"].push(item);
        }
        data["id"] = this.id;
        data["url"] = this.url;
        data["value"] = this.value;
        return data; 
    }
}

export interface IJoke {
    categories?: string[] | undefined;
    id?: string | undefined;
    url?: string | undefined;
    value?: string | undefined;
}

//Export class for Joke
export class Search{
    people?: People[] | undefined;
    jokes?: Joke[] | undefined;

    constructor(data?: ISearch) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["people"])) {
                this.people = [] as any;
                for (let item of _data["people"])
                    this.people!.push(People.fromJS(item));
            }
            if (Array.isArray(_data["jokes"])) {
                this.jokes = [] as any;
                for (let item of _data["jokes"])
                    this.jokes!.push(Joke.fromJS(item));
            }
        }
    }

    static fromJS(data: any): Search {
        data = typeof data === 'object' ? data : {};
        let result = new Search();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.people)) {
            data["people"] = [];
            for (let item of this.people)
                data["people"].push(item.toJSON());
        }
        if (Array.isArray(this.jokes)) {
            data["jokes"] = [];
            for (let item of this.jokes)
                data["jokes"].push(item.toJSON());
        }
        return data; 
    }
}

export interface ISearch {
    people?: People[] | undefined;
    jokes?: Joke[] | undefined;
}

@Injectable({
    providedIn:  'root'
})

export class ApiService {
    endpoint = 'https://localhost:44394';

    constructor(private httpClient: HttpClient) { }
  
    httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    } 

    getPeople(): Observable<People>{
        return this.httpClient.get<People>(this.endpoint + '/Swapi')
        .pipe(
            retry(1),
            catchError(this.processError)
        )
    }

    getChuck(): Observable<Chuck>{
        return this.httpClient.get<Chuck>(this.endpoint + '/Chuck')
        .pipe(
            retry(1),
            catchError(this.processError)
        )
    }

    getChuckCategory(name: string): Observable<Joke>{
        return this.httpClient.get<Joke>(this.endpoint + '/Chuck/Search/' + name)
        .pipe(
            retry(1),
            catchError(this.processError)
        )
    }

    getSearch(name: string): Observable<Search>{
        return this.httpClient.get<Search>(this.endpoint + '/Search?name=' + name)
        .pipe(
            retry(1),
            catchError(this.processError)
        )
    } 

    processError(err: { error: { message: string; }; status: any; message: any; }) {
        let message = '';
        if(err.error instanceof ErrorEvent) {
         message = err.error.message;
        } else {
         message = `Error Code: ${err.status}\nMessage: ${err.message}`;
        }
        console.log(message);
        return throwError(message);
     }

}