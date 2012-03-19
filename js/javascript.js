(function() {

  $(document).ready(function() {
    var addImage, layer, rotate, stage;
    stage = new Kinetic.Stage("canvas", 800, 800);
    layer = new Kinetic.Layer();
    rotate = function(img) {
      img.rotate(Math.PI / 4);
      layer.draw();
    };
    addImage = function(src) {
      var image;
      image = new Image();
      image.onload = function() {
        var img;
        img = new Kinetic.Image({
          x: 10,
          y: 10,
          centerOffset: {
            x: this.width / 2,
            y: this.height / 2
          },
          image: image,
          draggable: true
        });
        img.on("mousedown", function() {
          rotate(img);
        });
        layer.add(img);
        stage.add(layer);
      };
      image.src = src;
    };
    $("#wall").click(function() {
      addImage($("#wall").data("src"));
    });
    $("#tv").click(function() {
      addImage($("#tv").data("src"));
    });
    $("#bed").click(function() {
      addImage($("#bed").data("src"));
    });
    $("#dresser").click(function() {
      addImage($("#dresser").data("src"));
    });
    $("#save").click(function() {
      stage.toDataURL(function(dataUrl) {
        window.open(dataUrl);
      }, false);
    });
  });

}).call(this);
