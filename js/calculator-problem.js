// This is the same thing as $(document).ready()
// it is simply the short hand version
// It also keeps all of our variables local to this script
$(function() {

    // Global Varaibles
    window.total = 0,
    window.lastOperator = '';
    window.lastNumberHit = false;


     /* When an operator is clicked, we want it to
      * do the operation, as well as update the
      * running total
      *     GOALS:
      *         - set the last number it to false
      *         - get the number from the screen
      *         - add/subtract the number and add it to the total
      *         - clear the output
      */
    $('.operator').on('click', function() {
        // INSERT CODE HERE!
    });
    /* Update the screen with the last number hit
     * as well as the global variable
     *      GOALS:
     *          - get the output
     *          - make sure the output doesn't go past 9 digits
     *          - add the 'just entered' output to the running output
     *          - update the last number hit
     */
    $('.number').on('click', function() {
        // INSERT CODE HERE!
    });
    // Add it up and display the total
    $('.equals').on('click', function() {
        total = window.total;
        if (window.lastNumberHit === false) {

        } else {
            if (window.lastOperator == 'add') {
                total = add(window.lastNumberHit, total);
            } else if (window.lastOperator == 'subtract') {
                total = subtract(total, window.lastNumberHit);
            }
            window.total = total;
        }
        $('.output').val(window.total);
    });
    // Clear ALL the things
    $('.clear').on('click', function() {
        // INSERT CODE HERE!
    });
    // Add 2 numbers (the total as well as a new number)
    function add (num1,num2) {
        // INSERT CODE HERE!
    };
    // Subtract 2 numbers (the total as well as a new number)
    function subtract(num1,num2) {
        // INSERT CODE HERE!
    };
    // Display the total on the output screen
    function displayTotal(total) {
        // INSERT CODE HERE!
    };
    // clear the output so it is completely blank
    function clearOutput() {
        // INSERT CODE HERE!
    };
    // reset all the global variables
    // to the original values
    function resetVariables() {
        // INSERT CODE HERE!
    };
});
