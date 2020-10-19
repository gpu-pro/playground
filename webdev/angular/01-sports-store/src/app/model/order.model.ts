/**
 * Represents the order.
 */
import { Injectable } from '@angular/core';
import { Cart } from './cart.model';

export type OrderT = {
  id?: number;
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  city: string;
  state: string;
  zip: string;
  shipped: boolean;
};

@Injectable()
export class Order {
  private id?: number = undefined;
  private firstName = '';
  private lastName = '';
  private address = '';
  private country = '';
  private city = '';
  private state = '';
  private zip = '';
  private shipped = false;

  constructor(private cart: Cart) {}

  get Id(): number | undefined {
    return this.id;
  }

  set Id(id: number | undefined) {
    this.id = id;
  }

  get FirstName(): string {
    return this.firstName;
  }

  set FirstName(firstName: string) {
    this.firstName = firstName;
  }

  get LastName(): string {
    return this.lastName;
  }

  set LastName(lastName: string) {
    this.lastName = lastName;
  }

  get Address(): string {
    return this.address;
  }

  set Address(address: string) {
    this.address = address;
  }

  get Country(): string {
    return this.country;
  }

  set Country(country: string) {
    this.country = country;
  }

  get City(): string {
    return this.city;
  }

  set City(city: string) {
    this.city = city;
  }

  get State(): string {
    return this.state;
  }

  set State(state: string) {
    this.state = state;
  }

  get Zip(): string {
    return this.zip;
  }

  set Zip(zip: string) {
    this.zip = zip;
  }

  get Shipped(): boolean {
    return this.shipped;
  }

  set Shipped(shipped: boolean) {
    this.shipped = shipped;
  }

  clear(): void {
    this.id = undefined;
    this.firstName = this.lastName = this.address = this.country =
      this.city = this.state = this.zip = this.country = '';

    this.shipped = false;
    this.cart.clear();
  }

  /**
   * Override toJSON method so that Cart member is not sent
   * to the server.
   */
  toJSON(): OrderT {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      country: this.country,
      city: this.city,
      state: this.state,
      zip: this.zip,
      shipped: this.shipped
    };
  }
}
