import auth, { firebase } from '@react-native-firebase/auth';

const Logout = async ()=>{
     try{
       return await firebase.auth().signOut();  
     }catch(error){
        return error; 
     }
    }

export  default Logout


 