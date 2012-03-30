$(document).ready () ->
  stage = new Kinetic.Stage("canvas", 800, 800)
  layer = new Kinetic.Layer()

  toRotate = false
  toDelete = false

  rotate = (img) ->
    if toRotate
      img.rotate Math.PI / 12 
      layer.draw()
    return

  remove = (img) ->
    if toDelete
      layer.remove(img)
      layer.draw()
    return

  bringForward = (img) ->
    layer.getChild(img.name).moveToTop()
    layer.draw()
    return

  addImage = (src) ->
    image = new Image()
    image.onload = () ->
      img = new Kinetic.Image(x: 10,
      y: 10,
      centerOffset: { x: this.width / 2, y: this.height / 2 },
      image: image,
      draggable: true,
      name: Math.random().toString()
      )

      img.on "mousedown", () ->
        rotate img
        remove img
        bringForward img
        return

      layer.add(img)
      stage.add(layer)
      return
    image.src = src
    return

  $(".baka").click () ->
    addImage($(this).data("src"))
    return

  $("#rotate").click () ->
    if toRotate
      toRotate = false
      $("#rotate").html("Rotate off")
      return
    else
      toRotate = true
      $("#rotate").html("Rotate on")
      return

  $("#remove").click () ->
    if toDelete
      toDelete = false
      $("#remove").html("Remove off")
      return
    else
      toDelete = true
      $("#remove").html("Remove on")
      return
   
  $("#save").click () ->
    stage.toDataURL (dataUrl) ->
      window.open(dataUrl)
      return
    , false
    return

  $("#toimage").click () ->
    stage.toDataURL (dataUrl) ->
        console.log(dataUrl)
        $('#image').html("<img src='#{dataUrl}' />")
        return
      , false
    return

  return

