class Solution:
	def generateParenthesis(self, n: int) -> List[str]:
			l = []
			def generateParenthesisInner(open_cnt, close_cnt, s):
					if not open_cnt and not close_cnt:
							l.append(s)
							return                     
					if open_cnt <= close_cnt:                
							if open_cnt:
									generateParenthesisInner(open_cnt - 1, close_cnt, s + '(')
							if close_cnt:
									generateParenthesisInner(open_cnt, close_cnt - 1, s + ')')
					
			generateParenthesisInner(n, n, '')
			return l

print(l)