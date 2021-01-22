/**
 * 731. My Calendar II
 */class MyCalendarTwo {
  constructor() {
    this.events = [];
    this.overlaps = [];
  }

  _overlaps(start, end) {
    for (let [s, e] of this.overlaps) {
      if (s < end && start < e) {
        return true;
      }
    }

    return false;
  }

  book(start, end) {
    if (this._overlaps(start, end)) {
      return false;
    }

    for (let [s, e] of this.events) {
      if (s < end && start < e) {
        this.overlaps.push([Math.max(start,s), Math.min(end, e)]);
      }
    }
    this.events.push([start, end]);

    return true;
  }
}
