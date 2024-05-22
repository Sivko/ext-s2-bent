function on(elSelector: string, eventName: string, selector: string, fn: (event: Event) => void) {
  const element = document.querySelector(elSelector) as HTMLElement;

  element.addEventListener(eventName, (event) => {
    const possibleTargets = element.querySelectorAll(selector);
    const target = event.target as Element;

    for (let i = 0, l = possibleTargets.length; i < l; i++) {
      let el: Element | null = target;
      const p = possibleTargets[i] as Element;

      while (el && el !== element) {
        if (el === p) {
          return fn.call(p, event);
        }

        el = el.parentNode as Element;
      }
    }
  });
}


export default on;