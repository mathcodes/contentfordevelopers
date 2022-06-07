// 695. Max Area of Island

// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.



var maxAreaOfIsland = function (grid) {
	function add(list, i, j) {
		if (!list)
			return;
		for (var k = 0; k < list.length; ++k) {
			if (list[k].i === i && list[k].j === j)
				return false;
		}
		list.push({ i, j });
		return true;
	}
	function deepLook(i, j, list) {
		if (!list)
			list = [];
		if (grid[i][j]) {
			add(list, i, j);
		}
		if (j > 0 && grid[i][j - 1]) {
			if (add(list, i, j - 1)) {
				deepLook(i, j - 1, list);
			}
		}
		if (i < grid.length - 1 && grid[i + 1][j]) {
			if (add(list, i + 1, j)) {
				deepLook(i + 1, j, list);
			}
		}
		if (grid.length && j < grid[0].length - 1 && grid[i][j + 1]) {
			if (add(list, i, j + 1)) {
				deepLook(i, j + 1, list);
			}
		}
		if (i > 0 && grid[i - 1][j]) {
			if (add(list, i - 1, j)) {
				deepLook(i - 1, j, list);
			}
		}
		return list.length;
	}
	function areaCount(i, j) {
		if (j > 0 && grid[i][j - 1])// count
			return 0;
		if (i > 0 && grid[i - 1][j])
			return 0;
		return deepLook(i, j);
	}
	var max = 0;
	for (var i = 0; i < grid.length; ++i) {
		for (var j = 0; j < grid[i].length; ++j) {
			var obj = grid[i][j];
			if (obj) {
				var temp = areaCount(i, j);
				max = temp > max ? temp : max;
			}
		}
	}
	return max;
};
