class Index {
  list() {
    this.$context.response.setHeader('Connection', 'close');
    return 'Hello world';
  }
  alive() {
    return 'Hello world';
  }
}

module.exports = Index;