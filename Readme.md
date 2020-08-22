# Amavm

## Goals for this projects


### Time frame is for two weeks upto 3rd september

- Build a fullstack e-cormerce application and host it somewhere on internet
- Intergate payment
- perform testing
- Create interactive and beatfull page
- User can create an account with username and password or auth0


User stories

- [ ] User can view categories of products
- [ ] User can user can view products depending on the category he/she choose
- [ ] Great search for products
- [ ] User can search for products in categories
- [ ] User can add items to card
- [ ] User can view see more details about the product
- [ ] User can check out items in cart
- [ ] User can login with either username and password
- [ ] For more details to page user can change the number of items
- [ ] In carts page user can change items
- [ ] Add a wish list option
- [ ] Sharing option products easly
- [ ] Shipping and delivery information
- [ ] Zoom Option for pictures
- [ ] Bestseller Products on Homepage
- [ ] Add Customer name on homepage
- [ ] Ability for customers to sort products according to prices
- [ ] Account for suppliers of the website
- [ ] Suppliers can mamage products adding them and updating the
- [ ] Auto complete for products searching


Technology Requirements

> Backend

  - Nodejs
  - Express
  - MongoDb

> Frontend

  - TypeScript
  - Reactjs
  - FramerMotion for animation
  - scss
  - Redux

> Payment Intergration

  - Stripe


> App testing

  - Jest
  - React_testing_libary


> Tasks Chuck Down

- [ ] Describe the database Design on a paper and anlyse the resources for database
- [ ] Design the routes endpoint on a paper
- [ ] Implement the design of the database
- [ ] Initialize the server




> Usefull links

- https://github.com/piotrwitek/react-redux-typescript-guide
- https://github.com/typescript-cheatsheets/react


## Models

1. customers model
    - names
    - username
    - email
    - Gender
    - Password
    - Time joined

2. Products categories model
    - category_name
    - created_at

Before deleting category we first have to delete products under that category

1. Products model
    - Product_name
    - slug
    - Priduct_desc
    - Product_img
    - Product_price
    - created_at
    - updated_at
    - Review

2. Wish list model

3. Orders
   - product: ref product
   - transaction_id
   - amount
   - adress
   - status:{ processed}
   - lasr_updated
   - user: ref user

4. CartItem
   - product: {ref:Product}
   - name
   - price
   - count
   - date_created
