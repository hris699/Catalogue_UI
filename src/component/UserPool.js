import { CognitoUserPool } from "amazon-cognito-identity-js"

const poolData = {
    UserPoolId: "us-east-2_CVWQEDmhq",
    ClientId: "23l4rgtbnaj4m1krup2ob1u15r"
}

export default new CognitoUserPool(poolData);