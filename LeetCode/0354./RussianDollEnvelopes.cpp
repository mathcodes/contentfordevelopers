class Solution {
public:
    // comparator function:
    static bool comp(vector<int> &env1, vector<int> &env2){
        if(env1[0] == env2[0]) return env1[1] > env2[1];
        return env1[0] < env2[0]; 
    }
    
    int maxEnvelopes(vector<vector<int>>& envelopes) {
        sort(envelopes.begin(), envelopes.end(), comp);
        
        int max_len = 1;
        int n = envelopes.size();
        
        vector<int> dp(n, 1); 
        
        /*
        // standard LIS Approach:
        for(int i = 1; i < n; i++){
            for(int prev = 0; prev < i; prev++){
                if(envelopes[prev][0] != envelopes[i][0] && envelopes[prev][1] < envelopes[i][1]) 
                    dp[i] = max(dp[prev] + 1, dp[i]);
            }
            max_len = max(dp[i], max_len);
        }
        
        return max_len;
        */
        
        vector<int> temp;
        temp.push_back(envelopes[0][1]);
        
        for(int i = 1; i < n; i++){
            if(envelopes[i][1] > temp.back()) temp.push_back(envelopes[i][1]);
            else{
                int ind = lower_bound(temp.begin(), temp.end(), envelopes[i][1]) - temp.begin();
                temp[ind] = envelopes[i][1];
            }
        }
        
        return temp.size();
    }
};
