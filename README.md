# GraphQLwithJWT
example of graphql with jwt and mysql


**Try to Signup an user**
```graphql
    mutation {
      signup (username: "johndoe", email: "johndoe@example.com", password: "password")
    }
```

**Then try logging in**
```graphql
   mutation {
      login(email: "johndoe@example.com", password: "password")
    }
```

**A JWT is returned on successful login.**
**select Bearer Token and paste the token (JWT) above in the field provided.**

**Now we can fetch the profile of the currently authenticated user:**
```graphql
    {
      me {
        id
        username
        email
      }
    }
```
