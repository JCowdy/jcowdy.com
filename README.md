## About
The code behind https://jcowdy.com \
Isn't this kind of overkill? Absolutely, but it's as fun way to play with new shiny new tech and keep up to date!

## Development
### Prereqs
[NodeJS Version v22+](https://nodejs.org/en/download/current/)

### Install
```
npm install
```

### Development
Run the application locally using [webpack-dev-server](https://github.com/webpack/webpack-dev-server). This will build and serve the app locally at http://localhost:8080/.
```
npm run start
```

### Build
Runs a production build and outputs the results to the dist folder.
```
npm run build
```

### Test
Runs Jest/Enzyme tests and outputs coverage to the coverage directory in the root folder.

```
npm test
```

### Deploy
Deployment is done automatically using Github's actions in a [multi-step pipeline](.github/workflows/main.yml). Code is built, cached as a build artifact, and finally deployed via s3 sync. Only the master branch is configured to deploy automatically.

## Renovate / Updates
Renvoate keeps this repo up to date with the latest and greatest package versions automagically. The [renovate config](renovate.json) is set to auto-merge any minor or patch versions as long as building and tests pass. You can see the renovate bot's logs here: https://app.renovatebot.com/dashboard#github/JCowdy/jcowdy.com
