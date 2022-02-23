$(() => {
   $("button").on("click", (e) => {
       let clickedTile = $("#" + e.target.id)
       console.log(clickedTile.paused)
       clickedTile.next().trigger("pause");
       $("audio").each( (i, el) => {
           console.log(el)
           $(el).trigger("pause");
           $(el).prop("currentTime", 0);
       })

       clickedTile.next().trigger("play");
   })
});