jQuery(function ($) {
    var testModal = new tingle.modal({
        cssClass: ['smooth-transition']
    });

    testModal.setContent('<p>this is a test!</p>');

    $('#caseaide-details-button, #tumee-details-button, #csusbmad-details-button').on('click', function () {
        testModal.open();
    });
});