const dev = {
  STRIPE_KEY: "pk_test_UUsmaUJHKB08LzwWTzsmfTYZ00cmC4DaHz",
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1uxpqk27vlzdp"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://qzw1nyue75.execute-api.ap-southeast-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_07IogLfc0",
    APP_CLIENT_ID: "2nkrlhemq1fuvc788ne1uddn4f",
    IDENTITY_POOL_ID: "ap-southeast-1:de194000-7238-448b-902c-8147f3677bcb"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_UUsmaUJHKB08LzwWTzsmfTYZ00cmC4DaHz",
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-kc9jiqf2f2qn"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://emyg4wsuuk.execute-api.ap-southeast-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_L2liEKfRo",
    APP_CLIENT_ID: "4b469448jln2me2inadgq6qvmm",
    IDENTITY_POOL_ID: "ap-southeast-1:72c4bb56-3051-4986-ac38-f6f8a6b12012"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};