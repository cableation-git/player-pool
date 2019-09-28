import { NgIf } from '@angular/common';

export class Player {
  public firstName: string;
  public lastName: string;
  public birthDate: string;
  public height: number;
  public weight: number;
  public birthCity: string;
  public birthState: string;
  public birthCountry: string;
  public imageURl: string

  constructor( firstName: string, lastName: string, birthDate: string, height: number, weight: number, birthCity: string, birthState: string, birthCountry: string,imageURL: string ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.height = height;
        this.weight = weight;
        this.birthCity = birthCity;
        this.birthState = birthState;
        this.birthCountry = birthCountry;
        this.imageURl =  imageURL; 
      }
}