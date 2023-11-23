<template>
  <div class="content">
    <button class="add-to-cart" @:click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <div class="top part">
        <div class="robot-name">
          {{ selectedRobot.head.title }}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
        <img :src="selectedRobot.head.imageUrl" alt="head" />
        <button @:click="selectPrevHead()" class="prev-selector">&#9668;</button>
        <button @:click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.imageUrl" alt="left arm" />
        <button @:click="selectPrevLeftArms()" class="prev-selector">&#9668;</button>
        <button @:click="selectNextLeftArms()" class="next-selector">&#9658;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.imageUrl" alt="torso" />
        <button @:click="selectPrevTorsos()" class="prev-selector">&#9668;</button>
        <button @:click="selectNextTorsos()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.imageUrl" alt="right arm" />
        <button @:click="selectPrevRightArms()" class="prev-selector">&#9668;</button>
        <button @:click="selectNextRightArms()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.imageUrl" alt="base" />
        <button @:click="selectPrevBases()" class="prev-selector">&#9668;</button>
        <button @:click="selectNextBases()" class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th>Roboto</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td>{{ robot.head.title }}</td>
          <td class="cost">{{ toCurrency(robot.cost) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed } from "vue";
import parts from "../data/parts";
import { toCurrency } from "../shared/formatters"

export default {
  name: 'RobotBuilder',
  setup() {
    function getNextValidIndex(index, length) {
      const incrementedIndex = index + 1;
      return incrementedIndex > length - 1 ? 0 : incrementedIndex;
    }

    function getPrevValidIndex(index, length) {
      const deprecatedIndex = index - 1;
      return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
    }


    const availableParts = parts;
    let selectedHeadIndex = 0;
    let selectedRightArmsIndex = 0;
    let selectedTorsoIndex = 0;
    let selectedBasesIndex = 0;
    let selectedLeftArmsIndex = 0;
    const cart = [];

    const selectedRobot = computed(() => ({
      head: availableParts.heads[selectedHeadIndex],
      leftArm: availableParts.arms[selectedLeftArmsIndex],
      torso: availableParts.torsos[selectedTorsoIndex],
      rightArm: availableParts.arms[selectedRightArmsIndex],
      base: availableParts.bases[selectedBasesIndex],
    }));

    const selectNextHead = () => {
      selectedHeadIndex = getNextValidIndex(selectedHeadIndex, availableParts.heads.length);
    };
    const selectPrevHead = () => {
      selectedHeadIndex = getPrevValidIndex(selectedHeadIndex, availableParts.heads.length);
    };
    const selectNextRightArms = () => {
      selectedRightArmsIndex = getNextValidIndex(selectedRightArmsIndex, availableParts.arms.length);
    };
    const selectPrevRightArms = () => {
      selectedRightArmsIndex = getPrevValidIndex(selectedRightArmsIndex, availableParts.arms.length);
    };
    const selectNextLeftArms = () => {
      selectedLeftArmsIndex = getNextValidIndex(selectedLeftArmsIndex, availableParts.arms.length);
    };
    const selectPrevLeftArms = () => {
      selectedLeftArmsIndex = getPrevValidIndex(selectedLeftArmsIndex, availableParts.arms.length);
    };
    const selectNextTorsos = () => {
      selectedTorsoIndex = getNextValidIndex(selectedTorsoIndex, availableParts.torsos.length);
    };
    const selectPrevTorsos = () => {
      selectedTorsoIndex = getPrevValidIndex(selectedTorsoIndex, availableParts.torsos.length);
    };
    const selectNextBases = () => {
      selectedBasesIndex = getNextValidIndex(selectedBasesIndex, availableParts.bases.length);
    };
    const selectPrevBases = () => {
      selectedBasesIndex = getPrevValidIndex(selectedBasesIndex, availableParts.bases.length);
    };
    const addToCart = () => {
      const robot = selectedRobot;
      const cost = robot.head.cost + robot.base.cost + robot.leftArm.cost + robot.rightArm.cost + robot.torso.cost;
      cart.push({ ...robot, cost });
    };

    return {
      availableParts,
      selectedHeadIndex,
      selectedRightArmsIndex,
      selectedTorsoIndex,
      selectedBasesIndex,
      selectedLeftArmsIndex,
      cart,
      selectedRobot,
      toCurrency,
      selectNextHead,
      selectPrevHead,
      selectNextRightArms,
      selectPrevRightArms,
      selectNextLeftArms,
      selectPrevLeftArms,
      selectNextTorsos,
      selectPrevTorsos,
      selectNextBases,
      selectPrevBases,
      addToCart
    };
  },
};

</script>

<style>
.part {
  position: relative;
  width: 200px;
  height: 200px;
  border: 3px solid #aaa;
}

.part img {
  width: 200px;
}

.top-row {
  display: flex;
  justify-content: space-around;
}

.middle-row {
  display: flex;
  justify-content: center;
}

.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}

.top {
  border-bottom: none;
}

.left {
  border-right: none;
}

.right {
  border-left: none;
}

.left img {
  transform: rotate(-90deg);
}

.right img {
  transform: rotate(90deg);
}

.bottom {
  border-top: none;
}

.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 206px;
}

.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 206px;
}

.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}

.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 179px;
  height: 25px;
}

.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 179px;
  height: 25px;
}

.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 179px;
  height: 25px;
}

.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 179px;
  height: 25px;
}

.right .next-selector {
  right: -3px;
}

.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.sale {
  color: red;
}

.content {
  position: relative;
}

.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}

td,
th {
  text-align: left;
  padding: 5px;
  padding-right: 20xp;
}

.cost {
  text-align: right;
}
</style>