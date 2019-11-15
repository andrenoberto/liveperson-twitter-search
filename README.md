# LivePerson Twitter Search

LivePerson Twitter Search uses Twitter's API for finding out tweets with `#liveperson` and stores the result into a SQL Lite database. This solution is composed of two different applications:

 - A Node.js REST API
 - An Angular web application

# Environment Variables

Before running the back-end REST API, you need to set up you `.env` file. Use the available example, provided within this project, to create yours.

You can copy it by running the following command at the root directory of this project:

```sh
$ cp .env.example .env
```

Once you've got it completed, you'll need to set your Twitter's consumer keys in your `.env` file.

If you don't have the keys already, please refer to the [Developer portal] guide.

# Setup

Before running this project, you have to install all the required dependencies. Do it by executing the following command:

```sh
$ npm install
```

# Running Migrations

Once you've installed all the dependencies, before starting your server, you have to run some migrations to create the database's schemas.

You can do this by running:

```sh
$ npx sequelize db:migrate --env=database
```

If you need to revert the changes, execute the following command in your terminal:

```sh
$ npx sequelize db:migrate:undo:all --env=database
```

# Running the API

Once you've done all the previous steps, you're ready to start using the API. Start the back-end application by running the following command:

```sh
$ npm run start
```

The Node.js app uses port `3000` as default, feel free to change it.

The API base URL is:

```
http://localhost:3000/api/v1
```

# Running tests

You can run the unit tests by executing the following command:

```sh
$ npm run test
```

Be careful when running the tests in your development environment. There are pre and post operations executed when you run the tests. All the migrations are executed because we have to preserve a consistent environment between the tests.

It is recommended to use a separated database to run your tests. You can use the one provided within this project. Just change your database storage in your `.env` file.

```
DATABASE_STORAGE=db.test.sqlite3
```

# Routes

## Base URL:
```
address:port/api/v1
```

## Search for tweets

```
/tweets
```

### Parameters:
You can use all the available parameters as described in the [Standard search API] reference. If you want to find out want more about it, please, check this guide.

- **q**: A UTF-8, URL-encoded search query of 500 characters maximum, including operators.

# Technical Decisions
## dotenv
Setting environment variables every time before running the server can be hard to maintain and lead to typo mistakes, so, loading those variables from a `.env` files sound a lot better.

It's not a good practice to commit a `.env` file to your project's repository. A better approach is to provide a `.env.example` prefilled with the variables names. You can always the values of your variables if they don't contain any sensitive information, for example, we can set the value for a variable that holds that server's running port:

```
PORT=3000
```

Now, we are providing an environment file example with the expected variables without compromising any credentials. We need to copy the sample file, and, this way, we can keep all of our variables in a central place, making it easier to manage all values.

# Limitations

It's important to remember that this project uses Twitter's standard search API, which is limited, and not all Tweets will be indexed or made available via the search interface.

[Developer portal]: <https://developer.twitter.com/en/docs/basics/developer-portal/overview>
[Standard search API]: <https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets>