/**
 * @param {string[]} strs
 * @return {string}
 */
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
var longestCommonPrefix = function(strs) {
    let ans=strs[0],res="",res2="";
    for (let i =1; i<strs.length; i++){
    console.log("ans",ans)
        // flower","flow","flight"
    for (let j =0; j<ans.length; j++){
        // flow
        console.log("ans",ans)
        console.log("ans.length|,",ans.length)
        console.log("strs",strs[i][j])
        console.log("ans[j]",ans[j])
        if(strs[i][j]==ans[j]){
        res+=(ans[j]);
        console.log("res",res)
        } 
    }
        ans=res;
            console.log(res)
            res="";
     
            console.log("res",ans)
   
   

    }
    return ans
    
};
 strs = ["flower","flow","flight"] 
 console.log(longestCommonPrefix(strs))