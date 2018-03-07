const Restocat = require('restocat');
const rest = new Restocat({
  collectionsGlob: [
    'servers/restocat/collections/**/collection.json'
  ]
});

rest.locator.registerInstance('definedRoutes', {index: '/'});

rest.createServer().listen(8000)
  .then(() => console.log('Restocat listen on 8000'))
  .catch(reason => console.error(reason));

