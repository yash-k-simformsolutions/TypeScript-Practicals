import { HasPhoneNumber, HasEmail } from "./basic";

export class Contact implements HasEmail{
    email: string;
    name: string;
    constructor(name: string, email: string){
        this.email = email;
        this.name = name;
    }
}

//specifying access modifiers
class OtherContact implements HasPhoneNumber{
    constructor(
        public name: string,
        public phone: number = 1234567890
    ){
        //demo
    }
}

//initializers; lazy initialization
class OtherContact1 implements HasEmail, HasPhoneNumber{
    protected age = 0;
    private password: string | undefined;
    constructor(public name: string, public email: string, public phone: number){
        this.age = 21;
    }
    get passwordVal(): string{
        if(!this.password){
            this.password = "12345@&gh*-$";
        }
        return this.password;
    }
} 

//Abstract Class
abstract class AbstractContact implements HasPhoneNumber, HasEmail{
    public abstract phone: number;

    constructor(public name: string, public email: string){}
    abstract sendEmail(): void;
}

class InheritsAbstractclass extends AbstractContact{
    constructor(
        public phone: number,
        name: string,
        email: string
    ){
        super(name, email);
    }
    sendEmail(){
        console.log("Email sent!");
    }
}