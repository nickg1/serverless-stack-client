export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HZKA1FWU8ZxLkhjqB4U1CClyn5rw6nYFF3TtqnGciviSo0YkkTlnmaAiP4t4YJyL9va9hRCRvyKiy8SZ1XeYrQc000uTv9BXd",
    s3: {
      REGION: "us-east-1",
      BUCKET: "nick-gibson-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://vszjvh1vvk.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_ZDNcw0NYy",
      APP_CLIENT_ID: "6hn50fckj7agcbktmkt27e9o6k",
      IDENTITY_POOL_ID: "us-east-1:4f4e07a0-3ff6-4164-b281-f34848bfbb3f"
    }
  };