import { storage } from "../firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadImage = async (imageFile: File): Promise<string> => {
  const storageRef = ref(storage, `images/${imageFile.name}`);
  await uploadBytes(storageRef, imageFile);
  return getDownloadURL(storageRef);
};
