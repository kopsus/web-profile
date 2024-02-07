export const AnimatedOut = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
}

export const AnimatedShowTop = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
}

export const AnimatedShowTopWhileInView = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    transition: {
      duration: 2,
    },
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
}

export const AnimatedShowBottom = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

export const AnimatedShowRight = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
}

export const AnimatedShowLeft = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
}
