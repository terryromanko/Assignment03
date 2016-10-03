$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }


   
  /*  function HighLightPiece() {
        $(".cell").click(function () {
            if ($(this).attr("class") == "piece") {
                $(this).css("background-color", "lime");
            } else {
                $(this).css("background-color", "red");
            }

        });
    }
    HighLightPiece();*/
    var LastElement = {};
    var CurrentElement = {};

    function HighlightPiece() {
        $(".cell").click(function () {
            if ($(this).attr("class") == "cell piece red") {
                $(this).addClass("highlight-red");
                $(this).removeClass("cell piece red");
            } else if ($(this).attr("class") == "cell piece black") {
                $(this).addClass("highlight-black");
                $(this).removeClass("cell piece black");
            } else if ($(this).attr("class") == "highlight-red") {
                $(this).addClass("cell piece red");
                $(this).removeClass("highlight-red");
            } else if ($(this).attr("class") == "highlight-black") {
                $(this).addClass("cell piece black");
                $(this).removeClass("highlight-black");
            }
        });
    }

    function MovePieceBlack() {
        var current = $(CurrentElement);
        var last = $(LastElement);

        current.removeClass("cell piece black");
        current.addClass("cell");
        last.removeClass("cell");
        last.addClass("cell piece black");

    }
    function MovePieceRed() {
            var current = $(CurrentElement);
            var last = $(LastElement);

            current.removeClass("cell piece red");
            current.addClass("cell");
            last.removeClass("cell");
            last.addClass("cell piece red");
            
    }
    $(".cell").click(function () {
        HighlightPiece();
        LastElement = this;
        MovePieceRed();
       // MovePieceBlack();
        CurrentElement = this;
    });
});