# shop-shop

## Table of Contents 

Please use the table of contents to help naviate the README.

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description

- What was your motivation?
My motivation was to create ecommerce website where customers can buy various products and pay for those products.

- What problem does it solve?
The app allows customers to view and buy goods by utlizing a database in a React frontend framework.

- What did you learn?
I learned that if I specify a certain port and if my database is not seeded my app will not function and will not connect to the database, which I discovered after running `heroku logs --tail` and researching the H10 error. I learned that troubleshooting must be done one step at a time.

## Installation

Please utilize the following steps to install the app on your local computer and to create your own deployment:

Step 1: Create a repository on GitHub.

Step 2: In GitBash cd to the folder where you wish to store your app and run `git clone` and URL for your repository.

Step 3: Access the [Public Repository](https://github.com/AlexandertheGreat491/shop-shop.git) and copy the URL.

Step 4: Ensure that you cd into the root directory that you should have created in Step 2.

Step 5: Run the `git clone` command + (https://github.com/AlexandertheGreat491/shop-shop.git).

Step 6: Now you can check to see if the app runs locally. In the root directory run the command `npm i` then run `npm run seed` and then assuming that seeding is successful run `npm run develop`. Now the app should be running locally.

Step 7: Use the next several steps to execute your own deployment of the app. Access your MongoDB Atlas account and create a database called `mernshopping` in a cluster. If you do not have a cluster created, make sure to do that now.

Step 8: Run the `heroku login` command, then once you are logged in run the `heroku create` command.

Step 9: Run the `git push heroku main` command, then from the app dashboard on Heroku click on the deploy tab. Ensure that your Heroku and GitHub accounts are connected. Scroll down and search the name of your repository and click connect and click `Enable Automatic Deployment`.

Step 10: Run the command `heroku run npm run seed` and then access your database on MongoDB Atlas and you should see that the data is now present in the database. At this point the app should be fully deployed.

## Usage

Please view the screenshot to get an idea of how the app can be used.

## Credits

Collaborators:

[Alex Van Dyke](https://github.com/AlexandertheGreat491)

Sources:

[bootstrap](https://www.npmjs.com/package/bootstrap)

[Create React App](https://github.com/facebook/create-react-app)

[Connect to Your Cluster](https://www.mongodb.com/docs/atlas/tutorial/connect-to-your-cluster/)

[Deploy with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas)

[Causes of Heroku H10-App Crashed Error And How To Solve Them](https://dev.to/lawrence_eagles/causes-of-heroku-h10-app-crashed-error-and-how-to-solve-them-3jnl)

[Heroku CLI Commands](https://devcenter.heroku.com/articles/heroku-cli-commands)

[Introduction to GraphQL](https://graphql.org/learn/)

[Introduction to ApolloServer](https://www.apollographql.com/docs/apollo-server/v2/)

[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

[jwt-decode](https://www.npmjs.com/package/jwt-decode)

[Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

[React Docs](https://reactjs.org/docs/getting-started.html)

[react-router-dom](https://www.npmjs.com/package/react-router-dom)

[react-dom](https://www.npmjs.com/package/react-dom)

[react-scripts](https://www.npmjs.com/package/react-scripts)

[react-icons](https://react-icons.github.io/react-icons/)

[React Bootstrap](https://react-bootstrap.netlify.app/getting-started/introduction/)

## License

[Link to license](./LICENSE)