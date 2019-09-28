export class Club {
    public name: string;
    public league: string;
    public originYear: number;
    public iconURL: string;
    public division: string;
    public city: string;
    public country: string;

    constructor(name: string, league: string, originYear: number, iconURL: string, division: string, city: string, country: string) {
        this.name = name;
        this.league = league;
        this.originYear = originYear;
        this.iconURL = iconURL;
        this.division = division;
        this.city = city;
        this.country = country;
    }
}