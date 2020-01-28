const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  addOrReplacement(key, value) {
    this[key] = value;
  },
  show() {
    for (const key of Object.keys(this)) {
      console.log(`${key}:${this[key]}`);
    }
  },
  start() {
    this.addOrReplacement('mood', 'happy');
    this.addOrReplacement('hobby', 'skydiving');
    this.addOrReplacement('premium', false);
    this.show();
  },
};
user.start();
