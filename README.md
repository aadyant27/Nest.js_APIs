# API Definitions

## Entity Definitions

## Endpoint Definitions

### Authentication

--('/auth')

1. Signup
   [Route]: ('/signup')
   [Method]: POST
   [Body]: {email, password}
   [Returns]:
   [Description]: Create User in the DB.

2. Signin
   [Route]: ('/signin')
   [Method]: POST
   [Body]: {email, password}
   [Returns]:
   [Description]: Sign in an existing user.

### Reports

--('/reports')

1. Get Reports
   [Route]: ('/')
   [Method]: GET
   [Query String]: [make, model, year, mileage, lat, long, price]
   [Returns]:
   [Description]: Get an estimate value of the car
2. Post Reports
   [Route]: ('/')
   [Method]: POST
   [Body]: {make, model, year, mileage, lat, long, price}
   [Returns]:
   [Description]: Make a Data-Entry of how much the car was sold for.
3. Check Reports
   [Route]: ('/:id')
   [Method]: PATCH
   [Body]: {approve}
   [Returns]:
   [Description]: Approve/Reject the Data-entry made by the user regd. the car-sell value.
