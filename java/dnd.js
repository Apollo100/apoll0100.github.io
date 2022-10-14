// jQuery formatted selector to search for focusable items
var focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";

// store the item that has focus before opening the modal window
var focusedElementBeforeModal;

$(document).ready(function() {
    jQuery('#startModal').click(function(e) {
        showModal($('#modal'));
    });
    jQuery('#cancel').click(function(e) {
        hideModal();
    });
    jQuery('#cancelButton').click(function(e) {
        hideModal();
    });
    jQuery('#enter').click(function(e) {
        enterButtonModal();
    });
    jQuery('#modalCloseButton').click(function(e) {
        hideModal();
    });
    jQuery('#modal').keydown(function(event) {
        trapTabKey($(this), event);
    })
    jQuery('#modal').keydown(function(event) {
        trapEscapeKey($(this), event);
    })

});

function trapEscapeKey(obj, evt) {

    // if escape pressed
    if (evt.which == 27) {

        // get list of all children elements in given object
        var o = obj.find('*');

        // get list of focusable items
        var cancelElement;
        cancelElement = o.filter("#cancel")

        // close the modal window
        cancelElement.click();
        evt.preventDefault();
    }

}

function trapTabKey(obj, evt) {

    // if tab or shift-tab pressed
    if (evt.which == 9) {

        // get list of all children elements in given object
        var o = obj.find('*');

        // get list of focusable items
        var focusableItems;
        focusableItems = o.filter(focusableElementsString).filter(':visible')

        // get currently focused item
        var focusedItem;
        focusedItem = jQuery(':focus');

        // get the number of focusable items
        var numberOfFocusableItems;
        numberOfFocusableItems = focusableItems.length

        // get the index of the currently focused item
        var focusedItemIndex;
        focusedItemIndex = focusableItems.index(focusedItem);

        if (evt.shiftKey) {
            //back tab
            // if focused on first item and user preses back-tab, go to the last focusable item
            if (focusedItemIndex == 0) {
                focusableItems.get(numberOfFocusableItems - 1).focus();
                evt.preventDefault();
            }

        } else {
            //forward tab
            // if focused on the last item and user preses tab, go to the first focusable item
            if (focusedItemIndex == numberOfFocusableItems - 1) {
                focusableItems.get(0).focus();
                evt.preventDefault();
            }
        }
    }

}

function setInitialFocusModal(obj) {
    // get list of all children elements in given object
    var o = obj.find('*');

    // set focus to first focusable item
    var focusableItems;
    focusableItems = o.filter(focusableElementsString).filter(':visible').first().focus();

}

function enterButtonModal() {
    // BEGIN logic for executing the Enter button action for the modal window
    alert('form submitted');
    // END logic for executing the Enter button action for the modal window
    hideModal();
}

function setFocusToFirstItemInModal(obj){
    // get list of all children elements in given object
    var o = obj.find('*');

    // set the focus to the first keyboard focusable item
    o.filter(focusableElementsString).filter(':visible').first().focus();
}

function showModal(obj) {
    jQuery('#mainPage').attr('aria-hidden', 'true'); // mark the main page as hidden
    jQuery('#modalOverlay').css('display', 'block'); // insert an overlay to prevent clicking and make a visual change to indicate the main apge is not available
    jQuery('#modal').css('display', 'block'); // make the modal window visible
    jQuery('#modal').attr('aria-hidden', 'false'); // mark the modal window as visible

    // attach a listener to redirect the tab to the modal window if the user somehow gets out of the modal window
    jQuery('body').on('focusin','#mainPage',function() {
        setFocusToFirstItemInModal(jQuery('#modal'));
    })

    // save current focus
    focusedElementBeforeModal = jQuery(':focus');

    setFocusToFirstItemInModal(obj);
}

function hideModal() {
    jQuery('#modalOverlay').css('display', 'none'); // remove the overlay in order to make the main screen available again
    jQuery('#modal').css('display', 'none'); // hide the modal window
    jQuery('#modal').attr('aria-hidden', 'true'); // mark the modal window as hidden
    jQuery('#mainPage').attr('aria-hidden', 'false'); // mark the main page as visible

    // remove the listener which redirects tab keys in the main content area to the modal
    jQuery('body').off('focusin','#mainPage');

    // set focus back to element that had it before the modal was opened
    focusedElementBeforeModal.focus();
}

//--- D20 ---//
function rollD20() {
var d20Result = document.getElementById("d20Result");
var d20 = Math.floor(Math.random()*20+1);
  d20Result.innerHTML = d20;
};
 
//--- D12 ---//
function rollD12() {
var d12Result = document.getElementById("d12Result");
var d12 = Math.floor(Math.random()*12+1);
  d12Result.innerHTML = d12;
};

//--- D10 ---//
function rollD10() {
var d10Result = document.getElementById("d10Result");
var d10 = Math.floor(Math.random()*10+1);
  d10Result.innerHTML = d10;
};

//--- D8 ---//
function rollD8() {
var d8Result = document.getElementById("d8Result");
var d8 = Math.floor(Math.random()*8+1);
  d8Result.innerHTML = d8;
};

//--- D6 ---//
function rollD6() {
var d6Result = document.getElementById("d6Result");
var d6 = Math.floor(Math.random()*6+1);
  d6Result.innerHTML = d6;
};

//--- D6 ---//
function rollD4() {
var d4Result = document.getElementById("d4Result");
var d4 = Math.floor(Math.random()*4+1);
  d4Result.innerHTML = d4;
};
