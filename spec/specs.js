describe('Movie', function(){
  it("lists titles and ratings of movies", function(){
    var testMovie = new Movie("ATOM", "R", 10, "6pm", 20);
    expect(testMovie.movieTitle).to.equal("ATOM");
    expect(testMovie.movieRating).to.equal("R");
    expect(testMovie.moviePrice).to.equal(10);
    expect(testMovie.movieTime).to.equal("6pm");

  });

  it("creates matinee ticket prices", function() {
    var testMovie = new Movie("ATOM", "R", 10, "6pm", 20);
    expect(testMovie.matinee()).to.equal(8);

  });

  // it("creates senior discount", function() {
  //   var testMovie = new Movie("ATOM", "R", 10, "6pm", 20);
  //   expect(testMovie.seniorDiscount()).to.equal(false);
  //
  // });
});
