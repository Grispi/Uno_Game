"use strict";
/**
 * This is a modified version of the First Input Delay polyfill
 * https://github.com/GoogleChromeLabs/first-input-delay
 *
 * It checks for a first input before and after hydration
 */
Object.defineProperty(exports, "__esModule", { value: true });
function fidPolyfill(addEventListener, removeEventListener) {
    var firstInputEvent;
    var firstInputDelay;
    var firstInputTimeStamp;
    var callbacks = [];
    var listenerOpts = { passive: true, capture: true };
    var startTimeStamp = +new Date();
    var pointerup = 'pointerup';
    var pointercancel = 'pointercancel';
    function onInputDelay(callback) {
        callbacks.push(callback);
        reportInputDelayIfRecordedAndValid();
    }
    function recordInputDelay(delay, evt) {
        firstInputEvent = evt;
        firstInputDelay = delay;
        firstInputTimeStamp = +new Date();
        reportInputDelayIfRecordedAndValid();
    }
    function reportInputDelayIfRecordedAndValid() {
        var hydrationMeasures = performance.getEntriesByName('Next.js-hydration', 'measure');
        var firstInputStart = firstInputTimeStamp - startTimeStamp;
        if (firstInputDelay >= 0 &&
            firstInputDelay < firstInputStart &&
            (hydrationMeasures.length === 0 ||
                hydrationMeasures[0].startTime < firstInputStart)) {
            callbacks.forEach(function (callback) {
                callback(firstInputDelay, firstInputEvent);
            });
            // If the app is already hydrated, that means the first "post-hydration" input
            // has been measured and listeners can be removed
            if (hydrationMeasures.length > 0) {
                eachEventType(removeEventListener);
                callbacks = [];
            }
        }
    }
    function onPointerDown(delay, evt) {
        function onPointerUp() {
            recordInputDelay(delay, evt);
        }
        function onPointerCancel() {
            removePointerEventListeners();
        }
        function removePointerEventListeners() {
            removeEventListener(pointerup, onPointerUp, listenerOpts);
            removeEventListener(pointercancel, onPointerCancel, listenerOpts);
        }
        addEventListener(pointerup, onPointerUp, listenerOpts);
        addEventListener(pointercancel, onPointerCancel, listenerOpts);
    }
    function onInput(evt) {
        if (evt.cancelable) {
            var isEpochTime = evt.timeStamp > 1e12;
            var now = isEpochTime ? +new Date() : performance.now();
            var delay = now - evt.timeStamp;
            if (evt.type === 'pointerdown') {
                onPointerDown(delay, evt);
            }
            else {
                recordInputDelay(delay, evt);
            }
        }
    }
    function eachEventType(callback) {
        var eventTypes = [
            'click',
            'mousedown',
            'keydown',
            'touchstart',
            'pointerdown',
        ];
        eventTypes.forEach(function (eventType) {
            callback(eventType, onInput, listenerOpts);
        });
    }
    eachEventType(addEventListener);
    var context = self;
    context['hydrationMetrics'] = context['hydrationMetrics'] || {};
    context['hydrationMetrics']['onInputDelay'] = onInputDelay;
}
exports.default = fidPolyfill;
