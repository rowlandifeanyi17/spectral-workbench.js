describe("Image", function() {

  var image;

  beforeEach(function() {

    loadFixtures('graph.html');

  });

  it("should not be undefined even if it has no graph or DOM element", function(done) {

    image = new SpectralWorkbench.Image(
      {
        args: {}  // fake graph with empty object
      },
      {
        callback: done // options
      }
    );

    expect(image).toBeDefined();

  });

  it("has defined width and height", function() {

    expect(image.width).toBeDefined();
    expect(image.height).toBeDefined();

  });

  it("has a canvas element and context", function() {

    expect(image.canvasEl).toBeDefined();
    expect(image.canvasEl.length).toBeGreaterThan(1);
    expect(image.canvasEl.width()).toEqual(image.width);
    expect(image.canvasEl.height()).toEqual(image.height);
    expect(image.ctx.canvas.width).toEqual(image.width);
    expect(image.ctx.canvas.height).toEqual(image.height);

  });

});
