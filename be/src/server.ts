import express from 'express';

const app = express();
const port = 5000;

app.set('json spaces', 2);

app.get('/test', (res, req) => {
  req.send(
    {
      status: 'success'
    }
  );
});

app.listen(port, () => {
  console.log(`Back-end started on localhost:${port}`);
});