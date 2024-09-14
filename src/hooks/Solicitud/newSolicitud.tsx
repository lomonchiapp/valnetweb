import {database} from '../../firebase';
import { addDoc, collection, setDoc } from 'firebase/firestore';
import { Solicitud } from '../../types';

export const newSolicitud = async (solicitud: Solicitud) => {
    try {
        const docRef = await addDoc(collection(database, "solicitudes"), solicitud);
        console.log("Document written with ID: ", docRef.id);

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}