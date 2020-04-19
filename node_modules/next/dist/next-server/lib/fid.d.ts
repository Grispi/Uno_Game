/**
 * This is a modified version of the First Input Delay polyfill
 * https://github.com/GoogleChromeLabs/first-input-delay
 *
 * It checks for a first input before and after hydration
 */
declare type addEventListener = (type: string, listener: EventListener, listenerOpts: EventListenerOptions) => void;
declare type removeEventListener = addEventListener;
declare function fidPolyfill(addEventListener: addEventListener, removeEventListener: removeEventListener): void;
export default fidPolyfill;
