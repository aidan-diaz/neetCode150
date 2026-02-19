/* You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

Each row must contain the digits 1-9 without duplicates.
Each column must contain the digits 1-9 without duplicates.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
Return true if the Sudoku board is valid, otherwise return false

Note: A board does not need to be full or be solvable to be valid.

Example 1:



Input: board =
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: true
Example 2:

Input: board =
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: false
Explanation: There are two 1's in the top-left 3x3 sub-box.

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'. */

//MY SOLUTION

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = new Array(9).fill(0).map(() => new Set())
        const columnMap = new Array(9).fill(0).map(() => new Set())
        const squareMap = new Array(9).fill(0).map(() => new Set())

        for(let r = 0; r < 9; r++) {
            for(let c = 0; c < 9; c++) {
                if(board[r][c] === '.') continue
                const squareIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)
                if(rowMap[r].has(board[r][c]) ||
                    columnMap[c].has(board[r][c]) ||
                    squareMap[squareIndex].has(board[r][c])) {
                        return false
                }
                rowMap[r].add(board[r][c])
                columnMap[c].add(board[r][c])
                squareMap[squareIndex].add(board[r][c])                                   
                
            }
        }

        return true
    }
}


//input 2d arr of 9 arrays, each containing 9 strs
//return true if board is valid sudoku (no digit dups in any of the 3 x 3 sub boxes, rows, or columns)
//return false otherwise
//'.' does not count as a dup, just an empty digit container
//for rows, check individual arrs to see if any dups
//for columns, check same index of each arr to see if any dups
//for 3x3 sub boxes, first three digits of first three arrs, then next three of first three arrs, then final 3
//repeat previous step with next three arrs, and final three arrs

//could make a map and give each num its row and column index as values
//also need to store what square it is in
//don't store a value if there is no digit in a square