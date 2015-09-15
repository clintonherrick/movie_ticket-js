function Movie(movieTitle, movieRating, moviePrice, movieTime, age) {
  this.movieTitle = movieTitle;
  this.movieRating = movieRating;
  this.moviePrice = moviePrice;
  this.movieTime = movieTime;
  this.age = age;

  var ticketChild = { name: "child", price: 5 };
  var ticketAdult = { name: "adult", price: 10 };
  var ticketSenior = { name: "senior", price: 8 };

  var moviePrice = { prices: [ticketChild, ticketAdult, ticketSenior] };

}

Movie.prototype.matinee = function() {
  if (this.movieTime >= 17){
    return this.moviePrice - 2;
  } else {
    return this.moviePrice;
  }
}

// Movie.prototype.seniorDiscount = function() {
//   return this.moviePrice - 2;
//     if (this.age >= 55){
//     } else {
//     return false
//     }
// }
