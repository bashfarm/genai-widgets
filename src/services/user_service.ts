



import { Character } from '@/components/character-list/character-list';
import User from '@/models/User';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Accept', 'application/json');
// add additional headers here to disable CORS
// myHeaders.append('Access-Control-Allow-Origin', '*');

const STRAPI_API_URL="http://localhost:1337"

const calling_application = 'Story Builder';

export async function GetUser(
  userID: number,
): Promise<User> {
  try {

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
    const response = await fetch(
      `${STRAPI_API_URL}/api/users/${userID}?populate=*`,
      requestOptions
    );

    const data = response.json();

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}


export async function GetUsers(
): Promise<User> {
  try {

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
    const response = await fetch(
      `${STRAPI_API_URL}/api/users?populate=*`,
      requestOptions
    );

    const data = response.json();

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}


export async function GetCharacters(
  ): Promise<Character[]> {
    try {
  
      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };
      const response = await fetch(
        `${STRAPI_API_URL}/api/characters?populate=*`,
        requestOptions
      );
  
      const data = response.json();
  
      return (await data).data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }


export async function getCharacterByID(
  userID: number,
  ): Promise<Character> {
    try {
  
      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };
      const response = await fetch(
        `${STRAPI_API_URL}/api/characters/${userID}?populate=*`,
        requestOptions
      );
  
      const data = response.json();
  
      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  export async function updateCharacterByID(
    userID: number,
    ): Promise<Character> {
      try {
    
        const requestOptions: RequestInit = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow',
        };
        const response = await fetch(
          `${STRAPI_API_URL}/api/characters/${userID}?populate=*`,
          requestOptions
        );
    
        const data = response.json();
    
        return data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    }