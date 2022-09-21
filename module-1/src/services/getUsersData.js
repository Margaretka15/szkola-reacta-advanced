const url = 'https://randomuser.me/api/?results=10';

const getUsersData = async () => {
  let resData = await fetch(url)
    .then(res => res.json())
    .then(async (result) => {
        return result
      },
      (error) => {
        return error
      });
  return resData.results;
}
export default getUsersData;