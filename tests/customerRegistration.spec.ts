import { test, expect } from "@playwright/test";
import { generateRandomMobileNumber } from "../utils/utility";
import { acessTokenGen } from "../utils/accessTokenGenerator";
import { customerRegistrationInit } from "../requests/CustomerRegistration";


test.describe.parallel("API Testing - Customer Registration", () => {
    test("Verify response for customer registration - valid data.", async ({
        request,
    }) => {
        try {
            const mobileNumber = generateRandomMobileNumber();
            // const accessTokenGenerator = accTokenGen();
            // const accessToken = await accessTokenGenerator.getAccessTokenGeneral();
            const accessToken = await acessTokenGen(request);

            const response = await customerRegistrationInit(
                request,
                "registration-init.json",
                mobileNumber,
                accessToken
            );
            expect(response.status()).toBe(200);
        } catch (error) {
            console.error("Error in debit transaction test:", error);
            throw error; 
        }
    });
});

