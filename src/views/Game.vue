<template>
    <div id="game">
        <scoreboard-component />
      <div id="choices">
        <button @click="select(0)">Rock</button>
        <button @click="select(1)">Paper</button>
        <button @click="select(2)">Scissors</button>
      </div>
      <div id="players">
        <player-component />
        <div id="game-rules">
          <h2><u>Rules of the Game:</u></h2>
          <p>Click a button to play!</p>
          <ul>
            <li>Scissors cuts Paper</li>
            <li>Paper covers Rock</li>
            <li>Rock crushes Scissors</li>
          </ul>
        </div>
        <computer-component />
      </div>
        <logout-button></logout-button>
    </div>
</template>

<script>
import LogoutButton from "@/components/LogoutButton.vue"
import ScoreboardComponent from "@/components/ScoreboardComponent.vue";
import PlayerComponent from "@/components/PlayerComponent.vue";
import ComputerComponent from "@/components/ComputerComponent.vue";

export default {
    name: "Game",
    components: {
      PlayerComponent,
      ComputerComponent,
      ScoreboardComponent,
      LogoutButton
    },
    computed: {
      token() {
        return this.$store.state.token;
      }
    },
    created() {
      if(!this.token) {
        this.$router.push({name: "login"});
      }
    },
    data: function() {
    return {
      gameElement: [
        {
          name: "Rock",
          image: "@/src/assets/rock.png"
        },
        {
          name: "Paper",
          image: "@/src/assets/paper.png"
        },
        {
          name: "Scissors",
          image: "@/src/assets/scissors.png"
        },
      ],
      gameRules: {
        Rock: {
          Rock: 0,
          Paper: -1,
          Scissors: 1,
        },
        Paper: {
          Rock: 1,
          Paper: 0,
          Scissors: -1,
        },
        Scissors: {
          Rock: -1,
          Paper: 1,
          Scissors: 0,
        },
      },
    };
  },
  methods: {
    select: function(index) {
      let userSelection = this.gameElement[index];
      let computerSelection = this.gameElement[Math.floor(Math.random() * 5)];
      // console.log(this.gameRules[userSelection.name]);
      let results = this.gameRules[userSelection.name][computerSelection.name];
      console.log(results);
      this.$store.commit("updateUser", userSelection);
      this.$store.commit("updateComputer", computerSelection);
      this.$store.commit("updateResults", results);
    },
  }
};


  
</script>

<style scoped>
#title {
  margin-bottom: 5vw;
  font-family: "Press Start 2P", cursive;
  line-height: 3vh;
}
#logout-btn {
  box-shadow: 2px 0px 5px rgb(56, 56, 56);
  border: 1px solid rgb(114, 27, 27);
  color: rgb(114, 27, 27);
  padding: 5px;
  font-weight: bold;
  border-radius: 7%;
  width: 10%;
  margin-left: 43.5%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
}
#logout-btn:hover {
  transform: scale(0.9);
}
#players {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  justify-items: center;
  object-fit: cover;
  margin-top: 1vw;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-bottom: 7vw;
}
#choices {
  text-align: center;
  align-items: center;
  justify-items: center;
  width: 25%;
  margin: 1vw;
}
button {
  margin: 5px;
  background-color: rgb(114, 27, 27);
  color: white;
  padding: 7px;
  font-size: 14px;
  border-radius: 7%;
  width: 100px;
  cursor: pointer;
  box-shadow: 2px 0px 5px rgb(56, 56, 56);
  font-family: "Bangers", cursive;
  letter-spacing: 3px;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
}
button:hover {
  transform: scale(0.9);
}
#game-rules {
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  align-items: center;
  justify-items: center;
  border: 1px solid black;
  padding: 5px;
  color: rgb(114, 27, 27);
  line-height: 3vh;
  font-family: "Bangers", cursive;
  letter-spacing: 3px;
}
ul {
  text-align: left;
}
</style>