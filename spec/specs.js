describe('Movie', function(){
  it("lists titles and ratings of movies", function(){
    var testMovie = new Movie("ATOM", "R");
    expect(testMovie.movieTitle).to.equal("ATOM");
    expect(testMovie.movieRating).to.equal("R");
    
  });
});
