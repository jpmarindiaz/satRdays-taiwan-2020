HTMLWidgets.widget({

  name: 'mywidget',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        var str = x.message;
        var n = x.n;


        for (var i = 0; i < n; i++) {
          var strdiv = "<div class='group" + i%2  + "'>" + str + "</div>";
          console.log(strdiv);
          //el.innerHTML += str.repeat(n);
          el.insertAdjacentHTML( 'beforeend', strdiv );
        }

        TextPoster.render(el, str.repeat(n), { lineSpacing: 0});



        $(el).click(function(e){
         s = window.getSelection();
         var range = s.getRangeAt(0);
         var node = s.anchorNode;
         while(range.toString().indexOf(' ') != 0) {
            range.setStart(node,(range.startOffset -1));
         }
         range.setStart(node, range.startOffset +1);
         do{
           range.setEnd(node,range.endOffset + 1);

        }while(range.toString().indexOf(' ') == -1 && range.toString().trim() != '');
        var str = range.toString().trim();
        //alert(str);
        Shiny.setInputValue("mywidget_clicked", str);

       });


      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
