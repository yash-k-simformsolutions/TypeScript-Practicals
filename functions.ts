import { HasEmail, HasPhoneNumber } from "./basic";

function sendEmail(to: HasEmail): { recipient: string; body: string }{
    return{
        recipient: `${to.name} <${to.email}>`,
        body: "You have successfully registered in our Program!",
    };
}

//Using Arrow function
const sendMessage = (to: HasPhoneNumber): { recipient: string; body: string } => {
    return{
        recipient: `${to.name} <${to.phone}>`,
        body: "You have won Amazon voucher of worth 5K!",
    };
}

//Overload Signatures
function contactPeople( method: "email", ...people : HasEmail[]): void;
function contactPeople( method: "phone", ...people : HasPhoneNumber[]): void;

function contactPeople( method: "email" | "phone", ...people: (HasEmail | HasPhoneNumber)[]): void{
    if(method === "email"){
        (people as HasEmail[]).forEach(sendEmail);
    }
    else{
        (people as HasPhoneNumber[]).forEach(sendMessage);
    }
}


contactPeople("email", { name: "Yola", email: "" });
contactPeople("phone", { name: "Yola", phone: 1234657890 });
