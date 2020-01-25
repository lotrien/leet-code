/**
 * 359. Logger Rate Limiter
 */
class Logger {
  constructor() {
    this.map = new Map();
  }

  shouldPrintMessage(timestamp, msg) {
    if (!this.map.has(msg)) {
      this.map.set(msg, timestamp);
      return true;
    } else {
      const time = this.map.get(msg);
      if (timestamp - time >= 10) {
        this.map.set(msg, timestamp);
        return true;
      }

      return false;
    }
  }
}
