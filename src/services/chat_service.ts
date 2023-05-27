interface Chat {
    id: number;
    Name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
  
  interface User {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    chats: Chat[];
  }
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Accept', 'application/json');

export async function GetLoggedInUser(
    ): Promise<User[]> {
      try {
    
        const requestOptions: RequestInit = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow',
        };
        const response = await fetch(
          `${process.env.STRAPI_API_URL}/api/users/me?populate=*`,
          requestOptions
        );
    
        const data = response.json();
    
        return (await data).data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    }
  