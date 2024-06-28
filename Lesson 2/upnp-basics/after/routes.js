const { namespaceWrapper } = require('./_koiiNode/koiiNode');

function setupRoutes(app) {
  //  Write your Express Endpoints here.
  //  Ex. app.get('/value', async (req, res) => {})

  // Sample API that return your task state
  app.get('/taskState', async (req, res) => {
    const state = await namespaceWrapper.getTaskState();
    console.log('TASK STATE', state);
    res.status(200).json({ taskState: state });
  });

  app.get('/value', async (req, res) => {
    const value = process.env.VALUE;
    console.log('value', value);
    res.status(200).json({ value: value });
  });
}

module.exports = setupRoutes;
