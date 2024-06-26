import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const response = {};
  try {
    response.photo = await uploadPhoto();
    response.user = await createUser();
  } catch (e) {
    response.photo = null;
    response.user = null;
  }

  return response;
}
