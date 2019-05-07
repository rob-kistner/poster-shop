new Vue({
  el: '#app',
  data: {
    total: 0,
    products: [
      { id: 1, title: 'Product 1', price: 9.99 },
      { id: 2, title: 'Product 2', price: 9.99 },
      { id: 3, title: 'Product 3', price: 9.99 },
    ],
    cart: []
  },
  computed: {
    totalFormatted() {
      return `\$ ${this.total}`
    }
  },
  methods: {
    addToCart(product) {
      this.total += product.price
      var found = false;
      for(var i=0; i<this.cart.length; i++) {
        if(this.cart[i].id === product.id) {
          this.cart[i].qty++
          found = true;
        }
      }
      if(!found) {
        this.cart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          qty: 1
        })
      }
    }
  }
})