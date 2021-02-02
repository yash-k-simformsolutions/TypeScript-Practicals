import { HasEmail , HasPhoneNumber } from "./basic";

//extend
export interface HasInternationalPhoneNumber extends HasPhoneNumber{
    countryCode: string;
}

//Dictionary objects
interface PhoneNumberDist {
    [numberName: string]: 
    undefined | {
        areaCode: number;
        num: number;
    };
}

// const a: PhoneNumberDist = {};
// if(a.abc){
//     a.abc
// }

//Combining interfaces
interface PhoneNumberDist {
    home: {
        areaCode: number;
        num: number;
    };
    office: {
        areaCode: number;
        num: number;
    };
}

const phoneDist: PhoneNumberDist = {
    home: { areaCode: 123, num: 123456 },
    office: { areaCode: 456, num: 45678900 },
}

phoneDist.home;
phoneDist.office;
phoneDist.office1;

export default {};