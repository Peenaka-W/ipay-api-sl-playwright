import * as fs from 'fs';
import * as path from 'path';
import endpoints from '../testData/api-config.json';
import {APIRequestContext} from "@playwright/test";
import { generateRandomMobileNumber } from '../utils/utility';

export async function customerRegistrationInit(request: APIRequestContext, dataFile: string,mobileNumber:string, accessToken:string ) {
    const filePath = path.join(__dirname, '..', 'testData', dataFile);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.mobileNo = mobileNumber;

    const response = await request.post('./'+endpoints.createCustomer, {
        data,
        headers: {
            Authorization: `Bearer ${accessToken}` 
    }});

    console.log("Response:", JSON.stringify(response)); 
    return response;
}