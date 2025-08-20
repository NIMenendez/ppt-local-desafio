export type Move = "rock" | "paper" | "scissors";

type Game = {
  clientMove: Move,
  pcMove: Move
};

const state = {
  data: {
    currentGame: {
      clientMove: null as Move | null,
      pcMove: null as Move | null,
    },
    historyByTurn: [] as Game[],
    scores: {
      myScore: 0,
      pcScore: 0,
    },
  },

  subscribers: [] as Function[],

  subscribe(callback: Function) {
    this.subscribers.push(callback);
  },

  getState() {
    return this.data;
  },

  setState(newState: Partial<typeof state.data>) {
    this.data = {
      ...this.data,
      ...newState,
      currentGame: {
        ...this.data.currentGame,
        ...(newState.currentGame || {}),
      },
      scores: {
        ...this.data.scores,
        ...(newState.scores || {}),
      },
    };

    this.subscribers.forEach(callback => callback(this.data));

    // ✅ Guardar siempre en localStorage
    this.saveToLocalStorage();
  },

  setMoves(move: Move) {
    const pcMove = this.getRandomMove();
    this.setState({
      currentGame: {
        clientMove: move,
        pcMove,
      },
    });
  },

  getRandomMove(): Move {
    const moves: Move[] = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random() * moves.length)];
  },

  pushToHistory(turn: Game) {
    const newHistory = [...this.data.historyByTurn, turn];
    this.setState({ historyByTurn: newHistory });
  },

  getWinner(clientMove: Move, pcMove: Move) {
    if (clientMove === pcMove) return "tie";

    const winsAgainst: Record<Move, Move> = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (winsAgainst[clientMove] === pcMove) {
      return "clientWins";
    } else {
      return "pcWins";
    }
  },

  playGame(playerChoice: Move) {
    if (this.data.currentGame.pcMove === null) return; // seguridad

    const winner = this.getWinner(playerChoice, this.data.currentGame.pcMove);

    if (winner === "clientWins") {
      this.setState({
        scores: {
          myScore: this.data.scores.myScore + 1,
        },
      });
    } else if (winner === "pcWins") {
      this.setState({
        scores: {
          pcScore: this.data.scores.pcScore + 1,
        },
      });
    }
  },

  saveToLocalStorage() {
    localStorage.setItem('gameState', JSON.stringify(this.data));
  },

  loadFromLocalStorage() {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
      this.data = JSON.parse(savedState);
      this.subscribers.forEach(callback => callback(this.data));
    }
  },

  // ✅ Método para reiniciar scores solo cuando vos quieras
  resetScores() {
    this.setState({
      scores: { myScore: 0, pcScore: 0 },
    });
  }
};

export { state };
