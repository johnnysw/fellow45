res = db.query("SELECT * from some_table");
res.output();


db.query('SELECT * from table1', function(res) {
    res.output();
});

db.query('SELECT * from table2', function(res) {
    res.output();
});

xxxxx