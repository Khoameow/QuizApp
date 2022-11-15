//Orther variant :?.() , ?.[] check co ton tai function or array
let user={
    user(){
        console.log('iam ktran');
    }
};
let admin={};
console.log(admin?.user?.()??'Not found');//check ben tay trai? xem co khong neu k se k chay tiep
let user1={
    firstName: 'Khoa'
}
console.log(user1);
delete user1?.firstName;
console.log(user1);
/**
 * thao tac voi object obj?.a?.b?.c? //undefined
 * thao tac voi funcion 
 * obj.function?.()
 */

let obj={
    name: 'Khoa',
    address: {
        street: 'Ha nam',
        province: 'Ly Nhan'
    }
};
console.log(obj?.address?.x??'Not found');
let test=undefined;
console.log(test?.map?.(item=>item));