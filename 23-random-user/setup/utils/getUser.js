const URL = 'https://randomuser.me/api/';

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  //destruction
  const person = data.results[0];
  const { phone, email } = person;
  const { first: firstName, last: lastName } = person.name;
  const { age } = person.dob;
  const { large: image } = person.picture;
  const { number, name } = person.location.street;
  const { password } = person.login;
  return {
    phone,
    email,
    name: `${firstName} ${lastName}`,
    age,
    image,
    password,
    street: `${name} ${number}`,
  };
};

export default getUser;
