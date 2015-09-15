describe('Movie', function(){
  it("lists titles and ratings of movies", function(){
    var testMovie = new Movie("ATOM", "R", 10, "6pm");
    expect(testMovie.movieTitle).to.equal("ATOM");
    expect(testMovie.movieRating).to.equal("R");
    expect(testMovie.moviePrice).to.equal(10);
    expect(testMovie.movieTime).to.equal("6pm");

  });

  it("creates matinee ticket prices", function() {
    var testMovie = new Movie("ATOM", "R", 10, "6pm");
    expect(testMovie.matinee()).to.equal(8);

  });

});

//
// describe('Ticket', function(){
//   it("lists the price for the movies", function(){
//    var testTicket = new Ticket({ticketChild: 5, ticketAdult: 10, ticketSenior: 8});
//       expect(ticketMatinee.ticketChild).to.eql(price - 2);
//       // expect(testTicket.ticketChild).to.equal(price - 2);
//   });
// });
