export const checkValidData = (email,password)=>{
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    if(!isEmailValid)return "Email is not valid";
    if(!isPasswordValid)return "Password is not valid";
    return null;   
}

export const checkValidSignUpData = (name,email,password)=>{
    const isNameValid = name
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    if(!isNameValid)return "Name is not Valid";
    if(!isEmailValid)return "Email is not valid";
    if(!isPasswordValid)return "Password is not valid";
    return null;   
}