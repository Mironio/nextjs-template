# NextJS template



### Developer Experience & Local Setup
- ⚠️ Use, macOS, npm 9.7.2 and node 20.3.1. [How to install nodeJS](https://nodejs.dev/en/learn/how-to-install-nodejs/)
- [NextJS Env Variables](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#test-environment-variables). The app can use .env.production for prod or .env.local for local build. The .env.development will be added later.
- You can create `.env.local` file with environment variables. The app will use it after _npm run dev_. Don't push that file.
- Please add jira tickets to the 'todos' in the code.

```bash
npm install && npm run dev # dev version. Uses .env.local
npm ci && npm run build && npm start # prod version. Uses .env.production variables
```

### Unit Tests

- See [Vitest](https://vitest.dev/) for more details
- All pure functions should be properly tested
- Use shallow snapshot testing for the UI components

### Package.json Scripts

```bash
npm run dev       # run dev build of the app. Uses .env.local
npm run build     # create prod build. Uses .env.production
npm run start     # run created build on the port 3000
npm run test      # run unit tests + coverage
npm run test-update-snapshots # run unit tests and update snasphots
npm run lint      # run linting
```
