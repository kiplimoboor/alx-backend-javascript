import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((responses) => {
    const values = [];
    for (const response of responses) {
      values.push({
        response: response.status,
        value: response.value,
      });
    }
    return values;
  });
}
