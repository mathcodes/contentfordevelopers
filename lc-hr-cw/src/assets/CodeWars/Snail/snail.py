def snail(snail_map):
    if snail_map == [[]]: return []
    ret = []
    while len(snail_map) > 0:
        ret += snail_map[0]
        del snail_map[0]
        if len(snail_map) <= 0: break
        for row in snail_map:
            ret += [row[-1]]
            del row[-1]
        if len(snail_map) <= 0: break
        ret += snail_map[-1][::-1]
        del snail_map[-1]
        if len(snail_map) <= 0: break
        for row in reversed(snail_map):
            ret += [row[0]]
            del row[0]
    return ret

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]

snail(array)