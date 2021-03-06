﻿window.addEventListener("load", function () {
    $(document).ready(function () {
        $('#fullpage').fullpage({
            anchors: ['mapa', 'queremosefazemos', 'apoie', 'parceiros', 'contato'],
            afterRender: function () {
                $('#map-container').height($(window).height());
                $('#map').height($(window).height());
                $('#over-map').fadeIn();
                $('.fa-play-circle-o').fadeIn();
                resizeGoogleMap();
            }
        });
    });

    // github
    var orgMembers = GhOrgMembers({
        container: "#org-members"
        , userTempl: "<div class='user'>"
        + "    <a href='{{html_url}}' target='blank'>"
        + "        <img src='{{avatar_url}}' class='avatar'>"
        + "        <span class='name'>{{login}}</span>"
        + "    </a>"
        + "</div>"
        , org: "ongbook"
    });

    orgMembers.done = function (err, data) {
        if (err) { return; }
        document.getElementById("count").innerHTML = data.length.toString();
        document.querySelector(".description").style.display = "block";
    };

});
