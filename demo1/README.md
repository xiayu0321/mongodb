mongoDB demo1

===================

Operate mongodb with mongoose in Node.JS.

Install mongodb
---------------

Ubuntu 16.04:

-------------

```
mkdir /tmp/mongodb-demo-db
mongod --dbpath /tmp/mongodb-demo-db
```

Setup this project
------------------

```
npm install
```

Save data 

```
node ./src/save.js
```

Query data:

```
node ./src/query.js
```
