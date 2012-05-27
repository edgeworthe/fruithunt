/* adapted from mybot.js, found out about it from
   http://coding.scribd.com/2012/05/24/compete-against-our-developers/ */

function new_game() {
    // TODO: make this global
    var item_types_count = get_number_of_item_types();
    // TODO: stash info in a global counter
    for(i=0;i<item_types_count;i++) {
        get_total_item_count(i);
    }
    // TODO: grab locations of all fruit at start and cache it
    /* 
 get_my_item_count(type) / get_opponent_item_count(type)
 trace(string) to dump into game log
    */
}

function make_move() {
    var board = get_board();

    var my_x = get_my_x();
    var my_y = get_my_y();
    var other_x = get_opponent_x();
    var other_y = get_opponent_y();
    
    // fruit on my square, take it
    if(board[my_x][my_y] > 0) {
        return TAKE;
    }

    //var rand = Math.random() * 4;
    // "boards can at most be 15×15 and have 25 items."
    if(my_x > HEIGHT/2) {
        return WEST;
    } else if(my_y > WIDTH/2) {
        return NORTH;
    } else {
        return SOUTH;
    }
    return PASS;
}

