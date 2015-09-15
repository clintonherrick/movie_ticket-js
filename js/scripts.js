function Movie(movieTitle, movieRating, moviePrice, movieTime) {
  this.movieTitle = movieTitle;
  this.movieRating = movieRating;
  this.moviePrice = moviePrice;
  this.movieTime = movieTime;

  var ticketChild = { name: "child", price: 5 };
  var ticketAdult = { name: "adult", price: 10 };
  var ticketSenior = { name: "senior", price: 8 };

  var moviePrice = { prices: [ticketChild, ticketAdult, ticketSenior] };
  

}


Movie.prototype.matinee = function() {
  return this.moviePrice - 2;
}



// function Ticket(ticketChild, ticketAdult, ticketSenior) {
//   var ticketChild = { name: "child", price: 5 };
//   var ticketAdult = { name: "adult", price: 10 };
//   var ticketSenior = { name: "senior", price: 8 };
// }
