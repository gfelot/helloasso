import { baseURL, credential } from '../Utils/';

export const getOrganizations = async () => {
  try {
    const response = await fetch(
      // `https://api-helloasso-test.azurewebsites.net/v3/organizations.json`,
      `${baseURL}/organizations.json?`,
      {
        headers: {
          Authorization:
            'Basic ' + btoa(`${credential.login}:${credential.password}`),
          'Content-Type': 'application/json'
        }
      }
    );
    const json = await response.json();

    return json
  } catch (error) {
    console.log(error);
  }
};

export const getActions = async (id) => {
  try {
    const response = await fetch(
      `${baseURL}/organizations/${id}/actions.json`,
      {
        headers: {
          Authorization:
            'Basic ' + btoa(`${credential.login}:${credential.password}`),
          'Content-Type': 'application/json'
        }
      }
    );
    const json = await response.json();

    return json
  } catch (error) {
    console.log(error);
  }
};
