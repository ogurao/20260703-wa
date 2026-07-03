Vue.createApp({
  data() {
    return {
      emoji: "❓",
      name: "感情を選んでください",
      description: ""
    };
  },
  methods: {
    showAnimal(animal) {
      if (animal === "joy") {
        this.emoji = "😆";
        this.name = "喜";
        this.description = "物事がうまくいったり、嬉しいことがあったりしたときの幸福感。";
      } else if (animal === "anger") {
        this.emoji = "😡";
        this.name = "怒";
        this.description = "不条理なことや意に沿わないことに対する憤りや不満。";
      } else if (animal === "sorrow") {
        this.emoji = "😢";
        this.name = "哀";
        this.description = "大切なものを失ったり、辛いことがあったりしたときの悲哀や切なさ。";
      }else if (animal === "pleasure") {
        this.emoji = "😊";
        this.name = "楽";
        this.description = "心が穏やかで満たされている状態や、楽しみを見出している心境。";
      }
    }
  }
}).mount("#app");