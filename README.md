# yocal

This is a Yelp Clone built just to test out new concepts and paradigms on this continuous journey of software development.

## Most Recent Updates (January 25 2021)

- Refactored and changed up the backend API structure; added custom logging for routes and extracted the routes to separate controller page.
- Abstracted out the database calls so each route will now just call a function while passing in the parameters
- Added `supertest`and `jest` tests for the backend, while building out a test database since that simulates a proper integration run. Will probably also play with mocks and stubs soon

## Next steps

- More UI updates for front end
- More front end Jest tests, which I have been dreading, just for how fragile they are.
- Changing out the mapbox-gl to the open source alternative (This is mostly out of curiosity and to support the open source project).

