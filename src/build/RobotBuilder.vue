<template>
  <div>
    <div class="top-row">
      <div class="top part">
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
</template>

<script>
import parts from "../data/parts";

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

function getPrevValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts: parts,
      selectedHeadIndex: 0,
      selectedRightArmsIndex: 0,
      selectedTorsoIndex: 0,
      selectedBasesIndex: 0,
      selectedLeftArmsIndex: 0,
    };
  },
  computed: {
    selectedRobot() {
      return {
        head: this.availableParts.heads[this.selectedHeadIndex],
        leftArm: this.availableParts.arms[this.selectedLeftArmsIndex],
        torso: this.availableParts.torsos[this.selectedTorsoIndex],
        rightArm: this.availableParts.arms[this.selectedRightArmsIndex],
        base: this.availableParts.bases[this.selectedBasesIndex],
      };
    },
  },
  methods: {
    selectNextHead() {
      this.selectedHeadIndex = getNextValidIndex(this.selectedHeadIndex, this.availableParts.heads.length);
    },
    selectPrevHead() {
      this.selectedHeadIndex = getPrevValidIndex(this.selectedHeadIndex, this.availableParts.heads.length);
    },
    selectNextRightArms() {
      this.selectedRightArmsIndex = getNextValidIndex(this.selectedRightArmsIndex, this.availableParts.arms.length);
    },
    selectPrevRightArms() {
      this.selectedRightArmsIndex = getPrevValidIndex(this.selectedRightArmsIndex, this.availableParts.arms.length);
    },
    selectNextLeftArms() {
      this.selectedLeftArmsIndex = getNextValidIndex(this.selectedLeftArmsIndex, this.availableParts.arms.length);
    },
    selectPrevLeftArms() {
      this.selectedLeftArmsIndex = getPrevValidIndex(this.selectedLeftArmsIndex, this.availableParts.arms.length);
    },
    selectNextTorsos() {
      this.selectedTorsoIndex = getNextValidIndex(this.selectedTorsoIndex, this.availableParts.torsos.length);
    },
    selectPrevTorsos() {
      this.selectedTorsoIndex = getPrevValidIndex(this.selectedTorsoIndex, this.availableParts.torsos.length);
    },
    selectNextBases() {
      this.selectedBasesIndex = getNextValidIndex(this.selectedBasesIndex, this.availableParts.bases.length);
    },
    selectPrevBases() {
      this.selectedBasesIndex = getPrevValidIndex(this.selectedBasesIndex, this.availableParts.bases.length);
    },
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
</style>