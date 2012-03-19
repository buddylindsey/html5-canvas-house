$(document).ready () ->
  stage = new Kinetic.Stage("canvas", 800, 800)
  layer = new Kinetic.Layer()

  addImage = (src) ->
    image = new Image()
    image.onload = () ->
      img = new Kinetic.Image(x: 10,
      y: 10,
      image: image,
      draggable: true
      )

      layer.add(img)
      stage.add(layer)
      return
    image.src = src
    return

  $("#wall").click () ->
    addImage($("#wall").data("src")) 
    return

  $("#tv").click () ->
    addImage($("#tv").data("src")) 
    return

  $("#bed").click () ->
    addImage($("#bed").data("src")) 
    return

  $("#dresser").click () ->
    addImage($("#dresser").data("src")) 
    return
  
  $("#save").click () ->
    stage.toDataURL (dataUrl) ->
      window.open(dataUrl)
      return
    , false
    return

  return

