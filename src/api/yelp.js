import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer FnypsPGY5osnYRxk5O3LhpLrXwtop7xsTCKfwOrYiG95onyjO5jeqsCshYSJhPbRnD4Y-lyW1C9U7tq4Gxd3eJwgLgdd25GotyW4HdRZzc438n76ThzKz7s0mmhUXnYx'
  }
})