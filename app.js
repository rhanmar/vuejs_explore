const app = Vue.createApp({
  data() {
    fullName = {
      firstName: 'Dima',
      lastName: '2xOv',
    }
    altName = 'Dima 2xOv'
    return {
      firstName: fullName.firstName,
      lastName: fullName.lastName,
      email: 'd@d.com',
      gender: 'male',
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
      country: 'Russia',
      city: 'Krasnoyarsk',
      altName: altName
    }
  },
  methods: {
    async getUser() {
      const response = await fetch('https://randomuser.me/api')
      const { results } = await response.json()

      this.firstName = results[0].name.first,
      this.lastName = results[0].name.last,
      this.email = results[0].email,
      this.gender = results[0].gender,
      this.picture = results[0].picture.large,
      this.country = results[0].location.country,
      this.city = results[0].location.city
    },
    showSomething(event) {
      alert('Hello')
      console.log(event)
    }
  }
})
app.mount('#app')