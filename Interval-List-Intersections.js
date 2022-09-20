var intervalIntersection = (firstList, secondList) => {
    var ans = [];
    let i = 0, j = 0;
    let a = firstList;
    let b = secondList;

    while(i < a.length && j < b.length){
        let start = Math.max(a[i][0], b[j][0]);
        let end = Math.min(a[i][1], b[j][1]);
        
        if(start <= end) ans.push([start, end]);

        if(a[i][1] < b[j][1]) i++;
        else j++;
    }
    return ans;
}

const test1 = intervalIntersection([[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]]);
const test2 = intervalIntersection([[1,3],[5,9]], []);

console.log(test1, test2);