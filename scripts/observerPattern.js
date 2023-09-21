function createObservable() {
  return {
    subscribers: [],

    subscribe(fn) {
      this.subscribers.push(fn);
    },

    unsubscribe(fn) {
      this.subscribers = this.subscribers.filter((item) => item !== fn);
    },

    broadcast(data) {
      for (let i = 0; i < this.subscribers.length; i++) {
        this.subscribers[i](data);
      }
    },
  };
}

const observer = createObservable();

function callBackFn(count) {
  document.getElementById("count").innerText = count;
}

observer.subscribe(callBackFn);

document.getElementById("inc").addEventListener("click", function () {
  observer.broadcast(
    parseInt(document.getElementById("count").innerText, 10) + 1
  );
});

document.getElementById("dec").addEventListener("click", function () {
  observer.broadcast(document.getElementById("count").innerText - 1);
});
