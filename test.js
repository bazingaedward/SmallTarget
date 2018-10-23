hel
/**
 * 面试-算法题
 * 我手中有一堆扑克牌， 但是观众不知道它的顺序。
 * 第一步， 我从牌顶拿出一张牌， 放到桌子上。
 * 第二步， 我从牌顶再拿一张牌， 放在手上牌的底部。
 * 第三步， 重复第一步、第二步的操作， 直到我手中所有的牌都放到了桌子上。
 * 最后， 观众可以看到桌子上牌的顺序是：(牌底部）1,2,3,4,5,6,7,8,9,10,11,12,13(牌顶部）
 * 请问， 我刚开始拿在手里的牌的顺序是什么？
 */

// var a = [1,2,3,4,5,6]
// // var a = [1,2,3,4,5,6,7,8,9,10,11,12,13]

// function sort(arr){

//     if(arr.length <= 2){
//         return arr
//     }else {
//         var odd = [];
//         var even = [];
//         arr.forEach((item, idx) => {
//             if(idx % 2 === 0){
//                 odd.push(item)
//             }else {
//                 even.push(item)
//             }
//         })

//         return odd.concat(sort(even))
//     }
// }

// // console.log(sort(a))
// // [ 1, 3, 5, 2, 6, 4 ]

// b = [ 1, 3, 5, 2, 6, 4 ]
// // 解法1
// function revert(arr){

//     if(arr.length <= 2){
//         return arr
//     }else {
//         var half = Math.ceil(arr.length/2);
//         return mergeList(arr.slice(0, half), revert(arr.slice(half, arr.length)))
//     }
// }

// function mergeList(A, B){
//     var result = [];

//     while(A.length || B.length){
//         if(A.length){
//             result.push(A.shift())
//         }

//         if(B.length){
//             result.push(B.shift())
//         }
//     }

//     return result;
// }

// // console.log(revert(a))
// // [ 1, 8, 2, 11, 3, 9, 4, 13, 5, 10, 6, 12, 7 ]

// // 解法2
// function revert2(arr){

//     let length = arr.length;
//     let type = length % 2 === 0 ? 'even' : 'odd';

//     let result = [];

//     // switch(type){
//     //     case 'even':
//     //         result.unshift(arr.pop())
//     //         result.unshift(arr.pop())
//     //         break;
//     //     case 'odd':
//     //         result.push(arr.pop())
//     //         result.push(arr.pop())
//     // }

//     for(var i=length; i>0; i--){
//         if(result.length){
//             result.unshift(result.pop())
//         }
        
//         result.unshift(arr[i-1])
//         console.log(result)

//     }
//     return result;

// }
// c = revert2(a)


/**
 * 正则匹配捕获
 */

// // JS编码实现一个render方法，使得可以这样调用，例如
// var year = '2017';
// var month = '09';
// var day = '21';
// // const str = render('${year}-${month}-${day}'); console.log(str);
// // 输出 2017-09-21

// function render(srcString){

//     return srcString.match(/((?<=\$\{)\w+(?=\}))/g).map(valName => eval(valName)).join('-')

// }

// console.log(render('${year}-${month}-${day}'))
