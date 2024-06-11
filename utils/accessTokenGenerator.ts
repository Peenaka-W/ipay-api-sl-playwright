import { APIRequestContext } from '@playwright/test';
import endpoints from '../testData/api-config.json';
import accessToken from '../testData/accessToken/accessToken.json';


// export default class AccessTokenGenerator {
//   private apiContext: APIRequestContext; 

//   constructor(apiContext: APIRequestContext) {
//     this.apiContext = apiContext;
//   }

//   async getAccessTokenGeneral() {

//     const response = await this.apiContext.post('./' + endpoints.tokenUrl, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       data: {
//         grant_type: accessToken.grant_type, 
//         client_id: accessToken.client_id,
//         client_secret: accessToken.client_secret,
//       },
//     });

//     if (response.ok()) {
//       const json = await response.json();
      
//       return json.access_token;
//     } else {
//       throw new Error(`Failed to get access token: ${response.status()} ${response.statusText()}`);
//     }
//   }
// }

export async function acessTokenGen(request: APIRequestContext){
  const response = await request.post(endpoints.tokenUrl, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        "grant_type": "client_credentials", 
        "client_id": "mZDItwX1896lxAlvqIPLyZFKQvUa",
        "client_secret": "Meq_qTUrqSVHvXetqIXX8R8rNfoa",
      },
    });
    console.log("RESPONSE -------------------------------------------------------> ",JSON.stringify(response));

    if (response.ok()) {
      const json = await response.json();
      
      return json.access_token;
    } else {
      throw new Error(`Failed to get access token: ${response.status()} ${response.statusText()}`);
    }
}
