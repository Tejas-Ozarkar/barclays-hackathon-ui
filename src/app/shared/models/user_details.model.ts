import { Address } from './address.model';
export class UserDetails extends Address{
    username: string;
    password?: string;
    name: string;
    email: string;
    phone: string;
    constructor(){
        super();
        this.username = null;
        this.password = null;
        this.email = null;
        this.name = null;
        this.phone = null;
    }
}