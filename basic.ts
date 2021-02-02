export interface HasPhoneNumber{
    name: string;
    phone: number;
}

export interface HasEmail{
    name: string;
    email: string;
}

let contactInfo: HasEmail | HasPhoneNumber = 
    Math.random() > 0.5
        ?{
            name: "Yola",
            phone: 1234567890,
        }
        :{
            name: "Yola",
            email: "demo@xyz.com"
        }

let othercontactInfo: HasEmail & HasPhoneNumber = 
    {
        name: "Yola",
        phone: 1234567890,
        email: "demo@xyx.com",    
    }