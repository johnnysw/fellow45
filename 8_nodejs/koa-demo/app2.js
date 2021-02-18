const MyKoa = require('./MyKoa');
const app = new MyKoa();

app.use((myCtx) => {
    myCtx.body = '<h1> hello mykoa hehe </h1>'
});


app.listen(5000);


