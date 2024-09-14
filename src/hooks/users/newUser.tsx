import { createUserWithEmailAndPassword } from "firebase/auth"
import { FIREBASE_AUTH } from "../../firebase"
import { User } from "../../types"
import { newUsuario } from "../../api/users/newUsuario"

export const newUser = async (user: User) => {
    try {
        const userCredential = 
        await createUserWithEmailAndPassword(FIREBASE_AUTH, user.correo, user.password);
        newUsuario(user);
        console.log("User created with ID: ", userCredential.user?.uid);
    } catch (e) {
        console.error("Error creating user: ", e);
    }
}