const PubSub = (function() {
    const events = {};
  
    function subscribe(eventName, callback) {
      if (!events[eventName]) {
        events[eventName] = [];
      }
      events[eventName].push(callback);
    }
  
    function publish(eventName, data) {
      if (!events[eventName]) {
        return;
      }
      events[eventName].forEach(callback => {
        callback(data);
      });
    }
  
    function unsubscribe(eventName, callback) {
      if (!events[eventName]) {
        return;
      }
      events[eventName] = events[eventName].filter(cb => cb !== callback);
    }
  
    return {
      subscribe,
      publish,
      unsubscribe,
    };
  })();
  
  export default PubSub;
  