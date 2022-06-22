# def intToRoman(self, num: int) -> str:
#     values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]


#     romans = ["M", "CM", "D", "CD", "C", "XC",
#             "L", "XL", "X", "IX", "V", "IV", "I"]
#     ans = ''
#     for i in range(len(values)):
#         r = num//values[i]
#     ans += r*romans[i]
#     num -= r*values[i]

#     return ans  

class Solution:
    def intToRoman(self, num: int) -> str:
        ans = []
        
        while num > 0:
            if num >= 1000:
                ans.append('M')
                num -= 1000
            elif num >= 900:
                ans.append('CM')
                num -= 900
            elif num >= 500:
                ans.append('D')
                num -= 500
            elif num >= 400:
                ans.append('CD')
                num -= 400
            elif num >= 100:
                ans.append('C')
                num -= 100
            elif num >= 90:
                ans.append('XC')
                num -= 90
            elif num >= 50:
                ans.append('L')
                num -= 50
            elif num >= 40:
                ans.append('XL')
                num -= 40
            elif num >= 10:
                ans.append('X')
                num -= 10
            elif num >= 9:
                ans.append('IX')
                num -= 9
            elif num >= 5:
                ans.append('V')
                num -= 5
            elif num >= 4:
                ans.append('IV')
                num -= 4
            elif num >= 1:
                ans.append('I')
                num -= 1
            
        return ''.join(ans)