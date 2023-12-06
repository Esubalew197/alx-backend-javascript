/**
 *  function that prints teacher
 * @param firstName - firstname of the user
 * @param lastName - lastname of the user
 * @returns {string}
 */
export function printTeacher(firstName, lastName) {
    return firstName[0] + ". " + lastName;
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this._firstName;
    };
    return StudentClass;
}());
export { StudentClass };
export function createStudent(className, firstName, lastName) {
    return new className(firstName, lastName);
}
//# sourceMappingURL=main.js.map