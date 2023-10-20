## Deliverables

- Basic login functionality utilizing Cognito
- API
- Authorization flow into MoneyHub
    - Connect account
    - Store the account for later use
    - Retrieve balances + transactions and show on screen
- Some form of database
    - Store a user
    - Store an account from moneyhub and associate it with our user?
    - Connections are associated with an account
- React/Next

**NOTE: make sure to checkout basic_arch.png, just a very rough sketch of how I imagined things**

## Approach

First thanks for the challenge. I decided I wanted to try and keep the stack as close to your existing one as possible.
So there were definitely some things I would have done differently if I was starting from scratch.

To start I decided to use Amplify to get me up and running. If I wasn't looking for a challenge and was to do it
differently I would have probably just booted up a node server and got some basic endpoints working. However, felt like
this was a
good opportunity to learn something new.

## Priorities

1. Understand end to end. I focused more on understanding all the different parts before I did code. So making sure I
   understood how to connect to moneyhub and what we needed from there.
   I wanted to collect all the pieces to pull off the moneyhub integration and have everything to get there.
3. Get a basic auth, before I made the UI look good.
4. Get lambdas outlined and connection functionality working.
5. Store logic into the DB
6. Deploy

## What would I have done different?

- Biggest slow down was definitely the lambdas. That was my technical decision though as I felt I wanted to try and keep
  in line with the Strabo stack. I should of focused more on just mocking out the moneyhub side of things and implementing
  my poc work after I had understood their integration and gathered all the pieces.

- Although I had my priority list I think I could have maybe just creating a skeleton UI. The auth was done and worked.
  However definitely could have been better and I could have shown off more of my skills in that area.

- I just left keys in the code, in reality this would be in a .env or a secure key store

- Lambdas I would generally write in typescript

## What did I feel I did well?

- Although I did not get out as much as I wanted and had a few hiccups (learning lambdas) I had a solid grasp on the end
  to end flow.
- I think I did a good job of outlining the lambdas and how I would have approached them.
- I think I did a good job of outlining the DB and how I was approaching it.

## DB Approach

Did some reading on single table design for the DB. I was going to split up my logic as follows:

- PK and SK keys
- u#{tenantID} for a PK for a user
    - a#{tenantID} for a SK for an account
- With attributes needed

The u# would allow me to query users information that I may want to store. Then based on the account
connection it would be u# a# to query the account information.

### Approach to API:

Note: The poc connection work for the redirect can be found in ./moneyhub_test

1. The user would signup and we create a db entry for them on post signup using a lambda. To understand how I was gonna
   do the DB checkout the DB section.
2. Split up the auth flow per integration type. So in theis case the lambdas are named after moneyHub incase we wanted
   to add other integrations.
    - So in this cause we would create a token, create a user (if needed), authorize with the connection url, and then
      complete the connection.
3. The accounts lambda would be a bit more dynamic to handle the different types of integrations it may have to deal
   with but once someone was connected we would have that information
4. Then finally the transactions lambda would be called to get the transactions for the account.

### Approach to UI:

I decided to use Amplify UI just to keep it in line. Reality is I am not fussy on UI library as long as there is
consistency
and well documented to make it easy for a team to create standards.

UI is split into 3 main parts:

- Routes (Routing logic)
- Components (UI components that we build on top of Amplify)
- Lib (Helpers functions, business logic, etc)

If I had to go and finish this I would of ensured that I had a provider for my UI
to share some state like userAccountID etc. I would of also ensured that any communication
using the amplify API would be done through the lib folder with an adapter specific to an integration type.
So for example moneyhub would maybe have a moneyhubAdapter.ts file that would handle all the calls to moneyhub.
One for account, transations etc. To more centralize this.

## Closing thoughts

Overall I really enjoyed the challenge. I streamed it as well to add some extra pressure. But I learnt a lot.
There are things I would do differently with my approach, but hopefully I outlined my thought process well enough.

Deployed URL can be found here. Due to my issues on time there is not much to see! But at least login was working!
u:testuser p:test1234
https://dev.d1q3bvo0twd4o.amplifyapp.com/
