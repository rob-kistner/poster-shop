new Vue({
  el: '#app',
  data: {
    total: 0,
    products: [
      { id: 1, title: 'Product 1', price: 9.99 },
      { id: 2, title: 'Product 2', price: 9.99 },
      { id: 3, title: 'Product 3', price: 9.99 },
    ],
    cart: [],
    search: '',
  },
  methods: {

    addToCart(product) {
      let found = false;
      this.cart.map(cartitem => {
        if(cartitem.id === product.id) {
          found = true
          return cartitem.qty++
        }
      })
      if(!found) {
        this.cart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          qty: 1
        })
      }
      this.total += product.price
    },

    inc(item) {
      item.qty++
      this.total += item.price
    },

    dec(item) {
      item.qty--
      this.total -= item.price
      if (item.qty <= 0) {
        this.cart = this.cart.filter(cartitem => cartitem.id !== item.id)
      }
    },

    onSubmit(e) {
      console.log(e)
    }

  },
  filters: {
    currency: price => {
      return `\$${price.toFixed(2)}`
    }
  },

})