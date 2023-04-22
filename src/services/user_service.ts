



import User from '@/models/User';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Accept', 'application/json');
// add additional headers here to disable CORS
// myHeaders.append('Access-Control-Allow-Origin', '*');

const AUTO1111_API_URL = 'http://127.0.0.1:7860';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const calling_application = 'Bashful: The AI Powered Photoshop Plugin';



/**
 * This function is used to generate image using the bashful image api
 *
 * @returns {Object}
 */
export async function GetUser(
  userID: number,
): Promise<User> {
  try {

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    };
    const response = await fetch(
      `${API_URL}/get_user?id=${userID}`,
      requestOptions
    );

    const data = response.json();

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}