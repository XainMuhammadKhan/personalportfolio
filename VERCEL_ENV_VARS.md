Add these Environment Variables in your Vercel project settings (Project → Settings → Environment Variables):

- `SENDGRID_API_KEY` : (required) your SendGrid API key
- `TO_EMAIL`         : (required) recipient email address where form messages should arrive
- `FROM_EMAIL`       : (optional) email address used in the `from` field (default: no-reply@yourdomain.com)

Notes:
- After adding env vars, redeploy your Vercel project so the function sees the variables.
- Using SendGrid's HTTP API avoids SMTP issues in serverless environments.
