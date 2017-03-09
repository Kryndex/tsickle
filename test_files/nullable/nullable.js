goog.module('test_files.nullable.nullable');var module = module || {id: 'test_files/nullable/nullable.js'};class Primitives {
}
function Primitives_tsickle_Closure_declarations() {
    /** @type {(null|string)} */
    /** @type {(null|string)} */
    Primitives.prototype.nullable;
    /** @type {(undefined|number)} */
    /** @type {(undefined|number)} */
    Primitives.prototype.undefinable;
    /** @type {(undefined|null|string)} */
    /** @type {(undefined|null|string)} */
    Primitives.prototype.nullableUndefinable;
    /** @type {(undefined|string)} */
    /** @type {(undefined|string)} */
    Primitives.prototype.optional;
}
class NonPrimitive {
}
class NonPrimitives {
}
function NonPrimitives_tsickle_Closure_declarations() {
    /** @type {!NonPrimitive} */
    /** @type {!NonPrimitive} */
    NonPrimitives.prototype.nonNull;
    /** @type {(null|!NonPrimitive)} */
    /** @type {(null|!NonPrimitive)} */
    NonPrimitives.prototype.nullable;
    /** @type {(undefined|!NonPrimitive)} */
    /** @type {(undefined|!NonPrimitive)} */
    NonPrimitives.prototype.undefinable;
    /** @type {(undefined|null|!NonPrimitive)} */
    /** @type {(undefined|null|!NonPrimitive)} */
    NonPrimitives.prototype.nullableUndefinable;
    /** @type {(undefined|!NonPrimitive)} */
    /** @type {(undefined|!NonPrimitive)} */
    NonPrimitives.prototype.optional;
}
/**
 * @param {(string|number)} val
 * @return {void}
 */
function takesNonNullable(val) { }
let /** @type {{field: (null|string|number)}} */ x = { field: null };
takesNonNullable(/** @type {(string|number)} */ ((x.field)));
