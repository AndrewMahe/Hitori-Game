$('#win').hide();
var game = {};
game.x1 = [
    [5, 4, 4, 3, 4],
    [3, 4, 2, 5, 4],
    [2, 5, 5, 1, 2],
    [2, 2, 1, 4, 5],
    [4, 1, 5, 3, 2]
];
game.x2 = [
    [4, 4, 4, 2, 2],
    [4, 2, 3, 5, 1],
    [1, 1, 2, 5, 4],
    [1, 3, 4, 1, 5],
    [3, 5, 4, 4, 1]
];
game.x3 = [
    [2, 2, 2, 5, 1],
    [5, 4, 2, 3, 4],
    [5, 1, 4, 5, 2],
    [2, 4, 5, 1, 3],
    [3, 5, 1, 1, 4],
];

var win = {};
win.x1 = [
    [0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0]
];
win.x2 = [
    [1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 1]
];
win.x3 = [
    [1, 0, 1, 0, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0]
];
var choseGame = 1;

/* Variables servant au fonctionnement des fonctions */

$('#newgame').click(function () {
    var board = document.getElementById('gametable');
    $('#win').hide();
    $('#ruleboard').hide();
    for (var i = 0; i < board.rows.length; i++) {
        for (var j = 0; j < board.rows[i].cells.length; j++) {

            board.rows[i].cells[j].innerHTML = game["x"+choseGame][i][j];
        }
    }if (choseGame === 3){
        choseGame = 1;
    } else
    choseGame++;
    $('#gametable tr').each(function () {
        $(this).find('td').each(function () {
            var verifCase = $(this).attr('id');
            document.getElementById(verifCase).style.backgroundImage = '';
        })
    })
});

/* Bouton newgame qui permet de créer/recréer une partie en changeant le plateau */

$('#rules').hover(function () {
    $('#ruleboard').fadeIn('slow');
}, function () {
    $('#ruleboard').fadeOut('slow');
});

/* Structure rules qui affiche les règles du jeu quand on passe la sourie dessus */

$('td').click(function () {
    var maCase = $(this).attr('id');
    var backColor = document.getElementById(maCase).className;
    if (backColor === "0") {
        document.getElementById(maCase).style.backgroundImage = 'url("http://www.photos-public-domain.com/wp-content/uploads/2011/03/charcoal-gray-parchment-paper-texture.jpg")';
        document.getElementById(maCase).className = '1';
    } else if (backColor === "1") {
        document.getElementById(maCase).style.backgroundImage = '';
        document.getElementById(maCase).className = '0';
    }
});

/* Bouton permettant de griser la case sur laquelle on click ou de la remettre normale si celle-ci était grisé */

$('#resetgame').click(function () {
    $('#gametable tr').each(function () {
        $(this).find('td').each(function () {
            var verifCase = $(this).attr('id');
            document.getElementById(verifCase).style.backgroundImage = '';
        })
    })
});

/*  Bouton reset qui enlève toutes les cases grisés */

/* Bouton check qui permet de vérifier si la configuration que nous avons fait est la bonne, si c'est le cas un méssage victoire apparaît. */

