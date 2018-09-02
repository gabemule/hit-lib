export default {
  /* eslint-disable no-unused-vars */
  install(Vue, options) {
    Vue.prototype.$Alert = new Vue({
      data() {
        return {
          list: [],
          speed: 7000
        }
      },
      methods: {
        clearMessage(id, speed) {
          const time = speed !== undefined ? speed : this.speed;
          setTimeout(() => {
            this.remove(id);
          }, time);
        },

        remove(id) {
          this.list = this.list.filter((item) => {
            if (item.id !== id) {
              return item;
            }
          });
        },

        startProgress(id, speed) {
          const max = 100;
          const spd = (speed !== undefined) ? (speed / max) : (this.speed / max);

          this.list.forEach((item) => {
            if (id === item.id) {
              var progress = setInterval(() => {
                if (item.progress > max) {
                  clearInterval(progress);
                } else {
                  item.progress++;
                }
              }, spd);
            }
          });
        },

        success(message, speed) {
          const id = Math.floor(Math.random() * 999999);
          this.list.push({ status: 'success', message: message, progress: 0, id: id });
          this.clearMessage(id, speed);
          this.startProgress(id, speed);
        },

        warning(message, speed) {
          const id = Math.floor(Math.random() * 999999);
          this.list.push({ status: 'warning', message: message, progress: 0, id: id });
          this.clearMessage(id, speed);
          this.startProgress(id, speed);
        },

        error(message, speed) {
          const id = Math.floor(Math.random() * 999999);
          this.list.push({ status: 'error', message: message, progress: 0, id: id });
          this.clearMessage(id, speed);
          this.startProgress(id, speed);
        },
      },
    });
  }
}