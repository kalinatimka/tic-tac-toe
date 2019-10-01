class TicTacToe {
    constructor() {
        this.field = new Array(3);
        for (var i = 0; i < this.field.length; i++) {
            this.field[i] = [null, null, null];
        }
        this.turnSymbol = 'x';
        this.winner = '';
        this.counter = 0;
    }
  
    getCurrentPlayerSymbol() {
        return this.turnSymbol;
    }
  
    nextTurn(rowIndex, columnIndex) {
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.turnSymbol;
            if (this.turnSymbol == 'x') {
              this.turnSymbol = 'o';
            }
            else {
              this.turnSymbol = 'x';
            }
            this.counter++;
        }
    }
  
    isFinished() {
        if (this.counter < 5) {
            return false;
        }
        for (var i = 0; i < this.field.length; i++) {
            j = 0;
            if (this.field[i][j] != null) {
                if (this.field[i][j] == this.field[i][j + 1]) {
                    if (this.field[i][j] == this.field[i][j + 2]) {
                        this.winner = this.field[i][j];
                        return true;
                    }
                }
            }
        }
        for (var j = 0; j < this.field.length; j++) {
            i = 0;
            if (this.field[i][j] != null) {
                if (this.field[i][j] == this.field[i + 1][j]) {
                    if (this.field[i][j] == this.field[i + 2][j]) {
                        this.winner = this.field[i][j];
                        return true;
                    }
                }
            }
        }
        if (this.field[1][1] != null) {
            if (this.field[0][0] == this.field[1][1] && this.field[0][0] == this.field[2][2]) {
                this.winner = this.field[0][0];
                return true;
            }
            if (this.field[0][2] == this.field[1][1] && this.field[0][2] == this.field[2][0]) {
                this.winner = this.field[0][2];
                return true;
            }
        }
        for (var i = 0; i < this.field.length; i++) {
          for (var j = 0; j < this.field[i].length; j++) {
              if (this.field[i][j] == null) {
                  return false;
              }
          }
      }
      return true;
    }
  
    getWinner() {
        this.isFinished();
        if (this.winner == "") {
            return null;
        }
        return this.winner;
    }
  
    noMoreTurns() {
        for (var i = 0; i < this.field.length; i++) {
            for (var j = 0; j < this.field[i].length; j++) {
                if (this.field[i][j] == null) {
                    return false;
                }
            }
        }
        return true;
    }
  
    isDraw() {
      if (this.isFinished() && this.winner == '') {
        return true;
      }
      else {
          return false;
      }
    }
  
    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
} 
module.exports = TicTacToe;
