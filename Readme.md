# Welcome To Flight And Search Service

## Setup The Project

- Clone the repository on your local
- Execute `npm install` on the same path as root directory of your project
- Create a `.env` file in the root directory of your project and add the following environment variables
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_LOGIN_PASS>,
    "database": "Flight_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
    