new Vue({
  el: '#app',
  data: {
    total: 0,
    products: [],
    cart: [],
    search: '',
    apiurl: '/search/?q='
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
      // vue.resource search
      this.$http.get(`${this.apiurl}${this.search.toLowerCase()}`)
        .then(res => {
          // .body or .data works (?)
          this.products = res.body
        }, res => {
          // error callback
          console.log('An error occured')
        })
    }

  },
  filters: {
    currency: price => {
      return `\$${price.toFixed(2)}`
    }
  },

})