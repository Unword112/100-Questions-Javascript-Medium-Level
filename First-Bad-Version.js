var solution = function(isBadVersion) {
    return function(n) {
        let start = 1;
        let end = n;

        while(start < end) { 
            let mid = Math.floor((end + start) / 2);
            if(isBadVersion(mid)) end = mid;
            else {
                if(start === mid) return end;
                start = mid;
            } 
        }
        return end;
    };
};

var n = 5;
var isBadVersion = 4;

console.log(solution());