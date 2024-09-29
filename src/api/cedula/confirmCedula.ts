import axios from "axios";

export const confirmCedula = async (cedula: string): Promise<boolean> => {
  const API = `https://api.digital.gob.do/v3/cedulas/${cedula}/validate`;
  try {
    const response = await axios.get(API);
    // Extract the 'valid' field from the response data
    return response.data.valid;
  } catch (error) {
    console.error("Error validating cedula:", error);
    return false;
  }
};