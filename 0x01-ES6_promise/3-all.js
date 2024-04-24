import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((values) => {
    const [{ body }, { firstName, lastName }] = [values[0], values[1]];
    console.log(`${body} ${firstName} ${lastName}`);
  });
}
