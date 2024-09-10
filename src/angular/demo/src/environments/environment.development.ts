export const environment = {
    production: false,
    msalConfig: {
      auth: {
        clientId: '99f718e7-0698-4265-a1bf-ad3a8cc604c2',
        authority: 'https://login.microsoftonline.com/16b3c013-d300-468d-ac64-7eda0820b6d3',
      },
    },
    apiConfig: {
      scopes: ['user.read'],
      uri: 'https://graph.microsoft.com/v1.0/me',
    },
  };