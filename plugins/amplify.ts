import Auth from '@aws-amplify/auth';

export default () => {
  Auth.configure({
    Auth: {
      region: 'ap-northeast-1',
      userPoolId: 'ap-northeast-XXXXXXXXX',
      userPoolWebClientId: 'XXXXXXXXXXXXXXXXXXXXXXX',
    },
  })
}