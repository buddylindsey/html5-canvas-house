(function() {

  $(document).ready(function() {
    var addImage, bringForward, layer, remove, rotate, stage, toDelete, toRotate;
    stage = new Kinetic.Stage("canvas", 800, 800);
    layer = new Kinetic.Layer();
    toRotate = false;
    toDelete = false;
    rotate = function(img) {
      if (toRotate) {
        img.rotate(Math.PI / 12);
        layer.draw();
      }
    };
    remove = function(img) {
      if (toDelete) {
        layer.remove(img);
        layer.draw();
      }
    };
    bringForward = function(img) {
      layer.getChild(img.name).moveToTop();
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
          draggable: true,
          name: Math.random().toString()
        });
        img.on("mousedown", function() {
          rotate(img);
          remove(img);
          bringForward(img);
        });
        layer.add(img);
        stage.add(layer);
      };
      image.src = src;
    };
    $(".baka").click(function() {
      addImage($(this).data("src"));
    });
    $("#rotate").click(function() {
      if (toRotate) {
        toRotate = false;
        $("#rotate").html("Rotate off");
      } else {
        toRotate = true;
        $("#rotate").html("Rotate on");
      }
    });
    $("#remove").click(function() {
      if (toDelete) {
        toDelete = false;
        $("#remove").html("Remove off");
      } else {
        toDelete = true;
        $("#remove").html("Remove on");
      }
    });
    $("#save").click(function() {
      stage.toDataURL(function(dataUrl) {
        window.open(dataUrl);
      }, false);
    });
    $("#toimage").click(function() {
      stage.toDataURL(function(dataUrl) {
        console.log(dataUrl);
        $('#image').html("<img src='" + dataUrl + "' />");
      }, false);
    });
  });

}).call(this);
