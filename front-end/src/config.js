const config = {
    s3: {
        REGION: "sa-east-1",
        BUCKET: "minions-bgc-dev-serverlessdeploymentbucket-16dksowmcy621",
    },
    apiGateway: {
        REGION: "sa-east-1",
        URL: "https://a4vv60e5ig.execute-api.sa-east-1.amazonaws.com/dev",
    },
    cognito: {
        REGION: "sa-east-1",
        USER_POOL_ID: "sa-east-1_G4ostoOod",
        APP_CLIENT_ID: "5a0ss2c70atulcv9hp7uth6bmm",
        IDENTITY_POOL_ID: "sa-east-1:fce6c206-6991-4b6b-83c9-e260b6a4de4d",
    },
};
export default config;