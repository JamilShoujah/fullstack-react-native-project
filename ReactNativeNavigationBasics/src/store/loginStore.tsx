import { observable, runInAction } from "mobx";
import { memoize } from 'lodash';

class loginModel{
    emailValue = observable.box("");
    passwordValue= observable.box("");

    setEmailValue(emailInputValue: string){
        runInAction(()=>{
          this.emailValue.set(emailInputValue);
        });
      }
    
      setPasswordValue(passwordInputValue: string){
        runInAction(()=>{
          this.passwordValue.set(passwordInputValue);
        });
      }
}

export const getLogInStore = memoize(
    () => {
      const logInStore = new loginModel();
      return logInStore;
    },
    () => 1
  );
  
  export default { getLogInStore };
  