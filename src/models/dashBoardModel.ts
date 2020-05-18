import { BaseModel } from './baseModel';

export class DashBoardModel extends BaseModel {
  name: string;
  photo: string;
  email: string;
  password: string;
  confirmPassword: string;
  description: string;
  address: string;
  addressComplement: string;
  state: string;
  city: string;
  zipCode: string;
  citiesCare: string;
  categoriesCare: string;
  phone: string;
}