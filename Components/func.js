import { firebase } from '@react-native-firebase/auth'
const getUser =(()=>{
    const id = firebase.auth().currentUser.uid ;

        return id ;

})

export default getUser ;