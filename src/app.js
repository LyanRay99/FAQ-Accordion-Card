//TODO: Display các Details khi click vào các li
var currentDetails;
var check = true;
$('.section__info__content__lists li').on('click', function () {
    if (currentLi != this) {
        let checkCSS = $(currentDetails).css('display');

        if (checkCSS != undefined) {
            $(currentDetails).css('display', 'none');
        }

        if (currentLi != undefined) {
            resetCSS(currentLi, currentIcon);
        }

        setCss(this);

        let infoDetail = $(this).next();
        $(infoDetail).css('display', 'block');
        currentDetails = infoDetail;
    }
    else {
        if (check == true) {
            resetCSS(currentLi, currentIcon);
            $(currentDetails).css('display', 'none');
            check = false;
        }
        else {
            setCss(this);
            $(currentDetails).css('display', 'block');
            check = true;
        }
    }

});


//TODO: Set và Reset CSS khi click vào các li
var currentLi;
var currentIcon;

function setCss(element_Children) {
    $(element_Children).css('fontWeight', 'bold');
    $(element_Children).css('color', '#b760d9');
    let thisChildren = $(element_Children).children();
    $(thisChildren).css('rotate', '180deg');
    currentLi = element_Children;
    currentIcon = thisChildren;
};

function resetCSS(currentLi_f, currentIcon_f) {
    $(currentLi_f).css('fontWeight', '100');
    $(currentLi_f).css('color', 'rgb(94, 92, 92)');
    $(currentIcon_f).css('rotate', '0deg');
};