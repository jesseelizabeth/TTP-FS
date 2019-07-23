# TTP-FS
A web based stock trading app built for NYC Tech Talent Pipeline's coding challenge.

### Prerequisite
* Will need to sign up for your own API key with ```IEX Cloud```
* Create a file called ```secrets.js``` in the root of the project
```
const token = {token: API_KEY_HERE}
module.exports = token
```

## Installing
* Clone this repository
* ```npm install```
* Create a postgres database called ```TTP-FS```
* ```npm run seed```
* ```npm run start-dev```
* app will be running on ```http://localhost:8080```

## Built With

* ```Node.js```, ```Express```, ```PostgreSQL```, ```Sequelize```
* ```React``` and ```Redux```
* ```Materialize css```

