# graphql-auth0

 Adding authentication to a GraphQL server with Auth0

## Getting Started

Clone the project repository by running the command below if you use SSH

```bash
git clone git@github.com:ammezie/graphql-auth0-server.git
```

If you use https, use this instead

```bash
git clone https://github.com/ammezie/graphql-auth0-server.git
```

After cloning, run:

```bash
npm install
```

Rename `.env.example` to `.env` then fill in your database detail and your JWT secret:

```txt
AUTH0_ISSUER=YOUR_API_ISSUER
AUTH0_AUDIENCE=YOUR_API_AUDIENCE
```

And finally, start the application:

```bash
npm start
```

The server will be running on [http://localhost:3000/api](http://localhost:3000/api).
