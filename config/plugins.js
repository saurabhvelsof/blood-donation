module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'saurabh.singh@velsof.com',
          defaultReplyTo: 'saurabh.singh@velsof.com'
        }
      }
    },
  });
  