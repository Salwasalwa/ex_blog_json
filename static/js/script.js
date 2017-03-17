$(document).ready(function() {
    $.ajax({
        url: 'http://silently.github.io/fake-api/posts/list.json',
        type: 'GET',
        dataType: 'json',
        success: function(tabla) {
            for (var i = 0; i < tabla.length; i++) {
                if (tabla[i].published == true) {

                    var autor = tabla[i].authors.length;
                    var title = tabla[i].title;
                    var divArticles = $('<div></div>').attr({
                        id: 'heading' + i,
                        class: 'panel panel-default',
                        role: 'tab'
                    });

                    var titleH = $('<h2 class="panel-title">' + '<a role="button" data-toggle="collapse" data-parent="#accordionC1" href="#collapse' + i + '" aria-expanded="true" aria-controls="collapse' + i + '">' + '<i class="more-less glyphicon glyphicon-plus"></i>' + title +' ('+ autor + ' Auteurs'+')</a>' + '</h2>');

                    var picture = tabla[i].picture

                    var articles = $('<div id="collapse' + i + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' + i + '">')
                    var divMedia = $('<div class="media">')
                    var divMediaTop = $('<div class="media-left media-top">')
                    var imgt = $('<img class="media-object" src="' + picture + '">')

                    var mediaBody = $('<div class="media-body">');
                    var panelBody = $('<div class="panel-body media-heading">')
                    var parrafo = $('<p>' + tabla[i].abstract + '</p>')

                    var tags = tabla[i].tags

                    var otags = $('<p>Tags: '+tags+' </p>')





                    $(divArticles).appendTo('#accordionC1')
                    $(titleH).appendTo(divArticles)
                    $(articles).appendTo(divArticles)
                    $(divMedia).appendTo(articles);
                    $(divMediaTop).appendTo(divMedia);
                    $(imgt).appendTo(divMediaTop);
                    $(mediaBody).appendTo(divMedia);
                    $(panelBody).appendTo(mediaBody);
                    $(parrafo).appendTo(panelBody);
                    $(otags).appendTo(panelBody);

                    var chaqueAuteur = tabla[i].authors;
                    for (j=0; j< chaqueAuteur.length; j++){

                        var NamechaqueAuteur = $('<p>Auteur '+j+': '+(chaqueAuteur[j].name)+' ('+(chaqueAuteur[j].company)+')</p>');
                        $(NamechaqueAuteur).appendTo(panelBody);
                    }
                }

                else {


                    var title = tabla[i].title;
                    var divArticles = $('<div></div>').attr({
                        id: 'heading' + i,
                        class: 'panel panel-default',
                        role: 'tab'
                    });

                    var titleH = $('<h2 class="panel-title">' + '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + i + '" aria-expanded="true" aria-controls="collapse' + i + '">' + '<i class="more-less glyphicon glyphicon-plus"></i>' + title + ' ('+ autor + ' Auteurs'+')</a>' + '</a>' + '</h2>');

                    var picture = tabla[i].picture

                    var articles = $('<div id="collapse' + i + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' + i + '">')
                    var divMedia = $('<div class="media">')
                    var divMediaTop = $('<div class="media-left media-top">')
                    var imgt = $('<img class="media-object" src="' + picture + '">')

                    var mediaBody = $('<div class="media-body">');
                    var panelBody = $('<div class="panel-body media-heading">')
                    var parrafo = $('<p>' + tabla[i].abstract + '</p>')

                    var tags = tabla[i].tags

                    var otags = $('<p>Tags: '+tags+' </p>')

                    $(divArticles).appendTo('#accordion')
                    $(titleH).appendTo(divArticles)
                    $(articles).appendTo(divArticles)
                    $(divMedia).appendTo(articles);
                    $(divMediaTop).appendTo(divMedia);
                    $(imgt).appendTo(divMediaTop);
                    $(mediaBody).appendTo(divMedia);
                    $(panelBody).appendTo(mediaBody);
                    $(parrafo).appendTo(panelBody);
                    $(otags).appendTo(panelBody);

                    var chaqueAuteur = tabla[i].authors;
                    for (j=0; j< chaqueAuteur.length; j++){

                        var NamechaqueAuteur = $('<p>Auteur '+j+': '+(chaqueAuteur[j].name)+' ('+(chaqueAuteur[j].company)+')</p>');
                        $(NamechaqueAuteur).appendTo(panelBody);
                    }
                }


            }
        }
    })


});
