import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((responses) => {
    const value = [];
    for (const response of responses) {
      if (response.status !== 'fulfilled') {
        value.push({ status: response.status, value: `${response.reason}` });
      } else {
        value.push({ status: response.status, value: response.value });
      }
    }
    return value;
  });
}
