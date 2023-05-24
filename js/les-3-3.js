function loop_num(X) {
    if (X <= 1) {
        return
    }
    else {
        alert(X - 1)
        loop_num(X - 1)
    }
}

loop_num(8)