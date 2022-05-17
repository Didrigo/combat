function TimeCounter(speed = 0, handle) {
    const timer = setTimeout(() => {
      console.log('This will run after 5 second!')
    }, 2000   - speed);
    return () => clearTimeout(timer);
}

export default TimeCounter;